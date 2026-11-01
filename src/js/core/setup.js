/**
 * Canvas 2D (HUD/UI) + canvas auxiliar de luz, tamaño y DPR.
 */
'use strict';

const cv = document.getElementById('c'),
  ctx = cv.getContext('2d');
const lc = document.createElement('canvas'),
  lx = lc.getContext('2d');
let W = 0,
  H = 0,
  dpr = 1;
function resize() {
  dpr = Math.min(devicePixelRatio || 1, 2);
  W = innerWidth;
  H = innerHeight;
  cv.width = W * dpr;
  cv.height = H * dpr;
  lc.width = W;
  lc.height = H;
}
addEventListener('resize', resize);
resize();
