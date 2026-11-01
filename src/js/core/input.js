/**
 * Entrada: ratón, teclado, táctil, bloqueo de puntero y rueda.
 */
'use strict';

function click() {
  const u = um();
  for (let i = hits.length - 1; i >= 0; i--) {
    const h = hits[i],
      m = h.ui ? u : mouse;
    if (m.x >= h.x && m.x <= h.x + h.w && m.y >= h.y && m.y <= h.y + h.h) {
      h.fn();
      return true;
    }
  }
  return false;
}
addEventListener('keydown', e => {
  const k = e.key.toLowerCase();
  keys[k] = true;
  if ([' ', 'tab', 'arrowup', 'arrowdown', 'arrowleft', 'arrowright'].includes(k))
    e.preventDefault();
  if (e.repeat) return;
  if (scene == 'free' && k == 'enter') newGame();
  else if (scene == 'end' && k == 'enter') scene = 'menu';
  else if (scene == 'pause' && (k == 'p' || k == 'escape')) scene = 'play';
  else if (scene == 'play' && k == 'p' && G.intro <= 0) scene = 'pause';
  else if (scene == 'cut' && (k == ' ' || k == 'enter')) cutAdvance();
  else if (scene == 'cut' && k == 'escape') cutSkip();
  else if (scene == 'meeting' && k == 'm') {
    voiceOn = !voiceOn;
    if (!voiceOn) stopSpeech();
  } else if (scene == 'craft' && (k == 'c' || k == 'escape')) scene = 'play';
  else if (scene == 'play' && G.mode === 'sandbox') {
    if (k >= '1' && k <= '8') G.slot = +k - 1;
    else if (k == 'f') sbPlace();
    else if (k == 'e') sbInteract();
    else if (k == 'c') scene = 'craft';
    else if (k == 'g') sbEat();
  } else if (scene == 'play' && G.mode === 'zombie') {
    if (k == 'e') doUse();
    else if (k == '1' || k == '2' || k == '3') selectWep(+k - 1);
    else if (k == 'tab') cycleWep();
    else if (k == 'r') startReload();
  } else if (scene == 'play') {
    if (G.player.inVent !== null && (k == 'arrowleft' || k == 'a')) cycleVent(-1);
    else if (G.player.inVent !== null && (k == 'arrowright' || k == 'd')) cycleVent(1);
    else if (k == 'e' || k == ' ') doUse();
    else if (k == 'r') doReport();
    else if (k == 'q') doKill();
    else if (k == 'v') toggleVent();
    else if (k == 'f') openSabMenu();
  } else if ((scene == 'task' || scene == 'cams' || scene == 'sab') && k == 'escape') {
    scene = 'play';
    G.task = null;
  }
});
addEventListener('keyup', e => {
  keys[e.key.toLowerCase()] = false;
});
cv.addEventListener('pointerdown', e => {
  try {
    ac = ac || new (window.AudioContext || window.webkitAudioContext)();
    if (ac.state === 'suspended') ac.resume();
  } catch (_) {}
  mouse.x = e.clientX;
  mouse.y = e.clientY;
  mouse.down = true;
  mouse.t = performance.now();
  const used = document.pointerLockElement === cv ? false : click();
  const lockedNow = !view3d || e.pointerType === 'touch' || document.pointerLockElement === cv;
  if (
    !used &&
    view3d &&
    scene == 'play' &&
    e.pointerType !== 'touch' &&
    !document.pointerLockElement
  )
    cv.requestPointerLock();
  if (
    !used &&
    scene == 'play' &&
    G &&
    G.mode === 'zombie' &&
    e.pointerType !== 'touch' &&
    lockedNow
  )
    G.firing = true;
  if (
    !used &&
    scene == 'play' &&
    G &&
    G.mode === 'sandbox' &&
    e.pointerType !== 'touch' &&
    lockedNow
  ) {
    if (e.button == 2) sbPlace();
    else G.mining = true;
  }
  if (!used && e.pointerType == 'touch' && scene == 'play') {
    if (view3d && e.clientX > W * 0.5) look = { id: e.pointerId, lx: e.clientX, ly: e.clientY };
    else joy = { id: e.pointerId, sx: e.clientX, sy: e.clientY, vx: 0, vy: 0, active: true };
  }
});
cv.addEventListener('pointermove', e => {
  mouse.x = e.clientX;
  mouse.y = e.clientY;
  mouse.t = performance.now();
  if (view3d && document.pointerLockElement === cv) {
    CAM.yaw += e.movementX * 0.0028 * SAVE.sens;
    CAM.elev = clamp(CAM.elev - e.movementY * 0.0022 * SAVE.sens, 0.12, 1.25);
  }
  if (look && look.id == e.pointerId) {
    CAM.yaw += (e.clientX - look.lx) * 0.005;
    CAM.elev = clamp(CAM.elev - (e.clientY - look.ly) * 0.004, 0.12, 1.25);
    look.lx = e.clientX;
    look.ly = e.clientY;
  }
  if (joy && joy.id == e.pointerId) {
    let dx = e.clientX - joy.sx,
      dy = e.clientY - joy.sy;
    const d = Math.hypot(dx, dy),
      m = 50;
    if (d > m) {
      dx = (dx / d) * m;
      dy = (dy / d) * m;
    }
    joy.vx = dx / m;
    joy.vy = dy / m;
  }
});
const up = e => {
  mouse.down = false;
  if (G) {
    G.firing = false;
    G.mining = false;
  }
  if (look && look.id == e.pointerId) look = null;
  if (joy && joy.id == e.pointerId) joy = null;
};
cv.addEventListener('contextmenu', e => e.preventDefault());
cv.addEventListener(
  'wheel',
  e => {
    if (view3d && G && G.mode !== 'sandbox' && scene == 'play') {
      CAM.dist = clamp(CAM.dist + e.deltaY * 0.2, 120, 420);
      e.preventDefault();
    }
  },
  { passive: false }
);
cv.addEventListener(
  'wheel',
  e => {
    if (scene == 'play' && G && G.mode === 'sandbox') {
      G.slot = (G.slot + (e.deltaY > 0 ? 1 : -1) + HOTBAR.length) % HOTBAR.length;
      e.preventDefault();
    }
  },
  { passive: false }
);
cv.addEventListener('pointerup', up);
cv.addEventListener('pointercancel', up);
