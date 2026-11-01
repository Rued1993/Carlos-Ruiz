/**
 * Estadísticas acumuladas y logros. `mevent()` alimenta `track()`, de modo que cualquier
 * evento del juego (también en partida libre) cuenta para los logros.
 */
'use strict';

const ACHIEVEMENTS = [
  { id: 'sangre', name: 'Primera sangre', desc: 'Elimina a un zombi', stat: 'zkill', need: 1 },
  {
    id: 'exterminador',
    name: 'Exterminador',
    desc: 'Elimina a 100 zombis',
    stat: 'zkill',
    need: 100,
  },
  { id: 'legion', name: 'Legión', desc: 'Elimina a 500 zombis', stat: 'zkill', need: 500 },
  { id: 'manitas', name: 'Manitas', desc: 'Completa 20 tareas', stat: 'task', need: 20 },
  { id: 'detective', name: 'Detective', desc: 'Expulsa a 5 impostores', stat: 'ejectImp', need: 5 },
  {
    id: 'friafrio',
    name: 'Sangre fría',
    desc: 'Elimina a 10 tripulantes siendo impostor',
    stat: 'pkill',
    need: 10,
  },
  { id: 'alfa', name: 'Cazador de alfas', desc: 'Derrota al Alfa', stat: 'boss', need: 1 },
  { id: 'escapista', name: 'Escapista', desc: 'Escapa en la cápsula', stat: 'escape', need: 1 },
  { id: 'oleadas', name: 'Superviviente', desc: 'Supera 25 oleadas', stat: 'wave', need: 25 },
  { id: 'lenador', name: 'Leñador', desc: 'Recoge 100 de madera', stat: 'item:madera', need: 100 },
  { id: 'constructor', name: 'Constructor', desc: 'Coloca 200 bloques', stat: 'place', need: 200 },
  { id: 'herrero', name: 'Herrero', desc: 'Funde 6 lingotes de hierro', stat: 'smelt', need: 6 },
  { id: 'chef', name: 'Chef', desc: 'Cocina 10 piezas de carne', stat: 'cook', need: 10 },
  { id: 'cazador', name: 'Cazador', desc: 'Caza 15 animales', stat: 'animal', need: 15 },
  { id: 'noches', name: 'Noctámbulo', desc: 'Sobrevive 3 noches', stat: 'night', need: 3 },
  { id: 'cofres', name: 'Explorador', desc: 'Abre 10 cofres', stat: 'chest', need: 10 },
  { id: 'historia', name: 'Final de la historia', desc: 'Completa los 5 capítulos', custom: true },
  { id: 'estrellas', name: 'Coleccionista', desc: 'Consigue 20 estrellas', custom: true },
  { id: 'reto', name: 'Reto superado', desc: 'Completa un reto diario', custom: true },
];
const ACH_Q = [];
let achShow = null,
  statsDirty = false,
  lastStatSave = 0;

function unlockAch(a) {
  if (SAVE.ach[a.id]) return;
  SAVE.ach[a.id] = Date.now();
  saveGame();
  ACH_Q.push(a);
  sfx.pickup();
}
/** Suma `n` a la estadística `k` y desbloquea los logros que lo permitan. */
function track(k, n) {
  SAVE.stats[k] = (SAVE.stats[k] || 0) + n;
  statsDirty = true;
  for (const a of ACHIEVEMENTS) if (a.stat === k && SAVE.stats[k] >= a.need) unlockAch(a);
}
/** Logros que dependen del progreso global (se llama al terminar una misión). */
function checkCustomAch() {
  const by = id => ACHIEVEMENTS.find(a => a.id === id);
  if (SAVE.story >= CHAPTERS.length) unlockAch(by('historia'));
  if (totalStars() >= 20) unlockAch(by('estrellas'));
  if (CAMP && CAMP.kind === 'daily' && G.M && G.M.ok) unlockAch(by('reto'));
}
function achProgress(a) {
  if (a.custom) return SAVE.ach[a.id] ? 1 : 0;
  return Math.min(1, (SAVE.stats[a.stat] || 0) / a.need);
}
/** Guarda estadísticas pendientes cada pocos segundos y dibuja el aviso de logro. */
function achTick(dt) {
  if (statsDirty && performance.now() - lastStatSave > 8000) {
    statsDirty = false;
    lastStatSave = performance.now();
    saveGame();
  }
  if (!achShow && ACH_Q.length) achShow = { a: ACH_Q.shift(), t: 4 };
  if (achShow) {
    achShow.t -= dt;
    const k = Math.min(1, achShow.t, (4 - achShow.t) * 3),
      w = Math.min(380, W - 24),
      x = W / 2 - w / 2,
      y = 14 - (1 - k) * 80;
    ctx.fillStyle = 'rgba(20,16,4,.92)';
    rr(x, y, w, 62, 12);
    ctx.fill();
    ctx.strokeStyle = '#ffd740';
    ctx.lineWidth = 2;
    ctx.stroke();
    txt('🏆 LOGRO DESBLOQUEADO', x + w / 2, y + 18, 12, '#ffd740', 'center');
    txt(achShow.a.name + ' — ' + achShow.a.desc, x + w / 2, y + 42, 14, '#fff', 'center', false);
    if (achShow.t <= 0) achShow = null;
  }
}
