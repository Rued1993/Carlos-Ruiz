/**
 * Actualización por frame del mundo clásico, jugador y minijuegos.
 */
'use strict';

function updateWorld(dt) {
  const g = G,
    p = g.player;
  if (g.mode === 'sandbox') {
    updSandbox(dt);
    return;
  }
  g.t += dt;
  g.meetCD = Math.max(0, g.meetCD - dt);
  g.sabCD = Math.max(0, g.sabCD - dt);
  if (g.toastT > 0) g.toastT -= dt;
  if (g.flash > 0) g.flash -= dt * 1.5;
  if (g.deadT > 0) g.deadT -= dt;
  if (g.shake > 0) g.shake -= dt;
  if (g.doorsT > 0) g.doorsT -= dt;
  for (const b of g.ps)
    if (!b.isP && b.alive) {
      b.moving = false;
      updBot(b, dt);
      if (scene == 'meeting' || scene == 'end') return;
    }
  // sabotajes
  if (g.sab) {
    if (g.dispatchT > 0) {
      g.dispatchT -= dt;
      if (g.dispatchT <= 0) dispatch();
    }
    if (g.sab.type == 'reactor') {
      g.sab.t -= dt;
      g.alarmT -= dt;
      if (g.alarmT <= 0) {
        g.alarmT = 0.9;
        beep(880, 0.25, 'square', 0.04);
      }
      g.sparkT -= dt;
      if (g.sparkT <= 0) {
        g.sparkT = 0.15;
        for (const f of fixPts()) burst(f.x, f.y, 3, '#ffb040', 120, 0.5);
      }
      if (g.sab.t <= 0) {
        endGame('imp');
        return;
      }
    }
  } else if (g.doorsT <= 0 && g.t > 35 && g.ps.some(q => q.imp && q.alive && !q.isP)) {
    g.botSabT -= dt;
    if (g.botSabT <= 0) {
      g.botSabT = rnd(50, 90) * diff().sab;
      startSab(pick(['lights', 'lights', 'reactor', 'doors']));
    }
  }
  // latido si hay un impostor cerca
  if (p.alive && !p.imp) {
    let near = 1e9;
    for (const q of g.ps) if (q.imp && q.alive) near = Math.min(near, dist(p, q));
    if (near < 280) {
      g.hb -= dt;
      if (g.hb <= 0) {
        g.hb = 0.5 + near / 600;
        beep(55, 0.14, 'sine', 0.2);
        setTimeout(() => beep(48, 0.12, 'sine', 0.15), 130);
      }
    }
  }
  // partículas
  for (const q of g.parts) {
    q.x += q.vx * dt;
    q.y += q.vy * dt;
    q.vy += 200 * dt;
    q.vx *= 0.98;
    q.life -= dt;
  }
  g.parts = g.parts.filter(q => q.life > 0);
  if (g.mode === 'zombie') {
    updZombie(dt);
    return;
  }
  if (scene !== 'play' && scene !== 'task' && scene !== 'cams' && scene !== 'sab') return;
  for (const b of g.ps)
    if (!b.isP && b.alive && !b.imp)
      for (const bd of g.bodies)
        if (dist(b, bd) < 300) {
          b.rt = (b.rt === undefined ? 0.7 : b.rt) - dt;
          if (b.rt <= 0) {
            b.rt = undefined;
            startMeeting(b, bd);
            return;
          }
        }
  for (const b of g.ps)
    if (
      !b.isP &&
      b.alive &&
      !b.imp &&
      b.saw != null &&
      b.sawWhat == 'vent' &&
      scene !== 'meeting'
    ) {
      b.vt = (b.vt === undefined ? 1 : b.vt) - dt;
      if (b.vt <= 0) {
        b.vt = undefined;
        startMeeting(b, null);
        return;
      }
    }
}
/** Sprint con barra de resistencia (Shift o gatillo del mando). */
function updStamina(p, dt) {
  if (G.stam === undefined) G.stam = 100;
  const want = (keys.shift || pad.sprint) && p.moving && p.alive;
  if (want && G.stam > 0 && !G.stamLock) {
    p.sprinting = true;
    G.stam = Math.max(0, G.stam - 30 * dt);
    if (G.stam <= 0) G.stamLock = true;
  } else {
    p.sprinting = false;
    G.stam = Math.min(100, G.stam + (p.moving ? 14 : 26) * dt);
    if (G.stam >= 30) G.stamLock = false;
  }
}
function updatePlayer(dt) {
  const p = G.player;
  p.kcd = Math.max(0, p.kcd - dt);
  if (view3d && scene === 'play') {
    CAM.yaw += ((keys.arrowright ? 1 : 0) - (keys.arrowleft ? 1 : 0)) * 2.2 * dt;
    CAM.elev = clamp(
      CAM.elev + ((keys.arrowdown ? 1 : 0) - (keys.arrowup ? 1 : 0)) * 1.2 * dt,
      0.12,
      1.25
    );
  }
  if (scene === 'play' && G.intro <= 0) {
    if (p.inVent !== null) {
      p.moving = false;
    } else {
      let ax = (keys.d || keys.arrowright ? 1 : 0) - (keys.a || keys.arrowleft ? 1 : 0),
        ay = (keys.s || keys.arrowdown ? 1 : 0) - (keys.w || keys.arrowup ? 1 : 0);
      if (view3d) {
        ax = (keys.d ? 1 : 0) - (keys.a ? 1 : 0);
        ay = (keys.s ? 1 : 0) - (keys.w ? 1 : 0);
      }
      if (joy && joy.vx !== undefined) {
        ax += joy.vx;
        ay += joy.vy;
      }
      if (view3d) {
        const f = -ay,
          r = ax,
          c = Math.cos(CAM.yaw),
          sn = Math.sin(CAM.yaw);
        ax = c * f - sn * r;
        ay = sn * f + c * r;
      }
      if (pad.on) {
        const f = -pad.ly,
          r = pad.lx,
          c = Math.cos(CAM.yaw),
          sn = Math.sin(CAM.yaw);
        ax += c * f - sn * r;
        ay += sn * f + c * r;
      }
      const n = Math.hypot(ax, ay);
      p.moving = n > 0.05;
      updStamina(p, dt);
      if (p.moving) {
        const sp = (p.alive ? 235 : 300) * (p.sprinting ? 1.5 : 1);
        move(p, (ax / Math.max(n, 1)) * sp * dt, (ay / Math.max(n, 1)) * sp * dt);
        if (Math.abs(ax) > 0.1) p.face = ax > 0 ? 1 : -1;
        p.aim = Math.atan2(ay, ax);
        p.step += dt * 14 * (p.sprinting ? 1.4 : 1);
        if (p.alive) {
          G.stepT -= dt;
          if (G.stepT <= 0) {
            G.stepT = p.sprinting ? 0.22 : 0.33;
            sfx.step(p.sprinting);
          }
        }
      }
    }
  }
  const inV = p.inVent !== null;
  G.nearSt = null;
  if (!inV)
    for (const t of p.tasks)
      if (!t.done && dist(p, STATIONS[t.st]) < 80) {
        G.nearSt = t.st;
        break;
      }
  G.nearBody = null;
  if (p.alive && !inV) for (const b of G.bodies) if (dist(p, b) < 110) G.nearBody = b;
  G.nearVic = null;
  if (p.imp && p.alive && !inV) {
    let bd = 85;
    for (const q of G.ps)
      if (q.alive && !q.imp && dist(p, q) < bd) {
        bd = dist(p, q);
        G.nearVic = q;
      }
  }
  G.nearBtn =
    G.mode === 'classic' && p.alive && !inV && p.emerg > 0 && G.meetCD <= 0 && dist(p, BTN) < 90;
  G.nearFix = null;
  if (G.sab && !p.imp && !inV)
    for (const f of fixPts())
      if (dist(p, f) < 85) {
        G.nearFix = f;
        break;
      }
  G.nearCam = !inV && G.mode !== 'sandbox' && dist(p, CAMPT) < 90;
  G.nearBag = null;
  G.nearPod = false;
  if (G.mode === 'zombie') {
    for (const b of G.bags)
      if (!b.open && dist(p, b) < 75) {
        G.nearBag = b;
        break;
      }
    G.nearPod = !!G.pod && dist(p, POD) < 80;
  }
  G.nearVent = null;
  if (p.imp && p.alive && !inV)
    for (let i = 0; i < VENTS.length; i++)
      if (dist(p, VENTS[i]) < 70) {
        G.nearVent = i;
        break;
      }
}
function updateTask(dt) {
  const t = G.task;
  if (!t) return;
  if (t.doneT > 0) {
    t.doneT -= dt;
    if (t.doneT <= 0) {
      const d = t.done;
      G.task = null;
      scene = 'play';
      beep(700, 0.2, 'sine', 0.08, 300);
      d();
    }
    return;
  }
  if (t.flash > 0) t.flash -= dt;
  if (t.type == 'hold') {
    const m = um(),
      inside = Math.hypot(m.x - 300, m.y - 230) < 80;
    t.prog = mouse.down && inside ? t.prog + dt / 2.2 : Math.max(0, t.prog - dt * 0.4);
    if (t.prog >= 1) t.doneT = 0.6;
  }
  if (t.type == 'slider') {
    t.mk += t.dir * t.speed * dt;
    if (t.mk >= 480) {
      t.mk = 480;
      t.dir = -1;
    }
    if (t.mk <= 0) {
      t.mk = 0;
      t.dir = 1;
    }
    if (t.hits >= 3) t.doneT = 0.6;
  }
  if (t.type == 'keypad' && t.entry === t.code) t.doneT = 0.6;
  if (t.type == 'simon') {
    if (t.show > 0 && t.doneT <= 0) {
      t.show -= dt;
      const e = t.len * 0.7 + 0.4 - t.show - 0.4,
        k = Math.floor(e / 0.7);
      t.lit = e >= 0 && k < t.len && e % 0.7 < 0.45 ? t.seq[k] : -1;
    } else t.lit = t.pressed > 0 ? t.lit : -1;
    if (t.pressed > 0) t.pressed -= dt;
    if (t.len > 5) t.doneT = 0.6;
  }
  if (t.type == 'numbers' && t.next > 9) t.doneT = 0.6;
  if (t.type == 'wires' && t.conn.length == 4) t.doneT = 0.6;
  if (t.type == 'switches' && t.sw.every(v => v)) t.doneT = 0.6;
}
