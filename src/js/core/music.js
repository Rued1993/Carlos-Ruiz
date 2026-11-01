/**
 * Música procedural adaptativa. Un secuenciador con "lookahead" programa notas en el reloj
 * de Web Audio; cada ambiente define su tempo y cómo suena cada paso.
 */
'use strict';

const NOTE = n => 440 * Math.pow(2, (n - 69) / 12); // número MIDI -> Hz
const MUSIC = { mood: null, step: 0, next: 0 };

/** Ambientes: [duración del paso en s, función(paso, instante)] */
const MOODS = {
  menu: [
    0.3,
    (s, t) => {
      const prog = [
          [57, 60, 64],
          [53, 57, 60],
          [48, 52, 55],
          [55, 59, 62],
        ], // Am F C G
        chord = prog[Math.floor(s / 16) % 4],
        arp = [0, 1, 2, 1, 2, 1, 0, 2];
      if (s % 16 === 0)
        chord.forEach(n =>
          tone(NOTE(n), 4.6, {
            type: 'triangle',
            vol: 0.05,
            attack: 0.6,
            filter: 900,
            at: t,
            bus: A.mus,
            verb: 0.5,
          })
        );
      if (s % 2 === 0)
        tone(NOTE(chord[arp[(s / 2) % 8]] + 12), 0.9, {
          type: 'sine',
          vol: 0.07,
          at: t,
          bus: A.mus,
          verb: 0.6,
        });
      if (s % 8 === 0) tone(NOTE(chord[0] - 12), 2, { type: 'sine', vol: 0.12, at: t, bus: A.mus });
    },
  ],
  cut: [
    1.2,
    (s, t) => {
      const root = [45, 41, 43, 40][Math.floor(s / 6) % 4];
      if (s % 6 === 0) {
        tone(NOTE(root), 8, {
          type: 'sawtooth',
          vol: 0.04,
          attack: 1.5,
          filter: 420,
          at: t,
          bus: A.mus,
          verb: 0.6,
        });
        tone(NOTE(root + 7), 8, {
          type: 'triangle',
          vol: 0.05,
          attack: 2,
          at: t,
          bus: A.mus,
          verb: 0.6,
        });
      }
      if (s % 5 === 2)
        tone(NOTE(root + 24 + [0, 3, 7, 10][s % 4]), 2.4, {
          type: 'sine',
          vol: 0.05,
          at: t,
          bus: A.mus,
          verb: 0.8,
        });
    },
  ],
  classic: [
    0.5,
    (s, t) => {
      if (s % 8 === 0 || s % 8 === 1.5)
        tone(46, 0.35, { type: 'sine', vol: 0.22, slide: -14, at: t, bus: A.mus });
      if (s % 8 === 1) tone(46, 0.3, { type: 'sine', vol: 0.15, slide: -14, at: t, bus: A.mus });
      if (s % 16 === 4)
        tone(NOTE(81 + [0, 3, -2, 5][((s / 16) % 4) | 0]), 1.8, {
          type: 'sine',
          vol: 0.03,
          at: t,
          bus: A.mus,
          verb: 0.9,
        });
      if (s % 32 === 0)
        tone(NOTE(33), 12, {
          type: 'sawtooth',
          vol: 0.025,
          attack: 3,
          filter: 260,
          at: t,
          bus: A.mus,
        });
    },
  ],
  sab: [
    0.25,
    (s, t) => {
      if (s % 2 === 0)
        tone(NOTE(33 + (s % 8 === 0 ? 0 : 12)), 0.22, {
          type: 'sawtooth',
          vol: 0.1,
          filter: 500,
          at: t,
          bus: A.mus,
        });
      if (s % 8 === 4) noise(0.15, { vol: 0.05, ftype: 'highpass', f0: 6000, at: t, bus: A.mus });
    },
  ],
  zombie_calm: [
    0.6,
    (s, t) => {
      if (s % 8 === 0)
        tone(NOTE(40), 4.5, {
          type: 'sawtooth',
          vol: 0.04,
          attack: 1.2,
          filter: 300,
          at: t,
          bus: A.mus,
          verb: 0.5,
        });
      if (s % 8 === 4)
        tone(NOTE(52 + [0, 3, 7][((s / 8) % 3) | 0]), 2.2, {
          type: 'triangle',
          vol: 0.05,
          at: t,
          bus: A.mus,
          verb: 0.7,
        });
    },
  ],
  zombie: [
    0.15,
    (s, t) => {
      const bar = Math.floor(s / 16) % 4,
        bass = [40, 40, 43, 38][bar],
        z = G && G.zs ? G.zs.length : 0;
      if (s % 8 === 0 || s % 16 === 10)
        tone(52, 0.22, { type: 'sine', vol: 0.42, slide: -30, at: t, bus: A.mus });
      if (s % 2 === 1) noise(0.04, { vol: 0.05, ftype: 'highpass', f0: 7000, at: t, bus: A.mus });
      if (s % 4 === 0 || s % 4 === 3)
        tone(NOTE(bass), 0.16, { type: 'sawtooth', vol: 0.08, filter: 420, at: t, bus: A.mus });
      if (z >= 5 && s % 16 === 8)
        noise(0.16, { vol: 0.18, ftype: 'bandpass', f0: 1800, q: 0.8, at: t, bus: A.mus });
      if (z >= 8 && s % 8 === 6)
        tone(NOTE(bass + 24 + [0, 3, 5, 7][s % 4]), 0.3, {
          type: 'square',
          vol: 0.03,
          filter: 1400,
          at: t,
          bus: A.mus,
          verb: 0.3,
        });
    },
  ],
  sand_day: [
    0.55,
    (s, t) => {
      const pent = [60, 62, 64, 67, 69, 72];
      if (s % 4 === 0)
        tone(NOTE(48 + [0, 5, 7, 5][((s / 4) % 4) | 0]), 2.2, {
          type: 'triangle',
          vol: 0.06,
          attack: 0.3,
          at: t,
          bus: A.mus,
          verb: 0.5,
        });
      if (Math.sin(s * 12.9898) > 0.1)
        tone(NOTE(pent[Math.abs((s * 7) % 6)]), 1.6, {
          type: 'sine',
          vol: 0.06,
          at: t,
          bus: A.mus,
          verb: 0.7,
        });
    },
  ],
  night99: [
    0.9,
    (s, t) => {
      if (s % 8 === 0)
        tone(NOTE(31), 7, {
          type: 'sawtooth',
          vol: 0.05,
          attack: 2,
          filter: 220,
          at: t,
          bus: A.mus,
        });
      if (s % 8 === 4)
        tone(NOTE(32), 6, { type: 'sine', vol: 0.09, attack: 1.5, at: t, bus: A.mus, verb: 0.6 });
      if (s % 11 === 5)
        tone(NOTE(70 + [0, 1, 6][((s / 11) % 3) | 0]), 2.6, {
          type: 'triangle',
          vol: 0.025,
          attack: 1,
          at: t,
          bus: A.mus,
          verb: 1,
        });
      if (s % 17 === 9) {
        // búho lejano
        tone(420, 0.35, { type: 'sine', vol: 0.03, slide: -60, at: t, bus: A.mus, verb: 0.8 });
        tone(400, 0.5, {
          type: 'sine',
          vol: 0.03,
          slide: -70,
          at: t + 0.45,
          bus: A.mus,
          verb: 0.8,
        });
      }
    },
  ],
  sand_night: [
    0.8,
    (s, t) => {
      if (s % 6 === 0) tone(NOTE(33), 5, { type: 'sine', vol: 0.12, attack: 1, at: t, bus: A.mus });
      if (s % 6 === 3)
        tone(NOTE(57 + [0, 1, 3][((s / 6) % 3) | 0]), 3, {
          type: 'triangle',
          vol: 0.04,
          attack: 0.8,
          at: t,
          bus: A.mus,
          verb: 0.9,
        });
    },
  ],
};
function currentMood() {
  if (scene === 'cut') return 'cut';
  if (['menu', 'free', 'levels', 'brief', 'story', 'wardrobe', 'achv'].includes(scene))
    return 'menu';
  if (!G || !['play', 'task', 'sab', 'craft', 'cams', 'pause', 'shop'].includes(scene)) return null;
  if (G.mode === 'zombie') return G.wave && G.wave.state === 'run' ? 'zombie' : 'zombie_calm';
  if (G.mode === 'sandbox')
    return G.dark > 0.5 ? (G.nights ? 'night99' : 'sand_night') : 'sand_day';
  return G.sab ? 'sab' : 'classic';
}
function musicTick() {
  if (!SAVE.music) return;
  const c = audioReady();
  if (!c) return;
  const mood = currentMood();
  if (mood !== MUSIC.mood) {
    MUSIC.mood = mood;
    MUSIC.step = 0;
    MUSIC.next = c.currentTime + 0.1;
  }
  if (!mood) return;
  const [dur, fn] = MOODS[mood];
  let guard = 0;
  while (MUSIC.next < c.currentTime + 0.25 && guard++ < 16) {
    fn(MUSIC.step++, MUSIC.next);
    MUSIC.next += dur;
  }
  if (MUSIC.next < c.currentTime) MUSIC.next = c.currentTime + 0.05;
}
