/**
 * Creación de la partida clásica (Among Us): jugadores, roles, tareas.
 */
'use strict';

function newGame(cfg) {
  gmode === 'zombie' ? newZombie(cfg) : gmode === 'sandbox' ? newSandbox(cfg) : newClassic(cfg);
}
function newClassic(cfg) {
  if (!MAP) buildMap();
  const ps = COLORS.map((c, i) => ({
    id: i,
    color: c[0],
    name: c[1],
    isP: i == 0,
    alive: true,
    imp: false,
    x: 0,
    y: 0,
    face: 1,
    step: 0,
    moving: false,
    tasks: [],
    path: [],
    wait: 0,
    onDone: null,
    node: 2,
    sus: {},
    kcd: 12,
    stuck: 0,
    saw: null,
    sawWhat: null,
    emerg: 1,
    hunt: null,
    huntT: 0,
    room: '',
    inVent: null,
    aim: 0,
  }));
  {
    const c = cfg || {},
      n = c.nImp || nImp,
      order = shuffle([...ps.keys()]);
    let idx = order;
    if (c.role === 'crew') idx = order.filter(i => i !== 0);
    else if (c.role === 'imp') idx = [0, ...order.filter(i => i !== 0)];
    idx.slice(0, n).forEach(i => (ps[i].imp = true));
  }
  for (const p of ps)
    p.tasks = shuffle([...STATIONS.keys()])
      .slice(0, 4)
      .map(s => ({ st: s, done: false }));
  G = {
    mode: 'classic',
    ps,
    player: ps[0],
    bodies: [],
    blood: [],
    parts: [],
    total: ps.filter(p => !p.imp).length * 4,
    done: 0,
    t: 0,
    intro: 5,
    toast: '',
    toastT: 0,
    meet: null,
    over: null,
    flash: 0,
    meetCD: 12,
    task: null,
    deadT: 0,
    nearSt: null,
    nearBody: null,
    nearVic: null,
    nearBtn: false,
    nearFix: null,
    nearCam: false,
    nearVent: null,
    sab: null,
    sabCD: 25,
    doorsT: 0,
    dispatchT: 0,
    botSabT: 60,
    shake: 0,
    stepT: 0,
    hb: 0,
    alarmT: 0,
    sparkT: 0,
    camT: 0,
  };
  spawn();
  G.botSabT = (cfg && cfg.sabFast ? 18 : 60) * diff().sab;
  scene = 'play';
  startDrone();
  beep(300, 0.5, 'sine', 0.08, 200);
}
function spawn() {
  G.ps.forEach((p, i) => {
    const a = (i / 9) * Math.PI * 2;
    p.x = 1200 + Math.cos(a) * 170;
    p.y = 300 + Math.sin(a) * 105;
    p.node = 2;
    p.path = [];
    p.wait = 0;
    p.onDone = null;
    p.hunt = null;
    p.stuck = 0;
    p.inVent = null;
    p.kcd = Math.max(p.kcd, 12);
  });
}
function toast(s, t = 2.4) {
  G.toast = s;
  G.toastT = t;
}
function burst(x, y, n, col, sp = 140, life = 0.7) {
  for (let i = 0; i < n; i++) {
    const a = Math.random() * 6.3,
      s = rnd(20, sp);
    G.parts.push({
      x,
      y,
      vx: Math.cos(a) * s,
      vy: Math.sin(a) * s - 30,
      life: rnd(0.3, life),
      max: life,
      col,
      sz: rnd(1.5, 3.5),
    });
  }
}
