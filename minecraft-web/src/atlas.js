// Atlas de texturas 16x16 generado proceduralmente (sin archivos de imagen).
import * as THREE from 'three';
import { hash2 } from './noise.js';

const T = 16;
const NAMES = ['grass_top', 'grass_side', 'dirt', 'stone', 'sand', 'log_side', 'log_top', 'leaves', 'planks', 'cobble'];
export const TILE_INDEX = Object.fromEntries(NAMES.map((n, i) => [n, i]));
export const TILE_COUNT = NAMES.length;

const rgb = (r, g, b) => [r, g, b];
function jitter(base, amt, x, y, seed) {
  const n = (hash2(x, y, seed) - 0.5) * 2 * amt;
  return base.map((c) => Math.max(0, Math.min(255, c + n)));
}

const painters = {
  grass_top: (x, y) => jitter(rgb(95, 159, 53), 22, x, y, 1),
  dirt: (x, y) => jitter(rgb(134, 96, 67), 18, x, y, 2),
  grass_side: (x, y) => (y < 4 + (hash2(x, 0, 3) > 0.5 ? 1 : 0) ? jitter(rgb(95, 159, 53), 22, x, y, 1) : jitter(rgb(134, 96, 67), 18, x, y, 2)),
  stone: (x, y) => jitter(rgb(125, 125, 125), 20, x, y, 4),
  sand: (x, y) => jitter(rgb(219, 207, 142), 12, x, y, 5),
  log_side: (x, y) => jitter(rgb(102, 81, 49), 10, x, 0, 6).map((c, i) => c - (x % 4 === 0 ? 14 : 0)),
  log_top: (x, y) => {
    const d = Math.max(Math.abs(x - 7.5), Math.abs(y - 7.5));
    return jitter(d % 4 < 2 ? rgb(170, 135, 82) : rgb(140, 110, 66), 8, x, y, 7);
  },
  leaves: (x, y) => jitter(rgb(56, 118, 29), 30, x, y, 8),
  planks: (x, y) => jitter(rgb(168, 134, 82), 8, x, y, 9).map((c) => (y % 4 === 3 ? c - 30 : c)),
  cobble: (x, y) => {
    const cell = hash2(Math.floor(x / 4), Math.floor(y / 4), 10);
    const edge = x % 4 === 3 || y % 4 === 3;
    return jitter(rgb(110 + cell * 40, 110 + cell * 40, 110 + cell * 40), 10, x, y, 11).map((c) => (edge ? c - 35 : c));
  },
};

export function createAtlas() {
  const canvas = document.createElement('canvas');
  canvas.width = T * TILE_COUNT;
  canvas.height = T;
  const ctx = canvas.getContext('2d');
  const img = ctx.createImageData(canvas.width, T);
  NAMES.forEach((name, i) => {
    for (let y = 0; y < T; y++) {
      for (let x = 0; x < T; x++) {
        const [r, g, b] = painters[name](x, y);
        const o = (y * canvas.width + i * T + x) * 4;
        img.data[o] = r; img.data[o + 1] = g; img.data[o + 2] = b; img.data[o + 3] = 255;
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
