// Rediseño visual de la edición limpia: nuevos colores y adornos propios (cristales, púas, halos, órbitas)
// sobre los modelos base, para que mobs y jefes tengan una identidad distinta y moderna.
import * as THREE from 'three';

const tmp = { h: 0, s: 0, l: 0 };
// Cambia el matiz de todos los materiales; los grises/negros ganan un tinte mínimo
export function tint(root, dh, minS = 0.35, dl = 0) {
  const seen = new Set();
  root.traverse((o) => {
    if (!o.isMesh) return;
    for (const m of [].concat(o.material)) {
      if (seen.has(m) || !m.color) continue; seen.add(m);
      if (m.map) continue; // las caras con textura se conservan
      m.color.getHSL(tmp); m.color.setHSL((tmp.h + dh + 1) % 1, Math.max(tmp.s, minS), Math.min(0.92, Math.max(0.06, tmp.l + dl)));
      if (m.emissive && m.emissive.getHex() !== 0) { m.emissive.getHSL(tmp); m.emissive.setHSL((tmp.h + dh + 1) % 1, Math.max(tmp.s, minS), tmp.l); }
    }
  });
}
const mat = (c, glow) => (glow ? new THREE.MeshBasicMaterial({ color: c }) : new THREE.MeshLambertMaterial({ color: c }));
const add = (p, geo, c, x, y, z, glow) => { const m = new THREE.Mesh(geo, mat(c, glow)); m.position.set(x, y, z); p.add(m); return m; };
const box = (p, w, h, d, c, x, y, z, glow) => add(p, new THREE.BoxGeometry(w, h, d), c, x, y, z, glow);
const cone = (p, r, h, c, x, y, z, rx = 0, rz = 0, glow) => { const m = add(p, new THREE.ConeGeometry(r, h, 5), c, x, y, z, glow); m.rotation.set(rx, 0, rz); return m; };
const orb = (p, r, c, x, y, z) => add(p, new THREE.IcosahedronGeometry(r, 0), c, x, y, z, true);
const ring = (p, R, r, c, x, y, z, rx = Math.PI / 2) => { const m = add(p, new THREE.TorusGeometry(R, r, 5, 18), c, x, y, z, true); m.rotation.x = rx; return m; };
const crown = (p, n, R, h, c, y, glow) => { for (let i = 0; i < n; i++) { const a = (i / n) * Math.PI * 2; cone(p, h * 0.28, h, c, Math.cos(a) * R, y, Math.sin(a) * R, Math.sin(a) * 0.35, -Math.cos(a) * 0.35, glow); } };
const spikes = (p, n, c, x, y0, y1, z, size) => { for (let i = 0; i < n; i++) cone(p, size, size * 2.2, c, x, y0 + (y1 - y0) * (i / Math.max(1, n - 1)), z, -Math.PI / 2 - 0.4, 0); };

// ---------------------------------------------------------------- mobs
const MOB = {
  creeper: (g, o, H) => { tint(g, 0.02, 0.5); spikes(g, 3, 0xffb040, 0, H * 0.42, H * 0.75, -0.22, 0.09); crown(o.head || g, 4, 0.14, 0.2, 0xff7a20, H * 0.5, true); orb(g, 0.1, 0xfff0a0, 0, H * 0.55, 0.17); },
  enderman: (g, o, H) => { tint(g, 0.1, 0.55); for (const y of [0.42, 0.55, 0.68]) box(g, 0.34, 0.025, 0.02, 0x40e0ff, 0, H * y, 0.14, true); ring(o.head || g, 0.34, 0.025, 0x40e0ff, 0, 0.55, 0); for (let i = 0; i < 3; i++) { const a = i * 2.1; cone(g, 0.05, 0.28, 0x7a60ff, Math.cos(a) * 0.55, H * 0.6 + i * 0.2, Math.sin(a) * 0.55, 0, 0.3, true); } },
  piglin: (g, o, H) => { tint(g, 0.42, 0.28, -0.04); for (const x of [-1, 1]) cone(o.head || g, 0.09, 0.32, 0xe8e0c0, x * 0.2, 0.45, 0, 0, -x * 0.5); box(g, 0.62, 0.1, 0.4, 0x9a50ff, 0, H * 0.78, 0, true); },
  blaze: (g, o, H) => { tint(g, 0.47, 0.5); for (let i = 0; i < 5; i++) { const a = i * 1.26; orb(g, 0.07, 0x9fe8ff, Math.cos(a) * 0.5, H * 0.45 + (i % 3) * 0.2, Math.sin(a) * 0.5); } crown(o.head || g, 5, 0.22, 0.34, 0x40c8ff, H * 0.88, true); },
  magmacube: (g, o, H) => { tint(g, 0.3, 0.5); spikes(g, 3, 0x30ffc0, 0, H * 0.3, H * 0.8, -0.3, 0.1); },
  witherskeleton: (g, o, H) => { tint(g, 0.7, 0.3); crown(o.head || g, 5, 0.2, 0.3, 0xb070ff, 0.5, true); for (let i = 0; i < 4; i++) orb(g, 0.05, 0xd0a0ff, 0, H * (0.5 + i * 0.08), 0.15); },
  ghast: (g, o, H) => { tint(g, 0.85, 0.4); ring(g, 0.9, 0.05, 0xff80d0, 0, H * 0.95, 0); for (let i = 0; i < 6; i++) { const a = i; box(g, 0.05, 0.9, 0.05, 0xffa0e0, Math.cos(a) * 0.5, H * 0.0 - 0.1, Math.sin(a) * 0.5, true); } },
  hoglin: (g, o, H) => { tint(g, 0.5, 0.3); spikes(g, 4, 0xe0f0d0, 0, H * 0.7, H * 0.9, -0.1, 0.07); },
  shulker: (g, o, H) => { tint(g, 0.28, 0.5); ring(g, 0.45, 0.04, 0x80fff0, 0, H * 0.5, 0, 0); crown(g, 4, 0.4, 0.3, 0x40e8d0, H * 0.95, true); },
  endermite: (g, o, H) => { tint(g, 0.4, 0.5); for (const x of [-1, 1]) cone(g, 0.03, 0.3, 0x80ffe0, x * 0.1, H * 0.9, 0.2, -1.2, x * 0.3, true); },
  phantom: (g, o, H) => { tint(g, 0.3, 0.4); orb(g, 0.06, 0x80ffd0, -0.1, H * 0.5, 0.35); orb(g, 0.06, 0x80ffd0, 0.1, H * 0.5, 0.35); },
  slime: (g, o, H) => { tint(g, 0.35, 0.5); },
  zombie: (g) => { tint(g, 0.08, 0.2); },
  skeleton: (g) => { tint(g, 0.55, 0.12); },
  spider: (g) => { tint(g, 0.75, 0.25); },
  villager: (g) => { tint(g, 0.05, 0.1); },
};
export function restyleMob(type, g, o, H) { const f = MOB[type]; if (f) f(g, o || {}, H || 1.7); }

// ---------------------------------------------------------------- jefes
// dh: cambio de matiz · crown: [n, radio, alto, color] sobre la cabeza · orbit: [n, radio, tamaño, color] · back: púas dorsales
const BOSS = {
  storm: { dh: 0.12, crown: [6, 2.2, 2.4, 0xff80ff], orbit: [6, 9, 0.5, 0xffa0ff] },
  dragon: { dh: -0.25, crown: [5, 0.7, 1.1, 0x40ffe0], orbit: [4, 6, 0.4, 0x80fff0] },
  wither: { dh: 0.55, crown: [5, 0.8, 1.0, 0xb070ff], orbit: [3, 3.5, 0.3, 0xd0a0ff] },
  warden: { dh: 0.08, crown: [4, 0.8, 0.9, 0xffc040], orbit: [3, 3, 0.3, 0xffe080] },
  guardian: { dh: 0.3, crown: [6, 1.0, 1.0, 0xff80a0], orbit: [5, 3, 0.3, 0xffb0c0] },
  ravager: { dh: 0.45, crown: [3, 0.7, 0.9, 0xe8e0c0], orbit: [0] },
  evoker: { dh: 0.5, crown: [5, 0.45, 0.6, 0x70e0ff], orbit: [4, 2.4, 0.2, 0xa0f0ff] },
  ghast: { dh: 0.8, crown: [6, 1.4, 1.2, 0xff90d8], orbit: [5, 4, 0.4, 0xffb0e8] },
  herobrine: { dh: 0.75, crown: [6, 0.5, 0.7, 0xffffff], orbit: [4, 2.6, 0.2, 0xe0e0ff] },
  slimeking: { dh: 0.3, crown: [5, 1.2, 1.3, 0xffd040], orbit: [4, 3.5, 0.3, 0xffe880] },
  blazeking: { dh: 0.45, crown: [6, 0.9, 1.2, 0x40d0ff], orbit: [6, 3.2, 0.3, 0x9fe8ff] },
  piglinking: { dh: 0.38, crown: [4, 0.8, 1.0, 0xa050ff], orbit: [3, 3.2, 0.3, 0xd0a0ff] },
  endertitan: { dh: 0.12, crown: [5, 0.6, 1.0, 0x40e0ff], orbit: [5, 4, 0.35, 0x80f0ff] },
  voidlord: { dh: -0.2, crown: [6, 1.1, 1.4, 0xff60c0], orbit: [4, 3.5, 0.35, 0xff90d8] },
  creepertitan: { dh: 0.02, crown: [5, 0.9, 1.1, 0xffb040], orbit: [0] },
  colossus: { dh: 0.55, crown: [4, 0.6, 0.9, 0x70e0ff], orbit: [4, 3.5, 0.3, 0xa0f0ff] },
};
export function restyleBoss(b) {
  const st = BOSS[b.type]; if (!st) return;
  tint(b.body || b.root, st.dh, 0.3);
  const hb = b.hitbox || { hx: 2, hy: 2, hz: 2, oy: 2 }, parent = b.body || b.root;
  if (st.crown) { const [n, R, h, c] = st.crown, g = new THREE.Group(); const hy = b.head && b.head.position ? b.head.position.y : hb.oy + hb.hy * 0.9; const hp = b.head && b.head.parent === parent ? b.head.position : { x: 0, z: 0 }; g.position.set(hp.x || 0, hy + (b.head ? 0.55 : 0.2), hp.z || 0); crown(g, n, R, h, c, 0, true); parent.add(g); }
  if (st.orbit && st.orbit[0]) { const [n, R, r, c] = st.orbit, g = new THREE.Group(); g.position.set(0, hb.oy, 0); for (let i = 0; i < n; i++) { const a = (i / n) * Math.PI * 2; orb(g, r, c, Math.cos(a) * R, Math.sin(a * 2) * hb.hy * 0.3, Math.sin(a) * R); } parent.add(g); b._spin = g; }
}
