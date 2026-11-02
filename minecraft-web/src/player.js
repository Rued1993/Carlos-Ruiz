import * as THREE from 'three';
import { LIQUID, B } from './blocks.js';

const HALF_W = 0.3, HEIGHT = 1.8, EYE = 1.62;
const GRAVITY = 28, JUMP = 8.6, WALK = 4.4, SPRINT = 7, FLY = 12;

export class Player {
  constructor(world, camera) {
    this.world = world; this.camera = camera;
    this.pos = new THREE.Vector3(0, 40, 0); // pies
    this.vel = new THREE.Vector3();
    this.yaw = 0; this.pitch = 0;
    this.onGround = false; this.flying = false;
    this.inWater = false; this.headUnder = false;
    this.keys = new Set();
    this.mode = 'survival';
    this.hp = 20; this.food = 20; this.air = 10;
    this.fallStart = null; this.foodTimer = 0; this.regenTimer = 0; this.airTimer = 0; this.starveTimer = 0;
    this.invuln = 0; this.dead = false;
    this.stepDist = 0;
    this.events = { onHurt: null, onLand: null, onStep: null, onSplash: null, onDeath: null, onVoid: null };
    this.inLava = false;
    this.spawn = new THREE.Vector3();
    this.wind = { x: 0, z: 0 };
    this.push = { x: 0, y: 0, z: 0 }; // fuerzas externas (rayo tractor)
    this.effects = { poison: 0, fatigue: 0, burn: 0, levitate: 0 }; this.poisonT = 0; this.burnT = 0;
  }

  collides(px, py, pz) {
    const w = this.world;
    for (let y = Math.floor(py); y <= Math.floor(py + HEIGHT - 0.001); y++)
      for (let z = Math.floor(pz - HALF_W); z <= Math.floor(pz + HALF_W); z++)
        for (let x = Math.floor(px - HALF_W); x <= Math.floor(px + HALF_W); x++)
          if (w.isSolid(x, y, z)) return true;
    return false;
  }
  intersectsBlock(bx, by, bz) {
    return this.pos.x + HALF_W > bx && this.pos.x - HALF_W < bx + 1 &&
      this.pos.y + HEIGHT > by && this.pos.y < by + 1 &&
      this.pos.z + HALF_W > bz && this.pos.z - HALF_W < bz + 1;
  }
  get eye() { return new THREE.Vector3(this.pos.x, this.pos.y + EYE, this.pos.z); }
  lookDir() {
    return new THREE.Vector3(-Math.sin(this.yaw) * Math.cos(this.pitch), Math.sin(this.pitch), -Math.cos(this.yaw) * Math.cos(this.pitch));
  }

  damage(n, kx = 0, kz = 0) {
    if (this.mode === 'creative' || this.dead || this.invuln > 0) return;
    this.hp = Math.max(0, this.hp - n);
    this.invuln = 0.5;
    this.vel.x += kx; this.vel.z += kz; if (kx || kz) this.vel.y = Math.max(this.vel.y, 5);
    if (this.events.onHurt) this.events.onHurt(n);
    if (this.hp <= 0) { this.dead = true; if (this.events.onDeath) this.events.onDeath(); }
  }
  heal(n) { this.hp = Math.min(20, this.hp + n); }
  eat(n) { this.food = Math.min(20, this.food + n); }
  respawn() {
    this.hp = 20; this.food = 20; this.air = 10; this.dead = false; this.invuln = 2; this.effects.poison = 0; this.effects.fatigue = 0; this.effects.burn = 0; this.effects.levitate = 0;
    this.pos.copy(this.spawn); this.vel.set(0, 0, 0); this.fallStart = null;
  }

  update(dt) {
    dt = Math.min(dt, 0.05);
    if (this.dead) { this.camera.position.set(this.pos.x, this.pos.y + 0.4, this.pos.z); this.camera.rotation.set(this.pitch, this.yaw, 0.6, 'YXZ'); return; }
    const k = this.keys, w = this.world;
    this.invuln = Math.max(0, this.invuln - dt);
    const fx = Math.floor(this.pos.x), fz = Math.floor(this.pos.z);
    const wasWater = this.inWater;
    this.inWater = w.isLiquid(fx, Math.floor(this.pos.y + 0.3), fz);
    this.inLava = w.getBlock(fx, Math.floor(this.pos.y + 0.3), fz) === B.LAVA || w.getBlock(fx, Math.floor(this.pos.y + 1.2), fz) === B.LAVA;
    if (this.inLava && this.mode === 'survival') { this.effects.burn = Math.max(this.effects.burn, 6); this.damage(4); }
    const onSoul = w.getBlock(fx, Math.floor(this.pos.y - 0.15), fz) === B.SOUL_SAND;
    this.headUnder = w.isLiquid(fx, Math.floor(this.pos.y + EYE), fz);
    if (this.inWater && !wasWater && this.vel.y < -4 && this.events.onSplash) this.events.onSplash();

    const fwd = (k.has('KeyW') ? 1 : 0) - (k.has('KeyS') ? 1 : 0);
    const strafe = (k.has('KeyD') ? 1 : 0) - (k.has('KeyA') ? 1 : 0);
    const sprinting = k.has('ShiftLeft') && fwd > 0 && !(this.mode === 'survival' && this.food <= 6);
    let speed = this.flying ? FLY : (sprinting ? SPRINT : WALK);
    if (this.inWater && !this.flying) speed *= 0.6;
    if (onSoul && !this.flying) speed *= 0.55;
    const sin = Math.sin(this.yaw), cos = Math.cos(this.yaw);
    let dx = -sin * fwd + cos * strafe, dz = -cos * fwd - sin * strafe;
    const len = Math.hypot(dx, dz);
    if (len > 0) { dx /= len; dz /= len; }
    this.vel.x = dx * speed + (this.inWater ? 0 : this.wind.x); this.vel.z = dz * speed + (this.inWater ? 0 : this.wind.z);

    if (this.flying) {
      this.vel.y = ((k.has('Space') ? 1 : 0) - (k.has('KeyQ') ? 1 : 0)) * speed;
      this.fallStart = null;
    } else if (this.inWater) {
      this.vel.y -= GRAVITY * 0.25 * dt;
      this.vel.y = Math.max(this.vel.y, -3) * (1 - 2 * dt);
      if (k.has('Space')) this.vel.y = Math.min(this.vel.y + 22 * dt, 3.6);
      this.fallStart = null;
    } else {
      this.vel.y -= GRAVITY * dt;
      if (this.vel.y < -50) this.vel.y = -50;
      if (k.has('Space') && this.onGround) { this.vel.y = JUMP; this.onGround = false; }
    }

    this.vel.x += this.push.x; this.vel.z += this.push.z; this.vel.y += this.push.y * dt;
    if (this.effects.levitate > 0) { this.effects.levitate -= dt; this.vel.y = Math.min(this.vel.y + 24 * dt, 3.2); this.fallStart = null; }
    const wasGround = this.onGround;
    const steps = 2, sdt = dt / steps;
    this.onGround = false;
    const px0 = this.pos.x, pz0 = this.pos.z;
    for (let s = 0; s < steps; s++) {
      for (const axis of ['x', 'z', 'y']) {
        const d = this.vel[axis] * sdt;
        if (d === 0) continue;
        this.pos[axis] += d;
        if (this.collides(this.pos.x, this.pos.y, this.pos.z)) {
          this.pos[axis] -= d;
          if (axis === 'y' && this.vel.y < 0) this.onGround = true;
          this.vel[axis] = 0;
        }
      }
    }
    // Auto-salto de escalón al caminar contra un bloque (cómodo con teclado)
    // Caída
    if (!this.onGround && !this.inWater && !this.flying) {
      if (this.fallStart === null || this.pos.y > this.fallStart) this.fallStart = this.pos.y;
    }
    if (this.onGround && !wasGround && this.fallStart !== null) {
      const dist = this.fallStart - this.pos.y;
      if (dist > 3 && this.mode === 'survival') this.damage(Math.floor(dist - 3));
      if (dist > 1.2 && this.events.onLand) this.events.onLand(dist);
      this.fallStart = null;
    }
    if (this.onGround) this.fallStart = null;
    // Pasos
    if (this.onGround && !this.flying) {
      this.stepDist += Math.hypot(this.pos.x - px0, this.pos.z - pz0);
      if (this.stepDist > (sprinting ? 2.2 : 1.7)) { this.stepDist = 0; if (this.events.onStep) this.events.onStep(); }
    }
    if (this.pos.y < -30) { if (this.events.onVoid) this.events.onVoid(); else { this.pos.y = 70; this.vel.set(0, 0, 0); this.damage(4); } }

    // Efectos de estado
    if (this.effects.fatigue > 0) this.effects.fatigue -= dt;
    if (this.effects.burn > 0) {
      if (this.inWater && !this.inLava) this.effects.burn = 0;
      else { this.effects.burn -= dt; this.burnT += dt; if (this.burnT >= 0.8) { this.burnT = 0; if (this.mode === 'survival') this.damage(1); } }
    }
    if (this.effects.poison > 0) {
      this.effects.poison -= dt; this.poisonT += dt;
      if (this.poisonT >= 1) { this.poisonT = 0; if (this.mode === 'survival' && this.hp > 1) { this.hp -= 1; if (this.events.onHurt) this.events.onHurt(1); } }
    }
    // Supervivencia: aire, hambre, regeneración
    if (this.mode === 'survival') {
      if (this.headUnder) {
        this.airTimer += dt;
        if (this.airTimer >= 1) { this.airTimer = 0; if (this.air > 0) this.air--; else this.damage(2); }
      } else { this.airTimer = 0; this.air = Math.min(10, this.air + dt * 6); }
      const moving = Math.hypot(this.vel.x, this.vel.z) > 0.1;
      this.foodTimer += dt * (sprinting ? 3 : moving ? 1 : 0.25);
      if (this.foodTimer > 22) { this.foodTimer = 0; this.food = Math.max(0, this.food - 1); }
      this.regenTimer += dt;
      if (this.food >= 18 && this.hp < 20 && this.regenTimer > 3) { this.regenTimer = 0; this.heal(1); this.foodTimer += 6; }
      else if (this.food <= 0 && this.regenTimer > 4) { this.regenTimer = 0; if (this.hp > 1) this.damage(1); }
    } else { this.air = 10; this.hp = 20; this.food = 20; }

    this.camera.position.set(this.pos.x, this.pos.y + EYE, this.pos.z);
    this.camera.rotation.set(this.pitch, this.yaw, 0, 'YXZ');
  }
}
