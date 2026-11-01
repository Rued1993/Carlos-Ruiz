/**
 * Pantallas: inicio, partida libre, niveles, briefing, historia, HUD de misión, pausa, resultado.
 */
'use strict';

function totalStars() {
  return Object.values(SAVE.stars).reduce((a, b) => a + b, 0);
}
function titleGlow(s, x, y, size, col) {
  ctx.save();
  ctx.shadowColor = col;
  ctx.shadowBlur = 26 + 8 * Math.sin(menuT * 3);
  txt(s, x, y, size, col, 'center');
  ctx.restore();
}
function panel(x, y, w, h, col) {
  const g = ctx.createLinearGradient(0, y, 0, y + h);
  g.addColorStop(0, 'rgba(14,24,44,.9)');
  g.addColorStop(1, 'rgba(6,10,20,.92)');
  ctx.fillStyle = g;
  rr(x, y, w, h, 16);
  ctx.fill();
  ctx.strokeStyle = col || 'rgba(120,170,230,.55)';
  ctx.lineWidth = 2;
  ctx.stroke();
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
  uiBtn(
    60,
    412,
    180,
    34,
    '♪ Música: ' + (SAVE.music ? 'SÍ' : 'NO'),
    '#3a4a6a',
    () => {
      SAVE.music = !SAVE.music;
      saveGame();
    },
    14
  );
  uiBtn(
    260,
    412,
    180,
    34,
    'Calidad: ' + ['Baja', 'Media', 'Alta'][SAVE.quality],
    '#3a4a6a',
    () => {
      SAVE.quality = (SAVE.quality + 1) % 3;
      saveGame();
    },
    14
  );
  uiBtn(
    460,
    412,
    180,
    34,
    'Vista: ' + (view3d ? '3D' : '2D'),
    '#3a4a6a',
    () => {
      view3d = !view3d;
    },
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
  (gmode == 'sandbox'
    ? [
        'WASD: mover · Clic izq: picar/talar/atacar · Clic der o F: construir',
        'E: interactuar · C: crafteo · 1-7: elegir bloque · rueda: cambiar',
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
  beginUI(760, 540);
  titleGlow('MODO NIVELES', 380, 44, 36, '#6fb8ff');
  txt(`★ ${totalStars()} / ${LEVELS.length * 3}`, 380, 78, 16, '#ffd740', 'center');
  LEVELS.forEach((L, i) => {
    const x = 38 + (i % 4) * 180,
      y = 104 + Math.floor(i / 4) * 134,
      w = 164,
      h = 120,
      un = levelUnlocked(i),
      st = SAVE.stars[L.id] || 0;
    panel(x, y, w, h, st ? '#ffd740' : un ? 'rgba(120,170,230,.7)' : 'rgba(80,90,110,.5)');
    txt(String(i + 1), x + 14, y + 18, 18, '#9fb3c8', 'left');
    txt(MODE_ICON[L.mode], x + w - 18, y + 20, 22, '#fff', 'center');
    txt(L.name, x + w / 2, y + 54, 16, un ? '#fff' : '#667', 'center');
    if (un) {
      stars3(st, x + w / 2, y + 88, 26);
      addHit(x, y, w, h, () => openBrief(L, 'level', i), true);
    } else txt('🔒', x + w / 2, y + 88, 24, '#889', 'center');
  });
  uiBtn(
    30,
    492,
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
    (BRIEF.kind === 'story' ? 'CAPÍTULO ' + (BRIEF.idx + 1) : 'NIVEL ' + (BRIEF.idx + 1)) +
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
      scene = BRIEF.kind === 'story' ? 'story' : 'levels';
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
  const x = 12,
    y = G.mode === 'classic' ? 156 : G.mode === 'zombie' ? 108 : 126,
    h = 44 + M.goals.length * 21;
  ctx.fillStyle = 'rgba(8,10,28,.7)';
  rr(x, y, 290, h, 10);
  ctx.fill();
  ctx.strokeStyle = CAMP && CAMP.kind === 'story' ? '#e57cff' : '#6fb8ff';
  ctx.lineWidth = 2;
  ctx.stroke();
  txt(
    '★ ' + M.def.name,
    x + 12,
    y + 16,
    14,
    CAMP && CAMP.kind === 'story' ? '#e8a0ff' : '#9fd0ff',
    'left'
  );
  const rem = M.def.limit ? M.def.limit - M.t : null;
  txt(
    rem !== null ? `⏱ ${fmtT(Math.max(0, rem))}` : `⏱ ${fmtT(M.t)}`,
    x + 278,
    y + 16,
    14,
    rem !== null && rem < 30 ? '#ff5252' : '#ffd740',
    'right'
  );
  M.goals.forEach((g, i) =>
    txt(
      (g.done ? '✔ ' : '○ ') + g.text + (g.need > 1 && !g.done ? ` (${g.cur}/${g.need})` : ''),
      x + 12,
      y + 40 + i * 21,
      13,
      g.done ? '#7dff9a' : '#fff',
      'left',
      false
    )
  );
  const boss = G.zs && G.zs.find(z => z.boss);
  if (boss) {
    const bw = Math.min(380, W * 0.5);
    ctx.fillStyle = 'rgba(0,0,0,.65)';
    rr(W / 2 - bw / 2 - 6, 78, bw + 12, 26, 8);
    ctx.fill();
    ctx.fillStyle = '#b71c1c';
    rr(W / 2 - bw / 2, 82, bw * Math.max(0, boss.hp / boss.max), 18, 6);
    ctx.fill();
    txt('ALFA', W / 2, 92, 12, '#fff', 'center');
  }
}
function drawPauseBtn() {
  if (scene !== 'play' || G.intro > 0) return;
  ctx.fillStyle = 'rgba(0,0,0,.55)';
  rr(W - 44, 134, 32, 32, 8);
  ctx.fill();
  txt('II', W - 28, 150, 15, '#fff', 'center');
  addHit(
    W - 44,
    134,
    32,
    32,
    () => {
      scene = 'pause';
    },
    false
  );
}
function drawPause() {
  ctx.fillStyle = 'rgba(0,0,0,.62)';
  ctx.fillRect(0, 0, W, H);
  beginUI(520, 440);
  panel(0, 0, 520, 440);
  titleGlow('PAUSA', 260, 50, 36, '#fff');
  uiBtn(
    110,
    90,
    300,
    44,
    'Continuar',
    '#2e7d32',
    () => {
      scene = 'play';
    },
    18
  );
  uiBtn(
    110,
    146,
    300,
    44,
    'Reiniciar',
    '#7a5a1a',
    () => {
      if (G.M) launchMission(CAMP.def);
      else newGame();
    },
    18
  );
  uiBtn(
    110,
    202,
    300,
    40,
    'Calidad gráfica: ' + ['Baja', 'Media', 'Alta'][SAVE.quality],
    '#3a4a6a',
    () => {
      SAVE.quality = (SAVE.quality + 1) % 3;
      saveGame();
    },
    16
  );
  uiBtn(
    110,
    252,
    300,
    40,
    'Música: ' + (SAVE.music ? 'SÍ' : 'NO'),
    '#3a4a6a',
    () => {
      SAVE.music = !SAVE.music;
      saveGame();
    },
    16
  );
  uiBtn(
    110,
    302,
    300,
    40,
    'Vista: ' + (view3d ? '3D' : '2D'),
    '#3a4a6a',
    () => {
      view3d = !view3d;
    },
    16
  );
  uiBtn(
    110,
    360,
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
        scene = CAMP.kind === 'story' ? 'story' : 'levels';
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
        scene = CAMP.kind === 'story' ? 'story' : 'levels';
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
