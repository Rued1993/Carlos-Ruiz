/**
 * Motor de audio (Web Audio): buses de música y efectos, compresor, reverb, sintetizador
 * básico (tone / noise) y efectos de juego con panorama estéreo según la posición.
 */
'use strict';

const A = { ctx: null, master: null, sfx: null, mus: null, verbIn: null, noise: null };

/** Crea (una vez) el contexto de audio y la cadena de buses. */
function audioInit() {
  if (A.ctx) return A.ctx;
  try {
    const c = new (window.AudioContext || window.webkitAudioContext)();
    A.ctx = ac = c;
    A.master = c.createGain();
    A.master.gain.value = 0.9;
    const comp = c.createDynamicsCompressor();
    comp.threshold.value = -16;
    comp.ratio.value = 4;
    A.master.connect(comp);
    comp.connect(c.destination);
    A.sfx = c.createGain();
    A.mus = c.createGain();
    A.sfx.connect(A.master);
    A.mus.connect(A.master);
    const len = Math.floor(c.sampleRate * 1.6),
      buf = c.createBuffer(2, len, c.sampleRate);
    for (let ch = 0; ch < 2; ch++) {
      const d = buf.getChannelData(ch);
      for (let i = 0; i < len; i++) d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / len, 2.6);
    }
    const verb = c.createConvolver();
    verb.buffer = buf;
    A.verbIn = c.createGain();
    A.verbIn.gain.value = 0.3;
    A.verbIn.connect(verb);
    verb.connect(A.master);
    A.noise = c.createBuffer(1, c.sampleRate * 2, c.sampleRate);
    const nd = A.noise.getChannelData(0);
    for (let i = 0; i < nd.length; i++) nd[i] = Math.random() * 2 - 1;
    applyVolumes();
  } catch (e) {
    A.ctx = null;
  }
  return A.ctx;
}
function applyVolumes() {
  if (!A.ctx) return;
  A.sfx.gain.value = SAVE.volS;
  A.mus.gain.value = SAVE.volM;
}
function audioReady() {
  const c = audioInit();
  return c && c.state === 'running' ? c : null;
}
function audioRoute(g, o) {
  const c = A.ctx;
  let out = g;
  if (o.pan !== undefined && c.createStereoPanner) {
    const p = c.createStereoPanner();
    p.pan.value = clamp(o.pan, -1, 1);
    g.connect(p);
    out = p;
  }
  out.connect(o.bus || A.sfx);
  if (o.verb) {
    const s = c.createGain();
    s.gain.value = o.verb;
    out.connect(s);
    s.connect(A.verbIn);
  }
}
/** Nota sintetizada. Opciones: type, vol, attack, slide, filter, ftype, pan, verb, bus, at. */
function tone(freq, dur, o) {
  o = o || {};
  const c = audioReady();
  if (!c) return;
  const t = o.at || c.currentTime,
    osc = c.createOscillator(),
    g = c.createGain();
  osc.type = o.type || 'sine';
  osc.frequency.setValueAtTime(freq, t);
  if (o.slide) osc.frequency.exponentialRampToValueAtTime(Math.max(20, freq + o.slide), t + dur);
  g.gain.setValueAtTime(0.0001, t);
  g.gain.exponentialRampToValueAtTime(Math.max(0.0002, o.vol || 0.1), t + (o.attack || 0.005));
  g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
  let node = osc;
  if (o.filter) {
    const f = c.createBiquadFilter();
    f.type = o.ftype || 'lowpass';
    f.frequency.value = o.filter;
    osc.connect(f);
    node = f;
  }
  node.connect(g);
  audioRoute(g, o);
  osc.start(t);
  osc.stop(t + dur + 0.05);
}
/** Ráfaga de ruido filtrado. Opciones: vol, ftype, f0, f1 (barrido), q, pan, verb, bus, at. */
function noise(dur, o) {
  o = o || {};
  const c = audioReady();
  if (!c) return;
  const t = o.at || c.currentTime,
    src = c.createBufferSource(),
    f = c.createBiquadFilter(),
    g = c.createGain();
  src.buffer = A.noise;
  src.loop = true;
  f.type = o.ftype || 'lowpass';
  f.Q.value = o.q || 1;
  f.frequency.setValueAtTime(o.f0 || 2000, t);
  if (o.f1) f.frequency.exponentialRampToValueAtTime(o.f1, t + dur);
  g.gain.setValueAtTime(o.vol || 0.2, t);
  g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
  src.connect(f);
  f.connect(g);
  audioRoute(g, o);
  src.start(t, Math.random());
  src.stop(t + dur + 0.05);
}
/** Panorama y volumen según la posición del sonido respecto al jugador y la cámara. */
function spatial(x, y) {
  const p = G && G.player;
  if (!p || x === undefined) return { pan: 0, g: 1 };
  const dx = x - p.x,
    dy = y - p.y,
    d = Math.hypot(dx, dy),
    yaw = view3d ? CAM.yaw : -Math.PI / 2,
    rx = -Math.sin(yaw),
    ry = Math.cos(yaw);
  return { pan: d > 1 ? ((dx * rx + dy * ry) / d) * 0.8 : 0, g: clamp(1.1 - d / 900, 0.05, 1) };
}

/** Efectos de juego. Todos aceptan una posición opcional (x, y) para el estéreo. */
const sfx = {
  shot(kind, x, y) {
    const s = spatial(x, y),
      v = s.g;
    const big = kind === 'escopeta',
      smg = kind === 'subfusil';
    noise(big ? 0.35 : 0.18, {
      vol: (big ? 0.55 : 0.35) * v,
      f0: big ? 3200 : 5000,
      f1: 300,
      pan: s.pan,
      verb: 0.35,
    });
    tone(big ? 70 : smg ? 130 : 110, big ? 0.28 : 0.14, {
      type: 'sine',
      vol: 0.5 * v,
      slide: -50,
      pan: s.pan,
    });
    tone(big ? 900 : 1600, 0.05, { type: 'square', vol: 0.08 * v, slide: -700, pan: s.pan });
  },
  explosion(x, y) {
    const s = spatial(x, y);
    noise(0.9, { vol: 0.7 * s.g, f0: 1800, f1: 70, pan: s.pan, verb: 0.5 });
    tone(60, 0.7, { type: 'sine', vol: 0.7 * s.g, slide: -40, pan: s.pan, verb: 0.3 });
  },
  step(sprint) {
    noise(0.07, {
      vol: sprint ? 0.12 : 0.08,
      ftype: 'bandpass',
      f0: 380 + Math.random() * 160,
      f1: 160,
      q: 1.2,
    });
  },
  hit(x, y) {
    const s = spatial(x, y);
    noise(0.1, { vol: 0.28 * s.g, ftype: 'bandpass', f0: 900, f1: 250, q: 2, pan: s.pan });
    tone(160, 0.1, { type: 'triangle', vol: 0.18 * s.g, slide: -90, pan: s.pan });
  },
  hurt() {
    noise(0.25, { vol: 0.35, f0: 1200, f1: 120, verb: 0.2 });
    tone(110, 0.3, { type: 'sawtooth', vol: 0.18, slide: -60, filter: 600 });
  },
  growl(x, y, big) {
    const s = spatial(x, y);
    const f = (big ? 55 : 85) + Math.random() * 25;
    tone(f, big ? 1.1 : 0.7, {
      type: 'sawtooth',
      vol: 0.2 * s.g,
      slide: -f * 0.4,
      filter: 420,
      attack: 0.08,
      pan: s.pan,
      verb: 0.3,
    });
    noise(0.5, { vol: 0.08 * s.g, ftype: 'bandpass', f0: 500, f1: 250, q: 3, pan: s.pan });
  },
  reload() {
    tone(260, 0.06, { type: 'square', vol: 0.1, filter: 1800 });
    tone(180, 0.09, {
      type: 'square',
      vol: 0.1,
      filter: 1400,
      at: A.ctx && A.ctx.currentTime + 0.14,
    });
  },
  pickup() {
    tone(660, 0.12, { type: 'triangle', vol: 0.16 });
    tone(990, 0.16, { type: 'triangle', vol: 0.14, at: A.ctx && A.ctx.currentTime + 0.08 });
  },
  ui() {
    tone(520, 0.05, { type: 'triangle', vol: 0.1 });
  },
  thunder() {
    noise(2.2, { vol: 0.6, f0: 500, f1: 40, verb: 0.7 });
  },
  chop() {
    noise(0.09, { vol: 0.25, ftype: 'bandpass', f0: 700, f1: 300, q: 2.5 });
    tone(140 + Math.random() * 30, 0.08, { type: 'triangle', vol: 0.18, slide: -60 });
  },
};

// lluvia: ruido filtrado en bucle cuyo volumen sigue a la intensidad
let rainNode = null;
function rainSound(intensity) {
  const c = audioReady();
  if (!c) return;
  if (!rainNode) {
    const src = c.createBufferSource(),
      f = c.createBiquadFilter(),
      g = c.createGain();
    src.buffer = A.noise;
    src.loop = true;
    f.type = 'highpass';
    f.frequency.value = 1400;
    g.gain.value = 0;
    src.connect(f);
    f.connect(g);
    g.connect(A.sfx);
    src.start();
    rainNode = g;
  }
  rainNode.gain.setTargetAtTime(intensity * 0.12, c.currentTime, 0.4);
}
