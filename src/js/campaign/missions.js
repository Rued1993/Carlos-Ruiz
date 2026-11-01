/**
 * Motor de misiones: objetivos, eventos, estrellas, historia y jefe.
 */
'use strict';

function levelUnlocked(i) {
  return i == 0 || (SAVE.stars[LEVELS[i - 1].id] || 0) > 0;
}
function launchMission(def) {
  stopSpeech();
  gmode = def.mode;
  if (def.mode === 'classic') nImp = def.cfg.nImp || 2;
  CAMP = CAMP || { kind: 'level', idx: 0 };
  CAMP.def = def;
  newGame(def.cfg);
  G.M = {
    def,
    goals: def.goals.map(g => ({ k: g.k, need: g.need, text: g.text, cur: 0, done: false })),
    t: 0,
    over: false,
    win: false,
    stars: 0,
  };
  if (def.mode === 'sandbox') {
    G.banner = def.name.toUpperCase();
    G.bannerSub = def.desc;
    G.bannerT = 6;
  }
  toast('Misión: ' + def.name, 3);
}
function mevent(k, n) {
  n = n || 1;
  track(k, n);
  const M = G && G.M;
  if (!M || M.over || M.win) return;
  for (const g of M.goals)
    if (g.k === k && !g.done) {
      g.cur = Math.min(g.need, g.cur + n);
      if (g.cur >= g.need) {
        g.done = true;
        toast('✔ Objetivo: ' + g.text, 3);
        beep(800, 0.15, 'sine', 0.08, 400);
      }
    }
  if (M.goals.every(g => g.done)) M.win = true;
}
function missionTick(dt) {
  const M = G.M;
  if (M.over) return;
  const act =
    scene === 'play' ||
    scene === 'task' ||
    scene === 'sab' ||
    scene === 'craft' ||
    scene === 'cams';
  if (act && G.intro <= 0) {
    M.t += dt;
    if (M.def.limit && M.t >= M.def.limit) {
      missionEnd(false);
      return;
    }
  }
  if (M.win && act) {
    missionEnd(true);
    return;
  }
  if (scene === 'end' && G.over) {
    const w = G.over.winner;
    missionEnd(G.mode === 'zombie' ? w === 'zwin' : w == (G.player.imp ? 'imp' : 'crew'));
  }
}
function missionEnd(ok) {
  const M = G.M;
  if (M.over) return;
  M.over = true;
  M.ok = ok;
  stopSpeech();
  let st = 0;
  if (ok) {
    st = 1;
    if (M.t <= M.def.par) st = 2;
    if (M.t <= M.def.par * 0.7) st = 3;
  }
  M.stars = st;
  if (ok) {
    SAVE.stars[M.def.id] = Math.max(SAVE.stars[M.def.id] || 0, st);
    if (CAMP && CAMP.kind === 'story') SAVE.story = Math.max(SAVE.story, CAMP.idx + 1);
    saveGame();
    checkCustomAch();
  }
  scene = 'mend';
  M.at = 0;
  beep(ok ? 700 : 120, 0.8, ok ? 'triangle' : 'sawtooth', 0.12);
}
function startStory(i) {
  CAMP = { kind: 'story', idx: i, def: CHAPTERS[i] };
  const ch = CHAPTERS[i];
  playCut(ch.intro, () => launchMission(ch));
}
/** Pantalla a la que se vuelve desde una misión según su origen. */
function backScene() {
  return CAMP && CAMP.kind === 'story'
    ? 'story'
    : CAMP && CAMP.kind === 'daily'
      ? 'menu'
      : 'levels';
}
function missionNext() {
  if (CAMP.kind === 'daily') {
    scene = 'menu';
    return;
  }
  if (CAMP.kind === 'story') {
    const i = CAMP.idx,
      ch = CHAPTERS[i];
    playCut(ch.outro, () => {
      if (i + 1 < CHAPTERS.length) startStory(i + 1);
      else scene = 'menu';
    });
  } else {
    const i = CAMP.idx + 1;
    if (i < LEVELS.length && levelUnlocked(i)) {
      CAMP = { kind: 'level', idx: i, def: LEVELS[i] };
      launchMission(LEVELS[i]);
    } else scene = 'levels';
  }
}
function spawnBoss() {
  const g = G,
    p = g.player;
  let c = NODES.map((v, i) => i).filter(
    i => Math.hypot(NODES[i][0] - p.x, NODES[i][1] - p.y) > 700
  );
  if (!c.length) c = [0];
  const i = pick(c);
  g.zs.push({
    x: NODES[i][0],
    y: NODES[i][1],
    hp: 340,
    max: 340,
    sp: 92,
    scale: 1.9,
    boss: true,
    face: 1,
    step: 0,
    cd: 1,
    path: [],
    pt: 0,
    stuck: 0,
  });
  g.bossDead = false;
}
