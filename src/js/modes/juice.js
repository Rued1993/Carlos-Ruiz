/**
 * "Juice": cámara lenta, ondas de choque, textos flotantes, esquiva y potenciadores del modo zombi.
 */
'use strict';

const TIME = { scale: 1, t: 0 };
/** Ralentiza el tiempo de juego a `scale` durante `secs` segundos reales. */
function slowmo(scale, secs) {
  TIME.scale = scale;
  TIME.t = secs;
}
function timeTick(dt) {
  if (TIME.t > 0) {
    TIME.t -= dt;
    if (TIME.t <= 0) TIME.scale = 1;
  }
  return dt * TIME.scale;
}

/* ---- textos flotantes ---- */
const POPS = [];
function popup(x, y, text, color, size) {
  if (POPS.length > 40) POPS.shift();
  POPS.push({
    x,
    y,
    text: String(text),
    color: color || '#fff',
    size: size || 16,
    t: 0,
    life: 0.9,
  });
}
function drawPopups() {
  const dt = HUDS.dt || 0.016;
  for (let i = POPS.length - 1; i >= 0; i--) {
    const q = POPS[i];
    q.t += dt;
    if (q.t >= q.life) {
      POPS.splice(i, 1);
      continue;
    }
    let sx = q.x,
      sy = q.y;
    if (view3d && R3 && R3.camera) {
      const v = new THREE.Vector3(q.x, 46 + q.t * 40, q.y).project(R3.camera);
      if (v.z > 1) continue;
      sx = (v.x * 0.5 + 0.5) * W;
      sy = (-v.y * 0.5 + 0.5) * H;
    }
    const k = q.t / q.life;
    ctx.save();
    ctx.globalAlpha = 1 - k * k;
    const s = q.size * (k < 0.15 ? 0.8 + k * 3 : 1);
    ctx.lineWidth = 3;
    ctx.strokeStyle = 'rgba(0,0,0,.7)';
    ctx.font = `800 ${s}px system-ui, sans-serif`;
    ctx.textAlign = 'center';
    ctx.strokeText(q.text, sx, sy);
    ctx.fillStyle = q.color;
    ctx.fillText(q.text, sx, sy);
    ctx.restore();
  }
}

/* ---- ondas de choque 3D ---- */
function shockwave3D(x, z, radius, color) {
  if (!R3 || !R3.scene) return;
  if (!R3.shocks) R3.shocks = [];
  const m = new THREE.Mesh(
    new THREE.RingGeometry(0.82, 1, 48),
    new THREE.MeshBasicMaterial({
      color: new THREE.Color(color || '#ffb060').multiplyScalar(2.2),
      transparent: true,
      opacity: 0.9,
      depthWrite: false,
      side: THREE.DoubleSide,
      blending: THREE.AdditiveBlending,
    })
  );
  m.rotation.x = -Math.PI / 2;
  m.position.set(x, 3, z);
  R3.scene.add(m);
  R3.shocks.push({ m, t: 0, r: radius || 140 });
  if (!R3.boomLight) {
    R3.boomLight = new THREE.PointLight(0xffa040, 0, 420, 1.6);
    R3.scene.add(R3.boomLight);
  }
  R3.boomLight.position.set(x, 40, z);
  R3.boomLight.userData.k = 1;
}
function shockUpdate(dt) {
  if (R3.shocks)
    for (let i = R3.shocks.length - 1; i >= 0; i--) {
      const s = R3.shocks[i];
      s.t += dt;
      const k = s.t / 0.55;
      s.m.scale.setScalar(Math.max(1, s.r * (1 - (1 - k) * (1 - k))));
      s.m.material.opacity = Math.max(0, 0.9 * (1 - k));
      if (k >= 1) {
        R3.scene.remove(s.m);
        s.m.geometry.dispose();
        s.m.material.dispose();
        R3.shocks.splice(i, 1);
      }
    }
  const l = R3.boomLight;
  if (l) {
    l.userData.k = Math.max(0, (l.userData.k || 0) - dt * 3.5);
    l.intensity = l.userData.k * 6;
  }
}

/* ---- esquiva y potenciadores (modo zombi) ---- */
function tryDash() {
  const g = G,
    p = g.player;
  if (!g || g.mode !== 'zombie' || scene !== 'play' || g.intro > 0 || !p.alive) return;
  if ((g.dashCd || 0) > 0 || (g.stam === undefined ? 100 : g.stam) < 25) return;
  g.stam = (g.stam === undefined ? 100 : g.stam) - 25;
  g.dashCd = 1.6;
  g.dashT = 0.2;
  g.inv = 0.4;
  g.dashA = p.moving ? p.aim : CAM.yaw;
  sfx.whoosh && sfx.whoosh();
  burst(p.x, p.y, 10, '#9fd8ff', 160, 0.4);
  popup(p.x, p.y - 10, 'ESQUIVA', '#9fd8ff', 13);
}
function updJuice(dt) {
  const g = G,
    p = g.player;
  if (g.mode !== 'zombie') return;
  g.dashCd = Math.max(0, (g.dashCd || 0) - dt);
  g.inv = Math.max(0, (g.inv || 0) - dt);
  if (g.dashT > 0) {
    g.dashT -= dt;
    move(p, Math.cos(g.dashA) * 760 * dt, Math.sin(g.dashA) * 760 * dt);
  }
  if (g.buffs) g.buffs.rapid = Math.max(0, g.buffs.rapid - dt);
}
