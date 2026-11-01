/**
 * Dibujo 2D del mundo, minimapa y HUD clásico.
 */
'use strict';

function drawContent() {
  const p = G.player,
    pulse = 0.5 + 0.5 * Math.sin(G.t * 5);
  ctx.drawImage(MAP, 0, 0);
  // sangre
  for (const b of G.blood) {
    let g = ctx.createRadialGradient(b.x, b.y, 2, b.x, b.y, b.r * 1.6);
    g.addColorStop(0, 'rgba(90,5,5,.85)');
    g.addColorStop(1, 'rgba(60,0,0,0)');
    ctx.fillStyle = g;
    ctx.beginPath();
    ctx.ellipse(b.x, b.y, b.r * 1.8, b.r * 0.9, 0, 0, 6.3);
    ctx.fill();
    ctx.fillStyle = 'rgba(80,5,5,.8)';
    for (const d of b.dots) {
      ctx.beginPath();
      ctx.arc(b.x + d[0], b.y + d[1], d[2], 0, 6.3);
      ctx.fill();
    }
  }
  // estaciones
  if (G.mode !== 'zombie')
    STATIONS.forEach((s, i) => {
      const mine = !p.imp && p.tasks.some(t => t.st == i && !t.done);
      if (mine) {
        const g = ctx.createRadialGradient(s.x, s.y, 5, s.x, s.y, 60);
        g.addColorStop(0, `rgba(255,210,60,${0.35 + 0.3 * pulse})`);
        g.addColorStop(1, 'rgba(255,210,60,0)');
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(s.x, s.y, 60, 0, 6.3);
        ctx.fill();
      }
      let g = ctx.createLinearGradient(0, s.y - 22, 0, s.y + 22);
      g.addColorStop(0, mine ? '#ffe27a' : '#46515f');
      g.addColorStop(1, mine ? '#c8941a' : '#1f262e');
      ctx.fillStyle = g;
      rr(s.x - 22, s.y - 22, 44, 44, 8);
      ctx.fill();
      ctx.strokeStyle = '#05070a';
      ctx.lineWidth = 3;
      ctx.stroke();
      txt(s.icon, s.x, s.y, 24, mine ? '#2a1d00' : '#8fa0b5', 'center');
      if (mine || dist(p, s) < 200)
        txt(s.name, s.x, s.y + 38, 14, mine ? '#ffd740' : '#aab', 'center');
    });
  // puntos de reparación
  for (const f of fixPts()) {
    const g = ctx.createRadialGradient(f.x, f.y, 5, f.x, f.y, 70);
    g.addColorStop(0, `rgba(255,40,40,${0.4 + 0.4 * pulse})`);
    g.addColorStop(1, 'rgba(255,0,0,0)');
    ctx.fillStyle = g;
    ctx.beginPath();
    ctx.arc(f.x, f.y, 70, 0, 6.3);
    ctx.fill();
    ctx.fillStyle = '#8a1111';
    rr(f.x - 22, f.y - 22, 44, 44, 8);
    ctx.fill();
    ctx.strokeStyle = '#000';
    ctx.lineWidth = 3;
    ctx.stroke();
    txt(f.icon, f.x, f.y, 24, '#fff', 'center');
    txt(f.title, f.x, f.y + 38, 14, '#ff8a80', 'center');
  }
  // monitor cámaras + botón emergencia
  ctx.fillStyle = '#143';
  rr(CAMPT.x - 24, CAMPT.y - 20, 48, 40, 6);
  ctx.fill();
  ctx.strokeStyle = '#000';
  ctx.lineWidth = 3;
  ctx.stroke();
  txt('CAM', CAMPT.x, CAMPT.y, 14, '#6f9', 'center');
  if (dist(p, CAMPT) < 200)
    txt('Cámaras de seguridad', CAMPT.x, CAMPT.y + 34, 14, '#aab', 'center');
  const em = G.nearBtn;
  let g = ctx.createRadialGradient(BTN.x - 6, BTN.y - 6, 2, BTN.x, BTN.y, 26);
  g.addColorStop(0, em ? '#ff8080' : '#d04040');
  g.addColorStop(1, em ? '#a00000' : '#600');
  ctx.fillStyle = g;
  ctx.beginPath();
  ctx.arc(BTN.x, BTN.y, 24, 0, 6.3);
  ctx.fill();
  ctx.strokeStyle = '#000';
  ctx.lineWidth = 2;
  ctx.stroke();
  // puertas
  for (const d of DOORS) {
    const closed = G.doorsT > 0;
    if (closed) {
      g = ctx.createLinearGradient(d[0], 0, d[0] + d[2], 0);
      g.addColorStop(0, '#667');
      g.addColorStop(1, '#223');
      ctx.fillStyle = g;
      ctx.fillRect(d[0], d[1], d[2], d[3]);
      ctx.fillStyle = `rgba(255,40,40,${0.4 + 0.5 * pulse})`;
      ctx.fillRect(
        d[0] + (d[2] > d[3] ? 0 : 5),
        d[1] + (d[2] > d[3] ? 5 : 0),
        d[2] > d[3] ? d[2] : 6,
        d[2] > d[3] ? 6 : d[3]
      );
    } else {
      ctx.fillStyle = '#2a2f38';
      if (d[2] < d[3]) {
        ctx.fillRect(d[0], d[1] - 4, d[2], 10);
        ctx.fillRect(d[0], d[1] + d[3] - 6, d[2], 10);
      } else {
        ctx.fillRect(d[0] - 4, d[1], 10, d[3]);
        ctx.fillRect(d[0] + d[2] - 6, d[1], 10, d[3]);
      }
    }
  }
  for (const b of G.bodies) drawBody(b.x, b.y, b.color);
  drawBags();
  const list = G.ps
    .filter(q => (q.alive || (q.isP && !q.ejected)) && q.inVent === null)
    .sort((a, b) => a.y - b.y);
  for (const q of list) {
    const ghost = !q.alive;
    if (ghost && !q.isP) continue;
    drawCrew(q.x, q.y, q.color, q.face, q.step, ghost ? 0.5 : 1, 1, q.moving, G.t + q.id, ghost);
    const red = p.imp && q.imp && q !== p,
      label = q.isP ? q.name + ' (Tú)' : q.name;
    ctx.font = 'bold 12px system-ui';
    const w = ctx.measureText(label).width + 10;
    ctx.fillStyle = 'rgba(0,0,0,.45)';
    rr(q.x - w / 2, q.y - 52, w, 17, 8);
    ctx.fill();
    txt(label, q.x, q.y - 43, 12, red ? '#ff6060' : '#fff', 'center');
  }
  if (G.zs) drawZombies();
  if (p.inVent !== null) {
    const v = VENTS[p.inVent];
    ctx.fillStyle = `rgba(255,80,80,${0.3 + 0.3 * pulse})`;
    ctx.fillRect(v.x - 22, v.y - 12, 44, 24);
  }
  // partículas
  ctx.globalCompositeOperation = 'lighter';
  for (const q of G.parts) {
    if (q.col == '#7a0b0b') continue;
    ctx.globalAlpha = Math.max(0, q.life / q.max);
    ctx.fillStyle = q.col;
    ctx.fillRect(q.x, q.y, q.sz, q.sz);
  }
  ctx.globalCompositeOperation = 'source-over';
  ctx.globalAlpha = 1;
  for (const q of G.parts) {
    if (q.col != '#7a0b0b') continue;
    ctx.fillStyle = q.col;
    ctx.beginPath();
    ctx.arc(q.x, q.y, q.sz, 0, 6.3);
    ctx.fill();
  }
}
function drawWorld() {
  if (view3d && try3D()) return;
  if (G.mode === 'sandbox') {
    drawSbWorld();
    return;
  }
  const p = G.player;
  ctx.fillStyle = '#000';
  ctx.fillRect(0, 0, W, H);
  let sx = 0,
    sy = 0;
  if (G.shake > 0) {
    sx = rnd(-1, 1) * G.shake * 14;
    sy = rnd(-1, 1) * G.shake * 14;
  }
  ctx.save();
  ctx.translate(W / 2 - p.x + sx, H / 2 - p.y + sy);
  drawContent();
  ctx.restore();
  // polvo
  ctx.fillStyle = '#fff';
  for (const m of MOTES) {
    const x = (((m.x * W - p.x * 0.4 + G.t * m.v) % W) + W) % W,
      y = (((m.y * H - p.y * 0.4 + Math.sin(G.t + m.p) * 20) % H) + H) % H;
    ctx.globalAlpha = 0.12 + 0.1 * Math.sin(G.t * 2 + m.p);
    ctx.beginPath();
    ctx.arc(x, y, m.s, 0, 6.3);
    ctx.fill();
  }
  ctx.globalAlpha = 1;
  // iluminación dinámica
  const sm = Math.min(W, H) < 600 ? 0.7 : 1,
    lights = G.sab && G.sab.type == 'lights' && !p.imp;
  if (p.alive) {
    const R = (lights ? 170 : p.imp ? 560 : 430) * sm,
      cx = W / 2 + sx,
      cy = H / 2 + sy;
    lx.globalCompositeOperation = 'source-over';
    lx.clearRect(0, 0, W, H);
    lx.fillStyle = `rgba(1,3,7,${lights ? 0.985 : G.mode === 'zombie' ? 0.975 : 0.95})`;
    lx.fillRect(0, 0, W, H);
    lx.globalCompositeOperation = 'destination-out';
    let g = lx.createRadialGradient(cx, cy, 0, cx, cy, R);
    g.addColorStop(0, 'rgba(0,0,0,1)');
    g.addColorStop(0.45, 'rgba(0,0,0,.82)');
    g.addColorStop(1, 'rgba(0,0,0,0)');
    lx.fillStyle = g;
    lx.beginPath();
    lx.arc(cx, cy, R, 0, 6.3);
    lx.fill();
    // linterna
    const L = R * 1.55;
    g = lx.createRadialGradient(cx, cy, 10, cx, cy, L);
    g.addColorStop(0, 'rgba(0,0,0,.95)');
    g.addColorStop(1, 'rgba(0,0,0,0)');
    lx.fillStyle = g;
    lx.beginPath();
    lx.moveTo(cx, cy);
    lx.arc(cx, cy, L, p.aim - 0.55, p.aim + 0.55);
    lx.closePath();
    lx.fill();
    // lámparas de las salas
    if (!lights && !(G.sab && G.sab.type == 'reactor' && false))
      for (const l of LAMPS) {
        const lxp = l[0] - p.x + W / 2 + sx,
          lyp = l[1] - p.y + H / 2 + sy;
        if (lxp < -300 || lxp > W + 300 || lyp < -300 || lyp > H + 300) continue;
        const fl = G.sab ? (0.5 + 0.5 * Math.sin(G.t * 30 + l[0])) * 0.15 : 0;
        g = lx.createRadialGradient(lxp, lyp, 0, lxp, lyp, l[2]);
        g.addColorStop(0, `rgba(0,0,0,${0.4 - fl})`);
        g.addColorStop(1, 'rgba(0,0,0,0)');
        lx.fillStyle = g;
        lx.beginPath();
        lx.arc(lxp, lyp, l[2], 0, 6.3);
        lx.fill();
      }
    if (G.muzzle > 0) {
      g = lx.createRadialGradient(cx, cy, 0, cx, cy, 380);
      g.addColorStop(0, 'rgba(0,0,0,1)');
      g.addColorStop(1, 'rgba(0,0,0,0)');
      lx.globalAlpha = Math.min(1, G.muzzle / 0.05);
      lx.fillStyle = g;
      lx.beginPath();
      lx.arc(cx, cy, 380, 0, 6.3);
      lx.fill();
      lx.globalAlpha = 1;
    }
    lx.globalCompositeOperation = 'source-over';
    ctx.drawImage(lc, 0, 0);
    // resplandor cálido de la linterna
    ctx.globalCompositeOperation = 'lighter';
    g = ctx.createRadialGradient(cx, cy, 0, cx, cy, R * 0.8);
    g.addColorStop(0, 'rgba(255,230,180,.07)');
    g.addColorStop(1, 'rgba(255,230,180,0)');
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, W, H);
    ctx.globalCompositeOperation = 'source-over';
  }
  // etalonaje cinematográfico
  ctx.globalCompositeOperation = 'overlay';
  ctx.fillStyle = p.alive ? 'rgba(20,70,110,.28)' : 'rgba(120,150,200,.35)';
  ctx.fillRect(0, 0, W, H);
  ctx.globalCompositeOperation = 'source-over';
  if (G.sab) {
    const a = 0.07 + 0.07 * Math.sin(G.t * 6);
    ctx.fillStyle = `rgba(255,0,0,${a})`;
    ctx.fillRect(0, 0, W, H);
  }
  // viñeta + grano
  let g = ctx.createRadialGradient(
    W / 2,
    H / 2,
    Math.min(W, H) * 0.35,
    W / 2,
    H / 2,
    Math.hypot(W, H) * 0.6
  );
  g.addColorStop(0, 'rgba(0,0,0,0)');
  g.addColorStop(1, 'rgba(0,0,0,.7)');
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, W, H);
  ctx.save();
  ctx.globalAlpha = 0.075;
  ctx.globalCompositeOperation = 'overlay';
  ctx.fillStyle = ctx.createPattern(GRAIN, 'repeat');
  ctx.translate(Math.floor(Math.random() * 256), Math.floor(Math.random() * 256));
  ctx.fillRect(-256, -256, W + 512, H + 512);
  ctx.restore();
  if (G.flash > 0) {
    ctx.fillStyle = `rgba(200,0,0,${Math.min(0.6, G.flash * 0.6)})`;
    ctx.fillRect(0, 0, W, H);
  }
}
function drawMinimap() {
  const s = 0.07,
    w = 2400 * s,
    h = 1600 * s,
    x0 = W - w - 12,
    y0 = 12;
  ctx.fillStyle = 'rgba(0,0,0,.65)';
  ctx.fillRect(x0 - 4, y0 - 4, w + 8, h + 8);
  ctx.strokeStyle = 'rgba(255,255,255,.2)';
  ctx.strokeRect(x0 - 4, y0 - 4, w + 8, h + 8);
  ctx.fillStyle = '#6b7a8c';
  for (const r of ALL) ctx.fillRect(x0 + r[0] * s, y0 + r[1] * s, r[2] * s, r[3] * s);
  if (!G.player.imp)
    G.player.tasks.forEach(t => {
      if (!t.done) {
        const st = STATIONS[t.st];
        ctx.fillStyle = '#ffd740';
        ctx.fillRect(x0 + st.x * s - 3, y0 + st.y * s - 3, 6, 6);
      }
    });
  for (const f of fixPts()) {
    ctx.fillStyle = Math.sin(G.t * 8) > 0 ? '#f33' : '#811';
    ctx.fillRect(x0 + f.x * s - 4, y0 + f.y * s - 4, 8, 8);
  }
  if (G.player.imp)
    VENTS.forEach(v => {
      ctx.fillStyle = '#f88';
      ctx.fillRect(x0 + v.x * s - 2, y0 + v.y * s - 2, 4, 4);
    });
  ctx.fillStyle = '#fff';
  ctx.beginPath();
  ctx.arc(x0 + G.player.x * s, y0 + G.player.y * s, 4, 0, 6.3);
  ctx.fill();
  if (G.mode === 'zombie') {
    ctx.fillStyle = '#f33';
    for (const z of G.zs) {
      ctx.fillRect(x0 + z.x * s - 2, y0 + z.y * s - 2, 4, 4);
    }
    if (G.pod) {
      ctx.fillStyle = '#4f8';
      ctx.beginPath();
      ctx.arc(x0 + POD.x * s, y0 + POD.y * s, 6, 0, 6.3);
      ctx.fill();
    }
  }
}
function drawHUD() {
  const p = G.player,
    pulse = 0.5 + 0.5 * Math.sin(G.t * 6);
  if (G.mode === 'zombie') {
    drawZHUD();
    return;
  }
  if (G.mode === 'sandbox') {
    drawSbHUD();
    return;
  }
  const bw = Math.min(300, W * 0.4);
  ctx.fillStyle = 'rgba(0,0,0,.6)';
  rr(12, 12, bw + 8, 30, 8);
  ctx.fill();
  ctx.fillStyle = '#2e9d4a';
  rr(16, 16, Math.max(0, (bw * G.done) / G.total), 22, 6);
  ctx.fill();
  ctx.strokeStyle = '#fff6';
  ctx.lineWidth = 2;
  rr(16, 16, bw, 22, 6);
  ctx.stroke();
  txt('TAREAS', 26, 27, 13, '#fff', 'left');
  ctx.fillStyle = 'rgba(0,0,0,.55)';
  rr(12, 48, 280, 18 + p.tasks.length * 20, 8);
  ctx.fill();
  txt(
    p.imp ? 'IMPOSTOR — tareas falsas:' : 'Tus tareas:',
    22,
    62,
    13,
    p.imp ? '#ff5252' : '#ffd740'
  );
  p.tasks.forEach((t, i) =>
    txt(
      (t.done ? '✔ ' : '• ') +
        STATIONS[t.st].name +
        ' (' +
        roomOf(STATIONS[t.st].x, STATIONS[t.st].y) +
        ')',
      22,
      84 + i * 20,
      13,
      t.done ? '#6fcf73' : p.imp ? '#e88' : '#fff',
      'left',
      false
    )
  );
  drawMinimap();
  if (G.sab) {
    const s = G.sab,
      msg =
        s.type == 'lights'
          ? 'LUCES APAGADAS — repáralas en Eléctrico'
          : `REACTOR CRÍTICO ${Math.ceil(s.t)}s — paneles en Reactor y Motores`;
    ctx.fillStyle = `rgba(160,0,0,${0.6 + 0.3 * pulse})`;
    rr(W / 2 - 230, 12, 460, 40, 10);
    ctx.fill();
    txt('⚠ ' + msg, W / 2, 32, 15, '#fff', 'center');
  } else if (G.doorsT > 0) {
    ctx.fillStyle = 'rgba(160,0,0,.7)';
    rr(W / 2 - 150, 12, 300, 36, 10);
    ctx.fill();
    txt('⚠ PUERTAS BLOQUEADAS ' + Math.ceil(G.doorsT) + 's', W / 2, 30, 15, '#fff', 'center');
  }
  if (G.toastT > 0) {
    ctx.font = 'bold 18px system-ui';
    const w = ctx.measureText(G.toast).width + 40;
    ctx.fillStyle = 'rgba(0,0,0,.6)';
    rr(W / 2 - w / 2, H - 130, w, 38, 6);
    ctx.fill();
    txt(G.toast, W / 2, H - 111, 18, '#fff', 'center');
  }
  if (p.inVent !== null)
    txt(
      'EN VENTILACIÓN — ← → cambiar conducto · V / USAR salir',
      W / 2,
      H - 60,
      16,
      '#ff9090',
      'center'
    );
  const bs = Math.min(88, W * 0.17),
    bx = W - bs - 14,
    by = H - bs - 14;
  const btn = (x, y, label, sub, on, col, fn) => {
    ctx.globalAlpha = on ? 1 : 0.32;
    const g = ctx.createRadialGradient(
      x + bs * 0.4,
      y + bs * 0.35,
      4,
      x + bs / 2,
      y + bs / 2,
      bs / 2
    );
    g.addColorStop(0, shade(col, 0.3));
    g.addColorStop(1, shade(col, -0.4));
    ctx.fillStyle = g;
    ctx.beginPath();
    ctx.arc(x + bs / 2, y + bs / 2, bs / 2, 0, 6.3);
    ctx.fill();
    ctx.strokeStyle = 'rgba(255,255,255,.35)';
    ctx.lineWidth = 3;
    ctx.stroke();
    txt(label, x + bs / 2, y + bs / 2 - 6, bs > 76 ? 15 : 12, '#fff', 'center');
    txt(sub, x + bs / 2, y + bs / 2 + 13, 11, '#fff', 'center', false);
    ctx.globalAlpha = 1;
    if (on) addHit(x, y, bs, bs, fn, false);
  };
  const canUse = G.nearFix || G.nearSt != null || G.nearCam || G.nearBtn || p.inVent !== null;
  btn(bx, by, p.inVent !== null ? 'SALIR' : 'USAR', '[E]', !!canUse, '#3a7bd5', doUse);
  btn(bx - bs - 8, by, 'REPORTAR', '[R]', !!G.nearBody, '#e0a020', doReport);
  if (p.imp && p.alive) {
    btn(
      bx,
      by - bs - 8,
      p.kcd > 0 ? Math.ceil(p.kcd) + 's' : 'MATAR',
      p.kcd > 0 ? 'espera' : '[Q]',
      p.kcd <= 0 && !!G.nearVic,
      '#c62828',
      doKill
    );
    btn(
      bx - bs - 8,
      by - bs - 8,
      'VENT',
      '[V]',
      G.nearVent !== null || p.inVent !== null,
      '#7b4a9a',
      toggleVent
    );
    const can = !G.sab && G.doorsT <= 0 && G.sabCD <= 0;
    btn(
      bx - 2 * bs - 16,
      by,
      G.sabCD > 0 ? Math.ceil(G.sabCD) + 's' : 'SABOTAJE',
      '[F]',
      can && p.inVent === null,
      '#a04020',
      openSabMenu
    );
  }
  if (!p.alive && G.deadT <= 0)
    txt('Eres un fantasma: completa tareas y observa', W / 2, H - 30, 16, '#cfd8dc', 'center');
  if (G.deadT > 0) {
    ctx.fillStyle = 'rgba(120,0,0,.55)';
    ctx.fillRect(0, H / 2 - 60, W, 120);
    txt('HAS SIDO ELIMINADO', W / 2, H / 2 - 10, 40, '#fff', 'center');
    txt(
      'Sigues como fantasma y puedes completar tareas',
      W / 2,
      H / 2 + 30,
      18,
      '#fff',
      'center',
      false
    );
  }
  if (joy && joy.active) {
    ctx.strokeStyle = '#fff7';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(joy.sx, joy.sy, 50, 0, 6.3);
    ctx.stroke();
    ctx.fillStyle = '#fff6';
    ctx.beginPath();
    ctx.arc(joy.sx + (joy.vx || 0) * 50, joy.sy + (joy.vy || 0) * 50, 22, 0, 6.3);
    ctx.fill();
  }
  if (G.intro > 0) drawIntro();
}
function drawIntro() {
  if (G.mode === 'zombie') {
    drawZIntro();
    return;
  }
  const p = G.player,
    k = Math.min(1, G.intro / 1);
  ctx.fillStyle = `rgba(0,0,0,${0.92 * Math.min(1, k + 0.1)})`;
  ctx.fillRect(0, 0, W, H);
  const bar = H * 0.12;
  ctx.fillStyle = '#000';
  ctx.fillRect(0, 0, W, bar);
  ctx.fillRect(0, H - bar, W, bar);
  const imp = p.imp,
    col = imp ? '#ff3030' : '#4fc3f7';
  ctx.save();
  ctx.shadowColor = col;
  ctx.shadowBlur = 40;
  txt(imp ? 'IMPOSTOR' : 'TRIPULANTE', W / 2, H / 2 - 110, Math.min(70, W / 8), col, 'center');
  ctx.restore();
  drawCrew(W / 2, H / 2 + 10, p.color, 1, 0, 1, 2.4, false, G.t);
  txt(
    imp
      ? `Elimina a la tripulación sin ser descubierto`
      : `Hay ${nImp} impostor${nImp > 1 ? 'es' : ''} entre nosotros`,
    W / 2,
    H / 2 + 105,
    Math.min(22, W / 22),
    '#fff',
    'center',
    false
  );
  if (imp) {
    const m = G.ps.filter(q => q.imp && q !== p).map(q => q.name);
    if (m.length) txt('Compañero: ' + m.join(', '), W / 2, H / 2 + 135, 18, '#ff7070', 'center');
  }
}
