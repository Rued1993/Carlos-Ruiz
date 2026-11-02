import * as THREE from 'three';
import { AIR, B, BLOCKS, OPAQUE, SOLID, LIQUID, GHOST, EMIT } from './blocks.js';
import { TILE_INDEX, TILE_COUNT } from './atlas.js';
import { fbm, hash2, noise3 } from './noise.js';

export const CS = 16;   // tamaño del chunk en X/Z
export const CH = 128;  // altura del mundo
export const SEA = 30;  // nivel del mar

const ckey = (cx, cz) => (cx + 32768) * 65536 + (cz + 32768);
const ckx = (k) => Math.floor(k / 65536) - 32768;
const ckz = (k) => (k % 65536) - 32768;

// dir, sombreado, esquinas {p: posición, uv}
const FACES = [
  { dir: [-1, 0, 0], shade: 0.9, ax: 0, corners: [{ p: [0, 1, 0], uv: [0, 1] }, { p: [0, 0, 0], uv: [0, 0] }, { p: [0, 1, 1], uv: [1, 1] }, { p: [0, 0, 1], uv: [1, 0] }] },
  { dir: [1, 0, 0], shade: 0.9, ax: 0, corners: [{ p: [1, 1, 1], uv: [0, 1] }, { p: [1, 0, 1], uv: [0, 0] }, { p: [1, 1, 0], uv: [1, 1] }, { p: [1, 0, 0], uv: [1, 0] }] },
  { dir: [0, -1, 0], shade: 0.75, ax: 1, bottom: true, corners: [{ p: [1, 0, 1], uv: [1, 0] }, { p: [0, 0, 1], uv: [0, 0] }, { p: [1, 0, 0], uv: [1, 1] }, { p: [0, 0, 0], uv: [0, 1] }] },
  { dir: [0, 1, 0], shade: 1.0, ax: 1, top: true, corners: [{ p: [0, 1, 1], uv: [1, 1] }, { p: [1, 1, 1], uv: [0, 1] }, { p: [0, 1, 0], uv: [1, 0] }, { p: [1, 1, 0], uv: [0, 0] }] },
  { dir: [0, 0, -1], shade: 0.82, ax: 2, corners: [{ p: [1, 0, 0], uv: [0, 0] }, { p: [0, 0, 0], uv: [1, 0] }, { p: [1, 1, 0], uv: [0, 1] }, { p: [0, 1, 0], uv: [1, 1] }] },
  { dir: [0, 0, 1], shade: 0.82, ax: 2, corners: [{ p: [0, 0, 1], uv: [0, 0] }, { p: [1, 0, 1], uv: [1, 0] }, { p: [0, 1, 1], uv: [0, 1] }, { p: [1, 1, 1], uv: [1, 1] }] },
];
for (const f of FACES) f.tan = [0, 1, 2].filter((a) => a !== f.ax);
const AO = [0.5, 0.68, 0.84, 1];
const smoothstep = (a, b, x) => { const t = Math.max(0, Math.min(1, (x - a) / (b - a))); return t * t * (3 - 2 * t); };

// Terreno: continentes, océanos profundos, cordilleras, colinas y ríos
export function terrainInfo(x, z, seed) {
  const cont = fbm(x * 0.0022, z * 0.0022, seed, 4);
  const mn = fbm(x * 0.0055, z * 0.0055, seed + 31, 3);
  const ridged = 1 - Math.abs(2 * fbm(x * 0.011, z * 0.011, seed + 37, 3) - 1);
  const hills = fbm(x * 0.013, z * 0.013, seed + 7, 3), detail = fbm(x * 0.05, z * 0.05, seed + 9, 2);
  let h, m = 0;
  if (cont < 0.4) h = SEA - 2 - (0.4 - cont) * 80 + detail * 3;
  else {
    const land = Math.min(1, (cont - 0.4) / 0.5);
    h = SEA + 1 + land * 10 + hills * 12 + detail * 3;
    m = smoothstep(0.52, 0.78, mn) * smoothstep(0.45, 0.6, cont);
    h += m * (ridged * 62 + 14);
  }
  if (cont >= 0.4 && m < 0.5) { // ríos
    const rv = Math.abs(fbm(x * 0.0032 + 11, z * 0.0032 - 7, seed + 61, 2) - 0.5);
    if (rv < 0.016) { const f = smoothstep(0.016, 0.004, rv); h = h * (1 - f) + (SEA - 2) * f; }
  }
  h = Math.max(6, Math.min(CH - 8, Math.floor(h)));
  const t = fbm(x * 0.0035, z * 0.0035, seed + 500, 2), hm = fbm(x * 0.004, z * 0.004, seed + 900, 2);
  let biome;
  if (h <= SEA - 1) biome = 'ocean';
  else if (m > 0.3) biome = 'mountains';
  else if (t < 0.34) biome = 'snow';
  else if (t > 0.64) biome = hm > 0.55 ? 'jungle' : 'desert';
  else biome = t > 0.55 && hm > 0.6 ? 'jungle' : 'plains';
  return { h, biome, m, t, hm };
}
export const terrainHeight = (x, z, seed) => terrainInfo(x, z, seed).h;
export function biomeAt(x, z, seed) { return terrainInfo(x, z, seed).biome; }

// Pilares de obsidiana del End (10 en círculo; los 4 más altos sostienen los cristales del dragón)
export function endPillars() {
  return Array.from({ length: 10 }, (_, i) => { const a = (i / 10) * Math.PI * 2; return { x: Math.round(Math.cos(a) * 36), z: Math.round(Math.sin(a) * 36), top: 78 + (i % 5) * 7 }; });
}

export class World {
  constructor(scene, materials, seed = 1337, saved = new Map(), dim = 'overworld') {
    this.dim = dim;
    this.scene = scene;
    this.materials = materials; // { opaque, trans }
    this.seed = seed;
    this.saved = saved;         // "k" -> Uint8Array de chunks guardados
    this.chunks = new Map();    // k -> Uint8Array
    this.tops = new Map();      // k -> Int16Array (altura del bloque opaco más alto por columna)
    this.meshes = new Map();    // k -> {opaque, trans}
    this.dirty = new Set();
    this.modified = new Set();  // chunks editados (se conservan en memoria)
    this.unsaved = new Set();   // chunks editados desde el último guardado
    this.unloadT = 0;
    this.torches = new Map();   // k -> Set de índices con antorchas
    this._lm = null;
    this.onChunkMeshed = null;
  }

  // Activa la generación y el mallado en Web Workers
  useWorkers(pool) { this.pool = pool; this.inflightGen = new Set(); this.inflightMesh = new Set(); this.jobTok = new Map(); this.tokN = 0; this.lastPcx = 0; this.lastPcz = 0; }

  idx(lx, y, lz) { return (y * CS + lz) * CS + lx; }

  // ---------- generación ----------
  generateChunk(cx, cz) {
    const k = ckey(cx, cz);
    if (this.saved.has(k)) {
      let data = new Uint8Array(this.saved.get(k));
      if (data.length !== CS * CS * CH) { const full = new Uint8Array(CS * CS * CH); full.set(data.subarray(0, Math.min(data.length, full.length))); data = full; } // mundos de versiones antiguas
      this.chunks.set(k, data);
      this.modified.add(k);
      this.computeTops(k, data);
      this.scanTorches(k, data);
      return data;
    }
    if (this.kind === 'oneblock' && this.dim === 'overworld') { // One Block: mundo vacío con un único bloque
      const e = new Uint8Array(CS * CS * CH);
      if (cx === 0 && cz === 0) e[this.idx(0, 64, 0)] = B.GRASS;
      this.chunks.set(k, e); this.computeTops(k, e); return e;
    }
    if (this.dim === 'nether') return this.genNether(cx, cz, k);
    if (this.dim === 'end') return this.genEnd(cx, cz, k);
    const seed = this.seed;
    const data = new Uint8Array(CS * CS * CH);
    const x0 = cx * CS, z0 = cz * CS;
    for (let lz = 0; lz < CS; lz++) {
      for (let lx = 0; lx < CS; lx++) {
        const wx = x0 + lx, wz = z0 + lz;
        const info = terrainInfo(wx, wz, seed), h = info.h, biome = info.biome;
        let top = B.GRASS, sub = B.DIRT;
        if (biome === 'ocean' || h <= SEA + 1) { top = B.SAND; sub = B.SAND; }
        else if (biome === 'desert') { top = B.SAND; sub = B.SAND; }
        else if (biome === 'snow') top = B.SNOW;
        else if (biome === 'mountains') {
          if (h > 92) { top = B.SNOW; sub = B.SNOW; } else if (h > 64) { top = B.STONE; sub = B.STONE; }
        }
        for (let y = 0; y <= h && y < CH; y++) {
          let b = B.STONE;
          if (y === h) b = top;
          else if (y >= h - 3) b = sub;
          else {
            const r = hash2(wx * 31 + y, wz * 17 - y, seed + 77 + y);
            if (y < 64 && r < 0.025) b = B.COAL_ORE;
            else if (y < 48 && r > 0.975 && r < 0.99) b = B.IRON_ORE;
            else if (y < 28 && r > 0.99 && r < 0.996) b = B.GOLD_ORE;
            else if (y < 16 && r > 0.996) b = B.DIAMOND_ORE;
          }
          if (y === 0 || (y === 1 && hash2(wx, wz, seed + 3) < 0.5)) b = B.BEDROCK;
          // cuevas: túneles = intersección de dos superficies de ruido, más cavernas amplias
          if (y > 2 && y < h - 1 && b !== B.BEDROCK) {
            const a = noise3(wx * 0.045, y * 0.07, wz * 0.045, seed + 11);
            const c = noise3(wx * 0.045 + 50, y * 0.07 + 50, wz * 0.045 + 50, seed + 13);
            const room = noise3(wx * 0.025, y * 0.045, wz * 0.025, seed + 17);
            if ((Math.abs(a - 0.5) < 0.055 && Math.abs(c - 0.5) < 0.055) || room > 0.8) b = AIR;
          }
          data[this.idx(lx, y, lz)] = b;
        }
        for (let y = h + 1; y <= SEA; y++) data[this.idx(lx, y, lz)] = B.WATER;
      }
    }
    const put = (wx, wy, wz, id, onlyAir) => {
      const lx = wx - x0, lz = wz - z0;
      if (lx < 0 || lz < 0 || lx >= CS || lz >= CS || wy >= CH || wy < 0) return;
      const i = this.idx(lx, wy, lz);
      if (onlyAir && data[i] !== AIR) return;
      data[i] = id;
    };
    const villages = this.villagesNear(x0, z0), structs = this.structuresNear(x0, z0);
    // Árboles, selva y cactus deterministas (incluye los de chunks vecinos que rozan este)
    for (let tz = z0 - 3; tz < z0 + CS + 3; tz++) {
      for (let tx = x0 - 3; tx < x0 + CS + 3; tx++) {
        const r = hash2(tx, tz, seed + 99);
        if (r > 0.06) continue;
        const info = terrainInfo(tx, tz, seed), h = info.h, biome = info.biome;
        if (h <= SEA + 1 || biome === 'ocean' || biome === 'mountains') continue;
        if (villages.some((v) => Math.abs(v.x - tx) < 26 && Math.abs(v.z - tz) < 26) || structs.some((s) => Math.abs(s.x - tx) < 14 && Math.abs(s.z - tz) < 14)) continue;
        if (biome === 'desert') {
          if (r < 0.004) { const ch = 1 + Math.floor(hash2(tx, tz, seed + 6) * 3); for (let t = 1; t <= ch; t++) put(tx, h + t, tz, B.CACTUS, false); }
          continue;
        }
        const forest = fbm(tx * 0.012, tz * 0.012, seed + 800, 2) > 0.58;
        const density = biome === 'jungle' ? 0.055 : forest ? 0.03 : biome === 'snow' ? 0.007 : 0.005;
        if (r > density) continue;
        const jungle = biome === 'jungle';
        const trunk = jungle ? 8 + Math.floor(hash2(tx, tz, seed + 5) * 6) : 4 + Math.floor(hash2(tx, tz, seed + 5) * 3);
        const rad0 = jungle ? 3 : 2;
        for (let dy = -2; dy <= 1; dy++) {
          const rad = dy <= -1 ? rad0 : rad0 - 1;
          for (let dz = -rad; dz <= rad; dz++)
            for (let dx = -rad; dx <= rad; dx++) {
              if (rad >= 2 && Math.abs(dx) === rad && Math.abs(dz) === rad) continue;
              put(tx + dx, h + trunk + dy, tz + dz, B.LEAVES, true);
            }
        }
        for (let t = 1; t <= trunk; t++) put(tx, h + t, tz, B.LOG, false);
      }
    }
    for (const v of villages) this.buildVillage(v, put);
    { const ctx = { data, x0, z0 }; for (const st of structs) this.buildStructure(st, ctx); }
    this.chunks.set(k, data);
    this.computeTops(k, data);
    this.scanTorches(k, data);
    return data;
  }


  // ---------- Templos y ruinas del Overworld ----------
  structureAt(rx, rz) {
    const key = 's' + rx + ',' + rz;
    if (!this.vcache) this.vcache = new Map();
    if (this.vcache.has(key)) return this.vcache.get(key);
    const seed = this.seed; let res = null;
    if (hash2(rx, rz, seed + 7700) < 0.75) {
      const x = rx * 176 + 36 + Math.floor(hash2(rx, rz, seed + 7701) * 104), z = rz * 176 + 36 + Math.floor(hash2(rx, rz, seed + 7702) * 104);
      const c = terrainInfo(x, z, seed);
      if (c.biome !== 'ocean' && c.biome !== 'mountains' && c.h > SEA + 1 && c.h < SEA + 26) {
        const r = hash2(rx, rz, seed + 7703); let type = null;
        if (c.biome === 'desert') type = r < 0.6 ? 'pyramid' : 'ruin';
        else if (c.biome === 'jungle') type = r < 0.6 ? 'jungle' : 'ruin';
        else if (c.biome === 'snow') type = r < 0.6 ? 'igloo' : 'ruin';
        else type = r < 0.5 ? 'outpost' : 'ruin';
        let nearVillage = false;
        for (let a = Math.floor((x - 70) / 128); a <= Math.floor((x + 70) / 128); a++) for (let b = Math.floor((z - 70) / 128); b <= Math.floor((z + 70) / 128); b++) { const v = this.villageAt(a, b); if (v && Math.abs(v.x - x) < 70 && Math.abs(v.z - z) < 70) nearVillage = true; }
        if (!nearVillage) res = { type, x, z, H: c.h };
      }
    }
    this.vcache.set(key, res); return res;
  }
  structuresNear(x0, z0) {
    const out = [];
    for (let rx = Math.floor((x0 - 24) / 176); rx <= Math.floor((x0 + CS + 24) / 176); rx++) for (let rz = Math.floor((z0 - 24) / 176); rz <= Math.floor((z0 + CS + 24) / 176); rz++) { const s = this.structureAt(rx, rz); if (s && Math.abs(s.x - x0 - 8) < 36 && Math.abs(s.z - z0 - 8) < 36) out.push(s); }
    return out;
  }
  _mix(ctx, x1, y1, z1, x2, y2, z2, a, b, p, salt) { // relleno con dos materiales mezclados (adoquín / adoquín musgoso)
    const xa = Math.max(Math.min(x1, x2), ctx.x0), xb = Math.min(Math.max(x1, x2), ctx.x0 + CS - 1), za = Math.max(Math.min(z1, z2), ctx.z0), zb = Math.min(Math.max(z1, z2), ctx.z0 + CS - 1);
    for (let y = Math.max(0, Math.min(y1, y2)); y <= Math.min(CH - 1, Math.max(y1, y2)); y++) for (let z = za; z <= zb; z++) for (let x = xa; x <= xb; x++) ctx.data[this.idx(x - ctx.x0, y, z - ctx.z0)] = hash2(x * 3 + y, z * 5 - y, this.seed + salt) < p ? b : a;
  }
  buildStructure(st, ctx) {
    const F = (a, b, c, d, e, f, id) => this._fill(ctx, st.x + a, st.H + b, st.z + c, st.x + d, st.H + e, st.z + f, id);
    const M = (a, b, c, d, e, f, id1, id2, p, salt) => this._mix(ctx, st.x + a, st.H + b, st.z + c, st.x + d, st.H + e, st.z + f, id1, id2, p, salt);
    const SS = B.SANDSTONE, CH_ = B.CHEST, T = B.TORCH, AIRB = AIR;
    if (st.type === 'pyramid') { // pirámide del desierto con cámara del tesoro
      F(-10, -8, -10, 10, 0, 10, SS);
      for (let i = 0; i <= 10; i++) F(-10 + i, 1 + i, -10 + i, 10 - i, 1 + i, 10 - i, SS);
      F(-7, 1, -7, 7, 8, 7, AIRB); F(-1, 1, 6, 1, 3, 13, AIRB); F(-2, 0, 11, 2, 0, 13, SS);
      F(-2, -3, -2, 2, 0, 2, AIRB); F(0, -4, 0, 0, -4, 0, B.GOLD_BLOCK);
      for (const [x, z] of [[-2, 0], [2, 0], [0, -2], [0, 2]]) F(x, -3, z, x, -3, z, CH_);
      for (const [x, z] of [[-6, -6], [6, -6], [-6, 6], [6, 6]]) { F(x, 1, z, x, 4, z, SS); F(x, 5, z, x, 5, z, T); }
      for (const x of [-4, 0, 4]) F(x, 1, -6, x, 1, -6, B.CHEST);
    } else if (st.type === 'jungle') { // templo de la selva de adoquín musgoso
      M(-7, -5, -6, 7, -1, 6, B.COBBLE, B.MOSSY_COBBLE, 0.4, 1);
      M(-7, 0, -6, 7, 5, 6, B.COBBLE, B.MOSSY_COBBLE, 0.55, 2); F(-6, 1, -5, 6, 4, 5, AIRB);
      M(-5, 6, -4, 5, 10, 4, B.COBBLE, B.MOSSY_COBBLE, 0.6, 3); F(-4, 6, -3, 4, 9, 3, AIRB);
      M(-3, 11, -2, 3, 12, 2, B.COBBLE, B.MOSSY_COBBLE, 0.6, 4);
      F(-1, 1, 5, 1, 3, 7, AIRB); M(-3, 0, 7, 3, 0, 9, B.COBBLE, B.MOSSY_COBBLE, 0.5, 5);
      F(-4, 1, -4, -4, 1, -4, CH_); F(4, 1, -4, 4, 1, -4, CH_); F(0, 6, -3, 0, 6, -3, CH_);
      for (const [x, z] of [[-5, -4], [5, -4], [-5, 4], [5, 4]]) F(x, 2, z, x, 2, z, T);
      for (let i = 0; i < 5; i++) F(-3, 1, -2 + i, -3, 1 + i, -2 + i, B.MOSSY_COBBLE); F(-3, 5, -2, -3, 5, 2, AIRB); // escalera al piso superior
    } else if (st.type === 'igloo') { // iglú con mesa y horno
      for (let dx = -5; dx <= 5; dx++) for (let dz = -5; dz <= 5; dz++) for (let dy = -3; dy <= 5; dy++) {
        const d = Math.hypot(dx, dy, dz); let id = -1;
        if (dy < 0) { if (Math.hypot(dx, dz) <= 4.2) id = B.SNOW; }
        else if (d <= 3.1) id = dy === 0 ? B.PLANKS : AIRB; else if (d <= 4.3) id = B.SNOW;
        if (id >= 0) F(dx, dy, dz, dx, dy, dz, id);
      }
      F(-2, 0, 2, 2, 3, 7, B.SNOW); F(-1, 0, 2, 1, 0, 7, B.PLANKS); F(-1, 1, 2, 1, 2, 7, AIRB);
      F(-2, 1, -2, -2, 1, -2, B.TABLE); F(2, 1, -2, 2, 1, -2, B.FURNACE); F(0, 1, 2, 0, 1, 2, CH_); F(0, 1, -3, 0, 1, -3, T); F(2, 1, 2, 2, 1, 2, T);
    } else if (st.type === 'outpost') { // atalaya de madera con cofres
      F(-4, -5, -4, 4, 0, 4, B.COBBLE); F(-3, 1, -3, 3, 22, 3, AIRB);
      for (let y = 1; y <= 17; y++) { F(-3, y, -3, 3, y, -3, B.PLANKS); F(-3, y, 3, 3, y, 3, B.PLANKS); F(-3, y, -3, -3, y, 3, B.PLANKS); F(3, y, -3, 3, y, 3, B.PLANKS); }
      for (const [x, z] of [[-3, -3], [3, -3], [-3, 3], [3, 3]]) F(x, 1, z, x, 18, z, B.LOG);
      for (const y of [4, 10, 15]) for (const [x, z] of [[0, -3], [0, 3], [-3, 0], [3, 0]]) F(x === 0 ? -1 : x, y, z === 0 ? -1 : z, x === 0 ? 1 : x, y + 1, z === 0 ? 1 : z, B.GLASS);
      F(-1, 1, 3, 1, 3, 3, AIRB);
      for (const y0 of [1, 7, 13]) { F(-2, y0 + 6, -2, 2, y0 + 6, 2, B.PLANKS); for (let i = 0; i < 5; i++) F(-2 + i, y0 + 1, -2, -2 + i, y0 + 1 + i, -2, B.PLANKS); F(-2, y0 + 6, -2, 0, y0 + 6, -2, AIRB); F(-2, y0 + 6, -1, -1, y0 + 6, -1, AIRB); }
      F(-4, 19, -4, 4, 19, 4, B.PLANKS); for (const [x, z] of [[-4, -4], [4, -4], [-4, 4], [4, 4]]) { F(x, 20, z, x, 21, z, B.LOG); F(x, 22, z, x, 22, z, T); }
      F(-3, 20, -3, -3, 20, 3, B.PLANKS); F(3, 20, -3, 3, 20, 3, B.PLANKS); F(-3, 20, -3, 3, 20, -3, B.PLANKS); F(-3, 20, 3, 3, 20, 3, B.PLANKS);
      F(2, 1, 2, 2, 1, 2, CH_); F(-2, 13 + 1, 2, -2, 13 + 1, 2, CH_); F(2, 7 + 1, -1, 2, 7 + 1, -1, CH_); F(0, 18, 0, 0, 18, 0, T);
    } else if (st.type === 'ruin') { // portal en ruinas con oro y cofre
      for (let i = 0; i < 4; i++) for (let j = 0; j < 5; j++) { const corner = (i === 0 || i === 3) && (j === 0 || j === 4), border = i === 0 || i === 3 || j === 0 || j === 4; if (border && !corner && hash2(st.x + i * 7, st.z + j * 11, this.seed + 7710) < 0.72) F(i, j, 0, i, j, 0, B.OBSIDIAN); }
      for (let n = 0; n < 9; n++) { const a = Math.floor(hash2(st.x + n, st.z, this.seed + 7711) * 9) - 4, b = Math.floor(hash2(st.x, st.z + n, this.seed + 7712) * 7) - 3; F(a, 0, b, a, 0, b, n % 3 ? B.NETHERRACK : B.MOSSY_COBBLE); }
      F(-2, 1, 1, -2, 1, 1, B.GOLD_BLOCK); F(2, 0, 2, 2, 0, 2, CH_); F(1, 0, 3, 1, 0, 3, B.NETHERRACK);
    }
  }

  // ---------- pueblos ----------
  villageAt(rx, rz) {
    const key = rx + ',' + rz;
    if (!this.vcache) this.vcache = new Map();
    if (this.vcache.has(key)) return this.vcache.get(key);
    const seed = this.seed;
    let res = null;
    if (hash2(rx, rz, seed + 444) < 0.3) {
      const x = rx * 128 + 28 + Math.floor(hash2(rx, rz, seed + 445) * 72), z = rz * 128 + 28 + Math.floor(hash2(rx, rz, seed + 446) * 72);
      const c = terrainInfo(x, z, seed);
      if (c.biome !== 'ocean' && c.biome !== 'mountains' && c.h > SEA + 1 && c.h < SEA + 20) {
        const flat = [[12, 0], [-12, 0], [0, 12], [0, -12], [10, 10], [-10, -10]].every(([dx, dz]) => { const e = terrainInfo(x + dx, z + dz, seed); return Math.abs(e.h - c.h) <= 3 && e.biome !== 'ocean'; });
        if (flat) res = { x, z, H: c.h, biome: c.biome };
      }
    }
    this.vcache.set(key, res);
    return res;
  }
  villagesNear(x0, z0) {
    const out = [];
    for (let rx = Math.floor((x0 - 40) / 128); rx <= Math.floor((x0 + CS + 40) / 128); rx++)
      for (let rz = Math.floor((z0 - 40) / 128); rz <= Math.floor((z0 + CS + 40) / 128); rz++) { const v = this.villageAt(rx, rz); if (v) out.push(v); }
    return out;
  }
  buildVillage(v, put) {
    const seed = this.seed, H = v.H;
    const wallA = v.biome === 'desert' ? B.SAND : B.PLANKS, floor = B.PLANKS;
    // pozo central
    for (let dx = -2; dx <= 2; dx++) for (let dz = -2; dz <= 2; dz++) {
      const edge = Math.abs(dx) === 2 || Math.abs(dz) === 2;
      for (let y = H - 3; y <= H; y++) put(v.x + dx, y, v.z + dz, edge ? B.COBBLE : (y === H ? B.WATER : B.WATER), false);
      for (let y = H + 1; y <= H + 6; y++) put(v.x + dx, y, v.z + dz, 0, false);
      if (edge) put(v.x + dx, H + 1, v.z + dz, B.COBBLE, false);
    }
    for (const [dx, dz] of [[-2, -2], [2, -2], [-2, 2], [2, 2]]) for (let y = H + 2; y <= H + 4; y++) put(v.x + dx, y, v.z + dz, B.LOG, false);
    for (let dx = -2; dx <= 2; dx++) for (let dz = -2; dz <= 2; dz++) put(v.x + dx, H + 5, v.z + dz, B.PLANKS, false);
    // senderos de grava/adoquín hacia las casas
    const houses = [[-14, -8], [14, -8], [-14, 10], [14, 10], [0, -16], [0, 17], [-16, -24], [16, -24]];
    houses.forEach(([hx, hz], i) => {
      if (hash2(v.x + hx, v.z + hz, seed + 5) < (i > 5 ? 0.45 : 0.12) && i > 3) return; // algunas casas faltan
      const cx = v.x + hx, cz = v.z + hz;
      const dirx = Math.abs(hx) > Math.abs(hz) ? -Math.sign(hx) : 0, dirz = dirx ? 0 : -Math.sign(hz);
      // camino desde la puerta al pozo
      for (let t = 0; t < 40; t++) {
        const px = cx + dirx * (4 + t), pz = cz + dirz * (4 + t);
        if (Math.abs(px - v.x) < 3 && Math.abs(pz - v.z) < 3) break;
        put(px, H, pz, B.COBBLE, false); for (let y = H + 1; y <= H + 3; y++) put(px, y, pz, 0, false);
      }
      // cimientos, suelo y limpieza
      for (let dx = -4; dx <= 4; dx++) for (let dz = -4; dz <= 4; dz++) {
        const wx = cx + dx, wz = cz + dz, th = terrainHeight(wx, wz, seed);
        for (let y = Math.max(1, th - 1); y <= H - 1; y++) put(wx, y, wz, B.COBBLE, false);
        for (let y = H + 1; y <= H + 9; y++) put(wx, y, wz, 0, false);
        if (Math.abs(dx) <= 3 && Math.abs(dz) <= 3) put(wx, H, wz, floor, false);
      }
      // paredes
      for (let dx = -3; dx <= 3; dx++) for (let dz = -3; dz <= 3; dz++) {
        if (Math.abs(dx) !== 3 && Math.abs(dz) !== 3) continue;
        const corner = Math.abs(dx) === 3 && Math.abs(dz) === 3;
        for (let y = H + 1; y <= H + 3; y++) {
          let id = corner ? B.LOG : wallA;
          const side = !corner && ((Math.abs(dx) === 3 && dz === 0) || (Math.abs(dz) === 3 && dx === 0));
          if (side && y === H + 2) id = B.GLASS;
          if (dx === dirx * 3 && dz === dirz * 3 && y <= H + 2) id = 0; // puerta
          put(cx + dx, y, cz + dz, id, false);
        }
      }
      // tejado en pirámide
      for (let r = 4, y = H + 4; r >= 0; r--, y++) for (let dx = -r; dx <= r; dx++) for (let dz = -r; dz <= r; dz++) put(cx + dx, y, cz + dz, r === 0 ? B.LOG : B.PLANKS, false);
      // interior: antorcha, mesa y horno
      put(cx - 2, H + 1, cz - 2, B.TORCH, false); put(cx + 2, H + 1, cz - 2, B.TABLE, false); put(cx + 2, H + 1, cz + 2, B.FURNACE, false); put(cx - 2, H + 1, cz + 2, B.TORCH, false);
      put(cx + dirx * 4 + dirz, H + 1, cz + dirz * 4 + dirx, B.TORCH, false);
      // farolas junto al camino
      for (let t = 6; t < 40; t += 7) { const px = cx + dirx * (4 + t), pz = cz + dirz * (4 + t); if (Math.abs(px - v.x) < 4 && Math.abs(pz - v.z) < 4) break; const lx = px + dirz * 2, lz = pz + dirx * 2; for (let y = H; y <= H + 3; y++) put(lx, y, lz, y === H ? B.COBBLE : B.LOG, false); put(lx, H + 4, lz, B.TORCH, false); }
    });
    // edificios especiales: herrería, iglesia y biblioteca
    const building = (cx, cz, hw, hd, o) => {
      for (let dx = -hw - 1; dx <= hw + 1; dx++) for (let dz = -hd - 1; dz <= hd + 1; dz++) {
        const wx = cx + dx, wz = cz + dz, th = terrainHeight(wx, wz, seed);
        for (let y = Math.max(1, th - 1); y <= H - 1; y++) put(wx, y, wz, B.COBBLE, false);
        for (let y = H + 1; y <= H + o.h + 6; y++) put(wx, y, wz, 0, false);
        if (Math.abs(dx) <= hw && Math.abs(dz) <= hd) put(wx, H, wz, o.floor || B.PLANKS, false);
      }
      for (let dx = -hw; dx <= hw; dx++) for (let dz = -hd; dz <= hd; dz++) {
        if (Math.abs(dx) !== hw && Math.abs(dz) !== hd) continue;
        const corner = Math.abs(dx) === hw && Math.abs(dz) === hd;
        for (let y = H + 1; y <= H + o.h; y++) {
          let id = corner ? B.LOG : o.wall;
          if (!corner && y === H + 2 && ((Math.abs(dx) === hw && dz % 3 === 0) || (Math.abs(dz) === hd && dx % 3 === 0))) id = B.GLASS;
          if (dx === o.door[0] * hw && dz === o.door[1] * hd && y <= H + 2) id = 0;
          put(cx + dx, y, cz + dz, id, false);
        }
      }
      for (let dx = -hw - 1; dx <= hw + 1; dx++) for (let dz = -hd - 1; dz <= hd + 1; dz++) put(cx + dx, H + o.h + 1, cz + dz, o.roof, false);
      o.inside(cx, cz);
    };
    const bx = v.x - 30, bz = v.z; // herrería (puerta hacia el pozo)
    building(bx, bz, 4, 3, { h: 4, wall: B.COBBLE, roof: B.PLANKS, floor: B.COBBLE, door: [1, 0], inside: (cx, cz) => { put(cx - 3, H + 1, cz - 2, B.FURNACE, false); put(cx - 3, H + 1, cz + 2, B.FURNACE, false); put(cx - 3, H + 1, cz, B.CHEST, false); put(cx, H + 1, cz - 2, B.TABLE, false); put(cx + 2, H + 1, cz + 2, B.TORCH, false); put(cx - 1, H + 1, cz + 2, B.TORCH, false); } });
    const chx = v.x + 32, chz = v.z - 2; // iglesia con campanario
    building(chx, chz, 5, 3, { h: 5, wall: B.COBBLE, roof: B.PLANKS, floor: B.COBBLE, door: [-1, 0], inside: (cx, cz) => { put(cx + 4, H + 1, cz, B.GOLD_BLOCK, false); put(cx + 4, H + 2, cz, B.TORCH, false); put(cx + 4, H + 1, cz - 2, B.CHEST, false); put(cx - 2, H + 1, cz - 2, B.TORCH, false); put(cx - 2, H + 1, cz + 2, B.TORCH, false);
      for (let y = H + 6; y <= H + 16; y++) for (let dx = 6; dx <= 9; dx++) for (let dz = -2; dz <= 1; dz++) { const edge = dx === 6 || dx === 9 || dz === -2 || dz === 1; put(cx + dx, y, cz + dz, edge ? (y === H + 11 ? B.GLASS : B.COBBLE) : 0, false); }
      for (let dx = 6; dx <= 9; dx++) for (let dz = -2; dz <= 1; dz++) put(cx + dx, H + 17, cz + dz, B.COBBLE, false); put(cx + 7, H + 18, cz, B.GLOWSTONE, false); } });
    building(v.x, v.z + 30, 4, 3, { h: 4, wall: B.PLANKS, roof: B.LOG, door: [0, -1], inside: (cx, cz) => { for (const [a, b] of [[-3, -2], [3, -2], [-3, 2], [3, 2]]) put(cx + a, H + 1, cz + b, B.TABLE, false); put(cx, H + 1, cz + 2, B.CHEST, false); put(cx - 2, H + 1, cz, B.CHEST, false); put(cx, H + 1, cz - 2, B.TORCH, false); put(cx + 2, H + 1, cz, B.TORCH, false); } });
  }

  // Emisores de luz (antorchas, piedra luminosa y superficie de lava)
  scanTorches(k, data) {
    let set = null; const A = CS * CS;
    for (let i = 0; i < data.length; i++) {
      const id = data[i];
      if (!id || !EMIT[id]) continue;
      if (id === B.LAVA) { const lx = i % CS, lz = Math.floor(i / CS) % CS; if (((lx + lz) & 1) || data[i + A] !== 0) continue; }
      (set || (set = new Set())).add(i);
    }
    if (set) this.torches.set(k, set); else this.torches.delete(k);
  }

  // ---------- Nether: cavernas inmensas, mar de lava, glowstone y arena de almas ----------
  genNether(cx, cz, k) {
    const seed = this.seed + 7001, data = new Uint8Array(CS * CS * CH), x0 = cx * CS, z0 = cz * CS;
    for (let lz = 0; lz < CS; lz++) for (let lx = 0; lx < CS; lx++) {
      const wx = x0 + lx, wz = z0 + lz;
      for (let y = 0; y < CH; y++) {
        let id = 0;
        if (y === 0 || y === CH - 1 || (y === 1 && hash2(wx, wz, seed + 1) < 0.5) || (y === CH - 2 && hash2(wx, wz, seed + 2) < 0.5)) id = B.BEDROCK;
        else {
          const n = noise3(wx * 0.022, y * 0.04, wz * 0.022, seed + 301) * 0.65 + noise3(wx * 0.06, y * 0.09, wz * 0.06, seed + 302) * 0.35;
          const t = Math.abs(y - 62) / 62;
          if (n + 0.62 * t * t > 0.72 || y >= CH - 3) id = B.NETHERRACK; else id = y <= 31 ? B.LAVA : AIR;
        }
        data[this.idx(lx, y, lz)] = id;
      }
    }
    // decoración de superficies
    const A = CS * CS;
    for (let lz = 0; lz < CS; lz++) for (let lx = 0; lx < CS; lx++) {
      const wx = x0 + lx, wz = z0 + lz, sand = noise3(wx * 0.05, 0, wz * 0.05, seed + 303) > 0.56;
      for (let y = 2; y < CH - 3; y++) {
        const i = this.idx(lx, y, lz);
        if (data[i] !== B.NETHERRACK) continue;
        const above = data[i + A], below = data[i - A];
        if (above === AIR && y > 32 && sand) data[i] = B.SOUL_SAND;
        else if (below === AIR && y > 84 && hash2(wx * 7 + y, wz * 3, seed + 310) < 0.02) data[i] = B.GLOWSTONE;
        else if (y < 27 && hash2(wx * 11 + y, wz * 7 - y, seed + 312) < 0.0045) data[i] = B.ANCIENT_DEBRIS;
        else if (hash2(wx * 13 + y, wz * 5 - y, seed + 311) < 0.006) data[i] = B.GOLD_ORE;
      }
    }
    const ctx = { data, x0, z0 };
    for (const f of this.fortressesNear(x0, z0)) this.buildFortress(f, ctx);
    this.chunks.set(k, data); this.computeTops(k, data); this.scanTorches(k, data);
    return data;
  }

  // ---------- End: isla principal, pilares de obsidiana e islas flotantes ----------

  // ---------- Estructuras: fortalezas del Nether y ciudades del End ----------
  // Cajas rellenas recortadas al chunk actual
  _fill(ctx, x1, y1, z1, x2, y2, z2, id) {
    const xa = Math.max(Math.min(x1, x2), ctx.x0), xb = Math.min(Math.max(x1, x2), ctx.x0 + CS - 1), za = Math.max(Math.min(z1, z2), ctx.z0), zb = Math.min(Math.max(z1, z2), ctx.z0 + CS - 1);
    const ya = Math.max(Math.min(y1, y2), 0), yb = Math.min(Math.max(y1, y2), CH - 1);
    for (let y = ya; y <= yb; y++) for (let z = za; z <= zb; z++) for (let x = xa; x <= xb; x++) ctx.data[this.idx(x - ctx.x0, y, z - ctx.z0)] = id;
  }
  fortressAt(rx, rz) {
    const key = 'f' + rx + ',' + rz;
    if (!this.vcache) this.vcache = new Map();
    if (this.vcache.has(key)) return this.vcache.get(key);
    const seed = this.seed; let res = null;
    if (hash2(rx, rz, seed + 4400) < 0.6) res = { x: rx * 224 + 112 + Math.floor((hash2(rx, rz, seed + 4401) - 0.5) * 80), z: rz * 224 + 112 + Math.floor((hash2(rx, rz, seed + 4402) - 0.5) * 80), y: 68 };
    this.vcache.set(key, res); return res;
  }
  fortressesNear(x0, z0) {
    const out = [];
    for (let rx = Math.floor((x0 - 70) / 224); rx <= Math.floor((x0 + CS + 70) / 224); rx++) for (let rz = Math.floor((z0 - 70) / 224); rz <= Math.floor((z0 + CS + 70) / 224); rz++) { const f = this.fortressAt(rx, rz); if (f && Math.abs(f.x - x0 - 8) < 80 && Math.abs(f.z - z0 - 8) < 80) out.push(f); }
    return out;
  }
  buildFortress(f, ctx) {
    const F = (a, b, c, d, e, g, id) => this._fill(ctx, f.x + a, f.y + b, f.z + c, f.x + d, f.y + e, f.z + g, id), Y = 0, NB = B.NETHER_BRICKS;
    // sala central 17x17
    F(-8, Y + 1, -8, 8, Y + 9, 8, AIR); F(-8, Y - 2, -8, 8, Y, 8, NB); F(-8, Y + 8, -8, 8, Y + 8, 8, NB);
    F(-8, Y + 1, -8, -8, Y + 7, 8, NB); F(8, Y + 1, -8, 8, Y + 7, 8, NB); F(-8, Y + 1, -8, 8, Y + 7, -8, NB); F(-8, Y + 1, 8, 8, Y + 7, 8, NB);
    for (const [px, pz] of [[-5, -5], [5, -5], [-5, 5], [5, 5]]) { F(px, Y + 1, pz, px, Y + 7, pz, NB); F(px, Y + 7, pz, px, Y + 7, pz, B.GLOWSTONE); }
    F(-1, Y + 8, -1, 1, Y + 8, 1, B.GLOWSTONE);
    // puertas y puentes en las 4 direcciones
    const dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]];
    for (const [dx, dz] of dirs) {
      const px = -dz, pz = dx; // perpendicular
      // puerta
      this._fill(ctx, f.x + dx * 8 - px * 1, f.y + 1, f.z + dz * 8 - pz * 1, f.x + dx * 8 + px * 1, f.y + 4, f.z + dz * 8 + pz * 1, AIR);
      for (let d = 9; d <= 49; d++) {
        const cx = f.x + dx * d, cz = f.z + dz * d;
        this._fill(ctx, cx - px * 1, f.y + 1, cz - pz * 1, cx + px * 1, f.y + 6, cz + pz * 1, AIR); // pasillo despejado
        this._fill(ctx, cx - px * 2, f.y, cz - pz * 2, cx + px * 2, f.y, cz + pz * 2, NB); // suelo de 5
        this._fill(ctx, cx - px * 2, f.y + 1, cz - pz * 2, cx - px * 2, f.y + 2, cz - pz * 2, NB); this._fill(ctx, cx + px * 2, f.y + 1, cz + pz * 2, cx + px * 2, f.y + 2, cz + pz * 2, NB); // barandillas
        if (d % 8 === 0) { this._fill(ctx, cx - px * 2, f.y + 1, cz - pz * 2, cx - px * 2, f.y + 5, cz - pz * 2, NB); this._fill(ctx, cx + px * 2, f.y + 1, cz + pz * 2, cx + px * 2, f.y + 5, cz + pz * 2, NB); this._fill(ctx, cx - px * 2, f.y + 5, cz - pz * 2, cx + px * 2, f.y + 5, cz + pz * 2, NB); }
        if (d % 8 === 4) { for (const s of [-2, 2]) this._fill(ctx, cx + px * s, f.y - 46, cz + pz * s, cx + px * s, f.y - 1, cz + pz * s, NB); }
      }
      // torre al final del puente
      const tx = f.x + dx * 54, tz = f.z + dz * 54;
      this._fill(ctx, tx - 4, f.y + 1, tz - 4, tx + 4, f.y + 13, tz + 4, AIR); this._fill(ctx, tx - 4, f.y - 3, tz - 4, tx + 4, f.y, tz + 4, NB);
      this._fill(ctx, tx - 4, f.y + 1, tz - 4, tx - 4, f.y + 12, tz + 4, NB); this._fill(ctx, tx + 4, f.y + 1, tz - 4, tx + 4, f.y + 12, tz + 4, NB); this._fill(ctx, tx - 4, f.y + 1, tz - 4, tx + 4, f.y + 12, tz - 4, NB); this._fill(ctx, tx - 4, f.y + 1, tz + 4, tx + 4, f.y + 12, tz + 4, NB);
      this._fill(ctx, tx - 4, f.y + 13, tz - 4, tx + 4, f.y + 13, tz + 4, NB);
      this._fill(ctx, tx - dx * 4 - px * 1, f.y + 1, tz - dz * 4 - pz * 1, tx - dx * 4 + px * 1, f.y + 4, tz - dz * 4 + pz * 1, AIR); // entrada hacia el puente
      this._fill(ctx, tx - 2, f.y + 7, tz - 2, tx + 2, f.y + 7, tz + 2, NB); this._fill(ctx, tx - 1, f.y + 7, tz - 1, tx - 1, f.y + 7, tz, AIR); // entresuelo con hueco
      for (let i = 0; i < 6; i++) this._fill(ctx, tx - 3, f.y + 1, tz - 3 + i, tx - 3, f.y + 1 + i, tz - 3 + i, NB); // escalera lateral
      this._fill(ctx, tx - 3, f.y + 7, tz - 3, tx - 3, f.y + 7, tz + 2, AIR);
      this._fill(ctx, tx, f.y + 12, tz, tx, f.y + 12, tz, B.GLOWSTONE);
      this._fill(ctx, tx + 2, f.y + 1, tz + 2, tx + 2, f.y + 1, tz + 2, B.CHEST);
      this._fill(ctx, tx - 2, f.y + 8, tz + 2, tx - 2, f.y + 8, tz + 2, B.CHEST);
    }
    // cofres en la sala central
    this._fill(ctx, f.x - 7, f.y + 1, f.z - 7, f.x - 7, f.y + 1, f.z - 7, B.CHEST); this._fill(ctx, f.x + 7, f.y + 1, f.z + 7, f.x + 7, f.y + 1, f.z + 7, B.CHEST); this._fill(ctx, f.x + 7, f.y + 1, f.z - 7, f.x + 7, f.y + 1, f.z - 7, B.CHEST);
  }

  endIsland(wx, wz) { // altura de la superficie y base del suelo (o null) en el End
    const seed = this.seed + 9001, r = Math.hypot(wx, wz);
    if (r < 54) return { top: 64 + Math.floor(fbm(wx * 0.08, wz * 0.08, seed + 700, 2) * 3) - (r > 46 ? Math.floor(r - 46) : 0), bottom: 0 };
    if (r > 240) { const n = fbm(wx * 0.011, wz * 0.011, seed + 701, 3); if (n > 0.63) return { top: 58 + Math.floor((n - 0.63) * 60) + Math.floor(fbm(wx * 0.06, wz * 0.06, seed + 702, 2) * 3), n }; }
    return null;
  }
  endCityAt(rx, rz) {
    const key = 'e' + rx + ',' + rz;
    if (!this.vcache) this.vcache = new Map();
    if (this.vcache.has(key)) return this.vcache.get(key);
    let res = null; const seed = this.seed;
    if (hash2(rx, rz, seed + 5500) < 0.7) {
      let best = null;
      for (let a = 8; a < 160; a += 10) for (let b = 8; b < 160; b += 10) {
        const wx = rx * 160 + a, wz = rz * 160 + b; if (Math.hypot(wx, wz) < 270) continue;
        const il = this.endIsland(wx, wz); if (il && il.n > 0.66 && (!best || il.n > best.n)) best = { x: wx, z: wz, n: il.n, top: il.top };
      }
      if (best) res = { x: best.x, z: best.z, y: best.top, ship: hash2(rx, rz, seed + 5501) < 0.55 };
    }
    this.vcache.set(key, res); return res;
  }
  endCitiesNear(x0, z0) {
    const out = [];
    for (let rx = Math.floor((x0 - 30) / 160); rx <= Math.floor((x0 + CS + 30) / 160); rx++) for (let rz = Math.floor((z0 - 30) / 160); rz <= Math.floor((z0 + CS + 30) / 160); rz++) { const c = this.endCityAt(rx, rz); if (c && Math.abs(c.x - x0 - 8) < 50 && Math.abs(c.z - z0 - 8) < 50) out.push(c); }
    return out;
  }
  buildEndCity(c, ctx) {
    const F = (a, b, d, e, g, h, id) => this._fill(ctx, c.x + a, c.y + b, c.z + d, c.x + e, c.y + g, c.z + h, id), P = B.PURPUR, EB = B.END_BRICKS;
    F(-6, -12, -6, 6, 0, 6, P); // cimientos
    F(-5, 1, -5, 5, 21, 5, AIR);
    for (let fl = 0; fl < 3; fl++) {
      const y0 = 1 + fl * 6;
      F(-4, y0, -4, 4, y0, 4, P); // suelo
      for (let y = y0 + 1; y <= y0 + 5; y++) {
        const band = y === y0 + 3 ? EB : P;
        F(-4, y, -4, 4, y, -4, band); F(-4, y, 4, 4, y, 4, band); F(-4, y, -4, -4, y, 4, band); F(4, y, -4, 4, y, 4, band);
      }
      for (const [wx, wz] of [[0, -4], [0, 4], [-4, 0], [4, 0]]) F(wx === 0 ? -1 : wx, y0 + 2, wz === 0 ? -1 : wz, wx === 0 ? 1 : wx, y0 + 4, wz === 0 ? 1 : wz, B.GLASS); // ventanas
      F(-3, y0 + 5, -3, -3, y0 + 5, -3, B.GLOWSTONE); F(3, y0 + 5, 3, 3, y0 + 5, 3, B.GLOWSTONE);
      for (let i = 0; i < 6; i++) F(-3 + i, y0 + 1, -3, -3 + i, y0 + 1 + i, -3, P); // escalera de columnas junto a la pared norte
      F(-3, y0 + 6, -3, 1, y0 + 6, -2, AIR); // hueco en el suelo siguiente sobre la escalera
    }
    F(-4, 19, -4, 4, 19, 4, P); F(-3, 19, -3, -3, 19, -3, P); // techo
    for (const [sx, sz] of [[-4, -4], [4, -4], [-4, 4], [4, 4]]) { F(sx, 20, sz, sx, 23, sz, P); F(sx, 24, sz, sx, 24, sz, B.GLOWSTONE); }
    F(-1, 2, -1, 1, 4, -4, AIR); F(-1, 2, -4, 1, 4, -4, AIR); // puerta (lado norte, planta baja)
    F(2, 2, 2, 2, 2, 2, B.CHEST); F(-2, 8, 2, -2, 8, 2, B.CHEST); F(2, 14, 2, 2, 14, 2, B.CHEST);
    if (c.ship) { // pasarela y nave voladora con élitros
      const fy = 13; F(5, fy, -1, 9, fy, 1, P);
      F(10, fy, -3, 22, fy, 3, P); F(10, fy + 1, -3, 22, fy + 1, -3, EB); F(10, fy + 1, 3, 22, fy + 1, 3, EB); F(22, fy + 1, -3, 22, fy + 1, 3, EB);
      F(20, fy, -2, 24, fy, 2, P); F(25, fy + 1, 0, 25, fy + 2, 0, EB); // proa
      F(15, fy + 1, 0, 15, fy + 6, 0, EB); F(14, fy + 4, 0, 16, fy + 4, 0, EB); // mástil
      F(21, fy + 1, 0, 21, fy + 1, 0, EB); F(21, fy + 2, 0, 21, fy + 2, 0, B.CHEST); // cofre sobre ladrillos (marca de nave: élitros)
      F(10, fy - 1, -2, 20, fy - 2, 2, P);
    }
  }

  genEnd(cx, cz, k) {
    const seed = this.seed + 9001, data = new Uint8Array(CS * CS * CH), x0 = cx * CS, z0 = cz * CS;
    for (let lz = 0; lz < CS; lz++) for (let lx = 0; lx < CS; lx++) {
      const wx = x0 + lx, wz = z0 + lz, r = Math.hypot(wx, wz);
      let top = -1, bottom = 0;
      if (r < 54) { top = 64 + Math.floor(fbm(wx * 0.08, wz * 0.08, seed + 700, 2) * 3) - (r > 46 ? Math.floor(r - 46) : 0); bottom = top - ((54 - r) * 0.75 + 3 + fbm(wx * 0.05, wz * 0.05, seed + 703, 2) * 5); }
      else if (r > 240) {
        const n = fbm(wx * 0.011, wz * 0.011, seed + 701, 3);
        if (n > 0.63) { top = 58 + Math.floor((n - 0.63) * 60) + Math.floor(fbm(wx * 0.06, wz * 0.06, seed + 702, 2) * 3); bottom = top - ((n - 0.63) * 230 + 2); }
      }
      if (top > 0) for (let y = Math.max(1, Math.floor(bottom)); y <= top && y < CH; y++) data[this.idx(lx, y, lz)] = B.END_STONE;
    }
    for (const pl of endPillars()) for (let dx = -2; dx <= 2; dx++) for (let dz = -2; dz <= 2; dz++) {
      if (dx * dx + dz * dz > 5) continue;
      const lx = pl.x + dx - x0, lz = pl.z + dz - z0; if (lx < 0 || lz < 0 || lx >= CS || lz >= CS) continue;
      for (let y = 62; y <= pl.top; y++) data[this.idx(lx, y, lz)] = B.OBSIDIAN;
      if (dx === 0 && dz === 0) data[this.idx(lx, pl.top + 1, lz)] = B.BEDROCK;
    }
    const ctx = { data, x0, z0 };
    for (const c of this.endCitiesNear(x0, z0)) this.buildEndCity(c, ctx);
    this.chunks.set(k, data); this.computeTops(k, data); this.scanTorches(k, data);
    return data;
  }

  computeTops(k, data) {
    let hi = 0;
    for (let i = data.length - 1; i >= 0; i--) if (data[i]) { hi = Math.floor(i / (CS * CS)); break; }
    if (!this.hi) this.hi = new Map();
    this.hi.set(k, hi);
    const tops = new Int16Array(CS * CS).fill(-1);
    for (let lz = 0; lz < CS; lz++)
      for (let lx = 0; lx < CS; lx++) {
        let y = CH - 1;
        while (y >= 0 && !OPAQUE[data[this.idx(lx, y, lz)]]) y--;
        tops[lz * CS + lx] = y;
      }
    this.tops.set(k, tops);
  }

  // ---------- acceso ----------
  getBlock(x, y, z) {
    if (y < 0 || y >= CH) return AIR;
    const cx = Math.floor(x / CS), cz = Math.floor(z / CS);
    const c = this.chunks.get(ckey(cx, cz));
    if (!c) return AIR;
    return c[(y * CS + (z - cz * CS)) * CS + (x - cx * CS)];
  }
  // Altura del bloque opaco más alto (o -1 si no hay chunk)
  topY(x, z) {
    const cx = Math.floor(x / CS), cz = Math.floor(z / CS);
    const t = this.tops.get(ckey(cx, cz));
    return t ? t[(z - cz * CS) * CS + (x - cx * CS)] : -1;
  }
  skyLit(x, y, z) {
    if (this.dim !== 'overworld') return 1;
    const cx = Math.floor(x / CS), cz = Math.floor(z / CS);
    const t = this.tops.get(ckey(cx, cz));
    if (!t) return 1;
    return y > t[(z - cz * CS) * CS + (x - cx * CS)] ? 1 : 0;
  }
  isSolid(x, y, z) {
    if (y < 0) return true;
    if (y >= CH) return false;
    const cx = Math.floor(x / CS), cz = Math.floor(z / CS);
    const c = this.chunks.get(ckey(cx, cz));
    if (!c) return true;
    return SOLID[c[(y * CS + (z - cz * CS)) * CS + (x - cx * CS)]] === 1;
  }
  isLiquid(x, y, z) { return LIQUID[this.getBlock(x, y, z)] === 1; }

  setBlock(x, y, z, id) {
    if (y < 0 || y >= CH) return false;
    const cx = Math.floor(x / CS), cz = Math.floor(z / CS);
    const k = ckey(cx, cz);
    const c = this.chunks.get(k);
    if (!c) return false;
    const lx = x - cx * CS, lz = z - cz * CS;
    const ii = this.idx(lx, y, lz), old = c[ii];
    c[ii] = id;
    if (id && y > this.hi.get(k)) this.hi.set(k, y);
    this.modified.add(k); this.unsaved.add(k);
    if (EMIT[old] || EMIT[id]) {
      this.scanTorches(k, c);
      for (let a = -1; a <= 1; a++) for (let b = -1; b <= 1; b++) this.dirty.add(ckey(cx + a, cz + b));
    }
    const tops = this.tops.get(k), ti = lz * CS + lx;
    if (OPAQUE[id]) { if (y > tops[ti]) tops[ti] = y; }
    else if (y === tops[ti]) {
      let yy = y - 1;
      while (yy >= 0 && !OPAQUE[c[this.idx(lx, yy, lz)]]) yy--;
      tops[ti] = yy;
    }
    this.dirty.add(k);
    const ex = lx === 0 ? -1 : lx === CS - 1 ? 1 : 0, ez = lz === 0 ? -1 : lz === CS - 1 ? 1 : 0;
    if (ex) this.dirty.add(ckey(cx + ex, cz));
    if (ez) this.dirty.add(ckey(cx, cz + ez));
    if (ex && ez) this.dirty.add(ckey(cx + ex, cz + ez));
    return true;
  }

  // Raycast de vóxeles (DDA de Amanatides & Woo). Ignora líquidos salvo que se pida.
  raycast(origin, dir, maxDist = 6, hitLiquid = false) {
    let x = Math.floor(origin.x), y = Math.floor(origin.y), z = Math.floor(origin.z);
    const step = [Math.sign(dir.x), Math.sign(dir.y), Math.sign(dir.z)];
    const tDelta = [Math.abs(1 / dir.x), Math.abs(1 / dir.y), Math.abs(1 / dir.z)];
    const frac = (o, s) => (s > 0 ? Math.floor(o) + 1 - o : o - Math.floor(o));
    const tMax = [
      step[0] === 0 ? Infinity : frac(origin.x, step[0]) * tDelta[0],
      step[1] === 0 ? Infinity : frac(origin.y, step[1]) * tDelta[1],
      step[2] === 0 ? Infinity : frac(origin.z, step[2]) * tDelta[2],
    ];
    let normal = [0, 0, 0], t = 0;
    while (t <= maxDist) {
      const id = this.getBlock(x, y, z);
      if (id !== AIR && (hitLiquid || (!LIQUID[id] && !GHOST[id]))) return { x, y, z, id, normal, dist: t };
      const a = tMax[0] < tMax[1] ? (tMax[0] < tMax[2] ? 0 : 2) : (tMax[1] < tMax[2] ? 1 : 2);
      t = tMax[a];
      tMax[a] += tDelta[a];
      normal = [0, 0, 0];
      normal[a] = -step[a];
      if (a === 0) x += step[0]; else if (a === 1) y += step[1]; else z += step[2];
    }
    return null;
  }

  // ---------- streaming ----------
  update(px, pz, radius, budget = 2) {
    const pcx = Math.floor(px / CS), pcz = Math.floor(pz / CS);
    const gen = [], mesh = [];
    this.lastPcx = pcx; this.lastPcz = pcz;
    if (this.pool && this.pool.failed) this.pool = null; // si el worker falla, se vuelve al modo síncrono
    for (let dz = -radius - 1; dz <= radius + 1; dz++)
      for (let dx = -radius - 1; dx <= radius + 1; dx++) {
        const cx = pcx + dx, cz = pcz + dz, k = ckey(cx, cz), d = dx * dx + dz * dz;
        if (!this.chunks.has(k)) gen.push({ cx, cz, d });
        else if (Math.abs(dx) <= radius && Math.abs(dz) <= radius) {
          const isDirty = this.dirty.has(k);
          if (!this.meshes.has(k) || isDirty) mesh.push({ cx, cz, d: isDirty ? d - 10000 : d });
        }
      }
    gen.sort((a, b) => a.d - b.d);
    if (this.pool) {
      let syncN = 0;
      for (const g of gen) {
        const k = ckey(g.cx, g.cz);
        if (this.saved.has(k)) { if (syncN++ < budget * 2) this.generateChunk(g.cx, g.cz); continue; }
        if (this.inflightGen.has(k)) continue;
        if (this.inflightGen.size >= 24) break;
        this.inflightGen.add(k);
        this.pool.request({ t: 'gen', dim: this.dim, seed: this.seed, kind: this.kind || 'normal', cx: g.cx, cz: g.cz }, [], (r) => {
          this.inflightGen.delete(k);
          if (this.chunks.has(k)) return;
          this.chunks.set(k, r.data); this.computeTops(k, r.data); this.scanTorches(k, r.data);
        });
      }
    } else for (let i = 0; i < Math.min(budget * 2, gen.length); i++) this.generateChunk(gen[i].cx, gen[i].cz);
    mesh.sort((a, b) => a.d - b.d);
    // Solo se mallan chunks cuyos 8 vecinos ya tengan datos (para bordes correctos)
    let built = 0, pending = 0;
    for (const m of mesh) {
      let ready = true;
      for (let a = -1; a <= 1 && ready; a++) for (let b = -1; b <= 1; b++) if (!this.chunks.has(ckey(m.cx + a, m.cz + b))) { ready = false; break; }
      if (!ready) { pending++; continue; }
      const urgent = m.d < -5000, k = ckey(m.cx, m.cz);
      if (this.pool && !urgent) { // mallado en worker
        pending++;
        if (this.inflightMesh.has(k) || this.inflightMesh.size >= 10) continue;
        const bufs = [];
        for (let b = -1; b <= 1; b++) for (let a = -1; a <= 1; a++) bufs.push(new Uint8Array(this.chunks.get(ckey(m.cx + a, m.cz + b))));
        const tok = ++this.tokN; this.jobTok.set(k, tok); this.inflightMesh.add(k); this.dirty.delete(k);
        this.pool.request({ t: 'mesh', dim: this.dim, seed: this.seed, cx: m.cx, cz: m.cz, bufs }, bufs.map((u) => u.buffer), (r) => {
          this.inflightMesh.delete(k);
          if (this.jobTok.get(k) !== tok) return; // obsoleto: hubo una malla síncrona o se descargó
          this.jobTok.delete(k);
          if (Math.abs(m.cx - this.lastPcx) > radius + 2 || Math.abs(m.cz - this.lastPcz) > radius + 2) return;
          this._applyLists(m.cx, m.cz, r.lists); this.dirty.delete(k);
          if (this.onChunkMeshed) this.onChunkMeshed(m.cx, m.cz);
        });
      } else if (built < (urgent ? 6 : budget)) { this.buildMesh(m.cx, m.cz); built++; } else pending++;
    }
    // Liberar lo lejano
    for (const [k, m] of this.meshes) {
      if (Math.abs(ckx(k) - pcx) > radius + 2 || Math.abs(ckz(k) - pcz) > radius + 2) {
        this.disposeMesh(m);
        this.meshes.delete(k); if (this.jobTok) this.jobTok.delete(k);
      }
    }
    if ((this.unloadT -= 1) <= 0) {
      this.unloadT = 60;
      for (const k of [...this.chunks.keys()]) {
        if (Math.abs(ckx(k) - pcx) > radius + 5 || Math.abs(ckz(k) - pcz) > radius + 5) {
          if (this.modified.has(k)) continue; // los editados se conservan en memoria
          this.chunks.delete(k); this.tops.delete(k);
        }
      }
    }
    return gen.length + pending;
  }

  disposeMesh(m) {
    for (const o of [m.opaque, m.trans]) if (o) { this.scene.remove(o); o.geometry.dispose(); }
  }

  // Malla síncrona (ediciones del jugador y modo sin workers)
  buildMesh(cx, cz) {
    const k = ckey(cx, cz);
    if (!this.chunks.get(k)) return;
    if (this.jobTok) this.jobTok.delete(k); // invalida un resultado de worker en vuelo
    this._applyLists(cx, cz, this.meshLists(cx, cz));
  }

  // Cálculo puro de la geometría de un chunk (se ejecuta en el hilo principal o en un worker)
  meshLists(cx, cz) {
    const k = ckey(cx, cz);
    const data = this.chunks.get(k);
    if (!data) return null;
    const x0 = cx * CS, z0 = cz * CS;
    const lists = [
      { pos: [], nor: [], uv: [], col: [], bl: [], sw: [], sk: [], ind: [] }, // opaco
      { pos: [], nor: [], uv: [], col: [], bl: [], sw: [], sk: [], ind: [] }, // transparente
    ];
    const get = (wx, wy, wz) => {
      const lx = wx - x0, lz = wz - z0;
      if (lx >= 0 && lz >= 0 && lx < CS && lz < CS && wy >= 0 && wy < CH) return data[(wy * CS + lz) * CS + lx];
      return this.getBlock(wx, wy, wz);
    };
    // Tinte de vegetación por clima (seco/amarillento, húmedo/verde, frío/azulado)
    const tint = new Float32Array(CS * CS * 3);
    for (let lz = 0; lz < CS; lz++) for (let lx = 0; lx < CS; lx++) {
      const wx = x0 + lx, wz = z0 + lz, hm = fbm(wx * 0.004, wz * 0.004, this.seed + 900, 2), t = fbm(wx * 0.0035, wz * 0.0035, this.seed + 500, 2);
      const w = smoothstep(0.35, 0.7, hm), cold = smoothstep(0.42, 0.28, t), i = (lz * CS + lx) * 3;
      tint[i] = (1.15 * (1 - w) + 0.78 * w) * (1 - 0.18 * cold); tint[i + 1] = 1.0 * (1 - w) + 1.1 * w; tint[i + 2] = (0.6 * (1 - w) + 0.8 * w) + 0.3 * cold;
    }
    const eps = 0.0015;
    const cell = [0, 0, 0], tmp = [0, 0, 0];
    const ao = [0, 0, 0, 0], lg = [0, 0, 0, 0], bg = [0, 0, 0, 0];

    // Luz de antorchas: relleno por anchura sobre los 3x3 chunks vecinos
    const LW = CS * 3, lmx0 = x0 - CS, lmz0 = z0 - CS;
    let lm = null;
    const seeds = [];
    for (let a = -1; a <= 1; a++) for (let b = -1; b <= 1; b++) {
      const set = this.torches.get(ckey(cx + a, cz + b));
      if (set) for (const i of set) seeds.push([(cx + a) * CS + (i % CS), Math.floor(i / (CS * CS)), (cz + b) * CS + (Math.floor(i / CS) % CS)]);
    }
    if (seeds.length) {
      lm = this._lm || (this._lm = new Uint8Array(LW * LW * CH));
      lm.fill(0);
      const li = (x, y, z) => (y * LW + (z - lmz0)) * LW + (x - lmx0);
      const q = [];
      for (const [x, y, z] of seeds) { lm[li(x, y, z)] = 10; q.push(x, y, z); }
      const D = [1, 0, 0, -1, 0, 0, 0, 1, 0, 0, -1, 0, 0, 0, 1, 0, 0, -1];
      for (let h = 0; h < q.length; h += 3) {
        const x = q[h], y = q[h + 1], z = q[h + 2], l = lm[li(x, y, z)] - 1;
        if (l <= 0) continue;
        for (let d = 0; d < 18; d += 3) {
          const nx = x + D[d], ny = y + D[d + 1], nz = z + D[d + 2];
          if (ny < 0 || ny >= CH || nx < lmx0 || nx >= lmx0 + LW || nz < lmz0 || nz >= lmz0 + LW) continue;
          if (OPAQUE[get(nx, ny, nz)]) continue;
          const ni = li(nx, ny, nz);
          if (lm[ni] < l) { lm[ni] = l; q.push(nx, ny, nz); }
        }
      }
    }
    const bAt = (x, y, z) => {
      if (!lm || y < 0 || y >= CH || x < lmx0 || x >= lmx0 + LW || z < lmz0 || z >= lmz0 + LW) return 0;
      return Math.pow(lm[(y * LW + (z - lmz0)) * LW + (x - lmx0)] / 10, 1.7);
    };

    const yMax = Math.min(CH - 1, (this.hi.get(k) || CH) + 1);
    for (let y = 0; y <= yMax; y++)
      for (let lz = 0; lz < CS; lz++)
        for (let lx = 0; lx < CS; lx++) {
          const id = data[(y * CS + lz) * CS + lx];
          if (id === AIR) continue;
          const def = BLOCKS[id];
          const L = def.transparent ? lists[1] : lists[0];
          const wx = x0 + lx, wz = z0 + lz;
          if (def.torch) {
            const u0 = (TILE_INDEX.torch + 7 / 16) / TILE_COUNT, u1 = (TILE_INDEX.torch + 9 / 16) / TILE_COUNT;
            for (const f of FACES) {
              if (f.bottom) continue;
              const n = L.pos.length / 3;
              for (const c of f.corners) {
                L.pos.push(lx + 7 / 16 + c.p[0] * 2 / 16, y + c.p[1] * 10 / 16, lz + 7 / 16 + c.p[2] * 2 / 16);
                L.nor.push(f.dir[0], f.dir[1], f.dir[2]);
                L.uv.push(u0 + (u1 - u0) * c.uv[0], 6 / 16 + (10 / 16) * c.uv[1]);
                L.col.push(0.9, 0.9, 0.9); L.bl.push(1); L.sw.push(0); L.sk.push(1);
              }
              L.ind.push(n, n + 1, n + 2, n + 2, n + 1, n + 3);
            }
            continue;
          }
          for (const f of FACES) {
            const nx = wx + f.dir[0], ny = y + f.dir[1], nz = wz + f.dir[2];
            const nid = get(nx, ny, nz);
            if (OPAQUE[nid] || (nid === id && (def.transparent || def.liquid))) continue;
            const tile = TILE_INDEX[f.top ? def.tiles[0] : f.bottom ? def.tiles[1] : def.tiles[2]];
            const [ta, tb] = f.tan;
            let cr = 1, cg = 1, cb = 1;
            if (id === B.LEAVES || (id === B.GRASS && f.top)) { const ti = (lz * CS + lx) * 3; cr = tint[ti]; cg = tint[ti + 1]; cb = tint[ti + 2]; }
            const centerL = (ny < CH ? this.skyLit(nx, ny, nz) : 1);
            const centerB = bAt(nx, ny, nz);
            // AO y luz por vértice
            for (let ci = 0; ci < 4; ci++) {
              const p = f.corners[ci].p;
              const sa = p[ta] * 2 - 1, sb = p[tb] * 2 - 1;
              cell[0] = nx; cell[1] = ny; cell[2] = nz;
              tmp[0] = nx; tmp[1] = ny; tmp[2] = nz; tmp[ta] += sa;
              const o1 = OPAQUE[get(tmp[0], tmp[1], tmp[2])];
              const l1 = o1 ? centerL : this.skyLit(tmp[0], tmp[1], tmp[2]);
              const b1 = o1 ? centerB : bAt(tmp[0], tmp[1], tmp[2]);
              tmp[0] = nx; tmp[1] = ny; tmp[2] = nz; tmp[tb] += sb;
              const o2 = OPAQUE[get(tmp[0], tmp[1], tmp[2])];
              const l2 = o2 ? centerL : this.skyLit(tmp[0], tmp[1], tmp[2]);
              const b2 = o2 ? centerB : bAt(tmp[0], tmp[1], tmp[2]);
              tmp[0] = nx; tmp[1] = ny; tmp[2] = nz; tmp[ta] += sa; tmp[tb] += sb;
              const oc = OPAQUE[get(tmp[0], tmp[1], tmp[2])];
              const lc = (o1 && o2) || oc ? centerL : this.skyLit(tmp[0], tmp[1], tmp[2]);
              const bc = (o1 && o2) || oc ? centerB : bAt(tmp[0], tmp[1], tmp[2]);
              bg[ci] = (centerB + b1 + b2 + bc) / 4;
              ao[ci] = o1 && o2 ? 0 : 3 - (o1 + o2 + oc);
              lg[ci] = (centerL + l1 + l2 + lc) / 4;
            }
            const n = L.pos.length / 3;
            for (let ci = 0; ci < 4; ci++) {
              const c = f.corners[ci];
              let py = c.p[1];
              if ((id === B.WATER || id === B.LAVA) && py === 1 && get(wx, y + 1, wz) !== id) py = 0.88;
              L.pos.push(lx + c.p[0], y + py, lz + c.p[2]);
              L.nor.push(f.dir[0], f.dir[1], f.dir[2]);
              L.uv.push((tile + (c.uv[0] ? 1 - eps : eps)) / TILE_COUNT, c.uv[1] ? 1 - eps : eps);
              const v = f.shade * AO[ao[ci]] * (0.3 + 0.7 * lg[ci]);
              L.col.push(v * cr, v * cg, v * cb);
              L.bl.push(def.glow ? 1 : f.shade * AO[ao[ci]] * bg[ci]);
              L.sw.push(id === B.LEAVES ? 1 : id === B.WATER || id === B.LAVA ? 2 : 0); L.sk.push(lg[ci]);
            }
            if (ao[0] + ao[3] > ao[1] + ao[2]) L.ind.push(n, n + 1, n + 3, n, n + 3, n + 2);
            else L.ind.push(n, n + 1, n + 2, n + 2, n + 1, n + 3);
          }
        }

    return lists.map((L) => ({ n: L.ind.length, pos: Float32Array.from(L.pos), nor: Float32Array.from(L.nor), uv: Float32Array.from(L.uv), col: Float32Array.from(L.col), bl: Float32Array.from(L.bl), sw: Float32Array.from(L.sw), sk: Float32Array.from(L.sk), ind: Uint32Array.from(L.ind) }));
  }

  _applyLists(cx, cz, lists) {
    const k = ckey(cx, cz), x0 = cx * CS, z0 = cz * CS;
    const old = this.meshes.get(k);
    if (old) this.disposeMesh(old);
    const entry = { opaque: null, trans: null };
    const BA = THREE.BufferAttribute;
    const make = (L, mat, order, cast) => {
      if (!L.n) return null;
      const geo = new THREE.BufferGeometry();
      geo.setAttribute('position', new BA(L.pos, 3));
      geo.setAttribute('normal', new BA(L.nor, 3));
      geo.setAttribute('uv', new BA(L.uv, 2));
      geo.setAttribute('color', new BA(L.col, 3));
      geo.setAttribute('blight', new BA(L.bl, 1));
      geo.setAttribute('sway', new BA(L.sw, 1));
      geo.setAttribute('skyl', new BA(L.sk, 1));
      geo.setIndex(new BA(L.ind, 1));
      geo.computeBoundingSphere();
      const mesh = new THREE.Mesh(geo, mat);
      mesh.position.set(x0, 0, z0);
      mesh.renderOrder = order; mesh.castShadow = cast; mesh.receiveShadow = true;
      this.scene.add(mesh);
      return mesh;
    };
    entry.opaque = make(lists[0], this.materials.opaque, 0, true);
    entry.trans = make(lists[1], this.materials.trans, 1, false);
    this.meshes.set(k, entry);
    this.dirty.delete(k);
    if (this.onChunkMeshed) this.onChunkMeshed(cx, cz);
  }
}
export { ckey, ckx, ckz };
