// Jefe: Tormenta Wither. Cuerpo colosal con 3 cabezas y tentáculos, rayo tractor, cráneos explosivos,
// devora bloques, 3 fases y un bloque de comandos como punto débil (expuesto en la fase 3).
import * as THREE from 'three';
import { CLEAN } from './flavor.js';
import { restyleBoss } from './restyle.js';
import { rayBox } from './mobs.js';
import { B } from './blocks.js';

const rnd = (a, b) => a + Math.random() * (b - a);
const PHASE_SCALE = [1, 1.3, 1.75];
const WANT_DIST = [18, 20, 15];
const SKULL_EVERY = [4.2, 3.2, 2.4];
const SKULLS = [1, 2, 3];
const BEAM_ON = [5, 6, 8], BEAM_OFF = [5, 4, 3];
const PULL = [3.2, 4.6, 6.2];

function cmdTexture() {
  const c = document.createElement('canvas'); c.width = c.height = 16;
  const x = c.getContext('2d');
  for (let j = 0; j < 16; j++) for (let i = 0; i < 16; i++) {
    const n = (Math.sin(i * 12.9 + j * 78.2) * 43758.5) % 1;
    const v = 190 + Math.abs(n) * 30;
    x.fillStyle = `rgb(${v | 0},${(v * 0.58) | 0},${(v * 0.28) | 0})`; x.fillRect(i, j, 1, 1);
  }
  x.fillStyle = '#4a2208'; x.fillRect(0, 0, 16, 1); x.fillRect(0, 15, 16, 1); x.fillRect(0, 0, 1, 16); x.fillRect(15, 0, 1, 16);
  x.fillStyle = '#2a1204';
  for (let k = 0; k < 4; k++) { x.fillRect(4 + k, 4 + k, 2, 1); x.fillRect(4 + k, 11 - k, 2, 1); }
  x.fillRect(9, 10, 4, 1);
  const t = new THREE.CanvasTexture(c); t.magFilter = THREE.NearestFilter; t.minFilter = THREE.NearestFilter; t.generateMipmaps = false; t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

export class WitherStorm {
  constructor(scene, hooks, pos) {
    this.scene = scene; this.h = hooks; this.pos = pos.clone();
    this.name = 'TORMENTA WITHER'; this.type = 'storm';
    this.maxHp = 360; this.hp = 360; this.phase = 1; this.scale = 1; this.scaleT = 1;
    this.t = 0; this.yaw = 0; this.flash = 0; this.devourT = 1; this.atkT = 3; this.beamT = 3; this.beamOn = false;
    this.minionT = 10; this.meleeT = 0; this.beamHurtT = 0; this.shell = 1; this.dead = false; this.skulls = [];
    this.root = new THREE.Group(); this.body = new THREE.Group(); this.root.add(this.body);
    this.dark = new THREE.MeshLambertMaterial({ color: 0x17121f });
    this.dark2 = new THREE.MeshLambertMaterial({ color: 0x2a2036 });
    this.glow = new THREE.MeshBasicMaterial({ color: 0xc070ff });
    this.build();
    this.beam = new THREE.Mesh(new THREE.CylinderGeometry(0.14, 0.14, 1, 6), new THREE.MeshBasicMaterial({ color: 0xb060ff, transparent: true, opacity: 0.6, fog: false, depthWrite: false }));
    this.beam.visible = false; scene.add(this.beam);
    this.skullGeo = new THREE.BoxGeometry(0.9, 0.9, 0.9);
    this.skullMat = new THREE.MeshLambertMaterial({ color: 0x201530, emissive: 0x5a2090 });
    scene.add(this.root);
    this.root.position.copy(pos);
  }

  build() {
    const { dark, dark2, glow, body } = this;
    const box = (w, h, d, m, x, y, z, parent = body) => { const o = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), m); o.position.set(x, y, z); parent.add(o); return o; };
    box(5, 5, 5, dark, 0, 0, 0);
    for (let i = 0; i < 28; i++) { // bultos para una silueta irregular
      const sz = rnd(1, 2.6), ax = Math.floor(Math.random() * 3), sg = Math.random() < 0.5 ? -1 : 1, p = [rnd(-2.5, 2.5), rnd(-2.5, 2.5), rnd(-2.5, 2.5)];
      p[ax] = sg * (2.5 + sz * 0.2);
      const o = box(sz, sz * rnd(0.7, 1.3), sz, Math.random() < 0.5 ? dark : dark2, p[0], p[1], p[2]);
      o.rotation.set(rnd(-0.3, 0.3), rnd(-0.3, 0.3), rnd(-0.3, 0.3));
    }
    for (let i = 0; i < 6; i++) box(0.9, rnd(2, 3.6), 0.9, dark2, rnd(-2, 2), 3.2, rnd(-3, 0)).rotation.z = rnd(-0.4, 0.4);
    // cabezas
    this.heads = [];
    const head = (size, x, y, z, ry) => {
      const g = new THREE.Group(); g.position.set(x, y, z); g.rotation.y = ry; body.add(g);
      box(size, size, size, dark2, 0, 0, 0, g);
      for (const sx of [-1, 1]) box(size * 0.24, size * 0.12, 0.12, glow, sx * size * 0.24, size * 0.12, size / 2 + 0.03, g);
      const jaw = new THREE.Group(); jaw.position.set(0, -size * 0.42, size * 0.05); g.add(jaw);
      box(size * 0.92, size * 0.3, size * 0.86, dark, 0, -size * 0.1, 0, jaw);
      for (let i = -2; i <= 2; i++) box(size * 0.08, size * 0.14, size * 0.08, glow, i * size * 0.18, size * 0.05, size * 0.42, jaw);
      this.heads.push({ g, jaw, size });
    };
    head(3.6, 0, 4.0, 2.2, 0); head(2.6, -3.9, 3.0, 1.3, -0.35); head(2.6, 3.9, 3.0, 1.3, 0.35);
    // tentáculos
    this.tents = [];
    const mk = (bx, by, bz, dx, dy, dz, n, size, tipGlow) => {
      const segs = [];
      for (let i = 0; i < n; i++) { const s = size * (1 - (i / n) * 0.72); const m = new THREE.Mesh(new THREE.BoxGeometry(s, s, s), i === n - 1 && tipGlow ? glow : (i % 2 ? dark : dark2)); body.add(m); segs.push({ m, s }); }
      this.tents.push({ b: new THREE.Vector3(bx, by, bz), d: new THREE.Vector3(dx, dy, dz).normalize(), segs, ph: Math.random() * 6 });
    };
    for (let i = 0; i < 6; i++) mk(rnd(-2, 2), -2.4, rnd(-2, 1.5), rnd(-0.2, 0.2), -1, rnd(-0.3, 0.1), 9, 1.5, false);
    mk(-2.4, -0.4, 2.2, -0.4, -0.1, 1, 8, 1.2, true); mk(2.4, -0.4, 2.2, 0.4, -0.1, 1, 8, 1.2, true); mk(0, -1.8, 2.5, 0, -0.5, 1, 8, 1.2, true);
    // bloque de comandos y coraza que lo oculta
    this.cmd = new THREE.Mesh(new THREE.BoxGeometry(1.7, 1.7, 1.7), new THREE.MeshBasicMaterial({ map: cmdTexture() }));
    this.cmd.position.set(0, 0.2, 2.55); body.add(this.cmd);
    this.shellG = new THREE.Group(); this.shellG.position.set(0, 0.2, 2.8); body.add(this.shellG);
    box(3.1, 3.1, 0.8, dark2, 0, 0, 0, this.shellG);
    for (const [x, y] of [[-1.4, 0], [1.4, 0], [0, 1.4], [0, -1.4]]) box(x ? 0.3 : 2.8, y ? 0.3 : 2.8, 0.2, glow, x, y, 0.45, this.shellG);
  }

  headWorld(i) { const v = new THREE.Vector3(); this.heads[i % 3].g.getWorldPosition(v); return v; }
  corePos() { return this.pos.clone(); }

  raycast(o, d, maxDist) {
    const s = this.scale, p = this.pos;
    const t = rayBox(o, d, { x: p.x - 3.1 * s, y: p.y - 2.8 * s, z: p.z - 3.1 * s }, { x: p.x + 3.1 * s, y: p.y + 5.4 * s, z: p.z + 3.1 * s });
    if (t < 0 || t > maxDist) return null;
    const c = new THREE.Vector3(p.x, p.y + 0.2 * s, p.z), oo = new THREE.Vector3(o.x, o.y, o.z);
    const proj = Math.max(0, c.clone().sub(oo).dot(d)), closest = oo.addScaledVector(d, proj);
    return { dist: t, crit: this.phase === 3 && closest.distanceTo(c) < 2.1 * s };
  }

  hit(dmg, crit) {
    if (this.dead) return;
    this.hp -= dmg * (crit ? 3 : 1); this.flash = 0.15;
    this.h.burst(this.pos.x + rnd(-2, 2), this.pos.y + rnd(-1, 3), this.pos.z + rnd(-2, 2), crit ? [1, 0.7, 0.2] : [0.5, 0.2, 0.8], crit ? 16 : 8, 4);
    if (this.hp <= 0) return this.die();
    const ratio = this.hp / this.maxHp, ph = ratio > 0.66 ? 1 : ratio > 0.33 ? 2 : 3;
    if (ph > this.phase) {
      this.phase = ph; this.scaleT = PHASE_SCALE[ph - 1];
      this.h.sound('roar', 1); this.h.strikeNear(this.pos.x, this.pos.z);
      this.h.toast(ph === 2 ? '¡La tormenta crece y devora todo!' : '¡FASE FINAL! El bloque de comandos está expuesto: ¡golpéalo!');
      this.atkT = 1.5;
    }
  }

  die() {
    this.dead = true;
    this.h.explode(this.pos.x, this.pos.y, this.pos.z, 7, 0.25);
    this.h.sound('roar', 1);
    this.h.loot(this.pos.x, this.pos.y, this.pos.z, 'storm');
    this.h.toast('¡Has derrotado a la Tormenta Wither!');
    this.dispose(); this.h.done();
  }

  dispose() {
    this.scene.remove(this.root); this.scene.remove(this.beam);
    this.root.traverse((o) => o.geometry && o.geometry.dispose());
    for (const s of this.skulls) this.scene.remove(s.mesh);
    this.skulls = [];
  }

  update(dt, player, world) {
    if (this.dead) return;
    if (CLEAN && !this._rs) { this._rs = true; restyleBoss(this); }
    if (this._spin) this._spin.rotation.y += dt * 0.9;
    this.t += dt; this.flash = Math.max(0, this.flash - dt);
    const k = this.phase - 1;
    this.scale += (this.scaleT - this.scale) * Math.min(1, dt * 1.2);
    const s = this.scale;
    this.root.scale.setScalar(s);

    // Movimiento: se mantiene a cierta distancia, flotando por encima, y orbita
    const px = player.pos.x, pz = player.pos.z;
    let dx = px - this.pos.x, dz = pz - this.pos.z; const hd = Math.hypot(dx, dz) || 1; dx /= hd; dz /= hd;
    const speed = 3.5 + 1.2 * this.phase, want = WANT_DIST[k];
    if (hd > want + 1) { this.pos.x += dx * speed * dt; this.pos.z += dz * speed * dt; }
    else if (hd < want - 3) { this.pos.x -= dx * speed * 0.6 * dt; this.pos.z -= dz * speed * 0.6 * dt; }
    this.pos.x += -dz * 1.6 * dt * Math.sin(this.t * 0.3); this.pos.z += dx * 1.6 * dt * Math.sin(this.t * 0.3);
    const ty = player.pos.y + 8 + 2 * s;
    this.pos.y += (ty - this.pos.y) * Math.min(1, dt * 0.8);
    const diff = Math.atan2(player.pos.x - this.pos.x, player.pos.z - this.pos.z) - this.yaw;
    this.yaw += Math.atan2(Math.sin(diff), Math.cos(diff)) * Math.min(1, dt * 2);
    this.root.position.set(this.pos.x, this.pos.y + Math.sin(this.t * 0.8) * 0.4, this.pos.z);
    this.root.rotation.y = this.yaw;

    // Animación
    this.heads.forEach((hd2, i) => { hd2.jaw.rotation.x = 0.15 + Math.sin(this.t * 2.6 + i * 1.7) * 0.22 + (this.beamOn ? 0.35 : 0); });
    for (const tn of this.tents) tn.segs.forEach((sg, i) => {
      const sw = i * 0.32;
      sg.m.position.set(tn.b.x + tn.d.x * i * 1.45 + Math.sin(this.t * 1.4 + tn.ph + i * 0.6) * sw, tn.b.y + tn.d.y * i * 1.45 - i * 0.05, tn.b.z + tn.d.z * i * 1.45 + Math.cos(this.t * 1.1 + tn.ph * 1.3 + i * 0.5) * sw);
    });
    this.shell += ((this.phase >= 3 ? 0 : 1) - this.shell) * Math.min(1, dt * 2.5);
    this.shellG.scale.setScalar(Math.max(0.001, this.shell));
    const e = this.flash > 0 ? 0.5 : 0;
    this.dark.emissive.setRGB(e, e * 0.4, e); this.dark2.emissive.setRGB(e, e * 0.4, e);
    const pulse = 0.8 + Math.sin(this.t * 4) * 0.2; this.cmd.material.color.setScalar(this.phase >= 3 ? 1.2 * pulse + 0.2 : 0.55);

    // Devora bloques en su volumen
    this.devourT -= dt;
    if (this.devourT <= 0) {
      this.devourT = 0.35;
      const r = 3.4 * s, cx = Math.floor(this.pos.x), cy = Math.floor(this.pos.y + 0.8 * s), cz = Math.floor(this.pos.z), R = Math.ceil(r);
      let n = 0;
      for (let ax = -R; ax <= R && n < 150; ax++) for (let ay = -R; ay <= R; ay++) for (let az = -R; az <= R; az++) {
        if (ax * ax + ay * ay + az * az > r * r) continue;
        const id = world.getBlock(cx + ax, cy + ay, cz + az);
        if (id && id !== B.BEDROCK && Math.random() < 0.7) { world.setBlock(cx + ax, cy + ay, cz + az, 0); n++; }
      }
      if (n > 6) this.h.burst(this.pos.x, this.pos.y, this.pos.z, [0.25, 0.1, 0.35], 6, 4);
    }

    // Rayo tractor
    this.beamT -= dt;
    if (this.beamT <= 0) { this.beamOn = !this.beamOn; this.beamT = this.beamOn ? BEAM_ON[k] : BEAM_OFF[k]; if (this.beamOn) this.h.sound('roar', 0.6); }
    const toB = new THREE.Vector3(this.pos.x - player.pos.x, this.pos.y + 1 - (player.pos.y + 1), this.pos.z - player.pos.z), dist = toB.length();
    const active = this.beamOn && dist < 48 && !player.dead;
    this.beam.visible = active;
    if (active) {
      const dir = toB.clone().normalize();
      player.push.x = dir.x * PULL[k]; player.push.z = dir.z * PULL[k]; player.push.y = dir.y * 11;
      const mouth = this.headWorld(0), tgt = new THREE.Vector3(player.pos.x, player.pos.y + 1, player.pos.z);
      const len = mouth.distanceTo(tgt);
      this.beam.scale.set(1 + Math.sin(this.t * 30) * 0.3, len, 1 + Math.sin(this.t * 30) * 0.3);
      this.beam.position.copy(mouth).add(tgt).multiplyScalar(0.5);
      this.beam.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), tgt.clone().sub(mouth).normalize());
      this.beamHurtT -= dt;
      if (dist < 5.5 * s && this.beamHurtT <= 0) { this.beamHurtT = 0.5; this.h.hurtPlayer(2, 0, 0); }
    }
    // Zarpazo cuerpo a cuerpo
    this.meleeT -= dt;
    if (dist < 6.5 * s && this.meleeT <= 0 && !player.dead) {
      this.meleeT = 1.3;
      this.h.hurtPlayer(5, -toB.x / dist * 6, -toB.z / dist * 6);
    }

    // Cráneos explosivos
    this.atkT -= dt;
    if (this.atkT <= 0 && !player.dead) {
      this.atkT = SKULL_EVERY[k];
      for (let i = 0; i < SKULLS[k]; i++) this.shoot(player, i);
    }
    for (let i = this.skulls.length - 1; i >= 0; i--) {
      const sk = this.skulls[i]; sk.life -= dt;
      sk.mesh.position.addScaledVector(sk.vel, dt); sk.mesh.rotation.x += dt * 4; sk.mesh.rotation.y += dt * 3;
      const p = sk.mesh.position;
      const hitP = Math.hypot(p.x - player.pos.x, p.y - (player.pos.y + 0.9), p.z - player.pos.z) < 1.4;
      if (hitP || sk.life <= 0 || world.isSolid(Math.floor(p.x), Math.floor(p.y), Math.floor(p.z))) {
        this.h.explode(p.x, p.y, p.z, 2.2 + 0.4 * this.phase, 0.5);
        this.scene.remove(sk.mesh); this.skulls.splice(i, 1);
      }
    }

    // Esbirros (fases 2 y 3)
    if (this.phase >= 2) {
      this.minionT -= dt;
      if (this.minionT <= 0) { this.minionT = this.phase === 2 ? 14 : 10; if (this.h.minions() < 5) this.h.spawnMinion(); }
    }
  }

  shoot(player, i) {
    const from = this.headWorld(i), to = new THREE.Vector3(player.pos.x + player.vel.x * 0.5, player.pos.y + 1, player.pos.z + player.vel.z * 0.5);
    const dir = to.sub(from).normalize();
    dir.x += rnd(-0.06, 0.06) * (i + 1); dir.y += rnd(-0.04, 0.04); dir.z += rnd(-0.06, 0.06) * (i + 1); dir.normalize();
    const mesh = new THREE.Mesh(this.skullGeo, this.skullMat); mesh.position.copy(from); this.scene.add(mesh);
    this.skulls.push({ mesh, vel: dir.multiplyScalar(16), life: 7 });
    this.h.sound('shoot', 1);
  }
}
