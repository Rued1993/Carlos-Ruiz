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
    hov = m.x >= x && m.x <= x + w && m.y >= y && m.y <= y + h,
    ly = hov ? y - 1 : y;
  ctx.save();
  ctx.shadowColor = hov ? shade(color, 0.3) : 'rgba(0,0,0,.45)';
  ctx.shadowBlur = hov ? 18 : 8;
  ctx.shadowOffsetY = hov ? 0 : 3;
  const g = ctx.createLinearGradient(0, ly, 0, ly + h);
  g.addColorStop(0, shade(color, hov ? 0.4 : 0.24));
  g.addColorStop(0.5, shade(color, hov ? 0.05 : -0.08));
  g.addColorStop(1, shade(color, hov ? -0.12 : -0.34));
  ctx.fillStyle = g;
  rr(x, ly, w, h, 11);
  ctx.fill();
  ctx.restore();
  ctx.strokeStyle = hov ? 'rgba(255,255,255,.55)' : 'rgba(255,255,255,.22)';
  ctx.lineWidth = 1.6;
  rr(x, ly, w, h, 11);
  ctx.stroke();
  ctx.fillStyle = 'rgba(255,255,255,.14)';
  rr(x + 3, ly + 2, w - 6, Math.max(3, h * 0.38), [9, 9, 4, 4]);
  ctx.fill();
  ctx.save();
  ctx.shadowColor = 'rgba(0,0,0,.6)';
  ctx.shadowBlur = 3;
  ctx.shadowOffsetY = 1;
  txt(label, x + w / 2, ly + h / 2, size, '#fff', 'center');
  ctx.restore();
  addHit(x, y, w, h, fn, true);
}
