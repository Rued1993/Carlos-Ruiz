/**
 * Escena 3D vóxel del Mundo cubo: instancias de bloques, árboles, sol y antorchas.
 */
'use strict';

function buildSandbox3D(scene) {
  const L = R3.L;
  scene.background = new THREE.Color(0x8fc8ff);
  scene.fog = new THREE.Fog(0x8fc8ff, 300, 1250);
  L.hemi = new THREE.HemisphereLight(0xbfd9ff, 0x4a5a3a, 0.7);
  scene.add(L.hemi);
  L.amb = new THREE.AmbientLight(0xffffff, 0.25);
  scene.add(L.amb);
  L.sun = new THREE.DirectionalLight(0xfff2d0, 1.2);
  L.sun.castShadow = true;
  L.sun.shadow.mapSize.set(2048, 2048);
  const sc = L.sun.shadow.camera;
  sc.left = -420;
  sc.right = 420;
  sc.top = 420;
  sc.bottom = -420;
  sc.near = 10;
  sc.far = 2200;
  L.sun.shadow.bias = -0.0006;
  scene.add(L.sun, L.sun.target);
  L.tl = [0, 1, 2, 3, 4, 5].map(() => {
    const l = new THREE.PointLight(0xffa040, 0, 300, 1.4);
    scene.add(l);
    return l;
  });
  const gGeo = new THREE.BoxGeometry(TS, 10, TS),
    bGeo = new THREE.BoxGeometry(TS, TS, TS),
    sb = (R3.sb = {});
  sb.g = TEX.g.map((c, i) => {
    const m = new THREE.InstancedMesh(
      gGeo,
      new THREE.MeshStandardMaterial({
        map: glTex(c, true, i == 0),
        roughness: i == 0 ? 0.25 : 0.95,
        metalness: i == 0 ? 0.1 : 0,
        transparent: i == 0,
        opacity: i == 0 ? 0.85 : 1,
      }),
      WW * WH
    );
    m.receiveShadow = true;
    m.count = 0;
    m.frustumCulled = false;
    scene.add(m);
    return m;
  });
  sb.o = [];
  for (const k of [1, 2, 3, 4, 5, 6, 7, 8, 11]) {
    const m = new THREE.InstancedMesh(
      bGeo,
      new THREE.MeshStandardMaterial({ map: glTex(TEX.o[k], true), roughness: 0.9 }),
      4000
    );
    m.castShadow = true;
    m.receiveShadow = true;
    m.count = 0;
    m.frustumCulled = false;
    scene.add(m);
    sb.o[k] = m;
  }
  sb.leaf = new THREE.InstancedMesh(
    bGeo,
    new THREE.MeshStandardMaterial({
      map: glTex(TEX.leaf, true),
      roughness: 1,
      alphaTest: 0.5,
      side: THREE.DoubleSide,
    }),
    3500
  );
  sb.leaf.castShadow = true;
  sb.leaf.receiveShadow = true;
  sb.leaf.count = 0;
  sb.leaf.frustumCulled = false;
  scene.add(sb.leaf);
  sb.stick = new THREE.InstancedMesh(new THREE.BoxGeometry(6, 26, 6), mat('#7a4a1a'), 600);
  sb.flame = new THREE.InstancedMesh(
    new THREE.BoxGeometry(9, 9, 9),
    new THREE.MeshBasicMaterial({ color: new THREE.Color(3.4, 2, 0.55) }),
    600
  );
  for (const m of [sb.stick, sb.flame]) {
    m.count = 0;
    m.frustumCulled = false;
    scene.add(m);
  }
  const btn = new THREE.Group();
  btn.position.set(SPAWN.x * TS + TS / 2, 0, (SPAWN.y - 1) * TS + TS / 2);
  btn.add(cyl(14, 16, 14, '#444', 0, 7, 0, { metalness: 0.6 }));
  const bm = cyl(11, 11, 8, '#e53935', 0, 17, 0, { emissive: 0xff2020, emissiveIntensity: 1.6 });
  btn.add(bm);
  const bl = new THREE.PointLight(0xff3030, 1.1, 260, 1.5);
  bl.position.y = 40;
  btn.add(bl);
  scene.add(btn);
  R3.sbBtn = bm;
  sb.hl = new THREE.LineSegments(
    new THREE.EdgesGeometry(new THREE.BoxGeometry(TS + 3, TS + 3, TS + 3)),
    new THREE.LineBasicMaterial({ color: 0xffffff })
  );
  scene.add(sb.hl);
  sb.crack = new THREE.Mesh(
    new THREE.BoxGeometry(TS + 2, TS + 2, TS + 2),
    new THREE.MeshBasicMaterial({
      color: 0x000000,
      transparent: true,
      opacity: 0,
      depthWrite: false,
    })
  );
  scene.add(sb.crack);
  buildSky3D(scene, sb);
  buildGrass3D(scene, sb);
  sb.pOB = new Uint8Array(WW * WH);
  sb.pGR = new Uint8Array(WW * WH);
  sb.sig = -1;
  sb.dirty = true;
}
function sbRebuild3D() {
  const sb = R3.sb,
    d = new THREE.Object3D(),
    gc = new Array(7).fill(0),
    oc = new Array(12).fill(0);
  let lc = 0,
    tc = 0,
    na = 0,
    nb = 0,
    nf = 0;
  const d2 = new THREE.Object3D(),
    tint = new THREE.Color();
  const putRot = (mesh, idx, x, z, ry, s) => {
    d2.position.set(x, 0, z);
    d2.rotation.set(0, ry, 0);
    d2.scale.setScalar(s);
    d2.updateMatrix();
    mesh.setMatrixAt(idx, d2.matrix);
  };
  const put = (mesh, idx, x, y, z) => {
    d.position.set(x, y, z);
    d.updateMatrix();
    mesh.setMatrixAt(idx, d.matrix);
  };
  for (let ty = 0; ty < WH; ty++)
    for (let tx = 0; tx < WW; tx++) {
      const i = ty * WW + tx,
        gr = GR[i],
        cx = tx * TS + TS / 2,
        cz = ty * TS + TS / 2;
      put(sb.g[gr], gc[gr]++, cx, gr == 0 ? -11 : -5, cz);
      const o = OB[i];
      if (!o && gr == G_GRASS) {
        const h1 = hash(tx, ty, 77),
          jx = (hash(tx, ty, 78) - 0.5) * 22,
          jz = (hash(tx, ty, 79) - 0.5) * 22;
        if (h1 < 0.42 && na < 4790) {
          const s = 0.8 + hash(tx, ty, 80) * 0.6;
          putRot(sb.tuftA, na, cx + jx, cz + jz, Math.PI / 4, s);
          putRot(sb.tuftB, nb, cx + jx, cz + jz, -Math.PI / 4, s);
          tint.setHSL(0.27 + hash(tx, ty, 81) * 0.08, 0.55, 0.3 + hash(tx, ty, 82) * 0.12);
          sb.tuftA.setColorAt(na, tint);
          sb.tuftB.setColorAt(nb, tint);
          na++;
          nb++;
        } else if (h1 > 0.95 && nf < 1390) {
          putRot(sb.flowers, nf, cx + jx, cz + jz, hash(tx, ty, 83) * 3, 0.9);
          tint.setHex(
            [0xff4a5a, 0xffe24a, 0xffffff, 0xb06aff, 0xff9a3a][Math.floor(hash(tx, ty, 84) * 5)]
          );
          sb.flowers.setColorAt(nf, tint);
          nf++;
        }
      }
      if (!o) continue;
      if (o == O_LOG) {
        const tr = TREES.get(i),
          h = tr && tr.logs >= 3 ? 2 : 1;
        for (let k = 0; k < h; k++) put(sb.o[1], oc[1]++, cx, TS / 2 + k * TS, cz);
        if (tr) {
          for (let dz = -1; dz <= 1; dz++)
            for (let dx = -1; dx <= 1; dx++)
              if (lc < 3490) put(sb.leaf, lc++, cx + dx * TS, 2.5 * TS, cz + dz * TS);
          if (lc < 3490) put(sb.leaf, lc++, cx, 3.5 * TS, cz);
        }
      } else if (o == O_TORCH) {
        put(sb.stick, tc, cx, 13, cz);
        put(sb.flame, tc, cx, 32, cz);
        tc++;
      } else if (((o >= 1 && o <= 8) || o === 11) && oc[o] < 3990)
        put(sb.o[o], oc[o]++, cx, TS / 2, cz);
    }
  sb.g.forEach((m, i) => {
    m.count = gc[i];
    m.instanceMatrix.needsUpdate = true;
  });
  for (const k of [1, 2, 3, 4, 5, 6, 7, 8, 11]) {
    sb.o[k].count = oc[k];
    sb.o[k].instanceMatrix.needsUpdate = true;
  }
  for (const [m, n] of [
    [sb.tuftA, na],
    [sb.tuftB, nb],
    [sb.flowers, nf],
  ]) {
    m.count = n;
    m.instanceMatrix.needsUpdate = true;
    if (m.instanceColor) m.instanceColor.needsUpdate = true;
  }
  sb.leaf.count = lc;
  sb.leaf.instanceMatrix.needsUpdate = true;
  sb.stick.count = sb.flame.count = tc;
  sb.stick.instanceMatrix.needsUpdate = true;
  sb.flame.instanceMatrix.needsUpdate = true;
  sb.pOB.set(OB);
  sb.pGR.set(GR);
  let s = 0;
  for (const t of TREES.values()) s += t.logs;
  sb.sig = s;
}
function sbNeedsRebuild() {
  const sb = R3.sb;
  if (sb.dirty) {
    sb.dirty = false;
    return true;
  }
  let s = 0;
  for (const t of TREES.values()) s += t.logs;
  if (s !== sb.sig) return true;
  for (let i = 0; i < OB.length; i++) if (OB[i] !== sb.pOB[i] || GR[i] !== sb.pGR[i]) return true;
  return false;
}

/** Cúpula de cielo con degradado, estrellas, sol, luna y nubes. */
function buildSky3D(scene, sb) {
  sb.sky = new THREE.Mesh(
    new THREE.SphereGeometry(3200, 24, 16),
    new THREE.ShaderMaterial({
      side: THREE.BackSide,
      depthWrite: false,
      fog: false,
      uniforms: { top: { value: new THREE.Color() }, hor: { value: new THREE.Color() } },
      vertexShader:
        'varying float h; void main(){ h = normalize(position).y; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }',
      fragmentShader:
        'uniform vec3 top; uniform vec3 hor; varying float h; void main(){ gl_FragColor = vec4(mix(hor, top, pow(clamp(h, 0.0, 1.0), 0.55)), 1.0); }',
    })
  );
  sb.sky.renderOrder = -10;
  scene.add(sb.sky);
  const sp = new Float32Array(1800 * 3);
  for (let i = 0; i < 1800; i++) {
    const a = Math.random() * 6.283,
      e = Math.acos(Math.random()) * 0.98;
    sp[i * 3] = Math.cos(a) * Math.sin(e) * 3000;
    sp[i * 3 + 1] = Math.cos(e) * 3000;
    sp[i * 3 + 2] = Math.sin(a) * Math.sin(e) * 3000;
  }
  const sg = new THREE.BufferGeometry();
  sg.setAttribute('position', new THREE.BufferAttribute(sp, 3));
  sb.stars = new THREE.Points(
    sg,
    new THREE.PointsMaterial({
      color: new THREE.Color(1.6, 1.6, 2),
      size: 2.4,
      sizeAttenuation: false,
      transparent: true,
      opacity: 0,
      depthWrite: false,
      fog: false,
    })
  );
  scene.add(sb.stars);
  sb.sun = new THREE.Mesh(
    new THREE.SphereGeometry(110, 16, 12),
    new THREE.MeshBasicMaterial({ color: new THREE.Color(4, 3.2, 1.6), fog: false })
  );
  sb.moon = new THREE.Mesh(
    new THREE.SphereGeometry(80, 16, 12),
    new THREE.MeshBasicMaterial({ color: new THREE.Color(1.8, 2, 2.8), fog: false })
  );
  scene.add(sb.sun, sb.moon);
  sb.clouds = new THREE.InstancedMesh(
    new THREE.BoxGeometry(280, 26, 170),
    new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.88, fog: false }),
    22
  );
  sb.clouds.frustumCulled = false;
  sb.cloudPos = Array.from({ length: 22 }, () => ({
    x: Math.random() * WW * TS,
    z: Math.random() * WH * TS,
    y: 560 + Math.random() * 120,
    s: 0.7 + Math.random() * 1.1,
  }));
  scene.add(sb.clouds);
}
/** Mechones de hierba y flores (planos cruzados con alphaTest, instanciados). */
function buildGrass3D(scene, sb) {
  const mk = (draw, n) => {
    const c = document.createElement('canvas');
    c.width = c.height = 16;
    draw(c.getContext('2d'));
    const t = glTex(c, true),
      geo = new THREE.PlaneGeometry(26, 22);
    geo.translate(0, 11, 0);
    const m = new THREE.InstancedMesh(
      geo,
      new THREE.MeshStandardMaterial({
        map: t,
        alphaTest: 0.5,
        side: THREE.DoubleSide,
        roughness: 1,
      }),
      n
    );
    m.count = 0;
    m.frustumCulled = false;
    m.receiveShadow = true;
    scene.add(m);
    return m;
  };
  const blades = x => {
    x.fillStyle = '#ffffff';
    for (let i = 0; i < 7; i++) {
      const bx0 = 1 + i * 2 + (i % 2),
        h = 7 + ((i * 5) % 7);
      x.fillRect(bx0, 15 - h, 1, h);
      if (i % 3 === 0) x.fillRect(bx0 + 1, 15 - h + 2, 1, 2);
    }
  };
  const flower = x => {
    x.fillStyle = '#4a9a3a';
    x.fillRect(7, 8, 1, 8);
    x.fillStyle = '#ffffff';
    x.fillRect(5, 5, 5, 3);
    x.fillRect(6, 4, 3, 5);
    x.fillStyle = '#ffe24a';
    x.fillRect(7, 6, 1, 1);
  };
  sb.tuftA = mk(blades, 4800);
  sb.tuftB = mk(blades, 4800);
  sb.flowers = mk(flower, 1400);
}
