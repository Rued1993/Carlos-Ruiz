// Clima: despejado / lluvia / tormenta, con viento, rayos y trueno. En biomas nevados la lluvia es nieve.
import * as THREE from 'three';

const TARGET = { clear: 0, rain: 0.65, storm: 1 };
export const WEATHER_NAMES = { clear: 'Despejado', rain: 'Lluvia', storm: 'Tormenta' };
const rnd = (a, b) => a + Math.random() * (b - a);
const N = 1800, R = 22; // gotas y radio de la caja alrededor de la cámara

export class Weather {
  constructor(scene, hooks) {
    this.scene = scene; this.hooks = hooks; // hooks: world(), sky, sound(name), burst(x,y,z), hurtPlayer(n), strikeMobs(x,z)
    this.state = 'clear'; this.timer = rnd(90, 240); this.intensity = 0;
    this.t = Math.random() * 100; this.wind = { x: 0, z: 0, s: 0.12 };
    this.lightningT = 6; this.bolts = []; this.thunder = [];

    // Gotas (segmentos) y copos (puntos) en una caja que sigue a la cámara
    this.pos = new Float32Array(N * 3);
    for (let i = 0; i < N; i++) { this.pos[i * 3] = rnd(-R, R); this.pos[i * 3 + 1] = rnd(-8, 22); this.pos[i * 3 + 2] = rnd(-R, R); }
    const lg = new THREE.BufferGeometry(); this.linePos = new Float32Array(N * 6);
    lg.setAttribute('position', new THREE.BufferAttribute(this.linePos, 3));
    this.rain = new THREE.LineSegments(lg, new THREE.LineBasicMaterial({ color: 0xaec4ea, transparent: true, opacity: 0.55, fog: false, depthWrite: false }));
    this.rain.frustumCulled = false; this.rain.visible = false; scene.add(this.rain);
    const pg = new THREE.BufferGeometry(); this.ptPos = new Float32Array(N * 3);
    pg.setAttribute('position', new THREE.BufferAttribute(this.ptPos, 3));
    this.snow = new THREE.Points(pg, new THREE.PointsMaterial({ color: 0xffffff, size: 3.5, sizeAttenuation: false, transparent: true, opacity: 0.9, fog: false, depthWrite: false }));
    this.snow.frustumCulled = false; this.snow.visible = false; scene.add(this.snow);
    this.boltMat = new THREE.MeshBasicMaterial({ color: 0xf2f4ff, fog: false });
  }

  set(state) { this.state = state; this.timer = state === 'clear' ? rnd(120, 360) : state === 'rain' ? rnd(90, 200) : rnd(80, 170); }
  cycle() { const order = ['clear', 'rain', 'storm']; this.set(order[(order.indexOf(this.state) + 1) % 3]); return this.state; }
  next() {
    const r = Math.random();
    if (this.state === 'clear') return r < 0.65 ? 'rain' : r < 0.85 ? 'storm' : 'clear';
    if (this.state === 'rain') return r < 0.55 ? 'clear' : 'storm';
    return r < 0.5 ? 'rain' : 'clear';
  }
  toJSON() { return { state: this.state, timer: this.timer, intensity: this.intensity }; }
  load(o) { if (o) { this.state = o.state; this.timer = o.timer; this.intensity = o.intensity; } }

  update(dt, player, camera, snowing, underwater) {
    const world = this.hooks.world();
    this.t += dt;
    this.timer -= dt;
    if (this.timer <= 0) this.set(this.next());
    const target = TARGET[this.state];
    this.intensity += Math.sign(target - this.intensity) * Math.min(Math.abs(target - this.intensity), dt * 0.08);
    const w = this.intensity;

    // Viento: dirección que gira despacio + ráfagas
    const ang = Math.sin(this.t * 0.02) * 1.6 + 0.8;
    const gust = 0.55 + 0.45 * Math.sin(this.t * 0.35) * Math.sin(this.t * 0.13 + 1);
    const base = this.state === 'storm' ? 1 : this.state === 'rain' ? 0.45 : 0.12;
    const target_s = 0.12 + (base - 0.12) * Math.min(1, w * 1.5 + (this.state === 'clear' ? 0 : 0)) * gust;
    this.wind.s += (target_s - this.wind.s) * Math.min(1, dt * 1.5);
    this.wind.x = Math.cos(ang) * this.wind.s; this.wind.z = Math.sin(ang) * this.wind.s;

    // Precipitación
    const cam = camera.position, show = w > 0.04 && !underwater;
    this.rain.visible = show && !snowing; this.snow.visible = show && snowing;
    if (show) {
      const count = Math.floor(N * Math.min(1, w * (this.state === 'storm' ? 1 : 0.8)));
      const fall = snowing ? 2.4 : 26, slant = snowing ? 1.5 : 9;
      const wx = this.wind.x * slant, wz = this.wind.z * slant;
      for (let i = 0; i < count; i++) {
        let x = this.pos[i * 3] + wx * dt, y = this.pos[i * 3 + 1] - fall * dt * (snowing ? 1 : 0.85 + (i % 7) * 0.05), z = this.pos[i * 3 + 2] + wz * dt;
        if (snowing) { x += Math.sin(this.t * 1.3 + i) * dt * 0.6; z += Math.cos(this.t * 1.1 + i * 0.7) * dt * 0.6; }
        if (x > R) x -= 2 * R; else if (x < -R) x += 2 * R;
        if (z > R) z -= 2 * R; else if (z < -R) z += 2 * R;
        const wxp = cam.x + x, wzp = cam.z + z;
        // Se detiene al llegar al suelo o a un techo
        const top = world ? world.topY(Math.floor(wxp), Math.floor(wzp)) : -1;
        if (y + cam.y < top + 1 || y < -14) { y = rnd(10, 24); x = rnd(-R, R); z = rnd(-R, R); }
        this.pos[i * 3] = x; this.pos[i * 3 + 1] = y; this.pos[i * 3 + 2] = z;
        if (snowing) { this.ptPos[i * 3] = cam.x + x; this.ptPos[i * 3 + 1] = cam.y + y; this.ptPos[i * 3 + 2] = cam.z + z; }
        else {
          const o = i * 6, len = 0.9;
          this.linePos[o] = cam.x + x; this.linePos[o + 1] = cam.y + y; this.linePos[o + 2] = cam.z + z;
          this.linePos[o + 3] = cam.x + x - wx * 0.06; this.linePos[o + 4] = cam.y + y + len; this.linePos[o + 5] = cam.z + z - wz * 0.06;
        }
      }
      if (snowing) { this.snow.geometry.setDrawRange(0, count); this.snow.geometry.attributes.position.needsUpdate = true; }
      else { this.rain.geometry.setDrawRange(0, count * 2); this.rain.geometry.attributes.position.needsUpdate = true; }
      this.rain.material.opacity = 0.35 + 0.3 * w;
    }

    // Rayos (solo en tormenta)
    if (this.state === 'storm' && w > 0.7) {
      this.lightningT -= dt;
      if (this.lightningT <= 0) { this.lightningT = rnd(4, 14); this.strike(player); }
    }
    const sky = this.hooks.sky();
    sky.wet = w;
    sky.flash = Math.max(0, sky.flash - dt * 2.2);
    for (let i = this.bolts.length - 1; i >= 0; i--) {
      const b = this.bolts[i]; b.life -= dt;
      b.group.visible = b.life > 0.12 || Math.floor(b.life * 40) % 2 === 0; // parpadeo
      if (b.life <= 0) { this.scene.remove(b.group); b.group.traverse((o) => o.geometry && o.geometry.dispose()); this.bolts.splice(i, 1); }
    }
    for (let i = this.thunder.length - 1; i >= 0; i--) {
      this.thunder[i].delay -= dt;
      if (this.thunder[i].delay <= 0) { this.hooks.sound('thunder', this.thunder[i].vol); this.thunder.splice(i, 1); }
    }
  }

  strike(player, forced) {
    const world = this.hooks.world();
    const a = Math.random() * Math.PI * 2, d = forced ? 6 : rnd(18, 110);
    const x = Math.floor(player.pos.x + Math.cos(a) * d), z = Math.floor(player.pos.z + Math.sin(a) * d);
    const top = world.topY(x, z), loaded = top >= 0;
    const y = loaded ? top + 1 : 30;
    const dist = Math.hypot(x - player.pos.x, z - player.pos.z);
    this.hooks.sky().flash = Math.min(1, 1.15 - dist / 220);
    this.thunder.push({ delay: dist / 55, vol: Math.max(0.25, 1 - dist / 150) });
    if (!loaded || dist > 150) return;
    // Rayo en zigzag hecho con cilindros finos
    const group = new THREE.Group();
    let px = x + 0.5, pz = z + 0.5, py = y + 85;
    const segs = 16;
    for (let i = 1; i <= segs; i++) {
      const ty = y + 85 - ((y + 85 - y) * i) / segs;
      const amp = 3.2 * (1 - i / segs);
      const nx = i === segs ? x + 0.5 : x + 0.5 + rnd(-amp, amp), nz = i === segs ? z + 0.5 : z + 0.5 + rnd(-amp, amp);
      const from = new THREE.Vector3(px, py, pz), to = new THREE.Vector3(nx, ty, nz), len = from.distanceTo(to);
      const m = new THREE.Mesh(new THREE.CylinderGeometry(0.16, 0.16, len, 4), this.boltMat);
      m.position.copy(from).add(to).multiplyScalar(0.5);
      m.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), to.clone().sub(from).normalize());
      group.add(m); px = nx; py = ty; pz = nz;
    }
    this.scene.add(group); this.bolts.push({ group, life: 0.45 });
    this.hooks.burst(x + 0.5, y + 0.3, z + 0.5);
    this.hooks.strikeMobs(x + 0.5, z + 0.5);
    if (dist < 3.5) this.hooks.hurtPlayer(8);
  }
}
