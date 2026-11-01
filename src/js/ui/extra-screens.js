/**
 * Pantallas extra: armario (cosméticos) y logros.
 */
'use strict';

/** Reconstruye el modelo del jugador del escenario tras cambiar de cosmético. */
function refreshStagePlayer() {
  const S = R3 && R3.stage;
  if (!S) return;
  const old = S.models.Rojo,
    cs = cosmeticsFor({ isP: true, id: 0 }),
    m = makeCrew(COLORS[0][0], false, cs[0], cs[1]);
  m.position.copy(old.position);
  m.rotation.copy(old.rotation);
  m.visible = old.visible;
  S.sc.remove(old);
  S.sc.add(m);
  S.models.Rojo = m;
  if (S.pet) S.sc.remove(S.pet);
  S.pet = SAVE.pet ? makePet(SAVE.pet) : null;
  if (S.pet) S.sc.add(S.pet);
}
function drawWardrobe() {
  beginUI(700, 500);
  titleGlow('ARMARIO', 350, 52, 42, '#e57cff');
  const row = (y, label, value, step) => {
    txt(label, 350, y - 22, 14, '#9fb3c8', 'center');
    uiBtn(120, y - 6, 56, 44, '‹', '#3a4a6a', () => step(-1), 24);
    panel(190, y - 6, 320, 44, 'rgba(200,120,255,.6)');
    txt(value, 350, y + 16, 20, '#fff', 'center');
    uiBtn(524, y - 6, 56, 44, '›', '#3a4a6a', () => step(1), 24);
  };
  row(318, 'SOMBRERO', HATS[SAVE.hat | 0], d => {
    SAVE.hat = (SAVE.hat + d + HATS.length) % HATS.length;
    saveGame();
    refreshStagePlayer();
    sfx.ui();
  });
  row(380, 'VISOR', VISORS[SAVE.visor | 0].name, d => {
    SAVE.visor = (SAVE.visor + d + VISORS.length) % VISORS.length;
    saveGame();
    refreshStagePlayer();
    sfx.ui();
  });
  row(442, 'MASCOTA', PETS[SAVE.pet | 0], d => {
    SAVE.pet = (SAVE.pet + d + PETS.length) % PETS.length;
    saveGame();
    refreshStagePlayer();
    sfx.ui();
  });
  uiBtn(24, 18, 120, 30, '‹ Volver', '#444', () => (scene = 'menu'), 14);
  endUI();
}
function drawAchievements() {
  beginUI(760, 600);
  titleGlow('LOGROS', 380, 40, 36, '#ffd740');
  const done = ACHIEVEMENTS.filter(a => SAVE.ach[a.id]).length;
  txt(`${done} / ${ACHIEVEMENTS.length} desbloqueados`, 380, 74, 14, '#9fb3c8', 'center');
  ACHIEVEMENTS.forEach((a, i) => {
    const x = 24 + (i % 2) * 368,
      y = 92 + Math.floor(i / 2) * 44,
      ok = !!SAVE.ach[a.id],
      pr = achProgress(a);
    ctx.fillStyle = ok ? 'rgba(60,50,10,.85)' : 'rgba(14,22,40,.85)';
    rr(x, y, 356, 40, 8);
    ctx.fill();
    ctx.strokeStyle = ok ? '#ffd740' : 'rgba(120,150,200,.35)';
    ctx.lineWidth = 1.5;
    ctx.stroke();
    txt((ok ? '🏆 ' : '🔒 ') + a.name, x + 10, y + 14, 14, ok ? '#ffe082' : '#9fb3c8', 'left');
    txt(a.desc, x + 10, y + 31, 11, '#8aa0bc', 'left', false);
    if (!ok && !a.custom) {
      ctx.fillStyle = 'rgba(255,255,255,.12)';
      rr(x + 250, y + 28, 96, 6, 3);
      ctx.fill();
      ctx.fillStyle = '#4fc3f7';
      rr(x + 250, y + 28, 96 * pr, 6, 3);
      ctx.fill();
    }
  });
  const s = SAVE.stats;
  txt(
    `Zombis: ${s.zkill || 0}  ·  Tareas: ${s.task || 0}  ·  Bloques: ${s.place || 0}  ·  Animales: ${s.animal || 0}  ·  Oleadas: ${s.wave || 0}`,
    380,
    546,
    12,
    '#9fb3c8',
    'center',
    false
  );
  uiBtn(30, 560, 110, 30, '‹ Volver', '#444', () => (scene = 'menu'), 14);
  endUI();
}
