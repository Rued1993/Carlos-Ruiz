/**
 * Dibujo 2D de tripulantes y cadáveres.
 */
'use strict';

function drawCrew(
  x,
  y,
  color,
  face,
  step,
  alpha = 1,
  sc = 1,
  moving = true,
  t = 0,
  ghost = false,
  zombie = false
) {
  ctx.save();
  ctx.translate(x, y);
  ctx.scale(face * sc, sc);
  ctx.globalAlpha = alpha;
  if (zombie) ctx.rotate(Math.sin(step * 0.5) * 0.07);
  // sombra suave
  ctx.save();
  ctx.translate(0, 22);
  ctx.scale(1, 0.28);
  let g = ctx.createRadialGradient(0, 0, 2, 0, 0, 32);
  g.addColorStop(0, 'rgba(0,0,0,.65)');
  g.addColorStop(1, 'rgba(0,0,0,0)');
  ctx.fillStyle = g;
  ctx.beginPath();
  ctx.arc(0, 0, 32, 0, 6.3);
  ctx.fill();
  ctx.restore();
  const bob = moving ? -Math.abs(Math.sin(step)) * 3 : Math.sin(t * 2) * 0.8;
  ctx.translate(0, bob);
  const l = moving ? Math.sin(step) * 7 : 0;
  ctx.lineJoin = 'round';
  // piernas / botas
  for (const [lx0, ph] of [
    [-14, l],
    [3, -l],
  ]) {
    g = ctx.createLinearGradient(lx0, 0, lx0 + 12, 0);
    g.addColorStop(0, shade(color, -0.2));
    g.addColorStop(1, shade(color, -0.65));
    ctx.fillStyle = g;
    rr(lx0, 8 + Math.max(0, ph) * 0.4, 12, 12, 4);
    ctx.fill();
    ctx.fillStyle = '#14161b';
    rr(lx0 - 1, 17 + Math.max(0, ph) * 0.4, 15, 6, 3);
    ctx.fill();
  }
  // mochila
  g = ctx.createLinearGradient(-28, 0, -14, 0);
  g.addColorStop(0, shade(color, -0.7));
  g.addColorStop(1, shade(color, -0.35));
  ctx.fillStyle = g;
  rr(-28, -10, 14, 30, 5);
  ctx.fill();
  ctx.strokeStyle = 'rgba(0,0,0,.6)';
  ctx.lineWidth = 1.5;
  ctx.stroke();
  ctx.fillStyle = '#111';
  ctx.fillRect(-25, -2, 8, 3);
  ctx.fillStyle = '#4f4';
  ctx.fillRect(-24, 6, 3, 3);
  // torso
  g = ctx.createLinearGradient(-18, -26, 18, 16);
  g.addColorStop(0, shade(color, 0.4));
  g.addColorStop(0.45, color);
  g.addColorStop(1, shade(color, -0.6));
  ctx.fillStyle = g;
  rr(-18, -26, 36, 42, 16);
  ctx.fill();
  ctx.strokeStyle = 'rgba(0,0,0,.65)';
  ctx.lineWidth = 1.8;
  ctx.stroke();
  // costuras y cinturón
  ctx.strokeStyle = 'rgba(0,0,0,.28)';
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(-17, 2);
  ctx.lineTo(17, 2);
  ctx.moveTo(-2, 2);
  ctx.lineTo(-2, 15);
  ctx.stroke();
  ctx.fillStyle = 'rgba(0,0,0,.35)';
  ctx.fillRect(-17, 2, 34, 3);
  ctx.fillStyle = 'rgba(255,255,255,.55)';
  ctx.fillRect(-13, -4, 7, 4);
  // brillo especular
  g = ctx.createRadialGradient(-9, -18, 1, -9, -18, 16);
  g.addColorStop(0, 'rgba(255,255,255,.4)');
  g.addColorStop(1, 'rgba(255,255,255,0)');
  ctx.fillStyle = g;
  rr(-18, -26, 36, 42, 16);
  ctx.fill();
  // visor
  if (zombie) {
    ctx.fillStyle = 'rgba(110,10,10,.65)';
    rr(-13, -3, 11, 16, 3);
    ctx.fill();
    ctx.fillRect(-9, 12, 2, 6);
    ctx.fillRect(-4, 12, 2, 4);
    ctx.strokeStyle = 'rgba(20,30,10,.6)';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(4, -1);
    ctx.lineTo(14, 12);
    ctx.moveTo(6, -1);
    ctx.lineTo(16, 10);
    ctx.stroke();
  }
  g = ctx.createLinearGradient(0, -20, 0, -4);
  if (zombie) {
    g.addColorStop(0, '#1a0505');
    g.addColorStop(0.55, '#7a1515');
    g.addColorStop(1, '#d03030');
  } else {
    g.addColorStop(0, '#07131d');
    g.addColorStop(0.55, '#1e5372');
    g.addColorStop(1, '#4fa0c0');
  }
  ctx.fillStyle = g;
  rr(-1, -20, 22, 16, 8);
  ctx.fill();
  ctx.strokeStyle = '#05080b';
  ctx.lineWidth = 2.2;
  ctx.stroke();
  ctx.strokeStyle = 'rgba(180,220,240,.35)';
  ctx.lineWidth = 1;
  rr(0, -19, 20, 14, 7);
  ctx.stroke();
  ctx.fillStyle = 'rgba(255,255,255,.65)';
  ctx.beginPath();
  ctx.ellipse(8, -16, 6, 1.8, -0.3, 0, 6.3);
  ctx.fill();
  ctx.fillStyle = 'rgba(255,255,255,.25)';
  ctx.beginPath();
  ctx.ellipse(14, -8, 3, 1.2, -0.3, 0, 6.3);
  ctx.fill();
  if (ghost) {
    ctx.globalCompositeOperation = 'lighter';
    ctx.fillStyle = 'rgba(120,200,255,.25)';
    rr(-18, -26, 36, 42, 16);
    ctx.fill();
  }
  ctx.restore();
}
function drawBody(x, y, color) {
  ctx.save();
  ctx.translate(x, y);
  ctx.save();
  ctx.translate(0, 20);
  ctx.scale(1, 0.3);
  let g = ctx.createRadialGradient(0, 0, 2, 0, 0, 34);
  g.addColorStop(0, 'rgba(0,0,0,.6)');
  g.addColorStop(1, 'rgba(0,0,0,0)');
  ctx.fillStyle = g;
  ctx.beginPath();
  ctx.arc(0, 0, 34, 0, 6.3);
  ctx.fill();
  ctx.restore();
  ctx.lineWidth = 1.8;
  ctx.strokeStyle = 'rgba(0,0,0,.7)';
  ctx.fillStyle = shade(color, -0.5);
  rr(-28, 6, 14, 14, 4);
  ctx.fill();
  ctx.stroke();
  g = ctx.createLinearGradient(-18, 2, 18, 20);
  g.addColorStop(0, shade(color, 0.3));
  g.addColorStop(1, shade(color, -0.55));
  ctx.fillStyle = g;
  rr(-18, 2, 36, 18, [10, 10, 6, 6]);
  ctx.fill();
  ctx.stroke();
  ctx.fillStyle = '#e8e4d8';
  rr(-3, -10, 6, 14, 3);
  ctx.fill();
  ctx.beginPath();
  ctx.arc(0, -12, 5.5, 0, 6.3);
  ctx.fill();
  ctx.stroke();
  ctx.fillStyle = '#222';
  ctx.fillRect(-2, -14, 1.5, 2);
  ctx.fillRect(1, -14, 1.5, 2);
  ctx.restore();
}
