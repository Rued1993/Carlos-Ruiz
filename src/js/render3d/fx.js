/**
 * Efectos 3D: escombros de bloques, fogonazo, trazadoras de balas, zombis que caen.
 */
'use strict';

function fxInit(scene) {
  const deb = new THREE.InstancedMesh(
    new THREE.BoxGeometry(4, 4, 4),
    new THREE.MeshStandardMaterial({ roughness: 0.9 }),
    320
  );
  deb.count = 0;
  deb.frustumCulled = false;
  deb.castShadow = true;
  deb.setColorAt(0, new THREE.Color(1, 1, 1));
  scene.add(deb);
  R3.deb = deb;
  R3.debList = [];
  R3.dying = [];
  // fogonazo (sprite aditivo con color HDR para que brille con el bloom)
  const c = document.createElement('canvas');
  c.width = c.height = 64;
  const x = c.getContext('2d'),
    g = x.createRadialGradient(32, 32, 2, 32, 32, 32);
  g.addColorStop(0, 'rgba(255,255,255,1)');
  g.addColorStop(0.35, 'rgba(255,200,100,.7)');
  g.addColorStop(1, 'rgba(255,120,0,0)');
  x.fillStyle = g;
  x.fillRect(0, 0, 64, 64);
  R3.muzzle = new THREE.Sprite(
    new THREE.SpriteMaterial({
      map: new THREE.CanvasTexture(c),
      color: new THREE.Color(3, 2.2, 1),
      blending: THREE.AdditiveBlending,
      transparent: true,
      depthWrite: false,
      fog: false,
    })
  );
  R3.muzzle.scale.set(70, 70, 1);
  R3.muzzle.visible = false;
  scene.add(R3.muzzle);
  // trazadoras
  const tg = new THREE.BufferGeometry();
  tg.setAttribute('position', new THREE.BufferAttribute(new Float32Array(120 * 6), 3));
  tg.setDrawRange(0, 0);
  R3.bul = new THREE.LineSegments(
    tg,
    new THREE.LineBasicMaterial({
      color: new THREE.Color(3, 2.4, 1),
      blending: THREE.AdditiveBlending,
      transparent: true,
      fog: false,
    })
  );
  R3.bul.frustumCulled = false;
  scene.add(R3.bul);
}
/** Lanza `n` cubitos de escombro desde (x,y,z) con el color dado. */
function debris3D(x, y, z, color, n) {
  if (!R3 || !R3.debList) return;
  const c = new THREE.Color(color);
  for (let i = 0; i < (n || 8); i++) {
    if (R3.debList.length >= 320) R3.debList.shift();
    R3.debList.push({
      x,
      y,
      z,
      vx: rnd(-90, 90),
      vy: rnd(120, 260),
      vz: rnd(-90, 90),
      life: rnd(0.7, 1.3),
      rx: rnd(0, 6),
      ry: rnd(0, 6),
      c: c.clone().multiplyScalar(rnd(0.7, 1.15)),
    });
  }
}
function fxUpdate(dt) {
  shockUpdate(dt);
  const d = new THREE.Object3D(),
    list = R3.debList;
  for (let i = list.length - 1; i >= 0; i--) {
    const q = list[i];
    q.vy -= 620 * dt;
    q.x += q.vx * dt;
    q.y += q.vy * dt;
    q.z += q.vz * dt;
    if (q.y < 2) {
      q.y = 2;
      q.vy *= -0.35;
      q.vx *= 0.6;
      q.vz *= 0.6;
    }
    q.rx += dt * 8;
    q.life -= dt;
    if (q.life <= 0) list.splice(i, 1);
  }
  list.forEach((q, i) => {
    d.position.set(q.x, q.y, q.z);
    d.rotation.set(q.rx, q.ry, 0);
    d.scale.setScalar(Math.min(1, q.life * 3));
    d.updateMatrix();
    R3.deb.setMatrixAt(i, d.matrix);
    R3.deb.setColorAt(i, q.c);
  });
  R3.deb.count = list.length;
  R3.deb.instanceMatrix.needsUpdate = true;
  if (R3.deb.instanceColor) R3.deb.instanceColor.needsUpdate = true;
  // fogonazo
  const p = G.player;
  if (G.muzzle > 0 && p) {
    R3.muzzle.visible = true;
    R3.muzzle.position.set(p.x + Math.cos(CAM.yaw) * 34, 40, p.y + Math.sin(CAM.yaw) * 34);
    R3.muzzle.material.opacity = Math.min(1, G.muzzle / 0.05);
    R3.muzzle.scale.setScalar(55 + Math.random() * 30);
  } else R3.muzzle.visible = false;
  // zombis que caen
  for (let i = R3.dying.length - 1; i >= 0; i--) {
    const e = R3.dying[i];
    e.t += dt;
    e.g.rotation.x = -Math.min(1, e.t / 0.35) * 1.5;
    if (e.t > 0.8) e.g.position.y = -(e.t - 0.8) * 40;
    if (e.t > 1.5) {
      R3.scene.remove(e.g);
      R3.dying.splice(i, 1);
    }
  }
}

/** Botín (munición / botiquín) como cajitas flotantes y brillantes. */
function syncDrops() {
  if (!R3.dropM) R3.dropM = new Map();
  const seen = new Set(),
    t = performance.now() / 1000;
  for (const d of G.drops || []) {
    let m = R3.dropM.get(d);
    if (!m) {
      const col =
        { municion: 0xffb000, rafaga: 0xffea00, escudo: 0x40c4ff, botiquin: 0xff3030 }[d.type] ||
        0xffb000;
      m = new THREE.Group();
      m.add(
        bx(
          16,
          12,
          16,
          d.type === 'botiquin' ? '#f4f4f4' : '#' + new THREE.Color(col).getHexString(),
          0,
          0,
          0,
          {
            emissive: col,
            emissiveIntensity: 1.4,
            roughness: 0.4,
          }
        )
      );
      const l = new THREE.PointLight(col, 0.9, 120, 1.6);
      l.position.y = 14;
      m.add(l);
      R3.scene.add(m);
      R3.dropM.set(d, m);
    }
    m.position.set(d.x, 14 + Math.sin(t * 3 + d.x) * 3, d.y);
    m.rotation.y = t * 2;
    m.visible = d.t > 3 || Math.floor(t * 6) % 2 === 0;
    seen.add(d);
  }
  for (const [d, m] of R3.dropM)
    if (!seen.has(d)) {
      R3.scene.remove(m);
      R3.dropM.delete(d);
    }
}
