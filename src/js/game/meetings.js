/**
 * Reuniones: chat, sospechas, votación y expulsión.
 */
'use strict';

function startMeeting(caller, body) {
  if (G.over) return;
  if (scene === 'task') G.task = null;
  const ps = G.ps,
    al = ps.filter(p => p.alive);
  ps.forEach(p => (p.room = roomOf(p.x, p.y)));
  if (G.player.inVent !== null) G.player.inVent = null;
  if (body) {
    for (const b of al)
      if (!b.imp && !b.isP && dist(b, body) < 520)
        for (const q of al)
          if (q !== b && dist(q, body) < 320) b.sus[q.id] = (b.sus[q.id] || 0) + 30;
  }
  const m = {
    caller,
    phase: 'discuss',
    t: 0,
    vt: 25,
    msgs: [],
    votes: {},
    pv: null,
    rt: 0,
    res: null,
    body: !!body,
    revealIn: null,
  };
  const addSus = (id, v) =>
    ps.forEach(b => {
      if (!b.isP && !b.imp && b.alive) b.sus[id] = (b.sus[id] || 0) + v;
    });
  const say = (p, t, text, fx) => m.msgs.push({ t, p, text, fx, shown: false });
  if (!caller.isP)
    say(
      caller,
      0.6,
      body
        ? `¡Encontré un cuerpo en ${roomOf(body.x, body.y)}!`
        : caller.saw != null
          ? `¡Vi algo raro, hay que hablar!`
          : '¡Reunión de emergencia!'
    );
  else
    m.msgs.push({
      t: 0.2,
      p: null,
      text: body ? 'Has reportado un cuerpo.' : 'Has llamado a una reunión de emergencia.',
      shown: false,
    });
  let kk = 0;
  for (const b of al) {
    if (b.isP) continue;
    const t = 2.2 + kk++ * 2.5 + rnd(0, 0.6);
    if (!b.imp && b.saw != null) {
      const k = ps[b.saw];
      say(
        b,
        t,
        b.sawWhat == 'vent'
          ? `¡Vi a ${k.name} salir de la ventilación! ¡Es el impostor!`
          : `¡Vi a ${k.name} matar! ¡Voten ${k.name}!`,
        () => addSus(k.id, 80)
      );
    } else if (b === caller && caller.saw == null) {
    } else if (!b.imp) {
      let best = null,
        bs = 0;
      for (const o of al)
        if (o !== b) {
          const s = b.sus[o.id] || 0;
          if (s > bs) {
            bs = s;
            best = o;
          }
        }
      if (best && bs >= 30)
        say(b, t, `${best.name} estaba cerca del cuerpo… sospechoso.`, () => addSus(best.id, 15));
      else
        say(
          b,
          t,
          pick([
            `Yo estaba en ${b.room}, no vi nada.`,
            `Estaba haciendo tareas en ${b.room}.`,
            'No sé qué pasó…',
          ])
        );
    } else {
      const v = pick(al.filter(o => !o.imp));
      if (v)
        say(
          b,
          t,
          pick([
            `Sospecho de ${v.name}.`,
            `${v.name} se veía raro…`,
            `Yo estaba en ${b.room}. ${v.name} andaba por ahí.`,
          ]),
          () => addSus(v.id, 12)
        );
    }
  }
  G.meet = m;
  G.bodies = [];
  G.blood = [];
  scene = 'meeting';
  beep(220, 0.5, 'sawtooth', 0.1, 100);
  setTimeout(() => beep(330, 0.4, 'sawtooth', 0.1), 250);
}
function revealVotes() {
  const m = G.meet,
    al = G.ps.filter(p => p.alive),
    votes = {},
    crewVotes = [];
  for (const b of al) {
    if (b.isP || b.imp) continue;
    let v = 'skip',
      best = null,
      bs = 0;
    for (const o of al)
      if (o !== b) {
        const s = b.sus[o.id] || 0;
        if (s > bs) {
          bs = s;
          best = o;
        }
      }
    if (best && bs >= 30) v = best.id;
    else if (Math.random() < 0.2) v = pick(al.filter(o => o !== b)).id;
    votes[b.id] = v;
    crewVotes.push(v);
  }
  if (G.player.alive) votes[G.player.id] = m.pv == null ? 'skip' : m.pv;
  const cnt = {};
  crewVotes.forEach(v => {
    if (v !== 'skip') cnt[v] = (cnt[v] || 0) + 1;
  });
  let top = null,
    tc = 0;
  for (const k in cnt)
    if (cnt[k] > tc) {
      tc = cnt[k];
      top = +k;
    }
  for (const b of al) {
    if (b.isP || !b.imp) continue;
    if (top !== null && !G.ps[top].imp && Math.random() < 0.7) votes[b.id] = top;
    else {
      votes[b.id] = Math.random() < 0.2 ? 'skip' : pick(al.filter(o => !o.imp)).id;
    }
  }
  const tally = { skip: 0 };
  al.forEach(p => (tally[p.id] = 0));
  for (const id in votes) tally[votes[id]]++;
  let max = 0,
    who = null,
    tie = false;
  for (const k in tally) {
    if (tally[k] > max) {
      max = tally[k];
      who = k;
      tie = false;
    } else if (tally[k] == max && max > 0) tie = true;
  }
  m.votes = votes;
  m.tally = tally;
  m.phase = 'reveal';
  m.rt = 0;
  m.res = who === null || who === 'skip' || tie ? { id: null } : { id: +who };
  if (m.res.id !== null) m.res.p = G.ps[m.res.id];
}
function endMeeting() {
  stopSpeech();
  const m = G.meet;
  if (m.res.id !== null) {
    const e = G.ps[m.res.id];
    e.alive = false;
    e.ejected = true;
    if (e.imp) mevent('ejectImp');
  }
  G.ps.forEach(p => {
    p.saw = null;
    p.sawWhat = null;
    p.kcd = Math.max(p.kcd, 12);
  });
  G.meet = null;
  G.meetCD = 14;
  spawn();
  scene = 'play';
  G.dispatchT = G.sab ? 3 : 0;
  checkWin();
}
function updateMeeting(dt) {
  const m = G.meet;
  m.t += dt;
  for (const x of m.msgs)
    if (!x.shown && m.t >= x.t) {
      x.shown = true;
      if (x.fx) x.fx();
      if (x.p) speak(x.text, x.p);
      beep(500 + Math.random() * 100, 0.05, 'sine', 0.04);
    }
  if (m.phase == 'discuss') {
    if (m.t >= 10 || (!G.player.alive && m.t >= 8)) m.phase = 'vote';
  } else if (m.phase == 'vote') {
    m.vt -= dt;
    if (m.revealIn != null) {
      m.revealIn -= dt;
      if (m.revealIn <= 0) revealVotes();
    } else if (m.vt <= 0 || (!G.player.alive && m.t >= 12)) revealVotes();
  } else if (m.phase == 'reveal') {
    m.rt += dt;
    if (m.rt > 2.5 && !m.sp) {
      m.sp = true;
      const e = m.res.p;
      speak(
        m.res.id === null
          ? 'Nadie fue expulsado.'
          : `${e.name} fue expulsado. ${e.imp ? 'Era' : 'No era'} un impostor.`
      );
    }
    if (m.rt > 8) endMeeting();
  }
}
function castVote(id) {
  const m = G.meet;
  if (m.phase !== 'vote' || m.pv != null || !G.player.alive) return;
  m.pv = id;
  m.revealIn = 1.2;
  beep(600, 0.1, 'sine', 0.06);
}
