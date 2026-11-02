// Ciclo día/noche: color del cielo, sol, luna, estrellas, nubes, luces.
import * as THREE from 'three';

export const DAY_LENGTH = 600; // segundos por día completo
const WHITE = new THREE.Color(1, 1, 1), DEEP = new THREE.Color(0x2358c8), GREY = new THREE.Color(0x70767f), FLASH = new THREE.Color(0xdde6ff);
const DAY = new THREE.Color(0x87ceeb), NIGHT = new THREE.Color(0x070b1c), DUSK = new THREE.Color(0xff8a50);
const smooth = (a, b, x) => { const t = Math.max(0, Math.min(1, (x - a) / (b - a))); return t * t * (3 - 2 * t); };

function makeCloudTexture() {
  const N = 64, grid = 8;
  const rnd = Array.from({ length: grid * grid }, () => Math.random());
  const g = (x, y) => rnd[((y % grid) + grid) % grid * grid + ((x % grid) + grid) % grid];
  const c = document.createElement('canvas'); c.width = c.height = N;
  const x = c.getContext('2d'); const img = x.createImageData(N, N);
  for (let j = 0; j < N; j++) for (let i = 0; i < N; i++) {
    const u = (i / N) * grid, v = (j / N) * grid, x0 = Math.floor(u), y0 = Math.floor(v);
    const fx = u - x0, fy = v - y0, sx = fx * fx * (3 - 2 * fx), sy = fy * fy * (3 - 2 * fy);
    const val = (g(x0, y0) * (1 - sx) + g(x0 + 1, y0) * sx) * (1 - sy) + (g(x0, y0 + 1) * (1 - sx) + g(x0 + 1, y0 + 1) * sx) * sy;
    const o = (j * N + i) * 4; const a = val > 0.56 ? 215 : 0;
    img.data[o] = img.data[o + 1] = img.data[o + 2] = 255; img.data[o + 3] = a;
  }
  x.putImageData(img, 0, 0);
  const t = new THREE.CanvasTexture(c);
  t.wrapS = t.wrapT = THREE.RepeatWrapping; t.magFilter = THREE.NearestFilter; t.minFilter = THREE.NearestFilter; t.generateMipmaps = false;
  return t;
}
function squareTex(draw) {
  const c = document.createElement('canvas'); c.width = c.height = 16;
  draw(c.getContext('2d'));
  const t = new THREE.CanvasTexture(c); t.magFilter = THREE.NearestFilter; t.minFilter = THREE.NearestFilter; t.generateMipmaps = false; return t;
}

export class Sky {
  constructor(scene, camera, materials) {
    this.scene = scene; this.camera = camera; this.materials = materials;
    this.time = 0.08; // 0 = amanecer, 0.25 mediodía, 0.5 atardecer, 0.75 medianoche
    this.dim = 'overworld'; this.daylight = 1; this.wet = 0; this.flash = 0; this.cloudX = 0; this.cloudZ = 0;
    this.root = new THREE.Group(); scene.add(this.root);
    // Cúpula del cielo con degradado horizonte -> cénit
    this.domeMat = new THREE.ShaderMaterial({
      side: THREE.BackSide, depthWrite: false, depthTest: false, fog: false,
      uniforms: { top: { value: new THREE.Color(0x4a88d8) }, hor: { value: new THREE.Color(0x9ad4f0) } },
      vertexShader: 'varying vec3 vP; void main(){ vP = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }',
      fragmentShader: 'uniform vec3 top; uniform vec3 hor; varying vec3 vP; void main(){ float h = normalize(vP).y; float t = smoothstep(-0.02, 0.6, h); gl_FragColor = vec4(mix(hor, top, t), 1.0); }',
    });
    this.dome = new THREE.Mesh(new THREE.SphereGeometry(420, 24, 14), this.domeMat); this.dome.renderOrder = -30; this.root.add(this.dome);
    const gc = document.createElement('canvas'); gc.width = gc.height = 128; const gx = gc.getContext('2d');
    const gr = gx.createRadialGradient(64, 64, 0, 64, 64, 64); gr.addColorStop(0, 'rgba(255,240,180,0.9)'); gr.addColorStop(0.25, 'rgba(255,200,110,0.35)'); gr.addColorStop(1, 'rgba(255,180,80,0)');
    gx.fillStyle = gr; gx.fillRect(0, 0, 128, 128);
    this.glow = new THREE.Sprite(new THREE.SpriteMaterial({ map: new THREE.CanvasTexture(gc), blending: THREE.AdditiveBlending, transparent: true, depthWrite: false, depthTest: false, fog: false }));
    this.glow.scale.set(260, 260, 1); this.glow.renderOrder = -11; this.root.add(this.glow);

    const sunTex = squareTex((x) => { x.fillStyle = '#fff6b0'; x.fillRect(0, 0, 16, 16); x.fillStyle = '#ffe14a'; x.fillRect(2, 2, 12, 12); x.fillStyle = '#fffbe0'; x.fillRect(5, 5, 6, 6); });
    const moonTex = squareTex((x) => { x.fillStyle = '#e8ecf2'; x.fillRect(0, 0, 16, 16); x.fillStyle = '#b8bfcc'; x.fillRect(3, 4, 3, 3); x.fillRect(9, 8, 4, 3); x.fillRect(5, 11, 2, 2); });
    const mk = (tex, size) => {
      const m = new THREE.Mesh(new THREE.PlaneGeometry(size, size), new THREE.MeshBasicMaterial({ map: tex, transparent: true, fog: false, depthWrite: false, depthTest: false }));
      m.renderOrder = -10; this.root.add(m); return m;
    };
    this.sun = mk(sunTex, 60); this.moon = mk(moonTex, 40);

    const sp = new Float32Array(900 * 3);
    for (let i = 0; i < 900; i++) {
      const u = Math.random() * 2 - 1, a = Math.random() * Math.PI * 2, r = Math.sqrt(1 - u * u);
      sp[i * 3] = Math.cos(a) * r * 300; sp[i * 3 + 1] = u * 300; sp[i * 3 + 2] = Math.sin(a) * r * 300;
    }
    const sg = new THREE.BufferGeometry(); sg.setAttribute('position', new THREE.BufferAttribute(sp, 3));
    this.starMat = new THREE.PointsMaterial({ color: 0xffffff, size: 1.6, sizeAttenuation: false, transparent: true, fog: false, depthWrite: false });
    this.stars = new THREE.Points(sg, this.starMat); this.stars.renderOrder = -11; this.root.add(this.stars);

    this.cloudTex = makeCloudTexture();
    this.cloudMat = new THREE.MeshBasicMaterial({ map: this.cloudTex, transparent: true, fog: false, depthWrite: false, side: THREE.DoubleSide });
    this.clouds = new THREE.Mesh(new THREE.PlaneGeometry(900, 900), this.cloudMat);
    this.clouds.rotation.x = -Math.PI / 2; scene.add(this.clouds);
    // Segunda capa más baja que aparece con mal tiempo
    this.cloudMat2 = new THREE.MeshBasicMaterial({ map: this.cloudTex.clone(), transparent: true, fog: false, depthWrite: false, side: THREE.DoubleSide });
    this.cloudMat2.map.needsUpdate = true;
    this.clouds2 = new THREE.Mesh(new THREE.PlaneGeometry(900, 900), this.cloudMat2);
    this.clouds2.rotation.x = -Math.PI / 2; scene.add(this.clouds2);

    // Iluminación física: hemisférica (cielo/suelo) + luz direccional que es sol de día y luna de noche
    this.hemi = new THREE.HemisphereLight(0xbfd8ff, 0x7a6a50, 2);
    this.sunLight = new THREE.DirectionalLight(0xfff2dd, 2.8);
    this.shadowExt = 64; this.shadowOn = false;
    scene.add(this.hemi, this.sunLight, this.sunLight.target);
    this.lightDir = new THREE.Vector3(0.5, 1, 0.3).normalize();
    this.sky = new THREE.Color(); this.tint = new THREE.Color();
  }

  setShadows(on, size, ext) {
    const L = this.sunLight, changed = L.shadow.mapSize.x !== size || this.shadowExt !== ext;
    this.shadowOn = on; this.shadowExt = ext;
    if (on) {
      L.shadow.mapSize.set(size, size);
      const c = L.shadow.camera; c.left = -ext; c.right = ext; c.top = ext; c.bottom = -ext; c.near = 10; c.far = 340; c.updateProjectionMatrix();
      L.shadow.bias = -0.0004; L.shadow.normalBias = 0.35 * (ext / 64) * (2048 / size) ** 0.5; L.shadow.radius = 2;
      if (changed && L.shadow.map) { L.shadow.map.dispose(); L.shadow.map = null; }
    }
  }

  // Nether y End: sin ciclo día/noche; cielo, niebla y luz fijos
  updateOther(dt, playerPos, fogRadius, underwater) {
    const nether = this.dim === 'nether';
    this.daylight = 0; this.wet = 0; this.flash = 0;
    const hor = nether ? new THREE.Color(0x5a1408) : new THREE.Color(0x1c0f2e), top = nether ? new THREE.Color(0x1c0503) : new THREE.Color(0x04020a);
    if (underwater && nether) { hor.set(0xa83808); top.set(0x601800); }
    this.sky.copy(nether ? new THREE.Color(0x3a0c06) : new THREE.Color(0x120a1c)); if (underwater && nether) this.sky.set(0xa83808);
    this.scene.background = this.sky; this.scene.fog.color.copy(this.sky);
    this.scene.fog.near = underwater ? 0.5 : fogRadius * (nether ? 0.18 : 0.5);
    this.scene.fog.far = underwater ? (nether ? 5 : 18) : fogRadius * (nether ? 0.75 : 1.1);
    this.domeMat.uniforms.hor.value.copy(hor); this.domeMat.uniforms.top.value.copy(top);
    this.root.position.copy(this.camera.position);
    this.sun.visible = this.moon.visible = this.glow.visible = false; this.clouds.visible = this.clouds2.visible = false;
    this.stars.visible = !nether; this.starMat.opacity = nether ? 0 : 1; this.starMat.size = 2.4; this.stars.rotation.y += dt * 0.01;
    this.hemi.color.set(nether ? 0xff8a5a : 0xa890ff); this.hemi.groundColor.set(nether ? 0x6a2008 : 0x281c40); this.hemi.intensity = nether ? 1.9 : 1.1;
    this.sunLight.color.set(nether ? 0xff6a30 : 0x9a80ff); this.sunLight.intensity = nether ? 0.35 : 0.7; this.sunLight.castShadow = false;
    this.lightDir.set(0.3, 1, 0.2).normalize();
    this.sunLight.target.position.copy(playerPos); this.sunLight.position.set(playerPos.x + 30, playerPos.y + 100, playerPos.z + 20);
  }

  setDimension(dim) {
    this.dim = dim;
    const ow = dim === 'overworld';
    this.sun.visible = this.moon.visible = this.glow.visible = ow; this.clouds.visible = ow; this.stars.visible = true; this.starMat.size = 1.6;
  }

  update(dt, playerPos, fogRadius, underwater, wind = { x: 0, z: 0, s: 0.12 }) {
    if (this.dim !== 'overworld') return this.updateOther(dt, playerPos, fogRadius, underwater);
    this.time = (this.time + dt / DAY_LENGTH) % 1;
    const a = this.time * Math.PI * 2;
    const sinA = Math.sin(a), cosA = Math.cos(a);
    const raw = smooth(-0.12, 0.25, sinA), wet = this.wet, flash = this.flash;
    this.daylight = raw * (1 - 0.55 * wet);

    this.sky.copy(NIGHT).lerp(DAY, this.daylight);
    const dusk = Math.max(0, 1 - Math.abs(sinA) * 4.5) * 0.7;
    this.sky.lerp(DUSK, dusk * (1 - wet));
    if (wet > 0) this.sky.lerp(GREY.clone().multiplyScalar(0.12 + 0.88 * raw), wet * 0.8);
    if (flash > 0) this.sky.lerp(FLASH, flash * 0.7);
    if (underwater) this.sky.set(0x1a3a7a).multiplyScalar(0.4 + this.daylight * 0.6);
    this.scene.background = this.sky;
    const clear = raw * (1 - wet);
    this.domeMat.uniforms.hor.value.copy(this.sky).lerp(WHITE, 0.22 * clear);
    this.domeMat.uniforms.top.value.copy(this.sky).multiplyScalar(0.7).lerp(DEEP, 0.3 * clear);
    this.scene.fog.color.copy(this.sky);
    this.scene.fog.near = underwater ? 0.5 : fogRadius * 0.6;
    this.scene.fog.far = underwater ? 18 : fogRadius * (1 - 0.3 * wet);
    if (!underwater) this.scene.fog.near = fogRadius * (0.6 - 0.25 * wet);

    // Los materiales de bloques multiplican el color de vértice por el brillo del día
    const b = 0.2 + 0.8 * this.daylight;
    // luz: sol por el día (cálido al amanecer/atardecer), luna fría de noche
    const sunLevel = smooth(-0.04, 0.3, sinA) * (1 - 0.65 * wet), moonLevel = smooth(0.0, -0.3, sinA) * (1 - 0.7 * wet);
    const low = Math.max(0, 1 - Math.abs(sinA) * 3.2) * (1 - wet);
    const dayDir = new THREE.Vector3(cosA, sinA, 0.28).normalize();
    const useSun = sinA > -0.04;
    this.lightDir.copy(useSun ? dayDir : dayDir.clone().negate());
    this.sunLight.color.setRGB(1, 0.95 - 0.38 * low, 0.88 - 0.62 * low); if (!useSun) this.sunLight.color.setRGB(0.55, 0.66, 1);
    this.sunLight.intensity = (useSun ? 3.4 * sunLevel : 0.6 * moonLevel) + flash * 2.5;
    this.hemi.color.copy(this.sky).lerp(WHITE, 0.6); this.hemi.groundColor.setRGB(0.42, 0.36, 0.28).multiplyScalar(0.4 + 0.6 * this.daylight);
    this.hemi.intensity = 0.3 + 2.5 * this.daylight + 0.3 * moonLevel + flash * 3;
    // la luz sigue al jugador (cuadriculada para evitar parpadeos de sombra)
    const grid = this.shadowOn ? (2 * this.shadowExt) / Math.max(256, this.sunLight.shadow.mapSize.x) : 1;
    const tx = Math.round(playerPos.x / grid) * grid, ty = Math.round(playerPos.y / grid) * grid, tz = Math.round(playerPos.z / grid) * grid;
    this.sunLight.target.position.set(tx, ty, tz);
    this.sunLight.position.set(tx + this.lightDir.x * 160, ty + this.lightDir.y * 160, tz + this.lightDir.z * 160);
    this.sunLight.castShadow = this.shadowOn && this.sunLight.intensity > 0.05;

    this.root.position.copy(this.camera.position);
    const R = 220;
    this.sun.position.set(cosA * R, sinA * R, 30);
    this.glow.position.set(cosA * R * 0.98, sinA * R * 0.98, 30); this.glow.material.opacity = Math.max(0, Math.min(1, (sinA + 0.15) * 1.6)) * (1 - wet) * (underwater ? 0 : 1);
    this.moon.position.set(-cosA * R, -sinA * R, 30);
    this.sun.lookAt(this.camera.position); this.moon.lookAt(this.camera.position);
    this.stars.rotation.z = a;
    this.starMat.opacity = Math.max(0, 1 - this.daylight * 1.6) * (underwater ? 0 : 1) * (1 - wet);
    this.sun.material.opacity = this.moon.material.opacity = 1 - wet * 0.95;

    const sp = 1.2 + wind.s * 10;
    this.cloudX += wind.x / (wind.s || 1) * sp * dt; this.cloudZ += wind.z / (wind.s || 1) * sp * dt;
    const size = 64 * 12; // cada píxel de la textura = 12 bloques
    const shade = (0.3 + 0.7 * raw) * (1 - 0.5 * wet);
    for (const [m, mat, y, mul] of [[this.clouds, this.cloudMat, 150, 1], [this.clouds2, this.cloudMat2, 142, 0.7]]) {
      m.position.set(playerPos.x, y, playerPos.z);
      mat.map.repeat.set(900 / size, 900 / size);
      mat.map.offset.set((playerPos.x + this.cloudX * mul) / size + (mul < 1 ? 0.37 : 0), -(playerPos.z + this.cloudZ * mul) / size);
      mat.color.setScalar(shade * (mul < 1 ? 0.8 : 1));
    }
    this.cloudMat.opacity = 0.9;
    this.cloudMat2.opacity = Math.min(0.95, wet * 1.1);
    this.clouds2.visible = wet > 0.05;
  }
}
