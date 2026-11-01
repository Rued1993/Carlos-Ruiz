/**
 * Estado global (escena, partida G), entrada compartida, hits de UI y helpers de UI virtual.
 */
'use strict';

let scene = 'menu',
  G = null,
  nImp = 2,
  gmode = 'classic';
const keys = {},
  mouse = { x: 0, y: 0, down: false },
  hits = [];
let joy = null;
function addHit(x, y, w, h, fn, ui) {
  hits.push({ x, y, w, h, fn, ui });
}
let UI = { s: 1, ox: 0, oy: 0 };
function beginUI(vw, vh) {
  const s = Math.min(W / vw, H / vh, 1.5);
  UI = { s, ox: (W - vw * s) / 2, oy: (H - vh * s) / 2 };
  ctx.save();
  ctx.translate(UI.ox, UI.oy);
  ctx.scale(s, s);
}
function endUI() {
  ctx.restore();
}
function um() {
  return { x: (mouse.x - UI.ox) / UI.s, y: (mouse.y - UI.oy) / UI.s };
}
function uiBtn(x, y, w, h, label, color, fn, size = 20) {
  const m = um(),
    hov = m.x >= x && m.x <= x + w && m.y >= y && m.y <= y + h;
  const g = ctx.createLinearGradient(0, y, 0, y + h);
  g.addColorStop(0, shade(color, hov ? 0.35 : 0.2));
  g.addColorStop(1, shade(color, hov ? -0.1 : -0.3));
  ctx.fillStyle = g;
  rr(x, y, w, h, 10);
  ctx.fill();
  ctx.strokeStyle = 'rgba(255,255,255,.25)';
  ctx.lineWidth = 2;
  ctx.stroke();
  txt(label, x + w / 2, y + h / 2, size, '#fff', 'center');
  addHit(x, y, w, h, fn, true);
}
