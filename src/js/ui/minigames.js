/**
 * Minijuegos de tareas, menú de sabotaje y cámaras de seguridad.
 */
'use strict';

function drawTask() {
  const t = G.task;
  if (!t) return;
  ctx.fillStyle = 'rgba(0,0,0,.6)';
  ctx.fillRect(0, 0, W, H);
  beginUI(600, 420);
  let g = ctx.createLinearGradient(0, 0, 0, 420);
  g.addColorStop(0, '#26334a');
  g.addColorStop(1, '#111826');
  ctx.fillStyle = g;
  rr(0, 0, 600, 420, 16);
  ctx.fill();
  ctx.strokeStyle = '#8fa7c4';
  ctx.lineWidth = 4;
  ctx.stroke();
  txt(t.title, 300, 32, 24, '#fff', 'center');
  addHit(0, 0, 600, 420, () => {}, true);
  const m = um();
  if (t.type == 'numbers') {
    txt('Pulsa los números en orden (1 → 9)', 300, 64, 15, '#9fb3c8', 'center', false);
    t.cells.forEach((n, i) => {
      const x = 140 + (i % 3) * 110,
        y = 90 + Math.floor(i / 3) * 100,
        d = n < t.next;
      g = ctx.createLinearGradient(0, y, 0, y + 90);
      g.addColorStop(0, d ? '#3c9a48' : t.flash > 0 ? '#a03030' : '#46597a');
      g.addColorStop(1, d ? '#1c5a26' : t.flash > 0 ? '#501818' : '#232f45');
      ctx.fillStyle = g;
      rr(x, y, 100, 90, 10);
      ctx.fill();
      ctx.strokeStyle = '#0008';
      ctx.stroke();
      txt(n, x + 50, y + 45, 38, '#fff', 'center');
      addHit(
        x,
        y,
        100,
        90,
        () => {
          if (t.doneT > 0) return;
          if (n == t.next) {
            t.next++;
            beep(500 + n * 40, 0.08, 'sine', 0.05);
          } else {
            t.next = 1;
            t.flash = 0.4;
            beep(150, 0.2);
          }
        },
        true
      );
    });
  }
  if (t.type == 'wires') {
    txt('Conecta cada cable con su color', 300, 64, 15, '#9fb3c8', 'center', false);
    for (let i = 0; i < 4; i++) {
      const y = 120 + i * 70;
      ctx.fillStyle = t.cols[i];
      ctx.beginPath();
      ctx.arc(100, y, 22, 0, 6.3);
      ctx.fill();
      ctx.strokeStyle = t.sel === i ? '#fff' : '#000';
      ctx.lineWidth = t.sel === i ? 5 : 3;
      ctx.stroke();
      addHit(
        78,
        y - 22,
        44,
        44,
        () => {
          if (!t.conn.includes(i)) t.sel = i;
        },
        true
      );
      const c = t.right[i];
      ctx.fillStyle = t.cols[c];
      ctx.beginPath();
      ctx.arc(500, y, 22, 0, 6.3);
      ctx.fill();
      ctx.strokeStyle = '#000';
      ctx.lineWidth = 3;
      ctx.stroke();
      addHit(
        478,
        y - 22,
        44,
        44,
        () => {
          if (t.sel !== null && t.sel === c && !t.conn.includes(c)) {
            t.conn.push(c);
            t.sel = null;
            beep(600, 0.1, 'sine', 0.05);
          } else t.sel = null;
        },
        true
      );
    }
    for (const c of t.conn) {
      const ly = 120 + c * 70,
        ry = 120 + t.right.indexOf(c) * 70;
      ctx.strokeStyle = t.cols[c];
      ctx.lineWidth = 10;
      ctx.beginPath();
      ctx.moveTo(122, ly);
      ctx.bezierCurveTo(300, ly, 300, ry, 478, ry);
      ctx.stroke();
    }
    if (t.sel !== null) {
      ctx.strokeStyle = t.cols[t.sel];
      ctx.lineWidth = 8;
      ctx.beginPath();
      ctx.moveTo(122, 120 + t.sel * 70);
      ctx.lineTo(m.x, m.y);
      ctx.stroke();
    }
  }
  if (t.type == 'hold') {
    txt('Mantén pulsado el botón hasta completar', 300, 64, 15, '#9fb3c8', 'center', false);
    const inside = Math.hypot(m.x - 300, m.y - 230) < 80;
    g = ctx.createRadialGradient(280, 210, 5, 300, 230, 80);
    g.addColorStop(0, mouse.down && inside ? '#6fe07a' : '#6aa6f0');
    g.addColorStop(1, mouse.down && inside ? '#1c6a2a' : '#1c4a8a');
    ctx.fillStyle = g;
    ctx.beginPath();
    ctx.arc(300, 230, 80, 0, 6.3);
    ctx.fill();
    ctx.strokeStyle = '#fff';
    ctx.lineWidth = 4;
    ctx.stroke();
    txt(t.icon, 300, 230, 56, '#fff', 'center');
    ctx.fillStyle = '#111';
    rr(100, 350, 400, 28, 8);
    ctx.fill();
    ctx.fillStyle = '#43a047';
    rr(100, 350, 400 * Math.min(1, t.prog), 28, 8);
    ctx.fill();
  }
  if (t.type == 'slider') {
    txt(
      'Pulsa cuando el marcador esté en la zona verde (3 veces)',
      300,
      64,
      15,
      '#9fb3c8',
      'center',
      false
    );
    ctx.fillStyle = '#111';
    rr(60, 200, 480, 50, 8);
    ctx.fill();
    ctx.fillStyle = '#2e9d4a';
    ctx.fillRect(60 + t.zone, 200, 70, 50);
    ctx.fillStyle = t.flash > 0 ? '#ff4040' : '#fff';
    ctx.fillRect(60 + t.mk - 4, 190, 8, 70);
    for (let i = 0; i < 3; i++) {
      ctx.fillStyle = i < t.hits ? '#43a047' : '#34445a';
      ctx.beginPath();
      ctx.arc(250 + i * 50, 330, 16, 0, 6.3);
      ctx.fill();
    }
    hits.pop();
    addHit(
      0,
      0,
      600,
      420,
      () => {
        if (t.doneT > 0) return;
        if (t.mk >= t.zone && t.mk <= t.zone + 70) {
          t.hits++;
          t.zone = rnd(20, 400);
          t.speed *= 1.2;
          beep(600 + t.hits * 100, 0.1, 'sine', 0.05);
        } else {
          t.hits = 0;
          t.flash = 0.4;
          beep(150, 0.2);
        }
      },
      true
    );
  }
  if (t.type == 'keypad') {
    txt('Introduce el código de rumbo', 300, 64, 15, '#9fb3c8', 'center', false);
    txt(t.code.split('').join('  '), 300, 100, 34, '#7bff9a', 'center');
    txt(t.entry.padEnd(4, '_').split('').join('  '), 300, 148, 34, '#fff', 'center');
    for (let i = 0; i < 9; i++) {
      const x = 190 + (i % 3) * 72,
        y = 180 + Math.floor(i / 3) * 62;
      ctx.fillStyle = '#34476a';
      rr(x, y, 64, 54, 8);
      ctx.fill();
      txt(i + 1, x + 32, y + 27, 26, '#fff', 'center');
      addHit(
        x,
        y,
        64,
        54,
        () => {
          if (t.doneT > 0) return;
          t.entry += i + 1;
          beep(420 + i * 40, 0.06, 'sine', 0.05);
          if (t.entry.length >= 4 && t.entry !== t.code) {
            t.entry = '';
            t.flash = 0.4;
            beep(150, 0.2);
          }
        },
        true
      );
    }
  }
  if (t.type == 'simon') {
    txt(
      t.show > 0 ? 'Memoriza la secuencia…' : 'Repite la secuencia (' + t.len + '/5)',
      300,
      64,
      15,
      '#9fb3c8',
      'center',
      false
    );
    const cols = ['#e53935', '#1e88e5', '#fdd835', '#43a047'];
    for (let i = 0; i < 4; i++) {
      const x = 170 + (i % 2) * 140,
        y = 100 + Math.floor(i / 2) * 140,
        on = t.lit === i;
      ctx.fillStyle = cols[i];
      ctx.globalAlpha = on ? 1 : 0.45;
      rr(x, y, 130, 130, 14);
      ctx.fill();
      ctx.globalAlpha = 1;
      addHit(
        x,
        y,
        130,
        130,
        () => {
          if (t.doneT > 0 || t.show > 0) return;
          t.lit = i;
          t.pressed = 0.25;
          beep(300 + i * 90, 0.12, 'sine', 0.06);
          if (t.seq[t.pos] === i) {
            if (++t.pos >= t.len) {
              t.len++;
              t.pos = 0;
              t.show = t.len * 0.7 + 0.4;
            }
          } else {
            t.pos = 0;
            t.show = t.len * 0.7 + 0.4;
            t.flash = 0.4;
            beep(150, 0.2);
          }
        },
        true
      );
    }
  }
  if (t.type == 'switches') {
    txt('Activa todos los interruptores', 300, 64, 15, '#9fb3c8', 'center', false);
    t.sw.forEach((on, i) => {
      const x = 70 + i * 100,
        y = 130;
      ctx.fillStyle = '#0b0f16';
      rr(x, y, 64, 170, 10);
      ctx.fill();
      ctx.strokeStyle = '#445';
      ctx.lineWidth = 3;
      ctx.stroke();
      ctx.fillStyle = on ? '#4caf50' : '#c04040';
      rr(x + 8, on ? y + 8 : y + 92, 48, 70, 8);
      ctx.fill();
      ctx.fillStyle = on ? '#8f8' : '#f88';
      ctx.beginPath();
      ctx.arc(x + 32, y - 14, 7, 0, 6.3);
      ctx.fill();
      addHit(
        x,
        y,
        64,
        170,
        () => {
          if (t.doneT > 0) return;
          t.sw[i] = !t.sw[i];
          beep(on ? 300 : 500, 0.06, 'square', 0.05);
        },
        true
      );
    });
  }
  if (t.doneT > 0) {
    ctx.fillStyle = 'rgba(30,100,40,.9)';
    rr(150, 150, 300, 120, 14);
    ctx.fill();
    txt('✔ ¡Completado!', 300, 210, 32, '#fff', 'center');
  }
  uiBtn(
    552,
    10,
    38,
    32,
    '✕',
    '#8e2020',
    () => {
      scene = 'play';
      G.task = null;
    },
    18
  );
  endUI();
}
function drawSabMenu() {
  ctx.fillStyle = 'rgba(0,0,0,.65)';
  ctx.fillRect(0, 0, W, H);
  beginUI(520, 360);
  let g = ctx.createLinearGradient(0, 0, 0, 360);
  g.addColorStop(0, '#3a1a1a');
  g.addColorStop(1, '#140808');
  ctx.fillStyle = g;
  rr(0, 0, 520, 360, 16);
  ctx.fill();
  ctx.strokeStyle = '#c04040';
  ctx.lineWidth = 4;
  ctx.stroke();
  txt('SABOTAJE', 260, 40, 30, '#ff6060', 'center');
  uiBtn(
    60,
    80,
    400,
    54,
    '💡 Apagar las luces',
    '#7a3a1a',
    () => {
      scene = 'play';
      startSab('lights');
      G.sabCD = 35;
    },
    20
  );
  uiBtn(
    60,
    148,
    400,
    54,
    '☢ Sobrecargar el reactor',
    '#8a1a1a',
    () => {
      scene = 'play';
      startSab('reactor');
      G.sabCD = 40;
    },
    20
  );
  uiBtn(
    60,
    216,
    400,
    54,
    '🚪 Cerrar las puertas',
    '#4a3a7a',
    () => {
      scene = 'play';
      startSab('doors');
      G.sabCD = 30;
    },
    20
  );
  uiBtn(
    160,
    295,
    200,
    42,
    'Cancelar',
    '#444',
    () => {
      scene = 'play';
    },
    16
  );
  endUI();
}
function drawCams() {
  G.camT += 1 / 60;
  ctx.fillStyle = '#020503';
  ctx.fillRect(0, 0, W, H);
  beginUI(960, 600);
  txt('SISTEMA DE VIGILANCIA', 480, 22, 18, '#6f9', 'center');
  CAMS.forEach((c, i) => {
    const x = 20 + (i % 2) * 470,
      y = 44 + Math.floor(i / 2) * 270,
      w = 450,
      h = 250;
    ctx.save();
    ctx.beginPath();
    ctx.rect(x, y, w, h);
    ctx.clip();
    ctx.fillStyle = '#000';
    ctx.fillRect(x, y, w, h);
    ctx.translate(x + w / 2, y + h / 2);
    ctx.scale(0.5, 0.5);
    ctx.translate(-c[1], -c[2]);
    drawContent();
    ctx.restore();
    ctx.save();
    ctx.beginPath();
    ctx.rect(x, y, w, h);
    ctx.clip();
    ctx.fillStyle = 'rgba(20,90,50,.28)';
    ctx.globalCompositeOperation = 'overlay';
    ctx.fillRect(x, y, w, h);
    ctx.globalCompositeOperation = 'source-over';
    ctx.fillStyle = 'rgba(0,0,0,.18)';
    for (let yy = y; yy < y + h; yy += 3) ctx.fillRect(x, yy, w, 1);
    ctx.globalAlpha = 0.12;
    ctx.globalCompositeOperation = 'overlay';
    ctx.fillStyle = ctx.createPattern(GRAIN, 'repeat');
    ctx.translate(x - Math.random() * 256, y - Math.random() * 256);
    ctx.fillRect(0, 0, w + 256, h + 256);
    ctx.restore();
    ctx.strokeStyle = '#2c5';
    ctx.lineWidth = 2;
    ctx.strokeRect(x, y, w, h);
    txt(`CAM ${i + 1} · ${c[0].toUpperCase()}`, x + 10, y + 14, 13, '#7f9', 'left');
    if (Math.floor(G.camT * 1.5) % 2 == 0) {
      ctx.fillStyle = '#f22';
      ctx.beginPath();
      ctx.arc(x + w - 18, y + 14, 6, 0, 6.3);
      ctx.fill();
    }
  });
  uiBtn(
    860,
    6,
    90,
    30,
    '✕ Salir',
    '#8e2020',
    () => {
      scene = 'play';
    },
    14
  );
  endUI();
}
