/**
 * Modo Mundo cubo (estilo Minecraft): terreno, bloques, crafteo, día/noche, zombis.
 */
'use strict';

const TS = 40,
  WW = 140,
  WH = 90,
  CYCLE = 240;
const G_WATER = 0,
  G_SAND = 1,
  G_GRASS = 2,
  G_STONE = 3,
  G_DIRT = 4,
  G_FLOOR = 5,
  G_METAL = 6;
const O_LOG = 1,
  O_BOULDER = 2,
  O_COAL = 3,
  O_PLANK = 4,
  O_COBBLE = 5,
  O_DIRT = 6,
  O_TABLE = 7,
  O_CHEST = 8,
  O_TORCH = 9,
  O_BTN = 10;
const OSOLID = new Set([1, 2, 3, 4, 5, 6, 7, 8]);
const O_IRON = 15;
const OHARD = { 15: 2, 1: 0.9, 2: 1.2, 3: 1.5, 4: 0.6, 5: 1, 6: 0.35, 7: 0.6, 8: 0.5, 9: 0.1 };
const OCOL = {
  1: '#7a5530',
  2: '#8a8a8a',
  3: '#333',
  4: '#b8935a',
  5: '#777',
  6: '#7a5a3a',
  7: '#a07a40',
  8: '#8a5a2a',
  9: '#ffb020',
  15: '#d8a070',
};
const HOTBAR = [
  'tablon',
  'piedra',
  'tierra',
  'suelo',
  'antorcha',
  'mesa',
  'horno',
  'cama',
  'brote',
  'manzana',
];
const INAME = {
  madera: 'Madera',
  tablon: 'Tablones',
  piedra: 'Piedra',
  carbon: 'Carbón',
  hierro: 'Mineral de hierro',
  lingote: 'Lingote de hierro',
  tierra: 'Tierra',
  antorcha: 'Antorchas',
  mesa: 'Mesa',
  suelo: 'Suelo',
  manzana: 'Manzana',
  horno: 'Horno',
  cama: 'Cama',
  brote: 'Brote',
  carne: 'Carne cruda',
  asada: 'Carne asada',
};
const ITEMOBJ = {
  tablon: O_PLANK,
  piedra: O_COBBLE,
  tierra: O_DIRT,
  antorcha: O_TORCH,
  mesa: O_TABLE,
  horno: 11,
  cama: 12,
  brote: 13,
};
const RECIPES = [
  { n: 'Tablones x4', in: { madera: 1 }, out: ['tablon', 4] },
  { n: 'Suelo de madera x2 (puentes)', in: { tablon: 1 }, out: ['suelo', 2] },
  { n: 'Antorchas x4', in: { madera: 1, carbon: 1 }, out: ['antorcha', 4] },
  { n: 'Mesa de trabajo', in: { tablon: 4 }, out: ['mesa', 1] },
  { n: 'Horno (cocinar carne)', in: { piedra: 8 }, out: ['horno', 1] },
  { n: 'Cama (dormir de noche)', in: { tablon: 6 }, out: ['cama', 1] },
  { n: 'Hacha (talar más rápido)', in: { tablon: 3 }, tool: 'hacha', table: true },
  { n: 'Pico (picar piedra más rápido)', in: { tablon: 3 }, tool: 'pico', table: true },
  { n: 'Espada (más daño a zombis)', in: { tablon: 2 }, tool: 'espada', table: true },
  {
    n: 'Hacha de hierro (tala muy rápida)',
    in: { lingote: 2, tablon: 1 },
    tool: 'hachaH',
    table: true,
  },
  {
    n: 'Pico de hierro (pica muy rápido)',
    in: { lingote: 2, tablon: 1 },
    tool: 'picoH',
    table: true,
  },
  {
    n: 'Espada de hierro (daño x1,7)',
    in: { lingote: 2, tablon: 1 },
    tool: 'espadaH',
    table: true,
  },
];
let GR = null,
  OB = null,
  TREES = null,
  TEX = null,
  SPAWN = null;
function hash(x, y, s) {
  let h = Math.imul(x | 0, 374761393) + Math.imul(y | 0, 668265263) + Math.imul(s | 0, 982451653);
  h = Math.imul(h ^ (h >>> 13), 1274126177);
  return ((h ^ (h >>> 16)) >>> 0) / 4294967295;
}
function vnoise(x, y, s) {
  const xi = Math.floor(x),
    yi = Math.floor(y),
    xf = x - xi,
    yf = y - yi,
    u = xf * xf * (3 - 2 * xf),
    v = yf * yf * (3 - 2 * yf),
    a = hash(xi, yi, s),
    b = hash(xi + 1, yi, s),
    c = hash(xi, yi + 1, s),
    d = hash(xi + 1, yi + 1, s);
  return a + (b - a) * u + (c - a) * v + (a - b - c + d) * u * v;
}
function mkTex(vars, after) {
  const c = document.createElement('canvas');
  c.width = c.height = 16;
  const x = c.getContext('2d');
  if (vars)
    for (let j = 0; j < 16; j++)
      for (let i = 0; i < 16; i++) {
        x.fillStyle = vars[Math.floor(Math.random() * vars.length)];
        x.fillRect(i, j, 1, 1);
      }
  if (after) after(x);
  return c;
}
function frameTex(x, dark = 'rgba(0,0,0,.45)', light = 'rgba(255,255,255,.18)') {
  x.fillStyle = dark;
  x.fillRect(0, 15, 16, 1);
  x.fillRect(15, 0, 1, 16);
  x.fillStyle = light;
  x.fillRect(0, 0, 16, 1);
  x.fillRect(0, 0, 1, 16);
}
function buildTex() {
  const T = { g: [], o: [] };
  T.g[0] = mkTex(['#2a5fbf', '#2f66c8', '#2757b3']);
  T.g[1] = mkTex(['#e0d08a', '#d8c880', '#e6d894']);
  T.g[2] = mkTex(['#5a9a3a', '#62a640', '#4f8c33', '#58963a']);
  T.g[3] = mkTex(['#7d7d7d', '#858585', '#767676', '#8a8a8a']);
  T.g[4] = mkTex(['#7a5a3a', '#6e5034', '#84623f', '#74553a']);
  T.g[5] = mkTex(['#b8935a', '#c29c62', '#ad8a52'], x => {
    x.fillStyle = 'rgba(60,35,10,.55)';
    for (let j = 3; j < 16; j += 4) x.fillRect(0, j, 16, 1);
  });
  T.g[6] = mkTex(['#6b7480', '#737c88', '#646c77'], x => {
    x.fillStyle = 'rgba(0,0,0,.35)';
    x.fillRect(0, 7, 16, 1);
    x.fillRect(7, 0, 1, 16);
  });
  T.o[14] = mkTex(['#e9e5da', '#ddd8cb', '#f1ede3'], x => {
    x.fillStyle = '#2a2a28';
    x.fillRect(0, 0, 16, 1);
    x.fillRect(0, 15, 16, 1);
    x.fillRect(0, 0, 1, 16);
    x.fillRect(15, 0, 1, 16);
    x.fillStyle = '#cbbf9c';
    x.fillRect(3, 3, 10, 10);
    x.fillStyle = '#b3a57e';
    x.fillRect(5, 5, 6, 6);
    x.fillStyle = '#cbbf9c';
    x.fillRect(7, 7, 2, 2);
    x.fillStyle = '#3a3a36';
    for (const [bx0, by0] of [
      [2, 1],
      [11, 2],
      [1, 12],
      [12, 13],
    ])
      x.fillRect(bx0, by0, 3, 1);
  });
  T.o[1] = mkTex(['#6b4a28', '#5b3f22', '#76532d'], x => {
    x.fillStyle = '#2a1a0a';
    x.fillRect(0, 0, 16, 1);
    x.fillRect(0, 15, 16, 1);
    x.fillRect(0, 0, 1, 16);
    x.fillRect(15, 0, 1, 16);
    x.fillStyle = '#b58a52';
    x.fillRect(3, 3, 10, 10);
    x.fillStyle = '#8a6438';
    x.fillRect(5, 5, 6, 6);
    x.fillStyle = '#b58a52';
    x.fillRect(7, 7, 2, 2);
  });
  const rock = (base, extra) =>
    mkTex(base, x => {
      frameTex(x, 'rgba(0,0,0,.55)', 'rgba(255,255,255,.25)');
      if (extra) extra(x);
    });
  T.o[2] = rock(['#8a8a8a', '#7a7a7a', '#999', '#707070']);
  T.o[3] = rock(['#8a8a8a', '#7a7a7a', '#999', '#707070'], x => {
    x.fillStyle = '#14141a';
    for (let i = 0; i < 7; i++)
      x.fillRect(2 + Math.floor(Math.random() * 11), 2 + Math.floor(Math.random() * 11), 2, 2);
  });
  T.o[15] = rock(['#8a8a8a', '#7a7a7a', '#999', '#707070'], x => {
    for (let i = 0; i < 6; i++) {
      x.fillStyle = i % 2 ? '#e0b48a' : '#c58a5a';
      x.fillRect(2 + Math.floor(Math.random() * 11), 2 + Math.floor(Math.random() * 11), 2, 2);
    }
  });
  T.o[4] = mkTex(['#b8935a', '#c29c62', '#ad8a52'], x => {
    x.fillStyle = 'rgba(60,35,10,.5)';
    for (let j = 3; j < 16; j += 4) x.fillRect(0, j, 16, 1);
    frameTex(x);
  });
  T.o[5] = mkTex(['#6f6f6f', '#808080', '#5e5e5e'], x => {
    x.fillStyle = 'rgba(0,0,0,.4)';
    x.fillRect(0, 5, 16, 1);
    x.fillRect(0, 10, 16, 1);
    x.fillRect(5, 0, 1, 5);
    x.fillRect(11, 5, 1, 5);
    x.fillRect(5, 10, 1, 6);
    frameTex(x);
  });
  T.o[6] = mkTex(['#7a5a3a', '#6e5034', '#84623f'], x => frameTex(x));
  T.o[7] = mkTex(['#a07a40', '#b08a4a', '#946f38'], x => {
    x.fillStyle = '#5a3a18';
    x.fillRect(0, 0, 16, 3);
    x.fillRect(0, 0, 3, 16);
    x.fillRect(13, 0, 3, 16);
    x.fillRect(0, 13, 16, 3);
    x.fillStyle = '#d9b36a';
    x.fillRect(4, 4, 3, 3);
    x.fillRect(9, 4, 3, 3);
    x.fillRect(4, 9, 8, 3);
    frameTex(x);
  });
  T.o[8] = mkTex(['#8a5a2a', '#7c5024', '#96622e'], x => {
    x.fillStyle = '#2a1808';
    x.fillRect(0, 6, 16, 2);
    x.fillRect(0, 0, 16, 1);
    x.fillRect(0, 15, 16, 1);
    x.fillStyle = '#ffd24a';
    x.fillRect(7, 6, 2, 4);
    frameTex(x);
  });
  T.o[11] = mkTex(['#6f6f6f', '#808080', '#5e5e5e'], x => {
    x.fillStyle = '#1a1a1a';
    x.fillRect(3, 6, 10, 7);
    x.fillStyle = '#ff8a20';
    x.fillRect(5, 9, 6, 3);
    x.fillStyle = '#ffd060';
    x.fillRect(6, 10, 3, 2);
    frameTex(x);
  });
  T.o[12] = mkTex(['#c0392b', '#b03427', '#cc4030'], x => {
    x.fillStyle = '#f2efe8';
    x.fillRect(1, 1, 5, 14);
    x.fillStyle = '#8a8a96';
    x.fillRect(1, 1, 5, 1);
    x.fillStyle = '#5a3a18';
    x.fillRect(0, 14, 16, 2);
    frameTex(x);
  });
  T.o[13] = mkTex(null, x => {
    x.fillStyle = '#4a9a3a';
    x.fillRect(7, 6, 2, 8);
    x.fillStyle = '#6ac04a';
    x.fillRect(4, 4, 3, 3);
    x.fillRect(9, 3, 3, 3);
    x.fillRect(6, 1, 4, 3);
  });
  T.o[9] = mkTex(null, x => {
    x.fillStyle = '#7a4a1a';
    x.fillRect(7, 6, 2, 9);
    x.fillStyle = '#ff9a20';
    x.fillRect(6, 2, 4, 5);
    x.fillStyle = '#ffe070';
    x.fillRect(7, 3, 2, 3);
  });
  T.o[10] = mkTex(['#6b7480', '#737c88'], x => {
    x.fillStyle = '#222';
    x.beginPath();
    x.arc(8, 8, 6, 0, 6.3);
    x.fill();
    x.fillStyle = '#e53935';
    x.beginPath();
    x.arc(8, 8, 4, 0, 6.3);
    x.fill();
    x.fillStyle = '#ff9a9a';
    x.fillRect(6, 6, 2, 2);
  });
  T.leaf = mkTex(['#1d5a1a', '#256a21', '#164a14', '#2c7a28'], x => {
    for (let i = 0; i < 22; i++)
      x.clearRect(Math.floor(Math.random() * 16), Math.floor(Math.random() * 16), 1 + (i % 2), 1);
  });
  TEX = T;
}
function buildWorld() {
  GR = new Uint8Array(WW * WH);
  OB = new Uint8Array(WW * WH);
  TREES = new Map();
  const seed = Math.floor(Math.random() * 9999);
  for (let y = 0; y < WH; y++)
    for (let x = 0; x < WW; x++) {
      let e =
        0.55 * vnoise(x / 26, y / 26, seed) +
        0.3 * vnoise(x / 11, y / 11, seed + 1) +
        0.15 * vnoise(x / 4.5, y / 4.5, seed + 2);
      const ed = Math.max(Math.abs(x / WW - 0.5) * 2, Math.abs(y / WH - 0.5) * 2);
      e -= Math.max(0, ed - 0.82) * 2.2;
      GR[y * WW + x] = e < 0.34 ? G_WATER : e < 0.39 ? G_SAND : e < 0.65 ? G_GRASS : G_STONE;
    }
  let sx = WW >> 1,
    sy = WH >> 1;
  outer: for (let r = 0; r < 40; r++)
    for (let dy = -r; dy <= r; dy++)
      for (let dx = -r; dx <= r; dx++)
        if (Math.max(Math.abs(dx), Math.abs(dy)) == r && GR[(sy + dy) * WW + sx + dx] == G_GRASS) {
          sx += dx;
          sy += dy;
          break outer;
        }
  SPAWN = { x: sx, y: sy };
  for (let dy = -7; dy <= 7; dy++)
    for (let dx = -9; dx <= 9; dx++) {
      const i = (sy + dy) * WW + sx + dx;
      if (GR[i] != G_GRASS) GR[i] = G_GRASS;
    }
  for (let dy = -2; dy <= 2; dy++)
    for (let dx = -4; dx <= 4; dx++) GR[(sy + dy) * WW + sx + dx] = G_METAL;
  OB[(sy - 1) * WW + sx] = O_BTN;
  const logNear = (x, y) => {
    for (let dy = -2; dy <= 2; dy++)
      for (let dx = -2; dx <= 2; dx++) {
        const xx = x + dx,
          yy = y + dy;
        if (xx >= 0 && yy >= 0 && xx < WW && yy < WH && OB[yy * WW + xx] == O_LOG) return true;
      }
    return false;
  };
  for (let y = 0; y < WH; y++)
    for (let x = 0; x < WW; x++) {
      if (Math.abs(x - sx) <= 9 && Math.abs(y - sy) <= 7) continue;
      const i = y * WW + x,
        g = GR[i],
        r = hash(x, y, seed + 7),
        f = vnoise(x / 10, y / 10, seed + 9);
      if (g == G_GRASS) {
        const tp = f > 0.56 ? 0.16 : 0.012;
        if (r < tp && x > 2 && y > 2 && x < WW - 3 && y < WH - 3 && !logNear(x, y)) {
          OB[i] = O_LOG;
          TREES.set(i, { x, y, logs: 4 });
        } else if (r > 0.995) OB[i] = O_BOULDER;
      } else if (g == G_STONE) {
        if (r < 0.09) OB[i] = O_BOULDER;
        else if (r < 0.12) OB[i] = O_COAL;
        else if (r < 0.14) OB[i] = O_IRON;
      } else if (g == G_SAND && r < 0.004) OB[i] = O_BOULDER;
    }
  for (let n = 0, tries = 0; n < 10 && tries < 500; tries++) {
    const x = 3 + Math.floor(Math.random() * (WW - 6)),
      y = 3 + Math.floor(Math.random() * (WH - 6)),
      i = y * WW + x;
    if (GR[i] == G_GRASS && !OB[i] && Math.hypot(x - sx, y - sy) > 14) {
      OB[i] = O_CHEST;
      n++;
    }
  }
}
function sbSolid(px, py) {
  const tx = Math.floor(px / TS),
    ty = Math.floor(py / TS);
  if (tx < 0 || ty < 0 || tx >= WW || ty >= WH) return true;
  const i = ty * WW + tx;
  return GR[i] == G_WATER || OSOLID.has(OB[i]);
}
function sbStand(x, y) {
  return !(
    sbSolid(x - 11, y - 2) ||
    sbSolid(x + 11, y - 2) ||
    sbSolid(x - 11, y + 16) ||
    sbSolid(x + 11, y + 16)
  );
}
function newSandbox(cfg) {
  if (!TEX) buildTex();
  buildWorld();
  const ps = COLORS.map((c, i) => ({
    id: i,
    color: c[0],
    name: c[1],
    isP: i == 0,
    alive: true,
    imp: false,
    x: 0,
    y: 0,
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
    pause: 0,
    tg: null,
  }));
  const cx = SPAWN.x * TS + TS / 2,
    cy = SPAWN.y * TS + TS / 2;
  ps.forEach((p, i) => {
    if (i == 0) {
      p.x = cx;
      p.y = cy + TS * 3;
    } else {
      p.x = cx + rnd(-4, 4) * TS;
      p.y = cy + rnd(-1, 4) * TS;
      if (!sbStand(p.x, p.y)) {
        p.x = cx;
        p.y = cy + TS * 4;
      }
    }
  });
  G = {
    mode: 'sandbox',
    ps,
    player: ps[0],
    bodies: [],
    blood: [],
    parts: [],
    total: 1,
    done: 0,
    t: 0,
    intro: 0,
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
    inv: {
      madera: 0,
      tablon: 0,
      piedra: 0,
      carbon: 0,
      hierro: 0,
      lingote: 0,
      tierra: 0,
      antorcha: 0,
      mesa: 0,
      suelo: 0,
      manzana: 0,
      horno: 0,
      cama: 0,
      brote: 0,
      carne: 0,
      asada: 0,
    },
    food: 20,
    animals: [],
    saplings: [],
    weather: { rain: 0, target: 0, t: rnd(60, 110), thunderT: 5, lightning: 0 },
    tools: {},
    slot: 0,
    hp: 20,
    zs: [],
    torches: [],
    mine: null,
    mining: false,
    autoMine: false,
    hitCD: 0,
    sbT: CYCLE * 0.04,
    dark: 0,
    zsT: 3,
    regT: 0,
    btnCD: 0,
    nearTable: false,
    banner: 'MUNDO CUBO',
    bannerSub:
      'Tala árboles para conseguir leña (clic izq), construye (clic der) y sobrevive a la noche',
    bannerT: 7,
  };
  seedAnimals();
  scene = 'play';
  startDrone();
  beep(300, 0.5, 'sine', 0.08, 200);
}
function dayDark(c) {
  if (c < 0.5) return 0;
  if (c < 0.58) return ((c - 0.5) / 0.08) * 0.86;
  if (c < 0.92) return 0.86;
  return ((1 - c) / 0.08) * 0.86;
}
function sbTarget() {
  const p = G.player;
  let wx, wy;
  if (view3d) {
    const a = aimPoint();
    wx = a.x;
    wy = a.y;
  } else if (performance.now() - (mouse.t || 0) < 3000 && !joy) {
    wx = p.x + mouse.x - W / 2;
    wy = p.y + mouse.y - H / 2;
  } else {
    wx = p.x + Math.cos(p.aim) * TS * 1.2;
    wy = p.y + Math.sin(p.aim) * TS * 1.2;
  }
  const tx = Math.floor(wx / TS),
    ty = Math.floor(wy / TS),
    cx = tx * TS + TS / 2,
    cy = ty * TS + TS / 2;
  return {
    tx,
    ty,
    wx,
    wy,
    ok: tx >= 0 && ty >= 0 && tx < WW && ty < WH && Math.hypot(cx - p.x, cy - p.y) <= TS * 5,
  };
}
function addItem(k, n) {
  G.inv[k] += n;
  mevent('item:' + k, n);
}
function breakObj(tx, ty) {
  const g = G,
    i = ty * WW + tx,
    o = OB[i];
  if (!o || o == O_BTN) return;
  const px = tx * TS + TS / 2,
    py = ty * TS + TS / 2;
  burst(px, py, 10, OCOL[o] || '#888', 110, 0.5);
  if (o == O_LOG) {
    const tr = TREES.get(i);
    addItem('madera', 1);
    toast('+1 Madera', 0.8);
    beep(150, 0.08, 'square', 0.06);
    if (tr) {
      tr.logs--;
      if (tr.logs <= 0) {
        TREES.delete(i);
        OB[i] = 0;
        burst(px, py, 20, '#2f7a2a', 160, 0.8);
        addItem('brote', 1 + (Math.random() < 0.5 ? 1 : 0));
        if (Math.random() < 0.5) {
          addItem('manzana', 1);
          toast('+1 Manzana', 1.2);
        }
      }
    }
    return;
  }
  OB[i] = 0;
  beep(120, 0.1, 'square', 0.07);
  if (o == O_BOULDER || o == O_COBBLE) {
    addItem('piedra', 1);
    toast('+1 Piedra', 0.8);
  } else if (o == O_IRON) {
    addItem('hierro', 1);
    toast('+1 Mineral de hierro (fúndelo en un horno)', 1.4);
    tip('hierro', 'El mineral de hierro se funde en el horno con carbón → lingotes');
  } else if (o == O_COAL) {
    addItem('carbon', 1);
    toast('+1 Carbón', 0.8);
    if (Math.random() < 0.4) addItem('piedra', 1);
  } else if (o == O_PLANK) {
    addItem('tablon', 1);
  } else if (o == O_DIRT) {
    addItem('tierra', 1);
  } else if (o == O_TABLE) {
    addItem('mesa', 1);
  } else if (o == O_TORCH) {
    addItem('antorcha', 1);
    g.torches = g.torches.filter(t => !(t[0] == tx && t[1] == ty));
  } else if (o == O_FURNACE) addItem('horno', 1);
  else if (o == O_BED) addItem('cama', 1);
  else if (o == O_SAPLING) addItem('brote', 1);
  else if (o == O_CHEST) openLoot(px, py);
}
function openLoot(px, py) {
  const pool = [
      ['madera', 3, 6],
      ['tablon', 4, 8],
      ['piedra', 5, 10],
      ['carbon', 2, 4],
      ['manzana', 1, 3],
      ['antorcha', 3, 6],
      ['suelo', 4, 8],
    ],
    got = [];
  for (const e of shuffle(pool.slice()).slice(0, 3)) {
    const n = Math.floor(rnd(e[1], e[2] + 1));
    addItem(e[0], n);
    got.push(`${n} ${INAME[e[0]]}`);
  }
  toast('¡Cofre! ' + got.join(', '), 3.5);
  mevent('chest');
  burst(px, py, 18, '#ffd740', 140, 0.7);
  beep(600, 0.2, 'sine', 0.08, 300);
}
function sbAct(dt) {
  const g = G,
    p = g.player,
    T = sbTarget();
  for (const z of g.zs)
    if (Math.hypot(z.x - T.wx, z.y - T.wy) < 36 && dist(z, p) < 100) {
      if (g.hitCD <= 0) {
        g.hitCD = 0.45;
        z.hp -= swordDmg();
        z.hurt = 0.2;
        const a = Math.atan2(z.y - p.y, z.x - p.x);
        move(z, Math.cos(a) * 22, Math.sin(a) * 22);
        burst(z.x, z.y, 8, '#3f6a22', 130, 0.4);
        beep(200, 0.06, 'square', 0.08);
      }
      return;
    }
  for (const a of g.animals)
    if (Math.hypot(a.x - T.wx, a.y - T.wy) < 34 && dist(a, p) < 100) {
      if (g.hitCD <= 0) {
        g.hitCD = 0.45;
        hitAnimal(a, swordDmg());
      }
      return;
    }
  if (!T.ok) {
    g.mine = null;
    return;
  }
  const i = T.ty * WW + T.tx,
    o = OB[i];
  if (!o || o == O_BTN) {
    g.mine = null;
    return;
  }
  let need = OHARD[o];
  const wood = o == O_LOG || o == O_PLANK || o == O_TABLE || o == O_CHEST,
    rock = o == O_BOULDER || o == O_COAL || o == O_COBBLE || o == O_IRON;
  if (o == O_IRON && !g.tools.pico && !g.tools.picoH) {
    if (!g.mine || g.mine.i !== i) toast('Necesitas un pico para extraer hierro', 1.4);
    g.mine = { i, t: 0, need: 99, tx: T.tx, ty: T.ty, tick: 1 };
    return;
  }
  if (wood) need *= g.tools.hachaH ? 0.22 : g.tools.hacha ? 0.4 : 1;
  if (rock) need *= g.tools.picoH ? 0.22 : g.tools.pico ? 0.4 : 1;
  if (!g.mine || g.mine.i !== i) g.mine = { i, t: 0, need, tx: T.tx, ty: T.ty, tick: 0 };
  g.mine.need = need;
  g.mine.t += dt;
  g.mine.tick -= dt;
  if (g.mine.tick <= 0) {
    g.mine.tick = 0.22;
    sfx.chop();
    burst(T.tx * TS + TS / 2, T.ty * TS + TS / 2, 2, OCOL[o] || '#888', 60, 0.3);
  }
  if (g.mine.t >= need) {
    breakObj(T.tx, T.ty);
    g.mine = null;
  }
}
function sbPlace() {
  const g = G,
    p = g.player;
  if (scene !== 'play') return;
  const k = HOTBAR[g.slot],
    T = sbTarget();
  if (k == 'manzana') {
    if (g.inv.manzana > 0) sbEat();
    else toast('No tienes manzanas', 1.2);
    return;
  }
  if (!g.inv[k]) {
    toast('No tienes ' + INAME[k].toLowerCase(), 1.2);
    return;
  }
  if (!T.ok) {
    toast('Demasiado lejos', 1);
    return;
  }
  const i = T.ty * WW + T.tx,
    cx = T.tx * TS + TS / 2,
    cy = T.ty * TS + TS / 2;
  if (k == 'suelo') {
    if (OB[i] || GR[i] == G_FLOOR || GR[i] == G_METAL) return;
    GR[i] = G_FLOOR;
  } else {
    if (OB[i] || GR[i] == G_WATER) {
      toast('No puedes poner eso ahí (usa suelo en el agua)', 1.5);
      return;
    }
    if (k == 'brote' && GR[i] != G_GRASS) {
      toast('Los brotes solo crecen en la hierba', 1.6);
      return;
    }
    const code = ITEMOBJ[k];
    if (OSOLID.has(code)) {
      if (Math.abs(p.x - cx) < TS / 2 + 14 && Math.abs(p.y + 7 - cy) < TS / 2 + 14) {
        toast('Te estorbas a ti mismo', 1);
        return;
      }
      for (const z of g.zs)
        if (Math.abs(z.x - cx) < TS / 2 + 14 && Math.abs(z.y + 7 - cy) < TS / 2 + 14) return;
    }
    OB[i] = code;
    if (code == O_TORCH) g.torches.push([T.tx, T.ty]);
    if (code == O_SAPLING) g.saplings.push({ tx: T.tx, ty: T.ty, t: 0 });
  }
  g.inv[k]--;
  beep(260, 0.05, 'square', 0.06);
  burst(cx, cy, 4, '#fff', 50, 0.25);
  mevent('place', 1);
  mevent('place:' + k, 1);
}
function sbInteract() {
  const g = G,
    p = g.player;
  if (scene !== 'play') return;
  const bx = SPAWN.x * TS + TS / 2,
    by = (SPAWN.y - 1) * TS + TS / 2;
  if (dist(p, { x: bx, y: by }) < TS * 2.4) {
    if (g.btnCD > 0) {
      toast('El botón se está recargando…', 1.5);
      return;
    }
    if (g.dark < 0.3) {
      toast('Aún es de día. El botón sirve para saltar la noche', 2);
      return;
    }
    g.sbT = Math.floor(g.sbT / CYCLE) * CYCLE + CYCLE * 0.93;
    g.btnCD = 25;
    g.flash = 0.5;
    toast('¡Botón de emergencia! Amanece…', 2.5);
    beep(700, 0.4, 'sine', 0.1, 300);
    return;
  }
  const T = sbTarget();
  if (T.ok) {
    const i = T.ty * WW + T.tx;
    if (OB[i] == O_CHEST) {
      OB[i] = 0;
      openLoot(T.tx * TS + TS / 2, T.ty * TS + TS / 2);
      return;
    }
    if (OB[i] == O_TABLE) {
      scene = 'craft';
      return;
    }
    if (OB[i] == O_FURNACE) {
      sbCook(T.tx, T.ty);
      return;
    }
    if (OB[i] == O_BED) {
      sbSleep(T.tx, T.ty);
      return;
    }
  }
  toast('Nada con lo que interactuar aquí', 1.2);
}
function craft(r) {
  const g = G;
  if (r.table && !g.nearTable) {
    toast('Necesitas una mesa de trabajo cerca', 1.5);
    return;
  }
  if (r.tool && g.tools[r.tool]) return;
  for (const k in r.in) if (g.inv[k] < r.in[k]) return;
  for (const k in r.in) g.inv[k] -= r.in[k];
  if (r.tool) {
    g.tools[r.tool] = true;
    toast('¡Has fabricado: ' + r.tool + '!', 2);
  } else {
    addItem(r.out[0], r.out[1]);
    toast('Fabricado: ' + r.n, 1.5);
  }
  mevent('craft:' + (r.tool || r.out[0]));
  beep(600, 0.12, 'sine', 0.07, 200);
}
function updSandbox(dt) {
  const g = G,
    p = g.player;
  g.t += dt;
  g.sbT += dt;
  g.hitCD = Math.max(0, g.hitCD - dt);
  g.btnCD = Math.max(0, g.btnCD - dt);
  if (g.toastT > 0) g.toastT -= dt;
  if (g.flash > 0) g.flash -= dt * 1.5;
  if (g.shake > 0) g.shake -= dt;
  if (g.bannerT > 0) g.bannerT -= dt;
  g.dark = Math.min(
    0.9,
    dayDark((g.sbT % CYCLE) / CYCLE) + ((g.weather && g.weather.rain) || 0) * 0.18
  );
  if (g.nightFlag && g.dark < 0.15) {
    g.nightFlag = false;
    mevent('night');
  } else if (g.dark > 0.6) g.nightFlag = true;
  if (view3d) {
    p.aim = CAM.yaw;
    p.face = Math.cos(CAM.yaw) >= 0 ? 1 : -1;
  } else if (performance.now() - (mouse.t || 0) < 3000 && !joy && scene === 'play') {
    p.aim = Math.atan2(mouse.y - H / 2, mouse.x - W / 2);
    p.face = Math.cos(p.aim) >= 0 ? 1 : -1;
  }
  for (const q of g.parts) {
    q.x += q.vx * dt;
    q.y += q.vy * dt;
    q.vx *= 0.93;
    q.vy *= 0.93;
    q.life -= dt;
  }
  g.parts = g.parts.filter(q => q.life > 0);
  // mesa cerca
  g.nearTable = false;
  {
    const px = Math.floor(p.x / TS),
      py = Math.floor(p.y / TS);
    for (let dy = -5; dy <= 5 && !g.nearTable; dy++)
      for (let dx = -5; dx <= 5; dx++) {
        const x = px + dx,
          y = py + dy;
        if (x >= 0 && y >= 0 && x < WW && y < WH && OB[y * WW + x] == O_TABLE) {
          g.nearTable = true;
          break;
        }
      }
  }
  // picar / atacar
  if (scene === 'play' && (g.mining || g.autoMine || pad.fire)) sbAct(dt);
  else g.mine = null;
  // tripulación amiga
  for (const n of g.ps) {
    if (n.isP) continue;
    n.moving = false;
    if (n.pause > 0) {
      n.pause -= dt;
      continue;
    }
    if (!n.tg || dist(n, n.tg) < 14 || n.stuck > 1) {
      n.tg = { x: SPAWN.x * TS + rnd(-320, 320), y: SPAWN.y * TS + rnd(-200, 280) };
      n.stuck = 0;
      n.pause = rnd(0, 3);
      continue;
    }
    const dx = n.tg.x - n.x,
      dy = n.tg.y - n.y,
      d = Math.hypot(dx, dy),
      m = move(n, (dx / d) * 80 * dt, (dy / d) * 80 * dt);
    n.moving = true;
    n.step += dt * 10;
    if (Math.abs(dx) > 2) n.face = dx > 0 ? 1 : -1;
    if (m < 80 * dt * 0.3) n.stuck += dt;
    else n.stuck = 0;
  }
  // zombis de noche
  if (g.dark > 0.5 && g.zs.length < 9) {
    g.zsT -= dt;
    if (g.zsT <= 0) {
      g.zsT = rnd(2, 4);
      for (let k = 0; k < 12; k++) {
        const a = rnd(0, 6.28),
          d = rnd(520, 760),
          x = p.x + Math.cos(a) * d,
          y = p.y + Math.sin(a) * d;
        if (sbStand(x, y)) {
          g.zs.push({
            x,
            y,
            hp: 20,
            max: 20,
            sp: 115,
            face: 1,
            step: Math.random() * 6,
            cd: 0.8,
            stuck: 0,
            side: 0,
            sd: 1,
          });
          break;
        }
      }
    }
  }
  for (const z of g.zs) {
    z.step += dt * 8;
    z.cd -= dt;
    const dx = p.x - z.x,
      dy = p.y - z.y,
      d = Math.hypot(dx, dy) || 1;
    if (g.dark < 0.2) {
      z.hp -= dt * 12;
      if (Math.random() < dt * 6) burst(z.x, z.y - 10, 1, '#ff9a20', 50, 0.5);
    }
    if (d < 750) {
      let vx = dx / d,
        vy = dy / d;
      if (z.side > 0) {
        z.side -= dt;
        [vx, vy] = [-vy * z.sd, vx * z.sd];
      }
      const m = move(z, vx * z.sp * dt, vy * z.sp * dt);
      if (Math.abs(dx) > 2) z.face = dx > 0 ? 1 : -1;
      if (m < z.sp * dt * 0.3) {
        z.stuck += dt;
        if (z.stuck > 0.35) {
          z.side = 0.9;
          z.sd = Math.random() < 0.5 ? 1 : -1;
          z.stuck = 0;
        }
      } else z.stuck = 0;
    }
    if (d < 30 && z.cd <= 0) {
      z.cd = 1;
      g.hp -= 3;
      g.flash = 0.5;
      g.shake = 0.25;
      g.regT = 0;
      beep(90, 0.15, 'sawtooth', 0.12, -40);
      burst(p.x, p.y, 6, '#7a0b0b', 120, 0.5);
    }
  }
  for (const z of g.zs) if (z.hp <= 0 && z.hurt) mevent('zkill');
  g.zs = g.zs.filter(z => z.hp > 0 && Math.hypot(z.x - p.x, z.y - p.y) < 1300);
  updSurvival(dt);
  growSaplings(dt);
  updWeather(dt);
  g.regT += dt;
  if (g.regT > 6 && g.hp < 20 && g.food >= 6) {
    g.hp = Math.min(20, g.hp + 1);
    g.regT = 4;
  }
  if (g.hp <= 0) {
    g.hp = 20;
    g.food = 20;
    g.zs = [];
    p.x = g.respawn ? g.respawn.x : SPAWN.x * TS + TS / 2;
    p.y = g.respawn ? g.respawn.y : (SPAWN.y + 3) * TS + TS / 2;
    g.flash = 1;
    toast('Has muerto… reapareces en la nave', 3);
  }
}
function drawSbWorld() {
  const g = G,
    p = g.player;
  ctx.fillStyle = '#000';
  ctx.fillRect(0, 0, W, H);
  let sx = 0,
    sy = 0;
  if (g.shake > 0) {
    sx = rnd(-1, 1) * g.shake * 10;
    sy = rnd(-1, 1) * g.shake * 10;
  }
  const ox = Math.round(W / 2 - p.x + sx),
    oy = Math.round(H / 2 - p.y + sy);
  ctx.save();
  ctx.imageSmoothingEnabled = false;
  ctx.translate(ox, oy);
  const x0 = Math.max(0, Math.floor((p.x - W / 2) / TS) - 1),
    x1 = Math.min(WW - 1, Math.ceil((p.x + W / 2) / TS) + 1),
    y0 = Math.max(0, Math.floor((p.y - H / 2) / TS) - 1),
    y1 = Math.min(WH - 1, Math.ceil((p.y + H / 2) / TS) + 1);
  for (let ty = y0; ty <= y1; ty++)
    for (let tx = x0; tx <= x1; tx++) {
      const i = ty * WW + tx,
        gr = GR[i];
      ctx.drawImage(TEX.g[gr], tx * TS, ty * TS, TS, TS);
      if (gr == G_WATER) {
        ctx.fillStyle = `rgba(255,255,255,${0.05 + 0.05 * Math.sin(g.t * 2 + tx * 0.7 + ty * 0.5)})`;
        ctx.fillRect(tx * TS, ty * TS, TS, TS);
      }
    }
  for (let ty = y0; ty <= y1; ty++)
    for (let tx = x0; tx <= x1; tx++) {
      const o = OB[ty * WW + tx];
      if (!o) continue;
      if (OSOLID.has(o)) {
        ctx.fillStyle = 'rgba(0,0,0,.28)';
        ctx.fillRect(tx * TS + 4, ty * TS + 6, TS, TS);
      }
      if (o == O_BTN) {
        const gl = ctx.createRadialGradient(
          tx * TS + 20,
          ty * TS + 20,
          2,
          tx * TS + 20,
          ty * TS + 20,
          50
        );
        gl.addColorStop(0, 'rgba(255,60,60,.5)');
        gl.addColorStop(1, 'rgba(255,0,0,0)');
        ctx.fillStyle = gl;
        ctx.fillRect(tx * TS - 30, ty * TS - 30, TS + 60, TS + 60);
      }
      ctx.drawImage(TEX.o[o], tx * TS, ty * TS, TS, TS);
    }
  ctx.imageSmoothingEnabled = true;
  // objetivo
  const T = sbTarget();
  if (scene === 'play') {
    ctx.strokeStyle = T.ok ? 'rgba(255,255,255,.9)' : 'rgba(255,80,80,.7)';
    ctx.lineWidth = 2;
    ctx.strokeRect(T.tx * TS + 1, T.ty * TS + 1, TS - 2, TS - 2);
  }
  if (g.mine && g.mine.need) {
    const pr = Math.min(1, g.mine.t / g.mine.need),
      bx = g.mine.tx * TS,
      by = g.mine.ty * TS;
    ctx.strokeStyle = 'rgba(0,0,0,.75)';
    ctx.lineWidth = 2;
    ctx.beginPath();
    const n = Math.ceil(pr * 8);
    for (let k = 0; k < n; k++) {
      const a = k * 0.9;
      ctx.moveTo(bx + 20 + Math.cos(a) * 3, by + 20 + Math.sin(a) * 3);
      ctx.lineTo(bx + 20 + Math.cos(a) * (8 + k * 2), by + 20 + Math.sin(a) * (8 + k * 2));
    }
    ctx.stroke();
  }
  // entidades
  drawAnimals2D();
  const ents = [...g.ps.map(q => ({ q, z: false })), ...g.zs.map(q => ({ q, z: true }))].sort(
    (a, b) => a.q.y - b.q.y
  );
  for (const e of ents) {
    const q = e.q;
    if (e.z) {
      drawCrew(q.x, q.y, '#5f7f52', q.face, q.step, 1, 1, true, g.t, false, true);
      if (q.hp < q.max) {
        ctx.fillStyle = 'rgba(0,0,0,.6)';
        ctx.fillRect(q.x - 16, q.y - 40, 32, 4);
        ctx.fillStyle = '#e53935';
        ctx.fillRect(q.x - 16, q.y - 40, 32 * Math.max(0, q.hp / q.max), 4);
      }
    } else {
      drawCrew(q.x, q.y, q.color, q.face, q.step, 1, 1, q.moving, g.t + q.id);
      const l = q.isP ? q.name + ' (Tú)' : q.name;
      ctx.font = 'bold 12px system-ui';
      const w = ctx.measureText(l).width + 10;
      ctx.fillStyle = 'rgba(0,0,0,.45)';
      rr(q.x - w / 2, q.y - 52, w, 17, 8);
      ctx.fill();
      txt(l, q.x, q.y - 43, 12, '#fff', 'center');
    }
  }
  // copas de árboles (por encima de los jugadores)
  ctx.imageSmoothingEnabled = false;
  ctx.globalAlpha = 0.9;
  for (const t of TREES.values()) {
    if (t.x < x0 - 2 || t.x > x1 + 2 || t.y < y0 - 2 || t.y > y1 + 2) continue;
    for (let dy = -1; dy <= 1; dy++)
      for (let dx = -1; dx <= 1; dx++)
        if (dx || dy) ctx.drawImage(TEX.leaf, (t.x + dx) * TS, (t.y + dy) * TS, TS, TS);
  }
  ctx.globalAlpha = 1;
  ctx.imageSmoothingEnabled = true;
  for (const q of g.parts) {
    ctx.globalAlpha = Math.max(0, Math.min(1, q.life * 2));
    ctx.fillStyle = q.col;
    ctx.fillRect(q.x, q.y, q.sz * 1.6, q.sz * 1.6);
  }
  ctx.globalAlpha = 1;
  const bx = SPAWN.x * TS + TS / 2,
    by = (SPAWN.y - 1) * TS + TS / 2;
  if (dist(p, { x: bx, y: by }) < TS * 3)
    txt(
      g.btnCD > 0 ? 'Botón recargando…' : '[E] Botón de emergencia: saltar la noche',
      bx,
      by - 34,
      13,
      '#ff9a9a',
      'center'
    );
  ctx.restore();
  // día / noche
  if (g.dark > 0.02) {
    lx.globalCompositeOperation = 'source-over';
    lx.clearRect(0, 0, W, H);
    lx.fillStyle = `rgba(4,7,22,${g.dark})`;
    lx.fillRect(0, 0, W, H);
    lx.globalCompositeOperation = 'destination-out';
    const cx = W / 2 + sx,
      cy = H / 2 + sy;
    let gr = lx.createRadialGradient(cx, cy, 0, cx, cy, 190);
    gr.addColorStop(0, 'rgba(0,0,0,.9)');
    gr.addColorStop(1, 'rgba(0,0,0,0)');
    lx.fillStyle = gr;
    lx.beginPath();
    lx.arc(cx, cy, 190, 0, 6.3);
    lx.fill();
    const lights = g.torches.slice();
    lights.push([SPAWN.x, SPAWN.y - 1]);
    for (const t of lights) {
      const lxp = t[0] * TS + TS / 2 + ox - sx + sx,
        lyp = t[1] * TS + TS / 2 + oy;
      if (lxp < -250 || lxp > W + 250 || lyp < -250 || lyp > H + 250) continue;
      const fl = 1 + 0.06 * Math.sin(g.t * 9 + t[0]);
      gr = lx.createRadialGradient(lxp, lyp, 0, lxp, lyp, 230 * fl);
      gr.addColorStop(0, 'rgba(0,0,0,.95)');
      gr.addColorStop(1, 'rgba(0,0,0,0)');
      lx.fillStyle = gr;
      lx.beginPath();
      lx.arc(lxp, lyp, 230 * fl, 0, 6.3);
      lx.fill();
    }
    lx.globalCompositeOperation = 'source-over';
    ctx.drawImage(lc, 0, 0);
    ctx.globalCompositeOperation = 'lighter';
    for (const t of g.torches) {
      const lxp = t[0] * TS + TS / 2 + ox,
        lyp = t[1] * TS + TS / 2 + oy;
      if (lxp < -250 || lxp > W + 250 || lyp < -250 || lyp > H + 250) continue;
      gr = ctx.createRadialGradient(lxp, lyp, 0, lxp, lyp, 130);
      gr.addColorStop(0, 'rgba(255,160,60,.2)');
      gr.addColorStop(1, 'rgba(255,120,0,0)');
      ctx.fillStyle = gr;
      ctx.fillRect(lxp - 130, lyp - 130, 260, 260);
    }
    ctx.globalCompositeOperation = 'source-over';
  }
  if (g.dark > 0.02 && g.dark < 0.8) {
    ctx.globalCompositeOperation = 'overlay';
    ctx.fillStyle = 'rgba(255,120,40,.18)';
    ctx.fillRect(0, 0, W, H);
    ctx.globalCompositeOperation = 'source-over';
  }
  if (g.flash > 0) {
    ctx.fillStyle = `rgba(200,0,0,${Math.min(0.5, g.flash * 0.5)})`;
    ctx.fillRect(0, 0, W, H);
  }
  finishFX();
}
function itemIcon(k, x, y, s) {
  const m = {
    tablon: TEX.o[4],
    piedra: TEX.o[5],
    tierra: TEX.o[6],
    suelo: TEX.g[5],
    antorcha: TEX.o[9],
    mesa: TEX.o[7],
    horno: TEX.o[11],
    madera: TEX.o[1],
    carbon: TEX.o[3],
    hierro: TEX.o[15],
  };
  if (m[k]) {
    ctx.imageSmoothingEnabled = false;
    ctx.drawImage(m[k], x, y, s, s);
    ctx.imageSmoothingEnabled = true;
  } else if (k == 'manzana') {
    ctx.fillStyle = '#d32f2f';
    ctx.beginPath();
    ctx.arc(x + s / 2, y + s / 2 + 2, s * 0.32, 0, 6.3);
    ctx.fill();
    ctx.fillStyle = '#3a7a2a';
    ctx.fillRect(x + s / 2 - 1, y + s * 0.12, 3, s * 0.18);
  }
}
function drawSbHUD() {
  const g = G,
    p = g.player;
  // --- supervivencia (arriba a la izquierda)
  glass(14, 14, 270, 142, 'rgba(111,224,138,.4)', 14);
  iconRow(34, 36, 10, g.hp, 'heart', '#ff5a5a', 20, 23);
  iconRow(34, 62, 10, g.food, 'drumstick', '#ffb74d', 19, 23);
  chip(24, 80, 'Madera ' + g.inv.madera, 'block', '#d7a86e', 11);
  chip(112, 80, 'Carbón ' + g.inv.carbon, 'coin', '#9aa5b1', 11);
  chip(200, 80, g.inv.carne + '/' + g.inv.asada, 'drumstick', '#ff8a65', 11);
  if (g.inv.hierro || g.inv.lingote)
    chip(288, 80, 'Fe ' + g.inv.hierro + '/' + g.inv.lingote, 'block', '#d8a070', 11);
  const tools = ['hacha', 'pico', 'espada'];
  tools.forEach((tn, i) => {
    const iron = !!g.tools[tn + 'H'],
      has = !!g.tools[tn] || iron;
    ctx.globalAlpha = has ? 1 : 0.35;
    icon(
      tn === 'pico' ? 'pick' : tn === 'espada' ? 'dagger' : 'hammer',
      36 + i * 28,
      132,
      18,
      iron ? '#e0e6ee' : has ? '#ffd54f' : '#90a4ae'
    );
    ctx.globalAlpha = 1;
  });
  chip(
    128,
    122,
    g.nearTable ? 'Mesa cerca' : 'Sin mesa',
    'check',
    g.nearTable ? '#6fe08a' : '#78909c',
    11
  );
  // --- reloj (arriba al centro)
  const c = (g.sbT % CYCLE) / CYCLE,
    hr = (c * 24 + 6) % 24,
    hh = Math.floor(hr),
    mm = Math.floor((hr % 1) * 60),
    night = g.dark > 0.5;
  glass(W / 2 - 100, 12, 200, 40, night ? 'rgba(130,160,255,.5)' : 'rgba(255,213,79,.5)', 20);
  icon(
    g.weather.rain > 0.3 ? 'rain' : night ? 'moon' : 'sun',
    W / 2 - 72,
    32,
    22,
    night ? '#9fb8ff' : '#ffd54f'
  );
  txt(`Día ${Math.floor(g.sbT / CYCLE) + 1}`, W / 2 - 46, 32, 14, '#cfd8dc', 'left', false);
  txt(
    `${String(hh).padStart(2, '0')}:${String(mm).padStart(2, '0')}`,
    W / 2 + 90,
    32,
    20,
    night ? '#9fb8ff' : '#fff',
    'right'
  );
  drawMinimapSb();
  // --- barra rápida (abajo al centro)
  const sw = Math.min(54, Math.floor((W - 340) / (HOTBAR.length * 1.12))),
    gap = 6,
    bw = HOTBAR.length * (sw + gap) - gap,
    hbCx = (W - 300) / 2 + 8,
    bx0 = Math.max(10, hbCx - bw / 2),
    by0 = H - sw - 16;
  HOTBAR.forEach((k, i) => {
    const x = bx0 + i * (sw + gap),
      sel = i == g.slot;
    ctx.save();
    if (sel) ctx.translate(0, -5);
    glass(x, by0, sw, sw, sel ? 'rgba(255,255,255,.95)' : 'rgba(140,180,240,.28)', 9);
    if (sel) {
      ctx.fillStyle = 'rgba(255,255,255,.16)';
      rr(x, by0, sw, sw, 9);
      ctx.fill();
    }
    ctx.globalAlpha = g.inv[k] ? 1 : 0.35;
    itemIcon(k, x + 9, by0 + 9, sw - 18);
    ctx.globalAlpha = 1;
    txt(String((i + 1) % 10), x + 7, by0 + 9, 10, '#9fb3c8', 'left');
    if (g.inv[k]) {
      ctx.fillStyle = 'rgba(0,0,0,.65)';
      rr(x + sw - 24, by0 + sw - 17, 22, 14, 7);
      ctx.fill();
      txt(String(g.inv[k]), x + sw - 13, by0 + sw - 10, 11, '#fff', 'center');
    }
    ctx.restore();
    addHit(x, by0, sw, sw, () => (g.slot = i), false);
  });
  txt(INAME[HOTBAR[g.slot]], bx0 + bw / 2, by0 - 20, 14, '#fff', 'center');
  drawToast(by0 - 72);
  if (g.t < 25)
    txt(
      'Clic izq: picar/atacar · Clic der o F: colocar · E: interactuar · C: crafteo · 1-0: bloque · G: comer',
      W / 2,
      H * 0.2,
      Math.min(15, W / 50),
      '#fff',
      'center',
      false
    );
  // --- botones de acción
  const r = Math.min(44, W * 0.08),
    bx = W - r - 16,
    by = H - r - 16;
  actionBtn(bx, by, r, 'PONER', 'F', 'block', true, '#2e7d32', sbPlace);
  actionBtn(
    bx - r * 2 - 10,
    by,
    r,
    g.autoMine ? 'PICANDO' : 'PICAR',
    'CLIC',
    'pick',
    true,
    g.autoMine ? '#e0a020' : '#a05a20',
    () => (g.autoMine = !g.autoMine)
  );
  actionBtn(bx, by - r * 2 - 10, r, 'USAR', 'E', 'touch', true, '#3a7bd5', sbInteract);
  actionBtn(
    bx - r * 2 - 10,
    by - r * 2 - 10,
    r,
    'CRAFTEO',
    'C',
    'hammer',
    true,
    '#6a5acd',
    () => (scene = 'craft')
  );
  actionBtn(
    bx - r * 4 - 20,
    by,
    r,
    'COMER',
    'G',
    'drumstick',
    g.food < 20 || g.hp < 20,
    '#b0603a',
    sbEat
  );
  drawBanner(g.banner, g.bannerSub, '#8be08b', H * 0.3);
  drawJoystick();
  if (p.alive === false) return;
}
/** Minimapa del mundo cubo: terreno a baja resolución con el jugador y la nave. */
function drawMinimapSb() {
  const sz = 120,
    x0 = W - sz - 18,
    y0 = 18,
    p = G.player;
  if (!G.mapCv) {
    const c = document.createElement('canvas');
    c.width = WW;
    c.height = WH;
    const x = c.getContext('2d'),
      cols = ['#2a5fbf', '#e0d08a', '#5a9a3a', '#7d7d7d', '#7a5a3a', '#b8935a', '#6b7480'];
    for (let ty = 0; ty < WH; ty++)
      for (let tx = 0; tx < WW; tx++) {
        x.fillStyle = OB[ty * WW + tx] === O_LOG ? '#2f6a2a' : cols[GR[ty * WW + tx]];
        x.fillRect(tx, ty, 1, 1);
      }
    G.mapCv = c;
  }
  glass(x0 - 6, y0 - 6, sz + 12, (sz * WH) / WW + 12, 'rgba(120,200,255,.4)', 10);
  ctx.save();
  rr(x0, y0, sz, (sz * WH) / WW, 6);
  ctx.clip();
  ctx.drawImage(G.mapCv, x0, y0, sz, (sz * WH) / WW);
  const k = sz / (WW * TS);
  ctx.fillStyle = '#ff5a4a';
  ctx.beginPath();
  ctx.arc(x0 + (SPAWN.x * TS + TS / 2) * k, y0 + SPAWN.y * TS * k, 2.4, 0, 6.3);
  ctx.fill();
  for (const z of G.zs) {
    ctx.fillStyle = '#ff3a2a';
    ctx.fillRect(x0 + z.x * k - 1.5, y0 + z.y * k - 1.5, 3, 3);
  }
  ctx.fillStyle = '#fff';
  ctx.beginPath();
  ctx.arc(x0 + p.x * k, y0 + p.y * k, 3, 0, 6.3);
  ctx.fill();
  ctx.restore();
}
function drawCraft() {
  const g = G;
  ctx.fillStyle = 'rgba(0,0,0,.6)';
  ctx.fillRect(0, 0, W, H);
  addHit(0, 0, W, H, () => {}, false);
  beginUI(640, 730);
  let gr = ctx.createLinearGradient(0, 0, 0, 730);
  gr.addColorStop(0, '#3a4a30');
  gr.addColorStop(1, '#1a2216');
  ctx.fillStyle = gr;
  rr(0, 0, 640, 730, 14);
  ctx.fill();
  ctx.strokeStyle = '#8fb070';
  ctx.lineWidth = 4;
  ctx.stroke();
  addHit(0, 0, 640, 730, () => {}, true);
  txt('CRAFTEO', 320, 30, 26, '#fff', 'center');
  txt(
    g.nearTable ? '✔ Mesa de trabajo cerca' : 'Sin mesa cerca (las herramientas la necesitan)',
    320,
    56,
    13,
    g.nearTable ? '#8fe39a' : '#ffb74d',
    'center',
    false
  );
  RECIPES.forEach((r, i) => {
    const y = 76 + i * 50,
      has = Object.keys(r.in).every(k => g.inv[k] >= r.in[k]),
      have = r.tool && g.tools[r.tool],
      can = has && !have && (!r.table || g.nearTable);
    ctx.fillStyle = 'rgba(255,255,255,.07)';
    rr(20, y, 600, 46, 8);
    ctx.fill();
    txt(r.n, 34, y + 16, 16, have ? '#8fe39a' : '#fff', 'left');
    txt(
      'Cuesta: ' +
        Object.entries(r.in)
          .map(([k, v]) => `${v} ${INAME[k]} (tienes ${g.inv[k]})`)
          .join(' + '),
      34,
      y + 34,
      12,
      '#b9c9a9',
      'left',
      false
    );
    if (have) txt('✔ Fabricado', 590, y + 23, 14, '#8fe39a', 'right');
    else
      uiBtn(
        500,
        y + 7,
        110,
        32,
        'Fabricar',
        can ? '#2e7d32' : '#444',
        () => {
          if (can) craft(r);
        },
        14
      );
  });
  uiBtn(
    250,
    684,
    140,
    34,
    'Cerrar [C]',
    '#8e2020',
    () => {
      scene = 'play';
    },
    15
  );
  endUI();
}

/** Daño cuerpo a cuerpo según la mejor espada. */
function swordDmg() {
  const t = G.tools;
  return t.espadaH ? 15 : t.espada ? 9 : 4;
}
