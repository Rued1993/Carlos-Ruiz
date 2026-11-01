/**
 * Utilidades: aleatorio, mezcla, distancia, color, texto en canvas y audio (beep/drone).
 */
'use strict';

const rnd = (a, b) => a + Math.random() * (b - a),
  pick = a => a[Math.floor(Math.random() * a.length)];
const shuffle = a => {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};
const dist = (a, b) => Math.hypot(a.x - b.x, a.y - b.y);
function shade(hex, f) {
  const n = parseInt(hex.slice(1), 16);
  let r = n >> 16,
    g = (n >> 8) & 255,
    b = n & 255;
  const t = f < 0 ? 0 : 255,
    p = Math.abs(f);
  return `rgb(${Math.round((t - r) * p + r)},${Math.round((t - g) * p + g)},${Math.round((t - b) * p + b)})`;
}
function rrc(c, x, y, w, h, r) {
  c.beginPath();
  c.roundRect(x, y, w, h, r);
}
function rr(x, y, w, h, r) {
  rrc(ctx, x, y, w, h, r);
}
function txt(s, x, y, size = 16, color = '#fff', align = 'left', bold = true) {
  ctx.font = `${bold ? 'bold ' : ''}${size}px system-ui,sans-serif`;
  ctx.fillStyle = color;
  ctx.textAlign = align;
  ctx.textBaseline = 'middle';
  ctx.fillText(s, x, y);
}
let ac, drone;
function beep(f, d = 0.15, t = 'square', v = 0.05, slide = 0) {
  try {
    ac = ac || new (window.AudioContext || window.webkitAudioContext)();
    const o = ac.createOscillator(),
      g = ac.createGain();
    o.type = t;
    o.frequency.value = f;
    if (slide)
      o.frequency.exponentialRampToValueAtTime(Math.max(30, f + slide), ac.currentTime + d);
    g.gain.value = v;
    g.gain.exponentialRampToValueAtTime(0.0001, ac.currentTime + d);
    o.connect(g);
    g.connect(ac.destination);
    o.start();
    o.stop(ac.currentTime + d);
  } catch (e) {}
}
function startDrone() {
  try {
    ac = ac || new (window.AudioContext || window.webkitAudioContext)();
    if (drone) return;
    drone = [48, 72.4, 96.3].map((f, i) => {
      const o = ac.createOscillator(),
        g = ac.createGain();
      o.type = i ? 'sine' : 'sawtooth';
      o.frequency.value = f;
      g.gain.value = i ? 0.012 : 0.006;
      o.connect(g);
      g.connect(ac.destination);
      o.start();
      return o;
    });
  } catch (e) {}
}
