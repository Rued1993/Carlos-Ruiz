/**
 * Modo Supervivencia Zombi: oleadas, armas, bolsas, jefe y HUD propio.
 */
'use strict';

const SPOTS = [
  [730, 140],
  [1470, 470],
  [2030, 420],
  [130, 1010],
  [2270, 1020],
  [430, 1470],
  [1420, 1470],
  [2080, 1470],
  [130, 690],
  [1250, 820],
  [930, 140],
  [1930, 700],
];
const WAVES = [
  { len: 50, count: 6 },
  { len: 60, count: 10 },
  { len: 60, count: 14 },
  { len: 70, count: 18 },
  { len: 70, count: 22 },
];
const POD = { x: 1850, y: 250 };
const WORDER = ['bate', 'pistola', 'escopeta'],
  WNAME = { bate: 'Bate', pistola: 'Pistola', escopeta: 'Escopeta' },
  WICON = { bate: '🏏', pistola: '🔫', escopeta: '💥' };
const fmtT = s =>
  String(Math.floor(s / 60)).padStart(2, '0') + ':' + String(Math.floor(s % 60)).padStart(2, '0');
function clearLine(a, b, strict) {
  const d = dist(a, b);
  for (let i = 1; i < d / 26; i++) {
    const t = (i * 26) / d,
      x = a.x + (b.x - a.x) * t,
      y = a.y + (b.y - a.y) * t;
    if (strict ? !canStand(x, y) : !walk(x, y)) return false;
  }
  return true;
}
function newZombie(cfg) {
  if (!MAP) buildMap();
  const p = {
    id: 0,
    color: COLORS[0][0],
    name: 'Rojo',
    isP: true,
    alive: true,
    imp: false,
    x: 1200,
    y: 300,
    face: 1,
    step: 0,
    moving: false,
    tasks: [],
    path: [],
    wait: 0,
    onDone: null,
    node: 2,
    sus: {},
    kcd: 0,
    stuck: 0,
    saw: null,
    sawWhat: null,
    emerg: 0,
    hunt: null,
    huntT: 0,
    room: '',
    inVent: null,
    aim: 0,
  };
  const spots = shuffle(SPOTS.slice()),
    items = shuffle([
      'escopeta',
      'bate',
      'pistola',
      'botiquin',
      'botiquin',
      'botiquin',
      'botiquin',
      'municion',
      'municion',
      'municion',
      'municion',
      'municion',
    ]);
  let best = 0;
  try {
    best = +(localStorage.getItem('zbest') || 0);
  } catch (e) {}
  G = {
    mode: 'zombie',
    ps: [p],
    player: p,
    bodies: [],
    blood: [],
    parts: [],
    total: 1,
    done: 0,
    t: 0,
    intro: 4.5,
    toast: '',
    toastT: 0,
    meet: null,
    over: null,
    flash: 0,
    meetCD: 0,
    task: null,
    deadT: 0,
    nearSt: null,
    nearBody: null,
    nearVic: null,
    nearBtn: false,
    nearFix: null,
    nearCam: false,
    nearVent: null,
    sab: null,
    sabCD: 0,
    doorsT: 0,
    dispatchT: 0,
    botSabT: 1e9,
    shake: 0,
    stepT: 0,
    hb: 0,
    alarmT: 0,
    sparkT: 0,
    camT: 0,
    zs: [],
    bullets: [],
    bags: spots.map((s, i) => ({ x: s[0], y: s[1], item: items[i], open: false })),
    hp: 100,
    wep: null,
    weps: {},
    ammo: 0,
    cd: 0,
    muzzle: 0,
    swing: 0,
    kills: 0,
    surv: 0,
    firing: false,
    nearBag: null,
    nearPod: false,
    pod: false,
    banner: '',
    bannerSub: '',
    bannerT: 0,
    gt: 3,
    best,
    wave: { n: 1, state: 'wait', t: 0, left: 0, spawnT: 0, len: 50 },
  };
  G.zc = Object.assign(
    { waves: 5, escape: true, boss: false, weapons: null, ammo: 0, lenMul: 1 },
    cfg || {}
  );
  if (G.zc.weapons) {
    for (const w of G.zc.weapons) G.weps[w] = true;
    G.wep = G.zc.weapons[G.zc.weapons.length - 1];
    G.ammo = G.zc.ammo;
  }
  scene = 'play';
  startDrone();
  beep(300, 0.5, 'sine', 0.08, 200);
}
function banner(t, s) {
  G.banner = t;
  G.bannerSub = s;
  G.bannerT = 4.5;
  speak(t.replace(/[^\wáéíóúñÁÉÍÓÚÑ ]/g, ' ').toLowerCase());
}
function startWave(n) {
  const w = G.wave,
    W_ = WAVES[Math.min(n, 5) - 1];
  w.state = 'run';
  w.t = 0;
  w.len = W_.len * G.zc.lenMul;
  w.left = W_.count;
  w.spawnT = 0;
  w.boss = false;
  if (G.zc.boss && n == G.zc.waves) {
    w.boss = true;
    w.len = 9999;
    w.left = Math.floor(W_.count / 2);
    spawnBoss();
  }
  if (n == 1 && G.wep) banner('OLEADA 1', '¡Tienes arma! Defiéndete y no te dejes rodear');
  else if (n == 1)
    banner(
      'OLEADA 1',
      '¡CORRE! No tienes arma. Sobrevive ' + w.len + ' s (o busca bolsas escondidas)'
    );
  else if (n == 2) {
    if (!G.weps.pistola) {
      G.weps.pistola = true;
      G.ammo += 24;
      if (!G.wep || G.wep == 'bate') G.wep = 'pistola';
    }
    banner('OLEADA 2', 'Recibes una pistola (+24 balas). ¡Defiéndete!');
  } else banner('OLEADA ' + n, 'Más zombis, más rápidos');
  if (G.wave.boss)
    banner('¡EL ALFA!', 'Derrota al jefe zombi. Mantén la distancia y usa todo lo que tengas');
  beep(120, 0.6, 'sawtooth', 0.12, -40);
}
function spawnZ(runner) {
  const g = G,
    p = g.player,
    n = g.wave.n;
  let c = NODES.map((v, i) => i).filter(
    i => Math.hypot(NODES[i][0] - p.x, NODES[i][1] - p.y) > 650
  );
  if (!c.length) c = NODES.map((v, i) => i);
  const i = pick(c),
    hp = 60 + 10 * n,
    z = {
      x: NODES[i][0] + rnd(-20, 20),
      y: NODES[i][1] + rnd(-10, 10),
      hp,
      max: hp,
      sp: (95 + n * 11) * rnd(0.9, 1.1),
      face: 1,
      step: Math.random() * 6,
      cd: 0.5,
      path: [],
      pt: 0,
      stuck: 0,
    };
  if (!canStand(z.x, z.y)) {
    z.x = NODES[i][0];
    z.y = NODES[i][1];
  }
  if (runner || (n >= 3 && Math.random() < 0.25)) {
    z.sp *= 1.3;
    z.run = true;
  }
  g.zs.push(z);
}
function clearZ() {
  for (const z of G.zs) burst(z.x, z.y, 10, '#8f9', 90);
  G.zs = [];
}
function endZombie(r) {
  if (G.over) return;
  G.over = { winner: r };
  let b = G.best;
  try {
    b = Math.max(b, G.surv);
    localStorage.setItem('zbest', b);
  } catch (e) {}
  G.best = b;
  scene = 'end';
  beep(r == 'zwin' ? 700 : 100, 0.9, 'triangle', 0.12);
}
function openBag(b) {
  const g = G;
  b.open = true;
  burst(b.x, b.y, 12, '#ffd740', 100);
  beep(500, 0.15, 'sine', 0.07, 200);
  const it = b.item;
  if (it == 'botiquin') {
    g.hp = Math.min(100, g.hp + 50);
    toast('Bolsa: ¡un BOTIQUÍN! (+50 salud)', 3);
  } else if (it == 'municion') {
    g.ammo += 20;
    toast('Bolsa: caja de MUNICIÓN (+20)', 3);
  } else {
    g.weps[it] = true;
    g.wep = it;
    if (it == 'pistola') g.ammo += 12;
    if (it == 'escopeta') g.ammo += 8;
    toast(
      `¡Bolsa: encontraste ${it == 'bate' ? 'un BATE' : it == 'pistola' ? 'una PISTOLA' : 'una ESCOPETA'}!`,
      3.5
    );
  }
}
function selectWep(i) {
  const w = WORDER[i];
  if (G.weps[w]) {
    G.wep = w;
    beep(400, 0.05, 'square', 0.04);
  }
}
function cycleWep() {
  const own = WORDER.filter(w => G.weps[w]);
  if (!own.length) return;
  G.wep = own[(own.indexOf(G.wep) + 1) % own.length];
  beep(400, 0.05, 'square', 0.04);
}
function shoot(tx, ty) {
  const g = G,
    p = g.player;
  if (g.cd > 0 || g.intro > 0 || !p.alive) return;
  if (!g.wep) {
    g.cd = 0.7;
    toast('¡No tienes arma! ¡Corre o busca una bolsa!', 1.4);
    return;
  }
  const w = g.wep,
    ang = Math.atan2(ty - p.y, tx - p.x);
  p.aim = ang;
  p.face = Math.cos(ang) >= 0 ? 1 : -1;
  if (w == 'bate') {
    g.cd = 0.5;
    g.swing = 0.2;
    for (const z of g.zs) {
      const d = dist(z, p);
      if (d < 78) {
        const a = Math.atan2(z.y - p.y, z.x - p.x),
          da = Math.abs(Math.atan2(Math.sin(a - ang), Math.cos(a - ang)));
        if (da < 1) {
          z.hp -= 50;
          z.hurt = 0.2;
          move(z, Math.cos(a) * 20, Math.sin(a) * 20);
          burst(z.x, z.y, 8, '#4a7a2a', 150);
        }
      }
    }
    beep(180, 0.12, 'sawtooth', 0.08, -60);
    return;
  }
  if (g.ammo <= 0) {
    g.cd = 0.35;
    beep(200, 0.05, 'square', 0.05);
    toast('Sin munición', 1);
    return;
  }
  g.ammo--;
  const sg = w == 'escopeta',
    n = sg ? 5 : 1,
    spread = sg ? 0.38 : 0.03,
    dmg = sg ? 24 : 34;
  for (let i = 0; i < n; i++) {
    const a = ang + (n > 1 ? (i / (n - 1) - 0.5) * spread * 2 : rnd(-spread, spread));
    g.bullets.push({
      x: p.x + Math.cos(a) * 22,
      y: p.y + Math.sin(a) * 22,
      vx: Math.cos(a) * 1200,
      vy: Math.sin(a) * 1200,
      life: 0.6,
      dmg,
    });
  }
  g.cd = sg ? 0.85 : 0.28;
  g.muzzle = 0.09;
  g.shake = Math.max(g.shake, sg ? 0.25 : 0.1);
  beep(sg ? 90 : 240, 0.12, 'sawtooth', 0.14, -150);
}
function shootAuto() {
  const p = G.player;
  let best = null,
    bd = 700;
  for (const z of G.zs) {
    const d = dist(z, p);
    if (d < bd && clearLine(p, z)) {
      bd = d;
      best = z;
    }
  }
  if (best) shoot(best.x, best.y);
  else shoot(p.x + Math.cos(p.aim) * 300, p.y + Math.sin(p.aim) * 300);
}
function updZombie(dt) {
  const g = G,
    p = g.player,
    w = g.wave;
  if (g.over) return;
  g.surv += dt;
  g.cd = Math.max(0, g.cd - dt);
  g.muzzle = Math.max(0, g.muzzle - dt);
  g.swing = Math.max(0, g.swing - dt);
  if (g.bannerT > 0) g.bannerT -= dt;
  if (view3d) {
    p.aim = CAM.yaw;
    p.face = Math.cos(CAM.yaw) >= 0 ? 1 : -1;
  } else if (performance.now() - (mouse.t || 0) < 3000 && !joy && scene === 'play') {
    p.aim = Math.atan2(mouse.y - H / 2, mouse.x - W / 2);
    p.face = Math.cos(p.aim) >= 0 ? 1 : -1;
  }
  if (scene === 'play') {
    if (g.firing) {
      const at = view3d
        ? { x: p.x + Math.cos(CAM.yaw) * 300, y: p.y + Math.sin(CAM.yaw) * 300 }
        : { x: p.x + mouse.x - W / 2, y: p.y + mouse.y - H / 2 };
      shoot(at.x, at.y);
    } else if (keys[' ']) shootAuto();
  }
  // oleadas
  if (w.state == 'wait') {
    w.t += dt;
    if (w.t >= 6) startWave(1);
  } else if (w.state == 'run') {
    w.t += dt;
    w.spawnT -= dt;
    if (w.left > 0 && w.spawnT <= 0 && g.zs.length < 16) {
      spawnZ();
      w.left--;
      w.spawnT = Math.max(
        1.2,
        (WAVES[Math.min(w.n, 5) - 1].len / WAVES[Math.min(w.n, 5) - 1].count) * 0.7
      );
    }
    if (w.t >= w.len || (w.boss && g.bossDead && w.t > 2)) {
      mevent('wave');
      if (w.n < g.zc.waves) {
        clearZ();
        w.state = 'break';
        w.t = 0;
        banner(
          'OLEADA ' + w.n + ' SUPERADA',
          'Los zombis se dispersan… busca bolsas con suministros'
        );
        beep(500, 0.5, 'sine', 0.1, 300);
      } else if (!g.zc.escape) {
        w.state = 'done';
        clearZ();
      } else {
        w.state = 'escape';
        g.pod = true;
        w.spawnT = 2;
        banner(
          'LA CÁPSULA DE ESCAPE ESTÁ ABIERTA',
          '¡Corre a Navegación (marcada en verde en el minimapa)!'
        );
      }
    }
  } else if (w.state == 'break') {
    w.t += dt;
    if (w.t >= 9) {
      w.n++;
      startWave(w.n);
    }
  } else if (w.state == 'escape') {
    w.spawnT -= dt;
    if (w.spawnT <= 0 && g.zs.length < 18) {
      spawnZ(true);
      w.spawnT = 3;
    }
  }
  // balas
  for (const b of g.bullets) {
    for (let s = 0; s < 4 && b.life > 0; s++) {
      b.x += (b.vx * dt) / 4;
      b.y += (b.vy * dt) / 4;
      if (!walk(b.x, b.y)) {
        b.life = 0;
        burst(b.x, b.y, 3, '#ffcf70', 80, 0.3);
        break;
      }
      for (const z of g.zs)
        if (Math.hypot(z.x - b.x, z.y - b.y) < (z.boss ? 38 : 20)) {
          z.hp -= b.dmg;
          z.hurt = 0.15;
          b.life = 0;
          burst(z.x, z.y, 6, '#4a7a2a', 120);
          move(z, b.vx * 0.012, b.vy * 0.012);
          break;
        }
    }
    b.life -= dt;
  }
  g.bullets = g.bullets.filter(b => b.life > 0);
  // zombis
  for (const z of g.zs) {
    z.step += dt * (z.run ? 12 : 8);
    z.cd -= dt;
    z.pt -= dt;
    const d = dist(z, p);
    if (z.pt <= 0) {
      z.pt = 0.45;
      if (d < 600 && clearLine(z, p, true)) z.path = [{ x: p.x, y: p.y, chase: 1 }];
      else {
        let r = route(nearestNode(z), nearestNode(p));
        if (
          r.length > 1 &&
          dist(z, { x: NODES[r[1]][0], y: NODES[r[1]][1] }) <
            Math.hypot(NODES[r[0]][0] - NODES[r[1]][0], NODES[r[0]][1] - NODES[r[1]][1])
        )
          r = r.slice(1);
        z.path = r.map(i => ({ x: NODES[i][0], y: NODES[i][1] }));
        z.path.push({ x: p.x, y: p.y, chase: 1 });
      }
    }
    const t = z.path[0];
    if (t) {
      if (t.chase) {
        t.x = p.x;
        t.y = p.y;
      }
      const dx = t.x - z.x,
        dy = t.y - z.y,
        dd = Math.hypot(dx, dy);
      if (dd < 10 && !t.chase) z.path.shift();
      else if (dd > 1) {
        const m = move(z, (dx / dd) * z.sp * dt, (dy / dd) * z.sp * dt);
        if (Math.abs(dx) > 2) z.face = dx > 0 ? 1 : -1;
        if (m < z.sp * dt * 0.2) {
          z.stuck += dt;
          if (z.stuck > 1) {
            const n = nearestNode(z);
            z.x = NODES[n][0];
            z.y = NODES[n][1];
            z.stuck = 0;
            z.path = [];
          }
        } else z.stuck = 0;
      }
    }
    if (d < (z.boss ? 58 : 32) && z.cd <= 0 && p.alive) {
      z.cd = 0.9;
      g.hp -= z.boss ? 18 : 7 + g.wave.n * 2;
      g.flash = 0.5;
      g.shake = 0.3;
      beep(90, 0.15, 'sawtooth', 0.12, -40);
      burst(p.x, p.y, 8, '#7a0b0b', 160);
    }
  }
  for (let i = 0; i < g.zs.length; i++)
    for (let j = i + 1; j < g.zs.length; j++) {
      const a = g.zs[i],
        b = g.zs[j],
        d = dist(a, b);
      if (d < 26 && d > 0) {
        const k = (26 - d) / 2 / d;
        move(a, (a.x - b.x) * k, (a.y - b.y) * k);
        move(b, (b.x - a.x) * k, (b.y - a.y) * k);
      }
    }
  for (const z of g.zs)
    if (z.hp <= 0) {
      g.kills++;
      mevent('zkill');
      if (z.boss) {
        mevent('boss');
        g.bossDead = true;
      }
      burst(z.x, z.y, 14, '#3f6a22', 160);
      g.blood.push({
        x: z.x,
        y: z.y + 14,
        r: rnd(18, 26),
        dots: Array.from({ length: 5 }, () => [rnd(-40, 40), rnd(-20, 24), rnd(2, 4)]),
      });
      if (g.blood.length > 40) g.blood.shift();
      beep(70, 0.2, 'sawtooth', 0.1, -30);
    }
  g.zs = g.zs.filter(z => z.hp > 0);
  g.gt -= dt;
  if (g.gt <= 0) {
    g.gt = rnd(2.5, 5);
    if (g.zs.some(z => dist(z, p) < 450)) beep(rnd(55, 80), 0.5, 'sawtooth', 0.08, -20);
  }
  if (g.hp <= 0) {
    g.hp = 0;
    endZombie('zlose');
  }
}
function drawBags() {
  if (!G.bags) return;
  const p = G.player;
  for (const b of G.bags) {
    ctx.save();
    ctx.translate(b.x, b.y);
    ctx.fillStyle = 'rgba(0,0,0,.4)';
    ctx.beginPath();
    ctx.ellipse(2, 12, 22, 7, 0, 0, 6.3);
    ctx.fill();
    if (b.open) {
      ctx.fillStyle = '#4a4236';
      rr(-18, 2, 36, 12, 6);
      ctx.fill();
      ctx.strokeStyle = '#000';
      ctx.lineWidth = 1.5;
      ctx.stroke();
    } else {
      const g = ctx.createLinearGradient(-18, -14, 18, 14);
      g.addColorStop(0, '#5d6b4a');
      g.addColorStop(1, '#2a3320');
      ctx.fillStyle = g;
      rr(-18, -12, 36, 26, 10);
      ctx.fill();
      ctx.strokeStyle = '#000';
      ctx.lineWidth = 2;
      ctx.stroke();
      ctx.strokeStyle = '#8a7a50';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(-8, -12);
      ctx.quadraticCurveTo(0, -24, 8, -12);
      ctx.stroke();
      ctx.fillStyle = '#b9a98a';
      ctx.fillRect(-4, -2, 8, 5);
    }
    ctx.restore();
    if (!b.open && dist(p, b) < 130)
      txt('[E] Registrar bolsa', b.x, b.y - 30, 13, '#ffd740', 'center');
  }
}
function drawZombies() {
  const g = G,
    p = g.player,
    pulse = 0.5 + 0.5 * Math.sin(g.t * 5);
  if (g.pod) {
    const gr = ctx.createRadialGradient(POD.x, POD.y, 5, POD.x, POD.y, 110);
    gr.addColorStop(0, `rgba(80,255,150,${0.5 + 0.3 * pulse})`);
    gr.addColorStop(1, 'rgba(0,255,100,0)');
    ctx.fillStyle = gr;
    ctx.beginPath();
    ctx.arc(POD.x, POD.y, 110, 0, 6.3);
    ctx.fill();
    ctx.fillStyle = '#223';
    ctx.beginPath();
    ctx.ellipse(POD.x, POD.y, 44, 30, 0, 0, 6.3);
    ctx.fill();
    ctx.strokeStyle = '#6f9';
    ctx.lineWidth = 4;
    ctx.stroke();
    txt('CÁPSULA DE ESCAPE', POD.x, POD.y + 52, 14, '#9fb', 'center');
    if (g.nearPod) txt('[E] Escapar', POD.x, POD.y - 50, 16, '#ffd740', 'center');
  }
  for (const z of g.zs.slice().sort((a, b) => a.y - b.y)) {
    drawCrew(
      z.x,
      z.y,
      z.boss ? '#8a3030' : z.run ? '#7a8a40' : '#5f7f52',
      z.face,
      z.step,
      1,
      z.scale || 1,
      true,
      g.t,
      false,
      true
    );
    if (z.hp < z.max) {
      ctx.fillStyle = 'rgba(0,0,0,.6)';
      ctx.fillRect(z.x - 16, z.y - 40, 32, 4);
      ctx.fillStyle = '#e53935';
      ctx.fillRect(z.x - 16, z.y - 40, 32 * Math.max(0, z.hp / z.max), 4);
    }
  }
  if (g.wep && p.alive) {
    const L = g.wep == 'bate' ? 36 : 28;
    ctx.strokeStyle = g.wep == 'bate' ? '#a67c52' : '#1a1a1a';
    ctx.lineWidth = g.wep == 'escopeta' ? 6 : 4;
    ctx.lineCap = 'round';
    ctx.beginPath();
    ctx.moveTo(p.x + Math.cos(p.aim) * 10, p.y + 2 + Math.sin(p.aim) * 10);
    ctx.lineTo(p.x + Math.cos(p.aim) * L, p.y + 2 + Math.sin(p.aim) * L);
    ctx.stroke();
    ctx.lineCap = 'butt';
  }
  ctx.globalCompositeOperation = 'lighter';
  for (const b of g.bullets) {
    ctx.strokeStyle = 'rgba(255,220,120,.9)';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(b.x, b.y);
    ctx.lineTo(b.x - b.vx * 0.03, b.y - b.vy * 0.03);
    ctx.stroke();
  }
  ctx.globalCompositeOperation = 'source-over';
  if (g.swing > 0) {
    ctx.strokeStyle = `rgba(255,255,255,${g.swing * 3})`;
    ctx.lineWidth = 6;
    ctx.beginPath();
    ctx.arc(p.x, p.y, 55, p.aim - 1, p.aim + 1);
    ctx.stroke();
  }
}
function drawZIntro() {
  ctx.fillStyle = 'rgba(0,0,0,.94)';
  ctx.fillRect(0, 0, W, H);
  const bar = H * 0.12;
  ctx.fillStyle = '#000';
  ctx.fillRect(0, 0, W, bar);
  ctx.fillRect(0, H - bar, W, bar);
  ctx.save();
  ctx.shadowColor = '#e53935';
  ctx.shadowBlur = 40;
  txt('SUPERVIVENCIA ZOMBI', W / 2, H / 2 - 100, Math.min(60, W / 10), '#e53935', 'center');
  ctx.restore();
  drawCrew(W / 2, H / 2 - 10, G.player.color, 1, 0, 1, 2.2, false, G.t);
  [
    'Oleada 1: no tienes arma. ¡Corre! (o busca bolsas escondidas)',
    'Oleada 2: recibes una pistola. Sobrevive 5 oleadas y escapa en la cápsula.',
    'Clic / Espacio: disparar · 1-2-3: arma · E: registrar bolsas',
  ].forEach((l, i) =>
    txt(l, W / 2, H / 2 + 70 + i * 28, Math.min(18, W / 30), '#fff', 'center', false)
  );
}
function drawZHUD() {
  const g = G,
    w = g.wave,
    pulse = 0.5 + 0.5 * Math.sin(g.t * 6);
  ctx.fillStyle = 'rgba(0,0,0,.62)';
  rr(W / 2 - 100, 10, 200, 60, 10);
  ctx.fill();
  txt('⏱ ' + fmtT(g.surv), W / 2, 30, 28, '#fff', 'center');
  txt(
    w.state == 'wait'
      ? 'PREPÁRATE…'
      : w.state == 'break'
        ? 'DESCANSO'
        : w.state == 'escape'
          ? '¡ESCAPA!'
          : `OLEADA ${w.n} / ${g.zc.waves}`,
    W / 2,
    54,
    13,
    '#ffb74d',
    'center'
  );
  if (w.state == 'run') {
    ctx.fillStyle = '#222';
    rr(W / 2 - 90, 62, 180, 4, 2);
    ctx.fill();
    ctx.fillStyle = '#ff7043';
    rr(W / 2 - 90, 62, 180 * Math.min(1, w.t / w.len), 4, 2);
    ctx.fill();
  }
  ctx.fillStyle = 'rgba(0,0,0,.55)';
  rr(12, 12, 300, 86, 8);
  ctx.fill();
  txt('Zombis: ' + g.zs.length, 24, 28, 14, '#ff8a80');
  txt('Bajas: ' + g.kills, 24, 46, 14, '#fff');
  txt('Mejor tiempo: ' + fmtT(g.best), 24, 64, 13, '#9fb3c8', 'left', false);
  txt(
    g.pod
      ? 'Objetivo: llega a la cápsula (Navegación)'
      : !g.wep
        ? 'Busca bolsas escondidas con armas [E]'
        : 'Sobrevive a las ' + g.zc.waves + ' oleadas',
    24,
    84,
    12,
    '#ffd740',
    'left',
    false
  );
  drawMinimap();
  // salud
  ctx.fillStyle = 'rgba(0,0,0,.6)';
  rr(12, H - 46, 244, 34, 8);
  ctx.fill();
  ctx.fillStyle = g.hp > 50 ? '#43a047' : g.hp > 25 ? '#fbc02d' : '#e53935';
  rr(16, H - 42, Math.max(0, (236 * g.hp) / 100), 26, 6);
  ctx.fill();
  txt('❤ ' + Math.ceil(g.hp), 28, H - 29, 15, '#fff', 'left');
  if (g.hp < 35) {
    ctx.fillStyle = `rgba(150,0,0,${0.12 + 0.12 * pulse})`;
    ctx.fillRect(0, 0, W, H);
  }
  // armas
  WORDER.forEach((k, i) => {
    const x = W / 2 - 170 + i * 115,
      y = H - 58,
      own = g.weps[k];
    ctx.globalAlpha = own ? 1 : 0.35;
    ctx.fillStyle = g.wep == k ? 'rgba(255,200,60,.35)' : 'rgba(0,0,0,.6)';
    rr(x, y, 108, 42, 8);
    ctx.fill();
    ctx.strokeStyle = g.wep == k ? '#ffd740' : '#fff4';
    ctx.lineWidth = 2;
    ctx.stroke();
    txt(`${i + 1} ${WICON[k]} ${WNAME[k]}`, x + 54, y + 21, 13, '#fff', 'center');
    ctx.globalAlpha = 1;
  });
  if (g.wep && g.wep != 'bate') txt('Munición: ' + g.ammo, W / 2, H - 70, 14, '#ffd740', 'center');
  if (g.toastT > 0) {
    ctx.font = 'bold 18px system-ui';
    const tw = ctx.measureText(g.toast).width + 40;
    ctx.fillStyle = 'rgba(0,0,0,.6)';
    rr(W / 2 - tw / 2, H - 130, tw, 38, 6);
    ctx.fill();
    txt(g.toast, W / 2, H - 111, 18, '#fff', 'center');
  }
  // botones
  const bs = Math.min(88, W * 0.17),
    bx = W - bs - 14,
    by = H - bs - 14;
  const btn = (x, y, label, sub, on, col, fn) => {
    ctx.globalAlpha = on ? 1 : 0.32;
    const gr = ctx.createRadialGradient(
      x + bs * 0.4,
      y + bs * 0.35,
      4,
      x + bs / 2,
      y + bs / 2,
      bs / 2
    );
    gr.addColorStop(0, shade(col, 0.3));
    gr.addColorStop(1, shade(col, -0.4));
    ctx.fillStyle = gr;
    ctx.beginPath();
    ctx.arc(x + bs / 2, y + bs / 2, bs / 2, 0, 6.3);
    ctx.fill();
    ctx.strokeStyle = 'rgba(255,255,255,.35)';
    ctx.lineWidth = 3;
    ctx.stroke();
    txt(label, x + bs / 2, y + bs / 2 - 6, bs > 76 ? 15 : 12, '#fff', 'center');
    txt(sub, x + bs / 2, y + bs / 2 + 13, 11, '#fff', 'center', false);
    ctx.globalAlpha = 1;
    if (on) addHit(x, y, bs, bs, fn, false);
  };
  btn(bx, by, 'USAR', '[E]', !!(g.nearBag || g.nearPod || g.nearCam), '#3a7bd5', doUse);
  btn(bx - bs - 8, by, 'DISPARAR', '[Espacio]', true, '#c62828', shootAuto);
  btn(bx, by - bs - 8, 'ARMA', '[1-3]', true, '#6a5acd', cycleWep);
  if (g.bannerT > 0) {
    const a = Math.min(1, g.bannerT);
    ctx.fillStyle = `rgba(0,0,0,${0.55 * a})`;
    ctx.fillRect(0, H * 0.28, W, 110);
    ctx.globalAlpha = a;
    txt(g.banner, W / 2, H * 0.28 + 38, Math.min(44, W / 16), '#ff5252', 'center');
    txt(g.bannerSub, W / 2, H * 0.28 + 82, Math.min(18, W / 32), '#fff', 'center', false);
    ctx.globalAlpha = 1;
  }
  if (joy && joy.active) {
    ctx.strokeStyle = '#fff7';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(joy.sx, joy.sy, 50, 0, 6.3);
    ctx.stroke();
    ctx.fillStyle = '#fff6';
    ctx.beginPath();
    ctx.arc(joy.sx + (joy.vx || 0) * 50, joy.sy + (joy.vy || 0) * 50, 22, 0, 6.3);
    ctx.fill();
  }
  if (g.intro > 0) drawZIntro();
}
function drawZEnd() {
  const g = G,
    win = g.over.winner == 'zwin';
  ctx.fillStyle = 'rgba(0,0,0,.8)';
  ctx.fillRect(0, 0, W, H);
  beginUI(700, 520);
  ctx.save();
  ctx.shadowColor = win ? '#69f0ae' : '#ff5252';
  ctx.shadowBlur = 30;
  txt(
    win ? '¡HAS ESCAPADO!' : 'LOS ZOMBIS TE ATRAPARON',
    350,
    80,
    win ? 60 : 44,
    win ? '#69f0ae' : '#ff5252',
    'center'
  );
  ctx.restore();
  txt('Tiempo sobrevivido: ' + fmtT(g.surv), 350, 170, 28, '#fff', 'center');
  txt('Oleada alcanzada: ' + g.wave.n + ' / ' + g.zc.waves, 350, 215, 22, '#ffb74d', 'center');
  txt('Zombis eliminados: ' + g.kills, 350, 250, 22, '#fff', 'center');
  txt(
    'Mejor tiempo: ' + fmtT(g.best) + (g.surv >= g.best && g.surv > 1 ? '  ¡NUEVO RÉCORD!' : ''),
    350,
    295,
    20,
    '#9fb3c8',
    'center'
  );
  drawCrew(350, 350, g.player.color, 1, 0, win ? 1 : 0.4, 1.3, false, menuT);
  uiBtn(
    230,
    420,
    240,
    44,
    'JUGAR DE NUEVO',
    '#2e7d32',
    () => {
      scene = 'menu';
    },
    20
  );
  endUI();
  cinematicBars();
  finishFX();
}
