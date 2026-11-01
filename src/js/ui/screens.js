/**
 * Pantallas: inicio, partida libre, niveles, briefing, historia, HUD de misión, pausa, resultado.
 */
'use strict';

function totalStars() {
  return [...LEVELS, ...CHAPTERS].reduce((n, d) => n + (SAVE.stars[d.id] || 0), 0);
}
function titleGlow(s, x, y, size, col) {
  ctx.save();
  ctx.shadowColor = col;
  ctx.shadowBlur = 26 + 8 * Math.sin(menuT * 3);
  txt(s, x, y, size, col, 'center');
  ctx.restore();
}
function panel(x, y, w, h, col) {
  const edge = col || 'rgba(120,170,230,.55)';
  ctx.save();
  ctx.shadowColor = 'rgba(0,0,0,.55)';
  ctx.shadowBlur = 26;
  ctx.shadowOffsetY = 8;
  const g = ctx.createLinearGradient(0, y, 0, y + h);
  g.addColorStop(0, 'rgba(20,32,58,.93)');
  g.addColorStop(1, 'rgba(6,10,22,.95)');
  ctx.fillStyle = g;
  rr(x, y, w, h, 16);
  ctx.fill();
  ctx.restore();
  ctx.strokeStyle = edge;
  ctx.lineWidth = 2;
  rr(x, y, w, h, 16);
  ctx.stroke();
  const hl = ctx.createLinearGradient(0, y, 0, y + Math.min(h, 60));
  hl.addColorStop(0, 'rgba(255,255,255,.1)');
  hl.addColorStop(1, 'rgba(255,255,255,0)');
  ctx.fillStyle = hl;
  rr(x + 2, y + 2, w - 4, Math.min(h, 60), [14, 14, 0, 0]);
  ctx.fill();
}
function stars3(n, x, y, size) {
  let s = '';
  for (let i = 0; i < 3; i++) s += i < n ? '★' : '☆';
  txt(s, x, y, size, n ? '#ffd740' : '#667', 'center');
}
function drawHome() {
  beginUI(700, 500);
  titleGlow('NÉBULA-7', 350, 80, 66, '#40e0ff');
  txt('E L   C U B O', 350, 130, 24, '#e0f4ff', 'center');
  txt('Una aventura de impostores, zombis y cubos', 350, 160, 14, '#9fb3c8', 'center', false);
  uiBtn(
    190,
    195,
    320,
    56,
    `MODO HISTORIA  ·  Cap. ${Math.min(SAVE.story + 1, CHAPTERS.length)}/${CHAPTERS.length}`,
    '#7a2a6a',
    () => {
      scene = 'story';
    },
    20
  );
  uiBtn(
    190,
    262,
    320,
    56,
    `MODO NIVELES  ·  ★ ${totalStars()}/${LEVELS.length * 3}`,
    '#2a5a8a',
    () => {
      scene = 'levels';
    },
    20
  );
  uiBtn(
    190,
    329,
    320,
    56,
    'PARTIDA LIBRE',
    '#2e7d32',
    () => {
      scene = 'free';
    },
    20
  );
  const opts = [
    ['♪ Música: ' + (SAVE.music ? 'SÍ' : 'NO'), () => (SAVE.music = !SAVE.music)],
    [
      'Calidad: ' + ['Baja', 'Media', 'Alta'][SAVE.quality],
      () => (SAVE.quality = (SAVE.quality + 1) % 3),
    ],
    ['Dificultad: ' + diff().name, () => (SAVE.difficulty = (SAVE.difficulty + 1) % 3)],
    ['Vista: ' + (view3d ? '3D' : '2D'), () => (view3d = !view3d)],
  ];
  opts.forEach((o, i) =>
    uiBtn(
      20 + i * 170,
      412,
      150,
      34,
      o[0],
      '#3a4a6a',
      () => {
        o[1]();
        saveGame();
      },
      13
    )
  );
  uiBtn(30, 454, 200, 34, '🎩 Armario', '#6a3a8a', () => (scene = 'wardrobe'), 14);
  uiBtn(
    250,
    454,
    200,
    34,
    `🏆 Logros ${ACHIEVEMENTS.filter(a => SAVE.ach[a.id]).length}/${ACHIEVEMENTS.length}`,
    '#8a6a1a',
    () => (scene = 'achv'),
    14
  );
  uiBtn(
    470,
    454,
    200,
    34,
    '📅 Reto diario' + (SAVE.stars[dailyDef().id] ? ' ✔' : ''),
    '#2a6a5a',
    () => openBrief(dailyDef(), 'daily', 0),
    14
  );
  endUI();
}
function drawFree() {
  beginUI(700, 500);
  titleGlow('PARTIDA LIBRE', 350, 70, 44, '#7dff9a');
  uiBtn(250, 120, 200, 60, 'JUGAR', '#2e7d32', newGame, 30);
  uiBtn(
    170,
    198,
    360,
    44,
    'Modo: ' + MODE_NAME[gmode] + ' ' + MODE_ICON[gmode],
    '#6a2a2a',
    () => {
      gmode = { classic: 'zombie', zombie: 'sandbox', sandbox: 'classic' }[gmode];
    },
    18
  );
  if (gmode === 'classic')
    uiBtn(
      245,
      254,
      210,
      40,
      'Impostores: ' + nImp,
      '#3a4a6a',
      () => {
        nImp = (nImp % 3) + 1;
      },
      16
    );
  if (gmode === 'sandbox')
    uiBtn(
      225,
      254,
      250,
      40,
      'Variante: ' + (sbNights ? '🔥 Las 99 Noches' : 'Normal'),
      sbNights ? '#7a3a14' : '#3a4a6a',
      () => {
        sbNights = !sbNights;
      },
      16
    );
  (gmode == 'sandbox' && sbNights
    ? [
        'Sobrevive noche tras noche en un bosque cerrado. E: echar madera a la hoguera',
        'El Ciervo acecha en la oscuridad: se congela mientras lo miras y teme la luz.',
        'Rescata a los 4 niños perdidos y llévalos a la hoguera. ¿Llegarás a 99?',
      ]
    : gmode == 'sandbox'
      ? [
          'WASD: mover · Clic izq: picar/talar/atacar · Clic der o F: construir',
          'E: interactuar · C: crafteo · G: comer · 1-0: elegir bloque · Shift: correr',
          'Mundo abierto con árboles, minas, cofres, día y noche con zombis.',
        ]
      : gmode == 'zombie'
        ? [
            'WASD: mover · Clic / Espacio: disparar · 1-2-3: cambiar arma · E: registrar bolsas',
            'Oleada 1: huye sin arma (o encuentra una escondida). Oleada 2: recibes pistola.',
            'Sobrevive 5 oleadas y escapa en la cápsula. ¡Bate tu mejor tiempo!',
          ]
        : [
            'WASD: mover · E / Espacio: usar · R: reportar · M: voz en juntas',
            'Impostor: Q matar · V ventilación · F sabotaje',
            'Tripulante: completa tareas, repara sabotajes y vota. Cámaras en Seguridad.',
          ]
  ).forEach((l, i) => txt(l, 350, 330 + i * 24, 14, '#cfe0f5', 'center', false));
  uiBtn(
    30,
    450,
    140,
    34,
    '‹ Volver',
    '#444',
    () => {
      scene = 'menu';
    },
    15
  );
  endUI();
}
function drawLevels() {
  beginUI(760, 640);
  titleGlow('MODO NIVELES', 380, 44, 36, '#6fb8ff');
  txt(`★ ${totalStars()} / ${LEVELS.length * 3}`, 380, 78, 16, '#ffd740', 'center');
  LEVELS.forEach((L, i) => {
    const x = 26 + (i % 5) * 144,
      y = 104 + Math.floor(i / 5) * 128,
      w = 132,
      h = 116,
      un = levelUnlocked(i),
      st = SAVE.stars[L.id] || 0;
    panel(x, y, w, h, st ? '#ffd740' : un ? 'rgba(120,170,230,.7)' : 'rgba(80,90,110,.5)');
    txt(String(i + 1), x + 14, y + 18, 18, '#9fb3c8', 'left');
    txt(L.cfg.nights ? '🔥' : MODE_ICON[L.mode], x + w - 18, y + 20, 22, '#fff', 'center');
    txt(L.name, x + w / 2, y + 54, 15, un ? '#fff' : '#667', 'center');
    if (un) {
      stars3(st, x + w / 2, y + 88, 26);
      addHit(x, y, w, h, () => openBrief(L, 'level', i), true);
    } else txt('🔒', x + w / 2, y + 88, 24, '#889', 'center');
  });
  uiBtn(
    30,
    604,
    140,
    34,
    '‹ Volver',
    '#444',
    () => {
      scene = 'menu';
    },
    15
  );
  endUI();
}
function openBrief(def, kind, idx) {
  BRIEF = { def, kind, idx };
  CAMP = { kind, idx, def };
  scene = 'brief';
}
function drawBrief() {
  const d = BRIEF.def;
  beginUI(700, 520);
  panel(40, 30, 620, 450);
  txt(
    (BRIEF.kind === 'story'
      ? 'CAPÍTULO ' + (BRIEF.idx + 1)
      : BRIEF.kind === 'daily'
        ? 'RETO DIARIO'
        : 'NIVEL ' + (BRIEF.idx + 1)) +
      '  ·  ' +
      MODE_ICON[d.mode] +
      ' ' +
      MODE_NAME[d.mode],
    350,
    64,
    15,
    '#9fb3c8',
    'center'
  );
  titleGlow(d.name.toUpperCase(), 350, 110, 40, BRIEF.kind === 'story' ? '#e57cff' : '#6fb8ff');
  ctx.font = '16px system-ui,sans-serif';
  wrap(d.desc, 540).forEach((l, i) => txt(l, 350, 162 + i * 22, 16, '#e8f0ff', 'center', false));
  txt('OBJETIVOS', 350, 248, 15, '#ffd740', 'center');
  d.goals.forEach((g, i) =>
    txt(
      '•  ' + g.text + (g.need > 1 && g.k.indexOf(':') < 0 && g.k !== 'wave' ? '' : ''),
      350,
      278 + i * 24,
      16,
      '#fff',
      'center'
    )
  );
  const by = 300 + d.goals.length * 24;
  txt(
    `Tiempo para ★★: ${fmtT(d.par)}   ·   ★★★: ${fmtT(d.par * 0.7)}`,
    350,
    by + 14,
    14,
    '#9fb3c8',
    'center',
    false
  );
  if (d.limit) txt(`⚠ Límite de tiempo: ${fmtT(d.limit)}`, 350, by + 40, 14, '#ff9a80', 'center');
  stars3(SAVE.stars[d.id] || 0, 350, by + 78, 30);
  uiBtn(
    110,
    420,
    200,
    44,
    '‹ Atrás',
    '#444',
    () => {
      scene = BRIEF.kind === 'story' ? 'story' : BRIEF.kind === 'daily' ? 'menu' : 'levels';
    },
    17
  );
  uiBtn(
    390,
    420,
    200,
    44,
    '¡EMPEZAR!',
    '#2e7d32',
    () => {
      if (BRIEF.kind === 'story') startStory(BRIEF.idx);
      else launchMission(d);
    },
    20
  );
  endUI();
}
function drawStory() {
  beginUI(760, 540);
  titleGlow('NÉBULA-7: EL CUBO', 380, 48, 38, '#e57cff');
  txt('MODO HISTORIA', 380, 84, 16, '#9fb3c8', 'center');
  CHAPTERS.forEach((c, i) => {
    const x = 60,
      y = 108 + i * 66,
      w = 640,
      h = 58,
      un = i <= SAVE.story,
      st = SAVE.stars[c.id] || 0;
    panel(x, y, w, h, st ? '#ffd740' : un ? 'rgba(200,120,255,.7)' : 'rgba(80,90,110,.5)');
    txt(`${i + 1}`, x + 24, y + h / 2, 24, un ? '#e57cff' : '#556', 'center');
    txt(c.name, x + 60, y + 20, 19, un ? '#fff' : '#667', 'left');
    txt(
      un ? c.desc : 'Bloqueado — supera el capítulo anterior',
      x + 60,
      y + 42,
      12,
      '#9fb3c8',
      'left',
      false
    );
    txt(MODE_ICON[c.mode], x + w - 130, y + h / 2, 22, '#fff', 'center');
    if (un) {
      stars3(st, x + w - 50, y + h / 2, 22);
      addHit(x, y, w, h, () => openBrief(c, 'story', i), true);
    } else txt('🔒', x + w - 50, y + h / 2, 22, '#889', 'center');
  });
  const cont = Math.min(SAVE.story, CHAPTERS.length - 1);
  uiBtn(
    230,
    448,
    300,
    46,
    SAVE.story >= CHAPTERS.length
      ? 'VOLVER A JUGAR · Cap. 1'
      : SAVE.story > 0
        ? `CONTINUAR · Cap. ${cont + 1}`
        : 'COMENZAR HISTORIA',
    '#7a2a6a',
    () => startStory(SAVE.story >= CHAPTERS.length ? 0 : cont),
    19
  );
  uiBtn(
    30,
    496,
    140,
    34,
    '‹ Volver',
    '#444',
    () => {
      scene = 'menu';
    },
    15
  );
  endUI();
}
function drawCut(dt) {
  const C = CUT,
    pg = C.pages[C.i],
    S = R3 && R3.stage;
  C.chars = Math.min(pg.t.length, C.chars + dt * 46);
  addHit(0, 0, W, H, cutAdvance, false);
  const bar = H * 0.09;
  ctx.fillStyle = '#000';
  ctx.fillRect(0, 0, W, bar);
  ctx.fillRect(0, H - bar, W, bar);
  const bw = Math.min(W * 0.88, 920),
    fs = Math.max(15, Math.min(22, W / 48)),
    bh = fs * 5.6,
    bx0 = W / 2 - bw / 2,
    by = H - bar - bh - 14;
  ctx.fillStyle = 'rgba(6,10,20,.84)';
  rr(bx0, by, bw, bh, 16);
  ctx.fill();
  const col = speakerColor(pg.w);
  ctx.strokeStyle = col;
  ctx.lineWidth = 2.5;
  ctx.stroke();
  ctx.fillStyle = col;
  rr(bx0 + 18, by - 16, Math.max(110, pg.w.length * 15 + 34), 30, 15);
  ctx.fill();
  txt(pg.w, bx0 + 18 + Math.max(110, pg.w.length * 15 + 34) / 2, by - 1, 16, '#08101c', 'center');
  ctx.font = `${fs}px system-ui,sans-serif`;
  const lines = wrap(pg.t.slice(0, Math.floor(C.chars)), bw - 44);
  lines.forEach((l, i) =>
    txt(l, bx0 + 22, by + fs * 1.5 + i * fs * 1.4, fs, '#f2f7ff', 'left', false)
  );
  txt(
    C.chars >= pg.t.length ? '▶ Clic / Espacio' : '',
    bx0 + bw - 22,
    by + bh - 16,
    13,
    '#9fb3c8',
    'right',
    false
  );
  txt(`${C.i + 1} / ${C.pages.length}`, W - 20, bar + 16, 13, '#9fb3c8', 'right', false);
  ctx.fillStyle = 'rgba(60,70,90,.75)';
  rr(W - 130, bar + 30, 112, 30, 8);
  ctx.fill();
  txt('Saltar ›  [Esc]', W - 74, bar + 45, 13, '#fff', 'center');
  addHit(W - 130, bar + 30, 112, 30, cutSkip, false);
  if (S && S.flash > 0) {
    ctx.fillStyle = `rgba(255,255,255,${S.flash})`;
    ctx.fillRect(0, 0, W, H);
    S.flash = Math.max(0, S.flash - dt * 1.6);
  }
}
function drawMissionHUD() {
  const M = G.M;
  if (!M || M.over) return;
  const story = CAMP && CAMP.kind === 'story',
    acc = story ? '#e57cff' : '#6fb8ff',
    x = 14,
    y = G.mode === 'classic' ? 14 + 64 + p0TaskRows() * 24 + 10 : G.mode === 'zombie' ? 118 : 154,
    h = 40 + M.goals.length * 26,
    rem = M.def.limit ? M.def.limit - M.t : null;
  glass(x, y, 300, h, story ? 'rgba(229,124,255,.45)' : 'rgba(111,184,255,.45)', 14);
  icon('star', x + 20, y + 20, 17, acc);
  txt(M.def.name, x + 36, y + 20, 14, acc, 'left');
  chip(
    x + 300 - 78,
    y + 8,
    rem !== null ? fmtT(Math.max(0, rem)) : fmtT(M.t),
    'clock',
    rem !== null && rem < 30 ? '#ff5252' : '#ffd54f',
    12
  );
  M.goals.forEach((g, i) => {
    const gy = y + 48 + i * 26;
    icon(g.done ? 'check' : 'dot', x + 22, gy, 14, g.done ? '#6fe08a' : '#cfd8dc');
    txt(g.text, x + 38, gy - 3, 12, g.done ? '#7fcf95' : '#fff', 'left', false);
    if (g.need > 1 && !g.done) {
      ctx.fillStyle = 'rgba(255,255,255,.14)';
      rr(x + 38, gy + 6, 190, 4, 2);
      ctx.fill();
      ctx.fillStyle = acc;
      rr(x + 38, gy + 6, (190 * g.cur) / g.need, 4, 2);
      ctx.fill();
      txt(`${g.cur}/${g.need}`, x + 290, gy + 2, 11, '#9fb3c8', 'right', false);
    }
  });
  const boss = G.zs && G.zs.find(z => z.boss);
  if (boss) {
    const bw = Math.min(400, W * 0.5);
    glass(W / 2 - bw / 2 - 10, 84, bw + 20, 34, 'rgba(255,60,60,.5)', 17);
    icon('skull', W / 2 - bw / 2 + 12, 101, 18, '#ff6a5a');
    ctx.fillStyle = 'rgba(0,0,0,.5)';
    rr(W / 2 - bw / 2 + 30, 94, bw - 24, 14, 7);
    ctx.fill();
    const g = ctx.createLinearGradient(0, 94, 0, 108);
    g.addColorStop(0, '#ff5a4a');
    g.addColorStop(1, '#8a1a14');
    ctx.fillStyle = g;
    rr(W / 2 - bw / 2 + 30, 94, Math.max(8, (bw - 24) * Math.max(0, boss.hp / boss.max)), 14, 7);
    ctx.fill();
    txt('ALFA', W / 2 + 6, 101, 11, '#fff', 'center');
  }
}
/** Número de filas de tareas del HUD clásico (para colocar el panel de misión debajo). */
function p0TaskRows() {
  return G.player.tasks.length;
}
function drawPauseBtn() {
  if (scene !== 'play' || G.intro > 0) return;
  const x = W - 52,
    y = 150,
    hov = Math.hypot(mouse.x - (x + 18), mouse.y - (y + 18)) < 20;
  glass(x, y, 36, 36, hov ? 'rgba(255,255,255,.8)' : 'rgba(140,180,240,.4)', 18);
  icon('pause', x + 18, y + 18, 18, '#fff');
  addHit(x, y, 36, 36, () => (scene = 'pause'), false);
}
function drawPause() {
  ctx.fillStyle = 'rgba(0,0,0,.62)';
  ctx.fillRect(0, 0, W, H);
  beginUI(560, 640);
  panel(0, 0, 560, 640);
  titleGlow('PAUSA', 280, 48, 36, '#fff');
  uiBtn(130, 84, 300, 44, 'Continuar', '#2e7d32', () => (scene = 'play'), 18);
  uiBtn(
    130,
    138,
    300,
    40,
    'Reiniciar',
    '#7a5a1a',
    () => (G.M ? launchMission(CAMP.def) : newGame()),
    17
  );
  const vol = v => Math.round(v * 100) + '%',
    next = (v, steps) => steps[(steps.indexOf(v) + 1) % steps.length] ?? steps[0];
  const VS = [0, 0.35, 0.7, 1];
  const rows = [
    [
      'Calidad: ' + ['Baja', 'Media', 'Alta'][SAVE.quality],
      () => (SAVE.quality = (SAVE.quality + 1) % 3),
    ],
    ['Dificultad: ' + diff().name, () => (SAVE.difficulty = (SAVE.difficulty + 1) % 3)],
    ['Sensibilidad: ' + SAVE.sens + 'x', () => cycleSetting('sens', SENS_STEPS)],
    ['Campo de visión: ' + SAVE.fov + '°', () => cycleSetting('fov', FOV_STEPS)],
    ['Volumen música: ' + vol(SAVE.volM), () => (SAVE.volM = next(SAVE.volM, VS))],
    ['Volumen efectos: ' + vol(SAVE.volS), () => (SAVE.volS = next(SAVE.volS, VS))],
    ['Música: ' + (SAVE.music ? 'SÍ' : 'NO'), () => (SAVE.music = !SAVE.music)],
    ['Vista: ' + (view3d ? '3D' : '2D'), () => (view3d = !view3d)],
    ['Contador FPS: ' + (SAVE.fps ? 'SÍ' : 'NO'), () => (SAVE.fps = !SAVE.fps)],
    ['Resolución dinámica: ' + (SAVE.dynRes ? 'SÍ' : 'NO'), () => (SAVE.dynRes = !SAVE.dynRes)],
  ];
  rows.forEach((r, i) =>
    uiBtn(
      40 + (i % 2) * 250,
      196 + Math.floor(i / 2) * 52,
      230,
      42,
      r[0],
      '#3a4a6a',
      () => {
        r[1]();
        applyVolumes();
        saveGame();
      },
      15
    )
  );
  txt(
    'La dificultad afecta a zombis y sabotajes nuevos.',
    280,
    514,
    12,
    '#9fb3c8',
    'center',
    false
  );
  txt(
    'Mando: Start pausa · Shift / L3: correr · R: recargar · G: comer',
    280,
    534,
    12,
    '#9fb3c8',
    'center',
    false
  );
  uiBtn(
    130,
    560,
    300,
    44,
    'Salir al menú',
    '#8e2020',
    () => {
      stopSpeech();
      scene = 'menu';
    },
    18
  );
  endUI();
}
function drawMend() {
  const M = G.M;
  M.at += 1 / 60;
  ctx.fillStyle = 'rgba(0,0,0,.72)';
  ctx.fillRect(0, 0, W, H);
  beginUI(700, 520);
  panel(30, 20, 640, 480, M.ok ? '#7dff9a' : '#ff6a5a');
  titleGlow(
    M.ok ? '¡MISIÓN CUMPLIDA!' : 'MISIÓN FALLIDA',
    350,
    76,
    M.ok ? 44 : 42,
    M.ok ? '#7dff9a' : '#ff6a5a'
  );
  txt(M.def.name, 350, 120, 22, '#fff', 'center');
  if (M.ok) {
    const sh = Math.min(3, Math.floor(M.at * 2.2));
    let s = '';
    for (let i = 0; i < 3; i++) s += i < Math.min(M.stars, sh) ? '★' : '☆';
    txt(s, 350, 178, 64, '#ffd740', 'center');
  }
  txt(
    `Tiempo: ${fmtT(M.t)}   ·   Par ★★: ${fmtT(M.def.par)}   ·   ★★★: ${fmtT(M.def.par * 0.7)}`,
    350,
    236,
    15,
    '#cfe0f5',
    'center',
    false
  );
  M.goals.forEach((g, i) =>
    txt(
      (g.done ? '✔ ' : '✘ ') + g.text,
      350,
      276 + i * 24,
      16,
      g.done ? '#7dff9a' : '#ff8a80',
      'center'
    )
  );
  if (!M.ok)
    txt(
      M.def.limit && M.t >= M.def.limit
        ? 'Se acabó el tiempo.'
        : 'Inténtalo de nuevo con otra estrategia.',
      350,
      276 + M.goals.length * 24 + 16,
      14,
      '#9fb3c8',
      'center',
      false
    );
  const by = 410;
  if (M.ok) {
    uiBtn(
      60,
      by,
      170,
      46,
      CAMP.kind === 'story' ? 'Continuar ›' : 'Siguiente ›',
      '#2e7d32',
      missionNext,
      18
    );
    uiBtn(265, by, 170, 46, 'Repetir', '#7a5a1a', () => launchMission(CAMP.def), 18);
    uiBtn(
      470,
      by,
      170,
      46,
      'Menú',
      '#444',
      () => {
        scene = backScene();
      },
      18
    );
  } else {
    uiBtn(60, by, 170, 46, 'Reintentar', '#2e7d32', () => launchMission(CAMP.def), 18);
    uiBtn(
      265,
      by,
      170,
      46,
      CAMP.kind === 'story' ? 'Capítulos' : 'Niveles',
      '#444',
      () => {
        scene = backScene();
      },
      18
    );
    uiBtn(
      470,
      by,
      170,
      46,
      'Menú principal',
      '#8e2020',
      () => {
        scene = 'menu';
      },
      16
    );
  }
  endUI();
}
