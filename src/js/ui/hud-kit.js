/**
 * Kit de HUD: paneles de cristal, iconos vectoriales, barras con estela, botones de acción
 * circulares, avisos, joystick táctil, minimapa, mira dinámica e indicador de daño.
 * Todos los HUD de modo (clásico, zombi, cubo) se construyen con estas piezas.
 */
'use strict';

const HUDS = { trail: {}, dt: 0.016, hurt: null, hitMark: 0 };

/** Panel translúcido con borde de acento y brillo superior. */
function glass(x, y, w, h, accent, r) {
  r = r === undefined ? 12 : r;
  ctx.save();
  ctx.shadowColor = 'rgba(0,0,0,.45)';
  ctx.shadowBlur = 14;
  ctx.shadowOffsetY = 4;
  const g = ctx.createLinearGradient(0, y, 0, y + h);
  g.addColorStop(0, 'rgba(18,28,50,.78)');
  g.addColorStop(1, 'rgba(6,10,22,.82)');
  ctx.fillStyle = g;
  rr(x, y, w, h, r);
  ctx.fill();
  ctx.restore();
  ctx.strokeStyle = accent || 'rgba(140,180,240,.35)';
  ctx.lineWidth = 1.5;
  rr(x, y, w, h, r);
  ctx.stroke();
  ctx.fillStyle = 'rgba(255,255,255,.07)';
  rr(x + 2, y + 2, w - 4, Math.min(h * 0.4, 18), [r - 2, r - 2, 3, 3]);
  ctx.fill();
}

/* ---- iconos vectoriales (caja unitaria -0.5..0.5; usan fillStyle/strokeStyle) ---- */
const poly = pts => {
  ctx.beginPath();
  pts.forEach((p, i) => (i ? ctx.lineTo(p[0], p[1]) : ctx.moveTo(p[0], p[1])));
  ctx.closePath();
  ctx.fill();
};
const ICONS = {
  flame() {
    ctx.beginPath();
    ctx.moveTo(0, -0.5);
    ctx.bezierCurveTo(0.2, -0.2, 0.42, 0, 0.36, 0.2);
    ctx.bezierCurveTo(0.3, 0.42, 0.14, 0.5, 0, 0.5);
    ctx.bezierCurveTo(-0.14, 0.5, -0.3, 0.42, -0.36, 0.2);
    ctx.bezierCurveTo(-0.42, 0, -0.1, -0.1, 0, -0.5);
    ctx.fill();
  },
  heart() {
    ctx.beginPath();
    ctx.moveTo(0, 0.42);
    ctx.bezierCurveTo(-0.62, 0, -0.5, -0.45, -0.2, -0.42);
    ctx.bezierCurveTo(-0.08, -0.4, 0, -0.3, 0, -0.22);
    ctx.bezierCurveTo(0, -0.3, 0.08, -0.4, 0.2, -0.42);
    ctx.bezierCurveTo(0.5, -0.45, 0.62, 0, 0, 0.42);
    ctx.fill();
  },
  bolt() {
    poly([
      [0.1, -0.5],
      [-0.3, 0.08],
      [-0.02, 0.08],
      [-0.12, 0.5],
      [0.3, -0.1],
      [0.03, -0.1],
    ]);
  },
  shield() {
    ctx.beginPath();
    ctx.moveTo(0, -0.5);
    ctx.lineTo(0.4, -0.34);
    ctx.lineTo(0.4, 0.02);
    ctx.bezierCurveTo(0.4, 0.3, 0.15, 0.42, 0, 0.5);
    ctx.bezierCurveTo(-0.15, 0.42, -0.4, 0.3, -0.4, 0.02);
    ctx.lineTo(-0.4, -0.34);
    ctx.closePath();
    ctx.fill();
  },
  bullet() {
    ctx.beginPath();
    ctx.moveTo(-0.16, 0.45);
    ctx.lineTo(-0.16, -0.1);
    ctx.quadraticCurveTo(-0.16, -0.42, 0, -0.5);
    ctx.quadraticCurveTo(0.16, -0.42, 0.16, -0.1);
    ctx.lineTo(0.16, 0.45);
    ctx.closePath();
    ctx.fill();
  },
  grenade() {
    ctx.beginPath();
    ctx.arc(0, 0.12, 0.3, 0, 6.3);
    ctx.fill();
    ctx.fillRect(-0.1, -0.3, 0.2, 0.14);
    ctx.fillRect(0.02, -0.38, 0.3, 0.07);
  },
  coin() {
    ctx.beginPath();
    ctx.arc(0, 0, 0.42, 0, 6.3);
    ctx.fill();
    ctx.strokeStyle = 'rgba(0,0,0,.35)';
    ctx.lineWidth = 0.07;
    ctx.beginPath();
    ctx.arc(0, 0, 0.27, 0, 6.3);
    ctx.stroke();
  },
  clock() {
    ctx.lineWidth = 0.1;
    ctx.beginPath();
    ctx.arc(0, 0, 0.4, 0, 6.3);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(0, -0.24);
    ctx.lineTo(0, 0);
    ctx.lineTo(0.17, 0.1);
    ctx.stroke();
  },
  skull() {
    ctx.beginPath();
    ctx.arc(0, -0.08, 0.36, 0, 6.3);
    ctx.fill();
    ctx.fillRect(-0.2, 0.1, 0.4, 0.3);
    ctx.fillStyle = 'rgba(0,0,0,.7)';
    ctx.beginPath();
    ctx.arc(-0.14, -0.08, 0.09, 0, 6.3);
    ctx.arc(0.14, -0.08, 0.09, 0, 6.3);
    ctx.fill();
  },
  star() {
    ctx.beginPath();
    for (let i = 0; i < 10; i++) {
      const a = -1.5708 + (i * Math.PI) / 5,
        r = i % 2 ? 0.2 : 0.5;
      ctx.lineTo(Math.cos(a) * r, Math.sin(a) * r);
    }
    ctx.closePath();
    ctx.fill();
  },
  touch() {
    ctx.lineWidth = 0.1;
    ctx.beginPath();
    ctx.arc(0, 0, 0.38, 0, 6.3);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(0, 0, 0.14, 0, 6.3);
    ctx.fill();
  },
  megaphone() {
    poly([
      [-0.45, -0.12],
      [-0.1, -0.12],
      [0.35, -0.4],
      [0.35, 0.4],
      [-0.1, 0.12],
      [-0.45, 0.12],
    ]);
    ctx.fillRect(-0.36, 0.1, 0.14, 0.3);
  },
  dagger() {
    poly([
      [0, -0.5],
      [0.11, 0.08],
      [-0.11, 0.08],
    ]);
    ctx.fillRect(-0.24, 0.08, 0.48, 0.07);
    ctx.fillRect(-0.05, 0.15, 0.1, 0.3);
  },
  vent() {
    ctx.lineWidth = 0.08;
    rrc(ctx, -0.4, -0.34, 0.8, 0.68, 0.1);
    ctx.stroke();
    for (const y of [-0.16, 0, 0.16]) {
      ctx.beginPath();
      ctx.moveTo(-0.26, y);
      ctx.lineTo(0.26, y);
      ctx.stroke();
    }
  },
  reload() {
    ctx.lineWidth = 0.1;
    ctx.beginPath();
    ctx.arc(0, 0, 0.3, 0.5, 5.3);
    ctx.stroke();
    poly([
      [0.3, -0.22],
      [0.5, -0.02],
      [0.1, 0.02],
    ]);
  },
  swap() {
    ctx.lineWidth = 0.09;
    ctx.beginPath();
    ctx.moveTo(-0.4, -0.15);
    ctx.lineTo(0.25, -0.15);
    ctx.moveTo(0.4, 0.15);
    ctx.lineTo(-0.25, 0.15);
    ctx.stroke();
    poly([
      [0.4, -0.15],
      [0.2, -0.32],
      [0.2, 0.02],
    ]);
    poly([
      [-0.4, 0.15],
      [-0.2, -0.02],
      [-0.2, 0.32],
    ]);
  },
  pick() {
    ctx.lineWidth = 0.11;
    ctx.beginPath();
    ctx.arc(0, 0.05, 0.4, 3.6, 5.8);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(0, -0.28);
    ctx.lineTo(0, 0.5);
    ctx.stroke();
  },
  hammer() {
    ctx.save();
    ctx.rotate(-0.6);
    ctx.fillRect(-0.34, -0.42, 0.68, 0.24);
    ctx.fillRect(-0.06, -0.2, 0.12, 0.7);
    ctx.restore();
  },
  block() {
    ctx.globalAlpha *= 1;
    poly([
      [0, -0.46],
      [0.4, -0.24],
      [0, -0.02],
      [-0.4, -0.24],
    ]);
    ctx.save();
    ctx.globalAlpha *= 0.65;
    poly([
      [-0.4, -0.24],
      [0, -0.02],
      [0, 0.46],
      [-0.4, 0.22],
    ]);
    ctx.globalAlpha *= 0.65;
    poly([
      [0.4, -0.24],
      [0, -0.02],
      [0, 0.46],
      [0.4, 0.22],
    ]);
    ctx.restore();
  },
  drumstick() {
    ctx.beginPath();
    ctx.arc(-0.1, -0.1, 0.3, 0, 6.3);
    ctx.fill();
    ctx.lineWidth = 0.12;
    ctx.beginPath();
    ctx.moveTo(0.1, 0.1);
    ctx.lineTo(0.4, 0.4);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(0.43, 0.34, 0.08, 0, 6.3);
    ctx.arc(0.34, 0.43, 0.08, 0, 6.3);
    ctx.fill();
  },
  pause() {
    ctx.fillRect(-0.28, -0.34, 0.2, 0.68);
    ctx.fillRect(0.08, -0.34, 0.2, 0.68);
  },
  bag() {
    poly([
      [-0.4, -0.18],
      [0.4, -0.18],
      [0.34, 0.45],
      [-0.34, 0.45],
    ]);
    ctx.lineWidth = 0.09;
    ctx.beginPath();
    ctx.arc(0, -0.18, 0.2, 3.14, 6.28);
    ctx.stroke();
  },
  check() {
    ctx.lineWidth = 0.16;
    ctx.beginPath();
    ctx.moveTo(-0.35, 0.02);
    ctx.lineTo(-0.1, 0.28);
    ctx.lineTo(0.38, -0.3);
    ctx.stroke();
  },
  dot() {
    ctx.beginPath();
    ctx.arc(0, 0, 0.22, 0, 6.3);
    ctx.fill();
  },
  sun() {
    ctx.beginPath();
    ctx.arc(0, 0, 0.22, 0, 6.3);
    ctx.fill();
    ctx.lineWidth = 0.09;
    for (let i = 0; i < 8; i++) {
      const a = (i * Math.PI) / 4;
      ctx.beginPath();
      ctx.moveTo(Math.cos(a) * 0.33, Math.sin(a) * 0.33);
      ctx.lineTo(Math.cos(a) * 0.48, Math.sin(a) * 0.48);
      ctx.stroke();
    }
  },
  moon() {
    ctx.save();
    ctx.beginPath();
    ctx.arc(0, 0, 0.4, 0, 6.3);
    ctx.clip();
    ctx.beginPath();
    ctx.rect(-1, -1, 2, 2);
    ctx.arc(0.2, -0.12, 0.34, 0, 6.3);
    ctx.fill('evenodd');
    ctx.restore();
  },
  rain() {
    ctx.beginPath();
    ctx.arc(-0.14, -0.1, 0.2, 0, 6.3);
    ctx.arc(0.1, -0.2, 0.24, 0, 6.3);
    ctx.arc(0.28, -0.04, 0.16, 0, 6.3);
    ctx.fill();
    ctx.fillRect(-0.3, -0.1, 0.6, 0.16);
    ctx.lineWidth = 0.07;
    for (const x of [-0.2, 0, 0.2]) {
      ctx.beginPath();
      ctx.moveTo(x, 0.16);
      ctx.lineTo(x - 0.06, 0.4);
      ctx.stroke();
    }
  },
  // armas (caja 1 x 0.5)
  bat() {
    poly([
      [-0.5, 0.07],
      [-0.5, -0.07],
      [0.15, -0.11],
      [0.5, -0.14],
      [0.5, 0.14],
      [0.15, 0.11],
    ]);
  },
  pistola() {
    ctx.fillRect(-0.4, -0.22, 0.62, 0.17);
    poly([
      [-0.1, -0.05],
      [0.06, -0.05],
      [0.14, 0.28],
      [-0.06, 0.28],
    ]);
  },
  escopeta() {
    ctx.fillRect(-0.5, -0.12, 0.8, 0.07);
    ctx.fillRect(-0.45, -0.04, 0.5, 0.07);
    poly([
      [0.05, -0.1],
      [0.34, -0.1],
      [0.5, 0.2],
      [0.32, 0.2],
      [0.12, 0.02],
    ]);
  },
  subfusil() {
    ctx.fillRect(-0.46, -0.16, 0.7, 0.15);
    ctx.fillRect(-0.06, -0.01, 0.1, 0.32);
    poly([
      [0.1, -0.02],
      [0.22, -0.02],
      [0.26, 0.26],
      [0.12, 0.26],
    ]);
    ctx.fillRect(0.24, -0.12, 0.24, 0.05);
  },
};
/** Dibuja el icono `name` centrado en (x,y) con tamaño `s` y color `color`. */
function icon(name, x, y, s, color, alpha) {
  const f = ICONS[name];
  if (!f) return;
  ctx.save();
  ctx.translate(x, y);
  ctx.scale(s, s);
  ctx.fillStyle = ctx.strokeStyle = color || '#fff';
  ctx.lineCap = ctx.lineJoin = 'round';
  if (alpha !== undefined) ctx.globalAlpha *= alpha;
  f();
  ctx.restore();
}

/** Barra con icono, brillo y estela blanca que revela cuánto se ha perdido. */
function hudBar(key, x, y, w, h, v, max, col, ic, label) {
  const ratio = clamp(v / max, 0, 1),
    t = HUDS.trail;
  if (t[key] === undefined || t[key] < ratio) t[key] = ratio;
  else t[key] = Math.max(ratio, t[key] - HUDS.dt * 0.35);
  ctx.fillStyle = 'rgba(0,0,0,.5)';
  rr(x, y, w, h, h / 2);
  ctx.fill();
  const ix = h * 0.5 + 6,
    x0 = x + h + 2,
    bw = w - h - 8;
  ctx.save();
  rr(x + 2, y + 2, w - 4, h - 4, h / 2 - 2);
  ctx.clip();
  ctx.fillStyle = 'rgba(255,255,255,.55)';
  ctx.fillRect(x0, y + 2, bw * t[key], h - 4);
  const g = ctx.createLinearGradient(0, y, 0, y + h);
  g.addColorStop(0, shade(col, 0.35));
  g.addColorStop(0.5, col);
  g.addColorStop(1, shade(col, -0.35));
  ctx.fillStyle = g;
  ctx.fillRect(x0, y + 2, bw * ratio, h - 4);
  ctx.fillStyle = 'rgba(255,255,255,.22)';
  ctx.fillRect(x0, y + 2, bw * ratio, (h - 4) * 0.4);
  ctx.restore();
  if (ic) icon(ic, x + ix - 2, y + h / 2, h * 0.62, '#fff');
  if (label !== undefined)
    txt(String(label), x + w - 10, y + h / 2, Math.max(11, h * 0.52), '#fff', 'right');
  ctx.strokeStyle = 'rgba(255,255,255,.18)';
  ctx.lineWidth = 1;
  rr(x, y, w, h, h / 2);
  ctx.stroke();
}

/** Fila de iconos (corazones, comida…) con medios valores: `n` iconos que valen 2 puntos cada uno. */
function iconRow(x, y, n, value, ic, color, size, gap) {
  for (let i = 0; i < n; i++) {
    const cx = x + i * gap,
      full = value >= 2 * i + 2,
      half = value === 2 * i + 1;
    icon(ic, cx, y, size, 'rgba(255,255,255,.16)');
    if (full) icon(ic, cx, y, size, color);
    else if (half) {
      ctx.save();
      ctx.beginPath();
      ctx.rect(cx - size, y - size, size, size * 2);
      ctx.clip();
      icon(ic, cx, y, size, color);
      ctx.restore();
    }
  }
}
/** Pequeña píldora con icono y texto. Devuelve su anchura. */
function chip(x, y, text, ic, color, size) {
  size = size || 13;
  ctx.font = `bold ${size}px system-ui,sans-serif`;
  const w = ctx.measureText(text).width + size * 2.6;
  ctx.fillStyle = 'rgba(0,0,0,.42)';
  rr(x, y, w, size * 1.9, size);
  ctx.fill();
  if (ic) icon(ic, x + size * 1.05, y + size * 0.95, size * 1.05, color);
  txt(text, x + size * 1.9, y + size * 0.97, size, '#fff', 'left');
  return w;
}

/**
 * Botón de acción circular con icono, tecla y anillo de recarga opcional (cool: 0..1).
 * (cx,cy) es el centro, r el radio.
 */
function actionBtn(cx, cy, r, label, key, ic, on, color, fn, cool) {
  const m = mouse,
    hov = on && Math.hypot(m.x - cx, m.y - cy) < r;
  ctx.save();
  ctx.globalAlpha = on ? 1 : 0.4;
  ctx.shadowColor = hov ? color : 'rgba(0,0,0,.5)';
  ctx.shadowBlur = hov ? 18 : 10;
  ctx.shadowOffsetY = hov ? 0 : 3;
  const g = ctx.createRadialGradient(cx - r * 0.3, cy - r * 0.4, 2, cx, cy, r);
  g.addColorStop(0, shade(color, 0.28));
  g.addColorStop(1, shade(color, -0.5));
  ctx.fillStyle = g;
  ctx.beginPath();
  ctx.arc(cx, cy, r, 0, 6.3);
  ctx.fill();
  ctx.restore();
  ctx.save();
  ctx.globalAlpha = on ? 1 : 0.4;
  ctx.strokeStyle = 'rgba(255,255,255,.45)';
  ctx.lineWidth = 2.5;
  ctx.beginPath();
  ctx.arc(cx, cy, r - 1, 0, 6.3);
  ctx.stroke();
  if (cool > 0) {
    ctx.strokeStyle = 'rgba(255,255,255,.85)';
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.arc(cx, cy, r - 5, -1.5708, -1.5708 + 6.283 * (1 - cool));
    ctx.stroke();
  }
  ctx.fillStyle = 'rgba(255,255,255,.12)';
  ctx.beginPath();
  ctx.ellipse(cx, cy - r * 0.45, r * 0.62, r * 0.32, 0, 0, 6.3);
  ctx.fill();
  if (ic) icon(ic, cx, cy - r * 0.12, r * 0.62, '#fff');
  txt(label, cx, cy + r * 0.52, Math.max(10, r * 0.25), '#fff', 'center');
  if (key) {
    ctx.fillStyle = 'rgba(0,0,0,.6)';
    rr(cx + r * 0.32, cy - r * 0.98, r * 0.72, r * 0.38, 6);
    ctx.fill();
    txt(key, cx + r * 0.68, cy - r * 0.79, Math.max(9, r * 0.22), '#ffd54f', 'center');
  }
  ctx.restore();
  if (on) addHit(cx - r, cy - r, r * 2, r * 2, fn, false);
}

/** Aviso temporal con acento (usado por todos los HUD). */
function drawToast(y) {
  if (G.toastT <= 0) return;
  const k = Math.min(1, G.toastT * 4, (3 - Math.min(3, 3 - G.toastT)) * 4 + 0.001);
  ctx.save();
  ctx.globalAlpha = Math.min(1, G.toastT * 3);
  ctx.font = 'bold 17px system-ui,sans-serif';
  const w = ctx.measureText(G.toast).width + 46,
    yy = y + (1 - Math.min(1, k)) * 10;
  glass(W / 2 - w / 2, yy, w, 38, 'rgba(255,213,79,.45)', 19);
  ctx.fillStyle = '#ffd54f';
  ctx.beginPath();
  ctx.arc(W / 2 - w / 2 + 18, yy + 19, 4, 0, 6.3);
  ctx.fill();
  txt(G.toast, W / 2 + 6, yy + 19.5, 17, '#fff', 'center');
  ctx.restore();
}
/** Banner grande de oleada/aviso con líneas de acento. */
function drawBanner(title, sub, color, y0) {
  if (G.bannerT <= 0) return;
  const a = Math.min(1, G.bannerT, (4.5 - G.bannerT) * 3),
    y = y0 === undefined ? H * 0.28 : y0;
  ctx.save();
  ctx.globalAlpha = a;
  const g = ctx.createLinearGradient(0, 0, W, 0);
  g.addColorStop(0, 'rgba(0,0,0,0)');
  g.addColorStop(0.2, 'rgba(0,0,0,.62)');
  g.addColorStop(0.8, 'rgba(0,0,0,.62)');
  g.addColorStop(1, 'rgba(0,0,0,0)');
  ctx.fillStyle = g;
  ctx.fillRect(0, y, W, 112);
  ctx.fillStyle = color;
  ctx.fillRect(W * 0.2, y, W * 0.6, 2);
  ctx.fillRect(W * 0.2, y + 110, W * 0.6, 2);
  ctx.save();
  ctx.shadowColor = color;
  ctx.shadowBlur = 24;
  txt(title, W / 2, y + 40, Math.min(46, W / 15), color, 'center');
  ctx.restore();
  txt(sub, W / 2, y + 84, Math.min(18, W / 32), '#fff', 'center', false);
  ctx.restore();
}
function drawJoystick() {
  if (!(joy && joy.active)) return;
  ctx.strokeStyle = 'rgba(255,255,255,.4)';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.arc(joy.sx, joy.sy, 52, 0, 6.3);
  ctx.stroke();
  const g = ctx.createRadialGradient(joy.sx, joy.sy, 4, joy.sx, joy.sy, 52);
  g.addColorStop(0, 'rgba(255,255,255,.12)');
  g.addColorStop(1, 'rgba(255,255,255,0)');
  ctx.fillStyle = g;
  ctx.beginPath();
  ctx.arc(joy.sx, joy.sy, 52, 0, 6.3);
  ctx.fill();
  ctx.fillStyle = 'rgba(255,255,255,.55)';
  ctx.beginPath();
  ctx.arc(joy.sx + (joy.vx || 0) * 50, joy.sy + (joy.vy || 0) * 50, 22, 0, 6.3);
  ctx.fill();
}

/** Minimapa de cristal: salas, objetivos, zombis, jugador con su cono de visión. */
function drawMinimap() {
  const s = 0.07,
    w = 2400 * s,
    h = 1600 * s,
    x0 = W - w - 16,
    y0 = 16,
    p = G.player;
  glass(x0 - 8, y0 - 8, w + 16, h + 16, 'rgba(120,200,255,.4)', 12);
  ctx.save();
  rr(x0 - 4, y0 - 4, w + 8, h + 8, 8);
  ctx.clip();
  ctx.fillStyle = 'rgba(80,110,150,.55)';
  for (const r of ALL) {
    rr(x0 + r[0] * s, y0 + r[1] * s, r[2] * s, r[3] * s, 2);
    ctx.fill();
  }
  ctx.strokeStyle = 'rgba(160,210,255,.35)';
  ctx.lineWidth = 1;
  for (const r of ALL) {
    rr(x0 + r[0] * s, y0 + r[1] * s, r[2] * s, r[3] * s, 2);
    ctx.stroke();
  }
  const dot = (x, y, col, rad, glow) => {
    ctx.save();
    ctx.shadowColor = col;
    ctx.shadowBlur = glow || 6;
    ctx.fillStyle = col;
    ctx.beginPath();
    ctx.arc(x0 + x * s, y0 + y * s, rad, 0, 6.3);
    ctx.fill();
    ctx.restore();
  };
  if (G.mode === 'classic') {
    if (!p.imp)
      for (const t of p.tasks) if (!t.done) dot(STATIONS[t.st].x, STATIONS[t.st].y, '#ffd54f', 3);
    for (const f of fixPts()) dot(f.x, f.y, Math.sin(G.t * 8) > 0 ? '#ff4a3a' : '#a02218', 4.5, 10);
    if (p.imp) for (const v of VENTS) dot(v.x, v.y, '#ff8a9a', 2.4, 3);
  } else if (G.mode === 'zombie') {
    for (const z of G.zs) dot(z.x, z.y, z.boss ? '#ff2a2a' : '#ff5a4a', z.boss ? 4.5 : 2.4, 5);
    if (G.pod) dot(POD.x, POD.y, '#6fe08a', 5, 12);
  }
  // jugador con cono de visión
  const px = x0 + p.x * s,
    py = y0 + p.y * s,
    yaw = view3d ? CAM.yaw : p.aim;
  ctx.fillStyle = 'rgba(255,255,255,.16)';
  ctx.beginPath();
  ctx.moveTo(px, py);
  ctx.arc(px, py, 20, yaw - 0.55, yaw + 0.55);
  ctx.closePath();
  ctx.fill();
  ctx.save();
  ctx.translate(px, py);
  ctx.rotate(yaw);
  ctx.fillStyle = '#fff';
  ctx.beginPath();
  ctx.moveTo(6, 0);
  ctx.lineTo(-4, -4);
  ctx.lineTo(-2, 0);
  ctx.lineTo(-4, 4);
  ctx.closePath();
  ctx.fill();
  ctx.restore();
  ctx.restore();
}

/** Mira dinámica: se abre al moverse/disparar, marca de impacto y anillo de recarga. */
function drawCrosshair() {
  if (!view3d || scene !== 'play') return;
  const locked = document.pointerLockElement === cv;
  if (G.mode !== 'classic') {
    const p = G.player,
      spread = 7 + (p.moving ? 4 : 0) + (p.sprinting ? 5 : 0) + (G.cd > 0.05 ? 6 : 0),
      cx = W / 2,
      cy = H / 2;
    ctx.save();
    ctx.lineCap = 'round';
    ctx.strokeStyle = 'rgba(0,0,0,.55)';
    ctx.lineWidth = 4;
    for (let pass = 0; pass < 2; pass++) {
      if (pass) {
        ctx.strokeStyle = G.hitMark > 0 ? '#ff6a5a' : 'rgba(255,255,255,.92)';
        ctx.lineWidth = 2;
      }
      ctx.beginPath();
      for (const [dx, dy] of [
        [1, 0],
        [-1, 0],
        [0, 1],
        [0, -1],
      ]) {
        ctx.moveTo(cx + dx * spread, cy + dy * spread);
        ctx.lineTo(cx + dx * (spread + 8), cy + dy * (spread + 8));
      }
      ctx.stroke();
    }
    ctx.fillStyle = 'rgba(255,255,255,.9)';
    ctx.beginPath();
    ctx.arc(cx, cy, 1.6, 0, 6.3);
    ctx.fill();
    if (HUDS.hitMark > 0) {
      ctx.strokeStyle = `rgba(255,90,70,${Math.min(1, HUDS.hitMark * 6)})`;
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      for (const [dx, dy] of [
        [1, 1],
        [-1, 1],
        [1, -1],
        [-1, -1],
      ]) {
        ctx.moveTo(cx + dx * 9, cy + dy * 9);
        ctx.lineTo(cx + dx * 17, cy + dy * 17);
      }
      ctx.stroke();
    }
    if (G.reloadT > 0) {
      const tot = G.reloadW === 'escopeta' ? 1.6 : 1.1;
      ctx.strokeStyle = '#ffd54f';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.arc(cx, cy, 30, -1.5708, -1.5708 + 6.283 * (1 - G.reloadT / tot));
      ctx.stroke();
    }
    ctx.restore();
  }
  if (!locked && !('ontouchstart' in window))
    txt(
      'Haz clic para controlar la cámara · Flechas: girar cámara · WASD: moverse',
      W / 2,
      H - 112,
      13,
      '#fff',
      'center',
      false
    );
}
/** Arco rojo en el borde de la pantalla hacia el origen del último daño recibido. */
function drawDamageIndicator() {
  const h = HUDS.hurt;
  if (!h || h.t <= 0) return;
  h.t -= HUDS.dt;
  const yaw = view3d ? CAM.yaw : -Math.PI / 2,
    ang = h.a - yaw - Math.PI / 2,
    r = Math.min(W, H) * 0.34;
  ctx.save();
  ctx.translate(W / 2, H / 2);
  ctx.strokeStyle = `rgba(255,50,40,${Math.min(0.85, h.t * 1.4)})`;
  ctx.lineWidth = 14;
  ctx.lineCap = 'round';
  ctx.beginPath();
  ctx.arc(0, 0, r, ang - 0.28, ang + 0.28);
  ctx.stroke();
  ctx.restore();
}
