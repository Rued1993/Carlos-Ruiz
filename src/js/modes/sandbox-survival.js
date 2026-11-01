/**
 * Supervivencia del Mundo cubo: hambre, animales (vaca, cerdo, gallina), carne y horno.
 *
 * Ciclo: cazar animales -> carne cruda -> cocinar en un horno (carne cruda + carbón) ->
 * carne asada (más comida). Sin comida el hambre baja la salud (nunca por debajo de 2 corazones).
 */
'use strict';

const O_FURNACE = 11;
OSOLID.add(O_FURNACE);
OHARD[O_FURNACE] = 1.2;
OCOL[O_FURNACE] = '#6a6a6a';

const ANIMALS = {
  vaca: { hp: 10, drop: 2, col: '#e6e0d4', spot: '#3a2a20', sz: [26, 22, 42] },
  cerdo: { hp: 8, drop: 2, col: '#f0a0a8', spot: '#d98890', sz: [22, 16, 34] },
  gallina: { hp: 4, drop: 1, col: '#f6f6f2', spot: '#e8e8e0', sz: [12, 12, 16] },
};

function spawnAnimal(type, x, y) {
  const d = ANIMALS[type];
  G.animals.push({
    type,
    x,
    y,
    hp: d.hp,
    max: d.hp,
    face: 1,
    step: Math.random() * 6,
    t: rnd(0, 3),
    tx: null,
    ty: null,
    fleeT: 0,
  });
}
/** Busca una casilla de hierba libre; devuelve su centro o null. */
function randomGrass(minDistTiles, around) {
  for (let k = 0; k < 40; k++) {
    const tx = around
        ? Math.floor(around.x / TS + rnd(-24, 24))
        : 2 + Math.floor(Math.random() * (WW - 4)),
      ty = around
        ? Math.floor(around.y / TS + rnd(-16, 16))
        : 2 + Math.floor(Math.random() * (WH - 4));
    if (tx < 2 || ty < 2 || tx >= WW - 2 || ty >= WH - 2) continue;
    const i = ty * WW + tx;
    if (GR[i] === G_GRASS && !OB[i] && Math.hypot(tx - SPAWN.x, ty - SPAWN.y) > minDistTiles)
      return { x: tx * TS + TS / 2, y: ty * TS + TS / 2 };
  }
  return null;
}
function seedAnimals() {
  G.animals = [];
  for (let n = 0; n < 24; n++) {
    const c = randomGrass(9);
    if (c) spawnAnimal(pick(['vaca', 'vaca', 'cerdo', 'cerdo', 'gallina']), c.x, c.y);
  }
}
/** Hambre, IA de animales y reaparición. */
function updSurvival(dt) {
  const g = G,
    p = g.player;
  // hambre
  g.foodT = (g.foodT || 0) + dt * (p.sprinting ? 2 : 1);
  if (g.foodT >= 45) {
    g.foodT = 0;
    if (g.food > 0) g.food--;
  }
  if (g.food <= 0) {
    g.starveT = (g.starveT || 0) + dt;
    if (g.starveT > 5) {
      g.starveT = 0;
      if (g.hp > 4) {
        g.hp--;
        g.flash = 0.3;
        toast('Tienes hambre… busca comida', 1.8);
      }
    }
  }
  // animales
  for (const a of g.animals) {
    a.step += dt * 6;
    a.t -= dt;
    let speed = 36;
    if (a.fleeT > 0) {
      a.fleeT -= dt;
      const dx = a.x - p.x,
        dy = a.y - p.y,
        d = Math.hypot(dx, dy) || 1;
      a.tx = a.x + (dx / d) * 120;
      a.ty = a.y + (dy / d) * 120;
      speed = 100;
    } else if (a.t <= 0) {
      a.t = rnd(2, 6);
      if (Math.random() < 0.6) {
        a.tx = a.x + rnd(-140, 140);
        a.ty = a.y + rnd(-140, 140);
      } else a.tx = null;
    }
    if (a.tx !== null) {
      const dx = a.tx - a.x,
        dy = a.ty - a.y,
        d = Math.hypot(dx, dy);
      if (d < 8) a.tx = null;
      else {
        const m = move(a, (dx / d) * speed * dt, (dy / d) * speed * dt);
        if (Math.abs(dx) > 2) a.face = dx > 0 ? 1 : -1;
        if (m < speed * dt * 0.25) a.tx = null;
      }
    }
  }
  g.aT = (g.aT || 20) - dt;
  if (g.aT <= 0) {
    g.aT = 20;
    if (g.animals.length < 18 && g.dark < 0.3) {
      const c = randomGrass(4, p);
      if (c && Math.hypot(c.x - p.x, c.y - p.y) > 420)
        spawnAnimal(pick(['vaca', 'cerdo', 'gallina']), c.x, c.y);
    }
  }
}
function hitAnimal(a, dmg) {
  const g = G;
  a.hp -= dmg;
  a.fleeT = 3;
  burst(a.x, a.y, 6, '#c03030', 110, 0.4);
  beep(300, 0.06, 'square', 0.07);
  if (a.hp <= 0) {
    const n = ANIMALS[a.type].drop;
    g.animals.splice(g.animals.indexOf(a), 1);
    addItem('carne', n);
    toast(`+${n} Carne cruda`, 1.4);
    debris3D(a.x, 14, a.y, '#a03030', 8);
    mevent('animal');
  }
}
/** Come lo mejor que tengas: carne asada > manzana > carne cruda. */
function sbEat() {
  const g = G;
  if (scene !== 'play') return;
  if (g.food >= 20 && g.hp >= 20) {
    toast('Estás lleno', 1);
    return;
  }
  if (g.inv.asada > 0) {
    g.inv.asada--;
    g.food = Math.min(20, g.food + 8);
    g.hp = Math.min(20, g.hp + 2);
    toast('¡Carne asada! +4 de hambre', 1.6);
  } else if (g.inv.manzana > 0) {
    g.inv.manzana--;
    g.food = Math.min(20, g.food + 4);
    g.hp = Math.min(20, g.hp + 2);
    toast('¡Ñam! Manzana', 1.4);
  } else if (g.inv.carne > 0) {
    g.inv.carne--;
    g.food = Math.min(20, g.food + 3);
    if (Math.random() < 0.3) {
      g.hp = Math.max(2, g.hp - 1);
      toast('La carne cruda te sentó mal…', 1.6);
    } else toast('Carne cruda (mejor asada)', 1.4);
  } else {
    toast('No tienes comida. Caza animales y cocínalos en un horno', 2);
    return;
  }
  beep(500, 0.1, 'sine', 0.06);
}
/** Usa un horno: convierte carne cruda + carbón en carne asada. */
function sbCook(tx, ty) {
  const g = G,
    n = Math.min(g.inv.carne, g.inv.carbon, 4);
  if (n <= 0) {
    toast('Horno: necesitas carne cruda y carbón', 2);
    return;
  }
  g.inv.carne -= n;
  g.inv.carbon -= n;
  g.inv.asada += n;
  toast(`Horno: ${n} carne asada`, 2);
  burst(tx * TS + TS / 2, ty * TS + TS / 2, 10, '#ff9a20', 90, 0.6);
  beep(420, 0.2, 'triangle', 0.08, 200);
  mevent('cook', n);
}

/* ---- modelos y dibujo ---- */
function makeAnimal3D(type) {
  const d = ANIMALS[type],
    g = new THREE.Group(),
    [w, h, l] = d.sz,
    body = bx(w, h, l, d.col, 0, h / 2 + 9, 0, { roughness: 0.9 });
  g.add(body);
  g.add(bx(w * 0.7, h * 0.7, l * 0.3, d.col, 0, h / 2 + 12, l / 2 + 4, { roughness: 0.9 }));
  if (type === 'vaca') {
    g.add(bx(w + 1, 8, 12, d.spot, 0, h / 2 + 14, -6, { roughness: 1 }));
    g.add(bx(w * 0.4, 5, 6, '#caa', 0, h / 2 + 7, l / 2 + 9, { roughness: 1 }));
  }
  if (type === 'cerdo') g.add(bx(8, 6, 5, d.spot, 0, h / 2 + 8, l / 2 + 8, { roughness: 1 }));
  if (type === 'gallina') {
    g.add(bx(3, 5, 5, '#d32f2f', 0, h + 14, l / 2 + 4, {}));
    g.add(bx(3, 3, 5, '#f0b020', 0, h / 2 + 11, l / 2 + 10, {}));
  }
  const legs = [];
  for (const sx of [-w / 3, w / 3])
    for (const sz of [-l / 3, l / 3]) {
      const lg = new THREE.Group();
      lg.position.set(sx, 9, sz);
      const m = bx(4, 9, 4, type === 'gallina' ? '#f0b020' : d.col, 0, -4.5, 0, { roughness: 1 });
      lg.add(m);
      g.add(lg);
      legs.push(lg);
    }
  g.userData.legs = legs;
  return g;
}
function syncAnimals() {
  if (!R3.animalM) R3.animalM = new Map();
  const seen = new Set(),
    p = G.player;
  for (const a of G.animals) {
    if (Math.hypot(a.x - p.x, a.y - p.y) > 1100) continue;
    let r = R3.animalM.get(a);
    if (!r) {
      const g = makeAnimal3D(a.type);
      R3.scene.add(g);
      r = { g, lx: a.x, ly: a.y, heading: rnd(0, 6.28), ph: 0 };
      R3.animalM.set(a, r);
    }
    const dx = a.x - r.lx,
      dy = a.y - r.ly,
      sp = Math.hypot(dx, dy);
    r.lx = a.x;
    r.ly = a.y;
    if (sp > 0.05) {
      const da = Math.atan2(
        Math.sin(Math.atan2(dy, dx) - r.heading),
        Math.cos(Math.atan2(dy, dx) - r.heading)
      );
      r.heading += da * Math.min(1, R3.dt * 10);
      r.ph += sp * 0.2;
    }
    r.g.position.set(a.x, 0, a.y);
    r.g.rotation.y = Math.PI / 2 - r.heading;
    const sw = sp > 0.05 ? Math.sin(r.ph) * 0.7 : 0;
    r.g.userData.legs.forEach((l, i) => (l.rotation.x = i % 3 === 0 ? sw : -sw));
    seen.add(a);
  }
  for (const [a, r] of R3.animalM)
    if (!seen.has(a)) {
      R3.scene.remove(r.g);
      R3.animalM.delete(a);
    }
}
function drawAnimals2D() {
  for (const a of G.animals) {
    const d = ANIMALS[a.type],
      w = d.sz[0],
      l = d.sz[2];
    ctx.fillStyle = d.col;
    rr(a.x - l / 2, a.y - w / 2 + 6, l, w, 5);
    ctx.fill();
    ctx.fillStyle = d.spot;
    ctx.fillRect(a.x + a.face * (l / 2 - 4), a.y - 4, 8 * a.face, 10);
  }
}

/* ---- cama, brotes y clima ---- */
const O_BED = 12,
  O_SAPLING = 13;
OSOLID.add(O_BED);
OHARD[O_BED] = 0.5;
OHARD[O_SAPLING] = 0.1;
OCOL[O_BED] = '#c0392b';
OCOL[O_SAPLING] = '#3a8a30';

/** Duerme en una cama: de noche salta al amanecer y fija el punto de reaparición. */
function sbSleep(tx, ty) {
  const g = G;
  if (g.dark < 0.5) {
    toast('Solo puedes dormir de noche', 1.8);
    return;
  }
  g.respawn = { x: tx * TS + TS / 2, y: (ty + 1) * TS + TS / 2 };
  g.sbT = Math.floor(g.sbT / CYCLE) * CYCLE + CYCLE * 0.93;
  g.flash = 0.6;
  g.zs = [];
  toast('Has dormido hasta el amanecer. Reaparecerás aquí', 3);
  beep(440, 0.5, 'sine', 0.08, 220);
}
/** Los brotes plantados se convierten en árboles con el tiempo (más lento de noche). */
function growSaplings(dt) {
  const g = G;
  for (let k = g.saplings.length - 1; k >= 0; k--) {
    const s = g.saplings[k],
      i = s.ty * WW + s.tx;
    if (OB[i] !== O_SAPLING) {
      g.saplings.splice(k, 1);
      continue;
    }
    s.t += dt * (g.dark > 0.5 ? 0.3 : 1);
    if (s.t >= 45) {
      OB[i] = O_LOG;
      TREES.set(i, { x: s.tx, y: s.ty, logs: 4 });
      burst(s.tx * TS + TS / 2, s.ty * TS + TS / 2, 14, '#3a8a30', 120, 0.8);
      toast('¡Un brote ha crecido hasta ser un árbol!', 2);
      g.saplings.splice(k, 1);
    }
  }
}
/** Lluvia con tormenta ocasional (relámpagos y truenos). */
function updWeather(dt) {
  const g = G,
    w = g.weather;
  w.t -= dt;
  if (w.t <= 0) {
    if (w.target === 0 && Math.random() < 0.4) {
      w.target = 1;
      w.t = rnd(40, 80);
      toast('Empieza a llover…', 2.5);
    } else {
      w.target = 0;
      w.t = rnd(60, 140);
    }
  }
  w.rain += (w.target - w.rain) * Math.min(1, dt * 0.3);
  if (w.rain > 0.6) {
    w.thunderT -= dt;
    if (w.thunderT <= 0) {
      w.thunderT = rnd(8, 20);
      w.lightning = 0.4;
      setTimeout(() => sfx.thunder(), rnd(300, 1400));
    }
  }
  w.lightning = Math.max(0, w.lightning - dt * 1.2);
  rainSound(w.rain);
}
