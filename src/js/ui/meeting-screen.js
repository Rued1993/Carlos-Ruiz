/**
 * Pantalla de reunión y votación.
 */
'use strict';

function wrap(s, maxW) {
  const words = s.split(' '),
    lines = [];
  let cur = '';
  for (const w of words) {
    const t = cur ? cur + ' ' + w : w;
    if (ctx.measureText(t).width > maxW && cur) {
      lines.push(cur);
      cur = w;
    } else cur = t;
  }
  if (cur) lines.push(cur);
  return lines;
}
function drawMeeting() {
  const m = G.meet,
    p = G.player;
  ctx.fillStyle = '#04060c';
  ctx.fillRect(0, 0, W, H);
  ctx.save();
  ctx.globalAlpha = 0.35;
  ctx.drawImage(MAP, 0, 0, MAP.width, MAP.height, 0, 0, W, H);
  ctx.restore();
  ctx.fillStyle = 'rgba(2,5,12,.82)';
  ctx.fillRect(0, 0, W, H);
  beginUI(960, 600);
  let g = ctx.createLinearGradient(0, 0, 0, 600);
  g.addColorStop(0, 'rgba(30,44,72,.95)');
  g.addColorStop(1, 'rgba(10,16,30,.95)');
  ctx.fillStyle = g;
  rr(10, 10, 940, 580, 18);
  ctx.fill();
  ctx.strokeStyle = '#6d8cbc';
  ctx.lineWidth = 3;
  ctx.stroke();
  txt(
    m.phase == 'reveal' ? 'RESULTADO DE LA VOTACIÓN' : '¿QUIÉN ES EL IMPOSTOR?',
    480,
    40,
    30,
    '#fff',
    'center'
  );
  txt(
    m.body
      ? `${m.caller.isP ? 'Tú' : m.caller.name} reportó un cuerpo`
      : `${m.caller.isP ? 'Tú' : m.caller.name} llamó a reunión de emergencia`,
    480,
    68,
    15,
    '#9fb3c8',
    'center',
    false
  );
  txt(
    m.phase == 'discuss'
      ? 'Discusión: ' + Math.max(0, Math.ceil(10 - m.t)) + 's'
      : m.phase == 'vote'
        ? 'Votación: ' + Math.max(0, Math.ceil(m.vt)) + 's'
        : '',
    930,
    40,
    16,
    '#ffd740',
    'right'
  );
  uiBtn(
    24,
    18,
    130,
    30,
    voiceOn ? '🔊 Voz: SÍ' : '🔇 Voz: NO',
    '#3a4a6a',
    () => {
      voiceOn = !voiceOn;
      if (!voiceOn) stopSpeech();
    },
    13
  );
  ctx.fillStyle = 'rgba(5,10,20,.8)';
  rr(30, 90, 470, 420, 12);
  ctx.fill();
  ctx.save();
  rr(30, 90, 470, 420, 12);
  ctx.clip();
  const shown = m.msgs.filter(x => x.shown).sort((a, b) => a.t - b.t);
  ctx.font = '15px system-ui,sans-serif';
  const blocks = shown.map(x => ({ x, lines: wrap(x.text, 370) }));
  let y = 500;
  for (let i = blocks.length - 1; i >= 0; i--) {
    const b = blocks[i],
      h = b.lines.length * 19 + 26;
    y -= h + 8;
    ctx.fillStyle = 'rgba(40,60,100,.8)';
    rr(42, y, 446, h, 10);
    ctx.fill();
    drawCrew(62, y + 22, b.x.p ? b.x.p.color : '#888', 1, 0, 1, 0.5, false);
    txt(b.x.p ? b.x.p.name : 'Sistema', 84, y + 14, 13, '#9fb3c8');
    b.lines.forEach((l, j) => txt(l, 84, y + 34 + j * 19, 15, '#fff', 'left', false));
    if (y < 90) break;
  }
  ctx.restore();
  G.ps.forEach((q, i) => {
    const x = 520,
      yy = 90 + i * 46,
      w = 420,
      h = 42,
      dead = !q.alive,
      canVote = m.phase == 'vote' && p.alive && m.pv == null && q.alive;
    const hv = um(),
      over = hv.x >= x && hv.x <= x + w && hv.y >= yy && hv.y <= yy + h;
    ctx.globalAlpha = dead ? 0.4 : 1;
    ctx.fillStyle = m.pv === q.id ? '#2e7d32' : canVote && over ? '#3d5ca0' : 'rgba(40,58,95,.9)';
    rr(x, yy, w, h, 10);
    ctx.fill();
    drawCrew(x + 26, yy + 22, q.color, 1, 0, dead ? 0.6 : 1, 0.75, false);
    txt(
      q.name + (q.isP ? ' (Tú)' : ''),
      x + 56,
      yy + h / 2,
      17,
      p.imp && q.imp && q !== p ? '#ff5252' : '#fff'
    );
    if (dead)
      txt(q.ejected ? 'EXPULSADO' : 'MUERTO', x + w - 14, yy + h / 2, 13, '#ff8a80', 'right');
    if (m.phase == 'reveal' && (q.alive || q.ejected)) {
      let cx = x + w - 14;
      for (const id in m.votes)
        if (m.votes[id] == q.id) {
          ctx.fillStyle = G.ps[id].color;
          ctx.beginPath();
          ctx.arc(cx - 8, yy + h / 2, 9, 0, 6.3);
          ctx.fill();
          ctx.strokeStyle = '#000';
          ctx.lineWidth = 2;
          ctx.stroke();
          cx -= 22;
        }
    }
    ctx.globalAlpha = 1;
    if (canVote) addHit(x, yy, w, h, () => castVote(q.id), true);
  });
  const sy = 90 + 9 * 46 + 4;
  if (m.phase == 'vote' && p.alive && m.pv == null)
    uiBtn(520, sy, 200, 36, 'SALTAR VOTO', '#555', () => castVote('skip'), 16);
  if (m.pv != null && m.phase == 'vote')
    txt(
      m.pv === 'skip' ? 'Has saltado el voto' : 'Has votado',
      620,
      sy + 18,
      16,
      '#8fe39a',
      'center'
    );
  if (m.phase == 'reveal') {
    txt('Saltados: ' + (m.tally.skip || 0), 830, sy + 18, 16, '#cfd8dc', 'center');
    if (m.rt > 2.5) {
      ctx.fillStyle = 'rgba(0,0,0,.9)';
      rr(120, 230, 720, 130, 16);
      ctx.fill();
      if (m.res.id === null) txt('Nadie fue expulsado.', 480, 295, 32, '#fff', 'center');
      else {
        const e = m.res.p,
          left = G.ps.filter(q => q.alive && q.imp && q !== e).length;
        drawCrew(200, 295, e.color, 1, 0, 1, 1.4, false);
        txt(`${e.name} fue expulsado.`, 520, 270, 28, '#fff', 'center');
        txt(
          e.imp ? 'ERA un impostor.' : 'NO era un impostor.',
          520,
          305,
          24,
          e.imp ? '#69f0ae' : '#ff8a80',
          'center'
        );
        txt(
          `Quedan ${left} impostor${left == 1 ? '' : 'es'}.`,
          520,
          336,
          16,
          '#cfd8dc',
          'center',
          false
        );
      }
    }
  }
  endUI();
}
