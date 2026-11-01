/**
 * Escenario 3D de menús y cinemáticas.
 */
'use strict';

function buildStage() {
  if (!TEX) buildTex();
  const sc = new THREE.Scene();
  sc.background = new THREE.Color(0x02030a);
  sc.fog = new THREE.FogExp2(0x02030a, 0.0009);
  const S = (R3.stage = {
    sc,
    models: {},
    cam: new THREE.PerspectiveCamera(48, W / H, 1, 9000),
    t: 0,
    flash: 0,
    shake: 0,
    key: null,
    cp: new THREE.Vector3(0, 100, 380),
    ct: new THREE.Vector3(0, 55, 0),
  });
  S.amb = new THREE.AmbientLight(0x6070a0, 0.8);
  sc.add(S.amb);
  S.keyL = new THREE.SpotLight(0xffffff, 2.6, 1300, 0.85, 0.5, 1);
  S.keyL.position.set(150, 330, 380);
  S.keyL.castShadow = true;
  S.keyL.shadow.mapSize.set(1024, 1024);
  S.keyL.shadow.bias = -0.0006;
  sc.add(S.keyL, S.keyL.target);
  S.rim = new THREE.PointLight(0x40e0ff, 1.8, 900);
  S.rim.position.set(-300, 160, -200);
  sc.add(S.rim);
  S.warm = new THREE.PointLight(0xff8040, 1.2, 700);
  S.warm.position.set(300, 80, 240);
  sc.add(S.warm);
  const N = 2600,
    pa = new Float32Array(N * 3);
  for (let i = 0; i < N; i++) {
    const r = 2800 + Math.random() * 1200,
      a = Math.random() * 6.283,
      b = Math.acos(2 * Math.random() - 1);
    pa[i * 3] = r * Math.sin(b) * Math.cos(a);
    pa[i * 3 + 1] = Math.abs(r * Math.cos(b)) * 0.8 + 60;
    pa[i * 3 + 2] = r * Math.sin(b) * Math.sin(a) - 300;
  }
  const sg = new THREE.BufferGeometry();
  sg.setAttribute('position', new THREE.BufferAttribute(pa, 3));
  S.stars = new THREE.Points(
    sg,
    new THREE.PointsMaterial({ color: 0xffffff, size: 2.4, sizeAttenuation: false, fog: false })
  );
  sc.add(S.stars);
  // El Cubo
  S.cube = new THREE.Group();
  S.cube.position.set(520, 330, -950);
  S.cube.add(
    new THREE.Mesh(
      new THREE.BoxGeometry(300, 300, 300),
      new THREE.MeshStandardMaterial({
        color: 0x0b2a3a,
        emissive: 0x20c0ff,
        emissiveIntensity: 0.45,
        roughness: 0.15,
        metalness: 0.9,
      })
    )
  );
  S.cube.add(
    new THREE.LineSegments(
      new THREE.EdgesGeometry(new THREE.BoxGeometry(304, 304, 304)),
      new THREE.LineBasicMaterial({ color: 0x60f0ff, fog: false })
    )
  );
  const inner = new THREE.Mesh(
    new THREE.BoxGeometry(150, 150, 150),
    new THREE.MeshBasicMaterial({ color: 0x80ffff, wireframe: true, fog: false })
  );
  S.cube.add(inner);
  S.cubeIn = inner;
  const cl = new THREE.PointLight(0x40e8ff, 2.4, 1400);
  S.cube.add(cl);
  sc.add(S.cube);
  // plataforma
  const fl = new THREE.Mesh(
    new THREE.CircleGeometry(620, 56),
    new THREE.MeshStandardMaterial({ color: 0x0a111c, roughness: 0.3, metalness: 0.85 })
  );
  fl.rotation.x = -Math.PI / 2;
  fl.receiveShadow = true;
  sc.add(fl);
  S.floor = fl;
  const grid = new THREE.GridHelper(1200, 40, 0x20c0ff, 0x0f3a4a);
  grid.position.y = 0.5;
  grid.material.transparent = true;
  grid.material.opacity = 0.35;
  sc.add(grid);
  S.grid = grid;
  // planeta de cubos
  S.planet = new THREE.Group();
  {
    const gM = new THREE.MeshStandardMaterial({ map: glTex(TEX.g[2], true), roughness: 1 }),
      dM = new THREE.MeshStandardMaterial({ map: glTex(TEX.g[4], true), roughness: 1 }),
      cols = [];
    for (let x = -16; x <= 16; x++)
      for (let z = -18; z <= -5; z++)
        cols.push([x, z, 1 + Math.floor(vnoise(x / 4, z / 4, 5) * 4)]);
    const geo = new THREE.BoxGeometry(40, 40, 40),
      gi = new THREE.InstancedMesh(geo, gM, cols.length),
      di = new THREE.InstancedMesh(geo, dM, cols.length * 4),
      d = new THREE.Object3D();
    let dn = 0;
    cols.forEach((c, k) => {
      d.position.set(c[0] * 40, c[2] * 40 - 20, c[1] * 40);
      d.updateMatrix();
      gi.setMatrixAt(k, d.matrix);
      for (let h = 0; h < c[2] - 1; h++) {
        d.position.set(c[0] * 40, h * 40 + 20, c[1] * 40);
        d.updateMatrix();
        di.setMatrixAt(dn++, d.matrix);
      }
    });
    di.count = dn;
    gi.castShadow = gi.receiveShadow = di.castShadow = true;
    S.planet.add(gi, di);
    for (const [tx, tz] of [
      [-4, -9],
      [5, -8],
      [-9, -12],
      [10, -11],
    ]) {
      const h = cols.find(c => c[0] == tx && c[1] == tz)[2];
      for (let k = 0; k < 3; k++)
        S.planet.add(
          bx(34, 40, 34, '#6b4a28', tx * 40, h * 40 + 20 + k * 40, tz * 40, { roughness: 1 })
        );
      for (let a = -1; a <= 1; a++)
        for (let b = -1; b <= 1; b++)
          S.planet.add(
            bx(40, 40, 40, '#2a6a22', tx * 40 + a * 40, h * 40 + 140, tz * 40 + b * 40, {
              roughness: 1,
            })
          );
    }
  }
  sc.add(S.planet);
  // interior de nave
  S.ship = new THREE.Group();
  S.ship.add(
    bx(1500, 360, 24, '#1a212b', 0, 180, -330, { metalness: 0.7, roughness: 0.4 }),
    bx(24, 360, 700, '#1a212b', -700, 180, 0, { metalness: 0.7 }),
    bx(24, 360, 700, '#1a212b', 700, 180, 0, { metalness: 0.7 })
  );
  for (let i = -6; i <= 6; i++)
    S.ship.add(
      bx(8, 200, 6, '#3af', i * 110, 190, -316, { emissive: 0x30c0ff, emissiveIntensity: 1.6 })
    );
  S.ship.add(bx(1500, 10, 12, '#f33', 0, 40, -318, { emissive: 0xff2020, emissiveIntensity: 1.2 }));
  sc.add(S.ship);
  sc.environment = makeEnv('stage');
  // bokeh flotante y haces de luz volumétricos
  {
    const c = document.createElement('canvas');
    c.width = c.height = 64;
    const x = c.getContext('2d'),
      g = x.createRadialGradient(32, 32, 0, 32, 32, 32);
    g.addColorStop(0, 'rgba(255,255,255,.9)');
    g.addColorStop(0.5, 'rgba(255,255,255,.25)');
    g.addColorStop(1, 'rgba(255,255,255,0)');
    x.fillStyle = g;
    x.fillRect(0, 0, 64, 64);
    const N = 110,
      geo = new THREE.BufferGeometry(),
      cols = new Float32Array(N * 3);
    S.bokehSeed = Array.from({ length: N }, (_, i) => {
      const k = [
        [0.3, 1.2, 1.7],
        [1.7, 0.4, 1.3],
        [1.8, 1.2, 0.4],
      ][i % 3];
      cols.set(k, i * 3);
      return [rnd(-520, 520), rnd(10, 320), rnd(-340, 220), rnd(0.6, 1.6)];
    });
    geo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(N * 3), 3));
    geo.setAttribute('color', new THREE.BufferAttribute(cols, 3));
    S.bokeh = new THREE.Points(
      geo,
      new THREE.PointsMaterial({
        size: 24,
        map: new THREE.CanvasTexture(c),
        vertexColors: true,
        transparent: true,
        opacity: 0.55,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
        fog: false,
      })
    );
    S.bokeh.frustumCulled = false;
    sc.add(S.bokeh);
    S.beams = [
      [-260, [0.2, 0.9, 1.2]],
      [0, [0.9, 0.9, 1.0]],
      [260, [1.1, 0.4, 0.9]],
    ].map(([bxp, col]) => {
      const b = makeBeam(col, 760, 150);
      b.position.set(bxp * 1.2, 430, -80);
      b.lookAt(bxp * 0.4, 0, 0);
      sc.add(b);
      return b;
    });
  }
  // modelos
  COLORS.forEach((c, idx) => {
    const cs = cosmeticsFor({ isP: idx === 0, id: idx }),
      m = makeCrew(c[0], false, cs[0], cs[1]);
    m.visible = false;
    sc.add(m);
    S.models[c[1]] = m;
  });
  ['Zombi', 'Zombi2', 'Zombi3'].forEach(n => {
    const m = makeCrew('#5f7f52', true);
    m.visible = false;
    sc.add(m);
    S.models[n] = m;
  });
  {
    const m = makeCrew('#8a3030', true);
    m.scale.setScalar(2.3);
    m.visible = false;
    sc.add(m);
    S.models.Alfa = m;
  }
  {
    const g = new THREE.Group(),
      orb = new THREE.Mesh(
        new THREE.SphereGeometry(26, 32, 24),
        new THREE.MeshStandardMaterial({
          color: 0x042030,
          emissive: 0x30e0ff,
          emissiveIntensity: 0.8,
          roughness: 0.1,
          metalness: 0.5,
        })
      );
    orb.position.y = 78;
    g.add(orb);
    const ring = new THREE.Mesh(
      new THREE.TorusGeometry(44, 2.5, 10, 48),
      new THREE.MeshBasicMaterial({ color: 0x80f0ff })
    );
    ring.position.y = 78;
    g.add(ring);
    g.userData.ring = ring;
    g.userData.orb = orb;
    const pl = new THREE.PointLight(0x40e0ff, 1.6, 380);
    pl.position.y = 78;
    g.add(pl);
    g.visible = false;
    sc.add(g);
    S.models.NOVA = g;
  }
}
function stageSet(bg, cast, focus) {
  const S = R3.stage;
  S.bg = bg;
  S.focus = focus;
  const pal = {
    space: [0x02030a, 0.8],
    home: [0x02030a, 0.8],
    ship: [0x060910, 0.9],
    alarm: [0x1c0606, 0.7],
    infected: [0x041208, 0.8],
    planet: [0x86bfff, 1.5],
  }[bg] || [0x02030a, 0.8];
  S.cube.visible = bg === 'space' || bg === 'home' || bg === 'infected';
  S.planet.visible = bg === 'planet';
  S.ship.visible = bg === 'ship' || bg === 'alarm';
  S.stars.visible = bg !== 'planet';
  S.floor.visible = bg !== 'planet';
  S.bokeh.visible = bg !== 'planet' && bg !== 'ship';
  S.beams.forEach(b => (b.visible = bg === 'home' || bg === 'space'));
  S.grid.visible = bg !== 'planet';
  S.sc.background.setHex(pal[0]);
  S.sc.fog.color.setHex(pal[0]);
  S.amb.intensity = pal[1];
  for (const k in S.models) S.models[k].visible = false;
  const n = cast.length,
    sp = Math.min(84, 560 / Math.max(1, n));
  cast.forEach((nm, i) => {
    const m = S.models[nm];
    if (!m) return;
    m.visible = true;
    m.position.set((i - (n - 1) / 2) * sp, bg === 'planet' ? 40 : 0, (i % 2) * -26);
    m.rotation.set(0, -m.position.x * 0.003, 0);
  });
}
function stageHome() {
  stageSet('home', ALLCREW, null);
  const S = R3.stage;
  ALLCREW.forEach((nm, i) => {
    S.models[nm].position.set((i - 4) * 74, 0, (i % 2) * -18);
  });
  [
    ['Zombi', -170],
    ['Zombi2', 0],
    ['Zombi3', 170],
  ].forEach(([n, x]) => {
    const m = S.models[n];
    m.visible = true;
    m.position.set(x, 0, -210);
    m.rotation.y = 0;
  });
}
function renderStage(dt) {
  if (!R3) init3D();
  if (!R3.stage) buildStage();
  const S = R3.stage;
  S.t += dt;
  const key =
    scene === 'cut' && CUT ? 'c' + CUT.id + CUT.i : scene === 'wardrobe' ? 'wardrobe' : 'home';
  if (S.key !== key) {
    S.key = key;
    if (scene === 'cut') {
      const pg = CUT.pages[CUT.i];
      stageSet(pg.bg, pg.cast, pg.w);
    } else if (scene === 'wardrobe') {
      stageSet('space', ['Rojo'], 'Rojo');
      S.models.Rojo.position.set(0, 0, 0);
      S.models.Rojo.rotation.set(0, 0, 0);
      refreshStagePlayer();
    } else stageHome();
  }
  if (R3.w !== W || R3.h !== H) {
    R3.renderer.setSize(W, H, false);
    R3.w = W;
    R3.h = H;
  }
  S.cam.aspect = W / H;
  S.cam.updateProjectionMatrix();
  const foc = S.focus && S.models[S.focus] && S.models[S.focus].visible ? S.models[S.focus] : null;
  let px, py, pz, tx, ty, tz;
  if (scene === 'cut' || scene === 'wardrobe') {
    if (foc) {
      px = foc.position.x * 0.7 + Math.sin(S.t * 0.25) * 24;
      py = 64 + Math.sin(S.t * 0.3) * 4;
      pz = (S.focus === 'Alfa' ? 330 : 190) - Math.cos(S.t * 0.2) * 10;
      tx = foc.position.x;
      ty = S.focus === 'Alfa' ? 110 : scene === 'wardrobe' ? 12 : 48;
      tz = 0;
    } else {
      px = Math.sin(S.t * 0.15) * 80;
      py = 105;
      pz = 370;
      tx = 0;
      ty = 75;
      tz = 0;
    }
  } else {
    px = Math.sin(S.t * 0.2) * 210;
    py = 105 + Math.sin(S.t * 0.3) * 10;
    pz = 400;
    tx = 0;
    ty = 60;
    tz = 0;
  }
  S.cp.lerp(new THREE.Vector3(px, py, pz), 0.05);
  S.ct.lerp(new THREE.Vector3(tx, ty, tz), 0.06);
  const sh = S.shake > 0 ? S.shake : 0;
  S.shake = Math.max(0, S.shake - dt);
  S.cam.position.set(S.cp.x + rnd(-1, 1) * sh * 6, S.cp.y + rnd(-1, 1) * sh * 6, S.cp.z);
  S.cam.lookAt(S.ct);
  S.cube.rotation.y = S.t * 0.12;
  S.cube.rotation.x = S.t * 0.05;
  S.cubeIn.rotation.y = -S.t * 0.4;
  S.cube.position.y = 330 + Math.sin(S.t * 0.6) * 14;
  S.rim.color.setHex(S.bg === 'alarm' ? 0xff2020 : S.bg === 'infected' ? 0x40ff60 : 0x40e0ff);
  S.rim.intensity = S.bg === 'alarm' ? 1.2 + 1.2 * Math.sin(S.t * 6) : 1.8;
  let i = 0;
  for (const k in S.models) {
    const m = S.models[k];
    if (!m.visible) continue;
    i++;
    const speaking = S.focus === k && scene === 'cut',
      u = m.userData;
    if (k === 'NOVA') {
      u.ring.rotation.x = S.t * 1.2;
      u.ring.rotation.y = S.t * 0.8;
      u.orb.scale.setScalar(
        1 + (speaking ? Math.abs(Math.sin(S.t * 8)) * 0.12 : Math.sin(S.t * 2) * 0.03)
      );
      continue;
    }
    if (u.legs) {
      u.legs[0].rotation.x = 0;
      u.legs[1].rotation.x = 0;
      u.body.position.y =
        36 + Math.sin(S.t * 2 + i) * 0.8 + (speaking ? Math.abs(Math.sin(S.t * 9)) * 2.4 : 0);
      u.arms.forEach((a, j) => (a.rotation.x = -0.1 + Math.sin(S.t * 1.5 + j + i) * 0.15));
    }
    if (k.startsWith('Zombi') || k === 'Alfa') m.rotation.z = Math.sin(S.t * 1.3 + i) * 0.07;
    if (scene !== 'cut' && !k.startsWith('Zombi')) {
      m.rotation.y = Math.sin(S.t * 0.7 + i) * 0.25;
    }
  }
  if (scene === 'wardrobe') S.models.Rojo.rotation.y = S.t * 0.7;
  if (S.pet) {
    S.pet.visible = scene === 'wardrobe';
    S.pet.position.set(48, 40 + Math.sin(S.t * 2.2) * 3, 12);
    if (S.pet.userData.spin) S.pet.rotation.y = S.t * 1.5;
  }
  {
    const pa = S.bokeh.geometry.attributes.position;
    S.bokehSeed.forEach((b, i) => {
      pa.array[i * 3] = b[0] + Math.sin(S.t * 0.2 * b[3] + i) * 30;
      pa.array[i * 3 + 1] = 10 + ((b[1] + S.t * 8 * b[3]) % 320);
      pa.array[i * 3 + 2] = b[2];
    });
    pa.needsUpdate = true;
    S.beams.forEach(
      (b, i) => (b.material.uniforms.k.value = 0.8 + 0.25 * Math.sin(S.t * 0.7 + i * 2))
    );
  }
  PFX.threshold = 0.9;
  postRender(S.sc, S.cam);
}
function stars2D(t) {
  let g = ctx.createLinearGradient(0, 0, 0, H);
  g.addColorStop(0, '#030510');
  g.addColorStop(1, '#101a2e');
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, W, H);
  ctx.fillStyle = '#fff';
  for (let i = 0; i < 120; i++) {
    ctx.globalAlpha = 0.25 + (0.6 * ((i * 7) % 5)) / 5;
    ctx.fillRect((i * 173.7 + t * 6 * (1 + (i % 4))) % W, (i * 97.3) % H, 1 + (i % 3), 1 + (i % 3));
  }
  ctx.globalAlpha = 1;
}
function drawStageScene(dt) {
  menuT += dt;
  let ok = false;
  if (view3d) {
    try {
      ctx.clearRect(0, 0, W, H);
      renderStage(dt);
      ok = true;
    } catch (e) {
      console.error('Escenario 3D no disponible:', e);
      view3d = false;
      document.getElementById('gl').style.visibility = 'hidden';
    }
  }
  if (!ok) {
    stars2D(menuT);
    if (scene === 'cut' && CUT) {
      const pg = CUT.pages[CUT.i];
      const n = pg.cast.length;
      pg.cast.forEach((nm, i) => {
        const ci = COLORS.findIndex(c => c[1] === nm);
        drawCrew(
          W / 2 + (i - (n - 1) / 2) * 110,
          H * 0.55,
          ci >= 0 ? COLORS[ci][0] : '#5f7f52',
          1,
          0,
          1,
          2.2,
          false,
          menuT,
          false,
          ci < 0
        );
      });
    } else
      ALLCREW.forEach((nm, i) =>
        drawCrew(W / 2 + (i - 4) * 90, H * 0.7, COLORS[i][0], 1, 0, 1, 1.6, false, menuT)
      );
  }
  if (scene === 'menu') drawHome();
  else if (scene === 'free') drawFree();
  else if (scene === 'levels') drawLevels();
  else if (scene === 'brief') drawBrief();
  else if (scene === 'story') drawStory();
  else if (scene === 'cut') drawCut(dt);
  else if (scene === 'wardrobe') drawWardrobe();
  else if (scene === 'achv') drawAchievements();
  finishFX();
}
