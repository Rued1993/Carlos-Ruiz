/**
 * Modelos 3D procedurales del tripulante, zombi y cadáver.
 */
'use strict';

/** Caja con esquinas redondeadas (extrusión de un rectángulo con bisel), centrada en el origen. */
function roundBox(w, h, d, r) {
  const sh = new THREE.Shape(),
    x = -w / 2,
    y = -h / 2;
  sh.moveTo(x + r, y);
  sh.lineTo(x + w - r, y);
  sh.quadraticCurveTo(x + w, y, x + w, y + r);
  sh.lineTo(x + w, y + h - r);
  sh.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
  sh.lineTo(x + r, y + h);
  sh.quadraticCurveTo(x, y + h, x, y + h - r);
  sh.lineTo(x, y + r);
  sh.quadraticCurveTo(x, y, x + r, y);
  const geo = new THREE.ExtrudeGeometry(sh, {
    depth: d - 2,
    bevelEnabled: true,
    bevelThickness: 1,
    bevelSize: 1,
    bevelSegments: 2,
    curveSegments: 6,
  });
  geo.translate(0, 0, -(d - 2) / 2);
  return geo;
}
const _visorTex = {};
/** Textura del cristal del visor: degradado, reflejos y (zombi) ojos brillantes con grietas. */
function visorTexture(idx, zombie) {
  const key = zombie ? 'z' : String(idx);
  if (_visorTex[key]) return _visorTex[key];
  const c = document.createElement('canvas');
  c.width = 256;
  c.height = 160;
  const x = c.getContext('2d'),
    em = zombie ? 0xff2a1a : VISORS[idx].emissive,
    hex = '#' + em.toString(16).padStart(6, '0'),
    g = x.createLinearGradient(0, 0, 0, 160);
  g.addColorStop(0, zombie ? '#1a0404' : '#04101a');
  g.addColorStop(0.55, zombie ? '#4a0a08' : shade(hex, -0.55));
  g.addColorStop(1, zombie ? '#8a1410' : shade(hex, -0.1));
  x.fillStyle = g;
  x.fillRect(0, 0, 256, 160);
  if (zombie) {
    x.fillStyle = '#ffdf60';
    x.shadowColor = '#ff3020';
    x.shadowBlur = 18;
    for (const ex of [88, 168]) {
      x.beginPath();
      x.ellipse(ex, 82, 17, 11, ex < 128 ? 0.25 : -0.25, 0, 6.3);
      x.fill();
    }
    x.shadowBlur = 0;
    x.fillStyle = '#220000';
    for (const ex of [92, 164]) {
      x.beginPath();
      x.ellipse(ex, 82, 4, 8, 0, 0, 6.3);
      x.fill();
    }
    x.strokeStyle = 'rgba(255,200,180,.55)';
    x.lineWidth = 2;
    x.beginPath();
    x.moveTo(30, 20);
    x.lineTo(78, 62);
    x.lineTo(70, 100);
    x.moveTo(200, 14);
    x.lineTo(176, 54);
    x.lineTo(214, 96);
    x.stroke();
  } else {
    x.fillStyle = 'rgba(255,255,255,.55)';
    x.save();
    x.translate(78, 38);
    x.rotate(-0.35);
    x.beginPath();
    x.ellipse(0, 0, 54, 12, 0, 0, 6.3);
    x.fill();
    x.restore();
    x.fillStyle = 'rgba(255,255,255,.28)';
    x.save();
    x.translate(196, 112);
    x.rotate(-0.35);
    x.beginPath();
    x.ellipse(0, 0, 22, 5, 0, 0, 6.3);
    x.fill();
    x.restore();
    x.strokeStyle = 'rgba(255,255,255,.3)';
    x.lineWidth = 3;
    x.beginPath();
    x.arc(128, 80, 118, 0.25, 2.9);
    x.stroke();
  }
  const t = new THREE.CanvasTexture(c);
  t.encoding = THREE.sRGBEncoding;
  return (_visorTex[key] = t);
}
/** Cuerpo en forma de judía (revolución suavizada) con oscurecimiento inferior horneado. */
function beanGeometry() {
  const pts = [
    [0.01, -24.5],
    [7, -25],
    [12, -23.4],
    [15.4, -18.5],
    [16.7, -9],
    [17.1, 2],
    [16.9, 13],
    [15.8, 21],
    [13, 25.4],
    [8, 27.4],
    [0.01, 28],
  ].map(p => new THREE.Vector2(p[0], p[1]));
  const geo = new THREE.LatheGeometry(
      new THREE.SplineCurve(pts)
        .getPoints(40)
        .map(v => new THREE.Vector2(Math.max(0.01, v.x), v.y)),
      40
    ),
    pos = geo.attributes.position,
    col = new Float32Array(pos.count * 3);
  for (let i = 0; i < pos.count; i++) {
    const y = pos.getY(i),
      t = clamp((y + 24) / 22, 0, 1),
      f = 0.5 + 0.5 * t * t * (3 - 2 * t);
    col[i * 3] = col[i * 3 + 1] = col[i * 3 + 2] = f;
  }
  geo.setAttribute('color', new THREE.BufferAttribute(col, 3));
  return geo;
}
function makeCrew(color, zombie, hat, visorIdx) {
  const g = new THREE.Group(),
    c = new THREE.Color(color),
    mats = [];
  const M = o => {
    const m = new THREE.MeshStandardMaterial(o);
    mats.push(m);
    return m;
  };
  const rimC = zombie ? 0xff3a2a : 0x7fd0ff,
    suit = M({ color: c, roughness: 0.42, metalness: 0.18 }),
    suitV = M({ color: c, roughness: 0.4, metalness: 0.2, vertexColors: true }),
    dark = M({ color: c.clone().multiplyScalar(0.5), roughness: 0.6, metalness: 0.1 }),
    glove = M({ color: 0x1b1e25, roughness: 0.6, metalness: 0.25 });
  addRim(suit, rimC, zombie ? 0.85 : 0.5);
  addRim(suitV, rimC, zombie ? 0.85 : 0.5);
  addRim(dark, rimC, zombie ? 0.6 : 0.3);
  // Jerarquía: g (rumbo) -> torso (pivote en la cadera: inclinación, giro, vaivén) -> upper
  // (geometría del tronco en coordenadas de modelo). Las piernas cuelgan de g.
  const torso = new THREE.Group();
  torso.position.y = 28;
  g.add(torso);
  const upper = new THREE.Group();
  upper.position.y = -28;
  torso.add(upper);
  const body = new THREE.Mesh(beanGeometry(), suitV);
  body.position.y = 36;
  body.scale.set(1, 1, 0.95);
  body.castShadow = true;
  upper.add(body);
  const belt = new THREE.Mesh(
    new THREE.CylinderGeometry(17.3, 17.3, 2.6, 36),
    M({ color: 0x14161b, roughness: 0.8 })
  );
  belt.position.y = 28;
  belt.scale.z = 0.95;
  upper.add(belt);
  for (const sx of [-6, 6]) {
    const led = new THREE.Mesh(
      new THREE.BoxGeometry(5, 2, 1),
      new THREE.MeshBasicMaterial({
        color: zombie ? new THREE.Color(3.2, 0.4, 0.3) : new THREE.Color(0.6, 2.4, 3.2),
      })
    );
    led.position.set(sx, 32, 15.9);
    upper.add(led);
  }
  // visor: marco metálico + cristal con textura
  const visor = new THREE.Mesh(
      new THREE.SphereGeometry(1, 110, 56, Math.PI / 2 - 1.1, 2.2, Math.PI / 2 - 0.85, 1.7),
      M({
        map: visorTexture(visorIdx | 0, zombie),
        emissiveMap: visorTexture(visorIdx | 0, zombie),
        emissive: 0xffffff,
        emissiveIntensity: zombie ? 1.3 : 0.55,
        roughness: 0.06,
        metalness: 0.55,
        envMapIntensity: 1.6,
      })
    ),
    frame = new THREE.Mesh(
      new THREE.SphereGeometry(1, 110, 56, Math.PI / 2 - 1.12, 2.24, Math.PI / 2 - 0.9, 1.8),
      M({ color: c.clone().multiplyScalar(0.35), roughness: 0.3, metalness: 0.85 })
    );
  visor.scale.set(13.6, 8.8, 14.4);
  frame.scale.set(14.8, 9.8, 12.4);
  visor.position.set(0, 45, 4);
  frame.position.set(0, 45, 4);
  upper.add(frame, visor);
  // mochila redondeada con tira de luz del color del traje
  const pack = new THREE.Group();
  pack.position.set(0, 36, -19);
  upper.add(pack);
  const shell = new THREE.Mesh(roundBox(21, 26, 9, 5), dark);
  shell.castShadow = true;
  pack.add(shell);
  const strip = new THREE.Mesh(
    new THREE.BoxGeometry(12, 2, 0.8),
    new THREE.MeshBasicMaterial({ color: c.clone().multiplyScalar(zombie ? 2 : 2.6) })
  );
  strip.position.set(0, -6, -4.7);
  pack.add(strip);
  for (const sx of [-6, 6]) {
    const tank = new THREE.Mesh(
      new THREE.CylinderGeometry(2.6, 2.6, 8, 10),
      M({ color: 0x2a2f38, roughness: 0.35, metalness: 0.85 })
    );
    tank.position.set(sx, 15, 0);
    pack.add(tank);
  }
  // brazos articulados: hombro -> codo -> mano (guante)
  const mkArm = sx => {
    const sh = new THREE.Group();
    sh.position.set(sx * 16.6, 46, 0);
    upper.add(sh);
    const ball = new THREE.Mesh(new THREE.SphereGeometry(4, 12, 10), suit);
    sh.add(ball);
    const up = new THREE.Mesh(new THREE.CylinderGeometry(3.4, 3.1, 8.6, 10), suit);
    up.position.y = -5;
    up.castShadow = true;
    sh.add(up);
    const el = new THREE.Group();
    el.position.y = -9.6;
    sh.add(el);
    el.add(new THREE.Mesh(new THREE.SphereGeometry(3.3, 10, 8), suit));
    const fo = new THREE.Mesh(new THREE.CylinderGeometry(3.1, 2.9, 7.6, 10), suit);
    fo.position.y = -4.2;
    fo.castShadow = true;
    el.add(fo);
    const hand = new THREE.Group();
    hand.position.y = -9;
    el.add(hand);
    const gl = new THREE.Mesh(new THREE.SphereGeometry(3.7, 12, 10), glove);
    gl.scale.set(1, 1.1, 1);
    hand.add(gl);
    if (zombie)
      for (const cx of [-2.2, 0, 2.2]) {
        const claw = new THREE.Mesh(
          new THREE.ConeGeometry(1.2, 6, 5),
          M({ color: 0xd8d4c0, roughness: 0.6 })
        );
        claw.rotation.x = Math.PI;
        claw.position.set(cx, -5.4, 0.6);
        hand.add(claw);
      }
    return { sh, el, hand };
  };
  const armL = mkArm(-1),
    armR = mkArm(1);
  // piernas articuladas: cadera -> rodilla -> bota
  const mkLeg = sx => {
    const hip = new THREE.Group();
    hip.position.set(sx, 16, 0);
    g.add(hip);
    hip.add(new THREE.Mesh(new THREE.SphereGeometry(6.4, 12, 10), dark));
    const thigh = new THREE.Mesh(new THREE.CylinderGeometry(6.3, 5.8, 8.4, 14), dark);
    thigh.position.y = -4;
    thigh.castShadow = true;
    hip.add(thigh);
    const knee = new THREE.Group();
    knee.position.y = -8;
    hip.add(knee);
    knee.add(new THREE.Mesh(new THREE.SphereGeometry(5.8, 12, 10), dark));
    const shin = new THREE.Mesh(new THREE.CylinderGeometry(5.6, 5.2, 6.4, 14), dark);
    shin.position.y = -3.3;
    shin.castShadow = true;
    knee.add(shin);
    const boot = new THREE.Mesh(
      new THREE.SphereGeometry(1, 14, 10),
      M({ color: 0x1b1e25, roughness: 0.55, metalness: 0.3 })
    );
    boot.scale.set(7.6, 5.2, 10.6);
    boot.position.set(0, -5.2, 2.2);
    boot.castShadow = true;
    knee.add(boot);
    const sole = new THREE.Mesh(
      new THREE.BoxGeometry(14.4, 1.4, 20),
      M({ color: 0x0c0d11, roughness: 0.9 })
    );
    sole.position.set(0, -9, 2.2);
    knee.add(sole);
    return { hip, knee };
  };
  const legL = mkLeg(-8),
    legR = mkLeg(8);
  // heridas y púas del zombi
  if (zombie) {
    for (const [wx, wy] of [
      [-7, 40],
      [8, 33],
    ]) {
      const w = new THREE.Mesh(
        new THREE.CircleGeometry(3.6, 12),
        new THREE.MeshBasicMaterial({
          color: 0x4a0606,
          polygonOffset: true,
          polygonOffsetFactor: -2,
        })
      );
      w.position.set(wx, wy, 16.4);
      upper.add(w);
    }
    if (color === '#8a3030')
      for (let k = 0; k < 5; k++) {
        const sp = new THREE.Mesh(
          new THREE.ConeGeometry(2.6, 12, 5),
          M({ color: 0x2a1010, roughness: 0.7 })
        );
        sp.position.set((k - 2) * 4.4, 56 - Math.abs(k - 2) * 2, -23);
        sp.rotation.x = -1.1;
        upper.add(sp);
      }
  }
  // arma / herramienta en la mano derecha (el modelo mira a +Z; la mano apunta a -Y)
  const hold = new THREE.Group();
  hold.position.set(0, -1.5, 0);
  hold.rotation.x = Math.PI / 2;
  armR.hand.add(hold);
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
      M({ color: 0x222222, roughness: 0.4, metalness: 0.7 })
    )
  );
  const stock = new THREE.Mesh(
    new THREE.BoxGeometry(6, 8, 14),
    M({ color: 0x6b4a2a, roughness: 0.8 })
  );
  stock.position.z = -16;
  sho.add(stock);
  sho.position.z = 16;
  const smg = new THREE.Mesh(
    new THREE.BoxGeometry(5, 8, 26),
    M({ color: 0x2a2a30, roughness: 0.4, metalness: 0.7 })
  );
  smg.position.z = 14;
  const pick = new THREE.Group();
  const handle = new THREE.Mesh(
    new THREE.BoxGeometry(2.6, 2.6, 30),
    M({ color: 0x7a5530, roughness: 0.9 })
  );
  handle.position.z = 12;
  pick.add(handle);
  const head = new THREE.Mesh(
    new THREE.BoxGeometry(22, 3.4, 3.4),
    M({ color: 0x9aa4ae, roughness: 0.35, metalness: 0.8 })
  );
  head.position.z = 26;
  pick.add(head);
  for (const o of [bat, pis, sho, smg, pick]) o.visible = false;
  hold.add(bat, pis, sho, smg, pick);
  if (hat && !zombie) upper.add(makeHat(hat));
  g.userData = {
    rig: { torso, upper, armL, armR, legL, legR, pack, hold },
    visor,
    mats,
    suit: [suit, suitV, dark],
    wep: { bat, pis, sho, smg, pick },
  };
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
