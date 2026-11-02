// Mobs: cerdo, vaca, zombi y creeper con IA sencilla, y el gestor de aparición.
import * as THREE from 'three';
import { moveBody } from './entities.js';
import { B, I, OPAQUE, LIQUID } from './blocks.js';
import { CH } from './world.js';

const lam = (c, map) => new THREE.MeshLambertMaterial(map ? { color: c, map } : { color: c });
function limb(group, w, h, d, color, x, y, z) { // pivote arriba
  const piv = new THREE.Group(); piv.position.set(x, y, z);
  const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), lam(color)); m.position.y = -h / 2; piv.add(m); group.add(piv); return piv;
}
function part(group, w, h, d, color, x, y, z, map) {
  const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), lam(color, map)); m.position.set(x, y, z); group.add(m); return m;
}
function faceTexture(draw) {
  const c = document.createElement('canvas'); c.width = c.height = 8; draw(c.getContext('2d'));
  const t = new THREE.CanvasTexture(c); t.magFilter = THREE.NearestFilter; t.minFilter = THREE.NearestFilter; t.generateMipmaps = false; return t;
}

export const MOB_TYPES = {
  pig: {
    hw: 0.4, h: 0.9, hp: 10, speed: 1.4, hostile: false, name: 'Cerdo',
    build(g, o) {
      part(g, 0.6, 0.5, 0.95, 0xf0a0a8, 0, 0.62, 0);
      o.head = part(g, 0.5, 0.45, 0.45, 0xf4aab0, 0, 0.78, 0.65);
      part(g, 0.26, 0.2, 0.1, 0xd8828c, 0, 0.72, 0.92);
      o.legs = [[-0.18, 0.5], [0.18, 0.5], [-0.18, -0.5], [0.18, -0.5]].map(([x, z]) => limb(g, 0.2, 0.37, 0.2, 0xe8939c, x, 0.37, z));
    },
    drops: () => [[I.PORK, 1 + Math.floor(Math.random() * 2)]],
  },
  cow: {
    hw: 0.45, h: 1.4, hp: 10, speed: 1.2, hostile: false, name: 'Vaca',
    build(g, o) {
      part(g, 0.75, 0.7, 1.2, 0x4a3524, 0, 0.95, 0);
      part(g, 0.77, 0.3, 0.5, 0xeeeeee, 0, 0.95, -0.15);
      o.head = part(g, 0.5, 0.5, 0.45, 0x4a3524, 0, 1.15, 0.8);
      part(g, 0.3, 0.2, 0.1, 0xd9c8b0, 0, 1.05, 1.05);
      part(g, 0.08, 0.15, 0.08, 0xdddddd, -0.22, 1.45, 0.75); part(g, 0.08, 0.15, 0.08, 0xdddddd, 0.22, 1.45, 0.75);
      o.legs = [[-0.22, 0.45], [0.22, 0.45], [-0.22, -0.45], [0.22, -0.45]].map(([x, z]) => limb(g, 0.24, 0.6, 0.24, 0x3d2c1e, x, 0.6, z));
    },
    drops: () => [[I.BEEF, 1 + Math.floor(Math.random() * 3)]],
  },
  sheep: {
    hw: 0.42, h: 1.2, hp: 8, speed: 1.2, hostile: false, name: 'Oveja', xp: 1,
    build(g, o) {
      part(g, 0.85, 0.75, 1.15, 0xeeeeee, 0, 0.9, 0);
      o.head = part(g, 0.4, 0.42, 0.42, 0x8a7d70, 0, 1.05, 0.72);
      o.legs = [[-0.2, 0.4], [0.2, 0.4], [-0.2, -0.4], [0.2, -0.4]].map(([x, z]) => limb(g, 0.2, 0.5, 0.2, 0x8a7d70, x, 0.5, z));
    },
    drops: () => [[I.BEEF, 1 + Math.floor(Math.random() * 2)]],
  },
  chicken: {
    hw: 0.22, h: 0.7, hp: 4, speed: 1.3, hostile: false, name: 'Gallina', xp: 1,
    build(g, o) {
      part(g, 0.34, 0.34, 0.5, 0xf4f4f4, 0, 0.42, 0);
      o.head = part(g, 0.2, 0.26, 0.2, 0xf8f8f8, 0, 0.68, 0.24);
      part(g, 0.1, 0.07, 0.12, 0xf0a020, 0, 0.64, 0.38); part(g, 0.06, 0.1, 0.06, 0xd02020, 0, 0.55, 0.33);
      part(g, 0.06, 0.26, 0.4, 0xe8e8e8, -0.2, 0.44, 0); part(g, 0.06, 0.26, 0.4, 0xe8e8e8, 0.2, 0.44, 0);
      o.legs = [-0.08, 0.08].map((x) => limb(g, 0.05, 0.25, 0.05, 0xf0a020, x, 0.25, 0));
    },
    drops: () => [[I.CHICKEN, 1]],
  },
  skeleton: {
    hw: 0.3, h: 1.9, hp: 20, speed: 2.2, hostile: true, name: 'Esqueleto', ranged: true, xp: 5,
    build(g, o) {
      const bone = 0xd8d8cc, dark = 0x55554c;
      o.legs = [limb(g, 0.18, 0.85, 0.18, bone, -0.12, 0.85, 0), limb(g, 0.18, 0.85, 0.18, bone, 0.12, 0.85, 0)];
      part(g, 0.5, 0.8, 0.2, bone, 0, 1.25, 0);
      for (const y of [1.0, 1.2, 1.4]) part(g, 0.52, 0.07, 0.22, dark, 0, y, 0);
      o.arms = [limb(g, 0.14, 0.75, 0.14, bone, -0.34, 1.62, 0), limb(g, 0.14, 0.75, 0.14, bone, 0.34, 1.62, 0)];
      o.arms[1].rotation.x = -1.3; o.arms[0].rotation.x = -1.3;
      o.head = part(g, 0.5, 0.5, 0.5, bone, 0, 1.9, 0);
      part(g, 0.1, 0.1, 0.02, 0x101010, -0.12, 1.93, 0.26); part(g, 0.1, 0.1, 0.02, 0x101010, 0.12, 1.93, 0.26); part(g, 0.2, 0.05, 0.02, 0x101010, 0, 1.78, 0.26);
      part(g, 0.06, 0.5, 0.2, 0x6a4a28, 0.42, 1.28, 0.28); // arco
    },
    drops: () => (Math.random() < 0.6 ? [[I.COAL, 1]] : [[I.STICK, 2]]),
  },
  spider: {
    hw: 0.55, h: 0.75, hp: 16, speed: 4.2, hostile: true, name: 'Araña', xp: 4,
    build(g, o) {
      const c = 0x2a2420;
      part(g, 0.7, 0.5, 0.7, c, 0, 0.5, 0.3); part(g, 0.9, 0.6, 1.1, 0x332a24, 0, 0.55, -0.55);
      o.head = part(g, 0.5, 0.45, 0.45, c, 0, 0.5, 0.8);
      for (const x of [-0.12, 0.12]) { part(g, 0.1, 0.1, 0.03, 0xd01818, x, 0.58, 1.04); part(g, 0.06, 0.06, 0.03, 0xd01818, x * 1.8, 0.5, 1.04); }
      o.legs = [];
      for (let i = 0; i < 4; i++) for (const sx of [-1, 1]) {
        const l = part(g, 0.9, 0.08, 0.08, c, sx * 0.62, 0.38, 0.55 - i * 0.38);
        l.rotation.z = sx * -0.55; l.rotation.y = sx * (i - 1.5) * 0.25;
      }
    },
    drops: () => (Math.random() < 0.5 ? [[I.STICK, 1]] : []),
  },
  enderman: {
    hw: 0.3, h: 2.9, hp: 40, speed: 5, hostile: false, name: 'Enderman', xp: 8, enderman: true,
    build(g, o) {
      const c = 0x120a18;
      o.legs = [limb(g, 0.18, 1.5, 0.18, c, -0.12, 1.5, 0), limb(g, 0.18, 1.5, 0.18, c, 0.12, 1.5, 0)];
      part(g, 0.5, 0.95, 0.26, c, 0, 1.98, 0);
      o.arms = [limb(g, 0.13, 1.35, 0.13, c, -0.34, 2.45, 0), limb(g, 0.13, 1.35, 0.13, c, 0.34, 2.45, 0)];
      o.head = part(g, 0.5, 0.42, 0.5, c, 0, 2.7, 0);
      for (const x of [-0.13, 0.13]) part(g, 0.14, 0.05, 0.03, 0xe070ff, x, 2.72, 0.26);
    },
    drops: () => (Math.random() < 0.65 ? [[I.PEARL, 1]] : []),
  },
  slime: {
    hw: 0.42, h: 0.85, hp: 8, speed: 0, hostile: true, name: 'Slime', xp: 2,
    build(g, o) {
      const m = new THREE.MeshLambertMaterial({ color: 0x60e060, emissive: 0x104010, transparent: true, opacity: 0.8 });
      const b = new THREE.Mesh(new THREE.BoxGeometry(0.84, 0.84, 0.84), m); b.position.y = 0.42; g.add(b);
      part(g, 0.4, 0.4, 0.4, 0x2f9a2f, 0, 0.42, 0); part(g, 0.14, 0.14, 0.05, 0x103010, -0.2, 0.55, 0.43); part(g, 0.14, 0.14, 0.05, 0x103010, 0.2, 0.55, 0.43);
    },
    drops: () => [],
  },
  piglin: {
    hw: 0.3, h: 1.8, hp: 24, speed: 2.7, hostile: true, name: 'Piglin zombificado', damage: 5, xp: 6, piglin: true,
    build(g, o) {
      const skin = 0xc98a78, gold = 0xe8c040;
      o.legs = [limb(g, 0.26, 0.75, 0.26, 0x5a4a38, -0.14, 0.75, 0), limb(g, 0.26, 0.75, 0.26, 0x5a4a38, 0.14, 0.75, 0)];
      part(g, 0.56, 0.75, 0.3, 0x7a6a50, 0, 1.125, 0); part(g, 0.58, 0.14, 0.32, gold, 0, 1.45, 0);
      o.arms = [limb(g, 0.22, 0.72, 0.22, skin, -0.38, 1.45, 0), limb(g, 0.22, 0.72, 0.22, skin, 0.38, 1.45, 0)];
      o.arms.forEach((a) => (a.rotation.x = -Math.PI / 2.3));
      part(g, 0.1, 0.55, 0.1, gold, 0.4, 1.0, 0.45); // espada
      o.head = part(g, 0.6, 0.5, 0.5, skin, 0, 1.78, 0);
      part(g, 0.34, 0.22, 0.12, 0xb0705f, 0, 1.72, 0.3); part(g, 0.06, 0.08, 0.04, 0x201010, -0.07, 1.72, 0.37); part(g, 0.06, 0.08, 0.04, 0x201010, 0.07, 1.72, 0.37);
      part(g, 0.12, 0.28, 0.06, skin, -0.37, 1.8, 0).rotation.z = 0.5; part(g, 0.12, 0.28, 0.06, skin, 0.37, 1.8, 0).rotation.z = -0.5;
      part(g, 0.08, 0.06, 0.03, 0xff3020, -0.14, 1.88, 0.26); part(g, 0.08, 0.06, 0.03, 0xff3020, 0.14, 1.88, 0.26);
    },
    drops: () => (Math.random() < 0.6 ? [[I.GOLD, 1]] : []),
  },
  blaze: {
    hw: 0.35, h: 1.7, hp: 20, speed: 2.4, hostile: true, name: 'Blaze', fly: true, ranged: false, xp: 7,
    build(g, o) {
      const yel = new THREE.MeshLambertMaterial({ color: 0xf0b020, emissive: 0xa05000 }), org = new THREE.MeshLambertMaterial({ color: 0xff7a10, emissive: 0xc03000 });
      o.head = new THREE.Mesh(new THREE.BoxGeometry(0.55, 0.55, 0.55), yel); o.head.position.y = 1.4; g.add(o.head);
      for (const x of [-0.13, 0.13]) part(g, 0.12, 0.1, 0.03, 0x201000, x, 1.45, 0.29);
      part(g, 0.22, 0.06, 0.03, 0x201000, 0, 1.28, 0.29);
      o.rods = [];
      for (let ring = 0; ring < 3; ring++) { const r = new THREE.Group(); r.position.y = 0.35 + ring * 0.38; g.add(r); for (let i = 0; i < 4; i++) { const a = (i / 4) * Math.PI * 2; const rod = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.5, 0.12), ring % 2 ? org : yel); rod.position.set(Math.cos(a) * 0.5, 0, Math.sin(a) * 0.5); r.add(rod); } o.rods.push(r); }
      part(g, 0.2, 0.25, 0.2, 0xffa020, 0, 0.9, 0);
    },
    drops: () => (Math.random() < 0.8 ? [[I.COAL, 1 + Math.floor(Math.random() * 2)]] : []),
  },
  zombie: {
    hw: 0.3, h: 1.8, hp: 20, speed: 2.5, hostile: true, name: 'Zombi', damage: 3,
    build(g, o) {
      o.legs = [limb(g, 0.26, 0.75, 0.26, 0x2c3e9c, -0.14, 0.75, 0), limb(g, 0.26, 0.75, 0.26, 0x2c3e9c, 0.14, 0.75, 0)];
      part(g, 0.54, 0.75, 0.28, 0x2aa5b8, 0, 1.125, 0);
      o.arms = [limb(g, 0.22, 0.72, 0.22, 0x4e8a3a, -0.38, 1.45, 0), limb(g, 0.22, 0.72, 0.22, 0x4e8a3a, 0.38, 1.45, 0)];
      o.arms.forEach((a) => (a.rotation.x = -Math.PI / 2.2));
      o.head = part(g, 0.5, 0.5, 0.5, 0x4e8a3a, 0, 1.75, 0);
      part(g, 0.1, 0.07, 0.02, 0x101010, -0.12, 1.78, 0.26); part(g, 0.1, 0.07, 0.02, 0x101010, 0.12, 1.78, 0.26);
    },
    drops: () => (Math.random() < 0.15 ? [[I.IRON, 1]] : []),
  },
  creeper: {
    hw: 0.3, h: 1.7, hp: 20, speed: 2.3, hostile: true, name: 'Creeper', creeper: true,
    build(g, o) {
      const green = 0x4ea84e;
      o.legs = [[-0.14, 0.28], [0.14, 0.28], [-0.14, -0.28], [0.14, -0.28]].map(([x, z]) => limb(g, 0.26, 0.45, 0.26, 0x3e8e3e, x, 0.45, z * 0.5));
      o.body = part(g, 0.5, 0.85, 0.3, green, 0, 0.88, 0);
      const face = faceTexture((x) => {
        x.fillStyle = '#4ea84e'; x.fillRect(0, 0, 8, 8);
        x.fillStyle = '#0c1a0c'; x.fillRect(1, 2, 2, 2); x.fillRect(5, 2, 2, 2); x.fillRect(3, 4, 2, 2); x.fillRect(2, 5, 1, 2); x.fillRect(5, 5, 1, 2);
      });
      const side = lam(green);
      const mats = [side, side, side, side, lam(0xffffff, face), side];
      const head = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.5, 0.5), mats); head.position.set(0, 1.55, 0); g.add(head); o.head = head;
    },
    drops: () => [],
  },
};

const HOSTILE_NIGHT = ['zombie', 'zombie', 'zombie', 'creeper', 'creeper', 'skeleton', 'skeleton', 'skeleton', 'spider', 'spider', 'enderman'];
const HOSTILE_CAVE = ['zombie', 'zombie', 'creeper', 'skeleton', 'skeleton', 'spider'];

export class Mob {
  constructor(type, x, y, z, scene) {
    this.type = type; this.def = MOB_TYPES[type];
    this.pos = new THREE.Vector3(x, y, z); this.vel = new THREE.Vector3();
    this.hw = this.def.hw; this.h = this.def.h;
    this.hp = this.def.hp; this.yaw = Math.random() * Math.PI * 2;
    this.group = new THREE.Group(); this.parts = {};
    this.def.build(this.group, this.parts);
    this.model = new THREE.Group(); this.model.add(this.group); scene.add(this.model);
    this.group.traverse((o) => { if (o.isMesh) { o.castShadow = true; o.receiveShadow = true; } });
    this.wanderT = 0; this.wanderDir = 0; this.moving = false;
    this.cool = 0; this.flash = 0; this.fuse = 0; this.walkT = 0; this.age = 0; this.onGround = false;
    this.sound = 3 + Math.random() * 10;
  }
  materials() { const out = []; this.group.traverse((o) => { if (o.material) Array.isArray(o.material) ? out.push(...o.material) : out.push(o.material); }); return out; }
  hit(dmg, fromX, fromZ) {
    this.hp -= dmg; this.flash = 0.3; this.provoked = true; this.aggro = true;
    const dx = this.pos.x - fromX, dz = this.pos.z - fromZ, l = Math.hypot(dx, dz) || 1;
    this.vel.x = (dx / l) * 6; this.vel.z = (dz / l) * 6; this.vel.y = 5;
  }
  dispose(scene) { scene.remove(this.model); this.group.traverse((o) => { if (o.geometry) o.geometry.dispose(); if (o.material) [].concat(o.material).forEach((m) => m.dispose()); }); }
}

// Rayo contra caja alineada a ejes (método de las losas). Devuelve distancia o -1.
export function rayBox(o, d, min, max) {
  let tmin = 0, tmax = Infinity;
  for (const a of ['x', 'y', 'z']) {
    if (Math.abs(d[a]) < 1e-9) { if (o[a] < min[a] || o[a] > max[a]) return -1; continue; }
    let t1 = (min[a] - o[a]) / d[a], t2 = (max[a] - o[a]) / d[a];
    if (t1 > t2) [t1, t2] = [t2, t1];
    tmin = Math.max(tmin, t1); tmax = Math.min(tmax, t2);
    if (tmin > tmax) return -1;
  }
  return tmin;
}

export class MobManager {
  constructor(scene, world, hooks) {
    this.scene = scene; this.world = world; this.hooks = hooks; // hooks: hurtPlayer, explode, drop, sound, puff, getDay
    this.list = []; this.spawnT = 0; this.arrows = []; this.dim = 'overworld';
  }
  add(type, x, y, z) { const m = new Mob(type, x, y, z, this.scene); this.list.push(m); return m; }
  clear() { for (const m of this.list) m.dispose(this.scene); this.list = []; for (const a of this.arrows) this.scene.remove(a.mesh); this.arrows = []; }

  raycast(origin, dir, maxDist) {
    let best = null;
    for (const m of this.list) {
      const t = rayBox(origin, dir, { x: m.pos.x - m.hw, y: m.pos.y, z: m.pos.z - m.hw }, { x: m.pos.x + m.hw, y: m.pos.y + m.h, z: m.pos.z + m.hw });
      if (t >= 0 && t <= maxDist && (!best || t < best.dist)) best = { mob: m, dist: t };
    }
    return best;
  }
  damage(m, dmg, px, pz) {
    m.hit(dmg, px, pz);
    this.hooks.sound('hit');
    if (m.hp <= 0) this.kill(m);
  }
  kill(m) {
    for (const [id, n] of m.def.drops()) this.hooks.drop(m.pos.x, m.pos.y + 0.5, m.pos.z, id, n);
    if (this.hooks.killed) this.hooks.killed(m.type, m.def.xp || 2);
    this.hooks.puff(m.pos.x, m.pos.y + m.h / 2, m.pos.z);
    m.dispose(this.scene);
    this.list.splice(this.list.indexOf(m), 1);
  }

  update(dt, player, mode, day, radius) {
    const w = this.world;
    for (let i = this.list.length - 1; i >= 0; i--) {
      const m = this.list[i];
      m.age += dt; m.cool = Math.max(0, m.cool - dt); m.flash = Math.max(0, m.flash - dt);
      const dx = player.pos.x - m.pos.x, dz = player.pos.z - m.pos.z, dist = Math.hypot(dx, dz);
      const dy = player.pos.y - m.pos.y;
      let hostile = m.def.hostile && mode === 'survival' && !player.dead;
      if (m.type === 'spider' && day > 0.5 && !m.provoked) hostile = false;
      if (m.def.enderman && mode === 'survival' && !player.dead && !m.aggro && dist < 24) { // se enfada si lo miras
        const look = player.lookDir(), tx = m.pos.x - player.pos.x, ty = m.pos.y + 2.6 - (player.pos.y + 1.62), tz = m.pos.z - player.pos.z, tl = Math.hypot(tx, ty, tz);
        if ((look.x * tx + look.y * ty + look.z * tz) / tl > 0.985) m.aggro = true;
      }
      if (m.def.enderman && m.aggro && mode === 'survival' && !player.dead) hostile = true;
      let target = null, speed = m.def.speed;

      if (hostile && dist < 26 && Math.abs(dy) < 14) {
        target = Math.atan2(-dx, -dz); // yaw hacia el jugador
        if (m.def.ranged && dist < 6) target += Math.PI; // el esqueleto se aleja
      }
      else {
        m.wanderT -= dt;
        if (m.wanderT <= 0) { m.wanderT = 2 + Math.random() * 4; m.wanderDir = Math.random() < 0.4 ? null : Math.random() * Math.PI * 2; }
        if (m.wanderDir !== null && m.wanderDir !== undefined) target = m.wanderDir; speed *= 0.6;
      }
      // giro suave
      let moving = false;
      const holdPos = m.def.ranged && hostile && dist >= 6 && dist < 12;
      if (target !== null) {
        let d = target - m.yaw; d = Math.atan2(Math.sin(d), Math.cos(d));
        m.yaw += Math.max(-8 * dt, Math.min(8 * dt, d));
        moving = !holdPos;
        if (holdPos) { const f = Math.atan2(-dx, -dz) - m.yaw; m.yaw += Math.atan2(Math.sin(f), Math.cos(f)) * Math.min(1, dt * 10); }
      }
      // Creeper: mecha
      if (m.def.creeper) {
        if (hostile && dist < 3 && Math.abs(dy) < 2) { m.fuse += dt; if (m.fuse - dt <= 0) this.hooks.sound('hiss'); moving = false; }
        else m.fuse = Math.max(0, m.fuse - dt * 2);
        const s = 1 + (m.fuse > 0 ? Math.sin(m.fuse * 30) * 0.04 + m.fuse * 0.15 : 0);
        m.group.scale.set(s, s, s);
        if (m.fuse >= 1.5) { this.hooks.explode(m.pos.x, m.pos.y + 0.8, m.pos.z, 3.2); m.dispose(this.scene); this.list.splice(i, 1); continue; }
      }
      const inWater = w.isLiquid(Math.floor(m.pos.x), Math.floor(m.pos.y + 0.2), Math.floor(m.pos.z));
      const fx = -Math.sin(m.yaw), fz = -Math.cos(m.yaw);
      if (moving && m.knock === undefined) { m.vel.x += (fx * speed - m.vel.x) * Math.min(1, dt * 8); m.vel.z += (fz * speed - m.vel.z) * Math.min(1, dt * 8); }
      else if (m.type !== 'slime' || m.onGround) { m.vel.x *= Math.max(0, 1 - dt * 6); m.vel.z *= Math.max(0, 1 - dt * 6); }
      if (m.type === 'slime') { // salta a trompicones
        moving = false; m.hopT = (m.hopT === undefined ? 0.5 : m.hopT) - dt;
        if (m.onGround && m.hopT <= 0 && hostile) { m.hopT = 1.0 + Math.random() * 0.8; m.vel.y = 7.5; m.vel.x = (dx / (dist || 1)) * 3.4; m.vel.z = (dz / (dist || 1)) * 3.4; m.yaw = Math.atan2(-dx, -dz); }
      }
      m.moving = moving;
      if (inWater) { m.vel.y = Math.max(m.vel.y, 0) + 14 * dt; m.vel.y = Math.min(m.vel.y, 2.5); }

      if (m.def.fly) { this.flyMob(m, dt, player, hostile, dx, dz, dy, dist); m.onGround = false; }
      else {
        const r = moveBody(w, m, dt);
        m.onGround = r.onGround;
        if ((r.hitX || r.hitZ) && r.onGround && moving) m.vel.y = 7.4; // saltar obstáculos
      }

      // Ataque del zombi y del piglin
      if ((m.type === 'zombie' || m.type === 'piglin') && hostile && dist < 1.2 && Math.abs(dy) < 1.6 && m.cool <= 0) {
        m.cool = 1; this.hooks.hurtPlayer(m.def.damage, (dx / (dist || 1)) * 5, (dz / (dist || 1)) * 5);
      }
      // Araña y enderman: cuerpo a cuerpo
      if ((m.type === 'spider' || m.type === 'slime' || m.def.enderman) && hostile && dist < (m.type === 'spider' ? 1.7 : m.type === 'slime' ? 1.3 : 1.5) && Math.abs(dy) < 1.8 && m.cool <= 0) {
        m.cool = m.type === 'spider' ? 0.9 : 1; this.hooks.hurtPlayer(m.type === 'spider' || m.type === 'slime' ? 2 : 6, (dx / (dist || 1)) * 4, (dz / (dist || 1)) * 4);
      }
      // Esqueleto: dispara flechas
      if (m.def.ranged && hostile && dist < 22 && m.cool <= 0) {
        const o = new THREE.Vector3(m.pos.x, m.pos.y + 1.6, m.pos.z), t = new THREE.Vector3(player.pos.x, player.pos.y + 1.2, player.pos.z), dv = t.clone().sub(o), L = dv.length();
        dv.normalize();
        if (!w.raycast(o, dv, L)) { m.cool = 2.2; this.shootArrow(o, dv.multiplyScalar(1).setY(dv.y + 0.04 * L / 10)); }
      }
      // Enderman: se teletransporta cuando está enfadado
      if (m.def.enderman && m.aggro) {
        m.tpT = (m.tpT === undefined ? 4 : m.tpT) - dt;
        if (m.tpT <= 0 && dist > 3) {
          m.tpT = 5 + Math.random() * 3;
          const a = Math.random() * Math.PI * 2, d2 = 4 + Math.random() * 5, nx = Math.floor(player.pos.x + Math.cos(a) * d2), nz = Math.floor(player.pos.z + Math.sin(a) * d2), top = w.topY(nx, nz);
          if (top > 0 && !w.isSolid(nx, top + 1, nz)) { this.hooks.tp(m.pos.x, m.pos.y + 1, m.pos.z); m.pos.set(nx + 0.5, top + 1, nz + 0.5); m.vel.set(0, 0, 0); this.hooks.tp(m.pos.x, m.pos.y + 1, m.pos.z); }
        }
      }
      if (m.type === 'chicken' && m.vel.y < -2) m.vel.y = -2; // planea
      // El sol quema a los zombis y esqueletos
      if ((m.type === 'zombie' || m.type === 'skeleton') && day > 0.75 && w.skyLit(Math.floor(m.pos.x), Math.floor(m.pos.y + 1), Math.floor(m.pos.z)) && !inWater) {
        m.burn = (m.burn || 0) + dt; if (m.burn > 1) { m.burn = 0; m.hit(2, m.pos.x, m.pos.z); m.vel.set(0, 0, 0); if (m.hp <= 0) { this.kill(m); continue; } }
      }
      // Sonidos ambiente
      m.sound -= dt;
      if (m.sound <= 0) { m.sound = 6 + Math.random() * 12; if (dist < 16) this.hooks.sound(m.type === 'pig' ? 'oink' : m.type === 'cow' || m.type === 'sheep' ? 'moo' : m.type === 'chicken' ? 'pop' : m.type === 'zombie' || m.type === 'skeleton' || m.type === 'spider' ? 'groan' : ''); }

      // Animación
      if (m.parts.rods) m.parts.rods.forEach((r, k) => (r.rotation.y += dt * (2 + k)));
      m.walkT += dt * (moving ? 9 : 0);
      const sw = moving ? Math.sin(m.walkT) * 0.7 : 0;
      if (m.parts.legs) m.parts.legs.forEach((l, k) => (l.rotation.x = (k % 2 ? -sw : sw)));
      m.model.position.copy(m.pos);
      m.model.rotation.y = m.yaw + Math.PI;
      const flash = m.flash > 0 || (m.fuse > 0 && Math.floor(m.fuse * 8) % 2 === 0);
      for (const mat of m.materials()) if (mat.emissive) mat.emissive.setRGB(flash ? (m.fuse > 0 ? 0.8 : 0.5) : 0, flash ? (m.fuse > 0 ? 0.8 : 0) : 0, flash ? (m.fuse > 0 ? 0.8 : 0) : 0);

      // Despawn lejano
      if (dist > radius * 16 + 24 || m.pos.y < -20) { m.dispose(this.scene); this.list.splice(i, 1); }
    }

    // Flechas
    for (let i = this.arrows.length - 1; i >= 0; i--) {
      const a = this.arrows[i]; a.life -= dt; a.vel.y -= (a.fire ? 0 : 7) * dt;
      a.mesh.position.addScaledVector(a.vel, dt);
      a.mesh.lookAt(a.mesh.position.clone().add(a.vel));
      const p = a.mesh.position, hit = Math.hypot(p.x - player.pos.x, p.y - (player.pos.y + 0.9), p.z - player.pos.z) < 0.75;
      if (hit && !player.dead) { this.hooks.hurtPlayer(a.fire ? 3 : 4, a.vel.x * 0.25, a.vel.z * 0.25); if (a.fire) this.hooks.effect('burn', 4); }
      if (hit || a.life <= 0 || w.isSolid(Math.floor(p.x), Math.floor(p.y), Math.floor(p.z))) { this.scene.remove(a.mesh); this.arrows.splice(i, 1); }
    }

    // Aparición
    this.spawnT -= dt;
    if (this.spawnT <= 0) { this.spawnT = 1.5; this.trySpawn(player, mode, day); }
  }

  flyMob(m, dt, player, hostile, dx, dz, dy, dist) { // blaze: flota a distancia y dispara ráfagas de bolas de fuego
    const w = this.world, want = hostile ? 9 : 0;
    let tx = 0, tz = 0;
    if (hostile && dist > 12) { tx = dx / (dist || 1); tz = dz / (dist || 1); } else if (hostile && dist < 6) { tx = -dx / (dist || 1); tz = -dz / (dist || 1); }
    const ty = hostile ? player.pos.y + 3 + Math.sin(m.age * 1.4) * 0.8 : m.pos.y + Math.sin(m.age) * 0.4;
    m.vel.x += (tx * m.def.speed - m.vel.x) * Math.min(1, dt * 3); m.vel.z += (tz * m.def.speed - m.vel.z) * Math.min(1, dt * 3);
    m.vel.y += ((ty - m.pos.y) * 1.2 - m.vel.y) * Math.min(1, dt * 3);
    const nx = m.pos.x + m.vel.x * dt, ny = m.pos.y + m.vel.y * dt, nz = m.pos.z + m.vel.z * dt;
    if (!w.isSolid(Math.floor(nx), Math.floor(ny + 1), Math.floor(nz))) { m.pos.set(nx, ny, nz); }
    if (hostile) {
      m.yaw = Math.atan2(-dx, -dz);
      m.burst = m.burst || 0;
      if (m.burst > 0) { m.burstT -= dt; if (m.burstT <= 0) { m.burst--; m.burstT = 0.28; const o = new THREE.Vector3(m.pos.x, m.pos.y + 1.4, m.pos.z), t = new THREE.Vector3(player.pos.x, player.pos.y + 1, player.pos.z), dv = t.sub(o).normalize(); this.shootArrow(o, dv, true); } }
      else if (m.cool <= 0 && dist < 26 && !w.raycast(new THREE.Vector3(m.pos.x, m.pos.y + 1.4, m.pos.z), new THREE.Vector3(dx, dy, dz).normalize(), dist)) { m.cool = 4; m.burst = 3; m.burstT = 0; this.hooks.sound('hiss'); }
    }
  }

  shootArrow(o, dir, fire = false) {
    const mesh = fire ? new THREE.Mesh(new THREE.BoxGeometry(0.4, 0.4, 0.4), new THREE.MeshBasicMaterial({ color: 0xff8a20 })) : new THREE.Mesh(new THREE.BoxGeometry(0.07, 0.07, 0.8), new THREE.MeshLambertMaterial({ color: 0x8a6a3a, emissive: 0x201408 }));
    mesh.position.copy(o); this.scene.add(mesh);
    this.arrows.push({ mesh, vel: dir.normalize().multiplyScalar(fire ? 15 : 22), life: fire ? 6 : 4, fire });
    this.hooks.sound('shoot', 0.5);
  }

  // Nether y End: busca suelo en una columna cercana y aparece algo hostil
  trySpawnDim(player, mode) {
    if (mode !== 'survival') return;
    const w = this.world, hostile = this.list.length;
    if (hostile >= (this.dim === 'nether' ? 12 : 7)) return;
    const a = Math.random() * Math.PI * 2, d = 14 + Math.random() * 18;
    const x = Math.floor(player.pos.x + Math.cos(a) * d), z = Math.floor(player.pos.z + Math.sin(a) * d);
    for (let y = Math.min(CH - 6, Math.floor(player.pos.y) + 22); y > 4; y--) {
      if (w.isSolid(x, y - 1, z) && !w.isLiquid(x, y - 1, z) && !w.isSolid(x, y, z) && !w.isSolid(x, y + 1, z) && !w.isLiquid(x, y, z)) {
        if (this.dim === 'nether') { const r = Math.random(); this.add(r < 0.55 ? 'piglin' : 'blaze', x + 0.5, r < 0.55 ? y : y + 2, z + 0.5); }
        else this.add('enderman', x + 0.5, y, z + 0.5);
        return;
      }
    }
  }

  trySpawn(player, mode, day) {
    if (this.dim !== 'overworld') return this.trySpawnDim(player, mode);
    const w = this.world;
    const passive = this.list.filter((m) => !m.def.hostile).length, hostile = this.list.length - passive;
    const pickColumn = (min, max) => {
      const a = Math.random() * Math.PI * 2, d = min + Math.random() * (max - min);
      const x = Math.floor(player.pos.x + Math.cos(a) * d), z = Math.floor(player.pos.z + Math.sin(a) * d);
      return [x, z];
    };
    if (passive < 10 && day > 0.45) {
      const [x, z] = pickColumn(16, 40); const top = w.topY(x, z);
      if (top > 0) {
        const id = w.getBlock(x, top, z);
        if ((id === B.GRASS || id === B.SNOW) && !w.isSolid(x, top + 1, z) && !w.isLiquid(x, top + 1, z)) this.add(['pig', 'cow', 'sheep', 'chicken'][Math.floor(Math.random() * 4)], x + 0.5, top + 1, z + 0.5);
      }
    }
    if (mode !== 'survival' || hostile >= 8) return;
    if (day < 0.3) { // noche: superficie
      const [x, z] = pickColumn(20, 36); const top = w.topY(x, z);
      if (top > 0 && !w.isSolid(x, top + 1, z) && !w.isLiquid(x, top + 1, z) && OPAQUE[w.getBlock(x, top, z)])
        this.add(HOSTILE_NIGHT[Math.floor(Math.random() * HOSTILE_NIGHT.length)], x + 0.5, top + 1, z + 0.5);
    } else if (hostile < 4) { // cuevas: bajo la superficie, siempre
      const a = Math.random() * Math.PI * 2, d = 14 + Math.random() * 14;
      const x = Math.floor(player.pos.x + Math.cos(a) * d), z = Math.floor(player.pos.z + Math.sin(a) * d);
      const top = w.topY(x, z); if (top < 8) return;
      const y = 3 + Math.floor(Math.random() * Math.max(1, top - 8));
      if (w.getBlock(x, y, z) === 0 && w.getBlock(x, y + 1, z) === 0 && w.isSolid(x, y - 1, z) && !w.skyLit(x, y, z))
        this.add(HOSTILE_CAVE[Math.floor(Math.random() * HOSTILE_CAVE.length)], x + 0.5, y, z + 0.5);
    }
  }
}
