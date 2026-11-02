// Atlas de texturas 16x16 generado por código (sin archivos de imagen).
import * as THREE from 'three';
import { hash2 } from './noise.js';

const T = 16;
const NAMES = ['grass_top', 'grass_side', 'dirt', 'stone', 'sand', 'log_side', 'log_top', 'leaves', 'planks', 'cobble',
  'water', 'glass', 'coal_ore', 'iron_ore', 'gold_ore', 'diamond_ore', 'bedrock', 'snow', 'snow_side',
  'cactus_side', 'cactus_top', 'bricks', 'table_top', 'table_side', 'torch', 'furnace_top', 'furnace_front', 'command'];
export const TILE_INDEX = Object.fromEntries(NAMES.map((n, i) => [n, i]));
export const TILE_COUNT = NAMES.length;

const clamp = (c) => Math.max(0, Math.min(255, c));
function jitter(base, amt, x, y, seed) {
  const n = (hash2(x, y, seed) - 0.5) * 2 * amt;
  return base.map((c) => clamp(c + n));
}
const grassTop = (x, y) => jitter([95, 159, 53], 22, x, y, 1);
const dirt = (x, y) => jitter([134, 96, 67], 18, x, y, 2);
const stone = (x, y) => jitter([125, 125, 125], 20, x, y, 4);
const planks = (x, y) => jitter([168, 134, 82], 8, x, y, 9).map((c) => (y % 4 === 3 ? c - 30 : c));
function ore(color, seed) {
  return (x, y) => (hash2(Math.floor(x / 2) + 3, Math.floor(y / 2), seed) > 0.72 ? jitter(color, 14, x, y, seed + 1) : stone(x, y));
}

const painters = {
  grass_top: grassTop,
  dirt,
  grass_side: (x, y) => (y < 4 + (hash2(x, 0, 3) > 0.5 ? 1 : 0) ? grassTop(x, y) : dirt(x, y)),
  stone,
  sand: (x, y) => jitter([219, 207, 142], 12, x, y, 5),
  log_side: (x, y) => jitter([102, 81, 49], 10, x, 0, 6).map((c) => c - (x % 4 === 0 ? 14 : 0)),
  log_top: (x, y) => {
    const d = Math.max(Math.abs(x - 7.5), Math.abs(y - 7.5));
    return jitter(d % 4 < 2 ? [170, 135, 82] : [140, 110, 66], 8, x, y, 7);
  },
  leaves: (x, y) => jitter([56, 118, 29], 30, x, y, 8),
  planks,
  cobble: (x, y) => {
    const cell = hash2(Math.floor(x / 4), Math.floor(y / 4), 10);
    const edge = x % 4 === 3 || y % 4 === 3;
    return jitter([110 + cell * 40, 110 + cell * 40, 110 + cell * 40], 10, x, y, 11).map((c) => (edge ? c - 35 : c));
  },
  water: (x, y) => {
    const r = hash2(x >> 1, y >> 1, 12) > 0.8 ? 25 : 0;
    return [...jitter([36 + r, 86 + r, 200 + r / 2], 8, x, y, 12), 175];
  },
  glass: (x, y) => {
    const edge = x === 0 || y === 0 || x === 15 || y === 15;
    const shine = (x === 3 && y >= 3 && y <= 5) || (x === 4 && y === 3) || (x === 11 && y >= 10 && y <= 11);
    return edge ? [215, 235, 245, 230] : shine ? [255, 255, 255, 190] : [200, 225, 240, 0];
  },
  coal_ore: ore([30, 30, 30], 20),
  iron_ore: ore([216, 175, 147], 30),
  gold_ore: ore([250, 220, 60], 40),
  diamond_ore: ore([70, 235, 225], 50),
  bedrock: (x, y) => jitter([55, 55, 55], 32, x, y, 60),
  snow: (x, y) => jitter([240, 245, 250], 7, x, y, 61),
  snow_side: (x, y) => (y < 4 ? jitter([240, 245, 250], 7, x, y, 61) : dirt(x, y)),
  cactus_side: (x, y) => {
    if ((x === 4 || x === 11) && y % 5 === 2) return [230, 230, 200];
    return jitter([36, 118, 48], 10, x, 0, 62).map((c) => (x % 5 === 2 ? c - 18 : c));
  },
  cactus_top: (x, y) => {
    const d = Math.max(Math.abs(x - 7.5), Math.abs(y - 7.5));
    return jitter(d < 3 ? [30, 100, 40] : [52, 140, 60], 8, x, y, 63);
  },
  bricks: (x, y) => {
    const mortar = y % 4 === 3 || (x + (Math.floor(y / 4) % 2) * 4) % 8 === 7;
    return mortar ? jitter([170, 168, 160], 8, x, y, 64) : jitter([150, 72, 58], 14, x, y, 65);
  },
  table_top: (x, y) => {
    const line = x === 0 || y === 0 || x === 15 || y === 15 || x === 7 || x === 8 || y === 7 || y === 8;
    return line ? jitter([92, 60, 30], 8, x, y, 66) : planks(x, y);
  },
  torch: (x, y) => {
    if (x < 7 || x > 8) return [0, 0, 0, 0];
    if (y < 2) return x === 7 ? [255, 235, 120, 255] : [255, 160, 40, 255];
    if (y < 4) return [255, 200, 60, 255];
    return jitter([122, 86, 44], 10, x, y, 70);
  },
  command: (x, y) => {
    const edge = x === 0 || y === 0 || x === 15 || y === 15;
    const chev = ((x === 4 + (y - 4) && y >= 4 && y <= 7) || (x === 4 + (11 - y) && y >= 8 && y <= 11)) || (y === 10 && x >= 9 && x <= 12);
    if (edge) return [74, 34, 8, 255];
    if (chev) return [42, 18, 4, 255];
    return jitter([196, 114, 58], 18, x, y, 75);
  },
  furnace_top: (x, y) => (x === 0 || y === 0 || x === 15 || y === 15 ? jitter([70, 70, 70], 8, x, y, 71) : stone(x, y).map((c) => c - 20)),
  furnace_front: (x, y) => {
    const edge = x === 0 || y === 0 || x === 15;
    if (edge) return jitter([70, 70, 70], 8, x, y, 72);
    if (x >= 4 && x <= 11 && y >= 8 && y <= 13) return (y > 10 && x > 5 && x < 10 && hash2(x, y, 73) > 0.4) ? [255, 150 + (hash2(x, y, 74) * 80) | 0, 30, 255] : [25, 25, 25, 255];
    if (x >= 4 && x <= 11 && y >= 3 && y <= 5) return [30, 30, 30, 255];
    return stone(x, y).map((c) => c - 15);
  },
  table_side: (x, y) => (y < 3 ? jitter([92, 60, 30], 8, x, y, 67) : (x === 7 || x === 8) ? jitter([120, 90, 50], 8, x, y, 68) : planks(x, y)),
};

const avgCache = {};
export function tileColor(name) {
  if (avgCache[name]) return avgCache[name];
  let r = 0, g = 0, b = 0, n = 0;
  for (let y = 0; y < T; y++) for (let x = 0; x < T; x++) {
    const p = painters[name](x, y);
    if (p[3] === 0) continue;
    r += p[0]; g += p[1]; b += p[2]; n++;
  }
  return (avgCache[name] = [r / n / 255, g / n / 255, b / n / 255]);
}

export function createAtlas() {
  const canvas = document.createElement('canvas');
  canvas.width = T * TILE_COUNT;
  canvas.height = T;
  const ctx = canvas.getContext('2d');
  const img = ctx.createImageData(canvas.width, T);
  NAMES.forEach((name, i) => {
    for (let y = 0; y < T; y++) {
      for (let x = 0; x < T; x++) {
        const p = painters[name](x, y);
        const o = (y * canvas.width + i * T + x) * 4;
        img.data[o] = p[0]; img.data[o + 1] = p[1]; img.data[o + 2] = p[2]; img.data[o + 3] = p[3] === undefined ? 255 : p[3];
      }
    }
  });
  ctx.putImageData(img, 0, 0);
  const texture = new THREE.CanvasTexture(canvas);
  texture.magFilter = THREE.NearestFilter;
  texture.minFilter = THREE.NearestFilter;
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.generateMipmaps = false;
  return { canvas, texture };
}
