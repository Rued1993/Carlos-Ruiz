import * as THREE from 'three';
import { AIR, B, BLOCKS, OPAQUE, SOLID, LIQUID } from './blocks.js';
import { TILE_INDEX, TILE_COUNT } from './atlas.js';
import { fbm, hash2, noise3 } from './noise.js';

export const CS = 16;   // tamaño del chunk en X/Z
export const CH = 80;   // altura del mundo
export const SEA = 25;  // nivel del mar

const ckey = (cx, cz) => (cx + 32768) * 65536 + (cz + 32768);
const ckx = (k) => Math.floor(k / 65536) - 32768;
const ckz = (k) => (k % 65536) - 32768;

// dir, sombreado, esquinas {p: posición, uv}
const FACES = [
  { dir: [-1, 0, 0], shade: 0.8, ax: 0, corners: [{ p: [0, 1, 0], uv: [0, 1] }, { p: [0, 0, 0], uv: [0, 0] }, { p: [0, 1, 1], uv: [1, 1] }, { p: [0, 0, 1], uv: [1, 0] }] },
  { dir: [1, 0, 0], shade: 0.8, ax: 0, corners: [{ p: [1, 1, 1], uv: [0, 1] }, { p: [1, 0, 1], uv: [0, 0] }, { p: [1, 1, 0], uv: [1, 1] }, { p: [1, 0, 0], uv: [1, 0] }] },
  { dir: [0, -1, 0], shade: 0.5, ax: 1, bottom: true, corners: [{ p: [1, 0, 1], uv: [1, 0] }, { p: [0, 0, 1], uv: [0, 0] }, { p: [1, 0, 0], uv: [1, 1] }, { p: [0, 0, 0], uv: [0, 1] }] },
  { dir: [0, 1, 0], shade: 1.0, ax: 1, top: true, corners: [{ p: [0, 1, 1], uv: [1, 1] }, { p: [1, 1, 1], uv: [0, 1] }, { p: [0, 1, 0], uv: [1, 0] }, { p: [1, 1, 0], uv: [0, 0] }] },
  { dir: [0, 0, -1], shade: 0.65, ax: 2, corners: [{ p: [1, 0, 0], uv: [0, 0] }, { p: [0, 0, 0], uv: [1, 0] }, { p: [1, 1, 0], uv: [0, 1] }, { p: [0, 1, 0], uv: [1, 1] }] },
  { dir: [0, 0, 1], shade: 0.65, ax: 2, corners: [{ p: [0, 0, 1], uv: [0, 0] }, { p: [1, 0, 1], uv: [1, 0] }, { p: [0, 1, 1], uv: [0, 1] }, { p: [1, 1, 1], uv: [1, 1] }] },
];
for (const f of FACES) f.tan = [0, 1, 2].filter((a) => a !== f.ax);
const AO = [0.5, 0.68, 0.84, 1];

export function biomeAt(x, z, seed) {
  const t = fbm(x * 0.0035, z * 0.0035, seed + 500, 2);
  return t < 0.36 ? 'snow' : t > 0.64 ? 'desert' : 'plains';
}
export function terrainHeight(x, z, seed) {
  const base = fbm(x * 0.008, z * 0.008, seed, 3);
  const detail = fbm(x * 0.04, z * 0.04, seed + 7, 3);
  return Math.floor(12 + base * 30 + detail * 6);
}

export class World {
  constructor(scene, materials, seed = 1337, saved = new Map()) {
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

  idx(lx, y, lz) { return (y * CS + lz) * CS + lx; }

  // ---------- generación ----------
  generateChunk(cx, cz) {
    const k = ckey(cx, cz);
    if (this.saved.has(k)) {
      const data = new Uint8Array(this.saved.get(k));
      this.chunks.set(k, data);
      this.modified.add(k);
      this.computeTops(k, data);
      this.scanTorches(k, data);
      return data;
    }
    const seed = this.seed;
    const data = new Uint8Array(CS * CS * CH);
    const x0 = cx * CS, z0 = cz * CS;
    for (let lz = 0; lz < CS; lz++) {
      for (let lx = 0; lx < CS; lx++) {
        const wx = x0 + lx, wz = z0 + lz;
        const h = terrainHeight(wx, wz, seed);
        const biome = biomeAt(wx, wz, seed);
        const beach = h <= SEA + 1;
        let top = B.GRASS, sub = B.DIRT;
        if (beach || biome === 'desert') { top = B.SAND; sub = B.SAND; }
        else if (biome === 'snow') top = B.SNOW;
        for (let y = 0; y <= h && y < CH; y++) {
          let b = B.STONE;
          if (y === h) b = top;
          else if (y >= h - 3) b = sub;
          else {
            const r = hash2(wx * 31 + y, wz * 17 - y, seed + 77 + y);
            if (y < 50 && r < 0.025) b = B.COAL_ORE;
            else if (y < 40 && r > 0.975 && r < 0.99) b = B.IRON_ORE;
            else if (y < 24 && r > 0.99 && r < 0.996) b = B.GOLD_ORE;
            else if (y < 14 && r > 0.996) b = B.DIAMOND_ORE;
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
    // Árboles y cactus deterministas (incluye los de chunks vecinos que rozan este)
    for (let tz = z0 - 2; tz < z0 + CS + 2; tz++) {
      for (let tx = x0 - 2; tx < x0 + CS + 2; tx++) {
        const r = hash2(tx, tz, seed + 99);
        if (r > 0.04) continue;
        const biome = biomeAt(tx, tz, seed);
        const h = terrainHeight(tx, tz, seed);
        if (h <= SEA + 1) continue;
        const forest = fbm(tx * 0.012, tz * 0.012, seed + 800, 2) > 0.58;
        const put = (wx, wy, wz, id, onlyAir) => {
          const lx = wx - x0, lz = wz - z0;
          if (lx < 0 || lz < 0 || lx >= CS || lz >= CS || wy >= CH || wy < 0) return;
          const i = this.idx(lx, wy, lz);
          if (onlyAir && data[i] !== AIR) return;
          data[i] = id;
        };
        if (biome === 'desert') {
          if (r < 0.004) { const ch = 1 + Math.floor(hash2(tx, tz, seed + 6) * 3); for (let t = 1; t <= ch; t++) put(tx, h + t, tz, B.CACTUS, false); }
          continue;
        }
        const density = forest ? 0.03 : biome === 'snow' ? 0.007 : 0.005;
        if (r > density) continue;
        const trunk = 4 + Math.floor(hash2(tx, tz, seed + 5) * 3);
        for (let dy = -2; dy <= 1; dy++) {
          const rad = dy <= -1 ? 2 : 1;
          for (let dz = -rad; dz <= rad; dz++)
            for (let dx = -rad; dx <= rad; dx++) {
              if (rad === 2 && Math.abs(dx) === 2 && Math.abs(dz) === 2) continue;
              put(tx + dx, h + trunk + dy, tz + dz, B.LEAVES, true);
            }
        }
        for (let t = 1; t <= trunk; t++) put(tx, h + t, tz, B.LOG, false);
      }
    }
    this.chunks.set(k, data);
    this.computeTops(k, data);
    return data;
  }

  scanTorches(k, data) {
    let set = null;
    for (let i = 0; i < data.length; i++) if (data[i] === B.TORCH) (set || (set = new Set())).add(i);
    if (set) this.torches.set(k, set); else this.torches.delete(k);
  }

  computeTops(k, data) {
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
    this.modified.add(k); this.unsaved.add(k);
    if (old === B.TORCH || id === B.TORCH) {
      let set = this.torches.get(k);
      if (id === B.TORCH) { if (!set) this.torches.set(k, (set = new Set())); set.add(ii); }
      else if (set) { set.delete(ii); if (!set.size) this.torches.delete(k); }
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
      if (id !== AIR && (hitLiquid || !LIQUID[id])) return { x, y, z, id, normal, dist: t };
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
    for (let i = 0; i < Math.min(budget * 2, gen.length); i++) this.generateChunk(gen[i].cx, gen[i].cz);
    mesh.sort((a, b) => a.d - b.d);
    // Solo se mallan chunks cuyos 8 vecinos ya tengan datos (para bordes correctos)
    let built = 0, pending = 0;
    for (const m of mesh) {
      let ready = true;
      for (let a = -1; a <= 1 && ready; a++) for (let b = -1; b <= 1; b++) if (!this.chunks.has(ckey(m.cx + a, m.cz + b))) { ready = false; break; }
      if (!ready) { pending++; continue; }
      if (built < (m.d < -5000 ? 6 : budget)) { this.buildMesh(m.cx, m.cz); built++; } else pending++;
    }
    // Liberar lo lejano
    for (const [k, m] of this.meshes) {
      if (Math.abs(ckx(k) - pcx) > radius + 2 || Math.abs(ckz(k) - pcz) > radius + 2) {
        this.disposeMesh(m);
        this.meshes.delete(k);
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

  buildMesh(cx, cz) {
    const k = ckey(cx, cz);
    const data = this.chunks.get(k);
    if (!data) return;
    const x0 = cx * CS, z0 = cz * CS;
    const lists = [
      { pos: [], nor: [], uv: [], col: [], bl: [], sw: [], ind: [] }, // opaco
      { pos: [], nor: [], uv: [], col: [], bl: [], sw: [], ind: [] }, // transparente
    ];
    const get = (wx, wy, wz) => {
      const lx = wx - x0, lz = wz - z0;
      if (lx >= 0 && lz >= 0 && lx < CS && lz < CS && wy >= 0 && wy < CH) return data[(wy * CS + lz) * CS + lx];
      return this.getBlock(wx, wy, wz);
    };
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

    for (let y = 0; y < CH; y++)
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
                L.col.push(0.8, 0.8, 0.8); L.bl.push(1); L.sw.push(0);
              }
              L.ind.push(n, n + 1, n + 2, n + 2, n + 1, n + 3);
            }
            continue;
          }
          for (const f of FACES) {
            const nx = wx + f.dir[0], ny = y + f.dir[1], nz = wz + f.dir[2];
            const nid = get(nx, ny, nz);
            if (OPAQUE[nid] || (nid === id && def.transparent)) continue;
            const tile = TILE_INDEX[f.top ? def.tiles[0] : f.bottom ? def.tiles[1] : def.tiles[2]];
            const [ta, tb] = f.tan;
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
              if (id === B.WATER && py === 1 && get(wx, y + 1, wz) !== B.WATER) py = 0.88;
              L.pos.push(lx + c.p[0], y + py, lz + c.p[2]);
              L.nor.push(f.dir[0], f.dir[1], f.dir[2]);
              L.uv.push((tile + (c.uv[0] ? 1 - eps : eps)) / TILE_COUNT, c.uv[1] ? 1 - eps : eps);
              const v = f.shade * AO[ao[ci]] * (0.3 + 0.7 * lg[ci]);
              L.col.push(v, v, v);
              L.bl.push(f.shade * AO[ao[ci]] * bg[ci]);
              L.sw.push(id === B.LEAVES ? 1 : 0);
            }
            if (ao[0] + ao[3] > ao[1] + ao[2]) L.ind.push(n, n + 1, n + 3, n, n + 3, n + 2);
            else L.ind.push(n, n + 1, n + 2, n + 2, n + 1, n + 3);
          }
        }

    const old = this.meshes.get(k);
    if (old) this.disposeMesh(old);
    const entry = { opaque: null, trans: null };
    const make = (L, mat, order) => {
      if (!L.ind.length) return null;
      const geo = new THREE.BufferGeometry();
      geo.setAttribute('position', new THREE.Float32BufferAttribute(L.pos, 3));
      geo.setAttribute('normal', new THREE.Float32BufferAttribute(L.nor, 3));
      geo.setAttribute('uv', new THREE.Float32BufferAttribute(L.uv, 2));
      geo.setAttribute('color', new THREE.Float32BufferAttribute(L.col, 3));
      geo.setAttribute('blight', new THREE.Float32BufferAttribute(L.bl, 1));
      geo.setAttribute('sway', new THREE.Float32BufferAttribute(L.sw, 1));
      geo.setIndex(L.ind);
      geo.computeBoundingSphere();
      const mesh = new THREE.Mesh(geo, mat);
      mesh.position.set(x0, 0, z0);
      mesh.renderOrder = order;
      this.scene.add(mesh);
      return mesh;
    };
    entry.opaque = make(lists[0], this.materials.opaque, 0);
    entry.trans = make(lists[1], this.materials.trans, 1);
    this.meshes.set(k, entry);
    this.dirty.delete(k);
    if (this.onChunkMeshed) this.onChunkMeshed(cx, cz);
  }
}
export { ckey, ckx, ckz };
