/**
 * Animación procedural de los personajes articulados.
 *
 * `animateCrew(u, s, dt)` recibe el rig (u.rig) y un estado `s` y calcula el ángulo objetivo de
 * cada articulación (cadera, rodilla, hombro, codo, torso); después las suaviza con un filtro
 * exponencial para evitar tirones. Cubre caminar/correr con rodillas y codos que se doblan,
 * respiración, inclinación al correr, giro del torso al apuntar, poses con arma, bate, picar,
 * emotes (saludar, bailar, señalar), zombis que avanzan con los brazos extendidos y reacción al daño.
 *
 * Estado: { t, speed (0..1.3), phase, sprint (0..1), zomb, aim, wep, swing, recoil, mining,
 *           emote, lunge, flinch, twist, turn, speaking, work }
 */
'use strict';

function animateCrew(u, s, dt) {
  const r = u.rig,
    k = Math.min(1, dt * 14),
    t = s.t,
    ph = s.phase,
    sp = Math.min(1.3, s.speed || 0),
    moving = sp > 0.06,
    A = (0.5 + 0.45 * (s.sprint || 0)) * Math.min(1, sp * 1.5),
    sw = Math.sin(ph),
    cw = Math.cos(ph);
  const T = {
    lean: 0.03 + sp * 0.06 + (s.sprint || 0) * sp * 0.2,
    bank: clamp(-(s.turn || 0) * 0.06, -0.2, 0.2),
    twist: s.twist || 0,
    bob: moving ? Math.abs(sw) * 2.4 * Math.min(1, sp) : Math.sin(t * 1.9) * 0.45,
    hipL: moving ? sw * A : 0,
    hipR: moving ? -sw * A : 0,
    kneeL: moving ? Math.max(0, cw) * (0.5 + 0.7 * A) : 0,
    kneeR: moving ? Math.max(0, -cw) * (0.5 + 0.7 * A) : 0,
    shLx: moving ? -sw * A * 0.85 : Math.sin(t * 1.3) * 0.04,
    shRx: moving ? sw * A * 0.85 : Math.sin(t * 1.3 + 1) * 0.04,
    shLz: 0.08,
    shRz: -0.08,
    elL: -(0.12 + 0.55 * sp * 0.7),
    elR: -(0.12 + 0.55 * sp * 0.7),
    sway: 0,
  };
  if (!moving && !s.zomb) T.twist += Math.sin(t * 0.5) * 0.05 + Math.sin(t * 1.7) * 0.02;
  if (s.work) {
    T.shRx = -0.9 + Math.sin(t * 5) * 0.25;
    T.elR = -0.9 + Math.sin(t * 5.5) * 0.3;
    T.lean += 0.08;
  }
  // armas y herramientas (jugador)
  const fire = s.wep === 'pistola' || s.wep === 'escopeta' || s.wep === 'subfusil';
  if (fire && s.aim) {
    T.shRx = -1.38 - (s.recoil || 0) * 0.35;
    T.elR = -0.12;
    T.shRz = -0.04;
    T.shLx = -1.28;
    T.shLz = 0.62;
    T.elL = -0.45;
    T.lean += 0.05;
  } else if (s.wep === 'bate') {
    const sg = s.swing || 0;
    T.shRx = sg > 0 ? -2.5 + (1 - sg / 0.2) * 2.3 : -0.55;
    T.elR = sg > 0 ? -0.3 : -0.9;
    if (sg > 0) T.lean += 0.2;
  }
  if (s.mining) {
    T.shRx = -1.1 + Math.sin(t * 13) * 0.95;
    T.elR = -0.95 + Math.sin(t * 13) * 0.25;
    T.lean += 0.1;
    T.twist += Math.sin(t * 13) * 0.12;
  }
  // zombis: brazos extendidos, torso adelantado, pierna arrastrada
  if (s.zomb) {
    const l = s.lunge || 0;
    T.shLx = T.shRx = -1.36 - l * 0.3 + Math.sin(ph * 0.9) * 0.12;
    T.shLz = 0.14;
    T.shRz = -0.14;
    T.elL = T.elR = -0.2 + Math.sin(ph * 0.9 + 1) * 0.08 - l * 0.2;
    T.lean = 0.2 + 0.08 * Math.sin(ph) + l * 0.3;
    T.hipR *= 0.55;
    T.kneeR *= 0.4;
    T.bank = Math.sin(ph) * 0.06;
  }
  // emotes
  const e = s.emote;
  if (e === 1) {
    T.shRx = -2.9;
    T.shRz = -0.25;
    T.elR = -0.3 + Math.sin(t * 9) * 0.6;
  } else if (e === 2) {
    T.bank = Math.sin(t * 6) * 0.2;
    T.bob = 1.5 + Math.abs(Math.sin(t * 6)) * 3.4;
    T.shLx = -2.5 + Math.sin(t * 6) * 0.55;
    T.shRx = -2.5 + Math.cos(t * 6) * 0.55;
    T.elL = T.elR = -0.35;
    T.hipL = Math.sin(t * 6) * 0.35;
    T.hipR = -Math.sin(t * 6) * 0.35;
    T.kneeL = Math.max(0, Math.sin(t * 6)) * 0.7;
    T.kneeR = Math.max(0, -Math.sin(t * 6)) * 0.7;
    T.twist += Math.sin(t * 3) * 0.4;
  } else if (e === 3) {
    T.shRx = -1.5;
    T.elR = -0.05;
    T.twist += 0.2;
  }
  if (s.speaking) {
    T.shRx = -0.95 + Math.sin(t * 4.7) * 0.4;
    T.elR = -0.95 + Math.sin(t * 6.1) * 0.35;
    T.shLx = -0.3 + Math.sin(t * 3.3) * 0.15;
    T.bob += Math.abs(Math.sin(t * 9)) * 1.6;
  }
  T.lean -= (s.flinch || 0) * 0.55;
  const sm = (o, key, v) => (o[key] += (v - o[key]) * k);
  sm(r.torso.rotation, 'x', T.lean);
  sm(r.torso.rotation, 'z', T.bank);
  sm(r.torso.rotation, 'y', T.twist);
  sm(r.torso.position, 'y', 28 + T.bob);
  sm(r.pack.rotation, 'x', -T.lean * 0.9 + Math.sin(ph * 2) * 0.04 * sp);
  sm(r.legL.hip.rotation, 'x', T.hipL);
  sm(r.legR.hip.rotation, 'x', T.hipR);
  sm(r.legL.knee.rotation, 'x', T.kneeL);
  sm(r.legR.knee.rotation, 'x', T.kneeR);
  sm(r.armL.sh.rotation, 'x', T.shLx);
  sm(r.armR.sh.rotation, 'x', T.shRx);
  sm(r.armL.sh.rotation, 'z', T.shLz);
  sm(r.armR.sh.rotation, 'z', T.shRz);
  sm(r.armL.el.rotation, 'x', T.elL);
  sm(r.armR.el.rotation, 'x', T.elR);
  r.torso.scale.y = 1 + Math.sin(t * 1.9) * 0.008;
}
