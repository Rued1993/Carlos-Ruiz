// Criaturas originales de VoxelLands: animales y monstruos propios (modelos de cubos).
import * as THREE from 'three';
import { I, B } from './blocks.js';

const lam = (c) => new THREE.MeshLambertMaterial({ color: c });
const glow = (c) => new THREE.MeshBasicMaterial({ color: c });
function limb(g, w, h, d, c, x, y, z) { const p = new THREE.Group(); p.position.set(x, y, z); const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), lam(c)); m.position.y = -h / 2; p.add(m); g.add(p); return p; }
function part(g, w, h, d, c, x, y, z, basic) { const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), basic ? glow(c) : lam(c)); m.position.set(x, y, z); g.add(m); return m; }
const quad = (g, w, h, d, c, xs, zs, y, len) => [[-1, 1], [1, 1], [-1, -1], [1, -1]].map(([sx, sz]) => limb(g, w, len, d, c, sx * xs, y, sz * zs));
const rnd = (a, b) => a + Math.floor(Math.random() * (b - a + 1));
const wings = (g, o, y, span, c) => { o.wings = [-1, 1].map((s) => { const g2 = new THREE.Group(); g2.position.set(s * 0.12, y, 0); g.add(g2); const m = new THREE.Mesh(new THREE.BoxGeometry(span, 0.04, span * 0.6), lam(c)); m.position.x = s * span / 2; g2.add(m); return { g: g2, s }; }); };

export const EXTRA_MOBS = {
  // ----------------------------------------------------------------- animales
  wolf: {
    hw: 0.32, h: 0.9, hp: 14, speed: 3.6, hostile: false, neutral: true, melee: true, damage: 4, reach: 1.4, cd: 0.9, name: 'Lobo', xp: 3,
    build(g, o) {
      const f = 0xa8a8ae, d = 0x6e6e76;
      part(g, 0.4, 0.42, 0.9, f, 0, 0.62, 0); part(g, 0.42, 0.3, 0.4, d, 0, 0.7, 0.3);
      o.head = part(g, 0.36, 0.34, 0.36, f, 0, 0.82, 0.58); part(g, 0.2, 0.16, 0.22, d, 0, 0.76, 0.8); part(g, 0.08, 0.14, 0.08, d, -0.12, 1.03, 0.52); part(g, 0.08, 0.14, 0.08, d, 0.12, 1.03, 0.52);
      part(g, 0.1, 0.1, 0.5, f, 0, 0.78, -0.62).rotation.x = 0.7;
      o.legs = quad(g, 0.14, 0.14, 0.14, d, 0.14, 0.34, 0.42, 0.42);
    },
    drops: () => [[I.LEATHER, rnd(0, 1)]],
  },
  rabbit: {
    hw: 0.18, h: 0.45, hp: 4, speed: 2.8, hostile: false, name: 'Conejo', xp: 1,
    build(g, o) {
      part(g, 0.26, 0.24, 0.4, 0xb89a72, 0, 0.26, 0); o.head = part(g, 0.2, 0.2, 0.2, 0xc4a87e, 0, 0.36, 0.26);
      part(g, 0.05, 0.22, 0.04, 0xc4a87e, -0.06, 0.58, 0.24); part(g, 0.05, 0.22, 0.04, 0xc4a87e, 0.06, 0.58, 0.24); part(g, 0.1, 0.1, 0.1, 0xf2f2f2, 0, 0.3, -0.24);
      o.legs = quad(g, 0.08, 0.08, 0.08, 0xa08560, 0.09, 0.14, 0.15, 0.15);
    },
    drops: () => [[I.BEEF, 1], ...(Math.random() < 0.3 ? [[I.LEATHER, 1]] : [])],
  },
  fox: {
    hw: 0.28, h: 0.7, hp: 10, speed: 3.2, hostile: false, name: 'Zorro', xp: 2,
    build(g, o) {
      part(g, 0.34, 0.34, 0.7, 0xd8742a, 0, 0.46, 0); o.head = part(g, 0.32, 0.3, 0.3, 0xe08038, 0, 0.58, 0.46); part(g, 0.16, 0.12, 0.2, 0xf4ece0, 0, 0.52, 0.66);
      part(g, 0.08, 0.12, 0.06, 0x2a2018, -0.1, 0.8, 0.44); part(g, 0.08, 0.12, 0.06, 0x2a2018, 0.1, 0.8, 0.44);
      part(g, 0.2, 0.2, 0.55, 0xd8742a, 0, 0.5, -0.55); part(g, 0.2, 0.2, 0.18, 0xf8f4ec, 0, 0.5, -0.88);
      o.legs = quad(g, 0.1, 0.1, 0.1, 0x30241a, 0.11, 0.26, 0.3, 0.3);
    },
    drops: () => [[I.CHICKEN, rnd(0, 1)]],
  },
  bat: {
    hw: 0.25, h: 0.5, hp: 6, speed: 2.5, hostile: false, name: 'Murciélago', fly: true, flyKind: 'phantom', xp: 1,
    build(g, o) { part(g, 0.2, 0.22, 0.26, 0x4a3a48, 0, 0.25, 0); part(g, 0.07, 0.1, 0.05, 0x4a3a48, -0.06, 0.42, 0.04); part(g, 0.07, 0.1, 0.05, 0x4a3a48, 0.06, 0.42, 0.04); part(g, 0.04, 0.04, 0.02, 0xff5050, -0.05, 0.28, 0.14, true); part(g, 0.04, 0.04, 0.02, 0xff5050, 0.05, 0.28, 0.14, true); wings(g, o, 0.28, 0.6, 0x362a36); },
    drops: () => [],
  },
  polarbear: {
    hw: 0.5, h: 1.3, hp: 30, speed: 2.4, hostile: false, neutral: true, melee: true, damage: 6, reach: 1.7, cd: 1.1, name: 'Oso polar', xp: 5,
    build(g, o) {
      part(g, 0.85, 0.75, 1.3, 0xf4f4f6, 0, 0.88, 0); o.head = part(g, 0.5, 0.45, 0.5, 0xf8f8fa, 0, 1.05, 0.85); part(g, 0.26, 0.2, 0.2, 0xd8dce0, 0, 0.98, 1.12); part(g, 0.1, 0.1, 0.06, 0x20262c, 0, 1.0, 1.24);
      part(g, 0.12, 0.12, 0.08, 0xe8e8ee, -0.2, 1.32, 0.78); part(g, 0.12, 0.12, 0.08, 0xe8e8ee, 0.2, 1.32, 0.78);
      o.legs = quad(g, 0.3, 0.5, 0.3, 0xe4e6ea, 0.28, 0.5, 0.52, 0.52);
    },
    drops: () => [[I.BEEF, rnd(1, 3)], ...(Math.random() < 0.4 ? [[I.LEATHER, 1]] : [])],
  },
  goat: {
    hw: 0.32, h: 1.1, hp: 10, speed: 2.4, hostile: false, name: 'Cabra', xp: 1,
    build(g, o) {
      part(g, 0.5, 0.5, 0.85, 0xdcd8cc, 0, 0.76, 0); o.head = part(g, 0.3, 0.32, 0.34, 0xe8e4d8, 0, 1.02, 0.55); part(g, 0.1, 0.18, 0.1, 0xb8a888, -0.08, 1.28, 0.5); part(g, 0.1, 0.18, 0.1, 0xb8a888, 0.08, 1.28, 0.5); part(g, 0.06, 0.16, 0.06, 0xf4f0e4, 0, 0.84, 0.74);
      o.legs = quad(g, 0.12, 0.12, 0.12, 0xb8b0a0, 0.16, 0.34, 0.5, 0.5);
    },
    drops: () => [[I.BEEF, 1]],
  },
  frog: {
    hw: 0.2, h: 0.4, hp: 6, speed: 1.6, hostile: false, name: 'Rana', xp: 1,
    build(g, o) {
      part(g, 0.34, 0.2, 0.36, 0x5a9a3a, 0, 0.2, 0); o.head = part(g, 0.3, 0.14, 0.24, 0x66aa44, 0, 0.26, 0.24); part(g, 0.1, 0.1, 0.1, 0xf4e060, -0.1, 0.36, 0.24); part(g, 0.1, 0.1, 0.1, 0xf4e060, 0.1, 0.36, 0.24); part(g, 0.04, 0.05, 0.04, 0x101010, -0.1, 0.37, 0.29); part(g, 0.04, 0.05, 0.04, 0x101010, 0.1, 0.37, 0.29);
      o.legs = quad(g, 0.08, 0.08, 0.08, 0x4c8a30, 0.2, 0.14, 0.12, 0.12);
    },
    drops: () => [],
  },
  turtle: {
    hw: 0.3, h: 0.4, hp: 12, speed: 0.7, hostile: false, name: 'Tortuga', xp: 1,
    build(g, o) {
      part(g, 0.7, 0.24, 0.8, 0x4a7a3a, 0, 0.3, 0); part(g, 0.5, 0.1, 0.55, 0x6a9a48, 0, 0.44, 0); o.head = part(g, 0.2, 0.18, 0.22, 0x8aa860, 0, 0.26, 0.52);
      o.legs = quad(g, 0.14, 0.1, 0.14, 0x8aa860, 0.34, 0.3, 0.2, 0.2);
    },
    drops: () => [[I.LEATHER, rnd(0, 1)]],
  },
  // ----------------------------------------------------------------- monstruos originales
  mosscrawler: {
    hw: 0.3, h: 0.5, hp: 8, speed: 3.9, hostile: true, melee: true, damage: 2, reach: 1.1, cd: 0.7, name: 'Reptante de musgo', xp: 3,
    build(g, o) {
      part(g, 0.5, 0.3, 0.8, 0x4a6a34, 0, 0.3, 0); part(g, 0.4, 0.14, 0.5, 0x6a9a44, 0, 0.5, 0); o.head = part(g, 0.3, 0.26, 0.28, 0x3a5228, 0, 0.3, 0.5);
      part(g, 0.06, 0.06, 0.03, 0xffe060, -0.08, 0.34, 0.65, true); part(g, 0.06, 0.06, 0.03, 0xffe060, 0.08, 0.34, 0.65, true);
      o.legs = [[-1, 0.3], [1, 0.3], [-1, 0], [1, 0], [-1, -0.3], [1, -0.3]].map(([s, z]) => limb(g, 0.06, 0.3, 0.06, 0x2a3a1c, s * 0.3, 0.3, z));
    },
    drops: () => (Math.random() < 0.5 ? [[I.STICK, rnd(1, 2)]] : []),
  },
  thornspitter: {
    hw: 0.35, h: 1.5, hp: 14, speed: 1.4, hostile: true, ranged: true, name: 'Escupe-espinas', xp: 5,
    build(g, o) {
      part(g, 0.5, 1.0, 0.5, 0x3f8a3c, 0, 0.6, 0); for (const y of [0.4, 0.7, 0.95]) { part(g, 0.7, 0.06, 0.06, 0xe8e0a0, 0, y, 0.26); part(g, 0.06, 0.06, 0.7, 0xe8e0a0, 0.26, y, 0); }
      o.head = part(g, 0.5, 0.42, 0.5, 0x58a850, 0, 1.28, 0); part(g, 0.14, 0.14, 0.06, 0xff4060, 0, 1.32, 0.27, true); part(g, 0.12, 0.3, 0.12, 0xff7aa0, 0, 1.6, 0); part(g, 0.3, 0.1, 0.3, 0xff7aa0, 0, 1.52, 0);
      o.legs = [limb(g, 0.16, 0.3, 0.16, 0x2e6a2c, -0.12, 0.3, 0), limb(g, 0.16, 0.3, 0.16, 0x2e6a2c, 0.12, 0.3, 0)];
    },
    drops: () => [[B.CACTUS, rnd(1, 2)], ...(Math.random() < 0.3 ? [[I.APPLE, 1]] : [])],
  },
  mudbrute: {
    hw: 0.55, h: 2.2, hp: 50, speed: 1.7, hostile: true, melee: true, damage: 7, reach: 1.9, cd: 1.4, name: 'Bruto de barro', xp: 10,
    build(g, o) {
      const m = 0x5a4232, l = 0x7a5c44;
      o.legs = [limb(g, 0.4, 0.9, 0.4, m, -0.26, 0.9, 0), limb(g, 0.4, 0.9, 0.4, m, 0.26, 0.9, 0)];
      part(g, 1.0, 0.95, 0.6, l, 0, 1.4, 0); part(g, 0.7, 0.3, 0.4, m, 0.2, 1.9, 0.1);
      o.arms = [limb(g, 0.38, 1.1, 0.38, m, -0.72, 1.85, 0), limb(g, 0.38, 1.1, 0.38, m, 0.72, 1.85, 0)];
      o.head = part(g, 0.5, 0.45, 0.5, l, 0, 2.05, 0.05); part(g, 0.1, 0.08, 0.03, 0xffb040, -0.12, 2.08, 0.31, true); part(g, 0.1, 0.08, 0.03, 0xffb040, 0.12, 2.08, 0.31, true);
      for (const [x, y] of [[-0.3, 1.6], [0.35, 1.2], [0, 1.0]]) part(g, 0.18, 0.1, 0.08, 0x3a7a30, x, y, 0.32);
    },
    drops: () => [[B.MUD, rnd(2, 4)], ...(Math.random() < 0.35 ? [[I.IRON, rnd(1, 2)]] : [])],
  },
  embergolem: {
    hw: 0.5, h: 2.0, hp: 40, speed: 1.9, hostile: true, melee: true, damage: 5, reach: 1.7, cd: 1.2, effect: ['burn', 3], name: 'Gólem de brasas', xp: 9,
    build(g, o) {
      const r = 0x2c2420, e = 0xff7a20;
      o.legs = [limb(g, 0.36, 0.8, 0.36, r, -0.26, 0.8, 0), limb(g, 0.36, 0.8, 0.36, r, 0.26, 0.8, 0)];
      part(g, 0.9, 0.9, 0.5, r, 0, 1.25, 0); part(g, 0.5, 0.5, 0.06, e, 0, 1.3, 0.27, true); part(g, 0.24, 0.24, 0.07, 0xffe080, 0, 1.3, 0.29, true);
      o.arms = [limb(g, 0.3, 1.0, 0.3, r, -0.62, 1.65, 0), limb(g, 0.3, 1.0, 0.3, r, 0.62, 1.65, 0)];
      o.head = part(g, 0.44, 0.4, 0.44, 0x3c3028, 0, 1.92, 0); part(g, 0.1, 0.06, 0.03, e, -0.1, 1.95, 0.23, true); part(g, 0.1, 0.06, 0.03, e, 0.1, 1.95, 0.23, true);
      for (const x of [-0.3, 0, 0.3]) part(g, 0.08, 0.22, 0.08, e, x, 1.78 + 0.45, -0.1, true);
    },
    drops: () => [[I.COAL, rnd(2, 4)], ...(Math.random() < 0.35 ? [[I.MAGMA_CREAM, 1]] : [])],
  },
  shadowwolf: {
    hw: 0.32, h: 0.95, hp: 16, speed: 4.8, hostile: true, melee: true, damage: 3, reach: 1.3, cd: 0.8, name: 'Lobo sombra', xp: 5,
    build(g, o) {
      const f = 0x22202e, d = 0x14121c;
      part(g, 0.4, 0.42, 0.95, f, 0, 0.66, 0); o.head = part(g, 0.36, 0.34, 0.38, f, 0, 0.86, 0.6); part(g, 0.2, 0.16, 0.24, d, 0, 0.8, 0.84); part(g, 0.08, 0.16, 0.08, d, -0.12, 1.08, 0.54); part(g, 0.08, 0.16, 0.08, d, 0.12, 1.08, 0.54);
      part(g, 0.06, 0.06, 0.03, 0xc060ff, -0.1, 0.9, 0.8, true); part(g, 0.06, 0.06, 0.03, 0xc060ff, 0.1, 0.9, 0.8, true); part(g, 0.1, 0.1, 0.55, d, 0, 0.8, -0.7).rotation.x = 0.7;
      o.legs = quad(g, 0.14, 0.14, 0.14, d, 0.14, 0.36, 0.44, 0.44);
    },
    drops: () => [[I.LEATHER, rnd(0, 1)], ...(Math.random() < 0.15 ? [[I.PEARL, 1]] : [])],
  },
  cavebat: {
    hw: 0.3, h: 0.5, hp: 8, speed: 3.4, hostile: true, name: 'Murciélago sombrío', fly: true, flyKind: 'phantom', xp: 3,
    build(g, o) { part(g, 0.26, 0.26, 0.3, 0x2a1e34, 0, 0.25, 0); part(g, 0.08, 0.12, 0.05, 0x2a1e34, -0.08, 0.46, 0.04); part(g, 0.08, 0.12, 0.05, 0x2a1e34, 0.08, 0.46, 0.04); part(g, 0.05, 0.05, 0.02, 0xff4040, -0.06, 0.3, 0.16, true); part(g, 0.05, 0.05, 0.02, 0xff4040, 0.06, 0.3, 0.16, true); wings(g, o, 0.3, 0.8, 0x1c1426); },
    drops: () => [],
  },
  sandcrab: {
    hw: 0.4, h: 0.7, hp: 16, speed: 2.6, hostile: true, melee: true, damage: 3, reach: 1.3, cd: 0.9, name: 'Cangrejo de arena', xp: 4,
    build(g, o) {
      part(g, 0.8, 0.3, 0.6, 0xd6a05a, 0, 0.36, 0); part(g, 0.6, 0.14, 0.4, 0xe8b872, 0, 0.55, 0); part(g, 0.05, 0.14, 0.05, 0x201810, -0.14, 0.7, 0.26); part(g, 0.05, 0.14, 0.05, 0x201810, 0.14, 0.7, 0.26);
      for (const s of [-1, 1]) { part(g, 0.14, 0.14, 0.4, 0xc4602a, s * 0.5, 0.42, 0.45); part(g, 0.3, 0.2, 0.16, 0xd6702a, s * 0.5, 0.45, 0.7); }
      o.legs = [[-1, 0.1], [1, 0.1], [-1, -0.15], [1, -0.15]].map(([s, z]) => limb(g, 0.06, 0.26, 0.06, 0xa87238, s * 0.4, 0.26, z));
    },
    drops: () => [[B.SAND, rnd(1, 3)], ...(Math.random() < 0.25 ? [[I.GOLD, 1]] : [])],
  },
  yeti: {
    hw: 0.45, h: 2.1, hp: 34, speed: 2.2, hostile: true, melee: true, damage: 5, reach: 1.7, cd: 1.2, effect: ['fatigue', 4], name: 'Yeti', xp: 8,
    build(g, o) {
      const f = 0xe8f0f6, d = 0xb8c8d6;
      o.legs = [limb(g, 0.34, 0.8, 0.34, f, -0.24, 0.8, 0), limb(g, 0.34, 0.8, 0.34, f, 0.24, 0.8, 0)];
      part(g, 0.9, 1.0, 0.55, f, 0, 1.3, 0); part(g, 0.5, 0.4, 0.06, d, 0, 1.2, 0.3);
      o.arms = [limb(g, 0.3, 1.15, 0.3, f, -0.62, 1.78, 0), limb(g, 0.3, 1.15, 0.3, f, 0.62, 1.78, 0)];
      o.head = part(g, 0.46, 0.44, 0.46, f, 0, 1.98, 0.04); part(g, 0.3, 0.14, 0.04, 0x3a5a78, 0, 1.94, 0.27); part(g, 0.08, 0.06, 0.03, 0x60d0ff, -0.1, 2.02, 0.26, true); part(g, 0.08, 0.06, 0.03, 0x60d0ff, 0.1, 2.02, 0.26, true);
      for (const x of [-0.14, 0.14]) part(g, 0.1, 0.2, 0.1, 0xc8d8e4, x, 2.28, 0);
    },
    drops: () => [[B.SNOW, rnd(2, 4)], [I.LEATHER, rnd(0, 2)]],
  },
  treant: {
    hw: 0.5, h: 2.6, hp: 60, speed: 1.4, hostile: true, melee: true, damage: 8, reach: 2.0, cd: 1.6, name: 'Ent del bosque', xp: 12,
    build(g, o) {
      const bark = 0x5a4028, leaf = 0x3f7a30;
      o.legs = [limb(g, 0.4, 1.0, 0.4, bark, -0.28, 1.0, 0), limb(g, 0.4, 1.0, 0.4, bark, 0.28, 1.0, 0)];
      part(g, 1.0, 1.1, 0.6, bark, 0, 1.55, 0); part(g, 0.7, 0.2, 0.06, 0x7a5a38, 0, 1.6, 0.31);
      o.arms = [limb(g, 0.3, 1.4, 0.3, bark, -0.75, 2.05, 0), limb(g, 0.3, 1.4, 0.3, bark, 0.75, 2.05, 0)];
      o.head = part(g, 0.5, 0.5, 0.5, 0x6a4a30, 0, 2.28, 0.05); part(g, 0.1, 0.08, 0.03, 0xffd040, -0.12, 2.3, 0.31, true); part(g, 0.1, 0.08, 0.03, 0xffd040, 0.12, 2.3, 0.31, true);
      for (const [x, y, z, s] of [[0, 2.78, 0, 1.1], [-0.4, 2.6, 0.1, 0.7], [0.4, 2.62, -0.1, 0.7], [-0.9, 2.5, 0, 0.5], [0.9, 2.5, 0, 0.5]]) part(g, s, s * 0.7, s, leaf, x, y, z);
    },
    drops: () => [[B.LOG, rnd(3, 6)], ...(Math.random() < 0.5 ? [[I.APPLE, rnd(1, 3)]] : [])],
  },
  wraith: {
    hw: 0.4, h: 1.8, hp: 22, speed: 3.2, hostile: true, name: 'Espectro de niebla', fly: true, flyKind: 'phantom', xp: 7,
    build(g, o) {
      const c = 0x9ab4d0;
      part(g, 0.5, 0.9, 0.3, c, 0, 1.0, 0); part(g, 0.34, 0.5, 0.24, 0x7c98b8, 0, 0.4, 0); part(g, 0.2, 0.3, 0.18, 0x607c9c, 0, 0.05, 0);
      o.head = part(g, 0.4, 0.4, 0.4, 0xc8dcf0, 0, 1.7, 0); part(g, 0.1, 0.12, 0.03, 0x101820, -0.1, 1.72, 0.21); part(g, 0.1, 0.12, 0.03, 0x101820, 0.1, 1.72, 0.21);
      wings(g, o, 1.2, 1.1, 0x7c98b8);
    },
    drops: () => (Math.random() < 0.35 ? [[I.PEARL, 1]] : []),
  },
};
// Dónde aparecen de forma natural
export const BIOME_PASSIVE = { plains: ['wolf', 'rabbit', 'fox'], cherry: ['rabbit', 'fox'], jungle: ['frog', 'rabbit'], swamp: ['frog', 'turtle'], snow: ['polarbear', 'fox', 'rabbit'], mountains: ['goat'], desert: ['rabbit', 'turtle'], badlands: ['rabbit', 'goat'] };
export const BIOME_NIGHT = { plains: ['shadowwolf', 'mosscrawler'], cherry: ['mosscrawler'], jungle: ['thornspitter', 'treant', 'mosscrawler'], swamp: ['mudbrute', 'mosscrawler', 'thornspitter'], snow: ['yeti', 'shadowwolf'], mountains: ['embergolem', 'shadowwolf'], desert: ['sandcrab', 'embergolem'], badlands: ['sandcrab', 'embergolem'] };
// Invasiones aleatorias: [aviso, tipos...]
export const INVASIONS = [
  { name: '¡Una horda de reptantes sale del suelo!', mobs: ['mosscrawler', 8], biomes: null },
  { name: '¡Una manada de lobos sombra te ha olfateado!', mobs: ['shadowwolf', 5], biomes: null },
  { name: '¡Bandada de espectros de niebla!', mobs: ['wraith', 4], biomes: null },
  { name: '¡Los brutos de barro salen de la ciénaga!', mobs: ['mudbrute', 2, 'mosscrawler', 4], biomes: ['swamp', 'jungle', 'plains'] },
  { name: '¡Gólems de brasas despiertan bajo tus pies!', mobs: ['embergolem', 3], biomes: ['mountains', 'desert', 'badlands'] },
  { name: '¡Plaga de cangrejos de arena!', mobs: ['sandcrab', 7], biomes: ['desert', 'badlands'] },
  { name: '¡Ventisca! Los yetis bajan de la montaña', mobs: ['yeti', 3], biomes: ['snow', 'mountains'] },
  { name: '¡El bosque despierta: los ents avanzan!', mobs: ['treant', 2, 'thornspitter', 3], biomes: ['jungle', 'plains', 'cherry', 'swamp'] },
  { name: '¡Asalto de murciélagos sombríos!', mobs: ['cavebat', 8], biomes: null },
];
