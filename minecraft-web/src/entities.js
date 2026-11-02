// Física de cuerpos, objetos caídos y partículas.
import * as THREE from 'three';
import { iconTexture } from './icons.js';
import { BLOCKS } from './blocks.js';
import { tileColor } from './atlas.js';

// Mueve un cuerpo {pos, vel, hw, h} con colisión AABB por ejes. Devuelve flags.
export function moveBody(world, b, dt, gravity = 28) {
  const res = { onGround: false, hitX: false, hitZ: false };
  b.vel.y = Math.max(-50, b.vel.y - gravity * dt);
  const collides = () => world.bodyHits(b.pos.x, b.pos.y, b.pos.z, b.hw, b.h);
  for (const axis of ['x', 'z', 'y']) {
    const d = b.vel[axis] * dt;
    if (!d) continue;
    b.pos[axis] += d;
    if (collides()) {
      b.pos[axis] -= d;
      if (axis === 'y' && b.vel.y < 0) res.onGround = true;
      if (axis === 'x') res.hitX = true;
      if (axis === 'z') res.hitZ = true;
      b.vel[axis] = 0;
    }
  }
  return res;
}

export class Drops {
  constructor(scene, world) { this.scene = scene; this.world = world; this.list = []; }
  spawn(x, y, z, id, n = 1, toss = true) {
    const mat = new THREE.SpriteMaterial({ map: iconTexture(id), transparent: true, alphaTest: 0.1 });
    const sprite = new THREE.Sprite(mat);
    const s = BLOCKS[id] ? 0.32 : 0.42;
    sprite.scale.set(s, s, s);
    this.scene.add(sprite);
    const a = Math.random() * Math.PI * 2;
    this.list.push({ id, n, sprite, base: s, age: 0, hw: 0.12, h: 0.25, pos: new THREE.Vector3(x, y, z),
      vel: new THREE.Vector3(toss ? Math.cos(a) * 1.6 : 0, toss ? 4 : 0, toss ? Math.sin(a) * 1.6 : 0) });
  }
  update(dt, player, inv, onPickup) {
    for (let i = this.list.length - 1; i >= 0; i--) {
      const d = this.list[i];
      d.age += dt;
      const r = moveBody(this.world, d, dt, 22);
      if (r.onGround) { d.vel.x *= 0.8; d.vel.z *= 0.8; }
      const bob = Math.sin(d.age * 3) * 0.05 + 0.22;
      d.sprite.position.set(d.pos.x, d.pos.y + bob, d.pos.z);
      const dx = player.pos.x - d.pos.x, dz = player.pos.z - d.pos.z, dy = player.pos.y + 0.9 - d.pos.y;
      const dist = Math.hypot(dx, dy, dz);
      if (d.age > 0.6 && dist < 2.2 && inv.canAdd(d.id)) {
        d.vel.x = dx * 6; d.vel.z = dz * 6; d.vel.y = Math.max(d.vel.y, dy * 5);
        d.pos.x += dx * dt * 6; d.pos.z += dz * dt * 6;
        if (dist < 0.9) {
          const left = inv.add(d.id, d.n);
          if (left === 0) { this.remove(i); onPickup(d); continue; }
          d.n = left;
        }
      }
      if (d.age > 300 || d.pos.y < -10) this.remove(i);
    }
  }
  remove(i) { const d = this.list[i]; this.scene.remove(d.sprite); d.sprite.material.dispose(); this.list.splice(i, 1); }
  clear() { while (this.list.length) this.remove(0); }
}

export class Particles {
  constructor(scene, world) {
    this.world = world; this.pool = [];
    const geo = new THREE.BoxGeometry(0.12, 0.12, 0.12);
    for (let i = 0; i < 90; i++) {
      const m = new THREE.Mesh(geo, new THREE.MeshBasicMaterial({ color: 0xffffff }));
      m.visible = false; scene.add(m);
      this.pool.push({ mesh: m, life: 0, vel: new THREE.Vector3() });
    }
    this.next = 0;
  }
  burst(x, y, z, color, n = 10, speed = 3) {
    for (let i = 0; i < n; i++) {
      const p = this.pool[this.next++ % this.pool.length];
      p.life = 0.5 + Math.random() * 0.4;
      p.mesh.visible = true;
      p.mesh.position.set(x + (Math.random() - 0.5), y + (Math.random() - 0.5), z + (Math.random() - 0.5));
      p.mesh.material.color.setRGB(color[0] * (0.7 + Math.random() * 0.3), color[1] * (0.7 + Math.random() * 0.3), color[2] * (0.7 + Math.random() * 0.3));
      p.vel.set((Math.random() - 0.5) * speed, Math.random() * speed * 0.9, (Math.random() - 0.5) * speed);
    }
  }
  blockBreak(x, y, z, id) {
    const def = BLOCKS[id]; if (!def) return;
    this.burst(x + 0.5, y + 0.5, z + 0.5, tileColor(def.tiles[2]), 14, 3.2);
  }
  update(dt) {
    for (const p of this.pool) {
      if (p.life <= 0) continue;
      p.life -= dt;
      if (p.life <= 0) { p.mesh.visible = false; continue; }
      p.vel.y -= 16 * dt;
      p.mesh.position.addScaledVector(p.vel, dt);
    }
  }
}
