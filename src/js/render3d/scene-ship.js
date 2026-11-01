/**
 * Escena 3D de la nave (modos clásico y zombi): suelo, muros, props, luces.
 */
'use strict';

function buildClassic3D(scene) {
  const L = R3.L;
  scene.background = new THREE.Color(0x03050a);
  scene.fog = new THREE.FogExp2(0x03050a, 0.0017);
  L.amb = new THREE.AmbientLight(0x4a5a78, 0.6);
  scene.add(L.amb);
  L.hemi = new THREE.HemisphereLight(0x8fb0ff, 0x201810, 0.35);
  scene.add(L.hemi);
  L.spot = new THREE.SpotLight(0xfff0d0, 2.4, 1100, 0.62, 0.55, 1);
  L.spot.castShadow = true;
  L.spot.shadow.mapSize.set(1024, 1024);
  L.spot.shadow.camera.near = 10;
  L.spot.shadow.camera.far = 1200;
  L.spot.shadow.bias = -0.0008;
  scene.add(L.spot, L.spot.target);
  L.pl = new THREE.PointLight(0xffffff, 0.7, 330, 1.5);
  scene.add(L.pl);
  L.muz = new THREE.PointLight(0xffc060, 0, 500, 1.5);
  scene.add(L.muz);
  for (const [x, z, c, i] of [
    [360, 850, 0x5aa8ff, 1.6],
    [2235, 845, 0xff9040, 1.2],
    [600, 250, 0x6ff0e0, 1.0],
    [1850, 250, 0x6f8fff, 1.0],
    [1200, 300, 0xffe8c0, 0.9],
    [1200, 725, 0xd0e0ff, 0.7],
    [600, 1325, 0xffee90, 0.8],
    [1200, 1330, 0xe0e0c0, 0.6],
    [1850, 1330, 0x70ffa0, 0.8],
  ]) {
    {
      const pl = new THREE.PointLight(c, i, 620, 1.6);
      pl.position.set(x, 95, z);
      scene.add(pl);
    }
  }
  // suelo (reutiliza el mapa 2D pre-renderizado como textura)
  const floor = new THREE.Mesh(
    new THREE.PlaneGeometry(2400, 1600),
    new THREE.MeshStandardMaterial({ map: glTex(MAP), roughness: 0.75, metalness: 0.15 })
  );
  floor.rotation.x = -Math.PI / 2;
  floor.position.set(1200, 0, 800);
  floor.receiveShadow = true;
  scene.add(floor);
  // paredes: celdas de 10u alrededor de lo caminable
  const C = 10,
    nx = 240,
    ny = 160,
    wk = new Uint8Array(nx * ny);
  for (let j = 0; j < ny; j++)
    for (let i = 0; i < nx; i++) wk[j * nx + i] = walk(i * C + 5, j * C + 5) ? 1 : 0;
  const cells = [];
  for (let j = 0; j < ny; j++)
    for (let i = 0; i < nx; i++) {
      if (wk[j * nx + i]) continue;
      let near = false;
      for (let dj = -2; dj <= 2 && !near; dj++)
        for (let di = -2; di <= 2; di++) {
          const a = i + di,
            b = j + dj;
          if (a >= 0 && b >= 0 && a < nx && b < ny && wk[b * nx + a]) {
            near = true;
            break;
          }
        }
      if (near) cells.push([i, j]);
    }
  const walls = new THREE.InstancedMesh(
    new THREE.BoxGeometry(C, 100, C),
    mat('#56627a', { roughness: 0.45, metalness: 0.55 }),
    cells.length
  );
  walls.castShadow = true;
  walls.receiveShadow = true;
  const d = new THREE.Object3D(),
    col = new THREE.Color();
  cells.forEach((c, k) => {
    d.position.set(c[0] * C + 5, 50, c[1] * C + 5);
    d.updateMatrix();
    walls.setMatrixAt(k, d.matrix);
    col.setHSL(0.6, 0.12, 0.28 + ((c[0] * 7 + c[1] * 13) % 9) * 0.012);
    walls.setColorAt(k, col);
  });
  walls.instanceMatrix.needsUpdate = true;
  walls.instanceColor.needsUpdate = true;
  scene.add(walls);
  // franja luminosa superior de los muros (cinta de borde)
  // props
  const table = cyl(95, 95, 26, '#8c8a82', 1200, 13, 300, { roughness: 0.45, metalness: 0.5 });
  table.scale.set(1, 1, 0.58);
  scene.add(table);
  scene.add(
    bx(110, 26, 40, '#8c8a82', 1015, 13, 430, { metalness: 0.4 }),
    bx(110, 26, 40, '#8c8a82', 1385, 13, 420, { metalness: 0.4 })
  );
  scene.add(
    bx(60, 80, 52, '#3b5d8a', 1270, 40, 134),
    bx(60, 80, 52, '#8a3b3b', 1340, 40, 134),
    bx(44, 20, 2, '#bfe', 1270, 60, 159, { emissive: 0x7fd0ff, emissiveIntensity: 1 }),
    bx(44, 20, 2, '#fbb', 1340, 60, 159, { emissive: 0xff8080, emissiveIntensity: 1 })
  );
  for (const x of [430, 550, 670]) scene.add(bx(100, 20, 52, '#cfd8dc', x, 10, 396));
  {
    const tr = new THREE.Mesh(
      new THREE.TorusGeometry(50, 5, 12, 40),
      mat('#7ff', { emissive: 0x40ffe0, emissiveIntensity: 1.2 })
    );
    tr.position.set(650, 55, 250);
    scene.add(tr);
  }
  scene.add(
    bx(280, 40, 44, '#3a4660', 1900, 20, 322),
    bx(300, 70, 6, '#223', 1850, 75, 112, { emissive: 0x4060ff, emissiveIntensity: 0.8 })
  );
  for (let i = 0; i < 3; i++)
    scene.add(
      bx(10, 4, 4, '#fff', 1790 + i * 20, 42, 322, {
        emissive: [0x33ff33, 0xff9933, 0x3399ff][i],
        emissiveIntensity: 2,
      })
    );
  const core = cyl(50, 50, 150, '#6ab', 360, 75, 850, {
    emissive: 0x3aa0ff,
    emissiveIntensity: 1.3,
    roughness: 0.2,
    metalness: 0.5,
  });
  scene.add(core);
  R3.core = core;
  scene.add(
    bx(30, 80, 300, '#555', 135, 40, 830, { metalness: 0.7 }),
    bx(40, 60, 120, '#555', 470, 30, 960, { metalness: 0.7 })
  );
  for (const ez of [750, 940]) {
    const e = cyl(42, 42, 90, '#4a4a52', 2235, 60, ez, { metalness: 0.7, roughness: 0.35 });
    e.rotation.z = Math.PI / 2;
    scene.add(e);
    const f = cyl(30, 30, 6, '#111', 2192, 60, ez);
    f.rotation.z = Math.PI / 2;
    scene.add(f);
  }
  scene.add(bx(300, 40, 10, '#33382f', 580, 70, 1165));
  for (let i = 0; i < 10; i++)
    scene.add(
      bx(6, 6, 4, '#fff', 450 + i * 28, 72, 1171, {
        emissive: [0xff3333, 0x33ff33, 0xffcc33][i % 3],
        emissiveIntensity: 2.2,
      })
    );
  scene.add(bx(70, 90, 70, '#555', 735, 45, 1425, { metalness: 0.6 }));
  for (const [cx, cy, s] of [
    [990, 1190, 70],
    [1070, 1190, 70],
    [1030, 1262, 60],
    [1350, 1370, 90],
    [1000, 1400, 60],
    [1400, 1190, 55],
  ])
    scene.add(bx(s, s, s, '#8b6b3a', cx + s / 2, s / 2, cy + s / 2, { roughness: 0.9 }));
  scene.add(bx(150, 30, 46, '#222a30', 2015, 15, 1233));
  for (let i = 0; i < 3; i++)
    scene.add(
      bx(34, 24, 3, '#142', 1970 + i * 46, 48, 1218, { emissive: 0x30ff80, emissiveIntensity: 1.1 })
    );
  scene.add(bx(160, 36, 40, '#2a3238', 1780, 18, 1400));
  for (const v of VENTS) scene.add(bx(48, 3, 28, '#1d2026', v.x, 1.5, v.y, { metalness: 0.6 }));
  // monitor de cámaras
  scene.add(
    bx(48, 40, 10, '#143', CAMPT.x, 38, CAMPT.y, { emissive: 0x30ff80, emissiveIntensity: 0.7 })
  );
  const z = G.mode === 'zombie';
  // estaciones de tarea
  R3.st = STATIONS.map((s, i) => {
    const gp = new THREE.Group();
    gp.position.set(s.x, 0, s.y);
    gp.add(bx(44, 34, 36, '#2f3b4a', 0, 17, 0, { metalness: 0.5 }));
    const top = bx(36, 3, 28, '#445', 0, 36, 0, { emissive: 0x000000 });
    gp.add(top);
    const sc = bx(34, 22, 2, '#111', 0, 26, -18, { emissive: 0x000000 });
    sc.rotation.x = -0.3;
    gp.add(sc);
    const lb = mkLabel(s.name);
    lb.position.set(0, 80, 0);
    gp.add(lb);
    gp.visible = !z;
    scene.add(gp);
    return { gp, top, sc, lb };
  });
  // botón de emergencia
  R3.ebtn = new THREE.Group();
  R3.ebtn.position.set(BTN.x, 0, BTN.y);
  R3.ebtn.add(cyl(32, 34, 40, '#444', 0, 20, 0, { metalness: 0.6 }));
  const bm = cyl(22, 22, 12, '#e53935', 0, 46, 0, { emissive: 0xff2020, emissiveIntensity: 1 });
  R3.ebtn.add(bm);
  R3.ebtnM = bm;
  R3.ebtn.visible = !z;
  scene.add(R3.ebtn);
  // puertas
  R3.doors = DOORS.map(d => {
    const m = bx(d[2], 100, d[3], '#667088', d[0] + d[2] / 2, 50, d[1] + d[3] / 2, {
      metalness: 0.7,
      emissive: 0x550000,
      emissiveIntensity: 0.8,
    });
    m.visible = false;
    scene.add(m);
    return m;
  });
  // puntos de reparación
  R3.fix = [0, 1].map(() => {
    const m = cyl(24, 24, 60, '#8a1111', 0, 30, 0, { emissive: 0xff2020, emissiveIntensity: 1.4 });
    m.visible = false;
    scene.add(m);
    const lb = mkLabel('REPARAR', '#ff8a80');
    lb.position.set(0, 90, 0);
    m.add(lb);
    return m;
  });
  // cápsula de escape y bolsas (zombi)
  const pod = new THREE.Group();
  pod.position.set(POD.x, 0, POD.y);
  const pm = new THREE.Mesh(
    new THREE.CapsuleGeometry(30, 40, 8, 16),
    mat('#223', { emissive: 0x40ff90, emissiveIntensity: 0.8, metalness: 0.6, roughness: 0.3 })
  );
  pm.rotation.z = Math.PI / 2;
  pm.position.y = 36;
  pod.add(pm);
  const pl = new THREE.PointLight(0x40ff90, 1.6, 400, 1.5);
  pl.position.y = 60;
  pod.add(pl);
  const plb = mkLabel('CÁPSULA DE ESCAPE', '#9fb');
  plb.position.y = 110;
  pod.add(plb);
  pod.visible = false;
  scene.add(pod);
  R3.pod = pod;
  R3.bagM = [];
  if (z && G.bags)
    for (const b of G.bags) {
      const m = new THREE.Group();
      m.position.set(b.x, 0, b.y);
      m.add(bx(34, 24, 26, '#4d5a3d', 0, 12, 0, { roughness: 0.95 }));
      m.add(bx(26, 4, 4, '#8a7a50', 0, 26, 0));
      scene.add(m);
      R3.bagM.push(m);
    }
}
