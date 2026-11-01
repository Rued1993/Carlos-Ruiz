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
        map: glTex(c, true),
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
  for (let k = 1; k <= 8; k++) {
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
    new THREE.MeshBasicMaterial({ color: 0xffb030 }),
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
  sb.pOB = new Uint8Array(WW * WH);
  sb.pGR = new Uint8Array(WW * WH);
  sb.sig = -1;
  sb.dirty = true;
}
function sbRebuild3D() {
  const sb = R3.sb,
    d = new THREE.Object3D(),
    gc = new Array(7).fill(0),
    oc = new Array(9).fill(0);
  let lc = 0,
    tc = 0;
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
      } else if (o >= 1 && o <= 8 && oc[o] < 3990) put(sb.o[o], oc[o]++, cx, TS / 2, cz);
    }
  sb.g.forEach((m, i) => {
    m.count = gc[i];
    m.instanceMatrix.needsUpdate = true;
  });
  for (let k = 1; k <= 8; k++) {
    sb.o[k].count = oc[k];
    sb.o[k].instanceMatrix.needsUpdate = true;
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
