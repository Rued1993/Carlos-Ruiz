// Iconos de bloques (cubo isométrico) e ítems (pixel art) dibujados por código.
import * as THREE from 'three';
import { BLOCKS, ITEMS, I, B, TIERS, ARMOR_TIERS, TOOL_TYPES } from './blocks.js';
import { TILE_INDEX } from './atlas.js';

let atlasCanvas = null;
const urlCache = new Map(), texCache = new Map(), canvCache = new Map();
export function initIcons(canvas) { atlasCanvas = canvas; }

function drawBlock(id) {
  const c = document.createElement('canvas'); c.width = c.height = 32;
  const x = c.getContext('2d'); x.imageSmoothingEnabled = false;
  const def = BLOCKS[id];
  const face = (name, m, shade) => {
    x.save(); x.setTransform(...m);
    x.drawImage(atlasCanvas, TILE_INDEX[name] * 16, 0, 16, 16, 0, 0, 16, 16);
    if (shade) { x.fillStyle = `rgba(0,0,0,${shade})`; x.fillRect(0, 0, 16, 16); }
    x.restore();
  };
  face(def.tiles[0], [0.875, 0.4375, -0.875, 0.4375, 16, 4], 0);
  face(def.tiles[2], [0.875, 0.4375, 0, 0.875, 2, 11], 0.22);
  face(def.tiles[2], [0.875, -0.4375, 0, 0.875, 16, 18], 0.42);
  return c;
}

const P = (x, id) => x;
function px(ctx, list, color) { ctx.fillStyle = color; for (const [a, b] of list) ctx.fillRect(a, b, 1, 1); }
const rgb = (c) => `rgb(${c[0]},${c[1]},${c[2]})`;
const shade = (c, f) => rgb(c.map((v) => Math.max(0, Math.min(255, v * f))));

function drawItem(id) {
  const c = document.createElement('canvas'); c.width = c.height = 16;
  const x = c.getContext('2d');
  const stick = '#7a5a30';
  const handle = () => { for (let i = 2; i <= 11; i++) px(x, [[i, 15 - i]], stick); };
  const info = ITEMS[id] || {};
  if (id === B.TORCH) {
    for (let y = 6; y <= 14; y++) px(x, [[7, y], [8, y]], y % 2 ? '#7a5630' : '#6a4a28');
    px(x, [[7, 4], [8, 4], [7, 5], [8, 5]], '#ffc83c'); px(x, [[7, 3], [8, 3]], '#ff9a28'); px(x, [[7, 2]], '#ffeb78');
  } else if (info.armor) { // armaduras: silueta por pieza, teñida con el color del material
    const col = ARMOR_TIERS[info.armor.tier].color, base = rgb(col), dk = shade(col, 0.68), lt = shade(col, 1.2);
    const row = (y, a, b) => { for (let xx = a; xx <= b; xx++) px(x, [[xx, y]], y > 9 ? dk : (xx + y) % 5 === 0 ? lt : base); };
    if (info.armor.slot === 0) { row(3, 5, 10); row(4, 4, 11); for (const y of [5, 6, 7]) row(y, 3, 12); row(8, 3, 4); row(8, 11, 12); row(9, 3, 4); row(9, 11, 12); }
    else if (info.armor.slot === 1) { row(3, 2, 5); row(3, 10, 13); row(4, 2, 13); row(5, 2, 4); row(5, 11, 13); row(5, 6, 9); for (let y = 6; y <= 13; y++) { row(y, 4, 11); if (y < 10) { row(y, 2, 3); row(y, 12, 13); } } }
    else if (info.armor.slot === 2) { for (let y = 3; y <= 6; y++) row(y, 4, 11); for (let y = 7; y <= 13; y++) { row(y, 4, 7); row(y, 8, 11); } }
    else { for (let y = 8; y <= 12; y++) { row(y, 3, 7); row(y, 9, 13); } row(13, 2, 7); row(13, 9, 14); }
    if (info.armor.tier === 4) px(x, [[7, 5], [8, 5]], '#8a5ac8');
  } else if (id === I.DONUT) {
    for (let yy = 3; yy <= 12; yy++) for (let xx = 3; xx <= 12; xx++) { const d = Math.hypot(xx - 7.5, yy - 7.5); if (d < 5 && d > 1.8) px(x, [[xx, yy]], d > 3.6 ? '#d89a50' : '#ff7ab0'); }
    px(x, [[5, 5], [9, 4], [10, 8], [6, 10], [4, 8], [8, 11]], '#fff'); px(x, [[7, 4], [11, 7], [5, 7]], '#4ac0ff');
  } else if (id === I.DUFF) {
    for (let yy = 3; yy <= 13; yy++) for (let xx = 5; xx <= 10; xx++) px(x, [[xx, yy]], yy < 4 || yy > 12 ? '#b8b8b8' : yy >= 7 && yy <= 9 ? '#f4f4f4' : '#1a5fc0');
    px(x, [[6, 8], [7, 8], [9, 8]], '#d02020');
  } else if (id === I.SENZU) {
    for (let yy = 3; yy <= 12; yy++) for (let xx = 4; xx <= 11; xx++) { const d = Math.hypot((xx - 7.5) * 1.25 + (yy - 7.5) * 0.4, (yy - 7.5) * 0.9); if (d < 4.2) px(x, [[xx, yy]], d < 2 ? '#8ae860' : '#4fb830'); }
    px(x, [[6, 5], [7, 5]], '#d8ffb0');
  } else if (id === I.DBALL) {
    for (let yy = 2; yy <= 13; yy++) for (let xx = 2; xx <= 13; xx++) { const d = Math.hypot(xx - 7.5, yy - 7.5); if (d < 5.6) px(x, [[xx, yy]], d < 3.2 ? '#ffb020' : '#e07808'); }
    px(x, [[7, 6], [8, 6], [6, 7], [9, 7], [7, 9], [8, 9]], '#d02010'); px(x, [[7, 7], [8, 7], [7, 8], [8, 8]], '#fff0a0'); px(x, [[5, 4], [6, 4]], '#fff0c0');
  } else if (id === I.NETHERITE) {
    for (let yy = 5; yy <= 10; yy++) for (let xx = 3; xx <= 12; xx++) px(x, [[xx, yy]], yy >= 9 ? '#2a2228' : (xx + yy) % 4 === 0 ? '#6a5a66' : '#4e444c');
    px(x, [[5, 6], [6, 6], [10, 8]], '#c8a850');
  } else if (id === I.SCRAP) {
    px(x, [[6, 5], [7, 5], [8, 5], [5, 6], [6, 6], [7, 6], [8, 6], [9, 6], [5, 7], [6, 7], [7, 7], [8, 7], [9, 7], [10, 7], [6, 8], [7, 8], [8, 8], [9, 8], [7, 9], [8, 9]], '#4a3a40'); px(x, [[6, 6], [7, 6]], '#8a7480');
  } else if (id === I.LEATHER) {
    for (let yy = 4; yy <= 11; yy++) for (let xx = 3; xx <= 12; xx++) px(x, [[xx, yy]], (xx + yy) % 3 === 0 ? '#a8683a' : '#8a5230');
    px(x, [[3, 4], [12, 4], [3, 11], [12, 11]], 'rgba(0,0,0,0)'); px(x, [[5, 7], [7, 7], [9, 7]], '#d8b080');
  } else if (info.tool) {
    const col = TIERS[info.tool.tier].color, dark = shade(col, 0.7), light = rgb(col);
    handle();
    const t = info.tool.type;
    if (t === 'pick') {
      px(x, [[5, 2], [6, 1], [7, 1], [8, 1], [9, 1], [10, 2], [11, 3], [12, 4], [12, 5], [4, 3], [3, 4], [3, 5]], light);
      px(x, [[6, 2], [7, 2], [8, 2], [9, 2], [10, 3], [11, 4]], dark);
    } else if (t === 'axe') {
      px(x, [[7, 2], [8, 2], [9, 2], [6, 3], [7, 3], [8, 3], [9, 3], [10, 3], [8, 4], [9, 4], [10, 4], [9, 5]], light);
      px(x, [[7, 4], [8, 5], [10, 5]], dark);
    } else if (t === 'shovel') {
      px(x, [[11, 2], [12, 2], [10, 3], [11, 3], [12, 3], [13, 3], [11, 4], [12, 4], [13, 4], [12, 5], [13, 5], [12, 1], [13, 2]], light);
      px(x, [[11, 4], [12, 5]], dark);
    } else {
      for (let i = 0; i < 9; i++) px(x, [[5 + i, 10 - i], [6 + i, 10 - i]], i % 2 ? light : dark);
      px(x, [[12, 1], [13, 2], [13, 1]], light);
      px(x, [[4, 9], [5, 10], [6, 11], [3, 8], [4, 11], [5, 12]], '#5a4020');
    }
  } else if (id === I.STICK) { handle(); px(x, [[12, 3]], stick); }
  else if (id === I.COAL) { px(x, [[5, 5], [6, 4], [7, 4], [8, 4], [9, 5], [10, 6], [10, 7], [9, 9], [8, 10], [6, 10], [5, 9], [4, 7], [4, 6], [6, 5], [7, 5], [8, 5], [9, 6], [9, 7], [8, 9], [7, 9], [6, 9], [5, 8], [5, 6], [6, 6], [7, 6], [8, 6], [8, 7], [8, 8], [7, 8], [6, 8], [5, 7], [6, 7], [7, 7]], '#262626'); px(x, [[7, 5], [6, 6]], '#555'); }
  else if (id === I.IRON || id === I.GOLD) {
    const base = id === I.IRON ? '#d8d8d8' : '#f2d230', dk = id === I.IRON ? '#9a9a9a' : '#b89412';
    for (let yy = 5; yy <= 10; yy++) for (let xx = 3; xx <= 12; xx++) px(x, [[xx, yy]], yy >= 9 ? dk : base);
    px(x, [[3, 5], [12, 5], [3, 10], [12, 10]], 'rgba(0,0,0,0)');
  } else if (id === I.DIAMOND) {
    px(x, [[7, 3], [8, 3], [6, 4], [7, 4], [8, 4], [9, 4], [5, 5], [6, 5], [7, 5], [8, 5], [9, 5], [10, 5], [6, 6], [7, 6], [8, 6], [9, 6], [7, 7], [8, 7], [7, 8]], '#5aebe1');
    px(x, [[7, 4], [6, 5], [7, 6]], '#c8fffa'); px(x, [[9, 5], [8, 6], [8, 7], [7, 8]], '#2aa8a0');
  } else if (id === I.APPLE) {
    px(x, [[5, 5], [6, 4], [7, 5], [8, 4], [9, 4], [10, 5], [4, 6], [11, 6], [4, 7], [11, 7], [5, 9], [6, 10], [9, 10], [10, 9], [11, 8], [4, 8]], '#d22');
    for (let yy = 5; yy <= 9; yy++) for (let xx = 5; xx <= 10; xx++) px(x, [[xx, yy]], '#e33');
    px(x, [[6, 5], [6, 6]], '#fcc'); px(x, [[8, 2], [9, 3]], '#5a3a10'); px(x, [[9, 2], [10, 2]], '#3a3');
  } else if (id === I.PORK || id === I.BEEF) {
    const a = id === I.PORK ? '#f0a0a0' : '#b83a3a', b = id === I.PORK ? '#c87070' : '#8a2020';
    for (let yy = 4; yy <= 11; yy++) for (let xx = 3 + (yy < 6 ? 2 : 0); xx <= 12 - (yy > 9 ? 2 : 0); xx++) px(x, [[xx, yy]], (xx + yy) % 5 === 0 ? b : a);
    px(x, [[10, 5], [11, 5], [11, 6]], '#f6f0e0');
  } else if (id === I.STAR) {
    px(x, [[7, 1], [8, 1], [7, 2], [8, 2], [7, 3], [8, 3], [1, 6], [2, 6], [3, 6], [4, 6], [11, 6], [12, 6], [13, 6], [14, 6], [5, 5], [6, 5], [7, 5], [8, 5], [9, 5], [10, 5], [5, 7], [6, 7], [7, 7], [8, 7], [9, 7], [10, 7], [4, 8], [5, 8], [6, 8], [7, 8], [8, 8], [9, 8], [10, 8], [11, 8], [3, 6], [5, 9], [6, 9], [9, 9], [10, 9], [4, 11], [5, 11], [10, 11], [11, 11], [4, 12], [11, 12], [3, 13], [12, 13], [6, 6], [7, 6], [8, 6], [9, 6], [7, 4], [8, 4]], '#fff1a8');
    px(x, [[7, 6], [8, 6], [7, 7], [8, 7]], '#ffffff'); px(x, [[5, 8], [10, 8], [6, 9], [9, 9]], '#e8c640');
  } else if (id === I.ELYTRA) {
    for (let s = -1; s <= 1; s += 2) for (let i = 0; i < 7; i++) for (let j = 0; j < 9 - i; j++) { const xx = 8 + s * (i + 1) - (s < 0 ? 1 : 0), yy = 3 + j + Math.floor(i / 2); px(x, [[xx, yy]], (i + j) % 3 === 0 ? '#9aa4b0' : '#7e8a98'); }
    px(x, [[7, 3], [8, 3], [7, 4], [8, 4], [7, 5], [8, 5]], '#52606e');
  } else if (id === I.LIGHTER) {
    for (let yy = 7; yy <= 13; yy++) for (let xx = 4; xx <= 10; xx++) px(x, [[xx, yy]], yy < 9 ? '#9a9a9a' : '#6a6a6a');
    px(x, [[8, 6], [9, 5], [9, 4], [8, 3], [9, 2]], '#ff9a28'); px(x, [[9, 4], [9, 3]], '#ffe070'); px(x, [[6, 8], [7, 8]], '#d8d8d8');
  } else if (id === I.EYE) {
    for (let yy = 3; yy <= 12; yy++) for (let xx = 3; xx <= 12; xx++) if (Math.hypot(xx - 7.5, yy - 7.5) < 4.6) px(x, [[xx, yy]], Math.hypot(xx - 7.5, yy - 7.5) < 2 ? '#101a14' : '#3fae78');
    px(x, [[5, 5], [6, 5], [5, 6]], '#a8ffd8');
  } else if (id === I.PEARL) {
    for (let yy = 3; yy <= 12; yy++) for (let xx = 3; xx <= 12; xx++) if (Math.hypot(xx - 7.5, yy - 7.5) < 4.6) px(x, [[xx, yy]], Math.hypot(xx - 7.5, yy - 7.5) < 3 ? '#1f8f6a' : '#0e5a44');
    px(x, [[6, 5], [7, 5], [5, 6], [6, 6]], '#a8ffd8'); px(x, [[9, 9], [10, 8]], '#52d8a8');
  } else if (id === I.CHICKEN || id === I.COOKED_CHICKEN) {
    const a = id === I.CHICKEN ? '#f2c4b0' : '#c8883a', b = id === I.CHICKEN ? '#d49a84' : '#8a5420';
    for (let yy = 4; yy <= 10; yy++) for (let xx = 4; xx <= 11; xx++) if (Math.hypot(xx - 7.5, yy - 7) < 4) px(x, [[xx, yy]], (xx + yy) % 4 === 0 ? b : a);
    px(x, [[10, 10], [11, 11], [12, 12], [12, 11], [11, 12]], '#f6f0e0');
  } else if (id === I.COOKED_PORK || id === I.STEAK) {
    const a = id === I.STEAK ? '#8a4a22' : '#c8884c', b = id === I.STEAK ? '#5e2e12' : '#a06030';
    for (let yy = 4; yy <= 11; yy++) for (let xx = 3 + (yy < 6 ? 2 : 0); xx <= 12 - (yy > 9 ? 2 : 0); xx++) px(x, [[xx, yy]], (xx + yy) % 4 === 0 ? b : a);
    px(x, [[10, 5], [11, 5], [11, 6]], '#f6f0e0'); px(x, [[5, 6], [6, 7], [7, 8], [8, 9]], b);
  } else { px(x, [[7, 7]], '#fff'); }
  return c;
}

export function iconCanvas(id) {
  if (canvCache.has(id)) return canvCache.get(id);
  const c = BLOCKS[id] && !BLOCKS[id].flat ? drawBlock(id) : drawItem(id);
  canvCache.set(id, c);
  return c;
}
export function iconURL(id) {
  if (!urlCache.has(id)) urlCache.set(id, iconCanvas(id).toDataURL());
  return urlCache.get(id);
}
export function iconTexture(id) {
  if (!texCache.has(id)) {
    const t = new THREE.CanvasTexture(iconCanvas(id));
    t.magFilter = THREE.NearestFilter; t.minFilter = THREE.NearestFilter; t.generateMipmaps = false;
    t.colorSpace = THREE.SRGBColorSpace;
    texCache.set(id, t);
  }
  return texCache.get(id);
}

// ---------- Sprites del HUD (corazones, comida, burbujas) en pixel-art ----------
function sprite(rows, pal, emptyMask) {
  const c = document.createElement('canvas'); c.width = 9; c.height = 9;
  const x = c.getContext('2d');
  rows.forEach((row, yy) => [...row].forEach((ch, xx) => { const col = pal(ch, xx); if (col) { x.fillStyle = col; x.fillRect(xx, yy, 1, 1); } }));
  return c.toDataURL();
}
const HEART = ['.##...##.', '#RR#.#RR#', '#RHRRRRR#', '#RRRRRRR#', '.#RRRRR#.', '..#RRR#..', '...#R#...', '....#....', '.........'];
const FOOD = ['......##.', '.....#CC#', '....#CHC#', '...#CCC#.', '..#CCC#..', '.#CCC#...', '#WW##....', '#WW#.....', '.##......'];
const BUBBLE = ['..#####..', '.#BBBBB#.', '#BHBBBBB#', '#BHBBBBB#', '#BBBBBBB#', '#BBBBBBB#', '.#BBBBB#.', '..#####..', '.........'];
export function hudSprites() {
  const heart = (mode) => sprite(HEART, (ch, xx) => {
    if (ch === '.') return null;
    const empty = mode === 'empty' || (mode === 'half' && xx > 4);
    if (ch === '#') return '#1a0505';
    return empty ? '#4a3a3a' : ch === 'H' ? '#ff9c9c' : '#e02222';
  });
  const food = (mode) => sprite(FOOD, (ch, xx) => {
    if (ch === '.') return null;
    if (ch === '#') return '#2a1405';
    if (ch === 'W') return mode === 'empty' ? '#555' : '#f4efe4';
    const empty = mode === 'empty' || (mode === 'half' && xx > 4);
    return empty ? '#4a3d30' : ch === 'H' ? '#e8a05a' : '#c8782b';
  });
  const bubble = (mode) => sprite(BUBBLE, (ch) => (ch === '.' ? null : ch === '#' ? '#0a2a5a' : mode === 'empty' ? 'rgba(120,170,230,0.25)' : ch === 'H' ? '#d8f0ff' : '#5aa8f0'));
  return {
    heart: { full: heart('full'), half: heart('half'), empty: heart('empty') },
    food: { full: food('full'), half: food('half'), empty: food('empty') },
    bubble: { full: bubble('full'), empty: bubble('empty') },
  };
}
export function tileURL(name) {
  const c = document.createElement('canvas'); c.width = c.height = 16;
  const i = TILE_INDEX[name];
  c.getContext('2d').drawImage(atlasCanvas, i * 16, 0, 16, 16, 0, 0, 16, 16);
  return c.toDataURL();
}
