import * as THREE from 'three';
import { AIR, BLOCKS } from './blocks.js';
import { TILE_INDEX, TILE_COUNT } from './atlas.js';
import { fbm, hash2 } from './noise.js';

export const CS = 16;   // tamaño del chunk en X/Z
export const CH = 64;   // altura del mundo
const SEA = 22;

const FACES = [
  { dir: [-1, 0, 0], shade: 0.8, side: true, corners: [{ p: [0, 1, 0], uv: [0, 1] }, { p: [0, 0, 0], uv: [0, 0] }, { p: [0, 1, 1], uv: [1, 1] }, { p: [0, 0, 1], uv: [1, 0] }] },
  { dir: [1, 0, 0], shade: 0.8, side: true, corners: [{ p: [1, 1, 1], uv: [0, 1] }, { p: [1, 0, 1], uv: [0, 0] }, { p: [1, 1, 0], uv: [1, 1] }, { p: [1, 0, 0], uv: [1, 0] }] },
  { dir: [0, -1, 0], shade: 0.5, bottom: true, corners: [{ p: [1, 0, 1], uv: [1, 0] }, { p: [0, 0, 1], uv: [0, 0] }, { p: [1, 0, 0], uv: [1, 1] }, { p: [0, 0, 0], uv: [0, 1] }] },
  { dir: [0, 1, 0], shade: 1.0, top: true, corners: [{ p: [0, 1, 1], uv: [1, 1] }, { p: [1, 1, 1], uv: [0, 1] }, { p: [0, 1, 0], uv: [1, 0] }, { p: [1, 1, 0], uv: [0, 0] }] },
  { dir: [0, 0, -1], shade: 0.65, side: true, corners: [{ p: [1, 0, 0], uv: [0, 0] }, { p: [0, 0, 0], uv: [1, 0] }, { p: [1, 1, 0], uv: [0, 1] }, { p: [0, 1, 0], uv: [1, 1] }] },
  { dir: [0, 0, 1], shade: 0.65, side: true, corners: [{ p: [0, 0, 1], uv: [0, 0] }, { p: [1, 0, 1], uv: [1, 0] }, { p: [0, 1, 1], uv: [0, 1] }, { p: [1, 1, 1], uv: [1, 1] }] },
];

export function terrainHeight(x, z, seed) {
  const base = fbm(x * 0.008, z * 0.008, seed, 3);
  const detail = fbm(x * 0.04, z * 0.04, seed + 7, 3);
  return Math.floor(14 + base * 28 + detail * 6);
}

export class World {
  constructor(scene, material, seed = 1337) {
    this.scene = scene;
    this.material = material;
    this.seed = seed;
    this.chunks = new Map();   // "cx,cz" -> Uint8Array
    this.meshes = new Map();   // "cx,cz" -> THREE.Mesh
    this.dirty = new Set();    // chunks pendientes de remallar
  }

  static key(cx, cz) { return cx + ',' + cz; }

  // ---------- generación ----------
  generateChunk(cx, cz) {
    const data = new Uint8Array(CS * CS * CH);
    const x0 = cx * CS, z0 = cz * CS;
    const heights = new Int16Array(CS * CS);
    for (let lz = 0; lz < CS; lz++) {
      for (let lx = 0; lx < CS; lx++) {
        const h = terrainHeight(x0 + lx, z0 + lz, this.seed);
        heights[lz * CS + lx] = h;
        const beach = h <= SEA + 1;
        for (let y = 0; y <= h && y < CH; y++) {
          let b = 3;
          if (y === h) b = beach ? 4 : 1;
          else if (y >= h - 3) b = beach ? 4 : 2;
          data[this.idx(lx, y, lz)] = b;
        }
      }
    }
    // Árboles deterministas (incluyendo los de chunks vecinos que rozan este)
    for (let tz = z0 - 2; tz < z0 + CS + 2; tz++) {
      for (let tx = x0 - 2; tx < x0 + CS + 2; tx++) {
        if (hash2(tx, tz, this.seed + 99) > 0.012) continue;
        const h = terrainHeight(tx, tz, this.seed);
        if (h <= SEA + 1) continue;
        const trunk = 4 + Math.floor(hash2(tx, tz, this.seed + 5) * 3);
        const put = (wx, wy, wz, id, onlyAir) => {
          const lx = wx - x0, lz = wz - z0;
          if (lx < 0 || lz < 0 || lx >= CS || lz >= CS || wy >= CH || wy < 0) return;
          const i = this.idx(lx, wy, lz);
          if (onlyAir && data[i] !== AIR) return;
          data[i] = id;
        };
        for (let dy = -2; dy <= 1; dy++) {
          const r = dy <= -1 ? 2 : 1;
          for (let dz = -r; dz <= r; dz++)
            for (let dx = -r; dx <= r; dx++) {
              if (r === 2 && Math.abs(dx) === 2 && Math.abs(dz) === 2) continue;
              put(tx + dx, h + trunk + dy, tz + dz, 6, true);
            }
        }
        for (let t = 1; t <= trunk; t++) put(tx, h + t, tz, 5, false);
      }
    }
    this.chunks.set(World.key(cx, cz), data);
    return data;
  }

  idx(lx, y, lz) { return (y * CS + lz) * CS + lx; }

  // ---------- acceso ----------
  getBlock(x, y, z) {
    if (y < 0 || y >= CH) return AIR;
    const cx = Math.floor(x / CS), cz = Math.floor(z / CS);
    const c = this.chunks.get(World.key(cx, cz));
    if (!c) return AIR;
    return c[this.idx(x - cx * CS, y, z - cz * CS)];
  }

  // Para físicas: lo no cargado cuenta como sólido para no caer al vacío.
  isSolid(x, y, z) {
    if (y < 0) return true;
    if (y >= CH) return false;
    const cx = Math.floor(x / CS), cz = Math.floor(z / CS);
    const c = this.chunks.get(World.key(cx, cz));
    if (!c) return true;
    return c[this.idx(x - cx * CS, y, z - cz * CS)] !== AIR;
  }

  setBlock(x, y, z, id) {
    if (y < 0 || y >= CH) return false;
    const cx = Math.floor(x / CS), cz = Math.floor(z / CS);
    const c = this.chunks.get(World.key(cx, cz));
    if (!c) return false;
    const lx = x - cx * CS, lz = z - cz * CS;
    c[this.idx(lx, y, lz)] = id;
    this.dirty.add(World.key(cx, cz));
    if (lx === 0) this.dirty.add(World.key(cx - 1, cz));
    if (lx === CS - 1) this.dirty.add(World.key(cx + 1, cz));
    if (lz === 0) this.dirty.add(World.key(cx, cz - 1));
    if (lz === CS - 1) this.dirty.add(World.key(cx, cz + 1));
    return true;
  }

  // Raycast de vóxeles (DDA de Amanatides & Woo)
  raycast(origin, dir, maxDist = 6) {
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
      if (this.getBlock(x, y, z) !== AIR) return { x, y, z, normal };
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
    // 1) datos hasta radius+1 (para que el mallado de bordes vea vecinos)
    let generated = 0;
    const want = [];
    for (let dz = -radius - 1; dz <= radius + 1; dz++)
      for (let dx = -radius - 1; dx <= radius + 1; dx++) {
        const cx = pcx + dx, cz = pcz + dz, k = World.key(cx, cz);
        if (!this.chunks.has(k)) {
          if (generated < budget * 2) { this.generateChunk(cx, cz); generated++; }
        } else if (Math.abs(dx) <= radius && Math.abs(dz) <= radius && (!this.meshes.has(k) || this.dirty.has(k))) {
          want.push({ cx, cz, k, d: dx * dx + dz * dz });
        }
      }
    // 2) mallas (las más cercanas primero)
    want.sort((a, b) => a.d - b.d);
    for (let i = 0; i < Math.min(budget, want.length); i++) this.buildMesh(want[i].cx, want[i].cz);
    // 3) descartar mallas lejanas
    for (const [k, mesh] of this.meshes) {
      const [cx, cz] = k.split(',').map(Number);
      if (Math.abs(cx - pcx) > radius + 2 || Math.abs(cz - pcz) > radius + 2) {
        this.scene.remove(mesh);
        mesh.geometry.dispose();
        this.meshes.delete(k);
      }
    }
    return want.length;
  }

  buildMesh(cx, cz) {
    const k = World.key(cx, cz);
    const data = this.chunks.get(k);
    if (!data) return;
    const pos = [], nor = [], uv = [], col = [], ind = [];
    const x0 = cx * CS, z0 = cz * CS;
    const eps = 0.0015;
    for (let y = 0; y < CH; y++)
      for (let lz = 0; lz < CS; lz++)
        for (let lx = 0; lx < CS; lx++) {
          const id = data[this.idx(lx, y, lz)];
          if (id === AIR) continue;
          const def = BLOCKS[id];
          const wx = x0 + lx, wz = z0 + lz;
          for (const f of FACES) {
            if (this.getBlock(wx + f.dir[0], y + f.dir[1], wz + f.dir[2]) !== AIR) continue;
            const tile = TILE_INDEX[f.top ? def.tiles[0] : f.bottom ? def.tiles[1] : def.tiles[2]];
            const n = pos.length / 3;
            for (const c of f.corners) {
              pos.push(lx + c.p[0], y + c.p[1], lz + c.p[2]);
              nor.push(...f.dir);
              uv.push((tile + (c.uv[0] ? 1 - eps : eps)) / TILE_COUNT, c.uv[1] ? 1 - eps : eps);
              col.push(f.shade, f.shade, f.shade);
            }
            ind.push(n, n + 1, n + 2, n + 2, n + 1, n + 3);
          }
        }
    let mesh = this.meshes.get(k);
    if (mesh) { mesh.geometry.dispose(); }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
    geo.setAttribute('normal', new THREE.Float32BufferAttribute(nor, 3));
    geo.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
    geo.setAttribute('color', new THREE.Float32BufferAttribute(col, 3));
    geo.setIndex(ind);
    geo.computeBoundingSphere();
    if (!mesh) {
      mesh = new THREE.Mesh(geo, this.material);
      mesh.position.set(x0, 0, z0);
      this.scene.add(mesh);
      this.meshes.set(k, mesh);
    } else {
      mesh.geometry = geo;
    }
    this.dirty.delete(k);
  }
}
