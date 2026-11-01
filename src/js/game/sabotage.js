/**
 * Sabotajes (luces, reactor, puertas) y respuesta de los bots.
 */
'use strict';

function startSab(type) {
  if (type == 'doors') {
    G.doorsT = 12;
    toast('¡SABOTAJE! Puertas bloqueadas');
    beep(100, 0.5, 'sawtooth', 0.1);
  } else {
    G.sab = type == 'lights' ? { type } : { type, t: 45, a: false, b: false };
    G.dispatchT = rnd(3, 6);
    toast(type == 'lights' ? '¡SABOTAJE! Luces apagadas' : '¡ALERTA! REACTOR CRÍTICO', 3);
  }
  G.shake = 0.6;
  beep(90, 0.6, 'sawtooth', 0.12);
}
function fixPts() {
  const s = G.sab;
  if (!s) return [];
  if (s.type == 'lights') return FIXL;
  return FIXR.filter(f => !s['fixed' + f.key]);
}
function fixSab(key) {
  const s = G.sab;
  if (!s) return;
  if (s.type == 'lights' && key == 'L') {
    G.sab = null;
    toast('Luces restablecidas');
    beep(700, 0.3, 'sine', 0.08, 300);
  } else if (s.type == 'reactor') {
    s['fixed' + key] = true;
    beep(700, 0.2, 'sine', 0.08, 300);
    if (s.fixedA && s.fixedB) {
      G.sab = null;
      toast('Reactor estabilizado');
    } else toast('Reactor: falta el otro panel');
  }
}
function dispatch() {
  const s = G.sab;
  if (!s) return;
  const used = new Set();
  const send = (f, node) => {
    let best = null,
      bd = 1e9;
    for (const c of G.ps)
      if (c.alive && !c.imp && !c.isP && !used.has(c)) {
        const d = dist(c, f);
        if (d < bd) {
          bd = d;
          best = c;
        }
      }
    if (!best) return;
    used.add(best);
    best.wait = 0;
    best.onDone = null;
    const path = route(best.node, node).map(i => ({ x: NODES[i][0], y: NODES[i][1], node: i }));
    path.push({ x: f.x, y: f.y, fix: f.key });
    best.path = path;
  };
  if (s.type == 'lights') send(FIXL[0], 16);
  else {
    if (!s.fixedA) send(FIXR[0], 8);
    if (!s.fixedB) send(FIXR[1], 10);
  }
}
