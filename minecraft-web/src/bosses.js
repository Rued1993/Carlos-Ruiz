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
    this.flashMats = []; this.proj = []; this.clouds = []; this.extra = []; this.waves = []; this.vel = new THREE.Vector3();
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
    let best = t >= 0 && t <= maxDist ? { dist: t, crit: false } : null;
    for (const tg of this.targets || []) { // objetivos extra: vex, bolas de fuego reflejables...
      const q = tg.pos, h = tg.half, tt = rayBox(o, d, { x: q.x - h, y: q.y - h, z: q.z - h }, { x: q.x + h, y: q.y + h, z: q.z + h });
      if (tt >= 0 && tt <= maxDist && (!best || tt < best.dist)) best = { dist: tt, crit: false, target: tg };
    }
    return best;
  }
  damageMul() { return 1; }
  hit(dmg, crit, info) {
    if (this.dead) return;
    if (info && info.target && info.target.onHit) { info.target.onHit(); return; }
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
    for (const w of this.waves) this.scene.remove(w.mesh);
    this.proj = []; this.waves = [];
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
      if (q.reflected) { // devuelta al jefe
        const c = V(this.pos.x, this.pos.y + this.hitbox.oy * this.scale, this.pos.z);
        if (p.distanceTo(c) < (this.hitbox.hx + 0.8) * this.scale || q.life <= 0) {
          this.h.explode(p.x, p.y, p.z, 2, 0); this.h.burst(p.x, p.y, p.z, [1, 0.6, 0.2], 24, 6);
          this.scene.remove(q.mesh); this.proj.splice(i, 1);
          if (p.distanceTo(c) < (this.hitbox.hx + 0.8) * this.scale) { this.h.toast('¡Rebotada! Gran golpe'); this.hit(q.o.reflectDmg || 70, true); if (this.dead) return; }
          continue;
        }
        continue;
      }
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
  // Ondas expansivas en el suelo (hay que saltarlas)
  addWave(x, y, z, o) {
    const mesh = new THREE.Mesh(new THREE.TorusGeometry(1, 0.16, 6, 44), new THREE.MeshBasicMaterial({ color: o.color || 0xff8030, transparent: true, opacity: 0.85, fog: false, depthWrite: false }));
    mesh.rotation.x = Math.PI / 2; mesh.position.set(x, y + 0.35, z); this.scene.add(mesh);
    this.waves.push({ x, y, z, r: 1, max: o.max || 16, speed: o.speed || 11, dmg: o.dmg || 8, effect: o.effect, mesh, hit: false });
  }
  updateWaves(dt, player) {
    for (let i = this.waves.length - 1; i >= 0; i--) {
      const w = this.waves[i]; w.r += w.speed * dt; w.mesh.scale.set(w.r, w.r, 1); w.mesh.material.opacity = 0.85 * Math.max(0, 1 - w.r / w.max);
      const d = Math.hypot(player.pos.x - w.x, player.pos.z - w.z);
      if (!w.hit && !player.dead && Math.abs(d - w.r) < 1.5 && player.pos.y < w.y + 1.15) { w.hit = true; this.h.hurtPlayer(w.dmg, ((player.pos.x - w.x) / (d || 1)) * 8, ((player.pos.z - w.z) / (d || 1)) * 8); if (w.effect) this.h.effect(w.effect[0], w.effect[1]); }
      if (w.r >= w.max) { this.scene.remove(w.mesh); this.waves.splice(i, 1); }
    }
  }
  // Caminar con física (jefes terrestres): requiere this.hw / this.hh
  walk(dt, world, dx, dz, dist, speed) {
    this.vel.x += ((dx / dist) * speed - this.vel.x) * Math.min(1, dt * 5); this.vel.z += ((dz / dist) * speed - this.vel.z) * Math.min(1, dt * 5);
    const r = moveBody(world, { pos: this.pos, vel: this.vel, hw: this.hw, h: this.hh }, dt, 30);
    if ((r.hitX || r.hitZ) && r.onGround) this.vel.y = 11; this.onGround = r.onGround; return r;
  }
  update(dt, player, world) {
    if (this.dead) return;
    this.t += dt; this.flash = Math.max(0, this.flash - dt);
    this.tick(dt, player, world);
    this.updateProj(dt, player, world); this.updateWaves(dt, player);
    this.applyFlash();
  }
}

// ===================================================================== ENDER DRAGON
export class EnderDragon extends BossBase {
  constructor(scene, hooks, pos, arena) {
    super(scene, hooks, pos, { name: 'ENDER DRAGON', type: 'dragon', maxHp: 300, hitbox: { hx: 4.5, hy: 2.4, hz: 5, oy: 0.5 }, scale: 1.4, burstColor: [0.7, 0.2, 0.9] });
    this.arena = arena || null; this.center = arena ? V(arena.cx, arena.cy, arena.cz) : pos.clone(); this.theta = Math.random() * 6; this.state = 'circle'; this.diveT = 12; this.fireT = 4; this.breath = 0; this.diveTime = 0; this.diveTarget = V();
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
      if (this.arena && this.arena.pillars) { const pl = this.arena.pillars[(i * 2 + 1) % this.arena.pillars.length]; g.position.set(pl.x + 0.5, pl.top + 3.5, pl.z + 0.5); }
      else g.position.set(pos.x + Math.cos(a) * 14, pos.y - 6 + 3, pos.z + Math.sin(a) * 14);
      scene.add(g, beam); this.extra.push(g, beam);
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


// ===================================================================== DEVASTADOR (Ravager)
export class Ravager extends BossBase {
  constructor(scene, hooks, pos) {
    super(scene, hooks, pos, { name: 'DEVASTADOR', type: 'ravager', maxHp: 280, hitbox: { hx: 1.4, hy: 1.5, hz: 1.9, oy: 1.4 }, scale: 1.5, burstColor: [0.5, 0.4, 0.3] });
    this.vel = V(); this.state = 'stalk'; this.timer = 4; this.dirx = 0; this.dirz = 1; this.hitDone = false; this.walk = 0; this.stunMul = 1;
    const dk = this.mat(0x4a4540), dk2 = this.mat(0x5e564e), bone = this.mat(0xd8d4c4), red = this.mat(0xb02020, 0x300808);
    this.box(2.2, 1.7, 3.1, dk, 0, 1.9, 0); this.box(1.6, 0.9, 1.6, dk2, 0, 3.0, -0.6); // joroba
    this.neck = this.group(0, 2.3, 1.4); this.box(1.0, 1.0, 1.2, dk2, 0, 0.1, 0.4, this.neck);
    this.head = this.group(0, 0.2, 1.2, this.neck); this.box(1.7, 1.45, 1.6, dk, 0, 0, 0.5, this.head);
    for (const x of [-1, 1]) { this.box(0.25, 1.0, 0.25, bone, x * 0.7, 1.0, 0.2, this.head).rotation.z = -x * 0.3; this.box(0.2, 0.6, 0.2, bone, x * 0.55, -0.55, 1.2, this.head); this.box(0.3, 0.2, 0.1, red, x * 0.45, 0.2, 1.32, this.head); }
    this.legs = [[-0.8, 1.2], [0.8, 1.2], [-0.8, -1.2], [0.8, -1.2]].map(([x, z]) => { const g = this.group(x, 1.2, z); this.box(0.8, 1.2, 0.8, dk2, 0, -0.6, 0, g); return g; });
    this.hw = 1.2; this.hh = 3.2; this.h.toast('¡El Devastador ruge! Esquiva sus embestidas');
  }
  phaseFor(r) { return r > 0.5 ? 1 : 2; }
  onPhase() { this.h.sound('roar', 1); this.h.toast('¡El Devastador se enfurece!'); this.timer = 1; }
  damageMul() { return this.state === 'stun' ? 1.7 : 1; }
  tick(dt, player, world) {
    const k = this.phase, dx = player.pos.x - this.pos.x, dz = player.pos.z - this.pos.z, dist = Math.hypot(dx, dz) || 1;
    this.timer -= dt;
    let speed = 0;
    if (this.state === 'stalk') {
      speed = k === 1 ? 3.6 : 4.8; this.yaw += wrap(Math.atan2(dx, dz) - this.yaw) * Math.min(1, dt * 4);
      if (this.timer <= 0 && !player.dead && dist < 40) { this.state = 'windup'; this.timer = 1.0; this.h.sound('roar', 0.9); }
    } else if (this.state === 'windup') {
      this.yaw += wrap(Math.atan2(dx, dz) - this.yaw) * Math.min(1, dt * 6);
      this.neck.rotation.x = -0.6 * Math.min(1, (1.0 - this.timer) * 2);
      if (this.timer <= 0) {
        this.state = 'charge'; this.timer = 1.9; this.hitDone = false; this.dirx = dx / dist; this.dirz = dz / dist; this.yaw = Math.atan2(this.dirx, this.dirz);
        if (dist < 9 && !player.dead) this.h.hurtPlayer(4, this.dirx * 10, this.dirz * 10); // onda del rugido
      }
    } else if (this.state === 'charge') {
      speed = 15; this.vel.x = this.dirx * speed; this.vel.z = this.dirz * speed; this.neck.rotation.x = 0.5;
      if (dist < 3.4 && !this.hitDone && !player.dead && Math.abs(player.pos.y - this.pos.y) < 3.5) { this.hitDone = true; this.h.hurtPlayer(11, this.dirx * 12, this.dirz * 12); }
      // arrasa lo que encuentra
      const bx = Math.floor(this.pos.x + this.dirx * 2.2), bz = Math.floor(this.pos.z + this.dirz * 2.2), by = Math.floor(this.pos.y);
      for (let ax = -1; ax <= 1; ax++) for (let az = -1; az <= 1; az++) for (let ay = 0; ay < 3; ay++) { const id = world.getBlock(bx + ax, by + ay, bz + az); if (id && id !== B.BEDROCK && id !== B.STONE && id !== B.COBBLE) world.setBlock(bx + ax, by + ay, bz + az, 0); }
      if (this.timer <= 0) { this.state = 'stun'; this.timer = 2.2; this.h.sound('hit', 1); this.h.burst(this.pos.x, this.pos.y + 2, this.pos.z, [0.8, 0.8, 0.3], 14, 4); }
    } else if (this.state === 'stun') {
      this.neck.rotation.x = 0.9; if (this.timer <= 0) { this.state = 'stalk'; this.timer = k === 1 ? 5 : 3; this.neck.rotation.x = 0; }
    }
    if (this.state !== 'charge') { this.vel.x += ((dx / dist) * speed - this.vel.x) * Math.min(1, dt * 5); this.vel.z += ((dz / dist) * speed - this.vel.z) * Math.min(1, dt * 5); }
    if (this.state === 'stun' || this.state === 'windup') { this.vel.x *= 0.85; this.vel.z *= 0.85; }
    const body = { pos: this.pos, vel: this.vel, hw: this.hw, h: this.hh };
    const r = moveBody(world, body, dt);
    if ((r.hitX || r.hitZ) && r.onGround && this.state !== 'stun') this.vel.y = 10;
    this.walk += dt * Math.hypot(this.vel.x, this.vel.z) * 1.6;
    const sw = Math.sin(this.walk) * 0.5; this.legs.forEach((l, i) => (l.rotation.x = i % 2 ? -sw : sw));
    this.root.position.copy(this.pos); this.root.rotation.y = this.yaw;
  }
}

// ===================================================================== INVOCADOR (Evoker)
export class Evoker extends BossBase {
  constructor(scene, hooks, pos) {
    super(scene, hooks, pos, { name: 'INVOCADOR', type: 'evoker', maxHp: 220, hitbox: { hx: 0.9, hy: 1.4, hz: 0.9, oy: 1.6 }, scale: 1.7, burstColor: [0.9, 0.8, 0.2] });
    this.fangT = 3; this.vexT = 7; this.tpT = 6; this.vex = []; this.fangs = []; this.targets = [];
    const robe = this.mat(0x6c6c70), trim = this.mat(0xd8b830), skin = this.mat(0xd9a88a), dk = this.mat(0x303034);
    this.box(0.95, 1.6, 0.65, robe, 0, 1.0, 0); this.box(1.0, 0.18, 0.7, trim, 0, 0.25, 0); this.box(0.98, 0.14, 0.68, trim, 0, 1.0, 0);
    this.head = this.group(0, 2.05, 0); this.box(0.55, 0.65, 0.55, skin, 0, 0.15, 0, this.head); this.box(0.14, 0.28, 0.16, skin, 0, 0.05, 0.34, this.head);
    for (const x of [-1, 1]) { this.box(0.16, 0.08, 0.04, this.mat(0xffffff, 0, true), x * 0.14, 0.25, 0.28, this.head); this.box(0.2, 0.05, 0.05, dk, x * 0.14, 0.34, 0.28, this.head); }
    this.arms = this.box(1.0, 0.3, 0.45, robe, 0, 1.5, 0.4); this.armL = this.group(-0.62, 1.7, 0.1); this.armR = this.group(0.62, 1.7, 0.1);
    for (const g of [this.armL, this.armR]) this.box(0.28, 0.9, 0.28, robe, 0, -0.45, 0, g);
    this.arms.visible = true;
    this.h.toast('El Invocador alza los brazos… ¡cuidado con los colmillos y los vex!');
  }
  phaseFor(r) { return r > 0.5 ? 1 : 2; }
  onPhase() { this.h.sound('roar', 1); this.h.toast('¡El Invocador desata un círculo de colmillos!'); this.fangT = 1; }
  raycast(o, d, m) { this.targets = this.vex.map((v) => ({ pos: v.pos, half: 0.7, onHit: () => this.killVex(v) })); return super.raycast(o, d, m); }
  killVex(v) { this.h.burst(v.pos.x, v.pos.y, v.pos.z, [0.5, 0.7, 1], 14, 4); this.h.sound('hit', 1); this.scene.remove(v.mesh); this.vex.splice(this.vex.indexOf(v), 1); }
  spawnFang(x, z, delay, world, player) {
    const top = world.topY(Math.floor(x), Math.floor(z)); if (top < 0) return;
    const g = new THREE.Group(); const m = new THREE.MeshLambertMaterial({ color: 0xf0e8c0, emissive: 0x403818 });
    for (let i = 0; i < 3; i++) { const b = new THREE.Mesh(new THREE.BoxGeometry(0.5 - i * 0.14, 0.7, 0.5 - i * 0.14), m); b.position.y = 0.35 + i * 0.6; g.add(b); }
    g.position.set(x, top + 1, z); g.scale.y = 0.01; g.visible = false; this.scene.add(g);
    this.fangs.push({ x, z, y: top + 1, g, t: -delay, hit: false });
  }
  tick(dt, player, world) {
    const k = this.phase, dx = player.pos.x - this.pos.x, dz = player.pos.z - this.pos.z, hd = Math.hypot(dx, dz) || 1;
    this.yaw += wrap(Math.atan2(dx, dz) - this.yaw) * Math.min(1, dt * 5);
    const want = 13; if (hd > want + 2) { this.pos.x += (dx / hd) * 3.5 * dt; this.pos.z += (dz / hd) * 3.5 * dt; } else if (hd < want - 4) { this.pos.x -= (dx / hd) * 3 * dt; this.pos.z -= (dz / hd) * 3 * dt; }
    this.pos.y += (player.pos.y + 3.2 - this.pos.y) * Math.min(1, dt * 1.2);
    this.root.position.set(this.pos.x, this.pos.y + Math.sin(this.t * 1.7) * 0.35, this.pos.z); this.root.rotation.y = this.yaw;
    const cast = this.fangT < 1 || this.vexT < 1; this.armL.rotation.x = this.armR.rotation.x = cast ? -2.4 + Math.sin(this.t * 14) * 0.2 : 0; this.arms.visible = !cast;
    // teletransporte
    this.tpT -= dt;
    if (this.tpT <= 0) {
      this.tpT = k === 1 ? 8 : 5; this.h.burst(this.pos.x, this.pos.y + 1.5, this.pos.z, [0.9, 0.9, 0.3], 22, 5);
      const a = Math.random() * Math.PI * 2, d = 11 + Math.random() * 4; this.pos.set(player.pos.x + Math.cos(a) * d, player.pos.y + 3 + Math.random() * 2, player.pos.z + Math.sin(a) * d);
      this.h.burst(this.pos.x, this.pos.y + 1.5, this.pos.z, [0.9, 0.9, 0.3], 22, 5); this.h.sound('pop', 1);
    }
    // colmillos en línea hacia el jugador (fase 2: además un círculo a su alrededor)
    this.fangT -= dt;
    if (this.fangT <= 0 && !player.dead) {
      this.fangT = k === 1 ? 4.2 : 3; this.h.sound('shoot', 0.8);
      for (let i = 1; i <= 12; i++) this.spawnFang(this.pos.x + (dx / hd) * i * 1.4 + Math.sin(i) * 0.2, this.pos.z + (dz / hd) * i * 1.4, i * 0.07, world, player);
      if (k === 2) for (let i = 0; i < 12; i++) { const a = (i / 12) * Math.PI * 2; this.spawnFang(player.pos.x + Math.cos(a) * 3, player.pos.z + Math.sin(a) * 3, 0.9, world, player); }
    }
    for (let i = this.fangs.length - 1; i >= 0; i--) {
      const f = this.fangs[i]; f.t += dt;
      if (f.t >= 0) {
        f.g.visible = true; f.g.scale.y = Math.min(1, f.t * 6);
        if (!f.hit && f.t > 0.12 && Math.hypot(f.x - player.pos.x, f.z - player.pos.z) < 1.2 && Math.abs(f.y - player.pos.y) < 2.2 && !player.dead) { f.hit = true; this.h.hurtPlayer(6, 0, 0); }
        if (f.t > 1.1) { this.scene.remove(f.g); this.fangs.splice(i, 1); }
      }
    }
    // vex
    this.vexT -= dt;
    if (this.vexT <= 0 && !player.dead) {
      this.vexT = k === 1 ? 10 : 7; this.h.sound('pop', 1);
      const n = k === 1 ? 3 : 5;
      for (let i = 0; i < n; i++) {
        const mesh = new THREE.Group(); const m = new THREE.MeshLambertMaterial({ color: 0x8fb0e0, emissive: 0x203050, transparent: true, opacity: 0.85 });
        const b = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.7, 0.5), m), w1 = new THREE.Mesh(new THREE.BoxGeometry(0.7, 0.05, 0.4), m), w2 = w1.clone();
        w1.position.set(-0.55, 0.2, -0.1); w2.position.set(0.55, 0.2, -0.1); mesh.add(b, w1, w2);
        for (const x of [-0.1, 0.1]) { const e = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.08, 0.05), new THREE.MeshBasicMaterial({ color: 0xff2020 })); e.position.set(x, 0.15, 0.27); mesh.add(e); }
        const pos2 = V(this.pos.x + rnd(-2, 2), this.pos.y + 1 + rnd(0, 2), this.pos.z + rnd(-2, 2)); mesh.position.copy(pos2); this.scene.add(mesh);
        this.vex.push({ mesh, pos: pos2, w1, w2, life: 28, cool: 1 });
      }
    }
    for (let i = this.vex.length - 1; i >= 0; i--) {
      const v = this.vex[i]; v.life -= dt; v.cool -= dt;
      const to = V(player.pos.x, player.pos.y + 1, player.pos.z).sub(v.pos), d = to.length();
      v.pos.addScaledVector(to.normalize(), 6.2 * dt); v.pos.y += Math.sin(this.t * 6 + i) * dt * 1.5;
      v.mesh.position.copy(v.pos); v.mesh.rotation.y = Math.atan2(to.x, to.z); v.w1.rotation.z = Math.sin(this.t * 25) * 0.7; v.w2.rotation.z = -v.w1.rotation.z;
      if (d < 1.2 && v.cool <= 0 && !player.dead) { v.cool = 0.9; this.h.hurtPlayer(3, 0, 0); }
      if (v.life <= 0) { this.scene.remove(v.mesh); this.vex.splice(i, 1); }
    }
  }
  dispose() { for (const v of this.vex) this.scene.remove(v.mesh); for (const f of this.fangs) this.scene.remove(f.g); this.vex = []; this.fangs = []; super.dispose(); }
}

// ===================================================================== GHAST GIGANTE
export class GiantGhast extends BossBase {
  constructor(scene, hooks, pos) {
    super(scene, hooks, pos, { name: 'GHAST GIGANTE', type: 'ghast', maxHp: 200, hitbox: { hx: 2.2, hy: 2.2, hz: 2.2, oy: 0 }, scale: 1.8, burstColor: [1, 1, 1] });
    this.fireT = 3; this.tele = 0; this.theta = Math.random() * 6; this.targets = [];
    const w = this.mat(0xf2f2f2), w2 = this.mat(0xdcdcdc), dark = this.mat(0x403838);
    this.box(4, 4, 4, w, 0, 0, 0);
    this.eyeL = this.box(0.9, 0.25, 0.1, dark, -0.9, 0.2, 2.03); this.eyeR = this.box(0.9, 0.25, 0.1, dark, 0.9, 0.2, 2.03);
    this.mouth = this.box(0.7, 0.35, 0.1, dark, 0, -0.9, 2.03);
    this.tents = [];
    for (const x of [-1.4, 0, 1.4]) for (const z of [-1.4, 0, 1.4]) { const L = 2.2 + Math.abs(x * z) * 0.5 + (x === 0 && z === 0 ? 0.6 : 0); const t = this.box(0.55, L, 0.55, w2, x, -2 - L / 2, z); this.tents.push({ m: t, base: -2 - L / 2, ph: Math.random() * 6 }); }
    this.redEye = this.mat(0xff2020, 0, true);
    this.h.toast('¡Un Ghast gigante! Golpea sus bolas de fuego para devolvérselas');
  }
  phaseFor(r) { return r > 0.5 ? 1 : 2; }
  onPhase() { this.h.sound('roar', 1); this.h.toast('¡El Ghast llora de rabia y dispara más rápido!'); }
  raycast(o, d, m) { this.targets = this.proj.filter((p) => !p.reflected).map((p) => ({ pos: p.mesh.position, half: 1.25, onHit: () => this.reflect(p) })); return super.raycast(o, d, m); }
  reflect(q) {
    q.reflected = true; q.o = { ...q.o, reflectDmg: 70 }; q.life = 6;
    q.vel = V(this.pos.x, this.pos.y, this.pos.z).sub(q.mesh.position).normalize().multiplyScalar(22); this.h.sound('hit', 1);
  }
  tick(dt, player) {
    const k = this.phase;
    this.theta += dt * (0.18 + 0.05 * k);
    const R = 22, tx = player.pos.x + Math.cos(this.theta) * R, tz = player.pos.z + Math.sin(this.theta) * R, ty = player.pos.y + 11;
    const f = Math.min(1, dt * 0.7); this.pos.x += (tx - this.pos.x) * f; this.pos.z += (tz - this.pos.z) * f; this.pos.y += (ty - this.pos.y) * f;
    this.yaw += wrap(Math.atan2(player.pos.x - this.pos.x, player.pos.z - this.pos.z) - this.yaw) * Math.min(1, dt * 3);
    this.root.position.set(this.pos.x, this.pos.y + Math.sin(this.t) * 0.7, this.pos.z); this.root.rotation.y = this.yaw;
    this.tents.forEach((t, i) => { t.m.rotation.z = Math.sin(this.t * 1.6 + t.ph) * 0.18; t.m.rotation.x = Math.cos(this.t * 1.3 + t.ph) * 0.18; });
    // disparo con aviso: abre los ojos y la boca
    this.fireT -= dt;
    if (this.fireT <= 0 && this.tele <= 0 && !player.dead) { this.tele = 1.1; this.h.sound('hiss', 0.7); }
    if (this.tele > 0) {
      this.tele -= dt; this.eyeL.material = this.eyeR.material = this.redEye; this.eyeL.scale.y = this.eyeR.scale.y = 2.2; this.mouth.scale.set(1.6, 3.4, 1);
      if (this.tele <= 0) {
        this.fireT = k === 1 ? 3.6 : 2.2;
        const from = V(this.pos.x, this.pos.y, this.pos.z), dir = V(player.pos.x + player.vel.x * 0.5, player.pos.y + 1, player.pos.z + player.vel.z * 0.5).sub(from);
        this.shootProj(from, dir, { speed: 13, size: 2, color: 0xffe0a0, emissive: 0xff6010, radius: 3.6, ds: 0.6, effect: ['burn', 5], life: 9 });
      }
    } else { this.eyeL.material = this.eyeR.material = this.mouth.material; this.eyeL.scale.y = this.eyeR.scale.y = 1; this.mouth.scale.set(1, 1, 1); }
  }
}

// ===================================================================== HEROBRINE
export class Herobrine extends BossBase {
  constructor(scene, hooks, pos) {
    super(scene, hooks, pos, { name: 'HEROBRINE', type: 'herobrine', maxHp: 400, hitbox: { hx: 0.5, hy: 1.0, hz: 0.5, oy: 1.0 }, scale: 1.35, burstColor: [1, 1, 1] });
    this.vel = V(); this.hw = 0.4; this.hh = 2.4; this.tpT = 5; this.boltT = 4; this.walk = 0; this.meleeT = 0; this.minionT = 8;
    const skin = this.mat(0xe0ac8c), shirt = this.mat(0x2aa5b8), pants = this.mat(0x3a3f9c), white = this.mat(0xffffff, 0, true);
    this.head = this.group(0, 1.5, 0); this.box(0.5, 0.5, 0.5, skin, 0, 0.25, 0, this.head);
    this.box(0.5, 0.14, 0.5, this.mat(0x3a2412), 0, 0.46, 0, this.head);
    for (const x of [-1, 1]) this.box(0.16, 0.1, 0.06, white, x * 0.13, 0.3, 0.26, this.head);
    this.box(0.5, 0.75, 0.25, shirt, 0, 1.125, 0);
    this.legL = this.group(-0.125, 0.75, 0); this.box(0.25, 0.75, 0.25, pants, 0, -0.375, 0, this.legL); this.legR = this.group(0.125, 0.75, 0); this.box(0.25, 0.75, 0.25, pants, 0, -0.375, 0, this.legR);
    this.armL = this.group(-0.36, 1.48, 0); this.box(0.22, 0.72, 0.22, skin, 0, -0.36, 0, this.armL); this.armR = this.group(0.36, 1.48, 0); this.box(0.22, 0.72, 0.22, skin, 0, -0.36, 0, this.armR);
    this.aura = new THREE.PointLight(0xffffff, 0, 14); this.root.add(this.aura); this.aura.position.y = 1.5;
    this.h.toast('Una figura de ojos blancos te observa…'); this.h.sound('roar', 0.6);
  }
  phaseFor(r) { return r > 0.6 ? 1 : r > 0.25 ? 2 : 3; }
  onPhase(p) {
    this.h.sound('roar', 1);
    if (p === 2) { this.h.toast('Las luces se apagan…'); this.tpT = 1; }
    if (p === 3) { this.h.toast('¡HEROBRINE LEVITA! Cuidado con sus rayos'); this.vel.y = 6; }
  }
  tick(dt, player, world) {
    const k = this.phase, dx = player.pos.x - this.pos.x, dz = player.pos.z - this.pos.z, dist = Math.hypot(dx, dz) || 1;
    this.yaw += wrap(Math.atan2(dx, dz) - this.yaw) * Math.min(1, dt * 6);
    this.h.darkness(k >= 2 ? 0.55 + Math.sin(this.t * 5) * 0.1 : 0.15);
    // persigue despacio; en fase 3 levita
    const speed = k === 1 ? 3.4 : 4.4;
    if (k < 3) {
      this.vel.x += ((dx / dist) * speed * (dist > 2.4 ? 1 : 0) - this.vel.x) * Math.min(1, dt * 6); this.vel.z += ((dz / dist) * speed * (dist > 2.4 ? 1 : 0) - this.vel.z) * Math.min(1, dt * 6);
      const r = moveBody(world, { pos: this.pos, vel: this.vel, hw: this.hw, h: this.hh }, dt);
      if ((r.hitX || r.hitZ) && r.onGround) this.vel.y = 9;
    } else {
      const ty = player.pos.y + 5, want = 14; this.pos.y += (ty - this.pos.y) * Math.min(1, dt * 1.5);
      if (dist > want) { this.pos.x += (dx / dist) * 5 * dt; this.pos.z += (dz / dist) * 5 * dt; } else if (dist < want - 4) { this.pos.x -= (dx / dist) * 4 * dt; this.pos.z -= (dz / dist) * 4 * dt; }
    }
    this.walk += dt * Math.hypot(this.vel.x, this.vel.z) * 2.4; const sw = Math.sin(this.walk) * 0.8;
    this.legL.rotation.x = sw; this.legR.rotation.x = -sw; this.armL.rotation.x = -sw; this.armR.rotation.x = k === 3 ? -1.4 : sw;
    this.root.position.set(this.pos.x, this.pos.y + (k === 3 ? Math.sin(this.t * 2) * 0.4 : 0), this.pos.z); this.root.rotation.y = this.yaw;
    this.aura.intensity = k >= 3 ? 3 + Math.sin(this.t * 12) : 0;
    // se teletransporta a tu espalda
    this.tpT -= dt;
    if (this.tpT <= 0 && !player.dead) {
      this.tpT = k === 1 ? 6.5 : k === 2 ? 4 : 5;
      this.h.burst(this.pos.x, this.pos.y + 1, this.pos.z, [1, 1, 1], 24, 5);
      const look = player.lookDir(), l = Math.hypot(look.x, look.z) || 1, bx = Math.floor(player.pos.x - (look.x / l) * 4), bz = Math.floor(player.pos.z - (look.z / l) * 4), top = world.topY(bx, bz);
      if (k < 3 && top > 0) { this.pos.set(bx + 0.5, top + 1, bz + 0.5); this.vel.set(0, 0, 0); }
      else this.pos.set(bx + 0.5, player.pos.y + 5, bz + 0.5);
      this.h.burst(this.pos.x, this.pos.y + 1, this.pos.z, [1, 1, 1], 24, 5); this.h.sound('pop', 1);
    }
    // golpe cuerpo a cuerpo
    this.meleeT -= dt;
    if (dist < 2.6 && Math.abs(player.pos.y - this.pos.y) < 2.5 && this.meleeT <= 0 && !player.dead && k < 3) { this.meleeT = 1.1; this.h.hurtPlayer(k === 1 ? 8 : 11, (dx / dist) * 7, (dz / dist) * 7); this.h.sound('hit', 1); }
    // rayos (con aviso de partículas)
    this.boltT -= dt;
    if (this.boltT <= 0 && !player.dead) {
      this.boltT = k === 1 ? 6 : k === 2 ? 3.8 : 2.4;
      const tx = player.pos.x, tz = player.pos.z; this.h.burst(tx, player.pos.y + 0.5, tz, [1, 1, 0.6], 18, 2);
      setTimeout(() => { if (!this.dead) this.h.strikeNear(tx, tz); }, 900);
      if (k === 3) { const from = V(this.pos.x, this.pos.y + 2, this.pos.z), dir = V(player.pos.x, player.pos.y + 1, player.pos.z).sub(from); this.shootProj(from, dir, { speed: 18, size: 0.9, color: 0xffffff, emissive: 0xffffff, radius: 2.2, ds: 0.45, effect: ['burn', 3] }); }
    }
    if (k >= 2) { this.minionT -= dt; if (this.minionT <= 0) { this.minionT = 11; if (this.h.minions() < 5) this.h.spawnMinion('zombie'); } }
  }
  dispose() { this.h.darkness(0); super.dispose(); }
}

// ===================================================================== REY SLIME
export class SlimeKing extends BossBase {
  constructor(scene, hooks, pos) {
    super(scene, hooks, pos, { name: 'REY SLIME', type: 'slimeking', maxHp: 260, hitbox: { hx: 2.6, hy: 2.6, hz: 2.6, oy: 2.6 }, scale: 1.4, burstColor: [0.4, 1, 0.4] });
    this.vel = V(); this.hw = 3.2; this.hh = 5.4; this.jumpT = 2.5; this.onGround = false; this.splitAt = [0.75, 0.5, 0.25]; this.squash = 1;
    const outer = new THREE.MeshLambertMaterial({ color: 0x60e060, emissive: 0x104010, transparent: true, opacity: 0.72 }); this.flashMats.push(outer);
    const inner = this.mat(0x2f9a2f, 0x083008);
    this.slime = this.group(0, 0, 0);
    this.box(5, 5, 5, outer, 0, 2.6, 0, this.slime); this.box(2.2, 2.2, 2.2, inner, 0, 2.6, 0, this.slime);
    const dk = this.mat(0x103010, 0, true);
    for (const x of [-1, 1]) this.box(0.7, 0.7, 0.2, dk, x * 1.2, 3.1, 2.55, this.slime); this.box(1.5, 0.3, 0.2, dk, 0, 1.8, 2.55, this.slime);
    const gold = this.mat(0xf0c030, 0x302000);
    this.box(3.4, 0.6, 3.4, gold, 0, 5.4, 0, this.slime);
    for (const [x, z] of [[-1.4, -1.4], [1.4, -1.4], [-1.4, 1.4], [1.4, 1.4], [0, 1.6], [0, -1.6]]) this.box(0.5, 0.9, 0.5, gold, x, 6.0, z, this.slime);
    this.h.toast('El Rey Slime salta hacia ti. ¡Se divide al perder vida!');
  }
  phaseFor(r) { return r > 0.5 ? 1 : r > 0.25 ? 2 : 3; }
  onPhase() { this.h.sound('roar', 1); this.h.toast('¡El Rey Slime salta más rápido!'); }
  onHit() { const r = this.hp / this.maxHp; while (this.splitAt.length && r < this.splitAt[0]) { this.splitAt.shift(); for (let i = 0; i < 4; i++) this.h.spawnMinion('slime'); this.h.toast('¡Se divide en slimes!'); } }
  tick(dt, player, world) {
    const k = this.phase, dx = player.pos.x - this.pos.x, dz = player.pos.z - this.pos.z, dist = Math.hypot(dx, dz) || 1;
    this.yaw += wrap(Math.atan2(dx, dz) - this.yaw) * Math.min(1, dt * 4);
    this.jumpT -= dt;
    if (this.onGround) {
      this.vel.x *= 0.8; this.vel.z *= 0.8;
      if (this.jumpT <= 0 && !player.dead) { this.jumpT = k === 1 ? 2.6 : k === 2 ? 1.8 : 1.2; const sp = Math.min(dist, 22) / 1.35 * 0.95; this.vel.y = 17; this.vel.x = (dx / dist) * sp; this.vel.z = (dz / dist) * sp; this.onGround = false; this.squash = 1.4; this.h.sound('pop', 1); }
    }
    const r = moveBody(world, { pos: this.pos, vel: this.vel, hw: this.hw, h: this.hh }, dt, 34);
    if (r.onGround && !this.onGround) { // aterriza: onda expansiva
      this.onGround = true; this.squash = 0.6; this.h.sound('explode', 0.7);
      const rad = k === 1 ? 8 : 11, d2 = Math.hypot(player.pos.x - this.pos.x, player.pos.z - this.pos.z);
      this.h.burst(this.pos.x, this.pos.y + 0.3, this.pos.z, [0.4, 1, 0.4], 36, 8);
      if (d2 < rad && Math.abs(player.pos.y - this.pos.y) < 3 && !player.dead) this.h.hurtPlayer(k === 1 ? 8 : 12, (player.pos.x - this.pos.x) / (d2 || 1) * 9, (player.pos.z - this.pos.z) / (d2 || 1) * 9);
      const cx = Math.floor(this.pos.x), cz = Math.floor(this.pos.z), cy = Math.floor(this.pos.y) - 1; // cráter
      for (let ax = -3; ax <= 3; ax++) for (let az = -3; az <= 3; az++) if (ax * ax + az * az <= 9 && world.getBlock(cx + ax, cy, cz + az) && world.getBlock(cx + ax, cy, cz + az) !== B.BEDROCK && Math.random() < 0.6) world.setBlock(cx + ax, cy, cz + az, 0);
    }
    if ((r.hitX || r.hitZ)) { this.vel.x *= -0.2; this.vel.z *= -0.2; }
    this.squash += (1 - this.squash) * Math.min(1, dt * 8);
    this.slime.scale.set(1 / Math.sqrt(this.squash), this.squash, 1 / Math.sqrt(this.squash));
    this.root.position.copy(this.pos); this.root.rotation.y = this.yaw;
    if (dist < 3.2 && Math.abs(player.pos.y - this.pos.y) < 4 && !player.dead && (this.contactT = (this.contactT || 0) - dt) <= 0) { this.contactT = 1.0; this.h.hurtPlayer(5, (dx / dist) * 6, (dz / dist) * 6); }
  }
}


// ===================================================================== REY BLAZE (Nether)
export class BlazeKing extends BossBase {
  constructor(scene, hooks, pos) {
    super(scene, hooks, pos, { name: 'REY BLAZE', type: 'blazeking', maxHp: 280, hitbox: { hx: 1.4, hy: 1.7, hz: 1.4, oy: 1.4 }, scale: 1.8, burstColor: [1, 0.6, 0.1] });
    this.theta = Math.random() * 6; this.volleyT = 3; this.waveT = 6; this.minionT = 12;
    const yel = this.mat(0xf0b020, 0xa05000), org = this.mat(0xff7a10, 0xc03000), dk = this.mat(0x201000, 0, true);
    this.head = this.box(1.5, 1.5, 1.5, yel, 0, 2.2, 0);
    for (const x of [-0.35, 0.35]) this.box(0.34, 0.26, 0.06, dk, x, 2.35, 0.77, this.body); this.box(0.7, 0.16, 0.06, dk, 0, 1.85, 0.77);
    for (let i = 0; i < 5; i++) { const a = (i / 5) * Math.PI * 2; this.box(0.25, 0.7, 0.25, org, Math.cos(a) * 0.6, 3.15, Math.sin(a) * 0.6).rotation.z = Math.cos(a) * 0.3; }
    this.core = this.box(0.8, 0.8, 0.8, this.mat(0xffe070, 0, true), 0, 1.0, 0);
    this.rings = [];
    for (let k = 0; k < 3; k++) { const g = this.group(0, 0.2 + k * 0.7, 0); for (let i = 0; i < 6; i++) { const a = (i / 6) * Math.PI * 2; this.box(0.22, 1.5, 0.22, k % 2 ? org : yel, Math.cos(a) * (1.1 + k * 0.1), 0, Math.sin(a) * (1.1 + k * 0.1), g); } this.rings.push(g); }
    this.h.toast('¡El Rey Blaze arde sobre el Nether! Salta sus ondas de fuego');
  }
  phaseFor(r) { return r > 0.5 ? 1 : 2; }
  onPhase() { this.h.sound('roar', 1); this.h.toast('¡El Rey Blaze llama a sus blazes!'); this.minionT = 1; }
  tick(dt, player, world) {
    const k = this.phase; this.theta += dt * (0.32 + 0.1 * k);
    const R = 15, tx = player.pos.x + Math.cos(this.theta) * R, tz = player.pos.z + Math.sin(this.theta) * R, ty = player.pos.y + 8 + Math.sin(this.t * 1.1) * 1.5;
    const f = Math.min(1, dt * 0.9); this.pos.x += (tx - this.pos.x) * f; this.pos.z += (tz - this.pos.z) * f; this.pos.y += (ty - this.pos.y) * f;
    this.yaw += wrap(Math.atan2(player.pos.x - this.pos.x, player.pos.z - this.pos.z) - this.yaw) * Math.min(1, dt * 4);
    this.root.position.copy(this.pos); this.root.rotation.y = this.yaw;
    this.rings.forEach((g, i) => (g.rotation.y += dt * (1.6 + i * 0.7) * (i % 2 ? -1 : 1))); this.core.scale.setScalar(1 + Math.sin(this.t * 6) * 0.15);
    this.volleyT -= dt;
    if (this.volleyT <= 0 && !player.dead) {
      this.volleyT = k === 1 ? 3.6 : 2.5; const from = V(this.pos.x, this.pos.y + 3, this.pos.z), base = V(player.pos.x, player.pos.y + 1, player.pos.z).sub(from).normalize(), n = k === 1 ? 5 : 7;
      for (let i = 0; i < n; i++) { const a = (i - (n - 1) / 2) * 0.16, d = base.clone(); d.x = base.x * Math.cos(a) - base.z * Math.sin(a); d.z = base.x * Math.sin(a) + base.z * Math.cos(a); this.shootProj(from, d, { speed: 13, size: 0.75, color: 0xffb040, emissive: 0xff5010, radius: 1.8, ds: 0.28, effect: ['burn', 4] }); }
    }
    this.waveT -= dt;
    if (this.waveT <= 0 && !player.dead) { this.waveT = k === 1 ? 7.5 : 5; this.addWave(this.pos.x, player.pos.y, this.pos.z, { max: 30, speed: 12, dmg: 9, color: 0xff6a10, effect: ['burn', 4] }); this.h.sound('roar', 0.6); }
    if (k === 2) { this.minionT -= dt; if (this.minionT <= 0) { this.minionT = 13; if (this.h.minions() < 6) { this.h.spawnMinion('blaze'); this.h.spawnMinion('blaze'); } } }
  }
}

// ===================================================================== REY PIGLIN (Nether)
export class PiglinKing extends BossBase {
  constructor(scene, hooks, pos) {
    super(scene, hooks, pos, { name: 'REY PIGLIN', type: 'piglinking', maxHp: 340, hitbox: { hx: 1.0, hy: 1.9, hz: 1.0, oy: 1.9 }, scale: 1.9, burstColor: [0.9, 0.7, 0.2] });
    this.hw = 0.9; this.hh = 7; this.state = 'walk'; this.timer = 3; this.slamT = 9; this.cryT = 12; this.axeT = 5; this.spinT = 7; this.walkA = 0;
    const skin = this.mat(0xc98a78), gold = this.mat(0xe8c040, 0x302400), brown = this.mat(0x5a4a38), dk = this.mat(0x7a6a50), red = this.mat(0xff3020, 0, true);
    this.legL = this.group(-0.28, 1.5, 0); this.box(0.5, 1.5, 0.5, brown, 0, -0.75, 0, this.legL); this.legR = this.group(0.28, 1.5, 0); this.box(0.5, 1.5, 0.5, brown, 0, -0.75, 0, this.legR);
    this.box(1.2, 1.5, 0.6, dk, 0, 2.25, 0); this.box(1.3, 0.35, 0.7, gold, 0, 2.85, 0); this.box(1.25, 0.25, 0.65, gold, 0, 1.7, 0);
    this.armL = this.group(-0.82, 2.85, 0); this.box(0.45, 1.5, 0.45, skin, 0, -0.75, 0, this.armL);
    this.armR = this.group(0.82, 2.85, 0); this.box(0.45, 1.5, 0.45, skin, 0, -0.75, 0, this.armR);
    this.box(0.2, 2.2, 0.2, this.mat(0x6a4a2a), 0, -1.4, 0.4, this.armR); this.box(1.1, 0.7, 0.18, this.mat(0x9a9a9a), 0.5, -2.2, 0.4, this.armR); // hacha
    this.head = this.group(0, 3.35, 0); this.box(1.2, 1.0, 1.0, skin, 0, 0.1, 0, this.head); this.box(0.7, 0.45, 0.25, this.mat(0xb0705f), 0, -0.05, 0.6, this.head);
    for (const x of [-1, 1]) { this.box(0.14, 0.14, 0.05, red, x * 0.3, 0.3, 0.52, this.head); this.box(0.25, 0.6, 0.12, skin, x * 0.78, 0.35, 0, this.head).rotation.z = x * 0.6; this.box(0.12, 0.3, 0.1, this.mat(0xf0e8d0), x * 0.2, -0.3, 0.7, this.head); }
    this.box(1.3, 0.3, 1.1, gold, 0, 0.65, 0, this.head); for (let i = -1; i <= 1; i++) this.box(0.25, 0.4, 0.2, gold, i * 0.45, 0.95, 0, this.head);
    this.h.toast('El Rey Piglin golpea su hacha: ¡oro y furia!');
  }
  phaseFor(r) { return r > 0.5 ? 1 : 2; }
  onPhase() { this.h.sound('roar', 1); this.h.toast('¡El Rey Piglin gira como un torbellino!'); this.spinT = 2; }
  tick(dt, player, world) {
    const k = this.phase, dx = player.pos.x - this.pos.x, dz = player.pos.z - this.pos.z, dist = Math.hypot(dx, dz) || 1;
    this.timer -= dt; this.slamT -= dt; this.cryT -= dt; this.axeT -= dt; this.spinT -= dt;
    if (this.state !== 'spin') this.yaw += wrap(Math.atan2(dx, dz) - this.yaw) * Math.min(1, dt * 4);
    let speed = k === 1 ? 3.4 : 4.4;
    if (this.state === 'walk') {
      if (this.timer <= 0 && dist < 6.5 && !player.dead) { this.state = 'windup'; this.timer = 0.65; }
      else if (this.slamT <= 0 && dist < 22 && this.onGround) { this.vel.y = 14; this.vel.x = (dx / dist) * Math.min(dist, 14) * 0.7; this.vel.z = (dz / dist) * Math.min(dist, 14) * 0.7; this.state = 'slam'; this.slamT = k === 1 ? 9 : 6; this.slammed = false; this.h.sound('roar', 0.7); }
      else if (this.spinT <= 0 && k === 2 && dist < 8) { this.state = 'spin'; this.timer = 1.8; this.spinT = 7; this.spinHit = 0; }
      else if (this.axeT <= 0 && dist > 7 && !player.dead) { this.axeT = k === 1 ? 5.5 : 3.8; const from = V(this.pos.x, this.pos.y + 4, this.pos.z); this.shootProj(from, V(player.pos.x, player.pos.y + 1, player.pos.z).sub(from), { speed: 15, size: 1.0, color: 0xe8c040, emissive: 0x806010, radius: 1.5, ds: 0.22 }); this.armR.rotation.x = -2.4; }
      if (this.cryT <= 0) { this.cryT = 14; this.h.sound('roar', 1); this.h.toast('¡El Rey Piglin llama a su guardia!'); if (this.h.minions() < 6) for (let i = 0; i < 3; i++) this.h.spawnMinion('piglin'); }
    } else if (this.state === 'windup') {
      speed = 0; this.armR.rotation.x = -2.6 * Math.min(1, (0.65 - this.timer) * 2);
      if (this.timer <= 0) { this.state = 'walk'; this.timer = k === 1 ? 2.6 : 1.8; if (dist < 7.5 && !player.dead) this.h.hurtPlayer(13, (dx / dist) * 12, (dz / dist) * 12); this.h.sound('hit', 1); this.armR.rotation.x = 0.6; }
    } else if (this.state === 'slam') {
      speed = 0; if (this.onGround && this.vel.y <= 0 && this.t > 0.2) { this.state = 'walk'; this.timer = 1.5; this.h.burst(this.pos.x, this.pos.y + 0.4, this.pos.z, [0.6, 0.4, 0.3], 30, 8); this.addWave(this.pos.x, this.pos.y, this.pos.z, { max: 14, speed: 12, dmg: 9, color: 0xe8c040 }); this.h.sound('explode', 0.8); }
    } else if (this.state === 'spin') {
      speed = 1.2; this.yaw += dt * 14; this.spinHit -= dt; this.armR.rotation.x = -1.6;
      if (dist < 5 && this.spinHit <= 0 && !player.dead) { this.spinHit = 0.45; this.h.hurtPlayer(7, (dx / dist) * 9, (dz / dist) * 9); }
      if (this.timer <= 0) this.state = 'walk';
    }
    const r = this.walk(dt, world, dx, dz, dist, speed);
    this.walkA += dt * Math.hypot(this.vel.x, this.vel.z) * 1.4; const sw = Math.sin(this.walkA) * 0.6;
    this.legL.rotation.x = sw; this.legR.rotation.x = -sw; this.armL.rotation.x = -sw * 0.7; if (this.state === 'walk') this.armR.rotation.x += (sw * 0.7 - this.armR.rotation.x) * Math.min(1, dt * 6);
    this.root.position.copy(this.pos); this.root.rotation.y = this.yaw;
  }
}

// ===================================================================== ENDERMAN TITÁN (End)
export class EnderTitan extends BossBase {
  constructor(scene, hooks, pos) {
    super(scene, hooks, pos, { name: 'ENDERMAN TITÁN', type: 'endertitan', maxHp: 380, hitbox: { hx: 0.45, hy: 1.5, hz: 0.45, oy: 1.5 }, scale: 3.6, burstColor: [0.7, 0.2, 1] });
    this.hw = 1.2; this.hh = 10; this.tpT = 4; this.rockT = 3; this.sweepT = 0; this.mite = 12; this.gaze = 0; this.gazeCool = 0;
    const c = this.mat(0x120a18), eye = this.mat(0xe070ff, 0, true);
    this.legL = this.group(-0.12, 1.5, 0); this.box(0.18, 1.5, 0.18, c, 0, -0.75, 0, this.legL); this.legR = this.group(0.12, 1.5, 0); this.box(0.18, 1.5, 0.18, c, 0, -0.75, 0, this.legR);
    this.box(0.5, 0.95, 0.26, c, 0, 1.98, 0);
    this.armL = this.group(-0.34, 2.45, 0); this.box(0.13, 1.35, 0.13, c, 0, -0.67, 0, this.armL); this.armR = this.group(0.34, 2.45, 0); this.box(0.13, 1.35, 0.13, c, 0, -0.67, 0, this.armR);
    this.head = this.group(0, 2.7, 0); this.box(0.5, 0.42, 0.5, c, 0, 0, 0, this.head); for (const x of [-0.13, 0.13]) this.box(0.15, 0.06, 0.03, eye, x, 0.02, 0.26, this.head);
    this.jaw = this.group(0, -0.22, 0, this.head); this.box(0.44, 0.1, 0.44, c, 0, 0, 0, this.jaw);
    this.h.toast('El Enderman Titán se alza… ¡no le mires a los ojos!');
  }
  phaseFor(r) { return r > 0.5 ? 1 : 2; }
  onPhase() { this.h.sound('roar', 1); this.h.toast('¡El Titán grita y convoca endermites!'); this.mite = 1; }
  tick(dt, player, world) {
    const k = this.phase, dx = player.pos.x - this.pos.x, dz = player.pos.z - this.pos.z, dist = Math.hypot(dx, dz) || 1;
    this.tpT -= dt; this.rockT -= dt; this.sweepT -= dt; this.mite -= dt; this.gazeCool -= dt;
    this.yaw += wrap(Math.atan2(dx, dz) - this.yaw) * Math.min(1, dt * 4);
    // teletransporte cerca del jugador
    if (this.tpT <= 0 && !player.dead) {
      this.tpT = k === 1 ? 5.2 : 3.4; this.h.burst(this.pos.x, this.pos.y + 4, this.pos.z, [0.8, 0.3, 1], 30, 6);
      const a = Math.random() * Math.PI * 2, d = 7 + Math.random() * 3, nx = Math.floor(player.pos.x + Math.cos(a) * d), nz = Math.floor(player.pos.z + Math.sin(a) * d), top = world.topY(nx, nz);
      if (top > 0) { this.pos.set(nx + 0.5, top + 1, nz + 0.5); this.vel.set(0, 0, 0); this.sweepT = 0.8; this.h.burst(this.pos.x, this.pos.y + 4, this.pos.z, [0.8, 0.3, 1], 30, 6); this.h.sound('pop', 1); }
    }
    // barrido con el brazo tras aparecer
    if (this.sweepT > 0) { this.armR.rotation.x = -2.2; this.armL.rotation.x = -2.2; if (this.sweepT - dt <= 0 && dist < 9 && !player.dead) { this.h.hurtPlayer(12, (dx / dist) * 11, (dz / dist) * 11); this.h.sound('hit', 1); } }
    else { this.armR.rotation.x += (Math.sin(this.t * 1.5) * 0.1 - this.armR.rotation.x) * Math.min(1, dt * 5); this.armL.rotation.x = this.armR.rotation.x; }
    // rocas de piedra del End
    if (this.rockT <= 0 && dist > 5 && !player.dead) {
      this.rockT = k === 1 ? 3.8 : 2.6; const n = k === 1 ? 1 : 2;
      for (let i = 0; i < n; i++) { const from = V(this.pos.x, this.pos.y + 9, this.pos.z), dir = V(player.pos.x + player.vel.x * 0.5, player.pos.y + 1, player.pos.z + player.vel.z * 0.5).sub(from); dir.x += rnd(-0.08, 0.08) * i; this.shootProj(from, dir, { speed: 15, size: 1.8, color: 0xd8d8a0, emissive: 0x302040, radius: 2.4, ds: 0.42 }); }
      this.jaw.rotation.x = 0.8;
    } else this.jaw.rotation.x *= 0.92;
    // mirada: si el jugador lo mira a los ojos demasiado tiempo, ¡chilla!
    const look = player.lookDir(), tx = this.pos.x - player.pos.x, ty = this.pos.y + 9.4 - (player.pos.y + 1.6), tz = this.pos.z - player.pos.z, tl = Math.hypot(tx, ty, tz) || 1;
    if ((look.x * tx + look.y * ty + look.z * tz) / tl > 0.985 && tl < 45) this.gaze += dt; else this.gaze = Math.max(0, this.gaze - dt * 2);
    if (this.gaze > 1.6 && this.gazeCool <= 0 && !player.dead) { this.gaze = 0; this.gazeCool = 6; this.h.sound('roar', 1); this.h.hurtPlayer(5, 0, 0); this.h.effect('levitate', 3); this.h.toast('¡Su mirada te eleva!'); }
    if (k === 2 && this.mite <= 0) { this.mite = 12; if (this.h.minions() < 7) for (let i = 0; i < 3; i++) this.h.spawnMinion('endermite'); }
    this.walk(dt, world, dx, dz, dist, dist > 14 ? 3.5 : 0);
    const sw = Math.sin(this.t * 3) * 0.25; this.legL.rotation.x = sw; this.legR.rotation.x = -sw;
    this.root.position.copy(this.pos); this.root.rotation.y = this.yaw;
  }
}

// ===================================================================== SEÑOR DEL VACÍO (End)
export class VoidLord extends BossBase {
  constructor(scene, hooks, pos) {
    super(scene, hooks, pos, { name: 'SEÑOR DEL VACÍO', type: 'voidlord', maxHp: 300, hitbox: { hx: 2.0, hy: 2.2, hz: 2.0, oy: 0 }, scale: 1.8, burstColor: [0.5, 0.1, 0.9] });
    this.rifts = []; this.riftT = 3; this.laserT = 6; this.charge = 0; this.tpT = 9; this.minionT = 14;
    const dk = this.mat(0x07040e), glow = this.mat(0xb050ff, 0, true), mid = this.mat(0x241038, 0x180830);
    const core = this.group(0, 0, 0); core.rotation.set(0.6, 0.6, 0); this.core = core;
    this.box(2.4, 2.4, 2.4, dk, 0, 0, 0, core); this.box(2.6, 0.14, 2.6, glow, 0, 0, 0, core); this.box(0.14, 2.6, 2.6, glow, 0, 0, 0, core); this.box(2.6, 2.6, 0.14, glow, 0, 0, 0, core);
    this.eye = this.box(0.9, 0.9, 0.2, this.mat(0xff60ff, 0, true), 0, 0, 1.3); this.body.add(this.eye);
    this.orbs = []; for (let i = 0; i < 5; i++) { const o = this.box(0.5, 1.1, 0.5, mid, 0, 0, 0); o.rotation.z = 0.5; this.orbs.push(o); }
    this.laser = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.1, 1, 6), new THREE.MeshBasicMaterial({ color: 0xd070ff, transparent: true, opacity: 0, fog: false, depthWrite: false })); scene.add(this.laser); this.extra.push(this.laser);
    this.h.toast('El Señor del Vacío abre grietas bajo tus pies… ¡muévete!');
  }
  phaseFor(r) { return r > 0.5 ? 1 : 2; }
  onPhase() { this.h.sound('roar', 1); this.h.toast('¡El vacío se desborda! Su gravedad te atrae'); }
  tick(dt, player, world) {
    const k = this.phase, dx = player.pos.x - this.pos.x, dz = player.pos.z - this.pos.z, hd = Math.hypot(dx, dz) || 1;
    const want = 16; if (hd > want + 2) { this.pos.x += (dx / hd) * 4 * dt; this.pos.z += (dz / hd) * 4 * dt; } else if (hd < want - 5) { this.pos.x -= (dx / hd) * 3 * dt; this.pos.z -= (dz / hd) * 3 * dt; }
    this.pos.y += (player.pos.y + 7 - this.pos.y) * Math.min(1, dt * 0.9);
    this.yaw += wrap(Math.atan2(dx, dz) - this.yaw) * Math.min(1, dt * 3);
    this.root.position.set(this.pos.x, this.pos.y + Math.sin(this.t * 1.2) * 0.6, this.pos.z); this.root.rotation.y = this.yaw;
    this.core.rotation.y += dt * 0.8; this.core.rotation.x += dt * 0.3;
    this.orbs.forEach((o, i) => { const a = this.t * 1.1 + (i / 5) * Math.PI * 2; o.position.set(Math.cos(a) * 2.8, Math.sin(this.t * 2 + i) * 0.6, Math.sin(a) * 2.8); o.rotation.y = a; });
    // grietas del vacío bajo el jugador
    this.riftT -= dt;
    if (this.riftT <= 0 && !player.dead) {
      this.riftT = k === 1 ? 4.2 : 2.8; const n = k === 1 ? 1 : 2;
      for (let i = 0; i < n; i++) {
        const x = player.pos.x + (i ? rnd(-5, 5) : 0), z = player.pos.z + (i ? rnd(-5, 5) : 0);
        const m = new THREE.Mesh(new THREE.CylinderGeometry(3, 3, 0.25, 24), new THREE.MeshBasicMaterial({ color: 0x8030ff, transparent: true, opacity: 0.25, fog: false, depthWrite: false }));
        const ty = world.topY(Math.floor(x), Math.floor(z)); m.position.set(x, (ty > 0 ? ty : player.pos.y - 1) + 1.2, z); this.scene.add(m); this.rifts.push({ x, z, y: m.position.y, t: -1.2, m, tick: 0 });
      }
    }
    for (let i = this.rifts.length - 1; i >= 0; i--) {
      const r = this.rifts[i]; r.t += dt;
      if (r.t < 0) { r.m.material.opacity = 0.18 + Math.sin(this.t * 14) * 0.08; }
      else {
        r.m.material.opacity = 0.7; r.m.material.color.setHex(0x1a0830); r.tick -= dt;
        if (r.tick <= 0) { r.tick = 0.45; this.h.burst(r.x + rnd(-2, 2), r.y, r.z + rnd(-2, 2), [0.6, 0.2, 1], 5, 3); }
        if (Math.hypot(player.pos.x - r.x, player.pos.z - r.z) < 3.1 && Math.abs(player.pos.y + 0.5 - r.y) < 2.2 && !player.dead) { r.dmgT = (r.dmgT || 0) - dt; if (r.dmgT <= 0) { r.dmgT = 0.5; this.h.hurtPlayer(3, 0, 0); this.h.effect('levitate', 2); } }
        if (r.t > 5) { this.scene.remove(r.m); this.rifts.splice(i, 1); }
      }
    }
    // láser con carga
    this.laserT -= dt;
    const from = V(this.pos.x, this.pos.y, this.pos.z), tgt = V(player.pos.x, player.pos.y + 1, player.pos.z), dir = tgt.clone().sub(from), L = dir.length(); dir.normalize();
    if (this.charge > 0) {
      const total = k === 1 ? 2.1 : 1.5, pg = 1 - this.charge / total; this.charge -= dt;
      this.laser.material.opacity = 0.2 + pg * 0.7; this.laser.scale.set(0.5 + pg * 3, L, 0.5 + pg * 3); this.laser.position.copy(from).add(tgt).multiplyScalar(0.5); this.laser.quaternion.setFromUnitVectors(V(0, 1, 0), dir);
      if (this.charge <= 0) { this.laser.material.opacity = 0; this.h.sound('explode', 0.7); if (!world.raycast(from, dir, L) && !player.dead) this.h.hurtPlayer(10, dir.x * 6, dir.z * 6); this.laserT = k === 1 ? 6.5 : 4; }
    } else { this.laser.material.opacity = 0; if (this.laserT <= 0 && L < 45 && !player.dead) { this.charge = k === 1 ? 2.1 : 1.5; this.h.sound('hiss', 0.7); } }
    // gravedad (fase 2) y teletransporte
    if (k === 2 && L < 36) { player.push.x = (this.pos.x - player.pos.x) / hd * 3.2; player.push.z = (this.pos.z - player.pos.z) / hd * 3.2; }
    this.tpT -= dt;
    if (this.tpT <= 0 && !player.dead) { this.tpT = k === 1 ? 10 : 7; this.h.burst(this.pos.x, this.pos.y, this.pos.z, [0.6, 0.2, 1], 30, 6); const a = Math.random() * Math.PI * 2; this.pos.set(player.pos.x + Math.cos(a) * 16, player.pos.y + 8, player.pos.z + Math.sin(a) * 16); this.h.burst(this.pos.x, this.pos.y, this.pos.z, [0.6, 0.2, 1], 30, 6); this.h.sound('pop', 1); }
    if (k === 2) { this.minionT -= dt; if (this.minionT <= 0) { this.minionT = 15; if (this.h.minions() < 6) { this.h.spawnMinion('shulker'); this.h.spawnMinion('shulker'); } } }
  }
  dispose() { for (const r of this.rifts) this.scene.remove(r.m); this.rifts = []; super.dispose(); }
}

// ===================================================================== CREEPER TITÁN (Overworld)
export class CreeperTitan extends BossBase {
  constructor(scene, hooks, pos) {
    super(scene, hooks, pos, { name: 'CREEPER TITÁN', type: 'creepertitan', maxHp: 320, hitbox: { hx: 0.6, hy: 1.8, hz: 0.6, oy: 1.8 }, scale: 2.6, burstColor: [0.3, 0.9, 0.3] });
    this.hw = 1.15; this.hh = 9; this.fuse = 0; this.stun = 0; this.mT = 12; this.walkA = 0;
    this.green = this.mat(0x4ea84e, 0x103010); this.green2 = this.mat(0x3e8e3e, 0x082008);
    this.legs = [[-0.28, 0.3], [0.28, 0.3], [-0.28, -0.3], [0.28, -0.3]].map(([x, z]) => { const g = this.group(x, 0.9, z); this.box(0.5, 0.9, 0.5, this.green2, 0, -0.45, 0, g); return g; });
    this.box(1.0, 1.6, 0.6, this.green, 0, 1.7, 0);
    const c = document.createElement('canvas'); c.width = c.height = 8; const x = c.getContext('2d'); x.fillStyle = '#4ea84e'; x.fillRect(0, 0, 8, 8); x.fillStyle = '#0c1a0c'; x.fillRect(1, 2, 2, 2); x.fillRect(5, 2, 2, 2); x.fillRect(3, 4, 2, 2); x.fillRect(2, 5, 1, 2); x.fillRect(5, 5, 1, 2);
    const t = new THREE.CanvasTexture(c); t.magFilter = THREE.NearestFilter; t.minFilter = THREE.NearestFilter; t.generateMipmaps = false; t.colorSpace = THREE.SRGBColorSpace;
    const faceM = new THREE.MeshLambertMaterial({ map: t, emissive: 0x103010 }); this.flashMats.push(faceM);
    const head = new THREE.Mesh(new THREE.BoxGeometry(1.0, 1.0, 1.0), [this.green, this.green, this.green, this.green, faceM, this.green]); head.position.set(0, 3.1, 0); this.body.add(head); this.head = head;
    this.h.toast('¡El Creeper Titán sisea! Aléjate cuando se hinche');
  }
  phaseFor(r) { return r > 0.5 ? 1 : 2; }
  onPhase() { this.h.sound('roar', 1); this.h.toast('¡Un rayo lo carga! Su explosión será colosal'); this.h.strikeNear(this.pos.x, this.pos.z); this.green.emissive.setHex(0x1030ff); this.green2.emissive.setHex(0x0820c0); this.flashMats.forEach((m) => (m.userData.baseE = undefined)); }
  damageMul() { return this.stun > 0 ? 1.8 : 1; }
  tick(dt, player, world) {
    const k = this.phase, dx = player.pos.x - this.pos.x, dz = player.pos.z - this.pos.z, dist = Math.hypot(dx, dz) || 1;
    this.yaw += wrap(Math.atan2(dx, dz) - this.yaw) * Math.min(1, dt * 3); this.mT -= dt;
    let speed = k === 1 ? 2.8 : 3.6;
    if (this.stun > 0) { this.stun -= dt; speed = 0; this.root.rotation.z = Math.sin(this.t * 20) * 0.02; }
    else if (this.fuse > 0) {
      this.fuse -= dt; speed = 0.8; const total = k === 1 ? 3.2 : 2.2, pg = 1 - this.fuse / total;
      this.body.scale.setScalar(1 + pg * 0.28); this.flash = Math.floor(this.fuse * 10) % 2 === 0 ? 0.12 : 0; if (Math.floor(pg * 20) % 4 === 0) this.h.sound('hiss', 0.3);
      if (this.fuse <= 0) {
        this.body.scale.setScalar(1); this.h.explode(this.pos.x, this.pos.y + 3.2, this.pos.z, k === 1 ? 9 : 12, 0.95); this.h.burst(this.pos.x, this.pos.y + 3, this.pos.z, [1, 0.7, 0.2], 60, 12);
        this.stun = 3.6; this.h.toast('¡Está aturdido! Golpéalo ahora');
      }
    } else if (dist < 15 && !player.dead) this.fuse = k === 1 ? 3.2 : 2.2;
    this.walk(dt, world, dx, dz, dist, speed);
    this.walkA += dt * Math.hypot(this.vel.x, this.vel.z) * 1.1; const sw = Math.sin(this.walkA) * 0.5; this.legs.forEach((l, i) => (l.rotation.x = i % 2 ? -sw : sw));
    if (this.mT <= 0 && this.stun <= 0) { this.mT = 14; if (this.h.minions() < 6) { this.h.spawnMinion('creeper'); this.h.spawnMinion('creeper'); } }
    this.root.position.copy(this.pos); this.root.rotation.y = this.yaw;
  }
}

// ===================================================================== GÓLEM COLOSAL (Overworld)
export class IronColossus extends BossBase {
  constructor(scene, hooks, pos) {
    super(scene, hooks, pos, { name: 'GÓLEM COLOSAL', type: 'colossus', maxHp: 420, hitbox: { hx: 1.8, hy: 2.1, hz: 0.8, oy: 2.1 }, scale: 2.0, burstColor: [0.8, 0.8, 0.8] });
    this.hw = 1.5; this.hh = 8; this.state = 'walk'; this.timer = 3; this.poundT = 6; this.rockT = 7; this.novaT = 9; this.walkA = 0;
    const iron = this.mat(0xc8c8c8, 0x101010), iron2 = this.mat(0x9a9a9a), vine = this.mat(0x4a7a3a);
    this.legL = this.group(-0.4, 1.4, 0); this.box(0.7, 1.4, 0.7, iron2, 0, -0.7, 0, this.legL); this.legR = this.group(0.4, 1.4, 0); this.box(0.7, 1.4, 0.7, iron2, 0, -0.7, 0, this.legR);
    this.box(1.9, 1.6, 1.1, iron, 0, 2.2, 0); this.box(1.2, 0.8, 0.9, iron2, 0, 1.4, 0); for (const [x, y] of [[-0.5, 2.6], [0.6, 2.0]]) this.box(0.4, 0.8, 0.12, vine, x, y, 0.58);
    this.armL = this.group(-1.2, 2.9, 0); this.box(0.6, 2.4, 0.6, iron, 0, -1.2, 0, this.armL); this.box(0.8, 0.8, 0.8, iron2, 0, -2.5, 0, this.armL);
    this.armR = this.group(1.2, 2.9, 0); this.box(0.6, 2.4, 0.6, iron, 0, -1.2, 0, this.armR); this.box(0.8, 0.8, 0.8, iron2, 0, -2.5, 0, this.armR);
    this.head = this.group(0, 3.4, 0.1); this.box(0.8, 0.9, 0.8, iron, 0, 0.3, 0, this.head); this.box(0.2, 0.4, 0.25, iron2, 0, 0.2, 0.5, this.head);
    this.eyes = [-1, 1].map((x) => this.box(0.18, 0.1, 0.04, this.mat(0xf0f080, 0, true), x * 0.2, 0.5, 0.42, this.head));
    this.h.toast('El Gólem Colosal despierta: ¡salta sus ondas de choque!');
  }
  phaseFor(r) { return r > 0.5 ? 1 : 2; }
  onPhase() { this.h.sound('roar', 1); this.h.toast('¡Sus ojos arden en rojo!'); this.eyes.forEach((e) => e.material.color.setHex(0xff2020)); this.novaT = 1.5; }
  damageMul() { return 0.85; }
  tick(dt, player, world) {
    const k = this.phase, dx = player.pos.x - this.pos.x, dz = player.pos.z - this.pos.z, dist = Math.hypot(dx, dz) || 1;
    this.timer -= dt; this.poundT -= dt; this.rockT -= dt; this.novaT -= dt;
    this.yaw += wrap(Math.atan2(dx, dz) - this.yaw) * Math.min(1, dt * 3);
    let speed = k === 1 ? 2.4 : 3.2;
    if (this.state === 'walk') {
      if (this.timer <= 0 && dist < 8.5 && !player.dead) { this.state = 'punch'; this.timer = 0.8; }
      else if (this.poundT <= 0 && dist < 18) { this.state = 'pound'; this.timer = 1.1; this.poundT = k === 1 ? 7 : 4.5; }
      else if (this.rockT <= 0 && dist > 9) { this.rockT = k === 1 ? 7 : 4.5; const from = V(this.pos.x, this.pos.y + 6, this.pos.z); this.shootProj(from, V(player.pos.x, player.pos.y + 1, player.pos.z).sub(from), { speed: 14, size: 1.6, color: 0x8a8a8a, emissive: 0x202020, radius: 2.2, ds: 0.4 }); this.armR.rotation.x = -2.6; }
      else if (k === 2 && this.novaT <= 0 && this.onGround) { this.novaT = 8; this.addWave(this.pos.x, this.pos.y, this.pos.z, { max: 20, speed: 13, dmg: 9, color: 0xe0e0ff }); this.h.sound('roar', 0.7); }
    } else if (this.state === 'punch') {
      speed = 0; this.armR.rotation.x = -2.8 * Math.min(1, (0.8 - this.timer) * 1.8);
      if (this.timer <= 0) { this.state = 'walk'; this.timer = k === 1 ? 2.4 : 1.6; if (dist < 9.5 && !player.dead) this.h.hurtPlayer(14, (dx / dist) * 13, (dz / dist) * 13); this.h.sound('hit', 1); this.armR.rotation.x = 0.8; }
    } else if (this.state === 'pound') {
      speed = 0; this.armL.rotation.x = this.armR.rotation.x = -3.0 * Math.min(1, (1.1 - this.timer) * 1.2);
      if (this.timer <= 0) { this.state = 'walk'; this.timer = 1.4; this.armL.rotation.x = this.armR.rotation.x = 0.7; this.h.sound('explode', 0.8); this.h.burst(this.pos.x, this.pos.y + 0.4, this.pos.z, [0.6, 0.6, 0.6], 36, 9); this.addWave(this.pos.x, this.pos.y, this.pos.z, { max: k === 1 ? 16 : 22, speed: 12, dmg: 10, color: 0xffffff }); }
    }
    this.walk(dt, world, dx, dz, dist, speed);
    this.walkA += dt * Math.hypot(this.vel.x, this.vel.z) * 1.3; const sw = Math.sin(this.walkA) * 0.5;
    this.legL.rotation.x = sw; this.legR.rotation.x = -sw;
    if (this.state === 'walk') { this.armL.rotation.x += (-sw * 0.6 - this.armL.rotation.x) * Math.min(1, dt * 5); this.armR.rotation.x += (sw * 0.6 - this.armR.rotation.x) * Math.min(1, dt * 5); }
    this.root.position.copy(this.pos); this.root.rotation.y = this.yaw;
  }
}

// ===================================================================== GOKU (crossover)
export class Goku extends BossBase {
  constructor(scene, hooks, pos) {
    super(scene, hooks, pos, { name: 'GOKU', type: 'goku', maxHp: 450, hitbox: { hx: 0.5, hy: 1.0, hz: 0.4, oy: 1.0 }, scale: 1.6, burstColor: [1, 0.8, 0.2] });
    this.hw = 0.5; this.hh = 3.2; this.state = 'walk'; this.timer = 2; this.kameT = 7; this.tpT = 5; this.comboT = 3; this.genkiT = 20; this.walkA = 0; this.beam = null; this.aim = V();
    const skin = this.mat(0xf0c090), orange = this.mat(0xf07a10), blue = this.mat(0x2050c0), dk = this.mat(0x15151a), hair = this.mat(0x15151a);
    this.hairMat = hair; this.hairBlk = [];
    this.legL = this.group(-0.2, 0.95, 0); this.box(0.34, 0.95, 0.38, orange, 0, -0.48, 0, this.legL); this.legR = this.group(0.2, 0.95, 0); this.box(0.34, 0.95, 0.38, orange, 0, -0.48, 0, this.legR);
    this.box(0.36, 0.2, 0.42, blue, -0.2, 0.1, 0.02); this.box(0.36, 0.2, 0.42, blue, 0.2, 0.1, 0.02);
    this.box(0.8, 0.8, 0.45, orange, 0, 1.4, 0); this.box(0.82, 0.14, 0.47, blue, 0, 1.05, 0);
    this.armL = this.group(-0.58, 1.72, 0); this.box(0.3, 0.7, 0.3, orange, 0, -0.35, 0, this.armL); this.box(0.28, 0.4, 0.28, skin, 0, -0.9, 0, this.armL);
    this.armR = this.group(0.58, 1.72, 0); this.box(0.3, 0.7, 0.3, orange, 0, -0.35, 0, this.armR); this.box(0.28, 0.4, 0.28, skin, 0, -0.9, 0, this.armR);
    this.head = this.group(0, 2.0, 0); this.box(0.52, 0.52, 0.5, skin, 0, 0.26, 0, this.head);
    for (const x of [-0.13, 0.13]) { this.box(0.1, 0.07, 0.04, dk, x, 0.3, 0.26, this.head); this.box(0.14, 0.04, 0.04, dk, x, 0.38, 0.26, this.head); }
    this.box(0.54, 0.2, 0.52, hair, 0, 0.6, -0.02, this.head);
    for (let i = 0; i < 7; i++) { const a = (i - 3) * 0.28; const sp = this.box(0.16, 0.6 + (i % 2) * 0.3, 0.16, hair, (i - 3) * 0.1, 0.9, (i % 3 - 1) * 0.08, this.head); sp.rotation.z = -a * 0.6; sp.rotation.x = (i % 3 - 1) * 0.2; this.hairBlk.push(sp); }
    this.aura = new THREE.Mesh(new THREE.SphereGeometry(1.5, 12, 10), new THREE.MeshBasicMaterial({ color: 0xffe040, transparent: true, opacity: 0, fog: false, depthWrite: false })); this.aura.position.y = 1.4; this.body.add(this.aura);
    this.h.toast('¡GOKU quiere pelear! Esquiva el Kamehameha: ¡salta o rodea!');
  }
  phaseFor(r) { return r > 0.6 ? 1 : r > 0.25 ? 2 : 3; }
  onPhase(k) {
    this.h.sound('roar', 1);
    if (k === 2) { this.h.toast('¡SUPER SAIYAJIN!'); this.hairMat.color.setHex(0xffd820); this.hairMat.emissive.setHex(0x805800); this.aura.material.opacity = 0.22; this.h.explode(this.pos.x, this.pos.y + 1, this.pos.z, 3, 0.1); }
    else { this.h.toast('¡GENKI DAMA! Aguanta o golpéalo antes de que la lance'); this.genkiT = 0.5; }
  }
  tele(player) { const a = Math.random() * 6.28, d = 4.5; this.h.burst(this.pos.x, this.pos.y + 1.5, this.pos.z, [0.6, 0.9, 1], 18, 5); this.pos.x = player.pos.x + Math.cos(a) * d; this.pos.z = player.pos.z + Math.sin(a) * d; this.pos.y = player.pos.y + 0.5; this.vel.set(0, 0, 0); this.h.burst(this.pos.x, this.pos.y + 1.5, this.pos.z, [0.6, 0.9, 1], 18, 5); this.h.sound('hiss', 0.8); }
  tick(dt, player, world) {
    const k = this.phase, dx = player.pos.x - this.pos.x, dz = player.pos.z - this.pos.z, dist = Math.hypot(dx, dz) || 1;
    this.timer -= dt; this.kameT -= dt; this.tpT -= dt; this.comboT -= dt; this.genkiT -= dt;
    if (this.state !== 'kame') this.yaw += wrap(Math.atan2(dx, dz) - this.yaw) * Math.min(1, dt * 6);
    let speed = k === 1 ? 4.2 : 5.6;
    if (this.state === 'walk') {
      if (k === 3 && this.genkiT <= 0 && !player.dead) { this.state = 'genki'; this.timer = 4.5; this.genkiT = 18; this.ball = new THREE.Mesh(new THREE.SphereGeometry(1, 14, 12), new THREE.MeshBasicMaterial({ color: 0x80c8ff, fog: false })); this.ball.position.set(this.pos.x, this.pos.y + 7, this.pos.z); this.scene.add(this.ball); this.extra.push(this.ball); this.vel.set(0, 0, 0); }
      else if (this.kameT <= 0 && dist > 5 && !player.dead) { this.state = 'kame'; this.timer = 1.5; this.kameT = k === 1 ? 8 : 5.5; this.h.sound('hiss', 1); }
      else if (this.tpT <= 0 && dist > 3) { this.tpT = k === 1 ? 6 : 3.5; this.tele(player); }
      else if (this.comboT <= 0 && dist < 3.8 && !player.dead) { this.state = 'combo'; this.timer = 1.2; this.hitN = 0; this.comboT = k === 1 ? 4 : 2.5; }
    } else if (this.state === 'kame') {
      speed = 0; const prog = 1 - this.timer / 1.5;
      this.armL.rotation.x = this.armR.rotation.x = -1.4; this.aim.set(dx, player.pos.y + 1 - (this.pos.y + 2.6), dz).normalize();
      if (!this.beam) { this.beam = new THREE.Mesh(new THREE.CylinderGeometry(1, 1, 1, 10, 1, true), new THREE.MeshBasicMaterial({ color: 0x70c8ff, transparent: true, opacity: 0.55, fog: false, depthWrite: false, side: THREE.DoubleSide })); this.scene.add(this.beam); this.charge = new THREE.Mesh(new THREE.SphereGeometry(1, 10, 8), new THREE.MeshBasicMaterial({ color: 0xa0e0ff, fog: false })); this.scene.add(this.charge); this.extra.push(this.beam, this.charge); this.beam.visible = false; }
      const hand = V(this.pos.x + Math.sin(this.yaw) * 1.2, this.pos.y + 2.6, this.pos.z + Math.cos(this.yaw) * 1.2);
      this.charge.position.copy(hand); this.charge.scale.setScalar(0.2 + prog * 0.7); this.charge.visible = true;
      if (this.timer <= 0) { this.state = 'fire'; this.timer = 1.2; this.fireDir = this.aim.clone(); this.fireFrom = hand.clone(); this.charge.visible = false; this.beam.visible = true; this.hitBeam = false; this.h.sound('explode', 0.9); }
    } else if (this.state === 'fire') {
      speed = 0; const L = 60, d = this.fireDir, mid = this.fireFrom.clone().addScaledVector(d, L / 2);
      this.beam.position.copy(mid); this.beam.scale.set(0.9 + Math.sin(this.t * 40) * 0.12, L, 0.9 + Math.sin(this.t * 40) * 0.12); this.beam.quaternion.setFromUnitVectors(V(0, 1, 0), d);
      const pc = V(player.pos.x, player.pos.y + 0.9, player.pos.z).sub(this.fireFrom), t = pc.dot(d), perp = pc.clone().addScaledVector(d, -t).length();
      if (!this.hitBeam && !player.dead && t > 0 && t < L && perp < 1.6) { this.hitBeam = true; this.h.hurtPlayer(k === 1 ? 14 : 18, d.x * 12, d.z * 12); this.h.explode(player.pos.x, player.pos.y + 1, player.pos.z, 3, 0.15); }
      if (this.timer <= 0) { this.state = 'walk'; this.beam.visible = false; this.timer = 1.2; this.armL.rotation.x = this.armR.rotation.x = 0; }
    } else if (this.state === 'combo') {
      speed = 6; this.armR.rotation.x = Math.sin(this.t * 25) * 1.4; this.armL.rotation.x = -Math.sin(this.t * 25) * 1.4;
      if (this.timer < 1.2 - (this.hitN + 1) * 0.28 && this.hitN < 4) { this.hitN++; if (dist < 4.2 && !player.dead) this.h.hurtPlayer(4, (dx / dist) * 5, (dz / dist) * 5); this.h.sound('hit', 0.8); }
      if (this.timer <= 0) { this.state = 'walk'; this.timer = 1.5; this.armL.rotation.x = this.armR.rotation.x = 0; }
    } else if (this.state === 'genki') {
      speed = 0; this.armL.rotation.x = this.armR.rotation.x = -3.0; const prog = 1 - this.timer / 4.5; this.ball.position.set(this.pos.x, this.pos.y + 6.5, this.pos.z); this.ball.scale.setScalar(0.6 + prog * 3.4);
      if (Math.random() < dt * 20) this.h.burst(this.pos.x + rnd(-4, 4), this.pos.y + rnd(1, 6), this.pos.z + rnd(-4, 4), [0.6, 0.85, 1], 3, 2);
      if (this.timer <= 0) { const from = this.ball.position.clone(); this.scene.remove(this.ball); this.extra = this.extra.filter((e) => e !== this.ball); this.ball = null; this.shootProj(from, V(player.pos.x, player.pos.y + 1, player.pos.z).sub(from), { speed: 20, size: 4.5, color: 0x80c8ff, emissive: 0x4090ff, radius: 7, ds: 1.3 }); this.state = 'walk'; this.timer = 2; this.armL.rotation.x = this.armR.rotation.x = 0; }
    }
    this.walk(dt, world, dx, dz, dist, this.state === 'walk' && dist < 2.5 ? 0 : speed);
    this.walkA += dt * Math.hypot(this.vel.x, this.vel.z) * 1.5; const sw = Math.sin(this.walkA) * 0.6;
    this.legL.rotation.x = sw; this.legR.rotation.x = -sw;
    if (this.state === 'walk') { this.armL.rotation.x = -sw * 0.7; this.armR.rotation.x = sw * 0.7; }
    if (k >= 2) { this.aura.material.opacity = 0.2 + Math.sin(this.t * 14) * 0.06; this.aura.scale.setScalar(1 + Math.sin(this.t * 9) * 0.08); }
    this.root.position.copy(this.pos); this.root.rotation.y = this.yaw;
  }
}

// ===================================================================== SR. BURNS (crossover)
export class MrBurns extends BossBase {
  constructor(scene, hooks, pos) {
    super(scene, hooks, pos, { name: 'SR. BURNS', type: 'burns', maxHp: 260, hitbox: { hx: 0.45, hy: 0.95, hz: 0.35, oy: 0.95 }, scale: 1.7, burstColor: [0.5, 1, 0.3] });
    this.hw = 0.4; this.hh = 3.2; this.state = 'walk'; this.timer = 2; this.dogT = 6; this.barrelT = 4; this.waveT = 9; this.shieldT = 14; this.shield = 0; this.walkA = 0;
    const skin = this.mat(0xe8dcb0), suit = this.mat(0x35302c), shirt = this.mat(0xf0f0e8), dk = this.mat(0x101010), green = this.mat(0x60e030, 0x30a010);
    this.legL = this.group(-0.15, 0.85, 0); this.box(0.26, 0.85, 0.3, suit, 0, -0.42, 0, this.legL); this.legR = this.group(0.15, 0.85, 0); this.box(0.26, 0.85, 0.3, suit, 0, -0.42, 0, this.legR);
    this.box(0.62, 0.9, 0.34, suit, 0, 1.3, 0); this.box(0.2, 0.6, 0.05, shirt, 0, 1.4, 0.19);
    this.armL = this.group(-0.45, 1.65, 0); this.box(0.2, 0.9, 0.22, suit, 0, -0.45, 0, this.armL); this.armR = this.group(0.45, 1.65, 0); this.box(0.2, 0.9, 0.22, suit, 0, -0.45, 0, this.armR);
    this.box(0.2, 0.2, 0.2, skin, 0, -0.95, 0, this.armR); this.box(0.2, 0.2, 0.2, skin, 0, -0.95, 0, this.armL);
    this.head = this.group(0, 1.95, 0); this.box(0.46, 0.5, 0.4, skin, 0, 0.25, 0, this.head); this.box(0.14, 0.18, 0.14, skin, 0, 0.2, 0.26, this.head);
    for (const x of [-0.11, 0.11]) this.box(0.1, 0.1, 0.04, dk, x, 0.32, 0.21, this.head);
    this.box(0.1, 0.08, 0.04, dk, 0, 0.08, 0.2, this.head);
    this.box(0.14, 0.16, 0.1, skin, -0.3, 0.2, 0, this.head); this.box(0.14, 0.16, 0.1, skin, 0.3, 0.2, 0, this.head);
    this.shieldMesh = new THREE.Mesh(new THREE.SphereGeometry(1.5, 14, 10), new THREE.MeshBasicMaterial({ color: 0x70ff50, transparent: true, opacity: 0.28, fog: false, depthWrite: false })); this.shieldMesh.position.y = 1.2; this.shieldMesh.visible = false; this.body.add(this.shieldMesh);
    this.barrels = [];
    this.h.toast('Sr. Burns: «Excelente…» ¡Cuidado con los perros y los barriles radiactivos!');
  }
  phaseFor(r) { return r > 0.5 ? 1 : 2; }
  onPhase() { this.h.sound('roar', 1); this.h.toast('¡Sr. Burns activa el reactor! Ondas nucleares'); this.waveT = 1.5; }
  damageMul() { return this.shield > 0 ? 0.1 : 1; }
  onHit() { if (this.shield > 0 && Math.random() < 0.3) this.h.toast('¡Escudo de Sr. Burns! Espera a que baje'); }
  tick(dt, player, world) {
    const k = this.phase, dx = player.pos.x - this.pos.x, dz = player.pos.z - this.pos.z, dist = Math.hypot(dx, dz) || 1;
    this.dogT -= dt; this.barrelT -= dt; this.waveT -= dt; this.shieldT -= dt; this.timer -= dt;
    this.yaw += wrap(Math.atan2(dx, dz) - this.yaw) * Math.min(1, dt * 4);
    if (this.shield > 0) { this.shield -= dt; this.shieldMesh.visible = true; this.shieldMesh.material.opacity = 0.2 + Math.sin(this.t * 12) * 0.08; if (this.shield <= 0) this.shieldMesh.visible = false; }
    else if (this.shieldT <= 0) { this.shield = 4; this.shieldT = k === 1 ? 16 : 11; this.h.toast('Sr. Burns: «Excelente…»'); }
    if (this.dogT <= 0) { this.dogT = k === 1 ? 11 : 8; if (this.h.minions() < 7) { this.h.spawnMinion('dog'); this.h.spawnMinion('dog'); } this.h.sound('roar', 0.5); }
    if (this.barrelT <= 0 && !player.dead) { this.barrelT = k === 1 ? 5 : 3.4; const from = V(this.pos.x, this.pos.y + 3.2, this.pos.z); this.shootProj(from, V(player.pos.x, player.pos.y + 1, player.pos.z).sub(from), { speed: 14, size: 0.9, color: 0x50d020, emissive: 0x40ff10, radius: 2.2, ds: 0.3, effect: ['poison', 5], cloud: true }); this.armR.rotation.x = -2.2; }
    if (this.waveT <= 0 && !player.dead) { this.waveT = k === 1 ? 10 : 6; this.addWave(this.pos.x, this.pos.y, this.pos.z, { max: 22, speed: 11, dmg: 8, color: 0x70ff30, effect: ['poison', 4] }); this.h.sound('explode', 0.6); }
    const away = dist < 8 ? -1 : dist > 14 ? 1 : 0; // mantiene distancia
    this.walk(dt, world, dx * (away || 0.0001), dz * (away || 0.0001), dist, away ? 3.2 : 0);
    this.walkA += dt * Math.hypot(this.vel.x, this.vel.z) * 1.6; const sw = Math.sin(this.walkA) * 0.5;
    this.legL.rotation.x = sw; this.legR.rotation.x = -sw; this.armL.rotation.x = -sw * 0.6; this.armR.rotation.x += (sw * 0.6 - this.armR.rotation.x) * Math.min(1, dt * 5);
    this.root.position.copy(this.pos); this.root.rotation.y = this.yaw;
  }
}

// ===================================================================== IMPOSTOR SUPREMO (crossover Among Us)
export class ImpostorBoss extends BossBase {
  constructor(scene, hooks, pos) {
    super(scene, hooks, pos, { name: 'IMPOSTOR SUPREMO', type: 'impostor', maxHp: 340, hitbox: { hx: 0.8, hy: 1.1, hz: 0.6, oy: 1.1 }, scale: 1.9, burstColor: [1, 0.2, 0.2] });
    this.hw = 0.7; this.hh = 3.6; this.state = 'walk'; this.timer = 2; this.lungeT = 4; this.ventT = 8; this.lightsT = 14; this.reactorT = 10; this.meetT = 16; this.walkA = 0; this.lights = 0;
    const red = this.mat(0xc01818, 0x300404), dark = this.mat(0x8a0f0f), visor = this.mat(0x9fe8ff, 0x305060), knife = this.mat(0xe0e0e8, 0x303030);
    this.legL = this.group(-0.3, 0.8, 0); this.box(0.5, 0.8, 0.55, dark, 0, -0.4, 0, this.legL); this.legR = this.group(0.3, 0.8, 0); this.box(0.5, 0.8, 0.55, dark, 0, -0.4, 0, this.legR);
    this.box(1.3, 1.5, 0.95, red, 0, 1.5, 0); this.box(0.8, 1.0, 0.45, dark, 0, 1.5, -0.65); this.box(0.9, 0.5, 0.1, visor, 0, 1.85, 0.52); this.box(1.0, 0.65, 0.05, this.mat(0x40a0c0, 0x103040), 0, 1.85, 0.5);
    this.armR = this.group(0.8, 1.5, 0.1); this.box(0.3, 0.3, 0.9, red, 0, 0, 0.45, this.armR); this.box(0.08, 0.08, 1.0, knife, 0, 0, 1.4, this.armR);
    this.armL = this.group(-0.8, 1.5, 0.1); this.box(0.3, 0.3, 0.9, red, 0, 0, 0.45, this.armL);
    this.h.toast('El Impostor Supremo te ha encontrado… ¡SUS!');
  }
  phaseFor(r) { return r > 0.55 ? 1 : 2; }
  onPhase() { this.h.sound('roar', 1); this.h.toast('¡REUNIÓN DE EMERGENCIA! El impostor se enfurece'); this.meetT = 1; this.lightsT = 3; }
  tick(dt, player, world) {
    const k = this.phase, dx = player.pos.x - this.pos.x, dz = player.pos.z - this.pos.z, dist = Math.hypot(dx, dz) || 1;
    this.timer -= dt; this.lungeT -= dt; this.ventT -= dt; this.lightsT -= dt; this.reactorT -= dt; this.meetT -= dt;
    if (this.state !== 'lunge') this.yaw += wrap(Math.atan2(dx, dz) - this.yaw) * Math.min(1, dt * 5);
    let speed = k === 1 ? 4 : 5.2;
    if (this.lights > 0) { this.lights -= dt; this.h.darkness(0.75); if (this.lights <= 0) this.h.darkness(0); }
    if (this.state === 'walk') {
      if (this.timer <= 0 && dist < 3.8 && !player.dead) { this.state = 'stab'; this.timer = 0.45; }
      else if (this.lungeT <= 0 && dist > 5 && dist < 20 && this.onGround) { this.state = 'lunge'; this.timer = 0.9; this.lungeT = k === 1 ? 5.5 : 3.6; this.vel.x = (dx / dist) * 20; this.vel.z = (dz / dist) * 20; this.vel.y = 6; this.lungeHit = false; this.h.sound('hiss', 1); }
      else if (this.ventT <= 0) { this.ventT = k === 1 ? 9 : 5.5; this.h.burst(this.pos.x, this.pos.y + 1, this.pos.z, [0.7, 0.1, 0.1], 20, 4); const a = Math.random() * 6.28; this.pos.x = player.pos.x + Math.cos(a) * 6; this.pos.z = player.pos.z + Math.sin(a) * 6; this.pos.y = player.pos.y + 0.5; this.vel.set(0, 0, 0); this.h.burst(this.pos.x, this.pos.y + 1, this.pos.z, [0.7, 0.1, 0.1], 20, 4); }
      else if (this.lightsT <= 0 && this.lights <= 0) { this.lightsT = k === 1 ? 20 : 13; this.lights = 6; this.h.toast('¡Se apagaron las luces! Los impostores atacan'); if (this.h.minions() < 7) for (let i = 0; i < 3; i++) this.h.spawnMinion('impostor'); }
      else if (this.reactorT <= 0 && this.onGround) { this.reactorT = k === 1 ? 11 : 7; this.addWave(this.pos.x, this.pos.y, this.pos.z, { max: 18, speed: 11, dmg: 8, color: 0xff3030 }); this.h.sound('roar', 0.6); }
      else if (k === 2 && this.meetT <= 0 && !player.dead) { this.meetT = 14; this.h.toast('¡Reunión de emergencia! Te arrastran'); this.state = 'meet'; this.timer = 1.2; }
    } else if (this.state === 'stab') {
      speed = 0; this.armR.rotation.x = -1.6;
      if (this.timer <= 0) { this.state = 'walk'; this.timer = 1.4; if (dist < 4.2 && !player.dead) this.h.hurtPlayer(11, (dx / dist) * 9, (dz / dist) * 9); this.h.sound('hit', 1); this.armR.rotation.x = 0.4; }
    } else if (this.state === 'lunge') {
      speed = 0; this.armR.rotation.x = -1.4;
      if (!this.lungeHit && dist < 3.2 && !player.dead) { this.lungeHit = true; this.h.hurtPlayer(13, (dx / dist) * 12, (dz / dist) * 12); }
      if (this.timer <= 0) { this.state = 'walk'; this.timer = 1.8; this.armR.rotation.x = 0; }
    } else if (this.state === 'meet') {
      speed = 0; const p = this.h.player(); p.vel.x -= dx / dist * 22 * dt; p.vel.z -= dz / dist * 22 * dt;
      if (this.timer <= 0) { this.state = 'walk'; this.timer = 1.2; }
    }
    this.walk(dt, world, dx, dz, dist, this.state === 'walk' ? speed : 0);
    this.walkA += dt * Math.hypot(this.vel.x, this.vel.z) * 1.4; const sw = Math.sin(this.walkA) * 0.6;
    this.legL.rotation.x = sw; this.legR.rotation.x = -sw;
    this.root.position.copy(this.pos); this.root.rotation.y = this.yaw;
  }
  dispose() { this.h.darkness(0); super.dispose(); }
}

export const BOSS_INFO = {
  storm: { name: 'Tormenta Wither', color: '#b060ff', hp: 360, desc: 'Colosal masa con tres cabezas. Rayo tractor, cráneos explosivos y un bloque de comandos como punto débil.', icon: '🌀' },
  dragon: { name: 'Ender Dragon', color: '#e040ff', hp: 300, desc: 'Vuela en círculos, pica en picado y lanza aliento. Destruye sus 4 cristales para poder herirlo.', icon: '🐉', make: (s, h, p, arena) => new EnderDragon(s, h, p, arena), up: 16 },
  wither: { name: 'Wither', color: '#9aa8c8', hp: 300, desc: 'Lanza cráneos negros que envenenan. Con poca vida se acoraza y te persigue de cerca.', icon: '💀', make: (s, h, p) => new WitherBoss(s, h, p), up: 8 },
  warden: { name: 'Warden', color: '#3be8c8', hp: 360, desc: 'Ciego pero letal. Golpes devastadores y explosión sónica a distancia. Oscurece la pantalla.', icon: '👁', make: (s, h, p) => new WardenBoss(s, h, p), up: 0, ground: true },
  guardian: { name: 'Guardián Ancestral', color: '#70fff0', hp: 240, desc: 'Su láser carga y causa fatiga de minería. Sus espinas devuelven daño al golpearlo.', icon: '🐟', make: (s, h, p) => new ElderGuardian(s, h, p), up: 6 },
};
Object.assign(BOSS_INFO, {
  ravager: { name: 'Devastador', color: '#b09070', hp: 280, desc: 'Bestia blindada que ruge y embiste arrasando todo. Tras cada embestida queda aturdido: ¡ataca entonces!', icon: '🐗', make: (s, h, p) => new Ravager(s, h, p), ground: true, dist: 16 },
  evoker: { name: 'Invocador', color: '#e0c040', hp: 220, desc: 'Hechicero que se teletransporta, lanza hileras de colmillos y llama a vex voladores (se pueden golpear).', icon: '🧙', make: (s, h, p) => new Evoker(s, h, p), up: 4, dist: 14 },
  ghast: { name: 'Ghast Gigante', color: '#f4f4f4', hp: 200, desc: 'Flota llorando y escupe enormes bolas de fuego. ¡Golpéalas para devolvérselas y hacerle un daño brutal!', icon: '👻', make: (s, h, p) => new GiantGhast(s, h, p), up: 14, dist: 26 },
  herobrine: { name: 'Herobrine', color: '#ffffff', hp: 400, desc: 'Ojos blancos, teletransportes a tu espalda, rayos y oscuridad. Con poca vida levita. El jefe final.', icon: '👤', make: (s, h, p) => new Herobrine(s, h, p), ground: true, dist: 14 },
  slimeking: { name: 'Rey Slime', color: '#60e060', hp: 260, desc: 'Gigantesco, salta y aplasta con ondas expansivas. Se divide en slimes al perder vida.', icon: '🟢', make: (s, h, p) => new SlimeKing(s, h, p), ground: true, dist: 18 },
});
Object.assign(BOSS_INFO, {
  blazeking: { name: 'Rey Blaze', color: '#ff9a20', hp: 280, desc: 'Señor del fuego del Nether: abanicos de bolas de fuego, ondas de llamas que hay que saltar y blazes de refuerzo.', icon: '🔥', make: (s, h, p) => new BlazeKing(s, h, p), up: 8, dist: 20 },
  piglinking: { name: 'Rey Piglin', color: '#e8c040', hp: 340, desc: 'Hacha gigante, saltos que parten el suelo, torbellino de oro y una guardia de piglins.', icon: '🪓', make: (s, h, p) => new PiglinKing(s, h, p), ground: true, dist: 16 },
  endertitan: { name: 'Enderman Titán', color: '#c060ff', hp: 380, desc: 'Gigantesco: se teletransporta, barre con los brazos y lanza rocas. ¡No le mires a los ojos!', icon: '🕴', make: (s, h, p) => new EnderTitan(s, h, p), ground: true, dist: 24 },
  voidlord: { name: 'Señor del Vacío', color: '#a050ff', hp: 300, desc: 'Abre grietas que dañan y elevan, dispara un láser con carga y su gravedad te arrastra en la fase final.', icon: '🌀', make: (s, h, p) => new VoidLord(s, h, p), up: 6, dist: 20 },
  creepertitan: { name: 'Creeper Titán', color: '#60e060', hp: 320, desc: 'Se hincha y explota con un radio colosal. Tras estallar queda aturdido: es tu momento.', icon: '💥', make: (s, h, p) => new CreeperTitan(s, h, p), ground: true, dist: 30 },
  colossus: { name: 'Gólem Colosal', color: '#d0d0e0', hp: 420, desc: 'Puñetazos devastadores, golpes al suelo que lanzan ondas de choque y rocas. Furia roja en la fase 2.', icon: '🗿', make: (s, h, p) => new IronColossus(s, h, p), ground: true, dist: 22 },
});
Object.assign(BOSS_INFO, {
  goku: { name: 'Goku', color: '#ff9a20', hp: 450, desc: 'Kamehameha, teletransporte instantáneo y combos. Se vuelve Super Saiyajin y al final lanza la Genki Dama.', icon: '🟠', make: (s, h, p) => new Goku(s, h, p), ground: true, dist: 20 },
  burns: { name: 'Sr. Burns', color: '#60e030', hp: 260, desc: 'Suelta perros, lanza barriles radiactivos que envenenan, se protege con un escudo y activa ondas nucleares.', icon: '☢', make: (s, h, p) => new MrBurns(s, h, p), ground: true, dist: 18 },
  impostor: { name: 'Impostor Supremo', color: '#ff3030', hp: 340, desc: 'Embiste con el cuchillo, se teletransporta por los conductos, apaga las luces y llama a más impostores. «¡SUS!»', icon: '🔴', make: (s, h, p) => new ImpostorBoss(s, h, p), ground: true, dist: 16 },
});
export const BOSS_ORDER = ['storm', 'dragon', 'wither', 'warden', 'guardian', 'ravager', 'evoker', 'ghast', 'herobrine', 'slimeking', 'colossus', 'creepertitan', 'blazeking', 'piglinking', 'endertitan', 'voidlord', 'goku', 'burns', 'impostor'];
