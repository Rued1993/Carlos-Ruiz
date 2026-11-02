import * as THREE from 'three';
import { createAtlas, tileColor } from './atlas.js';
import { initIcons, iconTexture, tileURL } from './icons.js';
import { PlayerModel } from './playermodel.js';
import { Weather, WEATHER_NAMES } from './weather.js';
import { WitherStorm } from './boss.js';
import { BOSS_INFO, BOSS_ORDER } from './bosses.js';
import { Quests, QUESTS } from './quests.js';
import { World, terrainHeight, terrainInfo, biomeAt, SEA, CH } from './world.js';
import { Player } from './player.js';
import { Inventory } from './inventory.js';
import { Sky } from './sky.js';
import { Drops, Particles } from './entities.js';
import { MobManager, MOB_TYPES } from './mobs.js';
import { UI } from './ui.js';
import * as audio from './audio.js';
import * as save from './save.js';
import { B, I, AIR, BLOCKS, ITEMS, LIQUID, SOLID, SMELT, FUEL, SMELT_TIME, info, isBlock, isFlat, maxStack, toolOf, breakTime, dropOf } from './blocks.js';

const $ = (id) => document.getElementById(id);
const canvas = $('game');
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: 'high-performance' });
renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
const scene = new THREE.Scene();
scene.fog = new THREE.Fog(0x87ceeb, 50, 90);
const camera = new THREE.PerspectiveCamera(75, 1, 0.05, 500);
scene.add(camera);

const { canvas: atlasCanvas, texture } = createAtlas();
initIcons(atlasCanvas);
document.documentElement.style.setProperty('--dirt', `url(${tileURL('dirt')})`);
// Color final del vértice = luz de cielo * tinte del día + luz cálida de antorchas (que no se atenúa de noche)
const tint = { value: new THREE.Color(1, 1, 1) };
const gameU = { uTime: { value: 0 }, uWind: { value: 0.12 } };
function patchChunkMaterial(m) {
  m.onBeforeCompile = (sh) => {
    sh.uniforms.uTint = tint; sh.uniforms.uTime = gameU.uTime; sh.uniforms.uWind = gameU.uWind;
    sh.vertexShader = sh.vertexShader
      .replace('#include <common>', '#include <common>\nattribute float blight;\nattribute float sway;\nuniform vec3 uTint;\nuniform float uTime;\nuniform float uWind;')
      .replace('#include <begin_vertex>', '#include <begin_vertex>\nvec4 wp = modelMatrix * vec4(position, 1.0);\nfloat sw = (sway > 1.5 ? 0.0 : sway) * uWind;\ntransformed.x += sin(uTime * 1.7 + wp.x * 0.9 + wp.z * 0.6 + wp.y * 0.5) * 0.075 * sw;\ntransformed.z += cos(uTime * 1.3 + wp.z * 0.8 + wp.x * 0.4) * 0.075 * sw;\ntransformed.y += sin(uTime * 2.1 + wp.x * 0.7 + wp.z * 0.7) * 0.03 * sw;\ntransformed.y += (sway > 1.5 ? 1.0 : 0.0) * sin(uTime * 1.9 + wp.x * 1.2 + wp.z * 1.0) * 0.045;')
      .replace('#include <color_vertex>', '#include <color_vertex>\n#ifdef USE_COLOR\nvColor = color * uTint + vec3(1.0, 0.8, 0.5) * blight;\n#endif');
  };
  m.customProgramCacheKey = () => 'chunk-light';
  return m;
}
const materials = {
  opaque: patchChunkMaterial(new THREE.MeshBasicMaterial({ map: texture, vertexColors: true })),
  trans: patchChunkMaterial(new THREE.MeshBasicMaterial({ map: texture, vertexColors: true, transparent: true, depthWrite: false, side: THREE.DoubleSide })),
  tint,
};

// ---------- Ajustes (persistentes) ----------
const settings = { radius: 8, fov: 75, sens: 1, vol: 0.5, cam: 0 };
try { Object.assign(settings, JSON.parse(localStorage.getItem('mcweb-settings') || '{}')); } catch {}
const saveSettings = () => { try { localStorage.setItem('mcweb-settings', JSON.stringify(settings)); } catch {} };
const LOOT = {
  storm: [[I.STAR, 1], [B.COMMAND, 1], [I.DIAMOND, 8], [I.GOLD, 12]],
  dragon: [[I.STAR, 2], [I.PEARL, 4], [I.DIAMOND, 12], [I.GOLD, 10]],
  wither: [[I.STAR, 1], [I.DIAMOND, 6], [I.GOLD, 10]],
  warden: [[I.STAR, 1], [I.DIAMOND, 10], [I.GOLD, 16]],
  guardian: [[I.STAR, 1], [I.PEARL, 1], [I.DIAMOND, 6], [I.GOLD, 8]],
};
const CAM_NAMES = ['Primera persona', 'Tercera persona (detrás)', 'Tercera persona (delante)'];

// Resaltado y grietas del bloque apuntado
const highlight = new THREE.LineSegments(new THREE.EdgesGeometry(new THREE.BoxGeometry(1.005, 1.005, 1.005)), new THREE.LineBasicMaterial({ color: 0x000000 }));
highlight.visible = false; scene.add(highlight);
const crackTex = (() => {
  let sd = 12345; const rnd = () => (sd = (Math.imul(sd, 1664525) + 1013904223) >>> 0) / 4294967296;
  const pts = [];
  for (let b = 0; b < 6; b++) { let px = 8, py = 8; const a = rnd() * 6.28; for (let i = 0; i < 12; i++) { px += Math.cos(a + (rnd() - 0.5) * 1.3); py += Math.sin(a + (rnd() - 0.5) * 1.3); pts.push([Math.round(px), Math.round(py), i]); } }
  return Array.from({ length: 10 }, (_, s) => {
    const c = document.createElement('canvas'); c.width = c.height = 16; const x = c.getContext('2d');
    x.fillStyle = 'rgba(0,0,0,0.8)'; for (const [px, py, i] of pts) if (i <= (s + 1) * 1.25) x.fillRect(px, py, 1, 1);
    const t = new THREE.CanvasTexture(c); t.magFilter = THREE.NearestFilter; t.minFilter = THREE.NearestFilter; t.generateMipmaps = false; return t;
  });
})();
const crack = new THREE.Mesh(new THREE.BoxGeometry(1.01, 1.01, 1.01), new THREE.MeshBasicMaterial({ map: crackTex[0], transparent: true, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -2 }));
crack.visible = false; scene.add(crack);

// Mano / ítem sostenido
const handMat = new THREE.MeshBasicMaterial({ transparent: true, side: THREE.DoubleSide, depthTest: false, fog: false });
const handIcon = new THREE.Mesh(new THREE.PlaneGeometry(0.55, 0.55), handMat);
const handArm = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.12, 0.5), new THREE.MeshBasicMaterial({ color: 0xd9a77f, depthTest: false, fog: false }));
const hand = new THREE.Group(); hand.add(handIcon, handArm); camera.add(hand);
handIcon.renderOrder = handArm.renderOrder = 999;

// ---------- Estado ----------
let state = 'menu'; // menu | loading | play | inv | pause | dead
let mode = 'survival', radius = settings.radius, camMode = settings.cam | 0;
const furnaces = new Map(); // "x,y,z" -> {slots:[entrada,combustible,salida], burn, burnMax, cook}
let model, furnRenderT = 0, weather, boss = null, ritual = null, bossHooks, quests, panelId = null;
let xpLevel = 0, xpPts = 0, darkTarget = 0, mmT = 0, trackT = 0, wBudget = 2;
let worldId = null, worldName = 'Mundo', playedSec = 0, createdAt = 0, thumbData = null, thumbReq = false, lastSaved = 0;
const xpNeed = (l) => 6 + l * 4;
function addXp(n) { xpPts += n; while (xpPts >= xpNeed(xpLevel)) { xpPts -= xpNeed(xpLevel); xpLevel++; if (ui) ui.toast('¡Nivel ' + xpLevel + '!'); sound('pop'); } }
let world, player, inv, sky, mobs, drops, particles, ui, seed = 1;
const mouse = { left: false, right: false };
const mining = { key: '', progress: 0 };
let swing = 0, breakCool = 0, placeCool = 0, attackCool = 0, lastHeld = -2, saveT = 0, hudT = 0;
let seedSpawn = null;

// ---------- Utilidades ----------
function showOverlay(which) {
  const o = $('overlay');
  o.classList.toggle('ingame', which === 'pause' || which === 'death');
  if (!which) { o.classList.add('hidden'); return; }
  o.classList.remove('hidden');
  for (const id of ['menu', 'pause', 'death']) $(id).classList.toggle('hidden', id !== which);
}
const sound = (n) => audio.play(n);

function findSpawnColumn(sd) {
  for (let r = 0; r < 600; r += 5)
    for (let a = 0; a < 12; a++) {
      const x = Math.round(Math.cos((a / 12) * Math.PI * 2) * r), z = Math.round(Math.sin((a / 12) * Math.PI * 2) * r);
      const ti = terrainInfo(x, z, sd);
      if (ti.h > SEA + 3 && ti.h < SEA + 16 && ti.biome !== 'ocean' && ti.biome !== 'mountains') return [x, z];
    }
  return [0, 0];
}
function groundSpawn(cx, cz) {
  for (let r = 0; r < 12; r++)
    for (let dx = -r; dx <= r; dx++) for (let dz = -r; dz <= r; dz++) {
      if (Math.max(Math.abs(dx), Math.abs(dz)) !== r) continue;
      const x = cx + dx, z = cz + dz, t = world.topY(x, z);
      if (t < SEA) continue;
      const id = world.getBlock(x, t, z);
      if ((id === B.GRASS || id === B.SAND || id === B.SNOW) && !world.isSolid(x, t + 1, z) && !world.isSolid(x, t + 2, z)) return new THREE.Vector3(x + 0.5, t + 1, z + 0.5);
    }
  return new THREE.Vector3(cx + 0.5, Math.max(world.topY(cx, cz), SEA) + 2, cz + 0.5);
}

function dropItem(id, n, tossFrom = null) {
  const e = player.eye, d = player.lookDir();
  drops.spawn(e.x + d.x * 0.5, e.y - 0.3, e.z + d.z * 0.5, id, n, false);
  const last = drops.list[drops.list.length - 1];
  last.vel.set(d.x * 5, 2.5, d.z * 5); last.age = -1.2; // retraso antes de poder recogerlo de nuevo
}

function explode(x, y, z, r, ds = 1) {
  sound('explode');
  const R = Math.ceil(r) + 1;
  for (let dx = -R; dx <= R; dx++) for (let dy = -R; dy <= R; dy++) for (let dz = -R; dz <= R; dz++) {
    const dist = Math.hypot(dx, dy, dz);
    if (dist > r * (0.7 + Math.random() * 0.3)) continue;
    const bx = Math.floor(x) + dx, by = Math.floor(y) + dy, bz = Math.floor(z) + dz;
    const id = world.getBlock(bx, by, bz);
    if (id === AIR || id === B.BEDROCK || LIQUID[id]) continue;
    world.setBlock(bx, by, bz, AIR);
    if (mode === 'survival' && Math.random() < 0.2) { const d = dropOf(id, null); if (d) drops.spawn(bx + 0.5, by + 0.5, bz + 0.5, d[0], d[1]); }
  }
  particles.burst(x, y, z, [0.5, 0.5, 0.5], 40, 7); particles.burst(x, y, z, [0.9, 0.5, 0.1], 20, 6);
  const dx = player.pos.x - x, dz = player.pos.z - z, d = Math.hypot(dx, player.pos.y + 0.9 - y, dz);
  if (d < r * 2) player.damage(Math.round((1 - d / (r * 2)) * 22 * ds), (dx / (Math.hypot(dx, dz) || 1)) * 9, (dz / (Math.hypot(dx, dz) || 1)) * 9);
  for (const m of [...mobs.list]) if (Math.hypot(m.pos.x - x, m.pos.y - y, m.pos.z - z) < r * 2) mobs.damage(m, 14, x, z);
}

// ---------- Interacción ----------
function breakBlock(hit) {
  const id = world.getBlock(hit.x, hit.y, hit.z);
  if (id === AIR || id === B.BEDROCK) return;
  const held = inv.held();
  world.setBlock(hit.x, hit.y, hit.z, AIR);
  if (id === B.FURNACE) {
    const key = hit.x + ',' + hit.y + ',' + hit.z, f = furnaces.get(key);
    if (f) { for (const sl of f.slots) if (sl) drops.spawn(hit.x + 0.5, hit.y + 0.5, hit.z + 0.5, sl.id, sl.n); furnaces.delete(key); }
  }
  if (id === B.COAL_ORE || id === B.IRON_ORE || id === B.GOLD_ORE || id === B.DIAMOND_ORE) addXp(id === B.DIAMOND_ORE ? 8 : 3);
  particles.blockBreak(hit.x, hit.y, hit.z, id);
  sound('break');
  if (mode === 'survival') {
    const d = dropOf(id, held);
    if (d) drops.spawn(hit.x + 0.5, hit.y + 0.4, hit.z + 0.5, d[0], d[1]);
    if (toolOf(held) && BLOCKS[id].hardness > 0) { if (inv.wearHeld(1)) { sound('break'); ui.toast('¡Se ha roto la herramienta!'); } ui.renderHotbar(); }
  }
  // Un cactus sin base se rompe
  if (world.getBlock(hit.x, hit.y + 1, hit.z) === B.CACTUS && !BLOCKS[id].cactusOk) { /* los cactus se apoyan; se quedan por simplicidad */ }
}

function useItem() {
  const eye = player.eye, dir = player.lookDir();
  const hit = world.raycast(eye, dir, mode === 'creative' ? 7 : 5.5);
  swing = Math.max(swing, 0.001);
  if (hit && hit.id === B.TABLE && !player.keys.has('ShiftLeft')) { openInventory(3); return; }
  if (hit && hit.id === B.FURNACE && !player.keys.has('ShiftLeft')) {
    const key = hit.x + ',' + hit.y + ',' + hit.z;
    if (!furnaces.has(key)) furnaces.set(key, { slots: [null, null, null], burn: 0, burnMax: 1, cook: 0 });
    openInventory('furnace', furnaces.get(key)); return;
  }
  const held = inv.held();
  if (!held) return;
  const food = ITEMS[held.id] && ITEMS[held.id].food;
  if (food) {
    if (mode === 'survival' && player.food < 20) { player.eat(food); inv.consumeHeld(1); sound('eat'); ui.renderHotbar(); }
    return;
  }
  if (!isBlock(held.id) || !hit) return;
  const px = hit.x + hit.normal[0], py = hit.y + hit.normal[1], pz = hit.z + hit.normal[2];
  if (py < 0 || py >= CH) return;
  const there = world.getBlock(px, py, pz);
  if (there !== AIR && !LIQUID[there]) return;
  if (SOLID[held.id] && player.intersectsBlock(px, py, pz)) return;
  if (SOLID[held.id] && mobs.list.some((m) => Math.abs(m.pos.x - (px + 0.5)) < m.hw + 0.5 && Math.abs(m.pos.z - (pz + 0.5)) < m.hw + 0.5 && m.pos.y < py + 1 && m.pos.y + m.h > py)) return;
  if (held.id === B.COMMAND) {
    if (boss || ritual) { ui.toast('Ya hay una tormenta en curso'); return; }
    world.setBlock(px, py, pz, held.id); sound('place');
    if (mode === 'survival') { inv.consumeHeld(1); ui.renderHotbar(); }
    startRitual(px, py, pz); return;
  }
  world.setBlock(px, py, pz, held.id);
  sound('place');
  if (mode === 'survival') { inv.consumeHeld(1); ui.renderHotbar(); }
}

function setBossBar(type) {
  const inf = BOSS_INFO[type];
  $('bossFill').style.background = `linear-gradient(${inf.color}, #25103a)`;
  $('bossbar').style.setProperty('--bc', inf.color);
}
function spawnBossOf(type, x, y, z) {
  const inf = BOSS_INFO[type], pos = new THREE.Vector3(x, y, z);
  boss = type === 'storm' ? new WitherStorm(scene, bossHooks, pos) : inf.make(scene, bossHooks, pos);
  setBossBar(type);
  if (type === 'storm' || type === 'dragon' || type === 'wither') { weather.set('storm'); weather.boss = true; weather.timer = 9999; }
  sound('roar');
}
function summonBoss(type) {
  if (boss || ritual) { ui.toast('Ya hay un jefe activo'); return false; }
  const inf = BOSS_INFO[type], look = player.lookDir(), l = Math.hypot(look.x, look.z) || 1, fx = look.x / l, fz = look.z / l;
  const dist = type === 'warden' ? 12 : type === 'guardian' ? 16 : type === 'wither' ? 20 : 26;
  const x = player.pos.x + fx * dist, z = player.pos.z + fz * dist;
  let y;
  if (inf.ground) { const t = world.topY(Math.floor(x), Math.floor(z)); y = t > 0 ? t + 1 : player.pos.y; }
  else y = player.pos.y + (inf.up === undefined ? 10 : inf.up) + (type === 'storm' ? 10 : 0);
  spawnBossOf(type, x, y, z);
  ui.toast('¡' + inf.name + ' ha sido invocado!');
  return true;
}
function summonMob(type) {
  const look = player.lookDir(), l = Math.hypot(look.x, look.z) || 1;
  for (let d = 6; d <= 10; d += 2) {
    const x = Math.floor(player.pos.x + (look.x / l) * d), z = Math.floor(player.pos.z + (look.z / l) * d), t = world.topY(x, z);
    if (t > 0) { mobs.add(type, x + 0.5, t + 1, z + 0.5); return; }
  }
  mobs.add(type, player.pos.x + 3, player.pos.y + 1, player.pos.z);
}
function despawnBoss() {
  if (boss) { boss.dispose(); boss = null; }
  ritual = null; weather.boss = false; darkTarget = 0; $('bossbar').classList.add('hidden'); ui.toast('Jefe descartado');
}

// ---------- Paneles (invocación y misiones) ----------
function openPanel(id) {
  if (state !== 'play') return;
  state = 'panel'; panelId = id; player.keys.clear(); mouse.left = mouse.right = false;
  document.exitPointerLock(); $(id).classList.remove('hidden');
  if (id === 'summon') renderSummon(); else renderQuests();
}
function closePanel(relock) {
  if (!panelId) return;
  $(panelId).classList.add('hidden'); panelId = null;
  if (relock) { state = 'play'; canvas.requestPointerLock(); } else { state = 'pause'; showOverlay('pause'); }
}
function renderSummon() {
  $('bossCards').innerHTML = BOSS_ORDER.map((t) => {
    const i = BOSS_INFO[t], won = quests.bosses.has(t);
    return `<div class="card" style="border-left:6px solid ${i.color}"><h4><span>${i.icon} ${i.name}</span><span class="tag">${i.hp} HP</span></h4><p>${i.desc}</p><button class="btn" data-boss="${t}">${won ? '✔ ' : ''}Invocar</button></div>`;
  }).join('');
  $('mobBtns').innerHTML = Object.keys(MOB_TYPES).map((t) => `<button class="btn" data-mob="${t}">${MOB_TYPES[t].name}</button>`).join('');
}
function renderQuests() {
  $('questTitle').textContent = `Misiones — ${quests.completed()}/${quests.total()} completadas`;
  let html = '', grp = '';
  for (const q of QUESTS) {
    if (q.group !== grp) { grp = q.group; html += `<div class="grp">${grp.toUpperCase()}</div>`; }
    const done = quests.done[q.id], p = quests.progress[q.id] || 0;
    const rw = q.reward.map(([id, n]) => `${n}× ${info(id).name}`).join(', ');
    html += `<div class="q ${done ? 'done' : ''}"><span class="ck">${done ? '✔' : '○'}</span><div><b>${q.title}</b>${q.desc}<div class="bar"><i style="width:${(p / q.n) * 100}%"></i></div></div><div class="rw">${p}/${q.n}<br>${rw}<br>+${q.xp} XP</div></div>`;
  }
  $('questList').innerHTML = html;
}
$('bossCards').addEventListener('click', (e) => { const t = e.target.closest('[data-boss]'); if (t && state === 'panel') { closePanel(true); summonBoss(t.dataset.boss); } });
$('mobBtns').addEventListener('click', (e) => { const t = e.target.closest('[data-mob]'); if (t && state === 'panel') { summonMob(t.dataset.mob); ui.toast(MOB_TYPES[t.dataset.mob].name + ' invocado'); } });
$('bDespawn').onclick = () => { despawnBoss(); };

// ---------- Minimapa ----------
const mmCtx = $('minimap').getContext('2d'), mmImg = mmCtx.createImageData(64, 64), mmCol = {};
for (const d of Object.values(BLOCKS)) { const c = tileColor(d.tiles[0]); mmCol[d.id] = [c[0] * 255, c[1] * 255, c[2] * 255]; }
function drawMinimap() {
  const px = Math.floor(player.pos.x), pz = Math.floor(player.pos.z), data = mmImg.data;
  for (let j = 0; j < 64; j++) for (let i = 0; i < 64; i++) {
    const x = px + i - 32, z = pz + j - 32, top = world.topY(x, z), o = (j * 64 + i) * 4;
    let c;
    if (top < 0) c = [20, 20, 30];
    else if (top < SEA && world.getBlock(x, SEA, z) === B.WATER) c = [38 + top, 84 + top, 190];
    else {
      const base = mmCol[world.getBlock(x, top, z)] || [90, 90, 90], f = Math.max(0.6, Math.min(1.25, 0.9 + (top - player.pos.y) * 0.012));
      c = [base[0] * f, base[1] * f, base[2] * f];
    }
    data[o] = c[0]; data[o + 1] = c[1]; data[o + 2] = c[2]; data[o + 3] = 255;
  }
  mmCtx.putImageData(mmImg, 0, 0);
  mmCtx.imageSmoothingEnabled = false; mmCtx.drawImage($('minimap'), 0, 0, 64, 64, 0, 0, 128, 128);
  const dot = (wx, wz, col, r) => { const cx = (wx - px + 32) * 2, cy = (wz - pz + 32) * 2; if (cx < 2 || cy < 2 || cx > 126 || cy > 126) return; mmCtx.fillStyle = col; mmCtx.fillRect(cx - r, cy - r, r * 2, r * 2); };
  for (const m of mobs.list) dot(m.pos.x, m.pos.z, m.def.hostile ? '#ff4040' : '#ffffff', 1.5);
  if (boss) { const pulse = 3 + Math.sin(performance.now() / 150) * 1.2; const bx = boss.pos.x, bz = boss.pos.z, cx = Math.max(6, Math.min(122, (bx - px + 32) * 2)), cy = Math.max(6, Math.min(122, (bz - pz + 32) * 2)); mmCtx.fillStyle = '#d050ff'; mmCtx.fillRect(cx - pulse, cy - pulse, pulse * 2, pulse * 2); mmCtx.strokeStyle = '#fff'; mmCtx.strokeRect(cx - pulse, cy - pulse, pulse * 2, pulse * 2); }
  mmCtx.save(); mmCtx.translate(64 + (player.pos.x - px) * 2, 64 + (player.pos.z - pz) * 2); mmCtx.rotate(-player.yaw + Math.PI);
  mmCtx.fillStyle = '#fff'; mmCtx.strokeStyle = '#000'; mmCtx.beginPath(); mmCtx.moveTo(0, 6); mmCtx.lineTo(4.5, -4.5); mmCtx.lineTo(0, -2); mmCtx.lineTo(-4.5, -4.5); mmCtx.closePath(); mmCtx.fill(); mmCtx.stroke(); mmCtx.restore();
}
function updateTracker() {
  $('tracker').innerHTML = quests.active(3).map((q) => `<div class="qt"><b>${q.title}</b>${q.desc} (${quests.progress[q.id] || 0}/${q.n})<div class="qb"><i style="width:${((quests.progress[q.id] || 0) / q.n) * 100}%"></i></div></div>`).join('');
}

function startRitual(x, y, z) {
  ritual = { x, y, z, t: 5, s: 0 };
  sound('roar'); weather.set('storm'); weather.boss = true;
  ui.toast('El bloque de comandos late… ¡aléjate!');
}
function updateRitual(dt) {
  ritual.t -= dt; ritual.s -= dt; weather.timer = 9999;
  if (ritual.s <= 0) { ritual.s = 0.9; weather.strike(player, false, { x: ritual.x, z: ritual.z }); particles.burst(ritual.x + 0.5, ritual.y + 1, ritual.z + 0.5, [0.7, 0.3, 1], 20, 5); }
  if (ritual.t <= 0) {
    const r = ritual; ritual = null;
    world.setBlock(r.x, r.y, r.z, AIR);
    spawnBossOf('storm', r.x + 0.5, r.y + 14, r.z + 0.5);
    sound('roar'); ui.toast('¡LA TORMENTA WITHER HA DESPERTADO!');
  }
}

function attack() {
  const eye = player.eye, dir = player.lookDir();
  const bossHit = boss && boss.raycast(eye, dir, 7);
  const blk = world.raycast(eye, dir, 7);
  if (bossHit && (!blk || bossHit.dist < blk.dist)) {
    const tb = toolOf(inv.held());
    boss.hit(mode === 'creative' ? 12 : (tb ? tb.dmg : 1), bossHit.crit, bossHit);
    sound('hit'); if (bossHit.crit) ui.toast('¡Golpe crítico al bloque de comandos!');
    if (mode === 'survival' && tb) { inv.wearHeld(1); ui.renderHotbar(); }
    return true;
  }
  const mh = mobs.raycast(eye, dir, 3.6);
  const bh = world.raycast(eye, dir, 3.6);
  if (!mh || (bh && bh.dist < mh.dist)) return false;
  const t = toolOf(inv.held());
  const dmg = mode === 'creative' ? 20 : (t ? t.dmg : 1);
  mobs.damage(mh.mob, dmg, player.pos.x, player.pos.z);
  particles.burst(mh.mob.pos.x, mh.mob.pos.y + mh.mob.h * 0.6, mh.mob.pos.z, [0.8, 0.1, 0.1], 6, 2.5);
  if (mode === 'survival' && t) { inv.wearHeld(1); ui.renderHotbar(); }
  return true;
}

function updateInteraction(dt) {
  const eye = player.eye, dir = player.lookDir();
  const hit = world.raycast(eye, dir, mode === 'creative' ? 7 : 5.5);
  highlight.visible = !!hit;
  if (hit) highlight.position.set(hit.x + 0.5, hit.y + 0.5, hit.z + 0.5);
  breakCool = Math.max(0, breakCool - dt); placeCool = Math.max(0, placeCool - dt); attackCool = Math.max(0, attackCool - dt);
  let progress = 0;
  if (mouse.left && hit) {
    const key = hit.x + ',' + hit.y + ',' + hit.z;
    if (key !== mining.key) { mining.key = key; mining.progress = 0; }
    swing = swing > 0 ? swing : 0.001;
    if (mode === 'creative') { if (breakCool <= 0) { breakBlock(hit); breakCool = 0.2; } }
    else {
      const bt = breakTime(hit.id, inv.held()) * (player.effects.fatigue > 0 ? 3 : 1);
      mining.progress += dt / bt;
      progress = Math.min(1, mining.progress);
      if (Math.floor(mining.progress * 6) !== Math.floor((mining.progress - dt / bt) * 6)) sound('hit');
      if (mining.progress >= 1) { breakBlock(hit); mining.key = ''; mining.progress = 0; progress = 0; }
    }
    crack.position.set(hit.x + 0.5, hit.y + 0.5, hit.z + 0.5);
  } else { mining.key = ''; mining.progress = 0; }
  crack.visible = progress > 0; if (progress > 0) crack.material.map = crackTex[Math.min(9, Math.floor(progress * 10))];
  $('breakbar').classList.toggle('hidden', progress <= 0);
  $('breakbar').firstElementChild.style.width = progress * 100 + '%';
  if (mouse.right && placeCool <= 0) { placeCool = 0.22; useItem(); }
}

function tickFurnaces(dt) {
  for (const f of furnaces.values()) {
    const [inp, fuel, out] = f.slots;
    const rec = inp && SMELT[inp.id];
    const can = rec && (!out || (out.id === rec[0] && out.n + rec[1] <= maxStack(rec[0])));
    if (f.burn > 0) f.burn -= dt;
    if (can) {
      if (f.burn <= 0 && fuel && FUEL[fuel.id]) { f.burn = f.burnMax = FUEL[fuel.id]; fuel.n--; if (fuel.n <= 0) f.slots[1] = null; }
      if (f.burn > 0) {
        f.cook += dt;
        if (f.cook >= SMELT_TIME) {
          f.cook = 0; inp.n--; if (inp.n <= 0) f.slots[0] = null;
          if (out) out.n += rec[1]; else f.slots[2] = { id: rec[0], n: rec[1], d: 0 };
        }
      } else f.cook = Math.max(0, f.cook - dt * 2);
    } else f.cook = 0;
  }
}

let camLabelT = 0;
function setCamMode(m) {
  camMode = m; settings.cam = m; saveSettings();
  $('bCam').textContent = 'Cámara: ' + CAM_NAMES[m];
  if (ui) ui.toast('Cámara: ' + CAM_NAMES[m]);
}
function applyCamera() {
  if (player.dead) { model.group.visible = false; return; }
  model.group.visible = camMode !== 0; hand.visible = camMode === 0;
  if (camMode === 0) return;
  const eye = player.eye, look = player.lookDir().multiplyScalar(camMode === 1 ? -1 : 1);
  const r = world.raycast(eye, look, 4.2);
  const dist = r ? Math.max(0.3, r.dist - 0.3) : 4.2;
  camera.position.copy(eye).addScaledVector(look, dist);
  if (camMode === 1) camera.rotation.set(player.pitch, player.yaw, 0, 'YXZ');
  else camera.rotation.set(-player.pitch, player.yaw + Math.PI, 0, 'YXZ');
}

function updateHand(dt) {
  const held = inv.held();
  const id = held ? held.id : 0;
  model.setHeld(id);
  if (id !== lastHeld) {
    lastHeld = id;
    if (id) { handMat.map = iconTexture(id); handMat.needsUpdate = true; }
    handIcon.visible = !!id; handArm.visible = !id;
    handIcon.scale.setScalar(isFlat(id) ? 0.7 : 0.6);
  }
  if (swing > 0) { swing += dt * 3.5; if (swing >= 1) swing = mouse.left ? 0.001 : 0; }
  const s = Math.sin(Math.min(1, swing) * Math.PI);
  hand.position.set(0.5 - s * 0.12, -0.5 + s * 0.08 - Math.sin(performance.now() / 400) * 0.004, -0.85 - s * 0.1);
  hand.rotation.set(-s * 0.9, -0.35, -s * 0.2);
  if (!id) { handArm.position.set(0, -0.1, -0.1); handArm.rotation.set(0.4, 0, 0); }
}

// ---------- Estados / UI ----------
function openInventory(size, furnace = null) {
  if (state !== 'play') return;
  state = 'inv'; player.keys.clear(); mouse.left = mouse.right = false;
  document.exitPointerLock();
  ui.open(size, furnace);
}
function closeInventory(relock) {
  ui.close();
  if (relock) { state = 'play'; canvas.requestPointerLock(); }
  else { state = 'pause'; showOverlay('pause'); }
}

function syncSelect() {
  ui.renderHotbar();
  const h = inv.held();
  if (h) ui.toast(info(h.id).name);
}

function onDeath() {
  darkTarget = 0;
  if (boss) { boss.dispose(); boss = null; weather.boss = false; weather.set('rain'); $('bossbar').classList.add('hidden'); ui.toast('La tormenta se retira…'); }
  ritual = null;
  state = 'dead'; sound('die'); player.keys.clear(); mouse.left = mouse.right = false;
  for (let i = 0; i < 36; i++) { const s = inv.slots[i]; if (s) { drops.spawn(player.pos.x, player.pos.y + 1, player.pos.z, s.id, s.n); inv.slots[i] = null; } }
  ui.renderHotbar();
  document.exitPointerLock();
  showOverlay('death');
}

// ---------- Guardado ----------
async function saveGame() {
  if (!world || !worldId) return false;
  const meta = { v: 2, gen: 2, seed, mode, time: sky.time, pos: player.pos.toArray(), yaw: player.yaw, pitch: player.pitch,
    hp: player.hp, food: player.food, spawn: player.spawn.toArray(), inv: inv.toJSON(), furnaces: [...furnaces.entries()], weather: weather.toJSON(), quests: quests.toJSON(), xp: { l: xpLevel, p: xpPts } };
  const entries = [...world.unsaved].filter((k) => world.chunks.has(k)).map((k) => [k, new Uint8Array(world.chunks.get(k))]);
  const ok = await save.saveWorld(worldId, meta, entries, { name: worldName, mode, seed, created: createdAt, played: Math.floor(playedSec), level: xpLevel, thumb: thumbData });
  if (ok) { world.unsaved.clear(); lastSaved = Date.now(); }
  return ok;
}
function captureThumb() {
  try { const c = document.createElement('canvas'); c.width = 160; c.height = 90; c.getContext('2d').drawImage(canvas, 0, 0, 160, 90); thumbData = c.toDataURL('image/jpeg', 0.6); } catch {}
}
async function saveWithFeedback() {
  thumbReq = true; await new Promise((r) => setTimeout(r, 120));
  const ok = await saveGame();
  ui.toast(ok ? '💾 Partida guardada' : '⚠ No se pudo guardar');
  return ok;
}

// ---------- Arranque de partida ----------
async function startGame({ id, name, seed: sd, mode: md, saved, meta, created, played }) {
  state = 'loading'; mode = md; seed = sd;
  worldId = id; worldName = name || 'Mundo'; createdAt = created || Date.now(); playedSec = played || 0; thumbData = null;
  showOverlay('menu'); $('msg').textContent = 'Generando mundo…';
  $('menuBody').classList.add('hidden');

  furnaces.clear();
  world = new World(scene, materials, seed, saved);
  inv = new Inventory();
  player = new Player(world, camera);
  player.mode = mode;
  if (!model) model = new PlayerModel(scene);
  sky = new Sky(scene, camera, materials);
  weather = new Weather(scene, {
    world: () => world, sky: () => sky, sound: (n, v) => audio.play(n, v),
    burst: (x, y, z) => { particles.burst(x, y, z, [1, 1, 0.8], 24, 6); particles.burst(x, y, z, [0.3, 0.3, 0.35], 14, 4); },
    hurtPlayer: (n) => player.damage(n), strikeMobs: (x, z) => { for (const m of [...mobs.list]) if (Math.hypot(m.pos.x - x, m.pos.z - z) < 3.5) mobs.damage(m, 12, x, z); },
  });
  bossHooks = {
    world: () => world, explode: (x, y, z, r, ds) => explode(x, y, z, r, ds), toast: (m) => ui.toast(m), sound: (n, v) => audio.play(n, v),
    burst: (x, y, z, c, n, s) => particles.burst(x, y, z, c, n, s), hurtPlayer: (n, kx, kz) => player.damage(n, kx, kz),
    strikeNear: (x, z) => weather.strike(player, false, { x, z }), minions: () => mobs.list.filter((m) => m.def.hostile).length,
    effect: (name, sec) => { if (mode === 'survival') player.effects[name] = Math.max(player.effects[name], sec); },
    darkness: (l) => { darkTarget = l; },
    player: () => player,
    spawnMinion: (type) => {
      for (let i = 0; i < 6; i++) {
        const a = Math.random() * Math.PI * 2, d = 10 + Math.random() * 8, x = Math.floor(player.pos.x + Math.cos(a) * d), z = Math.floor(player.pos.z + Math.sin(a) * d), top = world.topY(x, z);
        if (top > 0 && !world.isSolid(x, top + 1, z)) { mobs.add(type || (Math.random() < 0.6 ? 'zombie' : 'creeper'), x + 0.5, top + 1, z + 0.5); return; }
      }
    },
    loot: (x, y, z, type = 'storm') => { for (const [id, n] of (LOOT[type] || LOOT.storm)) drops.spawn(x, y, z, id, n); },
    done: () => {
      const type = boss ? boss.type : 'storm';
      quests.event('boss', type); addXp(100); sound('craft');
      boss = null; weather.boss = false; darkTarget = 0;
      if (weather.state === 'storm') weather.set('rain');
      $('bossbar').classList.add('hidden');
    },
  };
  boss = null; ritual = null; panelId = null; darkTarget = 0;
  quests = new Quests({ reward: (items) => { for (const [id, n] of items) { const left = inv.add(id, n); if (left) dropItem(id, left); } ui.renderHotbar(); }, toast: (m) => ui.toast(m), xp: addXp, sound });
  drops = new Drops(scene, world);
  particles = new Particles(scene, world);
  mobs = new MobManager(scene, world, {
    killed: (type, xp) => { quests.event('kill', type); addXp(xp); },
    tp: (x, y, z) => { particles.burst(x, y, z, [0.7, 0.2, 1], 14, 3); sound('pop'); },
    hurtPlayer: (d, kx, kz) => player.damage(d, kx, kz),
    explode, drop: (x, y, z, id, n) => drops.spawn(x, y, z, id, n), sound,
    puff: (x, y, z) => particles.burst(x, y, z, [0.9, 0.9, 0.9], 12, 3),
  });
  ui = new UI({ inv, player, getMode: () => mode, dropItem, sound, onSelect: syncSelect, onCraft: (id, n) => quests.event('craft', id, n) });
  xpLevel = 0; xpPts = 0;

  player.events.onHurt = () => { sound('hurt'); const v = $('vignette'); v.classList.add('hurt'); setTimeout(() => v.classList.remove('hurt'), 120); };
  player.events.onStep = () => sound('step');
  player.events.onLand = (d) => sound(d > 3 ? 'hurt' : 'place');
  player.events.onSplash = () => sound('splash');
  player.events.onDeath = onDeath;

  let cx, cz;
  if (meta) {
    weather.load(meta.weather); quests.load(meta.quests); if (meta.xp) { xpLevel = meta.xp.l; xpPts = meta.xp.p; } inv.load(meta.inv); (meta.furnaces || []).forEach(([k, f]) => furnaces.set(k, f)); sky.time = meta.time; player.hp = meta.hp; player.food = meta.food;
    player.yaw = meta.yaw; player.pitch = meta.pitch; player.spawn.fromArray(meta.spawn);
    player.pos.fromArray(meta.pos); cx = Math.floor(meta.pos[0]); cz = Math.floor(meta.pos[2]);
  } else { [cx, cz] = findSpawnColumn(seed); player.pos.set(cx + 0.5, 70, cz + 0.5); }

  // Cargar la zona inicial antes de soltar al jugador
  await new Promise((resolve) => {
    const tick = () => {
      const pending = world.update(cx, cz, 3, 10);
      $('msg').textContent = 'Generando mundo… ' + Math.max(0, 100 - pending * 2) + '%';
      if (pending > 0) setTimeout(tick, 0); else resolve();
    };
    tick();
  });
  if (!meta) { const sp = groundSpawn(cx, cz); player.pos.copy(sp); player.spawn.copy(sp); }
  else player.vel.set(0, 0, 0);

  ui.renderHotbar(); ui.renderStats(); updateHand(0); setCamMode(camMode);
  window.__game = { world, player, inv, sky, mobs, drops, ui, camera, scene, renderer, get mode() { return mode; }, set mode(v) { mode = v; player.mode = v; }, get state() { return state; }, set state(v) { state = v; }, explode, saveGame, openInventory, mouse, useItem, breakBlock, furnaces, setCam: setCamMode, get weather() { return weather; }, get boss() { return boss; }, summon: (x, y, z) => spawnBossOf('storm', x, y, z), summonBoss, summonMob, get quests() { return quests; }, openPanel, closePanel, addXp, terrainInfo, get xp() { return [xpLevel, xpPts]; } };
  state = 'play'; showOverlay(null);
  canvas.requestPointerLock();
  setTimeout(() => { if (document.pointerLockElement !== canvas && state === 'play') { state = 'pause'; showOverlay('pause'); } }, 1500);
}

// ---------- Eventos ----------
document.addEventListener('pointerlockchange', () => {
  const locked = document.pointerLockElement === canvas;
  if (locked) { if (state === 'pause' || state === 'play') { state = 'play'; showOverlay(null); } }
  else { player && player.keys.clear(); mouse.left = mouse.right = false; if (state === 'play') { state = 'pause'; showOverlay('pause'); } }
});
document.addEventListener('mousemove', (e) => {
  if (state !== 'play' || document.pointerLockElement !== canvas) return;
  player.yaw -= e.movementX * 0.0022 * settings.sens;
  player.pitch = Math.max(-Math.PI / 2 + 0.01, Math.min(Math.PI / 2 - 0.01, player.pitch - e.movementY * 0.0022 * settings.sens));
});
document.addEventListener('keydown', (e) => {
  audio.unlock();
  if (state === 'panel') {
    if (e.code === 'Escape') closePanel(false);
    else if ((e.code === 'KeyB' && panelId === 'summon') || (e.code === 'KeyM' && panelId === 'quests')) closePanel(true);
    return;
  }
  if (state === 'inv') {
    if (e.code === 'KeyE') { e.preventDefault(); closeInventory(true); }
    else if (e.code === 'Escape') closeInventory(false);
    return;
  }
  if (state !== 'play') return;
  if (e.code.startsWith('Digit')) { const n = +e.code.slice(5) - 1; if (n >= 0 && n < 9) { inv.selected = n; syncSelect(); } return; }
  switch (e.code) {
    case 'KeyE': openInventory(2); return;
    case 'KeyB': openPanel('summon'); return;
    case 'KeyM': openPanel('quests'); return;
    case 'F3': e.preventDefault(); $('info').classList.toggle('hidden'); return;
    case 'KeyT': if (!e.repeat) { const st = weather.cycle(); ui.toast('Clima: ' + WEATHER_NAMES[st]); } return;
    case 'KeyV': case 'F5': e.preventDefault(); if (!e.repeat) setCamMode((camMode + 1) % 3); return;
    case 'KeyF': if (mode === 'creative' && !e.repeat) { player.flying = !player.flying; player.vel.y = 0; ui.toast(player.flying ? 'Vuelo activado' : 'Vuelo desactivado'); } return;
    case 'KeyG': if (!e.repeat) { mode = mode === 'creative' ? 'survival' : 'creative'; player.mode = mode; if (mode === 'survival') player.flying = false; ui.renderStats(); ui.toast('Modo ' + (mode === 'creative' ? 'creativo' : 'supervivencia')); } return;
    case 'KeyQ': if (mode === 'survival' && !e.repeat) { const h = inv.held(); if (h) { dropItem(h.id, 1); inv.consumeHeld(1); ui.renderHotbar(); } return; } break;
  }
  if (e.code === 'Space' || e.code.startsWith('Arrow')) e.preventDefault();
  player.keys.add(e.code);
});
document.addEventListener('keyup', (e) => player && player.keys.delete(e.code));
document.addEventListener('wheel', (e) => { if (state === 'play') { inv.selected = (inv.selected + Math.sign(e.deltaY) + 9) % 9; syncSelect(); } });
canvas.addEventListener('contextmenu', (e) => e.preventDefault());
document.addEventListener('mousedown', (e) => {
  if (state !== 'play' || document.pointerLockElement !== canvas) return;
  if (e.button === 0) { mouse.left = true; swing = swing || 0.001; if (attackCool <= 0) { if (attack()) { attackCool = 0.4; mouse.left = false; } } }
  else if (e.button === 2) { mouse.right = true; placeCool = 0.22; useItem(); }
});
document.addEventListener('mouseup', (e) => { if (e.button === 0) mouse.left = false; if (e.button === 2) mouse.right = false; });
document.addEventListener('visibilitychange', () => { if (document.hidden && state !== 'menu') saveGame(); });
addEventListener('beforeunload', () => { if (world && state !== 'menu') saveGame(); });
function resize() {
  renderer.setSize(innerWidth, innerHeight, false);
  camera.aspect = innerWidth / innerHeight; camera.updateProjectionMatrix();
}
addEventListener('resize', resize); resize();

$('bResume').onclick = () => { audio.unlock(); canvas.requestPointerLock(); };
$('bSave').onclick = async () => { thumbReq = true; await new Promise((r) => setTimeout(r, 120)); await saveGame(); location.reload(); };
$('bSaveNow').onclick = async () => { await saveWithFeedback(); $('bSaveNow').textContent = '💾 Guardado ✔'; setTimeout(() => ($('bSaveNow').textContent = '💾 Guardar partida'), 1500); };
$('bExport').onclick = async () => {
  await saveGame();
  const blob = await save.exportWorld(worldId), a = document.createElement('a');
  a.href = URL.createObjectURL(blob); a.download = worldName.replace(/[^\w\-]+/g, '_') + '.mcw'; a.click(); setTimeout(() => URL.revokeObjectURL(a.href), 4000);
};
$('bRespawn').onclick = () => { audio.unlock(); player.respawn(); state = 'play'; showOverlay(null); ui.renderStats(); canvas.requestPointerLock(); };
$('bCam').onclick = () => setCamMode((camMode + 1) % 3);
$('bPSummon').onclick = () => { showOverlay(null); state = 'play'; openPanel('summon'); };
$('bPQuests').onclick = () => { showOverlay(null); state = 'play'; openPanel('quests'); };
const bind = (id, label, key, fmt, apply) => {
  const el = $(id), out = $(label);
  el.value = settings[key]; out.textContent = fmt(settings[key]); if (apply) apply(settings[key]);
  el.oninput = (e) => { settings[key] = +e.target.value; out.textContent = fmt(settings[key]); if (apply) apply(settings[key]); saveSettings(); };
};
bind('rRadius', 'vRadius', 'radius', (v) => v, (v) => (radius = v));
bind('rFov', 'vFov', 'fov', (v) => v);
bind('rSens', 'vSens', 'sens', (v) => v.toFixed(1));
bind('rVol', 'vVol', 'vol', (v) => Math.round(v * 100), (v) => audio.setVolume(v));
$('bCam').textContent = 'Cámara: ' + CAM_NAMES[camMode];

// ---------- Bucle ----------
let last = performance.now(), fpsAcc = 0, fpsN = 0, fps = 0;
function frame(now) {
  requestAnimationFrame(frame);
  const dt = Math.min(0.1, (now - last) / 1000); last = now;
  if (!world || state === 'menu' || state === 'loading') return;
  fpsAcc += dt; fpsN++; if (fpsAcc >= 0.5) { fps = Math.round(fpsN / fpsAcc); fpsAcc = 0; fpsN = 0; }

  if (state !== 'pause') {
    player.update(dt);
    model.update(dt, player, swing);
    applyCamera();
    tickFurnaces(dt);
    const cx = Math.floor(player.pos.x), cz = Math.floor(player.pos.z);
    const snowing = biomeAt(cx, cz, seed) === 'snow';
    weather.update(dt, player, camera, snowing, player.headUnder);
    const exposed = world.skyLit(cx, Math.floor(player.pos.y + 1.6), cz);
    player.wind.x = weather.wind.x * 1.4 * exposed * (weather.state === 'clear' ? 0 : 1); player.wind.z = weather.wind.z * 1.4 * exposed * (weather.state === 'clear' ? 0 : 1);
    gameU.uTime.value += dt; gameU.uWind.value = 0.25 + weather.wind.s * 2.2;
    audio.setAmbient(weather.intensity * (0.25 + 0.75 * exposed) * (player.headUnder ? 0.2 : 1), weather.wind.s * (0.3 + 0.7 * exposed) * (weather.state === 'clear' ? 0.25 : 1), weather.t * 0.4);
    sky.update(dt, camera.position, radius * 16, player.headUnder, weather.wind);
    const pend = world.update(player.pos.x, player.pos.z, radius, wBudget);
    wBudget = pend > 40 ? 4 : 2;
    player.push.x = player.push.y = player.push.z = 0;
    if (ritual) updateRitual(dt);
    if (boss) {
      if (boss.type === 'storm' || boss.type === 'dragon' || boss.type === 'wither') { weather.timer = 9999; weather.boss = true; }
      boss.update(dt, player, world);
      if (boss) {
        $('bossbar').classList.remove('hidden');
        $('bossFill').style.width = Math.max(0, (boss.hp / boss.maxHp) * 100) + '%';
        $('bossPhase').textContent = 'Fase ' + boss.phase;
        if ($('bossName').firstChild.nodeValue !== boss.name + ' ') $('bossName').firstChild.nodeValue = boss.name + ' ';
      }
    }
    mobs.update(dt, player, mode, sky.daylight, radius);
    drops.update(dt, player, inv, (d) => { sound('pop'); ui.renderHotbar(); quests.event('collect', d.id, d.n); });
    particles.update(dt);
    if (state === 'play') updateInteraction(dt);
    updateHand(dt);
    $('water').classList.toggle('hidden', !player.headUnder);
    camera.fov += ((settings.fov + (player.keys.has('ShiftLeft') && player.keys.has('KeyW') ? 7 : 0)) - camera.fov) * Math.min(1, dt * 8);
    if (ui.isOpen && ui.furnace) { ui.furnaceBars(); furnRenderT -= dt; if (furnRenderT <= 0) { furnRenderT = 0.5; ui.render(); } }
    camera.updateProjectionMatrix();
    hudT -= dt;
    if (hudT <= 0) {
      hudT = 0.2; ui.renderStats();
      const h = ((sky.time * 24 + 6) % 24), hh = Math.floor(h), mm = Math.floor((h - hh) * 60);
      $('info').textContent = `${fps} FPS · ${mode === 'creative' ? 'Creativo' : 'Supervivencia'}\nXYZ ${player.pos.x.toFixed(1)} ${player.pos.y.toFixed(1)} ${player.pos.z.toFixed(1)}\n` +
        `Bioma: ${biomeAt(Math.floor(player.pos.x), Math.floor(player.pos.z), seed)} · ${String(hh).padStart(2, '0')}:${String(mm).padStart(2, '0')}\nMobs: ${mobs.list.length} · Clima: ${WEATHER_NAMES[weather.state]}${snowing ? ' (nieve)' : ''} · Viento ${(weather.wind.s * 20).toFixed(0)} km/h${player.flying ? ' · [VUELO]' : ''}`;
      $('cam').textContent = '📷 ' + CAM_NAMES[camMode] + '  [V]';
      $('mmInfo').textContent = `${Math.floor(player.pos.x)}, ${Math.floor(player.pos.y)}, ${Math.floor(player.pos.z)}\n${String(hh).padStart(2, '0')}:${String(mm).padStart(2, '0')} · ${WEATHER_NAMES[weather.state]}\n📷 ${['1ª persona', '3ª detrás', '3ª delante'][camMode]} · ${fps} FPS`;
      $('xpFill').style.width = (xpPts / xpNeed(xpLevel)) * 100 + '%'; $('xpLvl').textContent = xpLevel;
      $('xp').style.visibility = mode === 'survival' ? 'visible' : 'hidden';
      const ef = []; if (player.effects.poison > 0) ef.push(`<span style="border-color:#7a2">☠ Veneno ${Math.ceil(player.effects.poison)}s</span>`); if (player.effects.fatigue > 0) ef.push(`<span style="border-color:#6cf">⛏ Fatiga ${Math.ceil(player.effects.fatigue)}s</span>`);
      $('effects').innerHTML = ef.join('');
      $('darkness').style.opacity = darkTarget;
    }
    mmT -= dt; if (mmT <= 0) { mmT = 0.4; drawMinimap(); }
    trackT -= dt; if (trackT <= 0) { trackT = 0.5; updateTracker(); }
    playedSec += dt;
    saveT += dt; if (saveT > 25) { saveT = 0; thumbReq = true; }
  }
  renderer.render(scene, camera);
  if (thumbReq) { thumbReq = false; captureThumb(); saveGame(); }
}
requestAnimationFrame(frame);

// ---------- Menú inicial ----------
(async function menu() {
  const fmt = (sec) => (sec >= 3600 ? Math.floor(sec / 3600) + ' h ' : '') + Math.floor((sec % 3600) / 60) + ' min';
  const hashSeed = (str) => { let h = 7; for (const c of str) h = (Math.imul(h, 31) + c.charCodeAt(0)) | 0; return Math.abs(h) % 900000 + 1; };
  async function refresh() {
    const list = await save.listWorlds();
    $('worldsBox').classList.toggle('hidden', !list.length);
    $('worldList').innerHTML = list.map((w) => `<div class="wcard" data-id="${w.id}"><img src="${w.thumb || ''}" alt=""><div><b>${(w.name || 'Mundo').replace(/</g, '&lt;')}</b><small>${w.mode === 'creative' ? 'Creativo' : 'Supervivencia'} · nivel ${w.level || 0} · ${fmt(w.played || 0)} · ${new Date(w.updated).toLocaleString()}</small></div><div class="wb"><button class="play" data-act="play">▶ Jugar</button><button data-act="export" title="Exportar">⬇</button><button data-act="rename" title="Renombrar">✎</button><button data-act="del" title="Borrar">🗑</button></div></div>`).join('');
    return list;
  }
  let list = await refresh();
  $('msg').textContent = list.length ? 'Elige un mundo o crea uno nuevo' : 'Elige cómo jugar';
  const fresh = (md) => {
    audio.unlock();
    const name = $('wName').value.trim() || `Mundo ${list.length + 1}`, sv = $('wSeed').value.trim();
    const sd = !sv ? 1 + Math.floor(Math.random() * 900000) : /^\d+$/.test(sv) ? Number(sv) % 900000 + 1 : hashSeed(sv);
    startGame({ id: save.newId(), name, seed: sd, mode: md, saved: new Map(), meta: null });
  };
  $('bSurvival').onclick = () => fresh('survival');
  $('bCreative').onclick = () => fresh('creative');
  $('worldList').addEventListener('click', async (e) => {
    const btn = e.target.closest('button'), card = e.target.closest('.wcard'); if (!btn || !card) return;
    const id = card.dataset.id, w = list.find((x) => x.id === id);
    if (btn.dataset.act === 'play') {
      audio.unlock(); $('msg').textContent = 'Cargando mundo…';
      const data = await save.loadWorld(id);
      if (!data.meta) { $('msg').textContent = 'No se pudo leer este mundo'; return; }
      startGame({ id, name: w.name, seed: data.meta.seed, mode: data.meta.mode, saved: data.chunks, meta: data.meta, created: w.created, played: w.played });
    } else if (btn.dataset.act === 'del') {
      if (confirm(`¿Borrar "${w.name}" para siempre?`)) { await save.deleteWorld(id); list = await refresh(); }
    } else if (btn.dataset.act === 'rename') {
      const n = prompt('Nuevo nombre', w.name); if (n && n.trim()) { await save.renameWorld(id, n.trim().slice(0, 28)); list = await refresh(); }
    } else if (btn.dataset.act === 'export') {
      const blob = await save.exportWorld(id), a = document.createElement('a');
      a.href = URL.createObjectURL(blob); a.download = (w.name || 'mundo').replace(/[^\w\-]+/g, '_') + '.mcw'; a.click(); setTimeout(() => URL.revokeObjectURL(a.href), 4000);
    }
  });
  $('bImport').onclick = () => $('fImport').click();
  $('fImport').onchange = async (e) => {
    const f = e.target.files[0]; if (!f) return;
    try { await save.importWorld(f); list = await refresh(); $('msg').textContent = '✔ Partida importada'; } catch { $('msg').textContent = '⚠ Archivo no válido'; }
    e.target.value = '';
  };
  window.__menu = { refresh: async () => (list = await refresh()) };
})();
