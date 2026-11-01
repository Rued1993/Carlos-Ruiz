/**
 * Actualización por modo, bucle de render 3D y fallback a 2D.
 */
'use strict';

function updClassic3D() {
  const g = G,
    p = g.player,
    L = R3.L,
    t = g.t,
    fx = Math.cos(CAM.yaw),
    fz = Math.sin(CAM.yaw),
    lights = g.sab && g.sab.type == 'lights';
  L.pl.position.set(p.x, 62, p.y);
  L.spot.position.set(p.x + fx * 10, 58, p.y + fz * 10);
  L.spot.target.position.set(p.x + fx * 320, 14, p.y + fz * 320);
  L.spot.intensity = p.alive ? (lights && !p.imp ? 0.7 : 2.4) : 0;
  L.amb.intensity = !p.alive ? 1.2 : lights ? 0.1 + 0.05 * Math.sin(t * 30) : 0.6;
  L.hemi.color.set(g.sab && g.sab.type == 'reactor' ? 0xff3030 : 0x8fb0ff);
  L.hemi.intensity = g.sab && g.sab.type == 'reactor' ? 0.5 + 0.35 * Math.sin(t * 6) : 0.35;
  R3.beam.position.set(p.x + fx * 10, 58, p.y + fz * 10);
  R3.beam.lookAt(p.x + fx * 320, 14, p.y + fz * 320);
  R3.beam.visible = p.alive && !g.sab;
  R3.beam.material.uniforms.k.value = lights && !p.imp ? 0.5 : 1;
  fxDustUpdate(t);
  L.muz.position.set(p.x + fx * 34, 52, p.y + fz * 34);
  L.muz.intensity = g.muzzle > 0 ? 3.2 : 0;
  R3.scene.fog.density = !p.alive ? 0.0006 : 0.0017;
  const pulse = 0.5 + 0.5 * Math.sin(t * 5);
  R3.st.forEach((s, i) => {
    if (!s.gp.visible) return;
    const mine = !p.imp && p.tasks.some(q => q.st == i && !q.done);
    s.top.material.emissive.setHex(mine ? 0xffc020 : 0x000000);
    s.top.material.emissiveIntensity = mine ? 0.6 + 0.8 * pulse : 0;
    s.sc.material.emissive.setHex(mine ? 0xffd060 : 0x0a1a10);
    s.sc.material.emissiveIntensity = mine ? 1.4 : 0.3;
    s.lb.visible = mine || dist(p, STATIONS[i]) < 240;
  });
  if (R3.ebtn.visible) R3.ebtnM.material.emissiveIntensity = g.nearBtn ? 2.4 : 0.8 + 0.4 * pulse;
  R3.doors.forEach(m => {
    m.visible = g.doorsT > 0;
  });
  const fp = fixPts();
  R3.fix.forEach((m, i) => {
    const f = fp[i];
    m.visible = !!f;
    if (f) {
      m.position.set(f.x, 0, f.y);
      m.material.emissiveIntensity = 0.8 + 1.2 * pulse;
    }
  });
  if (g.pod) {
    R3.pod.visible = true;
    R3.pod.rotation.y = t * 0.4;
  }
  if (g.bags)
    g.bags.forEach((b, i) => {
      const m = R3.bagM[i];
      if (m) {
        m.scale.y = b.open ? 0.3 : 1;
        m.visible = true;
      }
    });
  if (R3.core) R3.core.material.emissiveIntensity = 1.1 + 0.3 * Math.sin(t * 3);
}
function updSandbox3D() {
  const g = G,
    p = g.player,
    L = R3.L,
    sb = R3.sb,
    t = g.t,
    dark = g.dark,
    k = dark / 0.86,
    cyc = (g.sbT % CYCLE) / CYCLE;
  if (sbNeedsRebuild()) sbRebuildNow();
  const day = new THREE.Color(0x5fa4ea),
    night = new THREE.Color(0x050818),
    warm = new THREE.Color(0xff8a4a),
    sky = day.clone().lerp(night, k);
  if (k > 0.05 && k < 0.95) sky.lerp(warm, Math.sin(k * Math.PI) * 0.35);
  R3.scene.background.copy(sky);
  R3.scene.fog.color.copy(sky);
  const sb2 = R3.sb;
  const rain = g.weather.rain;
  if (rain > 0.02) sky.lerp(new THREE.Color(0x4a5560), rain * 0.65);
  sb2.sky.position.set(p.x, 0, p.y);
  sb2.sky.material.uniforms.hor.value.copy(sky);
  sb2.sky.material.uniforms.top.value
    .set(0x1860d0)
    .lerp(new THREE.Color(0x01020a), Math.min(1, k * 1.15))
    .lerp(new THREE.Color(0x6a3a60), k > 0.05 && k < 0.95 ? Math.sin(k * Math.PI) * 0.25 : 0);
  sb2.stars.position.set(p.x, 0, p.y);
  sb2.stars.material.opacity = clamp((k - 0.35) * 1.8, 0, 1);
  R3.scene.fog.near = (380 - 220 * k) * (1 - rain * 0.5);
  R3.scene.fog.far = (1700 - 1050 * k) * (1 - rain * 0.45);
  const a = Math.min(1, cyc / 0.5) * Math.PI,
    elev = Math.sin(a);
  L.sun.position.set(p.x + Math.cos(a) * 520, 260 + 520 * Math.max(0.15, elev), p.y + 220);
  L.sun.target.position.set(p.x, 0, p.y);
  sb2.sun.position.set(p.x + Math.cos(a) * 2700, 300 + Math.sin(a) * 2300, p.y - 500);
  sb2.sun.visible = Math.sin(a) > -0.05 && cyc < 0.52;
  sb2.moon.position.set(
    p.x - Math.cos(a) * 2600,
    900 + Math.abs(Math.sin(a + 2)) * 1500,
    p.y - 300
  );
  sb2.moon.visible = k > 0.25;
  sb2.clouds.material.color.setRGB(1 - k * 0.8, 1 - k * 0.78, 1 - k * 0.6);
  sb2.cloudPos.forEach((c, i) => {
    c.x = (c.x + 9 * R3.dt + WW * TS) % (WW * TS);
    const dm = new THREE.Object3D();
    dm.position.set(c.x, c.y, c.z);
    dm.scale.set(c.s, 1, c.s * 0.8);
    dm.updateMatrix();
    sb2.clouds.setMatrixAt(i, dm.matrix);
  });
  sb2.clouds.instanceMatrix.needsUpdate = true;
  updRain3D(p, rain, t);
  for (const m of [sb2.leaf, sb2.tuftA, sb2.tuftB, sb2.flowers])
    if (m.material.userData.uTime) m.material.userData.uTime.value = t;
  sb2.mount.material.color
    .copy(sky)
    .lerp(new THREE.Color(0x35566e), 0.55 * (1 - k * 0.8))
    .multiplyScalar(1 - k * 0.7);
  sb2.g[0].material.map.offset.set(t * 0.02, t * 0.013);
  L.sun.color.set(k > 0.1 ? 0x8aa0e0 : 0xfff2d0);
  L.sun.intensity = (dark > 0.5 ? 0.28 : 1.0 * (1 - k) + 0.15) * (1 - rain * 0.55);
  L.amb.intensity += g.weather.lightning * 3;
  L.hemi.intensity = 0.32 * (1 - k) + 0.12;
  L.amb.intensity = 0.06 * (1 - k) + 0.1;
  const tl = g.torches
    .map(q => ({ q, d: Math.hypot(q[0] * TS + 20 - p.x, q[1] * TS + 20 - p.y) }))
    .sort((a, b) => a.d - b.d);
  L.tl.forEach((l, i) => {
    const e = tl[i];
    if (e) {
      l.position.set(e.q[0] * TS + TS / 2, 36, e.q[1] * TS + TS / 2);
      l.intensity = 1.5 + 0.2 * Math.sin(t * 9 + i);
      l.distance = 320;
    } else l.intensity = 0;
  });
  R3.sbBtn.material.emissiveIntensity = 1.1 + 0.5 * Math.sin(t * 5);
  const T = sbTarget();
  sb.hl.visible = scene === 'play';
  sb.hl.position.set(T.tx * TS + TS / 2, TS / 2, T.ty * TS + TS / 2);
  sb.hl.material.color.set(T.ok ? 0xffffff : 0xff5050);
  if (g.mine && g.mine.need) {
    sb.crack.visible = true;
    sb.crack.position.set(g.mine.tx * TS + TS / 2, TS / 2, g.mine.ty * TS + TS / 2);
    sb.crack.material.opacity = Math.min(0.7, (g.mine.t / g.mine.need) * 0.75);
  } else sb.crack.visible = false;
}
function sbRebuildNow() {
  sbRebuild3D();
}

function render3D() {
  if (!R3) init3D();
  if (R3.forG !== G) {
    rebuild3D();
    if (G.mode === 'sandbox') sbRebuild3D();
  }
  const now = performance.now();
  R3.dt = Math.min(0.05, (now - (R3.t || now)) / 1000);
  R3.t = now;
  if (G.firing || G.mining || G.muzzle > 0 || G.swing > 0) R3.aimUntil = now + 900;
  if (R3.w !== W || R3.h !== H) {
    R3.renderer.setSize(W, H, false);
    R3.camera.aspect = W / H;
    R3.camera.updateProjectionMatrix();
    R3.w = W;
    R3.h = H;
  }
  if (R3.q !== SAVE.quality) {
    R3.q = SAVE.quality;
    R3.renderer.setPixelRatio([0.7, 1, Math.min(devicePixelRatio || 1, 1.6)][R3.q]);
    R3.renderer.setSize(W, H, false);
    const sh = R3.q > 0;
    if (R3.L) {
      if (R3.L.spot) R3.L.spot.castShadow = sh;
      if (R3.L.sun) R3.L.sun.castShadow = sh;
    }
  }
  R3.fov =
    (R3.fov || SAVE.fov) +
    (SAVE.fov + (G.player.sprinting ? 8 : 0) - (R3.fov || SAVE.fov)) * Math.min(1, R3.dt * 6);
  if (Math.abs(R3.camera.fov - R3.fov) > 0.05) {
    R3.camera.fov = R3.fov;
    R3.camera.updateProjectionMatrix();
  }
  updCamera3D();
  if (G.mode === 'sandbox') updSandbox3D();
  else updClassic3D();
  syncEnts();
  if (G.animals) syncAnimals();
  syncBodies();
  syncParts();
  fxUpdate(R3.dt);
  syncDrops();
  if (G.grs) syncExtras3D();
  PFX.hurt += (Math.min(1, G.flash || 0) - PFX.hurt) * Math.min(1, R3.dt * 10);
  PFX.sprint += ((G.player.sprinting ? 1 : 0) - PFX.sprint) * Math.min(1, R3.dt * 5);
  PFX.threshold = G.mode === 'sandbox' ? 1.5 + (1 - G.dark / 0.86) * 0.7 : 0.95;
  postRender(R3.scene, R3.camera);
}
function try3D() {
  try {
    ctx.clearRect(0, 0, W, H);
    render3D();
    const g = G;
    if (g.sab) {
      ctx.fillStyle = `rgba(255,0,0,${0.05 + 0.05 * Math.sin(g.t * 6)})`;
      ctx.fillRect(0, 0, W, H);
    }
    if (g.weather && g.weather.lightning > 0) {
      ctx.fillStyle = `rgba(255,255,255,${Math.min(0.55, g.weather.lightning * 1.2)})`;
      ctx.fillRect(0, 0, W, H);
    }
    if (PFX.active) return true; // viñeta, daño y grano ya los aplica el shader de postproceso
    if (g.flash > 0) {
      ctx.fillStyle = `rgba(200,0,0,${Math.min(0.5, g.flash * 0.5)})`;
      ctx.fillRect(0, 0, W, H);
    }
    let gr = ctx.createRadialGradient(
      W / 2,
      H / 2,
      Math.min(W, H) * 0.4,
      W / 2,
      H / 2,
      Math.hypot(W, H) * 0.62
    );
    gr.addColorStop(0, 'rgba(0,0,0,0)');
    gr.addColorStop(1, 'rgba(0,0,0,.55)');
    ctx.fillStyle = gr;
    ctx.fillRect(0, 0, W, H);
    ctx.save();
    ctx.globalAlpha = 0.05;
    ctx.globalCompositeOperation = 'overlay';
    ctx.fillStyle = ctx.createPattern(GRAIN, 'repeat');
    ctx.translate(Math.floor(Math.random() * 256), Math.floor(Math.random() * 256));
    ctx.fillRect(-256, -256, W + 512, H + 512);
    ctx.restore();
    return true;
  } catch (e) {
    console.error('3D no disponible, usando 2D:', e);
    view3d = false;
    document.getElementById('gl').style.visibility = 'hidden';
    return false;
  }
}
function drawCrosshair() {
  if (!view3d || scene !== 'play') return;
  const locked = document.pointerLockElement === cv;
  if (G.mode !== 'classic') {
    ctx.strokeStyle = 'rgba(255,255,255,.85)';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(W / 2, H / 2, 6, 0, 6.3);
    ctx.moveTo(W / 2 - 14, H / 2);
    ctx.lineTo(W / 2 - 8, H / 2);
    ctx.moveTo(W / 2 + 8, H / 2);
    ctx.lineTo(W / 2 + 14, H / 2);
    ctx.moveTo(W / 2, H / 2 - 14);
    ctx.lineTo(W / 2, H / 2 - 8);
    ctx.moveTo(W / 2, H / 2 + 8);
    ctx.lineTo(W / 2, H / 2 + 14);
    ctx.stroke();
  }
  if (!locked && !('ontouchstart' in window))
    txt(
      'Haz clic para controlar la cámara con el ratón · Flechas ←→↑↓: girar cámara · WASD: moverse',
      W / 2,
      H - 100,
      14,
      '#fff',
      'center',
      false
    );
}

function updRain3D(p, rain, t) {
  const sb = R3.sb,
    pa = sb.rain.geometry.attributes.position;
  sb.rain.visible = rain > 0.03;
  if (!sb.rain.visible) return;
  sb.rain.material.opacity = Math.min(0.5, rain * 0.55);
  sb.rainSeed.forEach((s, i) => {
    const y = 520 - (((t * 780 + s[2] * 520) % 520) | 0),
      x = p.x + s[0],
      z = p.y + s[1],
      k = i * 6;
    pa.array[k] = x;
    pa.array[k + 1] = y;
    pa.array[k + 2] = z;
    pa.array[k + 3] = x + 4;
    pa.array[k + 4] = y + 26;
    pa.array[k + 5] = z + 2;
  });
  pa.needsUpdate = true;
}
