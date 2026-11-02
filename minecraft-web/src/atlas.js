// Atlas de texturas 16x16 generado por código (sin archivos de imagen).
import * as THREE from 'three';
import { hash2 } from './noise.js';

const T = 16;
const NAMES = ['grass_top', 'grass_side', 'dirt', 'stone', 'sand', 'log_side', 'log_top', 'leaves', 'planks', 'cobble',
  'water', 'glass', 'coal_ore', 'iron_ore', 'gold_ore', 'diamond_ore', 'bedrock', 'snow', 'snow_side',
  'cactus_side', 'cactus_top', 'bricks', 'table_top', 'table_side', 'torch', 'furnace_top', 'furnace_front', 'command',
  'obsidian', 'netherrack', 'soul_sand', 'glowstone', 'lava', 'nether_bricks', 'end_stone', 'end_frame_top', 'end_frame_side', 'end_frame_eye', 'portal', 'end_portal',
  'purpur', 'end_bricks', 'chest_top', 'chest_side', 'chest_open',
  'sandstone', 'mossy_cobble', 'ancient_debris_top', 'ancient_debris_side', 'gold_block', 'brew_top', 'brew_side', 'ench_top', 'ench_side', 'lapis_ore',
  'red_sand', 'terra_orange', 'terra_red', 'terra_yellow', 'terra_white', 'terra_brown', 'cherry_log_side', 'cherry_log_top', 'cherry_leaves', 'cherry_planks', 'mud'];
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
  obsidian: (x, y) => { const s = hash2(x, y, 80) > 0.93; return s ? jitter([90, 40, 150], 20, x, y, 81) : jitter([22, 14, 36], 10, x, y, 82); },
  netherrack: (x, y) => { const vein = hash2(Math.floor(x / 2), Math.floor(y / 3), 83) > 0.8; return jitter(vein ? [150, 60, 55] : [112, 40, 42], 22, x, y, 84); },
  soul_sand: (x, y) => { const pit = (x % 5 === 1 || x % 5 === 2) && (y % 5 === 1 || y % 5 === 2) && hash2(Math.floor(x / 5), Math.floor(y / 5), 85) > 0.45; return jitter(pit ? [48, 36, 30] : [88, 70, 56], 12, x, y, 86); },
  glowstone: (x, y) => { const b = hash2(Math.floor(x / 3), Math.floor(y / 3), 87); return jitter(b > 0.55 ? [255, 226, 140] : [206, 150, 74], 22, x, y, 88); },
  lava: (x, y) => { const n = hash2(Math.floor(x / 2), Math.floor(y / 2), 89); return jitter(n > 0.7 ? [255, 214, 70] : n > 0.35 ? [248, 140, 24] : [214, 80, 14], 14, x, y, 90); },
  nether_bricks: (x, y) => { const mortar = y % 4 === 3 || (x + (Math.floor(y / 4) % 2) * 4) % 8 === 7; return mortar ? jitter([28, 12, 16], 6, x, y, 91) : jitter([62, 24, 30], 12, x, y, 92); },
  end_stone: (x, y) => jitter([222, 222, 156], 16, x, y, 93).map((c, i) => (hash2(x >> 1, y >> 1, 94) > 0.85 ? c - 24 : c)),
  end_frame_top: (x, y) => { const edge = x < 2 || y < 2 || x > 13 || y > 13; return edge ? jitter([50, 100, 84], 10, x, y, 95) : jitter([96, 150, 124], 10, x, y, 96); },
  end_frame_side: (x, y) => (y < 4 ? jitter([60, 112, 94], 10, x, y, 97) : jitter([218, 218, 150], 14, x, y, 98)),
  end_frame_eye: (x, y) => { const d = Math.hypot(x - 7.5, y - 7.5); if (d < 2.3) return [14, 20, 18]; if (d < 4.4) return [96, 216, 150]; return x < 2 || y < 2 || x > 13 || y > 13 ? jitter([50, 100, 84], 10, x, y, 95) : jitter([96, 150, 124], 10, x, y, 96); },
  portal: (x, y) => { const v = Math.sin(x * 0.9 + y * 0.45) * 0.5 + Math.sin(y * 0.8 - x * 0.3) * 0.5; return [90 + v * 50 + hash2(x, y, 99) * 30, 20 + v * 14, 190 + v * 40, 175]; },
  end_portal: (x, y) => { const star = hash2(x, y, 100) > 0.9; return star ? [150, 255, 230, 255] : [6, 16, 22 + hash2(x, y, 101) * 20, 240]; },
  purpur: (x, y) => { const g = (x % 8 < 1 || y % 8 < 1); return jitter(g ? [140, 96, 140] : [172, 128, 172], 10, x, y, 110); },
  end_bricks: (x, y) => { const mortar = y % 4 === 3 || (x + (Math.floor(y / 4) % 2) * 4) % 8 === 7; return mortar ? jitter([186, 186, 128], 6, x, y, 111) : jitter([226, 226, 164], 10, x, y, 112); },
  chest_top: (x, y) => { const edge = x < 1 || y < 1 || x > 14 || y > 14; return edge ? jitter([80, 52, 20], 6, x, y, 113) : jitter([160, 112, 50], 10, x, y, 114); },
  chest_side: (x, y) => { const latch = x >= 7 && x <= 8 && y >= 5 && y <= 8; if (latch) return [214, 214, 214]; if (y === 6 || y === 7) return jitter([96, 62, 24], 6, x, y, 115); const edge = x < 1 || x > 14 || y > 14; return edge ? jitter([80, 52, 20], 6, x, y, 116) : jitter([160, 112, 50], 10, x, y, 117); },
  chest_open: (x, y) => { const edge = x < 2 || y < 2 || x > 13 || y > 13; return edge ? jitter([120, 82, 34], 8, x, y, 118) : jitter([30, 18, 10], 8, x, y, 119); },
  sandstone: (x, y) => { const band = y % 5 === 4; return jitter(band ? [196, 178, 120] : [216, 200, 140], 9, x, y, 120); },
  mossy_cobble: (x, y) => { const cell = hash2(Math.floor(x / 4), Math.floor(y / 4), 121), edge = x % 4 === 3 || y % 4 === 3, moss = hash2(x >> 1, y >> 1, 122) > 0.55; return moss ? jitter([70, 120, 50], 14, x, y, 123).map((c) => (edge ? c - 25 : c)) : jitter([110 + cell * 40, 110 + cell * 40, 110 + cell * 40], 10, x, y, 11).map((c) => (edge ? c - 35 : c)); },
  ancient_debris_top: (x, y) => { const d = Math.max(Math.abs(x - 7.5), Math.abs(y - 7.5)); return d > 5.5 ? jitter([92, 66, 58], 8, x, y, 124) : d > 3 ? jitter([126, 92, 80], 8, x, y, 125) : jitter([70, 48, 44], 8, x, y, 126); },
  ancient_debris_side: (x, y) => { const band = y % 5 === 2; return jitter(band ? [70, 48, 44] : [112, 80, 70], 9, x, y, 127); },
  gold_block: (x, y) => { const edge = x < 1 || y < 1 || x > 14 || y > 14, hl = (x === 2 && y < 6) || (y === 2 && x < 6); return hl ? [255, 252, 200] : edge ? jitter([200, 150, 20], 6, x, y, 128) : jitter([250, 214, 60], 10, x, y, 129); },
  red_sand: (x, y) => jitter([192, 100, 46], 13, x, y, 150),
  terra_orange: (x, y) => jitter(y % 5 === 4 ? [176, 90, 44] : [192, 104, 54], 7, x, y, 151),
  terra_red: (x, y) => jitter(y % 5 === 4 ? [128, 48, 34] : [146, 62, 44], 7, x, y, 152),
  terra_yellow: (x, y) => jitter(y % 5 === 4 ? [190, 142, 52] : [208, 164, 70], 7, x, y, 153),
  terra_white: (x, y) => jitter(y % 5 === 4 ? [196, 168, 150] : [214, 190, 172], 6, x, y, 154),
  terra_brown: (x, y) => jitter(y % 5 === 4 ? [96, 64, 48] : [112, 78, 58], 7, x, y, 155),
  cherry_log_side: (x, y) => jitter([104, 66, 68], 9, x, 0, 156).map((c) => c - (x % 4 === 0 ? 16 : 0)),
  cherry_log_top: (x, y) => { const d = Math.max(Math.abs(x - 7.5), Math.abs(y - 7.5)); return jitter(d % 4 < 2 ? [238, 176, 188] : [214, 146, 160], 8, x, y, 157); },
  cherry_leaves: (x, y) => { const sp = hash2(x >> 1, y >> 1, 158) > 0.72; return jitter(sp ? [252, 214, 226] : [236, 150, 184], 22, x, y, 159); },
  cherry_planks: (x, y) => jitter([228, 176, 170], 8, x, y, 160).map((c) => (y % 4 === 3 ? c - 30 : c)),
  mud: (x, y) => { const wet = hash2(x >> 1, y >> 1, 161) > 0.8; return jitter(wet ? [48, 38, 34] : [66, 52, 44], 9, x, y, 162); },
  lapis_ore: ore([38, 76, 190], 140),
  brew_top: (x, y) => { const d = Math.hypot(x - 7.5, y - 7.5); if (d < 2.2) return [250, 190, 40]; if (d < 4.6) return jitter([70, 70, 74], 6, x, y, 141); return x < 1 || y < 1 || x > 14 || y > 14 ? jitter([40, 40, 44], 6, x, y, 142) : stone(x, y).map((c) => c - 30); },
  brew_side: (x, y) => { if (y > 11) return stone(x, y).map((c) => c - 25); const rod = x >= 7 && x <= 8; if (rod) return jitter([250, 180, 40], 12, x, y, 143); const bottle = (x >= 2 && x <= 4 && y >= 5) || (x >= 11 && x <= 13 && y >= 5); if (bottle) return [215, 235, 245, 255]; return [0, 0, 0, 0]; },
  ench_top: (x, y) => { const edge = x < 1 || y < 1 || x > 14 || y > 14; if (edge) return jitter([26, 14, 36], 4, x, y, 144); const gem = Math.hypot(x - 7.5, y - 7.5) < 2.4; return gem ? [80, 230, 220] : jitter([150 + (hash2(x >> 1, y >> 1, 145) > 0.8 ? 25 : 0), 24, 36], 10, x, y, 146); },
  ench_side: (x, y) => { if (y < 4) return jitter([150, 24, 36], 10, x, y, 147); const gem = (x === 3 || x === 12) && y > 6 && y < 10; return gem ? [90, 235, 225] : jitter([22, 12, 34], 8, x, y, 148); },
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

// ---------------------------------------------------------------------------
// Texturas HD (64 px por tile) y mapas de relieve (normal maps) generados desde el atlas base
// ---------------------------------------------------------------------------
const NORMAL_STRENGTH = {
  stone: 3.4, cobble: 4.2, bricks: 4.0, bedrock: 4.5, coal_ore: 3.4, iron_ore: 3.4, gold_ore: 3.4, diamond_ore: 3.4,
  planks: 2.4, table_top: 2.4, table_side: 2.4, log_side: 3.2, log_top: 2.2, leaves: 3.6, dirt: 2.2, grass_top: 2.6, grass_side: 2.4,
  sand: 1.4, snow: 1.0, snow_side: 1.4, water: 0.9, glass: 0, torch: 0, cactus_side: 2.6, cactus_top: 2, furnace_top: 2.6, furnace_front: 3, command: 2.6,
};
function vnoise(x, y, seed) { // ruido de valor suave
  const x0 = Math.floor(x), y0 = Math.floor(y), fx = x - x0, fy = y - y0, sx = fx * fx * (3 - 2 * fx), sy = fy * fy * (3 - 2 * fy);
  const a = hash2(x0, y0, seed), b = hash2(x0 + 1, y0, seed), c = hash2(x0, y0 + 1, seed), d = hash2(x0 + 1, y0 + 1, seed);
  return (a + (b - a) * sx) * (1 - sy) + (c + (d - c) * sx) * sy;
}

export function createHDTextures(renderer) {
  const S = 64, f = S / T;
  const diff = document.createElement('canvas'); diff.width = S * TILE_COUNT; diff.height = S;
  const dctx = diff.getContext('2d'), dimg = dctx.createImageData(diff.width, S);
  const norm = document.createElement('canvas'); norm.width = diff.width; norm.height = S;
  const nctx = norm.getContext('2d'), nimg = nctx.createImageData(norm.width, S);
  NAMES.forEach((name, ti) => {
    const base = Array.from({ length: T * T }, (_, i) => painters[name](i % T, Math.floor(i / T)));
    const at = (x, y) => base[Math.max(0, Math.min(T - 1, y)) * T + Math.max(0, Math.min(T - 1, x))];
    const height = new Float32Array(S * S);
    for (let hy = 0; hy < S; hy++) for (let hx = 0; hx < S; hx++) {
      const u = (hx + 0.5) / f - 0.5, v = (hy + 0.5) / f - 0.5, x0 = Math.floor(u), y0 = Math.floor(v), fx = u - x0, fy = v - y0;
      const nearest = at(Math.floor(hx / f), Math.floor(hy / f));
      const p00 = at(x0, y0), p10 = at(x0 + 1, y0), p01 = at(x0, y0 + 1), p11 = at(x0 + 1, y0 + 1);
      const col = [0, 1, 2].map((c) => {
        const bil = (p00[c] * (1 - fx) + p10[c] * fx) * (1 - fy) + (p01[c] * (1 - fx) + p11[c] * fx) * fy;
        let val = nearest[c] * 0.5 + bil * 0.5;
        const grain = (hash2(hx + ti * 97, hy, 1234) - 0.5) * 16 + (vnoise(hx * 0.35 + ti * 13, hy * 0.35, 77) - 0.5) * 22 + (vnoise(hx * 0.09, hy * 0.09 + ti * 5, 91) - 0.5) * 18;
        return clamp(val + grain);
      });
      const alpha = nearest[3] === undefined ? 255 : nearest[3];
      const o = (hy * diff.width + ti * S + hx) * 4;
      dimg.data[o] = col[0]; dimg.data[o + 1] = col[1]; dimg.data[o + 2] = col[2]; dimg.data[o + 3] = alpha;
      height[hy * S + hx] = (col[0] * 0.3 + col[1] * 0.59 + col[2] * 0.11) / 255;
    }
    // relieve: Sobel sobre la luminancia, con envoltura dentro del tile para que repita sin costuras
    const st = NORMAL_STRENGTH[name] === undefined ? 2 : NORMAL_STRENGTH[name], H = (x, y) => height[((y + S) % S) * S + ((x + S) % S)];
    for (let hy = 0; hy < S; hy++) for (let hx = 0; hx < S; hx++) {
      const dx = (H(hx + 1, hy - 1) + 2 * H(hx + 1, hy) + H(hx + 1, hy + 1)) - (H(hx - 1, hy - 1) + 2 * H(hx - 1, hy) + H(hx - 1, hy + 1));
      const dy = (H(hx - 1, hy + 1) + 2 * H(hx, hy + 1) + H(hx + 1, hy + 1)) - (H(hx - 1, hy - 1) + 2 * H(hx, hy - 1) + H(hx + 1, hy - 1));
      let nx = -dx * st, ny = dy * st, nz = 1; const l = Math.hypot(nx, ny, nz); nx /= l; ny /= l; nz /= l;
      const o = (hy * norm.width + ti * S + hx) * 4;
      nimg.data[o] = (nx * 0.5 + 0.5) * 255; nimg.data[o + 1] = (ny * 0.5 + 0.5) * 255; nimg.data[o + 2] = (nz * 0.5 + 0.5) * 255; nimg.data[o + 3] = 255;
    }
  });
  dctx.putImageData(dimg, 0, 0); nctx.putImageData(nimg, 0, 0);
  const aniso = renderer ? renderer.capabilities.getMaxAnisotropy() : 4;
  const map = new THREE.CanvasTexture(diff);
  map.colorSpace = THREE.SRGBColorSpace; map.magFilter = THREE.LinearFilter; map.minFilter = THREE.LinearMipmapLinearFilter; map.generateMipmaps = true; map.anisotropy = Math.min(8, aniso);
  const normalMap = new THREE.CanvasTexture(norm);
  normalMap.magFilter = THREE.LinearFilter; normalMap.minFilter = THREE.LinearMipmapLinearFilter; normalMap.generateMipmaps = true; normalMap.anisotropy = Math.min(8, aniso);
  return { map, normalMap };
}

// Relieve para el atlas de píxeles (16 px): se usa en calidades bajas
export function createPixelNormal(atlasCanvas) {
  const ctx = atlasCanvas.getContext('2d'), W = atlasCanvas.width, data = ctx.getImageData(0, 0, W, T).data;
  const norm = document.createElement('canvas'); norm.width = W; norm.height = T;
  const nctx = norm.getContext('2d'), nimg = nctx.createImageData(W, T);
  NAMES.forEach((name, ti) => {
    const st = (NORMAL_STRENGTH[name] === undefined ? 2 : NORMAL_STRENGTH[name]) * 0.45;
    const Hh = (x, y) => { const o = (((y + T) % T) * W + ti * T + ((x + T) % T)) * 4; return (data[o] * 0.3 + data[o + 1] * 0.59 + data[o + 2] * 0.11) / 255; };
    for (let y = 0; y < T; y++) for (let x = 0; x < T; x++) {
      const dx = Hh(x + 1, y) - Hh(x - 1, y), dy = Hh(x, y + 1) - Hh(x, y - 1);
      let nx = -dx * st, ny = dy * st, nz = 1; const l = Math.hypot(nx, ny, nz); nx /= l; ny /= l; nz /= l;
      const o = (y * W + ti * T + x) * 4;
      nimg.data[o] = (nx * 0.5 + 0.5) * 255; nimg.data[o + 1] = (ny * 0.5 + 0.5) * 255; nimg.data[o + 2] = (nz * 0.5 + 0.5) * 255; nimg.data[o + 3] = 255;
    }
  });
  nctx.putImageData(nimg, 0, 0);
  const t = new THREE.CanvasTexture(norm); t.magFilter = THREE.NearestFilter; t.minFilter = THREE.NearestFilter; t.generateMipmaps = false;
  return t;
}
