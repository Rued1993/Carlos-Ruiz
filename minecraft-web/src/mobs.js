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

export class Mob {
  constructor(type, x, y, z, scene) {
    this.type = type; this.def = MOB_TYPES[type];
    this.pos = new THREE.Vector3(x, y, z); this.vel = new THREE.Vector3();
    this.hw = this.def.hw; this.h = this.def.h;
    this.hp = this.def.hp; this.yaw = Math.random() * Math.PI * 2;
    this.group = new THREE.Group(); this.parts = {};
    this.def.build(this.group, this.parts);
    this.model = new THREE.Group(); this.model.add(this.group); scene.add(this.model);
    this.wanderT = 0; this.wanderDir = 0; this.moving = false;
    this.cool = 0; this.flash = 0; this.fuse = 0; this.walkT = 0; this.age = 0; this.onGround = false;
    this.sound = 3 + Math.random() * 10;
  }
  materials() { const out = []; this.group.traverse((o) => { if (o.material) Array.isArray(o.material) ? out.push(...o.material) : out.push(o.material); }); return out; }
  hit(dmg, fromX, fromZ) {
    this.hp -= dmg; this.flash = 0.3;
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
    this.list = []; this.spawnT = 0;
  }
  add(type, x, y, z) { const m = new Mob(type, x, y, z, this.scene); this.list.push(m); return m; }
  clear() { for (const m of this.list) m.dispose(this.scene); this.list = []; }

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
      const hostile = m.def.hostile && mode === 'survival' && !player.dead;
      let target = null, speed = m.def.speed;

      if (hostile && dist < 22 && Math.abs(dy) < 12) target = Math.atan2(-dx, -dz); // yaw hacia el jugador
      else {
        m.wanderT -= dt;
        if (m.wanderT <= 0) { m.wanderT = 2 + Math.random() * 4; m.wanderDir = Math.random() < 0.4 ? null : Math.random() * Math.PI * 2; }
        if (m.wanderDir !== null && m.wanderDir !== undefined) target = m.wanderDir; speed *= 0.6;
      }
      // giro suave
      let moving = false;
      if (target !== null) {
        let d = target - m.yaw; d = Math.atan2(Math.sin(d), Math.cos(d));
        m.yaw += Math.max(-8 * dt, Math.min(8 * dt, d));
        moving = true;
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
      else { m.vel.x *= Math.max(0, 1 - dt * 6); m.vel.z *= Math.max(0, 1 - dt * 6); }
      m.moving = moving;
      if (inWater) { m.vel.y = Math.max(m.vel.y, 0) + 14 * dt; m.vel.y = Math.min(m.vel.y, 2.5); }

      const r = moveBody(w, m, dt);
      m.onGround = r.onGround;
      if ((r.hitX || r.hitZ) && r.onGround && moving) m.vel.y = 7.4; // saltar obstáculos

      // Ataque del zombi
      if (m.type === 'zombie' && hostile && dist < 1.2 && Math.abs(dy) < 1.6 && m.cool <= 0) {
        m.cool = 1; this.hooks.hurtPlayer(m.def.damage, (dx / (dist || 1)) * 5, (dz / (dist || 1)) * 5);
      }
      // El sol quema a los zombis
      if (m.type === 'zombie' && day > 0.75 && w.skyLit(Math.floor(m.pos.x), Math.floor(m.pos.y + 1), Math.floor(m.pos.z)) && !inWater) {
        m.burn = (m.burn || 0) + dt; if (m.burn > 1) { m.burn = 0; m.hit(2, m.pos.x, m.pos.z); m.vel.set(0, 0, 0); if (m.hp <= 0) { this.kill(m); continue; } }
      }
      // Sonidos ambiente
      m.sound -= dt;
      if (m.sound <= 0) { m.sound = 6 + Math.random() * 12; if (dist < 16) this.hooks.sound(m.type === 'pig' ? 'oink' : m.type === 'cow' ? 'moo' : m.type === 'zombie' ? 'groan' : ''); }

      // Animación
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

    // Aparición
    this.spawnT -= dt;
    if (this.spawnT <= 0) { this.spawnT = 1.5; this.trySpawn(player, mode, day); }
  }

  trySpawn(player, mode, day) {
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
        if ((id === B.GRASS || id === B.SNOW) && !w.isSolid(x, top + 1, z) && !w.isLiquid(x, top + 1, z)) this.add(Math.random() < 0.5 ? 'pig' : 'cow', x + 0.5, top + 1, z + 0.5);
      }
    }
    if (mode !== 'survival' || hostile >= 8) return;
    if (day < 0.3) { // noche: superficie
      const [x, z] = pickColumn(20, 36); const top = w.topY(x, z);
      if (top > 0 && !w.isSolid(x, top + 1, z) && !w.isLiquid(x, top + 1, z) && OPAQUE[w.getBlock(x, top, z)])
        this.add(Math.random() < 0.65 ? 'zombie' : 'creeper', x + 0.5, top + 1, z + 0.5);
    } else if (hostile < 4) { // cuevas: bajo la superficie, siempre
      const a = Math.random() * Math.PI * 2, d = 14 + Math.random() * 14;
      const x = Math.floor(player.pos.x + Math.cos(a) * d), z = Math.floor(player.pos.z + Math.sin(a) * d);
      const top = w.topY(x, z); if (top < 8) return;
      const y = 3 + Math.floor(Math.random() * Math.max(1, top - 8));
      if (w.getBlock(x, y, z) === 0 && w.getBlock(x, y + 1, z) === 0 && w.isSolid(x, y - 1, z) && !w.skyLit(x, y, z))
        this.add(Math.random() < 0.6 ? 'zombie' : 'creeper', x + 0.5, y, z + 0.5);
    }
  }
}
