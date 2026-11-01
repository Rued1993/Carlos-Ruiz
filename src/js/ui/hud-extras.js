/**
 * Extras de HUD: barra de resistencia y marcadores de objetivo proyectados desde la cámara 3D.
 */
'use strict';

function drawStaminaBar() {
  if (scene !== 'play' || !G || G.stam === undefined || G.stam >= 99.5) return;
  const w = 130,
    x = W / 2 - w / 2,
    y = H / 2 + 34;
  ctx.fillStyle = 'rgba(0,0,0,.55)';
  rr(x - 3, y - 3, w + 6, 10, 5);
  ctx.fill();
  ctx.fillStyle = G.stamLock ? '#e57373' : '#ffd54f';
  rr(x, y, (w * G.stam) / 100, 4, 2);
  ctx.fill();
}

/** Dibuja un marcador sobre el objetivo, o una flecha en el borde si queda fuera de pantalla. */
function drawWaypoint(wx, wy, label, color) {
  if (!view3d || !R3 || !R3.camera) return;
  const c = R3.camera,
    dir = new THREE.Vector3(),
    pos = new THREE.Vector3(wx, 50, wy);
  c.getWorldDirection(dir);
  const behind = pos.clone().sub(c.position).dot(dir) < 0;
  pos.project(c);
  let sx = (pos.x * 0.5 + 0.5) * W,
    sy = (-pos.y * 0.5 + 0.5) * H;
  if (behind) {
    sx = W - sx;
    sy = H - sy;
  }
  const m = 44,
    inside = !behind && sx > m && sx < W - m && sy > m + 40 && sy < H - m,
    meters = Math.round(Math.hypot(wx - G.player.x, wy - G.player.y) / 40);
  ctx.save();
  ctx.fillStyle = color;
  ctx.strokeStyle = 'rgba(0,0,0,.7)';
  ctx.lineWidth = 3;
  if (inside) {
    ctx.beginPath();
    ctx.moveTo(sx, sy - 6);
    ctx.lineTo(sx - 9, sy - 22);
    ctx.lineTo(sx + 9, sy - 22);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();
    txt(`${label} · ${meters} m`, sx, sy - 34, 12, '#fff', 'center');
  } else {
    const ex = clamp(sx, m, W - m),
      ey = clamp(sy, m + 40, H - m),
      ang = Math.atan2(sy - H / 2, sx - W / 2);
    ctx.translate(ex, ey);
    ctx.rotate(ang);
    ctx.beginPath();
    ctx.moveTo(14, 0);
    ctx.lineTo(-8, -10);
    ctx.lineTo(-8, 10);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();
    ctx.rotate(-ang);
    txt(`${label} · ${meters} m`, 0, ey < H / 2 ? 24 : -22, 11, '#fff', 'center');
  }
  ctx.restore();
}
function drawObjectiveMarkers() {
  if (!view3d || scene !== 'play' || !G || G.intro > 0 || !R3 || !R3.camera) return;
  const g = G,
    p = g.player;
  if (g.mode === 'classic') {
    if (!p.imp && p.alive) {
      let best = null,
        bd = 1e9;
      for (const t of p.tasks)
        if (!t.done) {
          const d = dist(p, STATIONS[t.st]);
          if (d < bd) {
            bd = d;
            best = STATIONS[t.st];
          }
        }
      if (best && bd > 140) drawWaypoint(best.x, best.y, best.name, '#ffd740');
    }
    if (g.sab && !p.imp) for (const f of fixPts()) drawWaypoint(f.x, f.y, 'REPARAR', '#ff6a5a');
  } else if (g.mode === 'zombie') {
    if (g.pod) drawWaypoint(POD.x, POD.y, 'CÁPSULA', '#7dffa0');
  } else if (g.mode === 'sandbox') {
    const bx0 = SPAWN.x * TS + TS / 2,
      by0 = (SPAWN.y - 1) * TS + TS / 2;
    if (dist(p, { x: bx0, y: by0 }) > 500) drawWaypoint(bx0, by0, 'Nave', '#ff9a9a');
  }
}
