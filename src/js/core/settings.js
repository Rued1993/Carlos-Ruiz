/**
 * Ajustes del jugador (guardados en SAVE) y tablas de dificultad.
 */
'use strict';

const DIFF = [
  { name: 'Fácil', zhp: 0.8, zsp: 0.9, zdmg: 0.65, zcount: 0.75, sab: 1.5, drop: 1.4 },
  { name: 'Normal', zhp: 1, zsp: 1, zdmg: 1, zcount: 1, sab: 1, drop: 1 },
  { name: 'Difícil', zhp: 1.35, zsp: 1.12, zdmg: 1.4, zcount: 1.3, sab: 0.65, drop: 0.7 },
];
/** Parámetros de la dificultad actual. */
function diff() {
  return DIFF[SAVE.difficulty | 0] || DIFF[1];
}
const SENS_STEPS = [0.5, 0.75, 1, 1.35, 1.8];
const FOV_STEPS = [55, 62, 70, 78];
function cycleSetting(key, steps) {
  const i = steps.indexOf(SAVE[key]);
  SAVE[key] = steps[(i + 1) % steps.length];
  saveGame();
}
