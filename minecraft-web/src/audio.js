// Sonidos sintetizados con WebAudio (sin archivos).
let ctx = null, noiseBuf = null, master = null;
export let volume = 0.5;

function init() {
  if (ctx) return true;
  try {
    ctx = new (window.AudioContext || window.webkitAudioContext)();
    master = ctx.createGain(); master.gain.value = volume; master.connect(ctx.destination);
    noiseBuf = ctx.createBuffer(1, ctx.sampleRate, ctx.sampleRate);
    const d = noiseBuf.getChannelData(0);
    for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
    return true;
  } catch { return false; }
}
export function unlock() { if (init() && ctx.state === 'suspended') ctx.resume(); }
export function setVolume(v) { volume = v; if (master) master.gain.value = v; }

function noise(dur, freq, q, gain, sweep = 0) {
  if (!init()) return;
  const t = ctx.currentTime;
  const s = ctx.createBufferSource(); s.buffer = noiseBuf;
  const f = ctx.createBiquadFilter(); f.type = 'lowpass'; f.frequency.setValueAtTime(freq, t);
  if (sweep) f.frequency.exponentialRampToValueAtTime(Math.max(40, freq * sweep), t + dur);
  f.Q.value = q;
  const g = ctx.createGain(); g.gain.setValueAtTime(gain, t); g.gain.exponentialRampToValueAtTime(0.001, t + dur);
  s.connect(f); f.connect(g); g.connect(master); s.start(t, Math.random() * 0.5, dur);
}
function tone(type, f0, f1, dur, gain) {
  if (!init()) return;
  const t = ctx.currentTime;
  const o = ctx.createOscillator(); o.type = type;
  o.frequency.setValueAtTime(f0, t); o.frequency.exponentialRampToValueAtTime(f1, t + dur);
  const g = ctx.createGain(); g.gain.setValueAtTime(gain, t); g.gain.exponentialRampToValueAtTime(0.001, t + dur);
  o.connect(g); g.connect(master); o.start(t); o.stop(t + dur);
}
let amb = null;
function ensureAmbient() {
  if (amb || !init()) return amb;
  const mk = (type, freq, q) => {
    const s = ctx.createBufferSource(); s.buffer = noiseBuf; s.loop = true;
    const f = ctx.createBiquadFilter(); f.type = type; f.frequency.value = freq; f.Q.value = q;
    const g = ctx.createGain(); g.gain.value = 0;
    s.connect(f); f.connect(g); g.connect(master); s.start(0, Math.random() * 0.5);
    return { f, g };
  };
  amb = { rain: mk('highpass', 1800, 0.3), rainLow: mk('lowpass', 5000, 0.3), wind: mk('bandpass', 420, 0.9) };
  return amb;
}
// rain / wind en 0..1; phase mueve el timbre del viento
export function setAmbient(rain, wind, phase = 0) {
  if (!ctx || ctx.state !== 'running') return;
  const a = ensureAmbient(); if (!a) return;
  const t = ctx.currentTime;
  a.rain.g.gain.setTargetAtTime(rain * 0.16, t, 0.3);
  a.rainLow.g.gain.setTargetAtTime(rain * 0.12, t, 0.3);
  a.wind.g.gain.setTargetAtTime(wind * 0.5, t, 0.4);
  a.wind.f.frequency.setTargetAtTime(300 + 380 * (0.5 + 0.5 * Math.sin(phase)) + wind * 200, t, 0.3);
}
export function play(name, vol = 1) {
  if (!ctx) return;
  switch (name) {
    case 'break': noise(0.16, 1400, 1, 0.9, 0.4); break;
    case 'place': noise(0.09, 900, 1, 0.7); break;
    case 'step': noise(0.07, 500, 1, 0.25); break;
    case 'hit': noise(0.08, 2200, 1, 0.5); break;
    case 'hurt': tone('square', 330, 110, 0.22, 0.25); break;
    case 'pop': tone('sine', 500, 1100, 0.1, 0.2); break;
    case 'eat': noise(0.07, 1800, 2, 0.6); setTimeout(() => noise(0.07, 1600, 2, 0.6), 110); break;
    case 'splash': noise(0.3, 2500, 0.5, 0.6, 0.2); break;
    case 'hiss': noise(0.6, 6000, 0.5, 0.4); break;
    case 'explode': noise(1.1, 900, 0.7, 1.4, 0.1); tone('sine', 90, 30, 0.8, 0.9); break;
    case 'craft': tone('triangle', 400, 800, 0.15, 0.25); break;
    case 'die': tone('sawtooth', 300, 40, 0.8, 0.3); break;
    case 'oink': tone('sawtooth', 220, 150, 0.15, 0.12); break;
    case 'moo': tone('sawtooth', 130, 100, 0.5, 0.12); break;
    case 'thunder': noise(3.2, 380, 0.7, 1.6 * vol, 0.12); setTimeout(() => noise(1.6, 220, 0.8, 0.9 * vol, 0.2), 450); tone('sine', 60, 25, 2, 0.5 * vol); break;
    case 'roar': noise(1.5, 500, 0.8, 0.9 * vol, 0.15); tone('sawtooth', 95, 32, 1.5, 0.45 * vol); break;
    case 'shoot': noise(0.3, 3200, 0.8, 0.45 * vol, 0.25); tone('sine', 700, 180, 0.25, 0.2 * vol); break;
    case 'groan': tone('sawtooth', 110, 70, 0.6, 0.14); break;
  }
}
