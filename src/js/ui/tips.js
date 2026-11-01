/**
 * Consejos contextuales: cada consejo aparece una sola vez (se recuerda en SAVE.tips).
 */
'use strict';

const TIPQ = [];
let TIPCUR = null;
/** Muestra el consejo `id` si aún no se ha visto. */
function tip(id, text) {
  if (!SAVE.tips) SAVE.tips = {};
  if (SAVE.tips[id] || TIPQ.some(q => q.id === id) || (TIPCUR && TIPCUR.id === id)) return;
  SAVE.tips[id] = 1;
  saveGame();
  TIPQ.push({ id, text, t: 0 });
}
/** Consejos que dependen del estado de la partida. */
function tipTick() {
  const g = G;
  if (!g || scene !== 'play' || g.intro > 0) return;
  if (g.mode === 'zombie') {
    if (g.t > 4) tip('dash', 'Pulsa Q (o Ctrl) para esquivar: eres invulnerable un instante');
    if (g.zs && g.zs.length > 6) tip('gren', 'Muchos zombis juntos: lanza una granada con G');
    if (g.drops && g.drops.some(d => d.type === 'rafaga' || d.type === 'escudo'))
      tip('power', 'Potenciador cerca: amarillo = ráfaga de disparo, azul = escudo');
    if (g.hp < 35)
      tip('lowhp', 'Poca vida: busca botiquines blancos o compra armadura en la tienda (B)');
  } else if (g.mode === 'sandbox') {
    if (g.t > 4) tip('sbmine', 'Mantén el clic para talar o picar; C abre el crafteo');
    if (g.inv && g.inv.carbon > 0)
      tip('torch', 'Con madera y carbón fabricas antorchas para la noche');
  } else if (g.mode === 'classic') {
    if (g.t > 4) tip('emote', 'Saluda con T, baila con Y y señala con U');
  }
}
function drawTips() {
  const dt = HUDS.dt || 0.016;
  if (!TIPCUR && TIPQ.length) TIPCUR = TIPQ.shift();
  const q = TIPCUR;
  if (!q) return;
  q.t += dt;
  const life = 5.5;
  if (q.t >= life) {
    TIPCUR = null;
    return;
  }
  const a = Math.min(1, q.t * 4, (life - q.t) * 3);
  ctx.save();
  ctx.globalAlpha = a;
  ctx.font = '600 15px system-ui, sans-serif';
  const w = Math.min(W - 40, ctx.measureText(q.text).width + 70),
    x = (W - w) / 2,
    y = H - 170 + (1 - a) * 20;
  glass(x, y, w, 40, 'rgba(120,200,255,.55)', 12);
  icon('bolt', x + 22, y + 20, 16, '#80d8ff');
  txt('CONSEJO', x + 40, y + 13, 10, '#80d8ff', 'left', false);
  txt(q.text, x + 40, y + 28, 14, '#fff', 'left', false);
  ctx.restore();
}
