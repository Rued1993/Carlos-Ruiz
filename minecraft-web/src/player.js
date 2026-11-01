import * as THREE from 'three';

const HALF_W = 0.3, HEIGHT = 1.8, EYE = 1.62;
const GRAVITY = 28, JUMP = 8.6, WALK = 4.4, SPRINT = 7, FLY = 12;

export class Player {
  constructor(world, camera) {
    this.world = world;
    this.camera = camera;
    this.pos = new THREE.Vector3(0, 40, 0); // pies
    this.vel = new THREE.Vector3();
    this.yaw = 0;
    this.pitch = 0;
    this.onGround = false;
    this.flying = false;
    this.keys = new Set();
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
    return new THREE.Vector3(
      -Math.sin(this.yaw) * Math.cos(this.pitch),
      Math.sin(this.pitch),
      -Math.cos(this.yaw) * Math.cos(this.pitch)
    );
  }

  update(dt) {
    dt = Math.min(dt, 0.05);
    const k = this.keys;
    const fwd = (k.has('KeyW') ? 1 : 0) - (k.has('KeyS') ? 1 : 0);
    const strafe = (k.has('KeyD') ? 1 : 0) - (k.has('KeyA') ? 1 : 0);
    const speed = this.flying ? FLY : (k.has('ShiftLeft') ? SPRINT : WALK);
    const sin = Math.sin(this.yaw), cos = Math.cos(this.yaw);
    let dx = -sin * fwd + cos * strafe;
    let dz = -cos * fwd - sin * strafe;
    const len = Math.hypot(dx, dz);
    if (len > 0) { dx /= len; dz /= len; }
    this.vel.x = dx * speed;
    this.vel.z = dz * speed;

    if (this.flying) {
      this.vel.y = ((k.has('Space') ? 1 : 0) - (k.has('KeyQ') ? 1 : 0)) * speed;
    } else {
      this.vel.y -= GRAVITY * dt;
      if (this.vel.y < -50) this.vel.y = -50;
      if (k.has('Space') && this.onGround) { this.vel.y = JUMP; this.onGround = false; }
    }

    // mover por ejes en 2 subpasos
    const steps = 2, sdt = dt / steps;
    this.onGround = false;
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
    if (this.pos.y < -20) { this.pos.y = 60; this.vel.set(0, 0, 0); }

    this.camera.position.set(this.pos.x, this.pos.y + EYE, this.pos.z);
    this.camera.rotation.set(this.pitch, this.yaw, 0, 'YXZ');
  }
}
