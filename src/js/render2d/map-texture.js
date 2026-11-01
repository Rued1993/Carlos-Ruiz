/**
 * Pre-renderizado del mapa de la nave en un canvas (también textura del suelo 3D).
 */
'use strict';

let MAP = null;
function buildMap() {
  const c = document.createElement('canvas');
  c.width = 2400;
  c.height = 1600;
  const x = c.getContext('2d');
  const n = document.createElement('canvas');
  n.width = n.height = 128;
  const nx = n.getContext('2d'),
    id = nx.createImageData(128, 128);
  for (let i = 0; i < id.data.length; i += 4) {
    const v = Math.random() * 255;
    id.data[i] = id.data[i + 1] = id.data[i + 2] = v;
    id.data[i + 3] = 255;
  }
  nx.putImageData(id, 0, 0);
  const noise = x.createPattern(n, 'repeat');
  x.fillStyle = '#04060a';
  x.fillRect(0, 0, 2400, 1600);
  // muros con bisel
  for (const r of ALL) {
    x.fillStyle = '#12161c';
    x.fillRect(r[0] - 26, r[1] - 26, r[2] + 52, r[3] + 52);
  }
  for (const r of ALL) {
    const g = x.createLinearGradient(0, r[1] - 18, 0, r[1] + r[3] + 18);
    g.addColorStop(0, '#5a6472');
    g.addColorStop(1, '#2a313b');
    x.fillStyle = g;
    x.fillRect(r[0] - 18, r[1] - 18, r[2] + 36, r[3] + 36);
  }
  // suelos
  const floor = (r, col, grate) => {
    x.save();
    x.beginPath();
    x.rect(r[0], r[1], r[2], r[3]);
    x.clip();
    for (let px = r[0]; px < r[0] + r[2]; px += 50)
      for (let py = r[1]; py < r[1] + r[3]; py += 50) {
        const v = rnd(-0.06, 0.06);
        x.fillStyle = shade(col, v);
        x.fillRect(px, py, 50, 50);
        x.strokeStyle = 'rgba(0,0,0,.45)';
        x.lineWidth = 2;
        x.strokeRect(px + 1, py + 1, 48, 48);
        x.strokeStyle = 'rgba(255,255,255,.07)';
        x.beginPath();
        x.moveTo(px + 3, py + 49);
        x.lineTo(px + 3, py + 3);
        x.lineTo(px + 49, py + 3);
        x.stroke();
        x.fillStyle = 'rgba(0,0,0,.5)';
        for (const [ox, oy] of [
          [6, 6],
          [44, 6],
          [6, 44],
          [44, 44],
        ]) {
          x.beginPath();
          x.arc(px + ox, py + oy, 1.6, 0, 6.3);
          x.fill();
        }
        if (grate) {
          x.strokeStyle = 'rgba(0,0,0,.35)';
          x.lineWidth = 1;
          for (let k = 8; k < 50; k += 6) {
            x.beginPath();
            x.moveTo(px + k, py + 4);
            x.lineTo(px + k, py + 46);
            x.stroke();
          }
        }
      }
    x.globalCompositeOperation = 'overlay';
    x.globalAlpha = 0.35;
    x.fillStyle = noise;
    x.fillRect(r[0], r[1], r[2], r[3]);
    x.globalCompositeOperation = 'source-over';
    x.globalAlpha = 1;
    x.strokeStyle = 'rgba(0,0,0,.4)';
    x.lineWidth = 40;
    x.strokeRect(r[0], r[1], r[2], r[3]);
    x.restore();
  };
  for (const r of ROOMS) floor(r.slice(1, 5), r[5], false);
  for (const r of CORR) floor(r, '#4d5560', true);
  // franjas de peligro
  const hazard = (rx, ry, rw, rh) => {
    x.save();
    x.beginPath();
    x.rect(rx, ry, rw, rh);
    x.clip();
    x.fillStyle = '#d4a017';
    x.fillRect(rx, ry, rw, rh);
    x.strokeStyle = '#111';
    x.lineWidth = 9;
    for (let i = -rh; i < rw + rh; i += 22) {
      x.beginPath();
      x.moveTo(rx + i, ry + rh);
      x.lineTo(rx + i + rh, ry);
      x.stroke();
    }
    x.restore();
  };
  hazard(100, 1034, 400, 14);
  hazard(1900, 1034, 400, 14);
  hazard(100, 652, 400, 10);
  // utilidades de props
  const prop = (px, py, w, h, col, r = 6) => {
    x.fillStyle = 'rgba(0,0,0,.4)';
    rrc(x, px + 7, py + 10, w, h, r);
    x.fill();
    const g = x.createLinearGradient(px, py, px + w, py + h);
    g.addColorStop(0, shade(col, 0.3));
    g.addColorStop(0.5, col);
    g.addColorStop(1, shade(col, -0.5));
    x.fillStyle = g;
    rrc(x, px, py, w, h, r);
    x.fill();
    x.strokeStyle = 'rgba(0,0,0,.6)';
    x.lineWidth = 2;
    x.stroke();
    x.strokeStyle = 'rgba(255,255,255,.15)';
    x.lineWidth = 1;
    rrc(x, px + 2, py + 2, w - 4, h - 4, r);
    x.stroke();
  };
  const glow = (px, py, r, col) => {
    const g = x.createRadialGradient(px, py, 0, px, py, r);
    g.addColorStop(0, col);
    g.addColorStop(1, 'rgba(0,0,0,0)');
    x.fillStyle = g;
    x.beginPath();
    x.arc(px, py, r, 0, 6.3);
    x.fill();
  };
  const led = (px, py, col) => {
    x.fillStyle = col;
    x.shadowColor = col;
    x.shadowBlur = 8;
    x.beginPath();
    x.arc(px, py, 3, 0, 6.3);
    x.fill();
    x.shadowBlur = 0;
  };
  // Cafetería
  x.fillStyle = 'rgba(0,0,0,.45)';
  x.beginPath();
  x.ellipse(1208, 312, 100, 58, 0, 0, 6.3);
  x.fill();
  let g = x.createRadialGradient(1180, 285, 10, 1200, 300, 100);
  g.addColorStop(0, '#d9d4c8');
  g.addColorStop(1, '#7c776b');
  x.fillStyle = g;
  x.beginPath();
  x.ellipse(1200, 300, 95, 55, 0, 0, 6.3);
  x.fill();
  x.strokeStyle = '#2b2a27';
  x.lineWidth = 4;
  x.stroke();
  prop(960, 410, 110, 40, '#8c8a82');
  prop(1330, 400, 110, 40, '#8c8a82');
  prop(1240, 108, 60, 52, '#3b5d8a');
  prop(1310, 108, 60, 52, '#8a3b3b');
  x.fillStyle = '#bdd';
  x.fillRect(1248, 116, 44, 20);
  x.fillRect(1318, 116, 44, 20);
  // pedestal botón emergencia
  prop(BTN.x - 32, BTN.y - 32, 64, 64, '#444', 32);
  // Médica
  prop(380, 370, 100, 52, '#cfd8dc');
  prop(500, 370, 100, 52, '#cfd8dc');
  prop(620, 370, 100, 52, '#cfd8dc');
  prop(380, 112, 160, 34, '#5f7a80');
  x.strokeStyle = '#8fd';
  x.lineWidth = 5;
  x.beginPath();
  x.arc(650, 250, 50, 0, 6.3);
  x.stroke();
  glow(650, 250, 70, 'rgba(100,255,230,.25)');
  // Navegación
  prop(1700, 108, 300, 30, '#101830');
  glow(1850, 123, 150, 'rgba(120,160,255,.28)');
  prop(1760, 300, 280, 44, '#3a4660');
  led(1790, 320, '#3f3');
  led(1810, 320, '#f93');
  led(1830, 320, '#39f');
  // Reactor
  glow(360, 850, 130, 'rgba(80,170,255,.4)');
  g = x.createLinearGradient(310, 0, 410, 0);
  g.addColorStop(0, '#223');
  g.addColorStop(0.5, '#6ab');
  g.addColorStop(1, '#223');
  x.fillStyle = g;
  x.fillRect(310, 780, 100, 140);
  x.strokeStyle = '#000';
  x.lineWidth = 3;
  x.strokeRect(310, 780, 100, 140);
  x.fillStyle = 'rgba(120,220,255,.8)';
  x.fillRect(350, 790, 20, 120);
  prop(120, 680, 30, 300, '#555', 8);
  prop(450, 900, 40, 120, '#555', 6);
  // Motores
  for (const ey of [690, 880]) {
    glow(2250, ey + 60, 100, 'rgba(255,140,40,.25)');
    prop(2190, ey, 90, 120, '#4a4a52', 10);
    x.fillStyle = '#111';
    x.beginPath();
    x.arc(2235, ey + 60, 32, 0, 6.3);
    x.fill();
    x.strokeStyle = '#888';
    x.lineWidth = 3;
    for (let a = 0; a < 6; a++) {
      x.beginPath();
      x.moveTo(2235, ey + 60);
      x.lineTo(2235 + Math.cos(a * 1.047) * 30, ey + 60 + Math.sin(a * 1.047) * 30);
      x.stroke();
    }
  }
  // Eléctrico
  prop(430, 1160, 300, 30, '#33382f');
  for (let i = 0; i < 10; i++) led(450 + i * 28, 1175, ['#f33', '#3f3', '#fc3'][i % 3]);
  prop(700, 1380, 70, 90, '#555', 6);
  glow(735, 1425, 70, 'rgba(255,255,100,.2)');
  prop(480, 1396, 80, 36, '#2a2f35');
  // Almacén
  for (const [cx, cy, s] of [
    [990, 1190, 70],
    [1070, 1190, 70],
    [1030, 1262, 60],
    [1350, 1370, 90],
    [1000, 1400, 60],
    [1400, 1190, 55],
  ]) {
    prop(cx, cy, s, s, '#8b6b3a', 4);
    x.strokeStyle = 'rgba(0,0,0,.4)';
    x.beginPath();
    x.moveTo(cx, cy);
    x.lineTo(cx + s, cy + s);
    x.moveTo(cx + s, cy);
    x.lineTo(cx, cy + s);
    x.stroke();
  }
  // Seguridad
  prop(1940, 1210, 150, 46, '#222a30');
  for (let i = 0; i < 3; i++) {
    x.fillStyle = '#1a3a2a';
    x.fillRect(1950 + i * 46, 1216, 38, 26);
    glow(1969 + i * 46, 1229, 24, 'rgba(80,255,140,.3)');
  }
  prop(1700, 1380, 160, 40, '#2a3238');
  // rejillas de ventilación
  for (const v of VENTS) {
    prop(v.x - 24, v.y - 14, 48, 28, '#2a2d33', 3);
    x.strokeStyle = '#000';
    x.lineWidth = 2;
    for (let k = -14; k <= 14; k += 7) {
      x.beginPath();
      x.moveTo(v.x - 20, v.y + k / 2);
      x.lineTo(v.x + 20, v.y + k / 2);
      x.stroke();
    }
  }
  // cámaras en pared
  for (const cm of CAMS) {
    const cx = cm[1],
      cy = cm[2] > 700 && cm[2] < 800 ? 600 : cm[2] - 200;
    x.fillStyle = '#222';
    x.fillRect(cx - 8, cy - 6, 16, 12);
    led(cx + 10, cy, '#f22');
  }
  // marcas de sala en el suelo
  x.save();
  x.globalAlpha = 0.16;
  for (const r of ROOMS) {
    x.font = 'bold 30px system-ui';
    x.fillStyle = '#fff';
    x.textAlign = 'center';
    x.fillText(r[0].toUpperCase(), r[1] + r[3] / 2, r[2] + r[4] - 26);
  }
  x.restore();
  MAP = c;
}
const LAMPS = [
  ...ROOMS.map(r => [r[1] + r[3] / 2, r[2] + r[4] / 2, Math.max(r[3], r[4]) * 0.55]),
  ...CORR.map(r => [r[0] + r[2] / 2, r[1] + r[3] / 2, 170]),
];
// patrón de grano
const GRAIN = document.createElement('canvas');
GRAIN.width = GRAIN.height = 256;
(() => {
  const g = GRAIN.getContext('2d'),
    d = g.createImageData(256, 256);
  for (let i = 0; i < d.data.length; i += 4) {
    const v = Math.random() * 255;
    d.data[i] = d.data[i + 1] = d.data[i + 2] = v;
    d.data[i + 3] = 255;
  }
  g.putImageData(d, 0, 0);
})();
const MOTES = Array.from({ length: 70 }, () => ({
  x: Math.random(),
  y: Math.random(),
  s: rnd(0.6, 2),
  v: rnd(4, 14),
  p: Math.random() * 6,
}));
