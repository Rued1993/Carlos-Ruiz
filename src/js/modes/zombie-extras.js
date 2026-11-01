/**
 * Extras del modo zombi: estadísticas de armas (incluye el subfusil), mejoras y tienda entre
 * oleadas, granadas y zombis escupidores (proyectiles ácidos a distancia).
 */
'use strict';

/** Daño, cadencia, dispersión y balines por disparo de cada arma de fuego. */
const WSTATS = {
  pistola: { dmg: 34, cd: 0.28, spread: 0.03, n: 1 },
  escopeta: { dmg: 24, cd: 0.85, spread: 0.38, n: 5 },
  subfusil: { dmg: 17, cd: 0.085, spread: 0.07, n: 1 },
};
/** Tamaño de cargador teniendo en cuenta la mejora de cargadores. */
function magSize(w) {
  return Math.round(MAG[w] * (1 + 0.5 * ((G.up && G.up.mag) || 0)));
}
/** Multiplicador de daño por mejoras. */
function dmgMul() {
  return 1 + 0.2 * ((G.up && G.up.dmg) || 0);
}
/** Daño al jugador reducido por la armadura. */
function hurtPlayer(raw) {
  const g = G;
  g.hp -= Math.max(1, Math.round(raw * (1 - 0.2 * ((g.up && g.up.armor) || 0))));
  g.flash = 0.5;
  g.shake = 0.3;
  sfx.hurt();
}
function addScore(n) {
  G.score += n;
  G.cash += n;
}

/* ---- granadas ---- */
function throwGrenade() {
  const g = G,
    p = g.player;
  if (!g.zc || scene !== 'play' || g.intro > 0 || !p.alive) return;
  if (g.gren <= 0) {
    toast('No tienes granadas (cómpralas en la tienda con B)', 1.6);
    return;
  }
  g.gren--;
  const a = view3d ? CAM.yaw : p.aim;
  g.grs.push({ x: p.x, y: p.y, vx: Math.cos(a) * 420, vy: Math.sin(a) * 420, t: 1.5 });
  beep(300, 0.08, 'square', 0.06);
}
function explodeGrenade(gr) {
  const g = G,
    p = g.player;
  burst(gr.x, gr.y, 40, '#ff9a20', 280, 0.9);
  burst(gr.x, gr.y, 16, '#444', 120, 1.1);
  debris3D(gr.x, 16, gr.y, '#ff8a20', 14);
  sfx.explosion(gr.x, gr.y);
  g.shake = Math.max(g.shake, 0.5);
  for (const z of g.zs) {
    const d = dist(z, gr);
    if (d < 140) {
      z.hp -= Math.round((z.boss ? 70 : 150) * (1 - d / 220) * dmgMul());
      z.hurt = 0.2;
      const a = Math.atan2(z.y - gr.y, z.x - gr.x);
      move(z, Math.cos(a) * 30, Math.sin(a) * 30);
    }
  }
  if (dist(p, gr) < 90) hurtPlayer(10);
}
/** Granadas y proyectiles ácidos. */
function updExtras(dt) {
  const g = G,
    p = g.player;
  for (const gr of g.grs) {
    gr.t -= dt;
    const nx = gr.x + gr.vx * dt,
      ny = gr.y + gr.vy * dt;
    if (walk(nx, ny)) {
      gr.x = nx;
      gr.y = ny;
    } else {
      gr.vx *= -0.3;
      gr.vy *= -0.3;
    }
    gr.vx *= 1 - 1.8 * dt;
    gr.vy *= 1 - 1.8 * dt;
    if (gr.t <= 0) explodeGrenade(gr);
  }
  g.grs = g.grs.filter(gr => gr.t > 0);
  for (const s of g.spits) {
    s.life -= dt;
    s.x += s.vx * dt;
    s.y += s.vy * dt;
    if (!walk(s.x, s.y)) s.life = 0;
    else if (p.alive && dist(s, p) < 20) {
      s.life = 0;
      hurtPlayer(8 * diff().zdmg);
      burst(p.x, p.y, 8, '#9acd32', 140, 0.5);
    }
  }
  g.spits = g.spits.filter(s => s.life > 0);
  // escupidores: mantienen la distancia y lanzan ácido
  for (const z of g.zs)
    if (z.spit) {
      z.spitT = (z.spitT === undefined ? rnd(0.5, 1.6) : z.spitT) - dt;
      if (z.spitT <= 0 && dist(z, p) < 380 && clearLine(z, p)) {
        z.spitT = 2.4;
        const a = Math.atan2(p.y - z.y, p.x - z.x);
        g.spits.push({ x: z.x, y: z.y, vx: Math.cos(a) * 300, vy: Math.sin(a) * 300, life: 2.2 });
        tone(300, 0.2, {
          type: 'sawtooth',
          vol: 0.08,
          slide: -150,
          filter: 900,
          pan: spatial(z.x, z.y).pan,
        });
      }
    }
}
function drawExtras2D() {
  for (const gr of G.grs) {
    ctx.fillStyle = Math.floor(gr.t * 8) % 2 ? '#e53935' : '#222';
    ctx.beginPath();
    ctx.arc(gr.x, gr.y, 7, 0, 6.3);
    ctx.fill();
  }
  ctx.fillStyle = '#b6ff3a';
  for (const s of G.spits) {
    ctx.beginPath();
    ctx.arc(s.x, s.y, 6, 0, 6.3);
    ctx.fill();
  }
}
/** Sincroniza granadas y ácido con la escena 3D. */
function syncExtras3D() {
  if (!R3.grM) R3.grM = new Map();
  const seen = new Set(),
    t = performance.now() / 1000;
  for (const gr of G.grs || []) {
    let m = R3.grM.get(gr);
    if (!m) {
      m = new THREE.Mesh(
        new THREE.SphereGeometry(6, 12, 8),
        new THREE.MeshStandardMaterial({
          color: 0x222222,
          emissive: 0xff2020,
          emissiveIntensity: 1.5,
        })
      );
      R3.scene.add(m);
      R3.grM.set(gr, m);
    }
    m.position.set(gr.x, 8, gr.y);
    m.material.emissiveIntensity = Math.floor(t * 8) % 2 ? 2.5 : 0.2;
    seen.add(gr);
  }
  for (const [gr, m] of R3.grM)
    if (!seen.has(gr)) {
      R3.scene.remove(m);
      R3.grM.delete(gr);
    }
  if (!R3.spitP) {
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(60 * 3), 3));
    R3.spitP = new THREE.Points(
      geo,
      new THREE.PointsMaterial({ color: new THREE.Color(1.2, 3, 0.4), size: 12, fog: false })
    );
    R3.spitP.frustumCulled = false;
    R3.scene.add(R3.spitP);
  }
  const pa = R3.spitP.geometry.attributes.position;
  let n = 0;
  for (const s of G.spits || []) {
    if (n >= 60) break;
    pa.array[n * 3] = s.x;
    pa.array[n * 3 + 1] = 32;
    pa.array[n * 3 + 2] = s.y;
    n++;
  }
  R3.spitP.geometry.setDrawRange(0, n);
  pa.needsUpdate = true;
}

/* ---- tienda entre oleadas ---- */
const SHOP = [
  {
    id: 'ammo',
    name: 'Munición +40',
    desc: 'Reserva para tus armas',
    cost: () => 80,
    ok: () => true,
    buy: g => (g.ammo += 40),
  },
  {
    id: 'heal',
    name: 'Botiquín',
    desc: 'Recupera toda la salud',
    cost: () => 100,
    ok: g => g.hp < 100,
    buy: g => (g.hp = 100),
  },
  {
    id: 'gren',
    name: 'Granadas x2',
    desc: 'Daño en área (tecla G)',
    cost: () => 120,
    ok: () => true,
    buy: g => (g.gren += 2),
  },
  {
    id: 'smg',
    name: 'Subfusil',
    desc: 'Arma automática de 30 balas',
    cost: () => 250,
    ok: g => !g.weps.subfusil,
    buy: g => {
      g.weps.subfusil = true;
      g.wep = 'subfusil';
      g.ammo += 30;
    },
  },
  {
    id: 'dmg',
    name: 'Daño +20%',
    desc: 'Todas las armas (máx. 3)',
    cost: g => 200 * (g.up.dmg + 1),
    ok: g => g.up.dmg < 3,
    buy: g => g.up.dmg++,
  },
  {
    id: 'mag',
    name: 'Cargadores +50%',
    desc: 'Más balas por cargador (máx. 2)',
    cost: g => 180 * (g.up.mag + 1),
    ok: g => g.up.mag < 2,
    buy: g => g.up.mag++,
  },
  {
    id: 'armor',
    name: 'Armadura −20% daño',
    desc: 'Menos daño recibido (máx. 2)',
    cost: g => 220 * (g.up.armor + 1),
    ok: g => g.up.armor < 2,
    buy: g => g.up.armor++,
  },
];
function openShop() {
  if (!G || !G.zc || scene !== 'play') return;
  const s = G.wave.state;
  if (s !== 'break' && s !== 'wait') {
    toast('La tienda solo abre entre oleadas', 1.6);
    return;
  }
  scene = 'shop';
}
function drawShop() {
  const g = G;
  ctx.fillStyle = 'rgba(0,0,0,.6)';
  ctx.fillRect(0, 0, W, H);
  addHit(0, 0, W, H, () => {}, false);
  beginUI(640, 560);
  panel(0, 0, 640, 560, '#ffd740');
  titleGlow('TIENDA', 320, 40, 32, '#ffd740');
  txt(`Fondos: ${g.cash}   ·   Puntos: ${g.score}`, 320, 78, 16, '#fff', 'center');
  SHOP.forEach((it, i) => {
    const y = 104 + i * 58,
      cost = it.cost(g),
      can = it.ok(g) && g.cash >= cost;
    ctx.fillStyle = 'rgba(255,255,255,.07)';
    rr(24, y, 592, 50, 10);
    ctx.fill();
    txt(it.name, 40, y + 18, 16, it.ok(g) ? '#fff' : '#6a7', 'left');
    txt(it.desc, 40, y + 38, 12, '#9fb3c8', 'left', false);
    if (!it.ok(g)) txt('Completo', 590, y + 25, 14, '#6fcf73', 'right');
    else
      uiBtn(
        470,
        y + 8,
        130,
        34,
        `${cost} pts`,
        can ? '#2e7d32' : '#444',
        () => {
          if (!can) return;
          g.cash -= cost;
          it.buy(g);
          sfx.pickup();
        },
        15
      );
  });
  txt(
    `Mejoras → daño ${g.up.dmg}/3 · cargadores ${g.up.mag}/2 · armadura ${g.up.armor}/2 · granadas ${g.gren}`,
    320,
    522,
    12,
    '#9fb3c8',
    'center',
    false
  );
  uiBtn(220, 532, 200, 22, 'Cerrar [B]', '#8e2020', () => (scene = 'play'), 13);
  endUI();
}
