/**
 * Voz genérica con la síntesis de voz del navegador (juntas, narrador, cinemáticas).
 */
'use strict';

let voiceOn = true;
const VPROF = [
  [1.0, 1.05],
  [0.7, 0.95],
  [1.3, 1.1],
  [1.7, 1.15],
  [0.85, 1.0],
  [1.5, 1.2],
  [0.55, 0.9],
  [1.15, 1.0],
  [0.95, 1.12],
];
function stopSpeech() {
  try {
    speechSynthesis.cancel();
  } catch (e) {}
}
function speak(text, p) {
  if (!voiceOn || !('speechSynthesis' in window)) return;
  try {
    const u = new SpeechSynthesisUtterance(text.replace(/[¡¿]/g, ''));
    u.lang = 'es-ES';
    const vs = speechSynthesis.getVoices().filter(v => /^es/i.test(v.lang));
    if (vs.length) u.voice = vs[(p ? p.id : 0) % vs.length];
    const f = VPROF[p ? p.id % 9 : 0];
    u.pitch = f[0];
    u.rate = f[1];
    speechSynthesis.speak(u);
  } catch (e) {}
}
