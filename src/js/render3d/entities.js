/**
 * Sincronización de entidades del juego con los modelos 3D.
 */
'use strict';

function entVisible(q) {
  const p = G.player;
  if (q === p) return true;
  const d = dist(p, q);
  if (G.mode === 'sandbox') return d < 1150;
  if (G.mode === 'zombie') return d < 760 && (d < 170 || clearLine(p, q));
  if (!p.alive) return true;
  const dark = G.sab && G.sab.type == 'lights' && !p.imp,
    R = dark ? 170 : p.imp ? 560 : 430;
  return d < R && (d < 140 || clearLine(p, q));
}
function getEnt(q, zombie) {
  let r = R3.ents.get(q);
  if (!r) {
    const cs = zombie ? [0, 0] : cosmeticsFor(q);
    const g = makeCrew(zombie ? zColor(q) : q.color, zombie, cs[0], cs[1]);
    if (q.scale) g.scale.setScalar(q.scale);
    g.rotation.order = 'YXZ';
    R3.scene.add(g);
    r = {
      g,
      zombie,
      lx: q.x,
      ly: q.y,
      heading: q.isP ? CAM.yaw : rnd(0, 6.28),
      ph: Math.random() * 6,
      hpLast: q.hp,
      flash: 0,
      dustT: 0,
      turn: 0,
      spr: 0,
      lunge: 0,
      label: null,
      lc: '',
      ghost: false,
    };
    if (!zombie) {
      r.label = mkLabel('');
      r.label.position.set(0, 82, 0);
      g.add(r.label);
      r.ltxt = null;
    }
    R3.ents.set(q, r);
  }
  return r;
}
function syncEnts() {
  const seen = new Set(),
    dt = R3.dt,
    now = performance.now(),
    p = G.player;
  const list = [];
  for (const q of G.ps)
    if ((q.alive || (q.isP && !q.ejected)) && q.inVent === null) list.push([q, false]);
  if (G.zs) for (const z of G.zs) list.push([z, true]);
  for (const [q, zomb] of list) {
    if (!entVisible(q)) continue;
    const r = getEnt(q, zomb),
      g = r.g,
      ghost = !q.alive && !zomb;
    seen.add(q);
    g.visible = true;
    g.position.set(q.x, 0, q.y);
    const dx = q.x - r.lx,
      dy = q.y - r.ly,
      sp = Math.hypot(dx, dy);
    r.lx = q.x;
    r.ly = q.y;
    const aimNow =
      q.isP && G.mode !== 'classic' && (G.firing || G.mining || keys[' '] || now < R3.aimUntil);
    let tgt = r.heading;
    if (sp > 0.12) tgt = Math.atan2(dy, dx);
    else if (aimNow) tgt = CAM.yaw; // parado: el cuerpo se orienta hacia donde apunta
    if (zomb && G.player.alive) {
      const ddx = p.x - q.x,
        ddy = p.y - q.y;
      if (Math.hypot(ddx, ddy) < 400) tgt = Math.atan2(ddy, ddx);
    }
    const da = Math.atan2(Math.sin(tgt - r.heading), Math.cos(tgt - r.heading));
    r.heading += da * Math.min(1, dt * 14);
    g.rotation.y = Math.PI / 2 - r.heading;
    r.turn += (da * 3 - r.turn) * Math.min(1, dt * 8);
    const walking = sp > 0.12,
      u = g.userData;
    if (walking) r.ph += sp * 0.085;
    if (zomb && q.hp < r.hpLast) r.flash = 0.14;
    r.hpLast = q.hp;
    if (r.flash > 0) r.flash -= dt;
    const fl = Math.max(0, r.flash / 0.14);
    u.suit.forEach(m => m.emissive.setRGB(fl * 1.4, fl * 0.25, fl * 0.15));
    if (walking && sp > 2.5 && (q.isP || zomb)) {
      r.dustT -= dt;
      if (r.dustT <= 0) {
        r.dustT = q.sprinting ? 0.09 : 0.2;
        burst(q.x, q.y + 14, 1, '#a09a8c', 24, 0.5);
      }
    }
    r.spr += ((q.sprinting ? 1 : 0) - r.spr) * Math.min(1, dt * 6);
    r.lunge +=
      ((zomb && G.player.alive && Math.hypot(p.x - q.x, p.y - q.y) < 72 ? 1 : 0) - r.lunge) *
      Math.min(1, dt * 8);
    if (q.isP && G.emote && G.emote.t > 0) {
      G.emote.t -= dt;
      if (sp > 2) G.emote.t = 0;
    }
    const wep = q.isP && G.mode === 'zombie' ? G.wep : null,
      minning = q.isP && G.mode === 'sandbox' && (G.mining || G.autoMine);
    u.wep.bat.visible = wep == 'bate';
    u.wep.pis.visible = wep == 'pistola';
    u.wep.sho.visible = wep == 'escopeta';
    u.wep.smg.visible = wep == 'subfusil';
    u.wep.pick.visible = !!minning;
    let twist = 0;
    if (aimNow) {
      const dd = Math.atan2(Math.sin(r.heading - CAM.yaw), Math.cos(r.heading - CAM.yaw));
      twist = clamp(dd, -1.1, 1.1);
    }
    animateCrew(
      u,
      {
        t: now / 1000,
        speed: Math.min(1.3, sp / Math.max(dt, 0.001) / 250),
        phase: r.ph,
        sprint: r.spr,
        zomb,
        aim: aimNow,
        wep,
        swing: q.isP ? G.swing : 0,
        recoil: q.isP && G.muzzle > 0 ? G.muzzle / 0.09 : 0,
        mining: !!minning,
        emote: q.isP && G.emote && G.emote.t > 0 ? G.emote.i : 0,
        lunge: r.lunge,
        flinch: fl,
        twist,
        turn: r.turn,
        work: !zomb && !q.isP && !q.imp && q.wait > 0,
      },
      dt
    );
    if (ghost !== r.ghost) {
      r.ghost = ghost;
      u.mats.forEach(m => {
        m.transparent = ghost;
        m.opacity = ghost ? 0.4 : 1;
        m.depthWrite = !ghost;
      });
    }
    if (r.label) {
      const red = p.imp && q.imp && q !== p,
        txt0 = (q.isP ? q.name + ' (Tú)' : q.name) + (red ? ' ' : ''),
        key = txt0 + (red ? 'R' : '');
      if (r.ltxt !== key) {
        g.remove(r.label);
        r.label = mkLabel(txt0, red ? '#ff6060' : '#fff');
        r.label.position.set(0, 82, 0);
        g.add(r.label);
        r.ltxt = key;
      }
    }
  }
  for (const [q, r] of R3.ents)
    if (!seen.has(q)) {
      if (r.zombie && q.hp <= 0) R3.dying.push({ g: r.g, t: 0 });
      else R3.scene.remove(r.g);
      R3.ents.delete(q);
    }
}
/** La mascota del jugador sigue su posición con un muelle suave y flota. */
function syncPet() {
  const p = G.player,
    want = p.alive && p.inVent === null ? SAVE.pet | 0 : 0;
  if (R3.petI !== want) {
    if (R3.pet) R3.scene.remove(R3.pet);
    R3.pet = want ? makePet(want) : null;
    R3.petI = want;
    if (R3.pet) {
      R3.pet.position.set(p.x - 30, 40, p.y);
      R3.scene.add(R3.pet);
    }
  }
  if (!R3.pet) return;
  const fx = Math.cos(CAM.yaw),
    fz = Math.sin(CAM.yaw),
    t = performance.now() / 1000,
    tx = p.x - fx * 26 + fz * 30,
    tz = p.y - fz * 26 - fx * 30,
    ty = 42 + Math.sin(t * 2.4) * 3,
    k = Math.min(1, R3.dt * 5);
  R3.pet.position.x += (tx - R3.pet.position.x) * k;
  R3.pet.position.z += (tz - R3.pet.position.z) * k;
  R3.pet.position.y += (ty - R3.pet.position.y) * k;
  R3.pet.rotation.y = R3.pet.userData.spin ? t * 1.5 : Math.atan2(fx, fz);
}
function syncBodies() {
  const seen = new Set(),
    p = G.player;
  for (const b of G.bodies) {
    if (!(
      (dist(p, b) < (G.mode === 'sandbox' ? 900 : 480) && (dist(p, b) < 150 || clearLine(p, b))) ||
      !p.alive
    ))
      continue;
    let m = R3.bodies.get(b);
    if (!m) {
      m = makeBody3D(b.color);
      R3.scene.add(m);
      R3.bodies.set(b, m);
    }
    m.position.set(b.x, 0, b.y);
    seen.add(b);
  }
  for (const [b, m] of R3.bodies)
    if (!seen.has(b)) {
      R3.scene.remove(m);
      R3.bodies.delete(b);
    }
  const seenB = new Set();
  for (const b of G.blood) {
    let m = R3.blood.get(b);
    if (!m) {
      m = new THREE.Mesh(
        new THREE.CircleGeometry(b.r * 1.4, 20),
        new THREE.MeshBasicMaterial({
          color: 0x4a0505,
          transparent: true,
          opacity: 0.85,
          depthWrite: false,
          polygonOffset: true,
          polygonOffsetFactor: -2,
        })
      );
      m.rotation.x = -Math.PI / 2;
      m.scale.set(1.5, 0.8, 1);
      m.rotation.z = rnd(0, 6);
      R3.scene.add(m);
      R3.blood.set(b, m);
    }
    m.position.set(b.x, 0.6, b.y);
    seenB.add(b);
  }
  for (const [b, m] of R3.blood)
    if (!seenB.has(b)) {
      R3.scene.remove(m);
      R3.blood.delete(b);
    }
}
function syncParts() {
  const pa = R3.pts.geometry.attributes.position,
    ca = R3.pts.geometry.attributes.color,
    N = 700;
  let n = 0;
  const col = new THREE.Color();
  for (const q of G.parts) {
    if (n >= N) break;
    pa.array[n * 3] = q.x;
    pa.array[n * 3 + 1] = 18 + Math.max(0, q.life) * 45;
    pa.array[n * 3 + 2] = q.y;
    col.set(q.col);
    ca.array[n * 3] = col.r;
    ca.array[n * 3 + 1] = col.g;
    ca.array[n * 3 + 2] = col.b;
    n++;
  }
  R3.pts.geometry.setDrawRange(0, n);
  pa.needsUpdate = true;
  ca.needsUpdate = true;
  const ba = R3.bul.geometry.attributes.position;
  let m = 0;
  if (G.bullets)
    for (const b of G.bullets) {
      if (m >= 120) break;
      const k = m * 6;
      ba.array[k] = b.x;
      ba.array[k + 1] = 36;
      ba.array[k + 2] = b.y;
      ba.array[k + 3] = b.x - b.vx * 0.04;
      ba.array[k + 4] = 36;
      ba.array[k + 5] = b.y - b.vy * 0.04;
      m++;
    }
  R3.bul.geometry.setDrawRange(0, m * 2);
  ba.needsUpdate = true;
}
