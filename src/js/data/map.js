/**
 * Datos de la nave: salas, pasillos, puertas, nodos de navegación, estaciones, ventilaciones.
 */
'use strict';

const COLORS = [
  ['#c51111', 'Rojo'],
  ['#1f4fd8', 'Azul'],
  ['#117f2d', 'Verde'],
  ['#ed54ba', 'Rosa'],
  ['#ef7d0e', 'Naranja'],
  ['#f5f557', 'Amarillo'],
  ['#3f474e', 'Negro'],
  ['#d6e0f0', 'Blanco'],
  ['#6b2fbb', 'Morado'],
];
const ROOMS = [
  ['Médica', 350, 100, 400, 350, '#5f7a80'],
  ['Cafetería', 900, 100, 600, 400, '#7a6c5c'],
  ['Navegación', 1650, 100, 400, 350, '#556485'],
  ['Reactor', 100, 650, 400, 400, '#6b5a5a'],
  ['Pasillo central', 900, 600, 600, 250, '#5d6670'],
  ['Motores', 1900, 650, 400, 400, '#6a6558'],
  ['Eléctrico', 400, 1150, 400, 350, '#625f4c'],
  ['Almacén', 950, 1150, 500, 350, '#5e6258'],
  ['Seguridad', 1600, 1150, 500, 350, '#4e5e66'],
];
const CORR = [
  [750, 230, 150, 100],
  [1500, 230, 150, 100],
  [1100, 500, 200, 100],
  [500, 720, 400, 120],
  [1500, 720, 400, 120],
  [1100, 850, 200, 300],
  [420, 450, 160, 200],
  [380, 1050, 200, 100],
  [1900, 450, 200, 200],
  [1900, 1050, 200, 100],
];
const ALL = [...ROOMS.map(r => r.slice(1, 5)), ...CORR];
const DOORS = [
  [816, 225, 16, 110],
  [1560, 225, 16, 110],
  [1100, 540, 200, 16],
];
function walk(x, y) {
  for (const r of ALL)
    if (x >= r[0] && x <= r[0] + r[2] && y >= r[1] && y <= r[1] + r[3]) return true;
  return false;
}
function doorBlocked(x, y) {
  if (!G || !(G.doorsT > 0)) return false;
  for (const d of DOORS)
    if (x >= d[0] && x <= d[0] + d[2] && y >= d[1] && y <= d[1] + d[3]) return true;
  return false;
}
function pt(x, y) {
  return walk(x, y) && !doorBlocked(x, y);
}
function canStand(x, y) {
  if (G && G.mode === 'sandbox') return sbStand(x, y);
  return pt(x - 13, y - 4) && pt(x + 13, y - 4) && pt(x - 13, y + 18) && pt(x + 13, y + 18);
}
function move(p, dx, dy) {
  const ox = p.x,
    oy = p.y;
  if (canStand(p.x + dx, p.y)) p.x += dx;
  if (canStand(p.x, p.y + dy)) p.y += dy;
  return Math.hypot(p.x - ox, p.y - oy);
}
function roomOf(x, y) {
  for (const r of ROOMS)
    if (x >= r[1] && x <= r[1] + r[3] && y >= r[2] && y <= r[2] + r[4]) return r[0];
  return 'un pasillo';
}
const NODES = [
  [550, 300],
  [825, 280],
  [1200, 300],
  [1575, 280],
  [1850, 300],
  [1200, 560],
  [1200, 725],
  [700, 780],
  [300, 850],
  [1700, 780],
  [2100, 850],
  [1200, 1000],
  [1200, 1300],
  [500, 550],
  [480, 690],
  [470, 1100],
  [600, 1325],
  [2000, 550],
  [2000, 1100],
  [1800, 1325],
];
const EDGES = [
  [0, 1],
  [1, 2],
  [2, 3],
  [3, 4],
  [2, 5],
  [5, 6],
  [6, 7],
  [7, 8],
  [6, 9],
  [9, 10],
  [6, 11],
  [11, 12],
  [0, 13],
  [13, 14],
  [14, 8],
  [8, 15],
  [15, 16],
  [4, 17],
  [17, 10],
  [10, 18],
  [18, 19],
];
const ADJ = NODES.map(() => []);
EDGES.forEach(([a, b]) => {
  ADJ[a].push(b);
  ADJ[b].push(a);
});
function route(a, b) {
  if (a == b) return [a];
  const prev = { [a]: -1 },
    q = [a];
  while (q.length) {
    const c = q.shift();
    if (c == b) break;
    for (const n of ADJ[c])
      if (!(n in prev)) {
        prev[n] = c;
        q.push(n);
      }
  }
  const o = [];
  let c = b;
  while (c != -1) {
    o.unshift(c);
    c = prev[c];
  }
  return o;
}
function nearestNode(p) {
  let bi = 0,
    bd = 1e9;
  NODES.forEach((n, i) => {
    const d = Math.hypot(n[0] - p.x, n[1] - p.y);
    if (d < bd) {
      bd = d;
      bi = i;
    }
  });
  return bi;
}
const STATIONS = [
  { name: 'Descargar datos', x: 1000, y: 190, node: 2, type: 'hold', icon: '⬇' },
  { name: 'Escanear muestra', x: 550, y: 200, node: 0, type: 'numbers', icon: '#' },
  { name: 'Trazar rumbo', x: 1900, y: 200, node: 4, type: 'slider', icon: '⇄' },
  { name: 'Iniciar reactor', x: 250, y: 780, node: 8, type: 'numbers', icon: '☢' },
  { name: 'Alinear motor', x: 2150, y: 780, node: 10, type: 'slider', icon: '⇄' },
  { name: 'Arreglar cables', x: 700, y: 1250, node: 16, type: 'wires', icon: 'ϟ' },
  { name: 'Vaciar basura', x: 1050, y: 1250, node: 12, type: 'hold', icon: '⬇' },
  { name: 'Revisar cableado', x: 1800, y: 1250, node: 19, type: 'wires', icon: 'ϟ' },
];
const BTN = { x: 1350, y: 190 };
const CAMPT = { x: 2000, y: 1260 };
const CAMS = [
  ['Cafetería', 1200, 300],
  ['Pasillo central', 1200, 725],
  ['Motores', 2100, 850],
  ['Almacén', 1200, 1330],
];
const VENTS = [
  { x: 400, y: 410, g: 0 },
  { x: 960, y: 455, g: 0 },
  { x: 1990, y: 405, g: 0 },
  { x: 2250, y: 700, g: 0 },
  { x: 150, y: 700, g: 1 },
  { x: 450, y: 1460, g: 1 },
  { x: 1400, y: 1460, g: 1 },
  { x: 2050, y: 1460, g: 1 },
];
const FIXL = [
  { key: 'L', x: 520, y: 1420, type: 'switches', title: 'Restablecer luces', icon: '⚡' },
];
const FIXR = [
  { key: 'A', x: 200, y: 950, type: 'hold', title: 'Estabilizar reactor (A)', icon: '☢' },
  { key: 'B', x: 2150, y: 950, type: 'hold', title: 'Estabilizar reactor (B)', icon: '☢' },
];
const KCD = 20;
