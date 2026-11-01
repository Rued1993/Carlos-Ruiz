/**
 * Soporte de mando (Gamepad API).
 *
 *   Stick izq.: mover · Stick der.: cámara · L3: correr · RT: disparar / picar · LT: colocar
 *   A: usar · X: recargar / reportar / colocar · B: cambiar arma / matar / comer · Y: crafteo / ventilación
 *   LB/RB: arma o bloque anterior/siguiente · Start: pausa
 */
'use strict';

const pad = { on: false, lx: 0, ly: 0, sprint: false, fire: false, prev: {} };

function pollGamepad(dt) {
  const gp = Array.from((navigator.getGamepads && navigator.getGamepads()) || []).find(
    g => g && g.connected
  );
  if (!gp) {
    pad.on = pad.sprint = pad.fire = false;
    return;
  }
  const dz = v => (Math.abs(v) < 0.18 ? 0 : v),
    b = i => !!(gp.buttons[i] && gp.buttons[i].pressed),
    trig = i => (gp.buttons[i] ? gp.buttons[i].value : 0) > 0.4;
  pad.on = true;
  pad.lx = dz(gp.axes[0] || 0);
  pad.ly = dz(gp.axes[1] || 0);
  pad.sprint = b(10);
  const playing = scene === 'play' && G && G.intro <= 0;
  if (view3d && scene === 'play') {
    CAM.yaw += dz(gp.axes[2] || 0) * 2.8 * SAVE.sens * dt;
    CAM.elev = clamp(CAM.elev + dz(gp.axes[3] || 0) * 1.6 * SAVE.sens * dt, 0.12, 1.25);
  }
  pad.fire = playing && trig(7);
  const press = (i, fn) => {
    const now = i === 6 || i === 7 ? trig(i) : b(i);
    if (now && !pad.prev[i]) fn();
    pad.prev[i] = now;
  };
  press(9, () => {
    if (scene === 'play' && G.intro <= 0) scene = 'pause';
    else if (scene === 'pause') scene = 'play';
  });
  if (!playing) return;
  const mode = G.mode;
  press(0, () => (mode === 'sandbox' ? sbInteract() : doUse()));
  press(2, () => (mode === 'zombie' ? startReload() : mode === 'sandbox' ? sbPlace() : doReport()));
  press(1, () => (mode === 'zombie' ? cycleWep() : mode === 'sandbox' ? sbEat() : doKill()));
  press(3, () => (mode === 'sandbox' ? (scene = 'craft') : toggleVent()));
  press(6, () => mode === 'sandbox' && sbPlace());
  press(4, () =>
    mode === 'sandbox' ? (G.slot = (G.slot + HOTBAR.length - 1) % HOTBAR.length) : cycleWep()
  );
  press(5, () => (mode === 'sandbox' ? (G.slot = (G.slot + 1) % HOTBAR.length) : cycleWep()));
  press(12, () => mode === 'classic' && openSabMenu());
}
