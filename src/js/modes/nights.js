/**
 * "Las 99 Noches": variante de supervivencia del Mundo cubo inspirada en los juegos de
 * sobrevivir noches en el bosque. Hoguera que hay que alimentar con madera, un Ciervo que
 * acecha en la oscuridad (se congela si lo miras y teme la luz), niños perdidos que rescatar
 * y un contador de noches.
 */
'use strict';

/** Variante elegida en Partida libre para el Mundo cubo (false = normal). */
let sbNights = false;
const NIGHTS_FREE = { nights: true, kids: 4, endless: true };
const KID_COLORS = ['#ff8fb0', '#8fd0ff', '#ffe08f', '#b8ff8f', '#d8a8ff'];

/** Prepara la hoguera, los niños y el estado de las noches tras crear el mundo. */
function initNights(cfg) {
  const g = G;
  g.nights = true;
  g.nightsEndless = !!cfg.endless;
  g.nightN = 0;
  g.wasNight = false;
  g.sbT = CYCLE * 0.36; // empieza a media tarde: poco tiempo para prepararse
  const fx = SPAWN.x,
    fy = SPAWN.y + 6;
  // claro del bosque alrededor de la hoguera
  for (let dy = -6; dy <= 6; dy++)
    for (let dx = -6; dx <= 6; dx++) {
      const x = fx + dx,
        y = fy + dy;
      if (x < 0 || y < 0 || x >= WW || y >= WH || dx * dx + dy * dy > 38) continue;
      const i = y * WW + x;
      OB[i] = 0;
      TREES.delete(i);
    }
  g.fire = { x: fx * TS + TS / 2, y: fy * TS + TS / 2, fuel: 70, out: false, emberT: 0 };
  g.deer = null;
  g.beatT = 0;
  g.kids = [];
  const n = cfg.kids || 0,
    tmpl = g.ps.find(q => !q.isP) || g.player;
  for (let i = 0; i < n; i++) {
    let x = 0,
      y = 0;
    for (let k = 0; k < 400; k++) {
      const a = (i / n) * 6.28 + rnd(-0.5, 0.5),
        d = rnd(26, 40) * TS;
      x = g.fire.x + Math.cos(a) * d;
      y = g.fire.y + Math.sin(a) * d;
      if (x > TS * 3 && y > TS * 3 && x < (WW - 3) * TS && y < (WH - 3) * TS && sbStand(x, y))
        break;
    }
    const kid = {
      ...tmpl,
      id: 100 + i,
      isP: false,
      color: KID_COLORS[i % KID_COLORS.length],
      name: 'Niño perdido ' + (i + 1),
      kid: true,
      kstate: 'lost',
      scale: 0.62,
      x,
      y,
      tasks: [],
      path: [],
      sus: {},
      moving: false,
      step: 0,
      inVent: null,
    };
    g.kids.push(kid);
    g.ps.push(kid);
  }
  g.banner = cfg.endless ? 'LAS 99 NOCHES' : 'EL BOSQUE';
  g.bannerSub =
    'Alimenta la hoguera con madera (E). Si ves al Ciervo, NO dejes de mirarlo. La luz lo ahuyenta';
  g.bannerT = 8;
}
/** Radio de luz de la hoguera (0 si está apagada). */
function fireR() {
  const f = G.fire;
  return f && f.fuel > 0 ? 90 + f.fuel * 2.2 : 0;
}
function angDiff(a, b) {
  return Math.abs(Math.atan2(Math.sin(a - b), Math.cos(a - b)));
}
/** ¿Hay luz (hoguera o antorcha) en este punto? */
function litAt(x, y) {
  const f = G.fire;
  if (f && Math.hypot(x - f.x, y - f.y) < fireR()) return true;
  for (const t of G.torches)
    if (Math.hypot(x - (t[0] * TS + TS / 2), y - (t[1] * TS + TS / 2)) < 120) return true;
  return false;
}
/** E cerca de la hoguera o de un niño. Devuelve true si se ha consumido la acción. */
function nightsInteract() {
  const g = G,
    p = g.player;
  if (!g.nights) return false;
  for (const k of g.kids)
    if (k.kstate === 'lost' && dist(k, p) < 70) {
      k.kstate = 'follow';
      toast('«¡Gracias! Llévame a la hoguera»', 2);
      popup(k.x, k.y - 20, '¡TE SIGUE!', '#ffe08f', 15);
      beep(660, 0.15, 'sine', 0.07, 300);
      return true;
    }
  const f = g.fire;
  if (dist(p, f) < 90) {
    const n = Math.min(g.inv.madera, Math.ceil((100 - f.fuel) / 12));
    if (n <= 0) {
      toast(g.inv.madera ? 'La hoguera ya está al máximo' : 'Necesitas madera: tala árboles', 1.6);
      return true;
    }
    g.inv.madera -= n;
    f.fuel = Math.min(100, f.fuel + n * 12);
    if (f.out) toast('¡Has vuelto a encender la hoguera!', 2);
    else toast(`+${n} madera a la hoguera`, 1.4);
    f.out = false;
    popup(f.x, f.y - 30, '+' + n * 12 + '%', '#ffb060', 18);
    burst(f.x, f.y, 18, '#ffb040', 140, 0.8);
    beep(220, 0.3, 'triangle', 0.08, 120);
    mevent('feed', n);
    return true;
  }
  return false;
}
function nightsTick(dt) {
  const g = G,
    p = g.player,
    f = g.fire,
    night = g.dark > 0.5;
  // hoguera
  f.fuel = Math.max(0, f.fuel - (night ? 0.95 : 0.4) * dt);
  if (f.fuel <= 0 && !f.out) {
    f.out = true;
    toast('¡La hoguera se ha apagado! Echa madera (E) cuanto antes', 3);
    g.shake = 0.3;
  }
  if (f.fuel > 0 && f.fuel < 20)
    tip('fuel', 'La hoguera se apaga: tala árboles y échale madera con E');
  const R = fireR(),
    inFire = R > 0 && dist(p, f) < R;
  if (inFire) {
    g.fireReg = (g.fireReg || 0) + dt;
    if (g.fireReg > 2.5 && g.hp < 20) {
      g.fireReg = 0;
      g.hp++;
    }
  }
  // los zombis no soportan la luz de la hoguera
  for (const z of g.zs) {
    const d = dist(z, f);
    if (R > 0 && d < R) {
      const a = Math.atan2(z.y - f.y, z.x - f.x);
      move(z, Math.cos(a) * 160 * dt, Math.sin(a) * 160 * dt);
      z.hp -= 8 * dt;
      z.hurt = 0.1;
      if (Math.random() < dt * 5) burst(z.x, z.y - 10, 1, '#ff9a20', 50, 0.5);
    }
  }
  // contador de noches
  if (night && !g.wasNight) {
    g.wasNight = true;
    banner('NOCHE ' + (g.nightN + 1) + (g.nightsEndless ? ' / 99' : ''), 'Quédate cerca de la luz');
    sfx.growl(p.x + 600, p.y, true);
  } else if (!night && g.dark < 0.15 && g.wasNight) {
    g.wasNight = false;
    g.nightN++;
    track('night99', 1);
    banner(
      'DÍA ' + (g.nightN + 1),
      'Has sobrevivido ' + g.nightN + (g.nightN === 1 ? ' noche' : ' noches')
    );
    if (g.nightsEndless && g.nightN >= 99) {
      banner('¡99 NOCHES!', 'Has sobrevivido al bosque');
      SAVE.n99 = Math.max(SAVE.n99 || 0, g.nightN);
    }
    if (g.nightsEndless) {
      SAVE.n99 = Math.max(SAVE.n99 || 0, g.nightN);
      saveGame();
    }
  }
  // niños perdidos
  for (const k of g.kids) {
    k.moving = false;
    if (k.kstate === 'lost') {
      k.step += dt * 2;
      if (dist(k, p) < 160) tip('kid', 'Un niño perdido: acércate y pulsa E para que te siga');
    } else if (k.kstate === 'follow') {
      const d = dist(k, p);
      if (d > 60) {
        const sp = Math.min(260, 120 + d);
        move(k, ((p.x - k.x) / d) * sp * dt, ((p.y - k.y) / d) * sp * dt);
        k.moving = true;
        k.step += dt * 12;
        k.face = p.x > k.x ? 1 : -1;
      }
      if (d > 900) {
        k.x = p.x - 30;
        k.y = p.y;
      }
      if (R > 0 && dist(k, f) < R * 0.8) {
        k.kstate = 'safe';
        k.home = { x: f.x + rnd(-70, 70), y: f.y + rnd(40, 90) };
        toast('¡' + k.name + ' está a salvo junto a la hoguera!', 2.4);
        popup(k.x, k.y - 20, '¡RESCATADO!', '#7bff9a', 18);
        burst(k.x, k.y, 20, '#ffe08f', 160, 0.9);
        beep(880, 0.25, 'sine', 0.08, 300);
        mevent('rescue');
      }
    } else if (k.home) {
      const d = dist(k, k.home);
      if (d > 8) {
        move(k, ((k.home.x - k.x) / d) * 90 * dt, ((k.home.y - k.y) / d) * 90 * dt);
        k.moving = true;
        k.step += dt * 9;
      }
    }
  }
  // el Ciervo
  updDeer(dt, night);
}
function updDeer(dt, night) {
  const g = G,
    p = g.player;
  if (!night) {
    if (g.deer && g.dark < 0.2) {
      burst(g.deer.x, g.deer.y, 24, '#20140c', 120, 1);
      g.deer = null;
    }
    return;
  }
  if (!g.deer) {
    for (let k = 0; k < 30; k++) {
      const a = rnd(0, 6.28),
        d = rnd(700, 900),
        x = p.x + Math.cos(a) * d,
        y = p.y + Math.sin(a) * d;
      if (sbStand(x, y) && !litAt(x, y)) {
        g.deer = { x, y, face: 1, step: 0, frozen: false, cd: 1, stare: 0, sp: 0 };
        break;
      }
    }
    return;
  }
  const D = g.deer,
    d = dist(D, p),
    toDeer = Math.atan2(D.y - p.y, D.x - p.x),
    look = view3d ? CAM.yaw : p.aim;
  D.frozen = p.alive && d < 950 && angDiff(look, toDeer) < 0.55;
  D.cd -= dt;
  D.sp = 0;
  if (D.frozen) {
    D.stare += dt;
    if (D.stare > 0.3) tip('deer', 'El Ciervo se congela mientras lo miras. No le des la espalda');
  } else {
    D.stare = 0;
    const speed = Math.min(240, 150 + g.nightN * 6 + (g.fire.out ? 40 : 0)),
      nx = D.x + ((p.x - D.x) / d) * speed * dt,
      ny = D.y + ((p.y - D.y) / d) * speed * dt;
    if (litAt(nx, ny)) {
      // la luz lo frena: rodea el círculo iluminado
      const a = Math.atan2(D.y - p.y, D.x - p.x) + dt * 0.6;
      move(D, p.x + Math.cos(a) * d - D.x, p.y + Math.sin(a) * d - D.y);
    } else {
      move(D, nx - D.x, ny - D.y);
      D.sp = speed;
    }
    D.step += dt * 10;
    D.face = p.x > D.x ? 1 : -1;
  }
  g.beatT -= dt;
  if (d < 380 && g.beatT <= 0) {
    g.beatT = 0.35 + (d / 380) * 0.6;
    tone(55, 0.12, { type: 'sine', vol: 0.18 * (1 - d / 420) });
    tone(48, 0.12, {
      type: 'sine',
      vol: 0.14 * (1 - d / 420),
      at: audioReady() ? audioReady().currentTime + 0.14 : 0,
    });
  }
  if (d < 42 && D.cd <= 0 && p.alive && !litAt(p.x, p.y)) {
    D.cd = 2;
    g.hp -= 7;
    g.flash = 1;
    g.shake = 0.7;
    g.regT = 0;
    sfx.growl(D.x, D.y, true);
    noise(0.6, { vol: 0.25, ftype: 'bandpass', f0: 2400, f1: 600, q: 2 });
    burst(p.x, p.y, 16, '#7a0b0b', 180, 0.7);
    popup(p.x, p.y - 20, '-7', '#ff4040', 22);
    // huye a las sombras tras atacar
    const a = rnd(0, 6.28);
    for (let k = 0; k < 20; k++) {
      const x = p.x + Math.cos(a + k) * 800,
        y = p.y + Math.sin(a + k) * 800;
      if (sbStand(x, y)) {
        D.x = x;
        D.y = y;
        break;
      }
    }
  }
}

/* ---- dibujo 2D ---- */
function drawNights2D() {
  const g = G,
    f = g.fire,
    t = g.t;
  const R = fireR();
  if (R > 0) {
    const gr = ctx.createRadialGradient(f.x, f.y, 10, f.x, f.y, R);
    gr.addColorStop(0, 'rgba(255,170,60,.35)');
    gr.addColorStop(1, 'rgba(255,120,30,0)');
    ctx.fillStyle = gr;
    ctx.beginPath();
    ctx.arc(f.x, f.y, R, 0, 6.3);
    ctx.fill();
  }
  ctx.fillStyle = '#5a3a1e';
  ctx.fillRect(f.x - 18, f.y - 4, 36, 8);
  if (f.fuel > 0) {
    ctx.fillStyle = '#ff9a20';
    ctx.beginPath();
    ctx.ellipse(f.x, f.y - 10, 10, 14 + Math.sin(t * 12) * 3, 0, 0, 6.3);
    ctx.fill();
  }
  const D = g.deer;
  if (D) {
    ctx.fillStyle = '#1a120c';
    ctx.fillRect(D.x - 14, D.y - 60, 28, 50);
    ctx.fillRect(D.x - 10, D.y - 10, 4, 14);
    ctx.fillRect(D.x + 6, D.y - 10, 4, 14);
    ctx.fillStyle = D.frozen ? '#ff2020' : '#ff6040';
    ctx.fillRect(D.x - 7, D.y - 52, 4, 4);
    ctx.fillRect(D.x + 3, D.y - 52, 4, 4);
  }
}

/* ---- HUD ---- */
function drawNightsHUD() {
  const g = G,
    f = g.fire;
  const x = W / 2 - 130,
    y = 60;
  glass(x, y, 260, 44, 'rgba(255,140,60,.5)', 14);
  txt(
    (g.dark > 0.5 ? 'NOCHE ' : 'DÍA ') + (g.nightN + 1) + (g.nightsEndless ? ' / 99' : ''),
    x + 14,
    y + 14,
    13,
    g.dark > 0.5 ? '#ff9a7a' : '#ffe08f',
    'left'
  );
  hudBar(
    'fuel99',
    x + 10,
    y + 22,
    180,
    16,
    f.fuel,
    100,
    f.out ? '#555' : f.fuel < 25 ? '#ff5040' : '#ffa030',
    'flame'
  );
  if (g.kids.length) {
    const s = g.kids.filter(k => k.kstate === 'safe').length;
    txt('Niños ' + s + '/' + g.kids.length, x + 248, y + 30, 12, '#ffe08f', 'right');
  }
  if (g.nightsEndless && SAVE.n99)
    txt('Récord ' + SAVE.n99, x + 248, y + 14, 10, '#9fb3c8', 'right', false);
  const D = g.deer;
  if (D) {
    const d = dist(D, g.player);
    if (d < 600) {
      ctx.save();
      const k = 1 - d / 600;
      ctx.globalAlpha = k * 0.55;
      const vg = ctx.createRadialGradient(W / 2, H / 2, H * 0.3, W / 2, H / 2, H * 0.8);
      vg.addColorStop(0, 'rgba(0,0,0,0)');
      vg.addColorStop(1, D.frozen ? 'rgba(120,0,0,1)' : 'rgba(0,0,0,1)');
      ctx.fillStyle = vg;
      ctx.fillRect(0, 0, W, H);
      ctx.restore();
      if (!D.frozen) txt('Algo se acerca…', W / 2, y + 62, 13, '#ff8a80', 'center');
    }
  }
}

/* ---- 3D ---- */
let HALO_TEX = null;
function haloTex() {
  if (HALO_TEX) return HALO_TEX;
  const c = document.createElement('canvas');
  c.width = c.height = 64;
  const x = c.getContext('2d'),
    gr = x.createRadialGradient(32, 32, 1, 32, 32, 32);
  gr.addColorStop(0, 'rgba(255,255,255,1)');
  gr.addColorStop(0.25, 'rgba(255,255,255,.5)');
  gr.addColorStop(1, 'rgba(255,255,255,0)');
  x.fillStyle = gr;
  x.fillRect(0, 0, 64, 64);
  HALO_TEX = new THREE.CanvasTexture(c);
  return HALO_TEX;
}
function makeDeer3D() {
  const g = new THREE.Group(),
    fur = new THREE.MeshStandardMaterial({ color: 0x22160e, roughness: 0.95 }),
    bone = new THREE.MeshStandardMaterial({
      color: 0xcfc4ae,
      roughness: 0.7,
      emissive: 0x2a2014,
    }),
    eye = new THREE.MeshBasicMaterial({ color: new THREE.Color(6, 0.4, 0.2), fog: false });
  const body = new THREE.Mesh(new THREE.CapsuleGeometry(13, 46, 6, 12), fur);
  body.rotation.z = Math.PI / 2;
  body.position.set(0, 86, 0);
  body.castShadow = true;
  g.add(body);
  const legs = [];
  for (const [lx, lz] of [
    [-24, -9],
    [-24, 9],
    [24, -9],
    [24, 9],
  ]) {
    const hip = new THREE.Group();
    hip.position.set(lx, 82, lz);
    const leg = new THREE.Mesh(new THREE.CylinderGeometry(2.6, 1.8, 82, 6), fur);
    leg.position.y = -41;
    leg.castShadow = true;
    hip.add(leg);
    g.add(hip);
    legs.push(hip);
  }
  const neck = new THREE.Group();
  neck.position.set(30, 92, 0);
  const nm = new THREE.Mesh(new THREE.CylinderGeometry(6, 9, 40, 8), fur);
  nm.position.y = 18;
  nm.rotation.z = -0.35;
  neck.add(nm);
  const head = new THREE.Group();
  head.position.set(8, 40, 0);
  const skull = new THREE.Mesh(new THREE.BoxGeometry(24, 13, 13), bone);
  skull.position.x = 8;
  head.add(skull);
  for (const z of [-4.5, 4.5]) {
    const e = new THREE.Mesh(new THREE.SphereGeometry(3, 8, 6), eye);
    e.position.set(10, 3, z * 1.05);
    head.add(e);
    const halo = new THREE.Sprite(
      new THREE.SpriteMaterial({
        map: haloTex(),
        color: new THREE.Color(3, 0.25, 0.1),
        transparent: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
        fog: false,
      })
    );
    halo.scale.setScalar(26);
    halo.position.copy(e.position);
    head.add(halo);
    // astas ramificadas
    const s = Math.sign(z);
    const a1 = new THREE.Mesh(new THREE.CylinderGeometry(1, 1.6, 30, 5), bone);
    a1.position.set(0, 18, z * 1.3);
    a1.rotation.x = s * 0.45;
    head.add(a1);
    for (let i = 0; i < 3; i++) {
      const b = new THREE.Mesh(new THREE.CylinderGeometry(0.7, 1, 14, 4), bone);
      b.position.set(-2 + i * 2, 12 + i * 7, z * 1.3 + s * (6 + i * 3));
      b.rotation.set(s * (0.9 + i * 0.2), 0, -0.4 + i * 0.3);
      head.add(b);
    }
  }
  neck.add(head);
  g.add(neck);
  const glow = new THREE.PointLight(0xff2010, 0.6, 140, 2);
  glow.position.set(44, 132, 0);
  g.add(glow);
  g.userData = { legs, neck, head, glow, eye };
  return g;
}
function makeFire3D() {
  const g = new THREE.Group(),
    wood = new THREE.MeshStandardMaterial({ color: 0x5a3a1e, roughness: 0.9 }),
    stone = new THREE.MeshStandardMaterial({ color: 0x6d6d70, roughness: 0.95 });
  for (let i = 0; i < 4; i++) {
    const l = new THREE.Mesh(new THREE.CylinderGeometry(3, 3.5, 34, 6), wood);
    l.rotation.set(Math.PI / 2 - 0.35, (i * Math.PI) / 2, 0);
    l.position.set(Math.cos((i * Math.PI) / 2) * 6, 7, Math.sin((i * Math.PI) / 2) * 6);
    l.castShadow = true;
    g.add(l);
  }
  for (let i = 0; i < 10; i++) {
    const s = new THREE.Mesh(new THREE.DodecahedronGeometry(5, 0), stone);
    s.position.set(Math.cos((i / 10) * 6.28) * 22, 3, Math.sin((i / 10) * 6.28) * 22);
    s.rotation.set(i, i * 2, 0);
    g.add(s);
  }
  const flames = [];
  for (let i = 0; i < 3; i++) {
    const m = new THREE.Mesh(
      new THREE.ConeGeometry(9 - i * 2, 30 - i * 5, 8, 1, true),
      new THREE.MeshBasicMaterial({
        color: new THREE.Color(i === 2 ? 0xfff0a0 : i === 1 ? 0xffa030 : 0xff5010).multiplyScalar(
          1.7
        ),
        transparent: true,
        opacity: 0.65,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
        side: THREE.DoubleSide,
      })
    );
    m.position.y = 18;
    g.add(m);
    flames.push(m);
  }
  const light = new THREE.PointLight(0xff7a20, 3, 400, 1.2);
  light.position.y = 34;
  light.castShadow = SAVE.quality >= 2;
  g.add(light);
  // ascuas que suben
  const N = 40,
    pos = new Float32Array(N * 3),
    seeds = [];
  for (let i = 0; i < N; i++) seeds.push([rnd(-10, 10), rnd(0, 120), rnd(-10, 10), rnd(0.6, 1.4)]);
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  const embers = new THREE.Points(
    geo,
    new THREE.PointsMaterial({
      color: new THREE.Color(4, 1.6, 0.4),
      size: 3,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    })
  );
  embers.frustumCulled = false;
  g.add(embers);
  g.userData = { flames, light, embers, seeds };
  return g;
}
function syncNights3D() {
  const g = G;
  // exposición: de noche en el bosque solo se ve lo que ilumina el fuego
  R3.renderer.toneMappingExposure = g.nights
    ? 1.15 * (1 - 0.62 * Math.min(1, g.dark / 0.86))
    : 1.15;
  if (!g.nights) {
    if (R3.n99) {
      R3.scene.remove(R3.n99.fire);
      R3.scene.remove(R3.n99.deer);
      R3.n99 = null;
    }
    return;
  }
  if (!R3.n99 || R3.n99.forG !== g) {
    if (R3.n99) {
      R3.scene.remove(R3.n99.fire);
      R3.scene.remove(R3.n99.deer);
    }
    R3.n99 = { forG: g, fire: makeFire3D(), deer: makeDeer3D() };
    R3.scene.add(R3.n99.fire);
    R3.scene.add(R3.n99.deer);
  }
  const t = g.t,
    f = g.fire,
    F = R3.n99.fire,
    u = F.userData,
    on = f.fuel > 0,
    k = f.fuel / 100;
  F.position.set(f.x, 0, f.y);
  u.flames.forEach((m, i) => {
    m.visible = on;
    const s = (0.5 + k * 0.8) * (1 + Math.sin(t * (11 + i * 3) + i) * 0.12);
    m.scale.set(s, s * (1 + Math.sin(t * 17 + i) * 0.15), s);
    m.rotation.y = t * (1 + i);
  });
  u.light.intensity = on
    ? (5 + k * 7) * (1 + Math.sin(t * 13) * 0.08 + Math.sin(t * 29) * 0.05)
    : 0;
  u.light.distance = fireR() * 2.2 + 1;
  u.embers.visible = on;
  if (on) {
    const a = u.embers.geometry.attributes.position.array;
    u.seeds.forEach((s, i) => {
      s[1] += R3.dt * 40 * s[3];
      if (s[1] > 120) s[1] = 0;
      a[i * 3] = s[0] + Math.sin(t * 2 + i) * (s[1] * 0.12);
      a[i * 3 + 1] = 14 + s[1];
      a[i * 3 + 2] = s[2] + Math.cos(t * 1.7 + i) * (s[1] * 0.12);
    });
    u.embers.geometry.attributes.position.needsUpdate = true;
  }
  const D = g.deer,
    M = R3.n99.deer,
    du = M.userData;
  M.visible = !!D;
  if (D) {
    M.position.set(D.x, 0, D.y);
    const p = g.player,
      yaw = Math.atan2(p.y - D.y, p.x - D.x);
    M.rotation.y = -yaw;
    const sw = D.sp > 0 ? Math.sin(D.step) * 0.5 : 0;
    du.legs.forEach((l, i) => (l.rotation.z = (i % 2 ? sw : -sw) * (i < 2 ? 1 : -1)));
    du.head.rotation.z = D.frozen ? -0.15 + Math.sin(t * 0.7) * 0.03 : Math.sin(t * 6) * 0.08;
    du.head.rotation.x = D.frozen ? Math.sin(t * 0.5) * 0.25 : 0;
    du.eye.color.setRGB(D.frozen ? 9 : 5, 0.3, 0.15);
    du.glow.intensity = D.frozen ? 1.4 : 0.6;
  }
}
