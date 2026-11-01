/**
 * Motor de cinemáticas (diálogos con texto progresivo y voz).
 */
'use strict';

function playCut(id, then) {
  const pages = [];
  let bg = 'space',
    cast = [];
  for (const p of CUTS[id]) {
    bg = p.bg || bg;
    cast = p.cast || cast;
    pages.push(Object.assign({}, p, { bg, cast }));
  }
  CUT = { id, pages, i: 0, chars: 0, then };
  scene = 'cut';
  cutEnter();
}
function cutEnter() {
  const pg = CUT.pages[CUT.i];
  CUT.chars = 0;
  stopSpeech();
  speak(pg.t, voiceFor(pg.w));
  if (R3 && R3.stage) {
    if (pg.fx === 'flash') R3.stage.flash = 1;
    if (pg.fx === 'shake') R3.stage.shake = 1.2;
  }
}
function cutAdvance() {
  const pg = CUT.pages[CUT.i];
  if (CUT.chars < pg.t.length) {
    CUT.chars = pg.t.length;
    return;
  }
  if (CUT.i + 1 >= CUT.pages.length) {
    cutSkip();
    return;
  }
  CUT.i++;
  cutEnter();
}
function cutSkip() {
  stopSpeech();
  const f = CUT && CUT.then;
  CUT = null;
  scene = 'menu';
  if (R3 && R3.stage) R3.stage.key = null;
  f && f();
}
