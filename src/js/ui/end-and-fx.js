/**
 * Pantalla de final clásico, barras de cine y efectos de postproceso 2D.
 */
'use strict';

let menuT = 0;
function cinematicBars() {
  const b = H * 0.09;
  ctx.fillStyle = '#000';
  ctx.fillRect(0, 0, W, b);
  ctx.fillRect(0, H - b, W, b);
}
function finishFX() {
  let g = ctx.createRadialGradient(
    W / 2,
    H / 2,
    Math.min(W, H) * 0.3,
    W / 2,
    H / 2,
    Math.hypot(W, H) * 0.6
  );
  g.addColorStop(0, 'rgba(0,0,0,0)');
  g.addColorStop(1, 'rgba(0,0,0,.75)');
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, W, H);
  ctx.save();
  ctx.globalAlpha = 0.08;
  ctx.globalCompositeOperation = 'overlay';
  ctx.fillStyle = ctx.createPattern(GRAIN, 'repeat');
  ctx.translate(Math.floor(Math.random() * 256), Math.floor(Math.random() * 256));
  ctx.fillRect(-256, -256, W + 512, H + 512);
  ctx.restore();
}
function drawEnd() {
  if (G.mode === 'zombie') {
    drawZEnd();
    return;
  }
  const me = G.player,
    win = G.over.winner == (me.imp ? 'imp' : 'crew');
  ctx.fillStyle = 'rgba(0,0,0,.78)';
  ctx.fillRect(0, 0, W, H);
  beginUI(700, 520);
  ctx.save();
  ctx.shadowColor = win ? '#69f0ae' : '#ff5252';
  ctx.shadowBlur = 30;
  txt(win ? '¡VICTORIA!' : 'DERROTA', 350, 70, 64, win ? '#69f0ae' : '#ff5252', 'center');
  ctx.restore();
  txt(
    G.over.winner == 'crew'
      ? 'Ganó la tripulación'
      : G.sab && G.sab.type == 'reactor' && G.sab.t <= 0
        ? 'El reactor ha explotado'
        : 'Ganaron los impostores',
    350,
    120,
    24,
    '#fff',
    'center'
  );
  G.ps.forEach((q, i) => {
    const x = 170 + (i % 3) * 140,
      y = 190 + Math.floor(i / 3) * 100;
    drawCrew(x, y, q.color, 1, 0, q.alive ? 1 : 0.4, 1, false, menuT);
    txt(q.name, x, y + 36, 14, '#fff', 'center');
    txt(q.imp ? 'IMPOSTOR' : 'Tripulante', x, y + 54, 12, q.imp ? '#ff5252' : '#8fa0b5', 'center');
  });
  uiBtn(
    230,
    470,
    240,
    44,
    'JUGAR DE NUEVO',
    '#2e7d32',
    () => {
      scene = 'menu';
    },
    20
  );
  endUI();
  cinematicBars();
  finishFX();
}
