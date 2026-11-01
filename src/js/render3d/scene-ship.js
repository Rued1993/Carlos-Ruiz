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
    new THREE.MeshStandardMaterial({ map: glTex(MAP), roughness: 0.58, metalness: 0.3 })
  );
  floor.rotation.x = -Math.PI / 2;
  floor.position.set(1200, 0, 800);
  floor.receiveShadow = true;
  scene.add(floor);
  scene.environment = makeEnv('ship');
  // detalle de alta frecuencia: juntas, remaches y rozaduras repetidas por cada sala/pasillo
  {
    const dc = document.createElement('canvas');
    dc.width = dc.height = 256;
    const dx = dc.getContext('2d');
    dx.strokeStyle = 'rgba(0,0,0,.55)';
    dx.lineWidth = 3;
    dx.strokeRect(1.5, 1.5, 253, 253);
    dx.strokeStyle = 'rgba(255,255,255,.14)';
    dx.lineWidth = 1.5;
    dx.beginPath();
    dx.moveTo(5, 251);
    dx.lineTo(5, 5);
    dx.lineTo(251, 5);
    dx.stroke();
    dx.fillStyle = 'rgba(0,0,0,.55)';
    for (const [rx0, ry0] of [
      [14, 14],
      [242, 14],
      [14, 242],
      [242, 242],
    ]) {
      dx.beginPath();
      dx.arc(rx0, ry0, 3.2, 0, 6.3);
      dx.fill();
    }
    for (let k = 0; k < 260; k++) {
      dx.fillStyle = `rgba(${k % 2 ? '0,0,0' : '255,255,255'},${Math.random() * 0.07})`;
      dx.fillRect(Math.random() * 256, Math.random() * 256, 1 + Math.random() * 14, 1);
    }
    const dt = glTex(dc);
    dt.wrapS = dt.wrapT = THREE.RepeatWrapping;
    const dm = new THREE.MeshStandardMaterial({
      map: dt,
      transparent: true,
      roughness: 0.9,
      depthWrite: false,
      polygonOffset: true,
      polygonOffsetFactor: -1,
    });
    for (const r of ALL) {
      const geo = new THREE.PlaneGeometry(r[2], r[3]),
        uv = geo.attributes.uv;
      for (let q = 0; q < uv.count; q++)
        uv.setXY(q, (uv.getX(q) * r[2]) / 100, (uv.getY(q) * r[3]) / 100);
      const m = new THREE.Mesh(geo, dm);
      m.rotation.x = -Math.PI / 2;
      m.position.set(r[0] + r[2] / 2, 0.4, r[1] + r[3] / 2);
      m.receiveShadow = true;
      scene.add(m);
    }
  }
  // haz de linterna volumétrico y polvo en suspensión
  R3.beam = makeBeam([0.95, 0.88, 0.7], 520, 150);
  scene.add(R3.beam);
  fxDustInit(scene);
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
  // tuberías pegadas a las paredes, tiras guía en los pasillos y marcos luminosos en las puertas
  {
    const pipes = [],
      dirs = [
        [1, 0],
        [-1, 0],
        [0, 1],
        [0, -1],
      ];
    for (const c of cells) {
      if ((c[0] * 5 + c[1] * 3) % 4 !== 0) continue;
      for (const [dx, dz] of dirs) {
        const a = c[0] + dx,
          b = c[1] + dz;
        if (a >= 0 && b >= 0 && a < nx && b < ny && wk[b * nx + a]) {
          pipes.push([c[0] * C + 5 + dx * 6.5, c[1] * C + 5 + dz * 6.5, dx !== 0]);
          break;
        }
      }
    }
    const pm = new THREE.InstancedMesh(
      new THREE.CylinderGeometry(2.6, 2.6, C, 8),
      mat('#7b8696', { roughness: 0.35, metalness: 0.85 }),
      pipes.length
    );
    const d2 = new THREE.Object3D();
    pipes.forEach((q, k) => {
      d2.position.set(q[0], 72, q[1]);
      d2.rotation.set(q[2] ? Math.PI / 2 : 0, 0, q[2] ? 0 : Math.PI / 2);
      d2.updateMatrix();
      pm.setMatrixAt(k, d2.matrix);
    });
    pm.castShadow = true;
    pm.instanceMatrix.needsUpdate = true;
    scene.add(pm);
    const dashes = [],
      posts = [];
    for (const r of CORR) {
      const horiz = r[2] > r[3];
      for (let t = 18; t < (horiz ? r[2] : r[3]) - 8; t += 36)
        dashes.push(horiz ? [r[0] + t, r[1] + r[3] / 2, 1] : [r[0] + r[2] / 2, r[1] + t, 0]);
      for (const e of horiz ? [r[0], r[0] + r[2]] : [r[1], r[1] + r[3]])
        for (const o of horiz ? [r[1], r[1] + r[3]] : [r[0], r[0] + r[2]])
          posts.push(horiz ? [e, o] : [o, e]);
    }
    const gm = new THREE.InstancedMesh(
      new THREE.BoxGeometry(14, 1, 2.6),
      new THREE.MeshBasicMaterial({ color: new THREE.Color(2.4, 1.4, 0.3) }),
      dashes.length
    );
    dashes.forEach((q, k) => {
      d2.position.set(q[0], 0.9, q[1]);
      d2.rotation.set(0, q[2] ? 0 : Math.PI / 2, 0);
      d2.updateMatrix();
      gm.setMatrixAt(k, d2.matrix);
    });
    gm.instanceMatrix.needsUpdate = true;
    scene.add(gm);
    const fm = new THREE.InstancedMesh(
      new THREE.BoxGeometry(4, 96, 4),
      new THREE.MeshBasicMaterial({ color: new THREE.Color(0.5, 2, 3) }),
      posts.length
    );
    posts.forEach((q, k) => {
      d2.position.set(q[0], 48, q[1]);
      d2.rotation.set(0, 0, 0);
      d2.updateMatrix();
      fm.setMatrixAt(k, d2.matrix);
    });
    fm.instanceMatrix.needsUpdate = true;
    scene.add(fm);
  }
  // tiras de luz HDR en la cara interior de los muros (brillan con el bloom)
  {
    const strips = cells.filter(
      c =>
        (c[0] * 3 + c[1] * 5) % 6 === 0 &&
        (wk[c[1] * nx + c[0] + 1] ||
          wk[c[1] * nx + c[0] - 1] ||
          wk[(c[1] + 1) * nx + c[0]] ||
          wk[(c[1] - 1) * nx + c[0]])
    );
    const sm = new THREE.InstancedMesh(
      new THREE.BoxGeometry(7, 3, 7),
      new THREE.MeshBasicMaterial({ color: new THREE.Color(0.5, 2.2, 3.2) }),
      strips.length
    );
    strips.forEach((c, k) => {
      d.position.set(c[0] * C + 5, 98, c[1] * C + 5);
      d.updateMatrix();
      sm.setMatrixAt(k, d.matrix);
    });
    sm.instanceMatrix.needsUpdate = true;
    scene.add(sm);
  }
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
  R3.spin = [];
  // anillos del reactor y holograma de la cafetería: piezas en rotación continua
  for (const [rad, ax, sp] of [
    [66, 'x', 0.9],
    [74, 'z', -0.6],
    [58, 'y', 1.4],
  ]) {
    const ring = new THREE.Mesh(
      new THREE.TorusGeometry(rad, 2.6, 10, 56),
      new THREE.MeshBasicMaterial({ color: new THREE.Color(0.4, 1.8, 3.2) })
    );
    ring.position.set(360, 80, 850);
    scene.add(ring);
    R3.spin.push({ o: ring, ax, sp });
  }
  {
    const holo = new THREE.Group();
    holo.position.set(1200, 70, 300);
    const hm = new THREE.MeshBasicMaterial({
      color: new THREE.Color(0.5, 2.2, 3),
      wireframe: true,
      transparent: true,
      opacity: 0.8,
    });
    holo.add(new THREE.Mesh(new THREE.IcosahedronGeometry(18, 1), hm));
    holo.add(new THREE.Mesh(new THREE.TorusGeometry(30, 0.9, 6, 40), hm));
    const hl = new THREE.PointLight(0x40d8ff, 0.9, 260, 1.6);
    holo.add(hl);
    scene.add(holo);
    R3.spin.push({ o: holo, ax: 'y', sp: 0.7 });
  }
  scene.add(
    bx(30, 80, 300, '#555', 135, 40, 830, { metalness: 0.7 }),
    bx(40, 60, 120, '#555', 470, 30, 960, { metalness: 0.7 })
  );
  for (const ez of [750, 940]) {
    const e = cyl(42, 42, 90, '#4a4a52', 2235, 60, ez, { metalness: 0.7, roughness: 0.35 });
    e.rotation.z = Math.PI / 2;
    scene.add(e);
    const fan = new THREE.Group();
    fan.position.set(2190, 60, ez);
    for (let k = 0; k < 4; k++) {
      const bl = bx(2.4, 5, 56, '#9aa4ae', 0, 0, 0, { metalness: 0.8, roughness: 0.3 });
      bl.rotation.x = (k * Math.PI) / 4;
      fan.add(bl);
    }
    fan.add(cyl(5, 5, 4, '#222', 0, 0, 0));
    scene.add(fan);
    R3.spin.push({ o: fan, ax: 'x', sp: 9 });
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
