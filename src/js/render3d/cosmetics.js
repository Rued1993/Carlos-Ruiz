/**
 * Cosméticos: sombreros y colores de visor del tripulante.
 * El jugador usa su selección (SAVE.hat / SAVE.visor); los bots reciben uno fijo según su id.
 */
'use strict';

const HATS = [
  'Ninguno',
  'Gorra',
  'Corona',
  'Antena',
  'Orejas de gato',
  'Gorro de fiesta',
  'Halo',
  'Chistera',
];
const VISORS = [
  { name: 'Azul', color: 0x0b2335, emissive: 0x0a3550 },
  { name: 'Verde', color: 0x0b2a18, emissive: 0x108a40 },
  { name: 'Ámbar', color: 0x2a1c05, emissive: 0xc07a10 },
  { name: 'Rosa', color: 0x2a0b1f, emissive: 0xc02a80 },
  { name: 'Violeta', color: 0x180b2a, emissive: 0x6a2ac0 },
];
/** Cosmético asignado a un jugador de la partida: [sombrero, visor]. */
function cosmeticsFor(q) {
  if (q.isP) return [SAVE.hat | 0, SAVE.visor | 0];
  return [
    (q.id * 3) % HATS.length === 0 ? 0 : (q.id * 5 + 1) % HATS.length,
    (q.id * 2) % VISORS.length,
  ];
}
/** Construye el sombrero `i` sobre la cabeza (la parte superior del cuerpo está en y≈62). */
function makeHat(i) {
  const g = new THREE.Group(),
    st = (col, o) =>
      new THREE.MeshStandardMaterial(
        Object.assign({ color: col, roughness: 0.55, metalness: 0.15 }, o || {})
      ),
    add = (geo, mat, x, y, z, rx, rz) => {
      const m = new THREE.Mesh(geo, mat);
      m.position.set(x, y, z);
      if (rx) m.rotation.x = rx;
      if (rz) m.rotation.z = rz;
      m.castShadow = true;
      g.add(m);
      return m;
    };
  g.position.y = 62;
  if (i === 1) {
    add(new THREE.SphereGeometry(13, 16, 10, 0, 6.283, 0, 1.45), st(0xd32f2f), 0, 0, 1);
    add(new THREE.BoxGeometry(18, 2, 12), st(0xb71c1c), 0, 0, 12);
  } else if (i === 2) {
    const crown = add(
      new THREE.CylinderGeometry(11, 9, 8, 6),
      st(0xffc107, { metalness: 0.9, roughness: 0.25 }),
      0,
      4,
      0
    );
    crown.castShadow = true;
    for (let k = 0; k < 6; k++) {
      const a = (k / 6) * 6.283;
      add(
        new THREE.ConeGeometry(3, 8, 4),
        st(0xffd54f, { metalness: 0.9, roughness: 0.2 }),
        Math.cos(a) * 9,
        11,
        Math.sin(a) * 9
      );
    }
    add(
      new THREE.SphereGeometry(2.2, 8, 6),
      st(0xe53935, { emissive: 0xaa1010, emissiveIntensity: 1.2 }),
      0,
      8,
      11
    );
  } else if (i === 3) {
    add(new THREE.CylinderGeometry(0.8, 0.8, 16, 6), st(0x888888, { metalness: 0.8 }), 0, 8, 0);
    add(
      new THREE.SphereGeometry(3.5, 12, 8),
      st(0xff3b3b, { emissive: 0xff2020, emissiveIntensity: 2.2 }),
      0,
      17,
      0
    );
  } else if (i === 4) {
    for (const s of [-1, 1])
      add(new THREE.ConeGeometry(5, 11, 4), st(0x222222), s * 8, 8, -2, 0, -s * 0.25);
  } else if (i === 5) {
    add(new THREE.ConeGeometry(8, 18, 12), st(0xab47bc), 0, 9, 0, 0, 0.15);
    add(new THREE.SphereGeometry(2.4, 8, 6), st(0xffeb3b), 0, 19, 0);
  } else if (i === 6) {
    const h = add(
      new THREE.TorusGeometry(10, 1.4, 8, 24),
      new THREE.MeshBasicMaterial({ color: new THREE.Color(3, 2.6, 0.8) }),
      0,
      12,
      0,
      Math.PI / 2
    );
    h.castShadow = false;
  } else if (i === 7) {
    add(new THREE.CylinderGeometry(12, 12, 1.6, 20), st(0x1a1a1f), 0, 0, 0);
    add(new THREE.CylinderGeometry(8, 8.5, 16, 20), st(0x1a1a1f), 0, 8, 0);
    add(new THREE.CylinderGeometry(8.6, 8.6, 3, 20), st(0xb71c1c), 0, 3, 0);
  }
  return g;
}

const PETS = ['Ninguna', 'Cubito', 'Robot', 'Fantasma'];
/** Mascota flotante que sigue al jugador. */
function makePet(i) {
  const g = new THREE.Group(),
    st = (col, o) =>
      new THREE.MeshStandardMaterial(
        Object.assign({ color: col, roughness: 0.4, metalness: 0.3 }, o || {})
      );
  if (i === 1) {
    const cube = new THREE.Mesh(
      new THREE.BoxGeometry(9, 9, 9),
      st(0x0b3a4a, { emissive: 0x20c8ff, emissiveIntensity: 0.9 })
    );
    cube.castShadow = true;
    g.add(cube);
    g.add(
      new THREE.LineSegments(
        new THREE.EdgesGeometry(new THREE.BoxGeometry(9.6, 9.6, 9.6)),
        new THREE.LineBasicMaterial({ color: new THREE.Color(0.5, 2, 3) })
      )
    );
    g.userData.spin = true;
  } else if (i === 2) {
    const body = new THREE.Mesh(
      new THREE.SphereGeometry(5.2, 18, 14),
      st(0xdfe6ee, { metalness: 0.7, roughness: 0.25 })
    );
    body.castShadow = true;
    g.add(body);
    for (const sx of [-2, 2]) {
      const eye = new THREE.Mesh(
        new THREE.SphereGeometry(1, 8, 6),
        new THREE.MeshBasicMaterial({ color: new THREE.Color(0.4, 2.6, 3.4) })
      );
      eye.scale.set(0.9, 1.3, 0.5);
      eye.position.set(sx, 0.8, 4.6);
      g.add(eye);
    }
    const an = new THREE.Mesh(new THREE.CylinderGeometry(0.4, 0.4, 5, 6), st(0x888888));
    an.position.y = 7.2;
    g.add(an);
    const bulb = new THREE.Mesh(
      new THREE.SphereGeometry(1.4, 8, 6),
      new THREE.MeshBasicMaterial({ color: new THREE.Color(3, 0.6, 0.5) })
    );
    bulb.position.y = 10;
    g.add(bulb);
  } else if (i === 3) {
    const m = st(0xeaf4ff, {
      transparent: true,
      opacity: 0.78,
      emissive: 0x6a8aff,
      emissiveIntensity: 0.35,
      roughness: 0.3,
    });
    const head = new THREE.Mesh(new THREE.SphereGeometry(5.2, 16, 12), m);
    g.add(head);
    const tail = new THREE.Mesh(new THREE.ConeGeometry(5.2, 9, 14), m);
    tail.position.y = -6;
    tail.rotation.x = Math.PI;
    g.add(tail);
    for (const sx of [-2, 2]) {
      const eye = new THREE.Mesh(
        new THREE.SphereGeometry(0.9, 8, 6),
        new THREE.MeshBasicMaterial({ color: 0x10131c })
      );
      eye.position.set(sx, 0.8, 4.4);
      g.add(eye);
    }
  }
  return g;
}
