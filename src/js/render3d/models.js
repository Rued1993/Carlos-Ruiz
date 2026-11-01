/**
 * Modelos 3D procedurales del tripulante, zombi y cadáver.
 */
'use strict';

function makeCrew(color, zombie) {
  const g = new THREE.Group(),
    c = new THREE.Color(color),
    mats = [];
  const M = o => {
    const m = new THREE.MeshStandardMaterial(o);
    mats.push(m);
    return m;
  };
  const suit = M({ color: c, roughness: 0.42, metalness: 0.18 }),
    dark = M({ color: c.clone().multiplyScalar(0.5), roughness: 0.6, metalness: 0.1 });
  const body = new THREE.Mesh(new THREE.CapsuleGeometry(16, 18, 8, 18), suit);
  body.position.y = 36;
  body.castShadow = true;
  g.add(body);
  const belt = new THREE.Mesh(
    new THREE.CylinderGeometry(16.4, 16.4, 3, 24),
    M({ color: 0x14161b, roughness: 0.8 })
  );
  belt.position.y = 26;
  g.add(belt);
  const visor = new THREE.Mesh(
    new THREE.SphereGeometry(1, 28, 18),
    M(
      zombie
        ? {
            color: 0x200404,
            roughness: 0.2,
            metalness: 0.4,
            emissive: 0xa01010,
            emissiveIntensity: 1.4,
          }
        : {
            color: 0x0b2335,
            roughness: 0.05,
            metalness: 0.7,
            emissive: 0x0a3550,
            emissiveIntensity: 0.5,
          }
    )
  );
  visor.scale.set(12.5, 8.5, 8);
  visor.position.set(0, 45, 11);
  g.add(visor);
  if (!zombie) {
    const hl = new THREE.Mesh(
      new THREE.SphereGeometry(1, 12, 8),
      M({
        color: 0xffffff,
        emissive: 0xffffff,
        emissiveIntensity: 0.9,
        transparent: true,
        opacity: 0.75,
      })
    );
    hl.scale.set(4.5, 1.6, 1.2);
    hl.position.set(-4, 48, 18);
    hl.rotation.z = 0.3;
    g.add(hl);
  }
  const pack = new THREE.Mesh(new THREE.BoxGeometry(22, 28, 11), dark);
  pack.position.set(0, 36, -19);
  pack.castShadow = true;
  g.add(pack);
  const legs = [];
  for (const sx of [-8, 8]) {
    const lg = new THREE.Group();
    lg.position.set(sx, 16, 0);
    const l = new THREE.Mesh(new THREE.CylinderGeometry(6.5, 6, 16, 14), dark);
    l.position.y = -8;
    l.castShadow = true;
    lg.add(l);
    const boot = new THREE.Mesh(
      new THREE.BoxGeometry(12, 6, 16),
      M({ color: 0x14161b, roughness: 0.8 })
    );
    boot.position.set(0, -14, 2);
    lg.add(boot);
    g.add(lg);
    legs.push(lg);
  }
  const arms = [];
  if (zombie)
    for (const sx of [-17, 17]) {
      const ag = new THREE.Group();
      ag.position.set(sx, 44, 6);
      const a = new THREE.Mesh(new THREE.CapsuleGeometry(4.5, 20, 4, 8), suit);
      a.rotation.x = Math.PI / 2;
      a.position.z = 14;
      a.castShadow = true;
      ag.add(a);
      g.add(ag);
      arms.push(ag);
    }
  // arma en mano (modo zombi)
  const hold = new THREE.Group();
  hold.position.set(17, 34, 12);
  g.add(hold);
  const bat = new THREE.Mesh(
    new THREE.CylinderGeometry(2.5, 4, 44, 10),
    M({ color: 0xa67c52, roughness: 0.8 })
  );
  bat.rotation.x = Math.PI / 2;
  bat.position.z = 20;
  const pis = new THREE.Mesh(
    new THREE.BoxGeometry(5, 9, 22),
    M({ color: 0x1a1a1a, roughness: 0.4, metalness: 0.7 })
  );
  pis.position.z = 12;
  const sho = new THREE.Group();
  sho.add(
    new THREE.Mesh(
      new THREE.BoxGeometry(5, 6, 40),
      M({ color: 0x222, roughness: 0.4, metalness: 0.7 })
    )
  );
  const stock = new THREE.Mesh(
    new THREE.BoxGeometry(6, 8, 14),
    M({ color: 0x6b4a2a, roughness: 0.8 })
  );
  stock.position.z = -16;
  sho.add(stock);
  sho.position.z = 16;
  bat.visible = pis.visible = sho.visible = false;
  hold.add(bat, pis, sho);
  g.userData = { legs, arms, body, visor, mats, hold, suit: [suit, dark], wep: { bat, pis, sho } };
  return g;
}
function makeBody3D(color) {
  const g = new THREE.Group(),
    m = mat(color, { roughness: 0.5, metalness: 0.15 });
  const b = new THREE.Mesh(new THREE.CapsuleGeometry(16, 16, 6, 16), m);
  b.rotation.z = Math.PI / 2;
  b.position.set(0, 16, 0);
  b.castShadow = true;
  g.add(b);
  const pk = bx(10, 28, 22, new THREE.Color(color).multiplyScalar(0.5).getStyle(), 0, 22, -6);
  g.add(pk);
  const bone = bx(5, 5, 26, '#e8e4d8', -20, 24, 4, { roughness: 0.6 });
  g.add(bone);
  const knob = new THREE.Mesh(new THREE.SphereGeometry(5, 10, 8), mat('#e8e4d8'));
  knob.position.set(-20, 24, 18);
  g.add(knob);
  return g;
}
