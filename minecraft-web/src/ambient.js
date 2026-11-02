// Partículas ambientales: brasas y ceniza en el Nether, motas moradas en el End.
import * as THREE from 'three';
const N = 420, R = 24;
export class Ambient {
  constructor(scene) {
    this.pos = new Float32Array(N * 3); this.vel = new Float32Array(N * 3);
    for (let i = 0; i < N; i++) this.reset(i, true);
    const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.BufferAttribute(new Float32Array(N * 3), 3));
    this.pts = new THREE.Points(g, new THREE.PointsMaterial({ color: 0xff8a30, size: 3, sizeAttenuation: false, transparent: true, opacity: 0.9, fog: false, depthWrite: false, blending: THREE.AdditiveBlending }));
    this.pts.frustumCulled = false; this.pts.visible = false; scene.add(this.pts); this.t = 0;
  }
  reset(i, initial) {
    this.pos[i * 3] = (Math.random() - 0.5) * 2 * R; this.pos[i * 3 + 1] = initial ? (Math.random() - 0.5) * 2 * R : -R; this.pos[i * 3 + 2] = (Math.random() - 0.5) * 2 * R;
    this.vel[i * 3] = (Math.random() - 0.5) * 0.6; this.vel[i * 3 + 1] = 0.4 + Math.random() * 1.2; this.vel[i * 3 + 2] = (Math.random() - 0.5) * 0.6;
  }
  update(dt, camera, dim) {
    const on = dim === 'nether' || dim === 'end';
    this.pts.visible = on; if (!on) return;
    this.t += dt;
    const nether = dim === 'nether', arr = this.pts.geometry.attributes.position.array;
    this.pts.material.color.set(nether ? 0xff7a28 : 0xb080ff); this.pts.material.size = nether ? 3 : 2.5;
    for (let i = 0; i < N; i++) {
      const o = i * 3;
      this.pos[o] += (this.vel[o] + Math.sin(this.t + i) * 0.3) * dt; this.pos[o + 1] += this.vel[o + 1] * (nether ? 1 : 0.5) * dt; this.pos[o + 2] += (this.vel[o + 2] + Math.cos(this.t * 0.8 + i) * 0.3) * dt;
      if (this.pos[o + 1] > R) this.reset(i, false);
      arr[o] = camera.position.x + this.pos[o]; arr[o + 1] = camera.position.y + this.pos[o + 1]; arr[o + 2] = camera.position.z + this.pos[o + 2];
    }
    this.pts.geometry.attributes.position.needsUpdate = true;
  }
}
