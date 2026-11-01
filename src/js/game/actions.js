/**
 * Acciones del jugador: matar, usar, reportar, ventilaciones, victoria/derrota.
 */
'use strict';

function witnessAt(k, what, r = 330) {
  for (const w of G.ps)
    if (w.alive && !w.imp && !w.isP && w !== k && dist(w, k) < r) {
      w.sus[k.id] = 100;
      w.saw = k.id;
      w.sawWhat = what;
    }
}
function kill(k, v) {
  v.alive = false;
  G.bodies.push({ x: v.x, y: v.y, id: v.id, color: v.color });
  G.blood.push({
    x: v.x,
    y: v.y + 14,
    r: rnd(30, 42),
    dots: Array.from({ length: 9 }, () => [rnd(-60, 60), rnd(-30, 40), rnd(2, 6)]),
  });
  burst(v.x, v.y, 26, '#7a0b0b', 200);
  k.x = v.x;
  k.y = v.y;
  k.kcd = KCD;
  k.hunt = null;
  k.path = [];
  witnessAt(k, 'kill');
  if (k.isP) mevent('pkill');
  beep(110, 0.35, 'sawtooth', 0.12, -60);
  G.shake = 0.5;
  if (v.isP) {
    G.deadT = 3.5;
    G.flash = 1;
  }
  checkWin();
}
function checkWin() {
  if (G.over) return;
  const al = G.ps.filter(p => p.alive),
    im = al.filter(p => p.imp).length,
    cr = al.length - im;
  if (im == 0) endGame('crew');
  else if (im >= cr) endGame('imp');
  else if (G.done >= G.total) endGame('crew');
}
function endGame(w) {
  G.over = { winner: w };
  scene = 'end';
  beep(w == (G.player.imp ? 'imp' : 'crew') ? 600 : 150, 0.9, 'triangle', 0.1);
}
function openTask(type, title, icon, done) {
  const t = {
    type,
    title,
    icon,
    done,
    prog: 0,
    doneT: 0,
    next: 1,
    flash: 0,
    hits: 0,
    sel: null,
    conn: [],
  };
  if (type == 'numbers') t.cells = shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  if (type == 'wires') {
    t.right = shuffle([0, 1, 2, 3]);
    t.cols = ['#e53935', '#1e88e5', '#fdd835', '#43a047'];
  }
  if (type == 'slider') {
    t.mk = 0;
    t.dir = 1;
    t.speed = 260;
    t.zone = rnd(60, 400);
  }
  if (type == 'keypad') {
    t.code = Array.from({ length: 4 }, () => 1 + Math.floor(Math.random() * 9)).join('');
    t.entry = '';
  }
  if (type == 'simon') {
    t.seq = Array.from({ length: 5 }, () => Math.floor(Math.random() * 4));
    t.len = 1;
    t.pos = 0;
    t.show = 1.1;
    t.lit = -1;
  }
  if (type == 'switches') {
    do {
      t.sw = [0, 1, 2, 3, 4].map(() => Math.random() < 0.5);
    } while (t.sw.every(v => v));
  }
  G.task = t;
  scene = 'task';
}
function doUse() {
  if (scene !== 'play' || G.intro > 0) return;
  const p = G.player;
  if (p.inVent !== null) {
    exitVent();
    return;
  }
  if (G.mode === 'zombie') {
    if (G.nearBag) openBag(G.nearBag);
    else if (G.nearPod) {
      mevent('escape');
      endZombie('zwin');
    } else if (G.nearCam) {
      scene = 'cams';
      G.camT = 0;
    }
    return;
  }
  if (G.nearFix) {
    const f = G.nearFix;
    openTask(f.type, f.title, f.icon, () => {
      fixSab(f.key);
      mevent('fix');
    });
    return;
  }
  if (G.nearSt != null) {
    if (p.imp) {
      toast('Finges hacer la tarea… (los impostores no las completan)');
      return;
    }
    const i = G.nearSt,
      st = STATIONS[i];
    openTask(st.type, st.name, st.icon, () => {
      const t = p.tasks.find(t => t.st == i && !t.done);
      if (t) {
        t.done = true;
        G.done++;
      }
      toast('Tarea completada');
      mevent('task');
      checkWin();
    });
    return;
  }
  if (G.nearCam) {
    scene = 'cams';
    G.camT = 0;
    return;
  }
  if (G.nearBtn) {
    p.emerg--;
    startMeeting(p, null);
  }
}
/** Emotes del jugador: 1 saludar, 2 bailar, 3 señalar (se cancelan al moverse). */
function doEmote(i) {
  if (scene !== 'play' || !G || G.intro > 0 || !G.player.alive) return;
  G.emote = { i, t: 3 };
  sfx.ui();
}
function doReport() {
  if (scene === 'play' && G.intro <= 0 && G.player.alive && G.nearBody && G.player.inVent === null)
    startMeeting(G.player, G.nearBody);
}
function doKill() {
  const p = G.player;
  if (
    scene === 'play' &&
    G.intro <= 0 &&
    p.imp &&
    p.alive &&
    p.kcd <= 0 &&
    G.nearVic &&
    p.inVent === null
  )
    kill(p, G.nearVic);
}
function enterVent() {
  const p = G.player;
  if (!(p.imp && p.alive && G.nearVent !== null && p.inVent === null)) return;
  witnessAt(p, 'vent', 300);
  p.inVent = G.nearVent;
  p.x = VENTS[p.inVent].x;
  p.y = VENTS[p.inVent].y;
  burst(p.x, p.y, 10, '#999', 80);
  beep(200, 0.2, 'sawtooth', 0.08, -100);
}
function exitVent() {
  const p = G.player;
  if (p.inVent === null) return;
  witnessAt(p, 'vent', 300);
  p.inVent = null;
  burst(p.x, p.y, 10, '#999', 80);
  beep(260, 0.2, 'sawtooth', 0.08, -100);
}
function cycleVent(d) {
  const p = G.player;
  if (p.inVent === null) return;
  const g = VENTS[p.inVent].g,
    l = VENTS.map((v, i) => i).filter(i => VENTS[i].g == g),
    k = l.indexOf(p.inVent);
  p.inVent = l[(k + d + l.length) % l.length];
  p.x = VENTS[p.inVent].x;
  p.y = VENTS[p.inVent].y;
  beep(180, 0.08, 'square', 0.04);
}
function toggleVent() {
  if (G.player.inVent !== null) exitVent();
  else enterVent();
}
function openSabMenu() {
  const p = G.player;
  if (scene === 'play' && G.intro <= 0 && p.imp && p.alive && p.inVent === null) scene = 'sab';
}
