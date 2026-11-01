import * as THREE from 'three';
import { createAtlas, tileColor } from './atlas.js';
import { initIcons, iconTexture, tileURL } from './icons.js';
import { PlayerModel } from './playermodel.js';
import { World, terrainHeight, biomeAt, SEA, CH } from './world.js';
import { Player } from './player.js';
import { Inventory } from './inventory.js';
import { Sky } from './sky.js';
import { Drops, Particles } from './entities.js';
import { MobManager } from './mobs.js';
import { UI } from './ui.js';
import * as audio from './audio.js';
import * as save from './save.js';
import { B, I, AIR, BLOCKS, ITEMS, LIQUID, SOLID, SMELT, FUEL, SMELT_TIME, info, isBlock, isFlat, maxStack, toolOf, breakTime, dropOf } from './blocks.js';

const $ = (id) => document.getElementById(id);
const canvas = $('game');
const renderer = new THREE.WebGLRenderer({ canvas, antialias: false });
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
function patchChunkMaterial(m) {
  m.onBeforeCompile = (sh) => {
    sh.uniforms.uTint = tint;
    sh.vertexShader = sh.vertexShader
      .replace('#include <common>', '#include <common>\nattribute float blight;\nuniform vec3 uTint;')
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
const settings = { radius: 6, fov: 75, sens: 1, vol: 0.5, cam: 0 };
try { Object.assign(settings, JSON.parse(localStorage.getItem('mcweb-settings') || '{}')); } catch {}
const saveSettings = () => { try { localStorage.setItem('mcweb-settings', JSON.stringify(settings)); } catch {} };
const CAM_NAMES = ['Primera persona', 'Tercera persona (detrás)', 'Tercera persona (delante)'];

// Resaltado y grietas del bloque apuntado
const highlight = new THREE.LineSegments(new THREE.EdgesGeometry(new THREE.BoxGeometry(1.005, 1.005, 1.005)), new THREE.LineBasicMaterial({ color: 0x000000 }));
highlight.visible = false; scene.add(highlight);
const crack = new THREE.Mesh(new THREE.BoxGeometry(1.01, 1.01, 1.01), new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 0, depthWrite: false }));
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
let model, furnRenderT = 0;
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
      if (terrainHeight(x, z, sd) > SEA + 3) return [x, z];
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

function explode(x, y, z, r) {
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
  if (d < r * 2) player.damage(Math.round((1 - d / (r * 2)) * 22), (dx / (Math.hypot(dx, dz) || 1)) * 9, (dz / (Math.hypot(dx, dz) || 1)) * 9);
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
  world.setBlock(px, py, pz, held.id);
  sound('place');
  if (mode === 'survival') { inv.consumeHeld(1); ui.renderHotbar(); }
}

function attack() {
  const eye = player.eye, dir = player.lookDir();
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
      const bt = breakTime(hit.id, inv.held());
      mining.progress += dt / bt;
      progress = Math.min(1, mining.progress);
      if (Math.floor(mining.progress * 6) !== Math.floor((mining.progress - dt / bt) * 6)) sound('hit');
      if (mining.progress >= 1) { breakBlock(hit); mining.key = ''; mining.progress = 0; progress = 0; }
    }
    crack.position.set(hit.x + 0.5, hit.y + 0.5, hit.z + 0.5);
  } else { mining.key = ''; mining.progress = 0; }
  crack.visible = progress > 0; crack.material.opacity = progress * 0.6;
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
  state = 'dead'; sound('die'); player.keys.clear(); mouse.left = mouse.right = false;
  for (let i = 0; i < 36; i++) { const s = inv.slots[i]; if (s) { drops.spawn(player.pos.x, player.pos.y + 1, player.pos.z, s.id, s.n); inv.slots[i] = null; } }
  ui.renderHotbar();
  document.exitPointerLock();
  showOverlay('death');
}

// ---------- Guardado ----------
async function saveGame() {
  if (!world) return;
  const meta = { v: 1, seed, mode, time: sky.time, pos: player.pos.toArray(), yaw: player.yaw, pitch: player.pitch,
    hp: player.hp, food: player.food, spawn: player.spawn.toArray(), inv: inv.toJSON(), furnaces: [...furnaces.entries()] };
  const entries = [...world.unsaved].filter((k) => world.chunks.has(k)).map((k) => [k, new Uint8Array(world.chunks.get(k))]);
  const ok = await save.saveAll(meta, entries);
  if (ok) world.unsaved.clear();
}

// ---------- Arranque de partida ----------
async function startGame({ seed: sd, mode: md, saved, meta }) {
  state = 'loading'; mode = md; seed = sd;
  showOverlay('menu'); $('msg').textContent = 'Generando mundo…';
  for (const id of ['bContinue', 'bSurvival', 'bCreative']) $(id).classList.add('hidden');

  furnaces.clear();
  world = new World(scene, materials, seed, saved);
  inv = new Inventory();
  player = new Player(world, camera);
  player.mode = mode;
  if (!model) model = new PlayerModel(scene);
  sky = new Sky(scene, camera, materials);
  drops = new Drops(scene, world);
  particles = new Particles(scene, world);
  mobs = new MobManager(scene, world, {
    hurtPlayer: (d, kx, kz) => player.damage(d, kx, kz),
    explode, drop: (x, y, z, id, n) => drops.spawn(x, y, z, id, n), sound,
    puff: (x, y, z) => particles.burst(x, y, z, [0.9, 0.9, 0.9], 12, 3),
  });
  ui = new UI({ inv, player, getMode: () => mode, dropItem, sound, onSelect: syncSelect });

  player.events.onHurt = () => { sound('hurt'); const v = $('vignette'); v.classList.add('hurt'); setTimeout(() => v.classList.remove('hurt'), 120); };
  player.events.onStep = () => sound('step');
  player.events.onLand = (d) => sound(d > 3 ? 'hurt' : 'place');
  player.events.onSplash = () => sound('splash');
  player.events.onDeath = onDeath;

  let cx, cz;
  if (meta) {
    inv.load(meta.inv); (meta.furnaces || []).forEach(([k, f]) => furnaces.set(k, f)); sky.time = meta.time; player.hp = meta.hp; player.food = meta.food;
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
  window.__game = { world, player, inv, sky, mobs, drops, ui, camera, scene, renderer, get mode() { return mode; }, set mode(v) { mode = v; player.mode = v; }, get state() { return state; }, set state(v) { state = v; }, explode, saveGame, openInventory, mouse, useItem, breakBlock, furnaces, setCam: setCamMode };
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
  if (state === 'inv') {
    if (e.code === 'KeyE') { e.preventDefault(); closeInventory(true); }
    else if (e.code === 'Escape') closeInventory(false);
    return;
  }
  if (state !== 'play') return;
  if (e.code.startsWith('Digit')) { const n = +e.code.slice(5) - 1; if (n >= 0 && n < 9) { inv.selected = n; syncSelect(); } return; }
  switch (e.code) {
    case 'KeyE': openInventory(2); return;
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
$('bSave').onclick = async () => { await saveGame(); location.reload(); };
$('bRespawn').onclick = () => { audio.unlock(); player.respawn(); state = 'play'; showOverlay(null); ui.renderStats(); canvas.requestPointerLock(); };
$('bCam').onclick = () => setCamMode((camMode + 1) % 3);
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
    sky.update(dt, camera.position, radius * 16, player.headUnder);
    world.update(player.pos.x, player.pos.z, radius, 2);
    mobs.update(dt, player, mode, sky.daylight, radius);
    drops.update(dt, player, inv, () => { sound('pop'); ui.renderHotbar(); });
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
        `Bioma: ${biomeAt(Math.floor(player.pos.x), Math.floor(player.pos.z), seed)} · ${String(hh).padStart(2, '0')}:${String(mm).padStart(2, '0')}\nMobs: ${mobs.list.length}${player.flying ? ' · [VUELO]' : ''}`;
      $('cam').textContent = '📷 ' + CAM_NAMES[camMode] + '  [V]';
    }
    saveT += dt; if (saveT > 20) { saveT = 0; saveGame(); }
  }
  renderer.render(scene, camera);
}
requestAnimationFrame(frame);

// ---------- Menú inicial ----------
(async function menu() {
  const data = await save.loadAll();
  $('msg').textContent = 'Elige cómo jugar';
  if (data.meta) $('bContinue').classList.remove('hidden');
  const fresh = async (md) => { audio.unlock(); await save.wipe(); startGame({ seed: 1 + Math.floor(Math.random() * 900000), mode: md, saved: new Map(), meta: null }); };
  $('bSurvival').onclick = () => fresh('survival');
  $('bCreative').onclick = () => fresh('creative');
  $('bContinue').onclick = () => { audio.unlock(); startGame({ seed: data.meta.seed, mode: data.meta.mode, saved: data.chunks, meta: data.meta }); };
})();
