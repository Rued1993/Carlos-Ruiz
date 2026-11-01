/**
 * IA de los bots (tareas, caza del impostor, rutas por nodos).
 */
'use strict';

function goTo(p, n) {
  return route(p.node, n).map(i => ({ x: NODES[i][0], y: NODES[i][1], node: i }));
}
function chooseGoal(p) {
  const pend = p.tasks.filter(t => !t.done);
  if ((!p.imp && pend.length && Math.random() < 0.85) || (p.imp && Math.random() < 0.4)) {
    const t = p.imp ? pick(p.tasks) : pick(pend),
      st = STATIONS[t.st],
      path = goTo(p, st.node);
    path.push({ x: st.x, y: st.y, work: t });
    p.path = path;
  } else {
    let n;
    do {
      n = Math.floor(Math.random() * NODES.length);
    } while (n == p.node);
    p.path = goTo(p, n);
  }
}
function updBot(p, dt) {
  if (p.imp) {
    p.kcd -= dt;
    p.huntT -= dt;
    if (p.kcd <= 0) {
      if (p.hunt && !p.hunt.alive) p.hunt = null;
      if (p.huntT <= 0) {
        p.huntT = 0.6;
        let best = null,
          bd = 1e9;
        for (const q of G.ps)
          if (q.alive && !q.imp) {
            const d = dist(p, q);
            if (d < 650 && d < bd) {
              const w = G.ps.filter(
                o => o.alive && o !== p && o !== q && !o.imp && dist(o, q) < 340
              ).length;
              if (w == 0) {
                bd = d;
                best = q;
              }
            }
          }
        p.hunt = best;
        if (best) {
          p.wait = 0;
          p.onDone = null;
          let r = route(nearestNode(p), nearestNode(best));
          if (
            r.length > 1 &&
            dist(p, { x: NODES[r[1]][0], y: NODES[r[1]][1] }) <
              Math.hypot(NODES[r[0]][0] - NODES[r[1]][0], NODES[r[0]][1] - NODES[r[1]][1])
          )
            r = r.slice(1);
          const path =
            r.length > 1 ? r.map(i => ({ x: NODES[i][0], y: NODES[i][1], node: i })) : [];
          path.push({ x: best.x, y: best.y });
          p.path = path;
        }
      }
      if (p.hunt && dist(p, p.hunt) < 58) {
        const w = G.ps.filter(
          o => o.alive && o !== p && o !== p.hunt && !o.imp && dist(o, p.hunt) < 340
        ).length;
        if (w == 0) kill(p, p.hunt);
        else {
          p.hunt = null;
          p.huntT = 2;
        }
        return;
      }
    }
  }
  if (p.wait > 0) {
    p.wait -= dt;
    if (p.wait <= 0 && p.onDone) {
      p.onDone();
      p.onDone = null;
    }
    return;
  }
  if (!p.path.length) {
    chooseGoal(p);
    return;
  }
  const t = p.path[0],
    dx = t.x - p.x,
    dy = t.y - p.y,
    d = Math.hypot(dx, dy);
  if (d < 10) {
    p.path.shift();
    if (t.node !== undefined) p.node = t.node;
    if (t.work) {
      p.wait = rnd(4, 8);
      const w = t.work;
      p.onDone = () => {
        if (!p.imp && !w.done) {
          w.done = true;
          G.done++;
          checkWin();
        }
      };
      p.node = STATIONS[w.st].node;
    }
    if (t.fix) {
      p.wait = rnd(3, 5);
      const k = t.fix;
      p.onDone = () => {
        if (G.sab) {
          const s = G.sab;
          if (s.type == 'lights' || !s['fixed' + k]) fixSab(k);
        }
      };
    }
    return;
  }
  const sp = p.imp ? 185 : 170,
    m = move(p, (dx / d) * sp * dt, (dy / d) * sp * dt);
  p.moving = true;
  p.step += dt * 14;
  if (Math.abs(dx) > 2) p.face = dx > 0 ? 1 : -1;
  p.aim = Math.atan2(dy, dx);
  if (m < sp * dt * 0.2) {
    p.stuck += dt;
    if (p.stuck > 1.2) {
      const n = nearestNode(p);
      p.x = NODES[n][0];
      p.y = NODES[n][1];
      p.node = n;
      p.path = [];
      p.stuck = 0;
    }
  } else p.stuck = 0;
}
