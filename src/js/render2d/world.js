/**
 * Dibujo 2D del mundo, minimapa y HUD clásico.
 */
'use strict';

function drawContent() {
  const p = G.player,
    pulse = 0.5 + 0.5 * Math.sin(G.t * 5);
  ctx.drawImage(MAP, 0, 0, 2400, 1600);
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
  // --- progreso de la tripulación y lista de tareas (arriba a la izquierda)
  const rows = p.tasks.length,
    panelH = 64 + rows * 24;
  glass(14, 14, 300, panelH, p.imp ? 'rgba(255,90,74,.5)' : 'rgba(111,224,138,.4)', 14);
  hudBar(
    'crew',
    24,
    22,
    280,
    24,
    G.done,
    G.total,
    '#43b05a',
    'check',
    Math.round((100 * G.done) / G.total) + '%'
  );
  txt(
    p.imp ? 'IMPOSTOR · tareas falsas' : 'TUS TAREAS',
    28,
    62,
    11,
    p.imp ? '#ff8a80' : '#ffd54f',
    'left'
  );
  p.tasks.forEach((t, i) => {
    const y = 82 + i * 24;
    icon(t.done ? 'check' : 'dot', 34, y, 14, t.done ? '#6fe08a' : p.imp ? '#e88' : '#ffd54f');
    txt(STATIONS[t.st].name, 50, y, 13, t.done ? '#7a9a80' : '#fff', 'left', false);
    txt(roomOf(STATIONS[t.st].x, STATIONS[t.st].y), 302, y, 11, '#7f93a8', 'right', false);
  });
  drawMinimap();
  if (G.sab) {
    const s = G.sab,
      msg =
        s.type == 'lights'
          ? 'LUCES APAGADAS — repáralas en Eléctrico'
          : `REACTOR CRÍTICO ${Math.ceil(s.t)}s — paneles en Reactor y Motores`;
    glass(W / 2 - 250, 14, 500, 44, `rgba(255,70,60,${0.5 + 0.4 * pulse})`, 12);
    ctx.fillStyle = `rgba(160,0,0,${0.35 + 0.25 * pulse})`;
    rr(W / 2 - 250, 14, 500, 44, 12);
    ctx.fill();
    icon('bolt', W / 2 - 226, 36, 22, '#ffd54f');
    txt(msg, W / 2 + 10, 36, 15, '#fff', 'center');
  } else if (G.doorsT > 0) {
    glass(W / 2 - 160, 14, 320, 40, `rgba(255,70,60,${0.5 + 0.4 * pulse})`, 12);
    icon('bolt', W / 2 - 134, 34, 20, '#ffd54f');
    txt('PUERTAS BLOQUEADAS ' + Math.ceil(G.doorsT) + 's', W / 2 + 10, 34, 15, '#fff', 'center');
  }
  drawToast(H - 150);
  if (p.inVent !== null)
    chip(
      W / 2 - 190,
      H - 110,
      'EN VENTILACIÓN · ← → cambiar conducto · V / E salir',
      'vent',
      '#ff9090',
      13
    );
  const r = Math.min(44, W * 0.085),
    bx = W - r - 16,
    by = H - r - 16,
    canUse = G.nearFix || G.nearSt != null || G.nearCam || G.nearBtn || p.inVent !== null;
  actionBtn(
    bx,
    by,
    r,
    p.inVent !== null ? 'SALIR' : 'USAR',
    'E',
    'touch',
    !!canUse,
    '#3a7bd5',
    doUse
  );
  actionBtn(
    bx - r * 2 - 10,
    by,
    r,
    'REPORTAR',
    'R',
    'megaphone',
    !!G.nearBody,
    '#e0a020',
    doReport
  );
  if (p.imp && p.alive) {
    actionBtn(
      bx,
      by - r * 2 - 10,
      r,
      'MATAR',
      'Q',
      'dagger',
      p.kcd <= 0 && !!G.nearVic,
      '#c62828',
      doKill,
      p.kcd > 0 ? p.kcd / KCD : 0
    );
    actionBtn(
      bx - r * 2 - 10,
      by - r * 2 - 10,
      r,
      'VENT',
      'V',
      'vent',
      G.nearVent !== null || p.inVent !== null,
      '#7b4a9a',
      toggleVent
    );
    const can = !G.sab && G.doorsT <= 0 && G.sabCD <= 0;
    actionBtn(
      bx - r * 4 - 20,
      by,
      r,
      'SABOTAJE',
      'F',
      'bolt',
      can && p.inVent === null,
      '#a04020',
      openSabMenu,
      G.sabCD > 0 ? G.sabCD / 35 : 0
    );
  }
  if (!p.alive && G.deadT <= 0)
    chip(
      W / 2 - 200,
      H - 60,
      'Eres un fantasma: completa tareas y observa',
      'skull',
      '#cfd8dc',
      13
    );
  if (G.deadT > 0) {
    const g2 = ctx.createLinearGradient(0, 0, W, 0);
    g2.addColorStop(0, 'rgba(120,0,0,0)');
    g2.addColorStop(0.2, 'rgba(120,0,0,.65)');
    g2.addColorStop(0.8, 'rgba(120,0,0,.65)');
    g2.addColorStop(1, 'rgba(120,0,0,0)');
    ctx.fillStyle = g2;
    ctx.fillRect(0, H / 2 - 64, W, 128);
    txt('HAS SIDO ELIMINADO', W / 2, H / 2 - 12, 40, '#fff', 'center');
    txt(
      'Sigues como fantasma y puedes completar tareas',
      W / 2,
      H / 2 + 30,
      18,
      '#ffd0d0',
      'center',
      false
    );
  }
  drawJoystick();
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
