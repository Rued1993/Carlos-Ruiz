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
const WORDER = ['bate', 'pistola', 'escopeta', 'subfusil'],
  WNAME = { bate: 'Bate', pistola: 'Pistola', escopeta: 'Escopeta', subfusil: 'Subfusil' };
const MAG = { pistola: 12, escopeta: 6, subfusil: 30 };
/** Color del zombi según su tipo. */
function zColor(z) {
  return z.boss
    ? '#8a3030'
    : z.spit
      ? '#7ab030'
      : z.tank
        ? '#3d4a38'
        : z.bomb
          ? '#d07a1a'
          : z.run
            ? '#7a8a40'
            : '#5f7f52';
}
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
  G.drops = [];
  G.buffs = { rapid: 0 };
  G.shield = 0;
  G.dashCd = 0;
  G.inv = 0;
  G.up = { dmg: 0, mag: 0, armor: 0 };
  G.cash = 0;
  G.gren = 0;
  G.grs = [];
  G.spits = [];
  G.score = 0;
  G.combo = 0;
  G.comboT = 0;
  G.mags = {};
  G.reloadT = 0;
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
  if (scene === 'shop') scene = 'play';
  w.state = 'run';
  w.t = 0;
  w.len = W_.len * G.zc.lenMul;
  w.left = Math.ceil(W_.count * diff().zcount);
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
  } else if (n >= 3 && Math.random() < 0.16) {
    z.tank = true;
    z.hp *= 3;
    z.sp *= 0.7;
    z.scale = 1.3;
  } else if (n >= 4 && Math.random() < 0.14) {
    z.bomb = true;
    z.sp *= 1.15;
  } else if (n >= 3 && Math.random() < 0.16) {
    z.spit = true;
    z.sp *= 0.85;
  }
  z.hp = Math.round(z.hp * diff().zhp);
  z.max = z.hp;
  z.sp *= diff().zsp;
  g.zs.push(z);
  burst(z.x, z.y, 8, '#555a50', 70, 0.8);
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
  let bs = 0;
  try {
    bs = +(localStorage.getItem('zscore') || 0);
    if (G.score > bs) {
      bs = G.score;
      localStorage.setItem('zscore', bs);
    }
  } catch (e) {}
  G.bestScore = bs;
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
    G.reloadT = 0;
    beep(400, 0.05, 'square', 0.04);
  }
}
function cycleWep() {
  const own = WORDER.filter(w => G.weps[w]);
  if (!own.length) return;
  G.wep = own[(own.indexOf(G.wep) + 1) % own.length];
  G.reloadT = 0;
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
          z.hp -= Math.round(50 * dmgMul());
          z.hurt = 0.2;
          move(z, Math.cos(a) * 20, Math.sin(a) * 20);
          burst(z.x, z.y, 8, '#4a7a2a', 150);
        }
      }
    }
    beep(180, 0.12, 'sawtooth', 0.08, -60);
    return;
  }
  if (g.reloadT > 0) return;
  ensureMag(w);
  if (g.mags[w] <= 0) {
    g.cd = 0.3;
    if (g.ammo > 0) startReload();
    else {
      beep(200, 0.05, 'square', 0.05);
      toast('Sin munición', 1);
    }
    return;
  }
  g.mags[w]--;
  if (g.mags[w] === 0 && g.ammo > 0) setTimeout(() => G && G.zc && startReload(), 180);
  const ws = WSTATS[w],
    n = ws.n,
    spread = ws.spread,
    dmg = Math.round(ws.dmg * dmgMul());
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
  g.cd = ws.cd * (g.buffs && g.buffs.rapid > 0 ? 0.5 : 1);
  g.muzzle = 0.09;
  g.shake = Math.max(g.shake, w == 'escopeta' ? 0.25 : 0.08);
  sfx.shot(w, p.x, p.y);
  debris3D(p.x, 42, p.y, '#d9a441', 1);
}
/** Llena el cargador la primera vez que se usa un arma, tomando de la reserva. */
function ensureMag(w) {
  if (G.mags[w] === undefined) {
    const t = Math.min(magSize(w), G.ammo);
    G.ammo -= t;
    G.mags[w] = t;
  }
}
/** Recarga el arma actual (tecla R / botón X del mando). */
function startReload() {
  const g = G,
    w = g.wep;
  if (!w || !MAG[w] || g.reloadT > 0 || scene !== 'play') return;
  ensureMag(w);
  if (g.mags[w] >= magSize(w) || g.ammo <= 0) return;
  g.reloadT = w === 'escopeta' ? 1.6 : 1.1;
  g.reloadW = w;
  sfx.reload();
  setTimeout(() => sfx.reload(), g.reloadT * 600);
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
    if (g.firing || pad.fire) {
      const at = view3d
        ? { x: p.x + Math.cos(CAM.yaw) * 300, y: p.y + Math.sin(CAM.yaw) * 300 }
        : { x: p.x + mouse.x - W / 2, y: p.y + mouse.y - H / 2 };
      shoot(at.x, at.y);
    } else if (keys[' ']) shootAuto();
  }
  // recarga
  if (g.reloadT > 0) {
    g.reloadT -= dt;
    if (g.reloadT <= 0 && g.wep === g.reloadW) {
      const take = Math.min(magSize(g.wep) - g.mags[g.wep], g.ammo);
      g.mags[g.wep] += take;
      g.ammo -= take;
      beep(520, 0.07, 'square', 0.06);
    }
  }
  updExtras(dt);
  // combo
  if (g.comboT > 0) {
    g.comboT -= dt;
    if (g.comboT <= 0) g.combo = 0;
  }
  // botín soltado por los zombis
  for (let i = g.drops.length - 1; i >= 0; i--) {
    const d = g.drops[i];
    d.t -= dt;
    if (dist(d, p) < 44 && p.alive) {
      if (d.type === 'rafaga') {
        g.buffs.rapid = 10;
        toast('¡RÁFAGA! cadencia x2 durante 10 s', 1.6);
        popup(p.x, p.y - 20, 'RÁFAGA', '#ffea00', 18);
      } else if (d.type === 'escudo') {
        g.shield = 40;
        toast('¡ESCUDO! absorbe 40 de daño', 1.6);
        popup(p.x, p.y - 20, 'ESCUDO', '#80d8ff', 18);
      } else if (d.type === 'municion') {
        g.ammo += 10;
        popup(p.x, p.y - 20, '+10', '#ffd740', 16);
        toast('+10 munición', 1.2);
      } else {
        popup(p.x, p.y - 20, '+25', '#7bff9a', 16);
        g.hp = Math.min(100, g.hp + 25);
        toast('+25 salud', 1.2);
      }
      sfx.pickup();
      g.drops.splice(i, 1);
    } else if (d.t <= 0) g.drops.splice(i, 1);
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
      addScore(100 * w.n);
      if (w.n < g.zc.waves) {
        clearZ();
        w.state = 'break';
        w.t = 0;
        banner('OLEADA ' + w.n + ' SUPERADA', 'Los zombis se dispersan… pulsa B para la tienda');
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
    if (w.t >= 14) {
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
          popup(z.x, z.y - 34, b.dmg, '#fff', 13);
          z.hurt = 0.15;
          HUDS.hitMark = 0.16;
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
    const t = z.spit && d < 260 && clearLine(z, p) ? null : z.path[0];
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
    if (z.bomb && d < 46 && p.alive) {
      z.hp = 0;
      z.selfDestruct = true;
      if (d < 110) hurtPlayer(24 * diff().zdmg, z);
      for (const o of g.zs) if (o !== z && dist(o, z) < 110) o.hp -= 40;
      g.flash = 0.7;
      g.shake = 0.6;
      burst(z.x, z.y, 36, '#ff9a20', 260, 0.9);
      debris3D(z.x, 20, z.y, '#ff8a20', 10);
      sfx.explosion(z.x, z.y);
    } else if (d < (z.boss ? 58 : z.tank ? 40 : 32) && z.cd <= 0 && p.alive) {
      z.cd = 0.9;
      hurtPlayer((z.boss ? 18 : z.tank ? 14 : 7 + g.wave.n * 2) * diff().zdmg, z);
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
    if (z.hp <= 0 && !z.selfDestruct) {
      g.kills++;
      g.combo = Math.min(8, g.combo + 1);
      g.comboT = 4;
      addScore(Math.round(10 * (z.boss ? 20 : z.tank ? 4 : 1) * (1 + g.combo * 0.25)));
      if (z.boss || Math.random() < 0.22 * diff().drop)
        g.drops.push({
          x: z.x,
          y: z.y,
          type: dropType(z),
          t: 14,
        });
      mevent('zkill');
      popup(z.x, z.y - 30, '+' + Math.round(10 * (1 + g.combo * 0.25)), '#ffd740', 15);
      if (z.boss) {
        slowmo(0.25, 1.4);
        shockwave3D(z.x, z.y, 220, '#7bff9a');
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
      sfx.hit(z.x, z.y);
    }
  g.zs = g.zs.filter(z => z.hp > 0);
  g.gt -= dt;
  if (g.gt <= 0) {
    g.gt = rnd(2.5, 5);
    const near = g.zs.find(z => dist(z, p) < 450);
    if (near) sfx.growl(near.x, near.y, near.boss || near.tank);
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
  drawExtras2D();
  for (const d of g.drops) {
    ctx.fillStyle = DROPC[d.type] || '#ffffff';
    rr(d.x - 10, d.y - 10, 20, 20, 4);
    ctx.fill();
    txt(DROPG[d.type] || '+', d.x, d.y, 16, d.type === 'botiquin' ? '#d32f2f' : '#332', 'center');
  }
  for (const z of g.zs.slice().sort((a, b) => a.y - b.y)) {
    drawCrew(z.x, z.y, zColor(z), z.face, z.step, 1, z.scale || 1, true, g.t, false, true);
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
  // --- cronómetro y oleadas (arriba al centro)
  glass(W / 2 - 110, 10, 220, 66, 'rgba(255,170,80,.45)', 14);
  icon('clock', W / 2 - 78, 30, 20, '#ffcc80');
  txt(fmtT(g.surv), W / 2 + 6, 31, 28, '#fff', 'center');
  const lab =
    w.state == 'wait'
      ? 'PREPÁRATE…'
      : w.state == 'break'
        ? 'DESCANSO · [B] TIENDA'
        : w.state == 'escape'
          ? '¡ESCAPA!'
          : `OLEADA ${w.n} / ${g.zc.waves}`;
  txt(lab, W / 2, 54, 12, '#ffb74d', 'center');
  for (let i = 0; i < g.zc.waves; i++) {
    const done = i + 1 < w.n || (i + 1 === w.n && w.state === 'break'),
      cur = i + 1 === w.n && w.state === 'run';
    ctx.fillStyle = done ? '#6fe08a' : cur ? '#ffb74d' : 'rgba(255,255,255,.2)';
    rr(W / 2 - 54 + i * (108 / g.zc.waves), 64, 108 / g.zc.waves - 4, 5, 2.5);
    ctx.fill();
    if (cur) {
      ctx.fillStyle = '#ffd180';
      rr(
        W / 2 - 54 + i * (108 / g.zc.waves),
        64,
        (108 / g.zc.waves - 4) * Math.min(1, w.t / w.len),
        5,
        2.5
      );
      ctx.fill();
    }
  }
  // --- estadísticas (arriba a la izquierda)
  glass(14, 14, 290, 92, 'rgba(255,90,74,.4)', 14);
  icon('skull', 34, 34, 20, '#ff8a80');
  txt(`${g.zs.length}`, 52, 35, 17, '#ff8a80', 'left');
  txt(`bajas ${g.kills}`, 92, 35, 14, '#fff', 'left');
  icon('star', 34, 60, 18, '#ffd54f');
  txt(`${g.score}`, 52, 61, 16, '#ffd54f', 'left');
  if (g.buffs && g.buffs.rapid > 0)
    chip(130, 71, 'RÁFAGA ' + Math.ceil(g.buffs.rapid) + 's', 'bolt', '#ffea00', 12);
  if (g.shield > 0) chip(224, 71, 'ESCUDO ' + Math.ceil(g.shield), 'shield', '#80d8ff', 12);
  if (g.dashCd > 0) chip(224, 49, 'esquiva ' + g.dashCd.toFixed(1), 'bolt', '#888', 12);
  else chip(224, 49, 'Q esquiva', 'bolt', '#9fd8ff', 12);
  if (g.combo > 1) chip(130, 49, 'x' + (1 + g.combo * 0.25).toFixed(2), 'bolt', '#ffb74d', 12);
  icon('coin', 34, 84, 18, '#ffe082');
  txt(`${g.cash}`, 52, 85, 16, '#ffe082', 'left');
  txt(`Récord ${fmtT(g.best)}`, 292, 85, 11, '#9fb3c8', 'right', false);
  txt(
    g.pod
      ? 'Llega a la cápsula (Navegación)'
      : !g.wep
        ? 'Busca bolsas escondidas [E]'
        : 'Sobrevive a las ' + g.zc.waves + ' oleadas',
    292,
    35,
    11,
    '#ffd180',
    'right',
    false
  );
  drawMinimap();
  // --- salud, armadura y resistencia (abajo a la izquierda)
  hudBar(
    'hp',
    16,
    H - 48,
    250,
    30,
    g.hp,
    100,
    g.hp > 50 ? '#43b05a' : g.hp > 25 ? '#e0b020' : '#e53935',
    'heart',
    Math.ceil(g.hp)
  );
  for (let i = 0; i < 2; i++)
    icon('shield', 284 + i * 22, H - 33, 17, i < g.up.armor ? '#7fd0ff' : 'rgba(255,255,255,.18)');
  if (g.stam !== undefined) {
    ctx.fillStyle = 'rgba(0,0,0,.45)';
    rr(16, H - 14, 250, 5, 2.5);
    ctx.fill();
    ctx.fillStyle = g.stamLock ? '#e57373' : '#ffd54f';
    rr(16, H - 14, (250 * g.stam) / 100, 5, 2.5);
    ctx.fill();
  }
  if (g.hp < 35) {
    ctx.fillStyle = `rgba(150,0,0,${0.12 + 0.12 * pulse})`;
    ctx.fillRect(0, 0, W, H);
  }
  // --- armas (abajo al centro)
  const sw = 92,
    gap = 8,
    bw0 = WORDER.length * (sw + gap) - gap,
    sx0 = W / 2 - bw0 / 2,
    sy = H - 66;
  WORDER.forEach((k, i) => {
    const x = sx0 + i * (sw + gap),
      own = g.weps[k],
      sel = g.wep == k;
    ctx.globalAlpha = own ? 1 : 0.35;
    glass(x, sy, sw, 54, sel ? 'rgba(255,213,79,.9)' : 'rgba(140,180,240,.3)', 10);
    if (sel) {
      ctx.fillStyle = 'rgba(255,213,79,.12)';
      rr(x, sy, sw, 54, 10);
      ctx.fill();
    }
    icon(k === 'bate' ? 'bat' : k, x + sw / 2, sy + 22, 46, sel ? '#ffe082' : '#cfd8dc');
    txt(`${i + 1}`, x + 10, sy + 12, 11, '#9fb3c8', 'left');
    txt(WNAME[k], x + sw / 2, sy + 44, 11, '#fff', 'center', false);
    ctx.globalAlpha = 1;
  });
  if (g.wep && g.wep != 'bate') {
    const mg = g.mags[g.wep] === undefined ? Math.min(magSize(g.wep), g.ammo) : g.mags[g.wep],
      rs = g.mags[g.wep] === undefined ? g.ammo - mg : g.ammo,
      empty = mg === 0;
    icon('bullet', W / 2 - 62, sy - 22, 20, empty ? '#ff5a4a' : '#ffd54f');
    txt(
      g.reloadT > 0 ? 'RECARGANDO' : String(mg),
      W / 2 - 46,
      sy - 22,
      24,
      empty ? '#ff5a4a' : '#fff',
      'left'
    );
    txt('/ ' + rs, W / 2 + (g.reloadT > 0 ? 66 : 4), sy - 20, 15, '#9fb3c8', 'left', false);
    if (g.reloadT > 0) {
      const tot = g.reloadW === 'escopeta' ? 1.6 : 1.1;
      ctx.fillStyle = 'rgba(0,0,0,.5)';
      rr(W / 2 - 62, sy - 6, 124, 4, 2);
      ctx.fill();
      ctx.fillStyle = '#ffd54f';
      rr(W / 2 - 62, sy - 6, 124 * (1 - g.reloadT / tot), 4, 2);
      ctx.fill();
    }
  }
  chip(
    sx0 + bw0 + 16,
    sy + 12,
    'x' + g.gren + ' [G]',
    'grenade',
    g.gren ? '#ffb74d' : '#78909c',
    13
  );
  drawToast(sy - 62);
  // --- botones de acción
  const r = Math.min(46, W * 0.085),
    bx = W - r - 16,
    by = H - r - 16,
    st = g.wave.state;
  actionBtn(
    bx,
    by,
    r,
    'USAR',
    'E',
    'touch',
    !!(g.nearBag || g.nearPod || g.nearCam),
    '#3a7bd5',
    doUse
  );
  actionBtn(bx - r * 2 - 10, by, r, 'FUEGO', 'ESP', 'bullet', true, '#c62828', shootAuto);
  actionBtn(bx, by - r * 2 - 10, r, 'ARMA', 'TAB', 'swap', true, '#6a5acd', cycleWep);
  actionBtn(
    bx - r * 2 - 10,
    by - r * 2 - 10,
    r,
    'RECARGA',
    'R',
    'reload',
    !!g.wep && g.wep != 'bate',
    '#2e7d6a',
    startReload,
    g.reloadT > 0 ? g.reloadT / (g.reloadW === 'escopeta' ? 1.6 : 1.1) : 0
  );
  actionBtn(bx - r * 4 - 20, by, r, 'GRANADA', 'G', 'grenade', g.gren > 0, '#a0521e', throwGrenade);
  if (st === 'break' || st === 'wait')
    actionBtn(bx - r * 4 - 20, by - r * 2 - 10, r, 'TIENDA', 'B', 'bag', true, '#b8860b', openShop);
  drawBanner(g.banner, g.bannerSub, '#ff5a4a', H * 0.26);
  drawJoystick();
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
  txt(
    'Zombis eliminados: ' + g.kills + '   ·   Puntos: ' + g.score,
    350,
    250,
    22,
    '#fff',
    'center'
  );
  txt(
    'Mejor tiempo: ' +
      fmtT(g.best) +
      '   ·   Récord de puntos: ' +
      (g.bestScore || 0) +
      (g.surv >= g.best && g.surv > 1 ? '  ¡NUEVO RÉCORD!' : ''),
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

/** Elige el tipo de botín: munición, salud o un potenciador raro. */
function dropType(z) {
  const r = Math.random();
  if (z.boss) return r < 0.5 ? 'rafaga' : 'escudo';
  if (r < 0.08) return 'rafaga';
  if (r < 0.16) return 'escudo';
  return r < 0.62 ? 'municion' : 'botiquin';
}
const DROPC = { municion: '#ffd740', rafaga: '#ffea00', escudo: '#80d8ff', botiquin: '#ffffff' };
const DROPG = { municion: '•', rafaga: '»', escudo: '◆', botiquin: '+' };
