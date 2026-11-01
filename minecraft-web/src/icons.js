// Iconos de bloques (cubo isométrico) e ítems (pixel art) dibujados por código.
import * as THREE from 'three';
import { BLOCKS, ITEMS, I, B, TIERS, TOOL_TYPES } from './blocks.js';
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
