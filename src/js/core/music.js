/**
 * Música procedural de ambiente.
 */
'use strict';

let mT = 0,
  mS = 0;
function musicTick(dt) {
  if (!SAVE.music || !ac || ac.state !== 'running') return;
  mT -= dt;
  if (mT > 0) return;
  const calm =
      scene === 'menu' ||
      scene === 'free' ||
      scene === 'levels' ||
      scene === 'brief' ||
      scene === 'story',
    cut = scene === 'cut';
  if (calm || cut) {
    const sc = [220, 261.6, 329.6, 392, 329.6, 261.6, 246.9, 293.7],
      n = sc[mS % 8] * (cut ? 0.5 : 1);
    beep(n, 0.9, 'sine', 0.02);
    if (mS % 4 == 0) beep(n / 2, 1.8, 'triangle', 0.022);
    mS++;
    mT = cut ? 0.95 : 0.55;
  } else if (G && G.mode === 'zombie' && G.zs && G.zs.length > 0 && scene === 'play') {
    beep(55 + (mS++ % 2) * 7, 0.25, 'sine', 0.045);
    mT = 0.6;
  } else mT = 1;
}
