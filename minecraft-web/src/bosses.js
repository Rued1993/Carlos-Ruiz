// Jefes adicionales: Ender Dragon, Wither, Warden y Guardián Ancestral.
// Todos comparten la interfaz de WitherStorm: update, hit, raycast, dispose, hp/maxHp/phase/name/type/dead.
import * as THREE from 'three';
import { rayBox } from './mobs.js';
import { moveBody } from './entities.js';
import { B } from './blocks.js';

const rnd = (a, b) => a + Math.random() * (b - a);
const V = (x = 0, y = 0, z = 0) => new THREE.Vector3(x, y, z);
const wrap = (a) => Math.atan2(Math.sin(a), Math.cos(a));

class BossBase {
  constructor(scene, hooks, pos, cfg) {
    this.scene = scene; this.h = hooks; this.pos = pos.clone();
    Object.assign(this, cfg); // name, type, maxHp, hitbox {hx, hy, hz, oy}
    this.hp = this.maxHp; this.phase = 1; this.t = 0; this.yaw = 0; this.flash = 0; this.dead = false;
    this.scale = cfg.scale || 1;
    this.root = new THREE.Group(); this.body = new THREE.Group(); this.root.add(this.body);
    this.flashMats = []; this.proj = []; this.clouds = []; this.extra = [];
    scene.add(this.root); this.root.position.copy(pos); this.root.scale.setScalar(this.scale);
  }
  mat(color, emissive = 0, basic = false) {
    if (basic) return new THREE.MeshBasicMaterial({ color });
    const m = new THREE.MeshLambertMaterial({ color, emissive }); this.flashMats.push(m); return m;
  }
  box(w, h, d, m, x, y, z, parent = this.body) { const o = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), m); o.position.set(x, y, z); parent.add(o); return o; }
  group(x, y, z, parent = this.body) { const g = new THREE.Group(); g.position.set(x, y, z); parent.add(g); return g; }
  world(obj) { const v = V(); obj.getWorldPosition(v); return v; }

  raycast(o, d, maxDist) {
    const b = this.hitbox, s = this.scale, p = this.pos;
    const t = rayBox(o, d, { x: p.x - b.hx * s, y: p.y + (b.oy - b.hy) * s, z: p.z - b.hz * s }, { x: p.x + b.hx * s, y: p.y + (b.oy + b.hy) * s, z: p.z + b.hz * s });
    return t >= 0 && t <= maxDist ? { dist: t, crit: false } : null;
  }
  damageMul() { return 1; }
  hit(dmg, crit, info) {
    if (this.dead) return;
    this.hp -= dmg * this.damageMul(); this.flash = 0.15;
    this.h.burst(this.pos.x + rnd(-1, 1), this.pos.y + this.hitbox.oy * this.scale + rnd(-1, 1), this.pos.z + rnd(-1, 1), this.burstColor || [0.6, 0.2, 0.8], 8, 4);
    if (this.hp <= 0) return this.die();
    const np = this.phaseFor(this.hp / this.maxHp);
    if (np > this.phase) { this.phase = np; this.onPhase(np); }
    this.onHit && this.onHit();
  }
  phaseFor() { return 1; }
  onPhase() {}
  die() {
    this.dead = true;
    this.h.explode(this.pos.x, this.pos.y + this.hitbox.oy * this.scale, this.pos.z, 5, 0.2);
    this.h.sound('roar', 1);
    this.h.loot(this.pos.x, this.pos.y + 1, this.pos.z, this.type);
    this.h.toast(`¡Has derrotado a ${this.name}!`);
    this.dispose(); this.h.done();
  }
  dispose() {
    this.scene.remove(this.root);
    this.root.traverse((o) => o.geometry && o.geometry.dispose());
    for (const p of this.proj) this.scene.remove(p.mesh);
    for (const e of this.extra) this.scene.remove(e);
    this.proj = [];
  }

  // Proyectiles explosivos
  shootProj(from, dir, o = {}) {
    const size = o.size || 0.9;
    const mesh = new THREE.Mesh(new THREE.BoxGeometry(size, size, size), new THREE.MeshLambertMaterial({ color: o.color || 0x201530, emissive: o.emissive || 0x5a2090 }));
    mesh.position.copy(from); this.scene.add(mesh);
    this.proj.push({ mesh, vel: dir.clone().normalize().multiplyScalar(o.speed || 16), life: o.life || 7, o });
    this.h.sound('shoot', 1);
  }
  updateProj(dt, player, world) {
    for (let i = this.proj.length - 1; i >= 0; i--) {
      const q = this.proj[i], o = q.o; q.life -= dt;
      q.mesh.position.addScaledVector(q.vel, dt); q.mesh.rotation.x += dt * 4; q.mesh.rotation.y += dt * 3;
      const p = q.mesh.position;
      const near = Math.hypot(p.x - player.pos.x, p.y - (player.pos.y + 0.9), p.z - player.pos.z) < 1.4;
      if (near || q.life <= 0 || world.isSolid(Math.floor(p.x), Math.floor(p.y), Math.floor(p.z))) {
        this.h.explode(p.x, p.y, p.z, o.radius || 2.2, o.ds || 0.5);
        if (o.effect && Math.hypot(p.x - player.pos.x, p.y - player.pos.y, p.z - player.pos.z) < (o.radius || 2.2) * 1.8) this.h.effect(o.effect[0], o.effect[1]);
        if (o.cloud) this.clouds.push({ x: p.x, y: p.y, z: p.z, t: 4, tick: 0 });
        this.scene.remove(q.mesh); this.proj.splice(i, 1);
      }
    }
    for (let i = this.clouds.length - 1; i >= 0; i--) {
      const c = this.clouds[i]; c.t -= dt; c.tick -= dt;
      if (c.tick <= 0) {
        c.tick = 0.45; this.h.burst(c.x + rnd(-2, 2), c.y + rnd(0, 1.5), c.z + rnd(-2, 2), [0.8, 0.3, 0.9], 5, 1.2);
        if (Math.hypot(c.x - player.pos.x, c.z - player.pos.z) < 3.3 && Math.abs(c.y - player.pos.y) < 3 && !player.dead) this.h.hurtPlayer(2, 0, 0);
      }
      if (c.t <= 0) this.clouds.splice(i, 1);
    }
  }
  applyFlash() {
    const e = this.flash > 0 ? 0.5 : 0;
    for (const m of this.flashMats) if (m.userData.baseE === undefined) { m.userData.baseE = m.emissive.clone(); }
    for (const m of this.flashMats) m.emissive.copy(m.userData.baseE).addScalar(e);
  }
  update(dt, player, world) {
    if (this.dead) return;
    this.t += dt; this.flash = Math.max(0, this.flash - dt);
    this.tick(dt, player, world);
    this.updateProj(dt, player, world);
    this.applyFlash();
  }
}

// ===================================================================== ENDER DRAGON
export class EnderDragon extends BossBase {
  constructor(scene, hooks, pos) {
    super(scene, hooks, pos, { name: 'ENDER DRAGON', type: 'dragon', maxHp: 300, hitbox: { hx: 4.5, hy: 2.4, hz: 5, oy: 0.5 }, scale: 1.4, burstColor: [0.7, 0.2, 0.9] });
    this.center = pos.clone(); this.theta = Math.random() * 6; this.state = 'circle'; this.diveT = 12; this.fireT = 4; this.breath = 0; this.diveTime = 0; this.diveTarget = V();
    const dk = this.mat(0x15101a), dk2 = this.mat(0x241a2e), glow = this.mat(0xe040ff, 0xe040ff, true);
    this.box(2.4, 2.0, 6, dk, 0, 0, 0);
    for (let i = 0; i < 6; i++) this.box(0.4, 0.8, 0.5, dk2, 0, 1.3, -2.4 + i * 0.95); // espinas dorsales
    // cuello y cabeza
    this.neck = [];
    for (let i = 0; i < 3; i++) this.neck.push(this.box(1.3 - i * 0.1, 1.3 - i * 0.1, 1.5, dk2, 0, 0.3 + i * 0.35, 3.3 + i * 1.3));
    this.head = this.group(0, 1.6, 7.3);
    this.box(2, 1.3, 2.2, dk, 0, 0, 0, this.head); this.box(1.2, 0.7, 1.6, dk2, 0, -0.15, 1.6, this.head);
    this.jaw = this.group(0, -0.6, 0.4, this.head); this.box(1.5, 0.35, 2.2, dk, 0, 0, 0.9, this.jaw);
    for (const x of [-0.7, 0.7]) { this.box(0.5, 0.25, 0.1, glow, x, 0.2, 1.1, this.head); this.box(0.25, 0.8, 0.3, dk2, x * 1.2, 0.9, -0.4, this.head).rotation.z = x * 0.4; }
    // alas
    this.wings = [];
    for (const sx of [-1, 1]) {
      const w = this.group(sx * 1.2, 0.8, 0.5); this.box(5, 0.22, 2.4, dk2, sx * 2.5, 0, 0, w);
      const o = this.group(sx * 5, 0, 0, w); this.box(5, 0.16, 2.0, dk, sx * 2.5, 0, 0.4, o); this.box(0.15, 0.15, 3.4, dk2, sx * 2.5, 0.12, 0.4, o);
      this.wings.push({ w, o, sx });
    }
    // cola y patas
    this.tail = [];
    for (let i = 0; i < 8; i++) this.tail.push(this.box(1.5 - i * 0.14, 1.2 - i * 0.1, 1.6, i % 2 ? dk : dk2, 0, 0, -3.6 - i * 1.5));
    for (const [x, z] of [[-1, 1.8], [1, 1.8], [-1, -1.8], [1, -1.8]]) this.box(0.6, 1.4, 0.6, dk2, x, -1.4, z);
    // cristales de curación
    this.crystals = [];
    for (let i = 0; i < 4; i++) {
      const a = (i / 4) * Math.PI * 2 + 0.4, g = new THREE.Group();
      const m = new THREE.MeshBasicMaterial({ color: 0xff60d0 });
      const c1 = new THREE.Mesh(new THREE.BoxGeometry(1.3, 1.3, 1.3), m), c2 = new THREE.Mesh(new THREE.BoxGeometry(1.3, 1.3, 1.3), new THREE.MeshBasicMaterial({ color: 0xffd0f0 }));
      c2.rotation.set(0.7, 0.7, 0); c2.scale.setScalar(0.7); g.add(c1, c2);
      const beam = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.07, 1, 5), new THREE.MeshBasicMaterial({ color: 0xff80e0, transparent: true, opacity: 0.6, fog: false }));
      g.position.set(pos.x + Math.cos(a) * 14, pos.y - 6 + 3, pos.z + Math.sin(a) * 14); scene.add(g, beam); this.extra.push(g, beam);
      this.crystals.push({ g, beam, alive: true });
    }
    this.h.toast('¡Destruye los 4 cristales para poder dañar al Dragón!');
  }
  aliveCrystals() { return this.crystals.filter((c) => c.alive).length; }
  damageMul() { return this.aliveCrystals() ? 0.25 : 1; }
  phaseFor(r) { return r > 0.5 ? 1 : 2; }
  onPhase() { this.h.sound('roar', 1); this.h.toast('¡El Dragón entra en furia!'); this.diveT = 3; }
  raycast(o, d, max) {
    let best = super.raycast(o, d, max);
    this.crystals.forEach((c, i) => {
      if (!c.alive) return;
      const p = c.g.position, t = rayBox(o, d, { x: p.x - 1, y: p.y - 1, z: p.z - 1 }, { x: p.x + 1, y: p.y + 1, z: p.z + 1 });
      if (t >= 0 && t <= max && (!best || t < best.dist)) best = { dist: t, crit: false, crystal: i };
    });
    return best;
  }
  hit(dmg, crit, info) {
    if (info && info.crystal !== undefined) {
      const c = this.crystals[info.crystal]; if (!c.alive) return;
      c.alive = false; this.scene.remove(c.g, c.beam);
      this.h.explode(c.g.position.x, c.g.position.y, c.g.position.z, 2.2, 0.35);
      this.h.burst(c.g.position.x, c.g.position.y, c.g.position.z, [1, 0.4, 0.8], 24, 6);
      this.h.toast(this.aliveCrystals() ? `Cristal destruido (${this.aliveCrystals()} restantes)` : '¡Cristales destruidos! Ahora es vulnerable'); return;
    }
    super.hit(dmg, crit, info);
  }
  tick(dt, player, world) {
    const k = this.phase;
    this.center.x += (player.pos.x - this.center.x) * dt * 0.1; this.center.z += (player.pos.z - this.center.z) * dt * 0.1;
    const live = this.aliveCrystals();
    if (live) this.hp = Math.min(this.maxHp, this.hp + dt * 2 * live);
    const prev = this.pos.clone();
    if (this.state === 'circle') {
      this.theta += dt * (0.32 + 0.1 * k);
      const R = 24, tx = this.center.x + Math.cos(this.theta) * R, tz = this.center.z + Math.sin(this.theta) * R, ty = Math.max(player.pos.y + 12, this.center.y) + Math.sin(this.t * 0.9) * 2;
      const f = Math.min(1, dt * 1.6); this.pos.x += (tx - this.pos.x) * f; this.pos.z += (tz - this.pos.z) * f; this.pos.y += (ty - this.pos.y) * f;
      this.diveT -= dt; this.fireT -= dt;
      if (this.diveT <= 0 && !player.dead) { this.state = 'dive'; this.diveTime = 0; this.diveTarget.set(player.pos.x, player.pos.y + 1, player.pos.z); this.diveT = k === 1 ? 13 : 8; this.h.sound('roar', 0.7); }
      if (this.fireT <= 0 && !player.dead) {
        this.fireT = k === 1 ? 5 : 3;
        const mouth = this.world(this.head); this.shootProj(mouth, V(player.pos.x, player.pos.y + 1, player.pos.z).sub(mouth), { speed: 17, size: 1.1, color: 0x401060, emissive: 0xc030f0, radius: 2.6, ds: 0.55, cloud: true });
      }
    } else if (this.state === 'dive') {
      this.diveTime += dt;
      const dir = this.diveTarget.clone().sub(this.pos), d = dir.length();
      this.pos.addScaledVector(dir.normalize(), 28 * dt);
      const dp = Math.hypot(this.pos.x - player.pos.x, this.pos.y - (player.pos.y + 1), this.pos.z - player.pos.z);
      if (dp < 4.2 && !player.dead && !this.hitDive) { this.hitDive = true; this.h.hurtPlayer(9, dir.x * 8, dir.z * 8); }
      if (d < 3 || this.diveTime > 3) { this.state = 'circle'; this.hitDive = false; }
    }
    const v = this.pos.clone().sub(prev); if (v.lengthSq() > 1e-5) this.yaw += wrap(Math.atan2(v.x, v.z) - this.yaw) * Math.min(1, dt * 3);
    this.root.position.copy(this.pos); this.root.rotation.y = this.yaw; this.root.rotation.z = this.state === 'dive' ? 0 : -wrap(Math.atan2(v.x, v.z) - this.yaw) * 0.5;
    this.root.rotation.x = this.state === 'dive' ? 0.5 : 0;
    // animación
    const flap = Math.sin(this.t * (this.state === 'dive' ? 7 : 3.2));
    for (const w of this.wings) { w.w.rotation.z = w.sx * flap * 0.6; w.o.rotation.z = w.sx * flap * 0.45; }
    this.tail.forEach((s, i) => { s.position.x = Math.sin(this.t * 2 - i * 0.6) * i * 0.35; s.position.y = Math.sin(this.t * 1.5 - i * 0.5) * i * 0.12; });
    this.jaw.rotation.x = 0.1 + (this.state === 'dive' ? 0.5 : 0.18 + Math.sin(this.t * 2) * 0.12);
    // cristales
    for (const c of this.crystals) if (c.alive) {
      c.g.rotation.y += dt * 1.2; c.g.position.y += Math.sin(this.t * 2 + c.g.position.x) * dt * 0.4;
      const a = c.g.position, b = this.pos.clone().setY(this.pos.y + 1), L = a.distanceTo(b);
      c.beam.scale.set(1, L, 1); c.beam.position.copy(a).add(b).multiplyScalar(0.5); c.beam.quaternion.setFromUnitVectors(V(0, 1, 0), b.clone().sub(a).normalize());
      c.beam.visible = this.hp < this.maxHp;
    } else c.beam.visible = false;
  }
}

// ===================================================================== WITHER
export class WitherBoss extends BossBase {
  constructor(scene, hooks, pos) {
    super(scene, hooks, pos, { name: 'WITHER', type: 'wither', maxHp: 300, hitbox: { hx: 2.2, hy: 2.8, hz: 2.2, oy: 1 }, scale: 1.6, burstColor: [0.2, 0.2, 0.25] });
    this.fireT = 2.5; this.minionT = 12; this.noBreak = 0;
    const dk = this.mat(0x16161a), bone = this.mat(0x3a3a40), eye = this.mat(0xe8f0ff, 0, true);
    this.box(0.45, 3, 0.45, bone, 0, 0, 0); // columna
    for (let i = 0; i < 3; i++) this.box(2.6 - i * 0.4, 0.2, 0.35, bone, 0, 0.9 - i * 0.55, 0);
    this.box(0.5, 1.2, 0.5, dk, 0, -1.9, -0.5).rotation.x = 0.3;
    this.heads = [];
    const mk = (s, x, y, z) => {
      const g = this.group(x, y, z); this.box(s, s, s, dk, 0, 0, 0, g);
      for (const sx of [-1, 1]) this.box(s * 0.22, s * 0.16, 0.1, eye, sx * s * 0.22, s * 0.1, s / 2 + 0.03, g);
      this.box(s * 0.5, s * 0.14, 0.1, eye, 0, -s * 0.25, s / 2 + 0.03, g); this.heads.push(g);
    };
    mk(1.3, 0, 2.1, 0); mk(1.0, -1.35, 1.7, 0.1); mk(1.0, 1.35, 1.7, 0.1);
    this.aura = new THREE.Mesh(new THREE.BoxGeometry(3.6, 4.8, 3.6), new THREE.MeshBasicMaterial({ color: 0x80b0ff, transparent: true, opacity: 0, fog: false, depthWrite: false }));
    this.aura.position.y = 0.6; this.body.add(this.aura);
    this.h.explode(pos.x, pos.y, pos.z, 4, 0.25);
    this.h.toast('¡El Wither ha despertado!');
  }
  phaseFor(r) { return r > 0.5 ? 1 : 2; }
  damageMul() { return this.phase === 2 ? 0.6 : 1; }
  onPhase() { this.h.sound('roar', 1); this.h.toast('¡El Wither está acorazado! Te perseguirá de cerca'); this.aura.material.opacity = 0.28; this.fireT = 1; }
  onHit() { // rompe bloques cuando recibe daño
    if (this.t - this.noBreak < 0.6) return; this.noBreak = this.t;
    const s = this.scale, cx = Math.floor(this.pos.x), cy = Math.floor(this.pos.y + s), cz = Math.floor(this.pos.z);
    for (let x = -3; x <= 3; x++) for (let y = -2; y <= 4; y++) for (let z = -3; z <= 3; z++) { const id = this.h.world().getBlock(cx + x, cy + y, cz + z); if (id && id !== B.BEDROCK && Math.random() < 0.6) this.h.world().setBlock(cx + x, cy + y, cz + z, 0); }
  }
  tick(dt, player) {
    const k = this.phase, px = player.pos.x, pz = player.pos.z;
    const dx = px - this.pos.x, dz = pz - this.pos.z, hd = Math.hypot(dx, dz) || 1, want = k === 1 ? 16 : 7;
    const sp = k === 1 ? 4.5 : 7;
    if (hd > want + 1) { this.pos.x += (dx / hd) * sp * dt; this.pos.z += (dz / hd) * sp * dt; } else if (hd < want - 3) { this.pos.x -= (dx / hd) * sp * 0.7 * dt; this.pos.z -= (dz / hd) * sp * 0.7 * dt; }
    this.pos.y += (player.pos.y + (k === 1 ? 7 : 3.5) - this.pos.y) * Math.min(1, dt * 0.9);
    this.yaw += wrap(Math.atan2(dx, dz) - this.yaw) * Math.min(1, dt * 3);
    this.root.position.set(this.pos.x, this.pos.y + Math.sin(this.t * 1.3) * 0.5, this.pos.z); this.root.rotation.y = this.yaw;
    this.heads.forEach((g, i) => { g.rotation.y = Math.sin(this.t * 1.1 + i * 2) * 0.35; g.rotation.x = Math.sin(this.t * 0.9 + i) * 0.1; });
    this.fireT -= dt;
    if (this.fireT <= 0 && !player.dead) {
      this.fireT = k === 1 ? 2.3 : 1.6;
      const n = k === 1 ? 1 : 3;
      for (let i = 0; i < n; i++) {
        const from = this.world(this.heads[i % 3]), tgt = V(player.pos.x + player.vel.x * 0.4, player.pos.y + 1, player.pos.z + player.vel.z * 0.4), dir = tgt.sub(from).normalize();
        dir.x += rnd(-0.05, 0.05) * i; dir.z += rnd(-0.05, 0.05) * i;
        this.shootProj(from, dir, { speed: 15, size: k === 1 ? 0.8 : 1.0, color: k === 1 ? 0x111114 : 0x203060, emissive: k === 1 ? 0x303040 : 0x4070ff, radius: k === 1 ? 1.9 : 2.3, ds: 0.4, effect: ['poison', 6] });
      }
    }
    if (k === 2) { this.minionT -= dt; if (this.minionT <= 0) { this.minionT = 13; if (this.h.minions() < 5) this.h.spawnMinion('skeleton'); } }
  }
}

// ===================================================================== WARDEN
export class WardenBoss extends BossBase {
  constructor(scene, hooks, pos) {
    super(scene, hooks, pos, { name: 'WARDEN', type: 'warden', maxHp: 360, hitbox: { hx: 0.9, hy: 1.6, hz: 0.9, oy: 1.6 }, scale: 1.25, burstColor: [0.1, 0.6, 0.6] });
    this.vel = V(); this.hw = 0.55 * 1.25; this.hh = 3.4;
    this.hwb = 0.7; this.pos.copy(pos);
    this.state = 'emerge'; this.emerge = 2.4; this.boomT = 3; this.charge = 0; this.meleeT = 0; this.angry = false; this.walk = 0;
    const dk = this.mat(0x0d2a30), dk2 = this.mat(0x143a42), glow = this.mat(0x3be8c8, 0, true);
    this.legL = this.leg(-0.4, dk); this.legR = this.leg(0.4, dk);
    this.box(1.5, 1.5, 0.9, dk2, 0, 2.15, 0); this.chest = this.box(0.7, 0.6, 0.12, glow, 0, 2.2, 0.48);
    for (const y of [1.75, 2.0, 2.45]) this.box(1.55, 0.1, 0.95, dk, 0, y, 0);
    this.armL = this.arm(-1.1, dk2); this.armR = this.arm(1.1, dk2);
    this.head = this.group(0, 3.25, 0.05); this.box(1.5, 1.0, 0.95, dk2, 0, 0, 0, this.head);
    for (const x of [-1, 1]) { this.box(0.18, 0.9, 0.18, dk, x * 0.5, 0.85, -0.1, this.head).rotation.z = -x * 0.35; this.box(0.6, 0.55, 0.12, glow, x * 0.95, 0.15, -0.1, this.head); }
    this.box(0.9, 0.12, 0.1, glow, 0, -0.1, 0.5, this.head);
    this.boomBeam = new THREE.Mesh(new THREE.CylinderGeometry(0.5, 0.5, 1, 8), new THREE.MeshBasicMaterial({ color: 0x70fff0, transparent: true, opacity: 0, fog: false, depthWrite: false }));
    scene.add(this.boomBeam); this.extra.push(this.boomBeam);
    this.h.toast('El Warden emerge de la oscuridad…'); this.h.sound('roar', 1);
  }
  leg(x, m) { const g = this.group(x, 1.5, 0); this.box(0.7, 1.5, 0.75, m, 0, -0.75, 0, g); return g; }
  arm(x, m) { const g = this.group(x, 2.8, 0); this.box(0.7, 2.6, 0.7, m, 0, -1.3, 0, g); return g; }
  phaseFor(r) { return r > 0.5 ? 1 : 2; }
  onPhase() { this.h.sound('roar', 1); this.h.toast('¡El Warden ruge enfurecido!'); this.boomT = 1; }
  damageMul() { return this.state === 'emerge' ? 0 : 1; }
  tick(dt, player, world) {
    const k = this.phase;
    if (this.state === 'emerge') {
      this.emerge -= dt; this.root.position.set(this.pos.x, this.pos.y - Math.max(0, this.emerge) * 1.2, this.pos.z);
      this.h.darkness(0.6);
      if (this.emerge <= 0) this.state = 'hunt';
      return;
    }
    const dx = player.pos.x - this.pos.x, dz = player.pos.z - this.pos.z, dist = Math.hypot(dx, dz) || 1, dy = player.pos.y - this.pos.y;
    this.yaw += wrap(Math.atan2(dx, dz) - this.yaw) * Math.min(1, dt * 5);
    // Caza: camina hacia el jugador
    const speed = this.charge > 0 ? 0.4 : (k === 1 ? 3.4 : 5);
    this.vel.x += ((dx / dist) * speed - this.vel.x) * Math.min(1, dt * 6); this.vel.z += ((dz / dist) * speed - this.vel.z) * Math.min(1, dt * 6);
    if (dist < 2.2) { this.vel.x *= 0.2; this.vel.z *= 0.2; }
    const body = { pos: this.pos, vel: this.vel, hw: this.hw, h: this.hh };
    const r = moveBody(world, body, dt);
    if ((r.hitX || r.hitZ) && r.onGround) this.vel.y = 9;
    this.walk += dt * Math.hypot(this.vel.x, this.vel.z) * 2.2;
    this.root.position.copy(this.pos); this.root.rotation.y = this.yaw;
    const sw = Math.sin(this.walk) * 0.55;
    this.legL.rotation.x = sw; this.legR.rotation.x = -sw; this.armL.rotation.x = -sw * 0.7; this.armR.rotation.x = sw * 0.7;
    this.head.rotation.x = Math.sin(this.t * 2) * 0.05;
    this.chest.scale.setScalar(1 + (this.charge > 0 ? 0.6 + Math.sin(this.t * 25) * 0.3 : Math.sin(this.t * 4) * 0.1));
    // Melee brutal
    this.meleeT -= dt;
    if (dist < 3.8 && Math.abs(dy) < 3 && this.meleeT <= 0 && !player.dead && this.charge <= 0) {
      this.meleeT = 1.5; this.armR.rotation.x = -2; this.h.hurtPlayer(k === 1 ? 12 : 15, (dx / dist) * 9, (dz / dist) * 9); this.h.sound('hit', 1);
    }
    // Explosión sónica a distancia
    this.boomT -= dt;
    if (this.charge > 0) {
      this.charge -= dt; this.h.sound('hiss', 0.4);
      if (this.charge <= 0) this.sonicBoom(player, world);
    } else if (this.boomT <= 0 && dist > 4.5 && dist < 30 && !player.dead) { this.charge = 1.5; this.boomT = k === 1 ? 5 : 3.2; this.h.sound('roar', 0.5); }
    this.boomBeam.material.opacity = Math.max(0, this.boomBeam.material.opacity - dt * 3);
    this.h.darkness(dist < 28 ? 0.35 + 0.15 * Math.sin(this.t * 3) : 0);
  }
  sonicBoom(player, world) {
    const from = this.pos.clone().setY(this.pos.y + 2.6 * this.scale), to = V(player.pos.x, player.pos.y + 1, player.pos.z), dir = to.clone().sub(from), L = dir.length();
    dir.normalize();
    this.boomBeam.material.opacity = 0.85; this.boomBeam.scale.set(1, L, 1); this.boomBeam.position.copy(from).add(to).multiplyScalar(0.5); this.boomBeam.quaternion.setFromUnitVectors(V(0, 1, 0), dir);
    this.h.sound('explode', 0.8);
    if (!world.raycast(from, dir, L)) this.h.hurtPlayer(this.phase === 1 ? 12 : 15, dir.x * 8, dir.z * 8);
    this.h.burst(player.pos.x, player.pos.y + 1, player.pos.z, [0.4, 1, 0.9], 14, 5);
  }
  dispose() { this.h.darkness(0); super.dispose(); }
}

// ===================================================================== GUARDIÁN ANCESTRAL
export class ElderGuardian extends BossBase {
  constructor(scene, hooks, pos) {
    super(scene, hooks, pos, { name: 'GUARDIÁN ANCESTRAL', type: 'guardian', maxHp: 240, hitbox: { hx: 1.8, hy: 1.8, hz: 1.8, oy: 0 }, scale: 2.4, burstColor: [0.3, 0.9, 0.8] });
    this.laserT = 4; this.charge = 0; this.beam = null; this.thorns = 0;
    const sk = this.mat(0x7a8f72), sk2 = this.mat(0x5e7358), orange = this.mat(0xe08a50), tip = this.mat(0x60f0e0, 0, true);
    this.box(1.5, 1.5, 1.5, sk, 0, 0, 0);
    for (let i = 0; i < 6; i++) this.box(0.4, 0.4, 0.05, orange, rnd(-0.6, 0.6), rnd(-0.6, 0.6), -0.78); // manchas
    this.spikes = [];
    const dirs = [[1, 0, 0], [-1, 0, 0], [0, 1, 0], [0, -1, 0], [0, 0, -1]];
    for (const [x, y, z] of dirs) for (let j = 0; j < 3; j++) {
      const g = this.group(x * 0.75 + (x ? 0 : rnd(-0.5, 0.5)), y * 0.75 + (y ? 0 : rnd(-0.5, 0.5)), z * 0.75 + (z ? 0 : rnd(-0.5, 0.5)));
      g.lookAt(g.position.clone().add(V(x, y, z))); this.box(0.14, 0.14, 0.9, sk2, 0, 0, 0.45, g); this.box(0.1, 0.1, 0.2, tip, 0, 0, 0.95, g); this.spikes.push(g);
    }
    this.eye = this.group(0, 0, 0.78);
    this.box(0.95, 0.95, 0.12, this.mat(0xf0f0e0), 0, 0, 0, this.eye); this.iris = this.box(0.5, 0.5, 0.14, this.mat(0xc83020, 0x500808), 0, 0, 0.04, this.eye); this.box(0.18, 0.18, 0.16, this.mat(0x100808), 0, 0, 0.06, this.eye);
    this.box(0.5, 0.5, 0.9, sk2, 0, 0, -1.1).scale.set(1, 0.6, 1);
    this.laser = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.1, 1, 6), new THREE.MeshBasicMaterial({ color: 0x70fff0, transparent: true, opacity: 0, fog: false, depthWrite: false }));
    scene.add(this.laser); this.extra.push(this.laser);
    this.h.toast('El Guardián Ancestral te observa… ¡cuidado con su láser!');
  }
  phaseFor(r) { return r > 0.5 ? 1 : 2; }
  onPhase() { this.h.sound('roar', 1); this.h.toast('¡El Guardián se enfurece! Su láser es más rápido'); }
  onHit() { // espinas: daña al jugador si está cerca
    const p = this.h.player(); if (p && Math.hypot(p.pos.x - this.pos.x, p.pos.z - this.pos.z) < 7.5 && !p.dead) this.h.hurtPlayer(2, 0, 0);
  }
  tick(dt, player, world) {
    const k = this.phase;
    const dx = player.pos.x - this.pos.x, dz = player.pos.z - this.pos.z, hd = Math.hypot(dx, dz) || 1;
    if (this.charge <= 0) {
      const want = k === 1 ? 14 : 11, sp = k === 1 ? 3 : 4.4;
      if (hd > want + 1) { this.pos.x += (dx / hd) * sp * dt; this.pos.z += (dz / hd) * sp * dt; } else if (hd < want - 3) { this.pos.x -= (dx / hd) * sp * 0.7 * dt; this.pos.z -= (dz / hd) * sp * 0.7 * dt; }
      this.pos.y += (player.pos.y + 4 - this.pos.y) * Math.min(1, dt * 0.8);
    }
    this.yaw += wrap(Math.atan2(dx, dz) - this.yaw) * Math.min(1, dt * 3);
    this.root.position.set(this.pos.x, this.pos.y + Math.sin(this.t * 1.2) * 0.6, this.pos.z); this.root.rotation.y = this.yaw;
    const sp = 1 + Math.sin(this.t * 1.6) * 0.12 + (this.charge > 0 ? 0.35 : 0);
    this.spikes.forEach((s) => s.scale.setScalar(sp));
    this.iris.scale.setScalar(this.charge > 0 ? 1.5 + Math.sin(this.t * 30) * 0.2 : 1);
    // Láser
    this.laserT -= dt;
    const eyeW = this.world(this.eye), tgt = V(player.pos.x, player.pos.y + 1, player.pos.z), dir = tgt.clone().sub(eyeW), L = dir.length();
    dir.normalize();
    if (this.charge > 0) {
      const total = k === 1 ? 2.6 : 1.7, prog = 1 - this.charge / total;
      this.charge -= dt;
      this.laser.material.opacity = 0.25 + prog * 0.6; this.laser.scale.set(0.5 + prog * 3.2, L, 0.5 + prog * 3.2);
      this.laser.position.copy(eyeW).add(tgt).multiplyScalar(0.5); this.laser.quaternion.setFromUnitVectors(V(0, 1, 0), dir);
      if (this.charge <= 0) {
        this.laser.material.opacity = 0; this.h.sound('explode', 0.6);
        if (!world.raycast(eyeW, dir, L) && !player.dead) { this.h.hurtPlayer(9, dir.x * 3, dir.z * 3); this.h.effect('fatigue', 25); this.h.toast('¡Fatiga de minería!'); }
        this.laserT = k === 1 ? 6 : 3.5;
      }
    } else {
      this.laser.material.opacity = 0;
      if (this.laserT <= 0 && L < 40 && !player.dead) { this.charge = k === 1 ? 2.6 : 1.7; this.h.sound('hiss', 0.6); }
    }
  }
}

export const BOSS_INFO = {
  storm: { name: 'Tormenta Wither', color: '#b060ff', hp: 360, desc: 'Colosal masa con tres cabezas. Rayo tractor, cráneos explosivos y un bloque de comandos como punto débil.', icon: '🌀' },
  dragon: { name: 'Ender Dragon', color: '#e040ff', hp: 300, desc: 'Vuela en círculos, pica en picado y lanza aliento. Destruye sus 4 cristales para poder herirlo.', icon: '🐉', make: (s, h, p) => new EnderDragon(s, h, p), up: 16 },
  wither: { name: 'Wither', color: '#9aa8c8', hp: 300, desc: 'Lanza cráneos negros que envenenan. Con poca vida se acoraza y te persigue de cerca.', icon: '💀', make: (s, h, p) => new WitherBoss(s, h, p), up: 8 },
  warden: { name: 'Warden', color: '#3be8c8', hp: 360, desc: 'Ciego pero letal. Golpes devastadores y explosión sónica a distancia. Oscurece la pantalla.', icon: '👁', make: (s, h, p) => new WardenBoss(s, h, p), up: 0, ground: true },
  guardian: { name: 'Guardián Ancestral', color: '#70fff0', hp: 240, desc: 'Su láser carga y causa fatiga de minería. Sus espinas devuelven daño al golpearlo.', icon: '🐟', make: (s, h, p) => new ElderGuardian(s, h, p), up: 6 },
};
export const BOSS_ORDER = ['storm', 'dragon', 'wither', 'warden', 'guardian'];
