import * as THREE from 'three';
import { createAtlas, tileColor, createHDTextures, createPixelNormal } from './atlas.js';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js';
import { initIcons, iconTexture, tileURL } from './icons.js';
import { PlayerModel } from './playermodel.js';
import { Weather, WEATHER_NAMES } from './weather.js';
import { WitherStorm } from './boss.js';
import { BOSS_INFO, BOSS_ORDER } from './bosses.js';
import { Quests, QUESTS } from './quests.js';
import { World, terrainHeight, terrainInfo, biomeAt, endPillars, SEA, CH } from './world.js';
import { Ambient } from './ambient.js';
import { ChunkPool } from './chunkpool.js';
import { Net } from './net.js';
import { TouchControls } from './touch.js';
import { Gamepads, PAD_ACTIONS, BTN_NAMES, defaultPadConfig } from './gamepad.js';
import { Player } from './player.js';
import { Inventory } from './inventory.js';
import { Sky } from './sky.js';
import { Drops, Particles } from './entities.js';
import { MobManager, MOB_TYPES } from './mobs.js';
import { UI } from './ui.js';
import * as audio from './audio.js';
import * as save from './save.js';
import { armorId, ARMOR_TIERS } from './blocks.js';
import { SHAPE, SLAB_MATS, SLAB_BOTTOM, SLAB_TOP, STAIR_ID, FENCE, DOOR_LO, DOOR_LO_OPEN, DOOR_HI, DOOR_HI_OPEN } from './blocks.js';
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
const tint = { value: new THREE.Color(1, 1, 1) }; // (el tinte del día ahora lo da la iluminación física)
const gameU = { uTime: { value: 0 }, uWind: { value: 0.12 } };
// MeshStandardMaterial + sombreador: viento en hojas, oleaje en el agua, luz de antorchas emisiva
// y luz solar directa atenuada en cuevas (la luz de cielo viene por vértice).
function patchChunkMaterial(m) {
  m.onBeforeCompile = (sh) => {
    sh.uniforms.uTime = gameU.uTime; sh.uniforms.uWind = gameU.uWind;
    sh.vertexShader = sh.vertexShader
      .replace('#include <common>', '#include <common>\nattribute float blight;\nattribute float sway;\nattribute float skyl;\nuniform float uTime;\nuniform float uWind;\nvarying float vBL;\nvarying float vSK;')
      .replace('#include <begin_vertex>', '#include <begin_vertex>\nvBL = blight; vSK = skyl;\nvec4 wp = modelMatrix * vec4(position, 1.0);\nfloat sw = (sway > 1.5 ? 0.0 : sway) * uWind;\ntransformed.x += sin(uTime * 1.7 + wp.x * 0.9 + wp.z * 0.6 + wp.y * 0.5) * 0.075 * sw;\ntransformed.z += cos(uTime * 1.3 + wp.z * 0.8 + wp.x * 0.4) * 0.075 * sw;\ntransformed.y += sin(uTime * 2.1 + wp.x * 0.7 + wp.z * 0.7) * 0.03 * sw;\ntransformed.y += (sway > 1.5 ? 1.0 : 0.0) * sin(uTime * 1.9 + wp.x * 1.2 + wp.z * 1.0) * 0.045;');
    sh.fragmentShader = sh.fragmentShader
      .replace('#include <common>', '#include <common>\nvarying float vBL;\nvarying float vSK;')
      .replace('#include <emissivemap_fragment>', '#include <emissivemap_fragment>\ntotalEmissiveRadiance += vec3(1.0, 0.78, 0.5) * vBL * 1.5 * sampledDiffuseColor.rgb;')
      .replace('#include <lights_fragment_end>', '#include <lights_fragment_end>\nreflectedLight.directDiffuse *= vSK;\nreflectedLight.directSpecular *= vSK;');
  };
  m.customProgramCacheKey = () => 'chunk-pbr';
  return m;
}
const pxNormal = createPixelNormal(atlasCanvas);
let hdTex = null;
const materials = {
  opaque: patchChunkMaterial(new THREE.MeshStandardMaterial({ map: texture, normalMap: pxNormal, vertexColors: true, roughness: 0.94, metalness: 0 })),
  trans: patchChunkMaterial(new THREE.MeshStandardMaterial({ map: texture, normalMap: pxNormal, vertexColors: true, transparent: true, depthWrite: false, side: THREE.DoubleSide, roughness: 0.1, metalness: 0.05 })),
  tint,
};
// Texturas en modo píxel: filtro NEAREST (sin suavizado) y sin mipmaps
function forcePixelTexture(t) {
  if (!t) return;
  t.magFilter = THREE.NearestFilter; t.minFilter = THREE.NearestFilter; t.generateMipmaps = false; t.anisotropy = 1; t.needsUpdate = true;
}
function setTextureMode(hd, classic = false) {
  if (hd && !hdTex) hdTex = createHDTextures(renderer);
  if (classic) { forcePixelTexture(texture); forcePixelTexture(pxNormal); }
  for (const m of [materials.opaque, materials.trans]) { m.flatShading = classic; /* caras planas, sin interpolar normales */ m.map = hd ? hdTex.map : texture; m.normalMap = classic ? null : hd ? hdTex.normalMap : pxNormal; m.roughness = classic ? 1 : m === materials.trans ? 0.1 : 0.94; m.needsUpdate = true; }
}

// ---------- Calidad gráfica: sombras, bloom, texturas HD, MSAA, escala ----------
renderer.toneMapping = THREE.ACESFilmicToneMapping; renderer.toneMappingExposure = 1.45;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
const QUALITY = [
  { name: 'Bajo', shadows: false, size: 0, ext: 0, bloom: false, hd: false, msaa: 0, pr: 1, grade: false },
  { name: 'Medio', shadows: true, size: 1024, ext: 48, bloom: false, hd: false, msaa: 0, pr: 1, grade: false },
  { name: 'Alto', shadows: true, size: 2048, ext: 64, bloom: true, hd: true, msaa: 2, pr: 1.25, grade: true },
  { name: 'Ultra (hiperrealista)', shadows: true, size: 4096, ext: 80, bloom: true, hd: true, msaa: 4, pr: 2, grade: true },
  { name: 'Clásico (píxel)', shadows: false, size: 0, ext: 0, bloom: false, hd: false, msaa: 0, pr: 1, grade: false, classic: true },
];
const GradeShader = {
  uniforms: { tDiffuse: { value: null }, uTime: { value: 0 }, uVig: { value: 0.85 }, uSat: { value: 1.04 }, uGrain: { value: 0.035 }, uContrast: { value: 1.06 } },
  vertexShader: 'varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }',
  fragmentShader: 'uniform sampler2D tDiffuse; uniform float uTime, uVig, uSat, uGrain, uContrast; varying vec2 vUv;' +
    'float h(vec2 p){ return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }' +
    'void main(){ vec4 c = texture2D(tDiffuse, vUv); float l = dot(c.rgb, vec3(0.2126, 0.7152, 0.0722));' +
    'c.rgb = mix(vec3(l), c.rgb, uSat); c.rgb = (c.rgb - 0.18) * uContrast + 0.18; vec2 d = vUv - 0.5; c.rgb *= 1.0 - dot(d, d) * uVig;' +
    'c.rgb += (h(vUv * 1000.0 + uTime) - 0.5) * uGrain; gl_FragColor = c; }',
};
let composer = null, bloomPass = null, gradePass = null, gradeOn = false, curQ = -1;
function applyQuality() {
  const q = QUALITY[settings.quality];
  curQ = settings.quality;
  renderer.setPixelRatio(Math.min(devicePixelRatio, q.pr));
  renderer.shadowMap.enabled = q.shadows;
  if (sky) sky.setShadows(q.shadows, q.size || 1024, q.ext || 48);
  for (const m of [materials.opaque, materials.trans]) m.needsUpdate = true;
  setTextureMode(q.hd, !!q.classic);
  if (q.classic) { renderer.shadowMap.enabled = false; renderer.shadowMap.needsUpdate = true; } // sin sombras dinámicas
  renderer.toneMapping = q.classic ? THREE.NoToneMapping : THREE.ACESFilmicToneMapping;
  if (sky) sky.classic = !!q.classic;
  const post = q.bloom || q.grade || q.msaa;
  if (composer) { composer.dispose(); composer = null; }
  if (post) {
    const w = innerWidth, h = innerHeight, pr = renderer.getPixelRatio();
    const rt = new THREE.WebGLRenderTarget(w * pr, h * pr, { type: THREE.HalfFloatType, samples: q.msaa });
    composer = new EffectComposer(renderer, rt);
    composer.addPass(new RenderPass(scene, camera));
    if (q.bloom) { bloomPass = new UnrealBloomPass(new THREE.Vector2(w, h), 0.42, 0.55, 0.88); composer.addPass(bloomPass); }
    gradeOn = q.grade; if (q.grade) { gradePass = new ShaderPass(GradeShader); composer.addPass(gradePass); }
    composer.addPass(new OutputPass());
    composer.setSize(w, h);
  }
  const bq = document.getElementById('bQuality'); if (bq) bq.textContent = 'Gráficos: ' + q.name;
  resize();
}

// ---------- Ajustes (persistentes) ----------
const settings = { radius: 8, fov: 75, sens: 1, vol: 0.5, cam: 0, quality: 2, touch: 'auto' };
const COARSE = (typeof matchMedia !== 'undefined' && (matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window)) || /[?&]touch/.test(location.search);
let firstRun = true;
try { const sv = localStorage.getItem('mcweb-settings'); if (sv) { firstRun = false; Object.assign(settings, JSON.parse(sv)); } } catch {}
if (firstRun && COARSE) { settings.quality = 1; settings.radius = 5; settings.sens = 1.2; } // móvil: ajustes ligeros por defecto
{ const d = defaultPadConfig(); settings.pad = Object.assign(d, settings.pad || {}); settings.pad.map = Object.assign(defaultPadConfig().map, (settings.pad && settings.pad.map) || {}); }
const saveSettings = () => { try { localStorage.setItem('mcweb-settings', JSON.stringify(settings)); } catch {} };
const STORMY = new Set(['storm', 'dragon', 'wither', 'herobrine']);
const LOOT = {
  goku: [[I.STAR, 2], [I.DBALL, 3], [I.SENZU, 3], [I.DIAMOND, 12], [I.NETHERITE, 1]],
  burns: [[I.GOLD, 24], [B.GOLD_BLOCK, 4], [I.DIAMOND, 6], [I.DONUT, 6], [I.DUFF, 6]],
  impostor: [[I.STAR, 1], [I.DIAMOND, 8], [I.GOLD, 12], [I.SCRAP, 2], [I.PEARL, 2]],
  colossus: [[I.STAR, 1], [I.IRON, 24], [I.DIAMOND, 8], [I.GOLD, 6]],
  creepertitan: [[I.STAR, 1], [I.COAL, 32], [I.DIAMOND, 8], [I.GOLD, 8]],
  blazeking: [[I.STAR, 1], [I.COAL, 24], [I.DIAMOND, 8], [I.GOLD, 10]],
  piglinking: [[I.STAR, 2], [I.GOLD, 32], [I.DIAMOND, 10]],
  endertitan: [[I.STAR, 2], [I.PEARL, 6], [I.DIAMOND, 12]],
  voidlord: [[I.STAR, 2], [I.PEARL, 4], [I.DIAMOND, 12], [I.GOLD, 12]],
  ravager: [[I.STAR, 1], [I.DIAMOND, 8], [I.GOLD, 10]],
  evoker: [[I.STAR, 1], [I.DIAMOND, 6], [I.GOLD, 8], [I.PEARL, 1]],
  ghast: [[I.STAR, 1], [I.DIAMOND, 6], [I.COAL, 16]],
  herobrine: [[I.STAR, 3], [I.DIAMOND, 16], [I.GOLD, 16], [I.PEARL, 2]],
  slimeking: [[I.STAR, 1], [I.DIAMOND, 6], [I.GOLD, 6]],
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
let world, player, inv, sky, mobs, drops, particles, ui, seed = 1, ambient, pads = null, padActive = false;
let dims = {}, dim = 'overworld', extraSaved = { nether: new Map(), end: new Map() }, portalT = 0, travelCool = 0, dragonSpawned = false;
const DIM_NAMES = { overworld: 'Overworld', nether: 'El Nether', end: 'El End' };
const fkey = (x, y, z) => (dim === 'overworld' ? '' : dim + ':') + x + ',' + y + ',' + z;
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
const sound = (n) => { audio.play(n); if (pads) { if (n === 'hurt') pads.rumble(0.6, 0.35, 180); else if (n === 'explode') pads.rumble(1, 0.7, 450); else if (n === 'roar') pads.rumble(0.8, 0.5, 600); else if (n === 'hit') pads.rumble(0.25, 0.5, 70); else if (n === 'break') pads.rumble(0.15, 0.35, 60); else if (n === 'thunder') pads.rumble(0.7, 0.2, 500); } };
function safeLock() { try { const r = canvas.requestPointerLock(); if (r && r.catch) r.catch(() => {}); } catch {} }

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
  sound('explode'); { const dd = Math.hypot(player.pos.x - x, player.pos.y - y, player.pos.z - z); if (dd < 40) pads.rumble(Math.min(1, 1.2 - dd / 40), 0.8, 500); }
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

// ---------- One Block ----------
const OB_PHASES = [
  { name: 'Llanura', until: 30, blocks: [B.GRASS, B.GRASS, B.DIRT, B.DIRT, B.LOG, B.LOG, B.LEAVES, B.SAND], mobs: ['pig', 'cow', 'chicken', 'sheep'] },
  { name: 'Bosque y cueva', until: 90, blocks: [B.STONE, B.STONE, B.COBBLE, B.LOG, B.PLANKS, B.COAL_ORE, B.COAL_ORE, B.IRON_ORE, B.GRAVEL || B.SAND, B.DIRT], mobs: ['zombie', 'skeleton', 'spider', 'pig', 'creeper'] },
  { name: 'Desierto y nieve', until: 170, blocks: [B.SAND, B.SANDSTONE, B.SANDSTONE, B.CACTUS, B.SNOW, B.SNOW, B.IRON_ORE, B.GOLD_ORE, B.GLASS], mobs: ['zombie', 'skeleton', 'creeper', 'villager', 'crewmate'] },
  { name: 'Mina profunda', until: 270, blocks: [B.STONE, B.STONE, B.COBBLE, B.MOSSY_COBBLE, B.COAL_ORE, B.IRON_ORE, B.GOLD_ORE, B.DIAMOND_ORE, B.GOLD_BLOCK, B.BRICKS], mobs: ['zombie', 'skeleton', 'creeper', 'spider', 'slime', 'saibaman'] },
  { name: 'Nether', until: 400, blocks: [B.NETHERRACK, B.NETHERRACK, B.SOUL_SAND, B.GLOWSTONE, B.NETHER_BRICKS, B.ANCIENT_DEBRIS, B.OBSIDIAN, B.GOLD_ORE], mobs: ['piglin', 'blaze', 'magmacube', 'witherskeleton', 'hoglin', 'impostor'] },
  { name: 'El End', until: 550, blocks: [B.END_STONE, B.END_STONE, B.PURPUR, B.END_BRICKS, B.OBSIDIAN, B.DIAMOND_ORE, B.CHEST], mobs: ['enderman', 'endermite', 'shulker', 'phantom', 'saibaman'] },
  { name: 'CAOS CROSSOVER', until: Infinity, blocks: null, mobs: ['impostor', 'crewmate', 'homer', 'bart', 'marge', 'lisa', 'flanders', 'saibaman', 'dog', 'creeper', 'enderman', 'blaze'] },
];
const OB_BOSSES = { 100: 'evoker', 220: 'impostor', 300: 'ghast', 420: 'burns', 520: 'wither', 650: 'blazeking', 800: 'goku', 1000: 'dragon' };
const GROUND_BOSS = new Set(['impostor', 'burns', 'goku']);
const obPhaseIdx = () => OB_PHASES.findIndex((p) => ob.count < p.until);
function obPick() {
  const p = OB_PHASES[obPhaseIdx()];
  if (!p.blocks) { const all = Object.keys(BLOCKS).map(Number).filter((i) => i !== B.BEDROCK && i !== B.COMMAND && i !== B.WATER && i !== B.LAVA && !BLOCKS[i].liquid && i !== B.NETHER_PORTAL && i !== B.END_PORTAL && i !== B.END_FRAME_EYE && i !== B.CHEST_OPEN); return all[Math.floor(Math.random() * all.length)]; }
  return p.blocks[Math.floor(Math.random() * p.blocks.length)] || B.STONE;
}
function obEnsure() { if (world.getBlock(0, 64, 0) === AIR) world.setBlock(0, 64, 0, ob.count === 0 ? B.GRASS : obPick()); }
function obHud() {
  const i = obPhaseIdx(), p = OB_PHASES[i], from = i ? OB_PHASES[i - 1].until : 0;
  $('obPhase').textContent = '⬛ ' + p.name; $('obCount').textContent = ob.count + ' bloques' + (p.until < Infinity ? ' / ' + p.until : '');
  $('obFill').style.width = (p.until < Infinity ? Math.min(100, ((ob.count - from) / (p.until - from)) * 100) : 100) + '%';
}
function obArena(r = 26) {
  for (let x = -r; x <= r; x++) for (let z = -r; z <= r; z++) if (x * x + z * z <= r * r && world.getBlock(x, 63, z) === AIR && !(x === 0 && z === 0)) world.setBlock(x, 63, z, (x + z) & 1 ? B.STONE : B.COBBLE);
}
function obBroken() {
  const prevPhase = obPhaseIdx(); ob.count++;
  const i = obPhaseIdx(), p = OB_PHASES[i];
  setTimeout(() => { if (world.getBlock(0, 64, 0) === AIR) world.setBlock(0, 64, 0, obPick()); }, 0);
  if (i !== prevPhase) { ui.toast('★ Nueva fase: ' + p.name + ' ★'); sound('levelup'); addXp(30); }
  const rx = () => 0.5 + (Math.random() - 0.5) * 1.2;
  if (ob.count % 8 === 0 && mode === 'survival') {
    const t = p.mobs[Math.floor(Math.random() * p.mobs.length)];
    if (mobs.list.length < 14) mobs.add(t, rx(), 65.2, rx());
  }
  if (ob.count % 25 === 0) { // cofre de recompensa
    const out = rollLoot({ x: 0, y: 64, z: 0 });
    for (const [id, n] of out) drops.spawn(0.5, 65.8, 0.5, id, n);
    ui.toast('🎁 ¡Recompensa de One Block!');
  }
  const bt = OB_BOSSES[ob.count];
  if (bt && !boss && !ritual) {
    if (GROUND_BOSS.has(bt)) { obArena(); ui.toast('Se forma una arena de piedra…'); }
    setTimeout(() => { if (!boss) { player.lookDir && summonBoss(bt); } }, GROUND_BOSS.has(bt) ? 600 : 100);
  }
  obHud();
}
// ---------- Interacción ----------
function breakBlock(hit) {
  const id = world.getBlock(hit.x, hit.y, hit.z);
  if (id === AIR || BLOCKS[id].hardness === Infinity) return;
  const held = inv.held();
  world.setBlock(hit.x, hit.y, hit.z, AIR);
  if (kind === 'oneblock' && dim === 'overworld' && hit.x === 0 && hit.y === 64 && hit.z === 0) obBroken();
  if (id === B.FURNACE) {
    const key = fkey(hit.x, hit.y, hit.z), f = furnaces.get(key);
    if (f) { for (const sl of f.slots) if (sl) drops.spawn(hit.x + 0.5, hit.y + 0.5, hit.z + 0.5, sl.id, sl.n); furnaces.delete(key); }
  }
  if (id === B.OBSIDIAN) removeAdjacentPortals(hit.x, hit.y, hit.z);
  let skipDrop = false;
  { const sh = SHAPE[id]; if (sh && sh.kind === 'door') { const y2 = sh.hi ? hit.y - 1 : hit.y + 1; if (SHAPE[world.getBlock(hit.x, y2, hit.z)] && SHAPE[world.getBlock(hit.x, y2, hit.z)].kind === 'door') world.setBlock(hit.x, y2, hit.z, AIR); if (sh.hi) skipDrop = true; } }
  if (id === B.COAL_ORE || id === B.IRON_ORE || id === B.GOLD_ORE || id === B.DIAMOND_ORE) addXp(id === B.DIAMOND_ORE ? 8 : 3);
  particles.blockBreak(hit.x, hit.y, hit.z, id); buzz(10);
  sound('break');
  if (mode === 'survival') {
    const d = skipDrop ? null : dropOf(id, held);
    if (d) {
      if (kind === 'oneblock' && hit.x === 0 && hit.y === 64 && hit.z === 0) { const left = inv.add(d[0], d[1]); if (left) drops.spawn(0.5, 65.6, 0.5, d[0], left); ui.renderHotbar(); sound('pop'); } // directo al inventario: nada se cae al vacío
      else drops.spawn(hit.x + 0.5, hit.y + 0.4, hit.z + 0.5, d[0], d[1]);
    }
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
    const key = fkey(hit.x, hit.y, hit.z);
    if (!furnaces.has(key)) furnaces.set(key, { slots: [null, null, null], burn: 0, burnMax: 1, cook: 0 });
    openInventory('furnace', furnaces.get(key)); return;
  }
  if (hit && SHAPE[hit.id] && SHAPE[hit.id].kind === 'door' && !player.keys.has('ShiftLeft')) { toggleDoor(hit.x, hit.y, hit.z); return; }
  if (hit && hit.id === B.END_FRAME) { useEyeOnFrame(hit); return; }
  if (hit && hit.id === B.CHEST && !player.keys.has('ShiftLeft')) { openChest(hit); return; }
  if (!player.keys.has('ShiftLeft')) {
    const mh = mobs.raycast(eye, dir, 4.5), bh = world.raycast(eye, dir, 4.5);
    if (mh && (!bh || bh.dist > mh.dist) && mh.mob.def.talk) {
      const d = mh.mob.def;
      if (d.villager) { openPanel('trade'); return; }
      ui.toast(d.name + ': «' + d.talk[Math.floor(Math.random() * d.talk.length)] + '»'); sound('hit'); return;
    }
  }
  const held = inv.held();
  if (!held) return;
  if (held.id === I.LIGHTER) { if (hit) lightPortal(hit); return; }
  if (ITEMS[held.id] && ITEMS[held.id].armor) { // equipar armadura con clic derecho (intercambia con la pieza puesta)
    const a = ITEMS[held.id].armor, cur = inv.armor[a.slot];
    inv.armor[a.slot] = { ...held }; inv.slots[inv.selected] = cur ? { ...cur } : null; sound('craft'); ui.renderHotbar(); model.setArmor(inv.armor); ui.toast('Equipado: ' + ITEMS[held.id].name); return;
  }
  if (held.id === I.DBALL) { dragonWish(); return; }
  const food = ITEMS[held.id] && ITEMS[held.id].food;
  if (food) {
    const heal = ITEMS[held.id].heal;
    if (mode === 'survival' && (player.food < 20 || (heal && player.hp < 20))) { player.eat(food); if (heal) { player.hp = 20; particles.burst(player.pos.x, player.pos.y + 1, player.pos.z, [0.5, 1, 0.4], 18, 4); } inv.consumeHeld(1); sound('eat'); ui.renderHotbar(); }
    return;
  }
  if (!isBlock(held.id) || !hit) return;
  let px = hit.x + hit.normal[0], py = hit.y + hit.normal[1], pz = hit.z + hit.normal[2], putId = held.id;
  if (py < 0 || py >= CH) return;
  const shp = SHAPE[held.id];
  if (shp) {
    const pt = eye.clone().addScaledVector(dir, hit.dist), look = dir, o = Math.abs(look.x) > Math.abs(look.z) ? (look.x > 0 ? 1 : 3) : (look.z > 0 ? 2 : 0);
    if (shp.kind === 'slab') {
      const hs = SHAPE[hit.id];
      if (hs && hs.kind === 'slab' && hs.m === shp.m && ((!hs.top && hit.normal[1] === 1) || (hs.top && hit.normal[1] === -1))) { // dos losas = bloque completo
        world.setBlock(hit.x, hit.y, hit.z, SLAB_MATS[shp.m]); sound('place'); if (mode === 'survival') { inv.consumeHeld(1); ui.renderHotbar(); } return;
      }
      const top = hit.normal[1] === -1 ? true : hit.normal[1] === 1 ? false : pt.y - Math.floor(pt.y) > 0.5;
      putId = top ? SLAB_TOP(shp.m) : SLAB_BOTTOM(shp.m);
    } else if (shp.kind === 'stairs') putId = STAIR_ID(shp.m, o);
    else if (shp.kind === 'door') {
      if (world.getBlock(px, py + 1, pz) !== AIR || py + 1 >= CH) return;
      putId = DOOR_LO + o;
    }
  }
  const there = world.getBlock(px, py, pz);
  if (there !== AIR && !LIQUID[there]) return;
  if (SOLID[held.id] && !(shp && shp.kind === 'slab') && player.intersectsBlock(px, py, pz)) return;
  if (SOLID[held.id] && mobs.list.some((m) => Math.abs(m.pos.x - (px + 0.5)) < m.hw + 0.5 && Math.abs(m.pos.z - (pz + 0.5)) < m.hw + 0.5 && m.pos.y < py + 1 && m.pos.y + m.h > py)) return;
  if (held.id === B.COMMAND) {
    if (boss || ritual) { ui.toast('Ya hay una tormenta en curso'); return; }
    world.setBlock(px, py, pz, held.id); sound('place');
    if (mode === 'survival') { inv.consumeHeld(1); ui.renderHotbar(); }
    startRitual(px, py, pz); return;
  }
  world.setBlock(px, py, pz, putId);
  if (shp && shp.kind === 'door') world.setBlock(px, py + 1, pz, DOOR_HI + (putId - DOOR_LO));
  sound('place');
  if (mode === 'survival') { inv.consumeHeld(1); ui.renderHotbar(); }
}
function toggleDoor(x, y, z) {
  const id = world.getBlock(x, y, z), s = SHAPE[id], y2 = s.hi ? y - 1 : y + 1, id2 = world.getBlock(x, y2, z);
  const flip = (i, sh) => (sh.open ? (sh.hi ? DOOR_HI : DOOR_LO) : (sh.hi ? DOOR_HI_OPEN : DOOR_LO_OPEN)) + sh.o;
  world.setBlock(x, y, z, flip(id, s));
  if (SHAPE[id2] && SHAPE[id2].kind === 'door') world.setBlock(x, y2, z, flip(id2, SHAPE[id2]));
  sound(s.open ? 'place' : 'break');
}

function setBossBar(type) {
  const inf = BOSS_INFO[type];
  $('bossFill').style.background = `linear-gradient(${inf.color}, #25103a)`;
  $('bossbar').style.setProperty('--bc', inf.color);
}
function spawnBossOf(type, x, y, z, arena) {
  const inf = BOSS_INFO[type], pos = new THREE.Vector3(x, y, z);
  boss = type === 'storm' ? new WitherStorm(scene, bossHooks, pos) : inf.make(scene, bossHooks, pos, arena);
  setBossBar(type);
  if (STORMY.has(type)) { weather.set('storm'); weather.boss = true; weather.timer = 9999; }
  sound('roar');
}
function summonBoss(type) {
  if (boss || ritual) { ui.toast('Ya hay un jefe activo'); return false; }
  const inf = BOSS_INFO[type], look = player.lookDir(), l = Math.hypot(look.x, look.z) || 1, fx = look.x / l, fz = look.z / l;
  const dist = inf.dist || (type === 'warden' ? 12 : type === 'guardian' ? 16 : type === 'wither' ? 20 : 26);
  const x = player.pos.x + fx * dist, z = player.pos.z + fz * dist;
  let y;
  if (inf.ground) { const t = floorAt(Math.floor(x), Math.floor(z)); y = t !== null ? t : player.pos.y; }
  else y = player.pos.y + (inf.up === undefined ? 10 : inf.up) + (type === 'storm' ? 10 : 0);
  if (type === 'dragon' && dim === 'end') { spawnBossOf('dragon', 0.5, 100, 0.5, { cx: 0, cy: 64, cz: 0, pillars: endPillars() }); dragonSpawned = true; }
  else spawnBossOf(type, x, y, z);
  ui.toast('¡' + inf.name + ' ha sido invocado!');
  return true;
}
function floorAt(x, z) { // suelo con 2 de aire encima; en el Overworld, la superficie
  if (dim === 'overworld') { const t = world.topY(x, z); return t > 0 ? t + 1 : null; }
  for (let y = Math.min(CH - 6, Math.floor(player.pos.y) + 12); y > 4; y--) if (world.isSolid(x, y - 1, z) && !LIQUID[world.getBlock(x, y - 1, z)] && !world.isSolid(x, y, z) && !world.isSolid(x, y + 1, z) && !LIQUID[world.getBlock(x, y, z)]) return y;
  return null;
}
function summonMob(type) {
  const look = player.lookDir(), l = Math.hypot(look.x, look.z) || 1;
  for (let d = 6; d <= 10; d += 2) {
    const x = Math.floor(player.pos.x + (look.x / l) * d), z = Math.floor(player.pos.z + (look.z / l) * d), t = floorAt(x, z);
    if (t !== null) { mobs.add(type, x + 0.5, MOB_TYPES[type].fly ? t + 4 : t, z + 0.5); return; }
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
  if (id === 'chatp') { $('chatIn').value = ''; setTimeout(() => $('chatIn').focus(), 30); } else if (id === 'summon') renderSummon(); else if (id === 'trade') renderTrade(); else if (id === 'padcfg') renderPadCfg(); else renderQuests();
}
function closePanel(relock) {
  if (!panelId) return;
  $(panelId).classList.add('hidden'); panelId = null;
  if (relock) { state = 'play'; safeLock(); } else { state = 'pause'; showOverlay('pause'); }
}
function renderSummon() {
  $('bossCards').innerHTML = BOSS_ORDER.map((t) => {
    const i = BOSS_INFO[t], won = quests.bosses.has(t);
    return `<div class="card" style="border-left:6px solid ${i.color}"><h4><span>${i.icon} ${i.name}</span><span class="tag">${i.hp} HP</span></h4><p>${i.desc}</p><button class="btn" data-boss="${t}">${won ? '✔ ' : ''}Invocar</button></div>`;
  }).join('');
  $('mobBtns').innerHTML = Object.keys(MOB_TYPES).map((t) => `<button class="btn" data-mob="${t}">${MOB_TYPES[t].name}</button>`).join('');
}
const TRADES = [
  { give: [[I.COAL, 12]], get: [I.IRON, 2] }, { give: [[I.IRON, 6]], get: [I.GOLD, 3] },
  { give: [[I.GOLD, 6]], get: [I.DIAMOND, 1] }, { give: [[I.GOLD, 2]], get: [I.DONUT, 3] },
  { give: [[I.DIAMOND, 2]], get: [I.SENZU, 1] }, { give: [[I.DIAMOND, 3]], get: [I.EYE, 2] },
  { give: [[I.IRON, 24]], get: [armorId(1, 2), 1] }, { give: [[I.DIAMOND, 24]], get: [armorId(1, 3), 1] },
  { give: [[I.DIAMOND, 5], [I.GOLD, 10]], get: [I.NETHERITE, 1] }, { give: [[I.DIAMOND, 30]], get: [I.ELYTRA, 1] },
  { give: [[I.DIAMOND, 12], [I.STAR, 1]], get: [I.DBALL, 1] }, { give: [[I.DIAMOND, 1]], get: [B.TORCH, 32] },
];
function renderTrade() {
  $('tradeInfo').textContent = mode === 'creative' ? '(creativo: gratis)' : '';
  $('tradeList').innerHTML = TRADES.map((t, i) => {
    const ok = mode === 'creative' || t.give.every(([id, n]) => inv.count(id) >= n);
    return `<div class="card"><h4><span>${info(t.get[0]).name} ×${t.get[1]}</span></h4><p>Precio: ${t.give.map(([id, n]) => n + '× ' + info(id).name).join(' + ')}</p><button class="btn" data-trade="${i}" ${ok ? '' : 'disabled style="opacity:.5"'}>Comprar</button></div>`;
  }).join('');
}
$('tradeList').addEventListener('click', (e) => {
  const b = e.target.closest('[data-trade]'); if (!b || state !== 'panel') return;
  const t = TRADES[+b.dataset.trade];
  if (mode !== 'creative') { if (!t.give.every(([id, n]) => inv.count(id) >= n)) return; for (const [id, n] of t.give) inv.take(id, n); }
  const left = inv.add(t.get[0], t.get[1]);
  if (left) drops.spawn(player.pos.x, player.pos.y + 1, player.pos.z, t.get[0], left);
  sound('craft'); ui.renderHotbar(); renderTrade();
});
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
$('dimBtns').addEventListener('click', (e) => { const t = e.target.closest('[data-dim]'); if (t && state === 'panel') { closePanel(true); changeDimension(t.dataset.dim); } });

// ---------- Minimapa ----------
const mmCtx = $('minimap').getContext('2d'), mmImg = mmCtx.createImageData(64, 64), mmCol = {};
for (const d of Object.values(BLOCKS)) { const c = tileColor(d.tiles[0]); mmCol[d.id] = [c[0] * 255, c[1] * 255, c[2] * 255]; }
function drawMinimap() {
  const px = Math.floor(player.pos.x), pz = Math.floor(player.pos.z), data = mmImg.data;
  for (let j = 0; j < 64; j++) for (let i = 0; i < 64; i++) {
    const x = px + i - 32, z = pz + j - 32, o = (j * 64 + i) * 4;
    let top = world.topY(x, z);
    if (dim !== 'overworld' && top >= 0) { top = Math.min(CH - 3, Math.floor(player.pos.y) + 6); while (top > 0 && !world.isSolid(x, top, z) && world.getBlock(x, top, z) !== B.LAVA) top--; }
    let c;
    if (top < 0) c = [20, 20, 30];
    else if (dim === 'overworld' && top < SEA && world.getBlock(x, SEA, z) === B.WATER) c = [38 + top, 84 + top, 190];
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


// ===================================================================== DIMENSIONES Y PORTALES
let kind = 'normal', ob = { count: 0 }, chunkPool = null;
// ---------- PWA: instalación y modo sin conexión ----------
let installEv = null;
if ('serviceWorker' in navigator && import.meta.env.PROD) addEventListener('load', () => navigator.serviceWorker.register('./sw.js').catch(() => {}));
addEventListener('beforeinstallprompt', (e) => { e.preventDefault(); installEv = e; const b = document.getElementById('bInstall'); if (b) b.classList.remove('hidden'); });
addEventListener('appinstalled', () => { installEv = null; const b = document.getElementById('bInstall'); if (b) b.classList.add('hidden'); });
document.getElementById('bInstall').onclick = async () => { if (!installEv) return; installEv.prompt(); try { await installEv.userChoice; } catch {} installEv = null; document.getElementById('bInstall').classList.add('hidden'); };
// ---------- Multijugador ----------
let mp = null; // { net, edits:{dim: Map}, remotes: Map, posT }
const mpKey = (x, z) => (Math.floor(x / 16) + 32768) * 65536 + (Math.floor(z / 16) + 32768);
function mpStoreEdits(list) {
  mp.edits = {};
  for (const [d, x, y, z, id] of list) { const m = mp.edits[d] || (mp.edits[d] = new Map()), k = mpKey(x, z); let c = m.get(k); if (!c) m.set(k, (c = new Map())); c.set((y * 16 + (z - Math.floor(z / 16) * 16)) * 16 + (x - Math.floor(x / 16) * 16), id); }
}
function chatLine(html, cls = '') {
  const el = document.createElement('div'); if (cls) el.className = cls; el.innerHTML = html; const box = $('chatLog'); box.appendChild(el);
  while (box.children.length > 8) box.firstChild.remove();
  setTimeout(() => { el.style.opacity = 0; setTimeout(() => el.remove(), 1000); }, 12000);
}
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
function nameTag(name) {
  const c = document.createElement('canvas'); c.width = 256; c.height = 48; const x = c.getContext('2d');
  x.fillStyle = 'rgba(0,0,0,.55)'; x.fillRect(0, 0, 256, 48); x.fillStyle = '#fff'; x.font = 'bold 28px sans-serif'; x.textAlign = 'center'; x.textBaseline = 'middle'; x.fillText(name, 128, 26);
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace;
  const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: t, transparent: true, depthTest: false })); sp.scale.set(1.6, 0.3, 1); sp.position.y = 2.2; sp.renderOrder = 999; return sp;
}
function mpAddRemote(id, name, color) {
  if (!mp || mp.remotes.has(id)) return;
  const col = new THREE.Color().setHSL((color || 0) / 360, 0.65, 0.45), m = new PlayerModel(scene, { shirt: col.getHex() });
  m.group.visible = true; m.group.add(nameTag(name));
  mp.remotes.set(id, { id, name, model: m, target: new THREE.Vector3(), pos: new THREE.Vector3(), yaw: 0, pitch: 0, dim: 'overworld', vel: new THREE.Vector3(), fake: { pos: new THREE.Vector3(), vel: new THREE.Vector3(), yaw: 0, pitch: 0, onGround: true, inWater: false, flying: false }, init: false });
}
function mpRemoveRemote(id) { const r = mp && mp.remotes.get(id); if (!r) return; scene.remove(r.model.group); mp.remotes.delete(id); }
function mpSetup() { // enlaza los mensajes del servidor con el juego (se llama al empezar la partida)
  const net = mp.net;
  net.on('players', (m) => { for (const q of m.list) { const r = mp.remotes.get(q.id); if (!r) continue; r.target.set(q.p[0], q.p[1], q.p[2]); r.yaw = q.yaw; r.pitch = q.pitch; r.dim = q.dim; r.model.setHeld(q.held || 0); if (!r.init) { r.pos.copy(r.target); r.init = true; } } });
  net.on('join', (m) => mpAddRemote(m.id, m.name, m.color));
  net.on('leave', (m) => mpRemoveRemote(m.id));
  net.on('edit', (m) => { const w = dims[m.dim]; if (w) { w.silent = true; w.setBlock(m.x, m.y, m.z, m.id); w.silent = false; } else { mp.edits[m.dim] = mp.edits[m.dim] || new Map(); const k = mpKey(m.x, m.z); let c = mp.edits[m.dim].get(k); if (!c) mp.edits[m.dim].set(k, (c = new Map())); c.set((m.y * 16 + (m.z - Math.floor(m.z / 16) * 16)) * 16 + (m.x - Math.floor(m.x / 16) * 16), m.id); } });
  net.on('chat', (m) => { chatLine('<b>' + esc(m.name) + '</b>: ' + esc(m.text)); });
  net.on('sys', (m) => chatLine(esc(m.text), 'sys'));
  net.on('time', (m) => { if (sky && Math.abs(sky.time - m.time) > 0.01) sky.time = m.time; });
  net.on('close', () => { if (mp) { chatLine('Conexión perdida con el servidor', 'sys'); ui && ui.toast('Conexión perdida: vuelve al menú'); } });
}
function mpUpdate(dt) {
  if (!mp) return;
  mp.posT -= dt;
  if (mp.posT <= 0) { mp.posT = 0.1; const h = inv.held(); mp.net.send({ t: 'pos', p: [player.pos.x, player.pos.y, player.pos.z], yaw: player.yaw, pitch: player.pitch, dim, held: h ? h.id : 0 }); }
  for (const r of mp.remotes.values()) {
    const vis = r.dim === dim && r.init; r.model.group.visible = vis; if (!vis) continue;
    const prev = r.pos.clone(); r.pos.lerp(r.target, Math.min(1, dt * 10));
    r.fake.vel.set((r.pos.x - prev.x) / Math.max(dt, 1e-3), 0, (r.pos.z - prev.z) / Math.max(dt, 1e-3));
    r.fake.pos.copy(r.pos); r.fake.yaw = r.yaw; r.fake.pitch = r.pitch; r.fake.onGround = Math.abs(r.target.y - r.pos.y) < 0.2;
    r.model.update(dt, r.fake, 0);
  }
}
function sendChat(text) { if (mp && text.trim()) mp.net.send({ t: 'chat', text: text.trim() }); }
function makeWorld(name, saved) {
  const mpEdits = mp ? (mp.edits[name] || (mp.edits[name] = new Map())) : null;
  const g = new THREE.Group(); g.visible = false; scene.add(g);
  const w = new World(g, materials, name === 'overworld' ? seed : name === 'nether' ? seed + 500 : seed + 900, saved || new Map(), name);
  w.group = g; w.kind = kind;
  if (mp) { w.edits = mpEdits; w.onEdit = (x, y, z, id) => mp.net.send({ t: 'edit', dim: name, x, y, z, id }); }
  if (!chunkPool && typeof Worker !== 'undefined' && !/[?&]noworker/.test(location.search)) { try { chunkPool = new ChunkPool(); } catch { chunkPool = null; } }
  if (chunkPool) w.useWorkers(chunkPool);
  return w;
}
function loadAround(w, ax, az, r = 3) {
  return new Promise((resolve) => { const tick = () => { const pend = w.update(ax, az, r, 12); if (pend > 0) setTimeout(tick, 0); else resolve(); }; tick(); });
}

// Marco de portal: celda de aire dentro de un rectángulo de obsidiana (mín. 2x3). Devuelve las celdas interiores.
function findPortalFrame(px, py, pz) {
  for (const axis of [0, 2]) {
    const d = axis === 0 ? [1, 0, 0] : [0, 0, 1], at = (i, j) => world.getBlock(px + d[0] * i, py + j, pz + d[2] * i);
    let b = 0; while (b > -22 && at(0, b - 1) === AIR) b--; if (at(0, b - 1) !== B.OBSIDIAN) continue;
    let t = 0; while (t < 22 && at(0, t + 1) === AIR) t++; if (at(0, t + 1) !== B.OBSIDIAN) continue;
    let l = 0; while (l > -22 && at(l - 1, 0) === AIR) l--; if (at(l - 1, 0) !== B.OBSIDIAN) continue;
    let r = 0; while (r < 22 && at(r + 1, 0) === AIR) r++; if (at(r + 1, 0) !== B.OBSIDIAN) continue;
    if (t - b + 1 < 3 || r - l + 1 < 2) continue;
    let ok = true;
    for (let i = l; i <= r && ok; i++) for (let j = b; j <= t; j++) if (at(i, j) !== AIR) { ok = false; break; }
    for (let i = l; i <= r && ok; i++) if (at(i, b - 1) !== B.OBSIDIAN || at(i, t + 1) !== B.OBSIDIAN) ok = false;
    for (let j = b; j <= t && ok; j++) if (at(l - 1, j) !== B.OBSIDIAN || at(r + 1, j) !== B.OBSIDIAN) ok = false;
    if (!ok) continue;
    const cells = []; for (let i = l; i <= r; i++) for (let j = b; j <= t; j++) cells.push([px + d[0] * i, py + j, pz + d[2] * i]);
    return cells;
  }
  return null;
}
// Cofres de fortalezas y ciudades: botín único
function rollLoot(hit) {
  const out = [], r = Math.random, add = (id, a, b, p = 1) => { if (r() < p) out.push([id, a + Math.floor(r() * (b - a + 1))]); };
  const gear = (tiers, p) => { if (r() < p) out.push([armorId(Math.floor(r() * 4), tiers[Math.floor(r() * tiers.length)]), 1]); };
  if (r() < 0.07) out.push([I.DBALL, 1]);
  if (dim === 'nether') { add(I.GOLD, 2, 8); add(I.IRON, 1, 5, 0.7); add(I.DIAMOND, 1, 2, 0.3); add(B.OBSIDIAN, 2, 4, 0.4); add(I.COAL, 3, 8, 0.6); add(I.EYE, 1, 1, 0.15); add(I.COOKED_PORK, 2, 4, 0.4); gear([1, 2], 0.5); if (r() < 0.12) out.push([I.SCRAP, 1]); }
  else if (dim === 'end') { gear([2, 3], 0.55); add(I.DIAMOND, 2, 6, 0.7); add(I.GOLD, 3, 9); add(I.IRON, 2, 6, 0.8); add(I.PEARL, 1, 3, 0.5); add(I.EYE, 1, 2, 0.3); add(B.PURPUR, 6, 16, 0.7); if (world.getBlock(hit.x, hit.y - 1, hit.z) === B.END_BRICKS) out.push([I.ELYTRA, 1]); else add(I.ELYTRA, 1, 1, 0.06); }
  else { add(I.GOLD, 1, 4); add(I.IRON, 1, 4); add(I.COAL, 2, 6); gear([0, 1, 2], 0.4); add(I.DONUT, 1, 3, 0.3); add(B.GOLD_BLOCK, 1, 1, 0.1); }
  return out;
}
// Las 7 esferas del dragón invocan a Shenlong y conceden un deseo
const fxList = [];
function dragonWish() {
  if (inv.count(I.DBALL) < 7) { ui.toast('Necesitas las 7 esferas del dragón (' + inv.count(I.DBALL) + '/7)'); return; }
  inv.take(I.DBALL, 7); sound('roar'); sound('thunder');
  for (let i = 0; i < 3; i++) setTimeout(() => weather.strike(player, false, { x: player.pos.x + (Math.random() - 0.5) * 20, z: player.pos.z + (Math.random() - 0.5) * 20 }), i * 500);
  const g = new THREE.Group(), mat = new THREE.MeshBasicMaterial({ color: 0x3cc850 }), belly = new THREE.MeshBasicMaterial({ color: 0xe8e060 });
  const segs = []; for (let i = 0; i < 34; i++) { const m = new THREE.Mesh(new THREE.BoxGeometry(1.5 - i * 0.025, 1.5 - i * 0.025, 1.5 - i * 0.025), i % 3 ? mat : belly); g.add(m); segs.push(m); }
  const head = new THREE.Mesh(new THREE.BoxGeometry(3, 2.2, 3.4), mat); const eye = new THREE.MeshBasicMaterial({ color: 0xff2020 });
  for (const x of [-0.9, 0.9]) { const e = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.4, 0.3), eye); e.position.set(x, 0.4, 1.7); head.add(e); const h = new THREE.Mesh(new THREE.BoxGeometry(0.3, 1.8, 0.3), mat); h.position.set(x * 1.2, 1.6, -0.4); head.add(h); }
  g.add(head); scene.add(g);
  fxList.push({ g, segs, head, t: 0, life: 8, x: player.pos.x, y: player.pos.y, z: player.pos.z });
  ui.toast('¡Sal, Shenlong! Pide tu deseo…');
  setTimeout(() => {
    inv.add(I.DIAMOND, 32); inv.add(I.SENZU, 5); inv.add(I.NETHERITE, 4); inv.add(I.ELYTRA, 1);
    player.hp = 20; player.food = 20; addXp(250); ui.renderHotbar(); ui.toast('¡Deseo concedido! Vida completa, 32 diamantes, 4 netherita, élitros y 5 semillas');
  }, 3500);
}
function updateFx(dt) {
  for (let i = fxList.length - 1; i >= 0; i--) {
    const f = fxList[i]; f.t += dt;
    const rise = Math.min(1, f.t / 2) * Math.min(1, (f.life - f.t) / 2);
    f.segs.forEach((m, k) => { const a = f.t * 0.9 + k * 0.32, r = 4 + k * 0.12; m.position.set(f.x + Math.cos(a) * r, f.y + k * 1.1 * rise - 2, f.z + Math.sin(a) * r); });
    const k = f.segs.length - 1, a = f.t * 0.9 + k * 0.32;
    f.head.position.set(f.x + Math.cos(a) * (4 + k * 0.12), f.y + (k + 1.5) * 1.1 * rise - 2, f.z + Math.sin(a) * (4 + k * 0.12)); f.head.rotation.y = -a + Math.PI;
    f.g.visible = rise > 0.02;
    if (f.t >= f.life) { scene.remove(f.g); fxList.splice(i, 1); }
  }
}
function openChest(hit) {
  world.setBlock(hit.x, hit.y, hit.z, B.CHEST_OPEN); sound('craft');
  for (const [id, n] of rollLoot(hit)) drops.spawn(hit.x + 0.5, hit.y + 1, hit.z + 0.5, id, n);
  particles.burst(hit.x + 0.5, hit.y + 1, hit.z + 0.5, [1, 0.85, 0.3], 14, 4); ui.toast('¡Cofre abierto!'); quests.event('chest', 'x');
}
function lightPortal(hit) {
  if (dim === 'end') { ui.toast('El fuego no prende aquí'); return false; }
  const cx = hit.x + hit.normal[0], cy = hit.y + hit.normal[1], cz = hit.z + hit.normal[2];
  const cells = world.getBlock(cx, cy, cz) === AIR ? findPortalFrame(cx, cy, cz) : null;
  if (!cells) { ui.toast('Marco de obsidiana no válido (mínimo 2x3 interior)'); return false; }
  for (const [x, y, z] of cells) world.setBlock(x, y, z, B.NETHER_PORTAL);
  sound('hiss'); sound('craft'); ui.toast('¡El portal del Nether se activa!');
  if (mode === 'survival') { const h = inv.held(); h.d = (h.d || 0) + 1; if (h.d >= 64) inv.slots[inv.selected] = null; ui.renderHotbar(); }
  return true;
}
function removeAdjacentPortals(x, y, z) {
  const stack = [[x, y, z]], seen = new Set();
  while (stack.length) {
    const [cx, cy, cz] = stack.pop();
    for (const [dx, dy, dz] of [[1, 0, 0], [-1, 0, 0], [0, 1, 0], [0, -1, 0], [0, 0, 1], [0, 0, -1]]) {
      const nx = cx + dx, ny = cy + dy, nz = cz + dz, k = nx + ',' + ny + ',' + nz;
      if (seen.has(k)) continue; seen.add(k);
      if (world.getBlock(nx, ny, nz) === B.NETHER_PORTAL) { world.setBlock(nx, ny, nz, AIR); stack.push([nx, ny, nz]); }
    }
  }
}
function useEyeOnFrame(hit) {
  const held = inv.held();
  if (!held || held.id !== I.EYE) { ui.toast('Necesitas un Ojo de Ender'); return; }
  world.setBlock(hit.x, hit.y, hit.z, B.END_FRAME_EYE); sound('place');
  if (mode === 'survival') { inv.consumeHeld(1); ui.renderHotbar(); }
  const ring = []; for (let a = -2; a <= 2; a++) for (let b = -2; b <= 2; b++) if (Math.max(Math.abs(a), Math.abs(b)) === 2 && !(Math.abs(a) === 2 && Math.abs(b) === 2)) ring.push([a, b]);
  for (const [rx, rz] of ring) {
    const cx = hit.x - rx, cz = hit.z - rz;
    if (ring.every(([a, b]) => world.getBlock(cx + a, hit.y, cz + b) === B.END_FRAME_EYE)) {
      for (let a = -1; a <= 1; a++) for (let b = -1; b <= 1; b++) world.setBlock(cx + a, hit.y, cz + b, B.END_PORTAL);
      sound('roar'); ui.toast('¡El portal del End se abre!'); return;
    }
  }
}
function buildNetherPortal(bx, floorY, bz) { // marco 4x5 sobre una plataforma; el suelo del marco queda a ras de suelo
  for (let x = bx - 2; x <= bx + 5; x++) for (let z = bz - 2; z <= bz + 4; z++) {
    const cur = world.getBlock(x, floorY, z); if (cur === AIR || LIQUID[cur] || !SOLID[cur]) world.setBlock(x, floorY, z, B.OBSIDIAN);
    for (let y = floorY + 1; y <= floorY + 6; y++) if (world.getBlock(x, y, z) !== AIR) world.setBlock(x, y, z, AIR);
  }
  for (let i = 0; i < 4; i++) for (let j = 0; j < 5; j++) {
    const corner = (i === 0 || i === 3) && (j === 0 || j === 4), border = i === 0 || i === 3 || j === 0 || j === 4;
    if (corner) continue;
    world.setBlock(bx + i, floorY + j, bz, border ? B.OBSIDIAN : B.NETHER_PORTAL);
  }
  world.setBlock(bx - 1, floorY + 1, bz + 2, B.TORCH); world.setBlock(bx + 4, floorY + 1, bz + 2, B.TORCH);
}
function findExistingPortal(ax, az) {
  let best = null, bd = 1e9;
  const y0 = dim === 'nether' ? 20 : 2, y1 = dim === 'nether' ? CH - 6 : CH - 2;
  for (let x = ax - 24; x <= ax + 24; x++) for (let z = az - 24; z <= az + 24; z++) {
    if (!world.chunks.has(((Math.floor(x / 16) + 32768) * 65536) + (Math.floor(z / 16) + 32768))) continue;
    for (let y = y0; y <= y1; y++) if (world.getBlock(x, y, z) === B.NETHER_PORTAL) { const d = Math.hypot(x - ax, z - az); if (d < bd) { bd = d; best = [x, y, z]; } }
  }
  return best;
}
function standBesidePortal(p) { // busca una celda libre y con suelo junto al portal
  const [px, py, pz] = p; let y = py; while (world.getBlock(px, y - 1, pz) === B.NETHER_PORTAL) y--;
  for (const [dx, dz] of [[0, 2], [0, -2], [2, 0], [-2, 0], [0, 1], [0, -1], [1, 0], [-1, 0], [2, 2], [-2, -2]]) {
    const x = px + dx, z = pz + dz;
    for (const yy of [y, y + 1, y - 1]) if (world.isSolid(x, yy - 1, z) && !world.isSolid(x, yy, z) && !world.isSolid(x, yy + 1, z) && !LIQUID[world.getBlock(x, yy, z)] && world.getBlock(x, yy, z) !== B.NETHER_PORTAL) return new THREE.Vector3(x + 0.5, yy, z + 0.5);
  }
  return new THREE.Vector3(px + 0.5, y + 1, pz + 2.5);
}
function buildEndExit() {
  const ty = world.topY(0, 0); if (ty < 0) return;
  for (let a = -2; a <= 2; a++) for (let b = -2; b <= 2; b++) {
    const ring = Math.max(Math.abs(a), Math.abs(b)) === 2;
    if (ring && Math.abs(a) === 2 && Math.abs(b) === 2) continue;
    world.setBlock(a, ty + 1, b, ring ? B.BEDROCK : B.END_PORTAL);
  }
  for (const [a, b] of [[-2, 0], [2, 0], [0, -2], [0, 2]]) world.setBlock(a, ty + 2, b, B.TORCH);
  ui.toast('Se abre el portal de salida en el centro de la isla');
}

async function changeDimension(target, opts = {}) {
  if (!world || state === 'loading' || (target === dim && !opts.force)) return;
  const from = dim;
  state = 'loading'; player.keys.clear(); mouse.left = mouse.right = false;
  $('travelTxt').textContent = 'Viajando a ' + DIM_NAMES[target] + '…'; $('travel').classList.remove('hidden');
  await new Promise((r) => setTimeout(r, 40));
  if (boss) { boss.dispose(); boss = null; weather.boss = false; darkTarget = 0; $('bossbar').classList.add('hidden'); }
  ritual = null; mobs.clear(); drops.clear();
  let ax, az;
  if (opts.arrive) { ax = Math.floor(opts.arrive.x); az = Math.floor(opts.arrive.z); }
  else if (target === 'end') { ax = 0; az = 30; }
  else if (target === 'nether') { ax = Math.floor(player.pos.x / 8); az = Math.floor(player.pos.z / 8); }
  else if (from === 'nether') { ax = Math.floor(player.pos.x * 8); az = Math.floor(player.pos.z * 8); }
  else { ax = Math.floor(player.spawn.x); az = Math.floor(player.spawn.z); }
  if (!dims[target]) dims[target] = makeWorld(target, target === 'nether' ? extraSaved.nether : target === 'end' ? extraSaved.end : new Map());
  world.group.visible = false; world = dims[target]; world.group.visible = true; dim = target;
  player.world = world; drops.world = world; particles.world = world; mobs.world = world; mobs.dim = target;
  sky.setDimension(target); darkTarget = 0;
  await loadAround(world, ax, az, 3);
  let pos;
  if (target === 'end') { const ty = world.topY(ax, az); pos = new THREE.Vector3(0.5, (ty > 0 ? ty : 64) + 1, 30.5); }
  else if (opts.respawn) pos = groundSpawn(ax, az);
  else {
    const found = findExistingPortal(ax, az);
    if (found) pos = standBesidePortal(found);
    else {
      let floorY;
      if (target === 'overworld') { const ty = world.topY(ax, az); floorY = Math.max(ty > 0 ? ty : SEA, SEA); }
      else { floorY = 64; for (let y = 100; y > 36; y--) { const b0 = world.getBlock(ax, y, az); if (world.isSolid(ax, y, az) && b0 !== B.LAVA && !world.isSolid(ax, y + 1, az) && !world.isSolid(ax, y + 2, az) && !LIQUID[world.getBlock(ax, y + 1, az)]) { floorY = y; break; } } }
      buildNetherPortal(ax, floorY, az);
      pos = new THREE.Vector3(ax + 1.5, floorY + 1, az + 2.5);
    }
  }
  player.pos.copy(pos); player.vel.set(0, 0, 0); player.fallStart = null; player.yaw = Math.PI; // mirando al portal
  state = 'play'; $('travel').classList.add('hidden'); travelCool = 3; portalT = 0;
  ui.toast('Has llegado a ' + DIM_NAMES[target]); quests.event('dim', target);
  if (target === 'end' && !dragonSpawned && !quests.bosses.has('dragon')) { dragonSpawned = true; setTimeout(() => { if (dim === 'end' && !boss) spawnBossOf('dragon', 0.5, 100, 0.5, { cx: 0, cy: 64, cz: 0, pillars: endPillars() }); }, 1500); }
  thumbReq = true;
}
function updatePortals(dt) {
  travelCool = Math.max(0, travelCool - dt);
  const px = Math.floor(player.pos.x), pz = Math.floor(player.pos.z), b1 = world.getBlock(px, Math.floor(player.pos.y + 0.2), pz), b2 = world.getBlock(px, Math.floor(player.pos.y + 1.2), pz);
  const kind = b1 === B.NETHER_PORTAL || b2 === B.NETHER_PORTAL ? 'nether' : b1 === B.END_PORTAL || b2 === B.END_PORTAL ? 'end' : null;
  const need = mode === 'creative' ? 0.6 : 3;
  if (kind && travelCool <= 0 && state === 'play') {
    portalT += dt;
    if (portalT >= need) { portalT = 0; changeDimension(kind === 'nether' ? (dim === 'nether' ? 'overworld' : 'nether') : (dim === 'end' ? 'overworld' : 'end')); }
  } else portalT = Math.max(0, portalT - dt * 2);
  const fx = $('portalfx'); fx.style.opacity = Math.min(1, portalT / need) * 0.9;
  fx.style.background = kind === 'end' ? 'radial-gradient(ellipse at center, rgba(20,60,70,.5), rgba(2,10,14,.95))' : '';
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
  if (relock) { state = 'play'; safeLock(); }
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
  const meta = { v: 3, gen: 2, dim, seed, mode, time: sky.time, pos: player.pos.toArray(), yaw: player.yaw, pitch: player.pitch,
    kind, ob, hp: player.hp, food: player.food, spawn: player.spawn.toArray(), inv: inv.toJSON(), furnaces: [...furnaces.entries()], weather: weather.toJSON(), quests: quests.toJSON(), xp: { l: xpLevel, p: xpPts } };
  const entries = [];
  for (const [dn, w] of Object.entries(dims)) for (const k of w.unsaved) if (w.chunks.has(k)) entries.push([dn === 'overworld' ? k : (dn === 'nether' ? 'n:' : 'e:') + k, new Uint8Array(w.chunks.get(k))]);
  const ok = await save.saveWorld(worldId, meta, entries, { name: worldName, mode, seed, created: createdAt, played: Math.floor(playedSec), level: xpLevel, thumb: thumbData });
  if (ok) { for (const w of Object.values(dims)) w.unsaved.clear(); lastSaved = Date.now(); }
  return ok;
}
function captureThumb() {
  try { const c = document.createElement('canvas'); c.width = 160; c.height = 90; c.getContext('2d').drawImage(canvas, 0, 0, 160, 90); thumbData = c.toDataURL('image/jpeg', 0.6); } catch {}
}
async function saveWithFeedback() {
  thumbReq = true; await new Promise((r) => setTimeout(r, 120));
  if (mp) { ui.toast('Multijugador: el servidor guarda el mundo'); return true; }
  const ok = await saveGame();
  ui.toast(ok ? '💾 Partida guardada' : '⚠ No se pudo guardar');
  return ok;
}

// ---------- Arranque de partida ----------
async function startGame({ id, name, seed: sd, mode: md, saved, meta, created, played, nether, end, kind: kd, net, welcome }) {
  if (mp) { mp.net.close(); for (const r of mp.remotes.values()) scene.remove(r.model.group); }
  mp = net ? { net, edits: {}, remotes: new Map(), posT: 0 } : null;
  if (mp) mpStoreEdits(welcome.edits);
  state = 'loading'; mode = md; seed = sd;
  kind = kd || (meta && meta.kind) || 'normal'; ob = { count: (meta && meta.ob && meta.ob.count) || 0 };
  $('ob').classList.toggle('hidden', kind !== 'oneblock');
  worldId = id; worldName = name || 'Mundo'; createdAt = created || Date.now(); playedSec = played || 0; thumbData = null;
  showOverlay('menu'); $('msg').textContent = 'Generando mundo…';
  $('menuBody').classList.add('hidden');

  furnaces.clear();
  for (const w of Object.values(dims)) { scene.remove(w.group); }
  dims = {}; extraSaved = { nether: nether || new Map(), end: end || new Map() }; dragonSpawned = false; portalT = 0; travelCool = 0;
  dim = (meta && meta.dim) || 'overworld';
  dims.overworld = makeWorld('overworld', saved);
  if (dim !== 'overworld') dims[dim] = makeWorld(dim, extraSaved[dim]);
  world = dims[dim]; world.group.visible = true;
  inv = new Inventory();
  player = new Player(world, camera);
  player.mode = mode;
  if (!model) model = new PlayerModel(scene);
  sky = new Sky(scene, camera, materials);
  sky.setDimension(dim);
  if (!ambient) ambient = new Ambient(scene);
  applyQuality();
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
        const a = Math.random() * Math.PI * 2, d = 10 + Math.random() * 8, x = Math.floor(player.pos.x + Math.cos(a) * d), z = Math.floor(player.pos.z + Math.sin(a) * d), top = floorAt(x, z);
        if (top !== null) { const tp = type || (dim === 'nether' ? 'piglin' : dim === 'end' ? 'endermite' : Math.random() < 0.6 ? 'zombie' : 'creeper'); mobs.add(tp, x + 0.5, MOB_TYPES[tp].fly ? top + 4 : top, z + 0.5); return; }
      }
    },
    loot: (x, y, z, type = 'storm') => { for (const [id, n] of (LOOT[type] || LOOT.storm)) drops.spawn(x, y, z, id, n); },
    done: () => {
      const type = boss ? boss.type : 'storm';
      quests.event('boss', type); addXp(100); sound('craft');
      if (type === 'dragon' && dim === 'end') setTimeout(buildEndExit, 1200);
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
    effect: (n, s) => { if (mode === 'survival') player.effects[n] = Math.max(player.effects[n] || 0, s); },
    killed: (type, xp) => { quests.event('kill', type); addXp(xp); },
    tp: (x, y, z) => { particles.burst(x, y, z, [0.7, 0.2, 1], 14, 3); sound('pop'); },
    hurtPlayer: (d, kx, kz) => player.damage(d, kx, kz),
    explode, drop: (x, y, z, id, n) => drops.spawn(x, y, z, id, n), sound,
    puff: (x, y, z) => particles.burst(x, y, z, [0.9, 0.9, 0.9], 12, 3),
  });
  ui = new UI({ inv, player, getMode: () => mode, dropItem, sound, onSelect: syncSelect, onCraft: (id, n) => quests.event('craft', id, n), onArmorChange: () => model && model.setArmor(inv.armor) });
  xpLevel = 0; xpPts = 0;

  player.events.onHurt = () => { buzz(45); sound('hurt'); const v = $('vignette'); v.classList.add('hurt'); setTimeout(() => v.classList.remove('hurt'), 120); };
  player.events.onStep = () => sound('step');
  player.events.onLand = (d) => sound(d > 3 ? 'hurt' : 'place');
  player.events.onSplash = () => sound('splash');
  player.events.onDeath = onDeath;
  player.events.onArmor = () => { const br = inv.wearArmor(1); if (br.length) ui.toast('¡Se ha roto una pieza de tu armadura!'); if (ui.isOpen) ui.render(); };
  player.events.onVoid = () => { if (kind === 'oneblock' && dim === 'overworld') { player.pos.set(0.5, 65.01, 0.5); player.vel.set(0, 0, 0); if (mode === 'survival') player.damage(3); ui.toast('Volviste al bloque…'); } else if (dim === 'end') { player.damage(6); const ty = world.topY(0, 30); player.pos.set(0.5, (ty > 0 ? ty : 64) + 1, 30.5); player.vel.set(0, 0, 0); ui.toast('Caíste al vacío…'); } else { player.pos.y = 70; player.vel.set(0, 0, 0); player.damage(4); } };
  mobs.dim = dim;

  let cx, cz;
  if (meta) {
    weather.load(meta.weather); quests.load(meta.quests); if (meta.xp) { xpLevel = meta.xp.l; xpPts = meta.xp.p; } inv.load(meta.inv); (meta.furnaces || []).forEach(([k, f]) => furnaces.set(k, f)); sky.time = meta.time; player.hp = meta.hp; player.food = meta.food;
    player.yaw = meta.yaw; player.pitch = meta.pitch; player.spawn.fromArray(meta.spawn);
    player.pos.fromArray(meta.pos); cx = Math.floor(meta.pos[0]); cz = Math.floor(meta.pos[2]);
  } else if (kind === 'oneblock') { cx = 0; cz = 0; player.pos.set(0.5, 66, 0.5); }
  else { [cx, cz] = findSpawnColumn(seed); player.pos.set(cx + 0.5, 70, cz + 0.5); }

  // Cargar la zona inicial antes de soltar al jugador
  await new Promise((resolve) => {
    const tick = () => {
      const pending = world.update(cx, cz, 3, 10);
      $('msg').textContent = 'Generando mundo… ' + Math.max(0, 100 - pending * 2) + '%';
      if (pending > 0) setTimeout(tick, 0); else resolve();
    };
    tick();
  });
  if (kind === 'oneblock') { obEnsure(); if (!meta) { player.pos.set(0.5, 65.01, 0.5); player.spawn.copy(player.pos); } obHud(); }
  if (!meta && kind !== 'oneblock') { const sp = groundSpawn(cx, cz); player.pos.copy(sp); player.spawn.copy(sp); }
  else player.vel.set(0, 0, 0);

  ui.renderHotbar(); ui.renderStats(); updateHand(0); setCamMode(camMode);
  window.__game = { get mp() { return mp; }, get world() { return world; }, player, inv, sky, mobs, drops, ui, camera, scene, renderer, get mode() { return mode; }, set mode(v) { mode = v; player.mode = v; }, get state() { return state; }, set state(v) { state = v; }, explode, saveGame, openInventory, mouse, useItem, breakBlock, furnaces, setCam: setCamMode, get weather() { return weather; }, get boss() { return boss; }, summon: (x, y, z) => spawnBossOf('storm', x, y, z), summonBoss, summonMob, get quests() { return quests; }, materials, renderer, get composer() { return composer; }, changeDimension, get dim() { return dim; }, get dims() { return dims; }, lightPortal, findPortalFrame, useEyeOnFrame, buildNetherPortal, openPanel, closePanel, addXp, terrainInfo, openChest, rollLoot, get xp() { return [xpLevel, xpPts]; } };
  if (mp) { mpSetup(); for (const p of welcome.players) mpAddRemote(p.id, p.name, p.color); sky.time = welcome.time; chatLine('Conectado · ' + (welcome.players.length + 1) + ' jugador(es). Enter = chat', 'sys'); }
  state = 'play'; showOverlay(null);
  safeLock(); keepAwake();
  setTimeout(() => { if (document.pointerLockElement !== canvas && state === 'play' && !padActive && !touchMode) { state = 'pause'; showOverlay('pause'); } }, 1500);
}

// ---------- Eventos ----------
document.addEventListener('pointerlockchange', () => {
  const locked = document.pointerLockElement === canvas;
  if (locked) { if (state === 'pause' || state === 'play') { state = 'play'; showOverlay(null); } }
  else { player && player.keys.clear(); mouse.left = mouse.right = false; if (state === 'play' && !padActive && !touchMode) { state = 'pause'; showOverlay('pause'); } }
});
document.addEventListener('mousemove', (e) => {
  if (state !== 'play' || document.pointerLockElement !== canvas) return;
  player.yaw -= e.movementX * 0.0022 * settings.sens;
  player.pitch = Math.max(-Math.PI / 2 + 0.01, Math.min(Math.PI / 2 - 0.01, player.pitch - e.movementY * 0.0022 * settings.sens));
});
document.addEventListener('keydown', (e) => {
  if (e.isTrusted) padActive = false;
  audio.unlock();
  if (state === 'panel') {
    if (panelId === 'chatp' && e.code === 'Enter') { e.preventDefault(); sendChat($('chatIn').value); closePanel(true); return; }
    if (e.code === 'Escape') closePanel(false);
    else if ((e.code === 'KeyB' && panelId === 'summon') || (e.code === 'KeyM' && panelId === 'quests')) closePanel(true);
    else if (e.code === 'KeyP' && panelId === 'padcfg') closePanel(false);
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
    case 'KeyP': openPanel('padcfg'); return;
    case 'Enter': if (mp) { e.preventDefault(); openPanel('chatp'); } return;
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
// ---------- Controles táctiles y mejoras para móvil ----------
let touchMode = settings.touch === 'on' || (settings.touch !== 'off' && COARSE), touchMove = null, touchSprint = false, touchAuto = false, touchUI = null, wakeLock = null, fsTries = 0, lowFpsT = 0;
const buzz = (ms) => { if (touchMode && navigator.vibrate) try { navigator.vibrate(ms); } catch {} };
function applyTouchMode() {
  document.body.classList.toggle('touch', touchMode);
  document.documentElement.style.setProperty('--hs', Math.max(0.62, Math.min(1, (innerWidth - 330) / 480)));
  const b = $('bTouch'); if (b) b.textContent = '🖐 Controles táctiles: ' + ({ auto: 'Auto', on: 'Sí', off: 'No' })[settings.touch];
}
async function keepAwake() { try { if ('wakeLock' in navigator && document.visibilityState === 'visible' && !wakeLock && state !== 'menu') { wakeLock = await navigator.wakeLock.request('screen'); wakeLock.addEventListener('release', () => { wakeLock = null; }); } } catch {} }
function enterFullscreen() {
  const el = document.documentElement;
  if (document.fullscreenElement || matchMedia('(display-mode: fullscreen)').matches || matchMedia('(display-mode: standalone)').matches) return;
  try { const r = (el.requestFullscreen || el.webkitRequestFullscreen).call(el); if (r && r.then) r.then(() => { try { screen.orientation.lock('landscape').catch(() => {}); } catch {} }).catch(() => {}); } catch {}
}
addEventListener('pointerup', (e) => { if (touchMode && e.pointerType === 'touch' && fsTries < 2 && !document.fullscreenElement) { fsTries++; enterFullscreen(); } });
addEventListener('touchstart', () => { if (!touchMode && settings.touch === 'auto') { touchMode = true; applyTouchMode(); } }, { passive: true, once: true });
document.addEventListener('contextmenu', (e) => { if (touchMode) e.preventDefault(); });
addEventListener('resize', applyTouchMode);
function initTouch() {
  touchUI = new TouchControls({
    move: (x, y, m) => { touchMove = m > 0 ? { x, y } : null; touchAuto = m > 0.97 && y > 0.6; },
    sprint: (on) => { touchSprint = on; },
    key: (code, on) => { if (!player || state !== 'play') return; if (on) player.keys.add(code); else player.keys.delete(code); },
    look: (dx, dy) => { if (state !== 'play' || !player) return; player.yaw -= dx * 0.0046 * settings.sens; player.pitch = Math.max(-Math.PI / 2 + 0.01, Math.min(Math.PI / 2 - 0.01, player.pitch - dy * 0.0046 * settings.sens)); },
    attack: (on) => { if (state !== 'play') { mouse.left = false; return; } if (on) pressLeft(); else mouse.left = false; },
    use: (on) => { if (state !== 'play') { mouse.right = false; return; } if (on) pressRight(); else mouse.right = false; },
    vibrate: buzz,
    btn: (n) => {
      if (n === 'pause') { if (state === 'play') { state = 'pause'; showOverlay('pause'); } }
      else if (n === 'inv') { if (state === 'play') openInventory(2); }
      else if (n === 'quests') { if (state === 'play') openPanel('quests'); }
      else if (n === 'chat') { if (state === 'play' && mp) openPanel('chatp'); }
      else if (n === 'cam') setCamMode((camMode + 1) % 3);
      else if (n === 'fly') tap('KeyF');
      else if (n === 'close') { if (state === 'inv') closeInventory(true); else if (state === 'panel') closePanel(true); }
    },
  });
  applyTouchMode();
}
function touchFrame(dt) {
  if (!touchUI) return;
  const play = state === 'play' && !!world && !!player;
  touchUI.update({ visible: touchMode && play, close: touchMode && (state === 'inv' || state === 'panel'), flying: !!(player && player.flying), creative: mode === 'creative', mp: !!mp });
  if (!touchMode || !play) return;
  if (touchMove) player.analog = touchMove;
  setPadKey('ShiftLeft', (touchSprint || touchAuto) && !!touchMove && touchMove.y > 0.3);
  // si el rendimiento es bajo de forma sostenida, baja el alcance y luego la calidad gráfica
  lowFpsT = Math.max(0, lowFpsT + (fps > 0 && fps < 22 ? dt : -dt * 0.5));
  if (lowFpsT > 12 && settings.autoQ !== false) {
    lowFpsT = 0;
    if (radius > 5) { radius--; settings.radius = radius; saveSettings(); ui.toast('Rendimiento: distancia de visión ' + radius); const r = $('rRadius'); if (r) { r.value = radius; $('vRadius').textContent = radius; } }
    else if (settings.quality > 0 && settings.quality < 4) { settings.quality--; saveSettings(); applyQuality(); ui.toast('Rendimiento: gráficos ' + QUALITY[settings.quality].name); }
  }
}
$('bTouch').onclick = () => { settings.touch = settings.touch === 'auto' ? 'on' : settings.touch === 'on' ? 'off' : 'auto'; touchMode = settings.touch === 'on' || (settings.touch !== 'off' && COARSE); saveSettings(); applyTouchMode(); };
$('bFull').onclick = () => { if (document.fullscreenElement) document.exitFullscreen(); else enterFullscreen(); };
$('chatSend').onclick = () => { sendChat($('chatIn').value); closePanel(true); };
initTouch();

function pressLeft() { mouse.left = true; swing = swing || 0.001; if (attackCool <= 0) { if (attack()) { attackCool = 0.4; mouse.left = false; } } }
function pressRight() { mouse.right = true; placeCool = 0.22; useItem(); }
document.addEventListener('mousedown', (e) => {
  if (e.isTrusted) padActive = false;
  if (e.isTrusted && state === 'play' && document.pointerLockElement !== canvas) { safeLock(); return; } // el ratón vuelve a tomar el control
  if (state !== 'play' || document.pointerLockElement !== canvas) return;
  if (e.button === 0) pressLeft(); else if (e.button === 2) pressRight();
});
document.addEventListener('mouseup', (e) => { if (e.button === 0) mouse.left = false; if (e.button === 2) mouse.right = false; });
document.addEventListener('visibilitychange', () => {
  if (document.hidden && state !== 'menu') { saveGame(); if (state === 'play') { state = 'pause'; showOverlay('pause'); } } // al cambiar de app, el juego se pausa
  else if (!document.hidden) keepAwake();
});
addEventListener('beforeunload', () => { if (world && state !== 'menu') saveGame(); });
function resize() {
  renderer.setSize(innerWidth, innerHeight, false);
  if (composer) composer.setSize(innerWidth, innerHeight);
  camera.aspect = innerWidth / innerHeight; camera.updateProjectionMatrix();
}
addEventListener('resize', resize); resize();

function resumeGame() { audio.unlock(); showOverlay(null); state = 'play'; safeLock(); }
$('bResume').onclick = resumeGame;
$('bPPad').onclick = () => { showOverlay(null); state = 'play'; openPanel('padcfg'); };
$('bSave').onclick = async () => { thumbReq = true; await new Promise((r) => setTimeout(r, 120)); await saveGame(); location.reload(); };
$('bSaveNow').onclick = async () => { await saveWithFeedback(); $('bSaveNow').textContent = '💾 Guardado ✔'; setTimeout(() => ($('bSaveNow').textContent = '💾 Guardar partida'), 1500); };
$('bExport').onclick = async () => {
  await saveGame();
  const blob = await save.exportWorld(worldId), a = document.createElement('a');
  a.href = URL.createObjectURL(blob); a.download = worldName.replace(/[^\w\-]+/g, '_') + '.mcw'; a.click(); setTimeout(() => URL.revokeObjectURL(a.href), 4000);
};
$('bRespawn').onclick = async () => { audio.unlock(); showOverlay(null); if (dim !== 'overworld') { state = 'play'; await changeDimension('overworld', { respawn: true }); } player.respawn(); if (dim === 'overworld') { const g = groundSpawn(Math.floor(player.spawn.x), Math.floor(player.spawn.z)); player.pos.copy(g); } state = 'play'; ui.renderStats(); safeLock(); };
$('bCam').onclick = () => setCamMode((camMode + 1) % 3);
$('bQuality').onclick = () => { settings.quality = (settings.quality + 1) % QUALITY.length; saveSettings(); applyQuality(); ui && ui.toast('Gráficos: ' + QUALITY[settings.quality].name); };
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

// ===================================================================== MANDO (PS4)
pads = new Gamepads(settings.pad);
const padHeld = new Set(), cur = { x: innerWidth / 2, y: innerHeight / 2 };
let padSprint = false, padLeft = false, padRight = false, lastUiKey = '', padHover = null;
const clamp01 = (v, a, b) => Math.max(a, Math.min(b, v));
const tap = (code) => { document.dispatchEvent(new KeyboardEvent('keydown', { code, bubbles: true })); document.dispatchEvent(new KeyboardEvent('keyup', { code, bubbles: true })); };
function setPadKey(code, on) { if (on) { if (!padHeld.has(code)) { padHeld.add(code); player.keys.add(code); } } else if (padHeld.has(code)) { padHeld.delete(code); player.keys.delete(code); } }
function releasePad() { if (!player) return; for (const c of [...padHeld]) setPadKey(c, false); player.analog = null; padSprint = false; if (padLeft) { padLeft = false; mouse.left = false; } if (padRight) { padRight = false; mouse.right = false; } }
function padPause() {
  if (state === 'play') { state = 'pause'; showOverlay('pause'); try { document.exitPointerLock(); } catch {} }
  else if (state === 'pause') resumeGame();
  else padBack();
}
function padBack() {
  if (state === 'inv') tap('KeyE');
  else if (state === 'panel') closePanel(panelId !== 'padcfg');
  else if (state === 'pause') resumeGame();
}
function padTargets() {
  return [...document.querySelectorAll('button, input[type=range], .slot[data-g]')].filter((e) => {
    if (e.disabled || e.offsetParent === null) return false; const r = e.getBoundingClientRect();
    return r.width > 0 && r.height > 0 && r.bottom > 0 && r.top < innerHeight && r.right > 0 && r.left < innerWidth;
  });
}
function snapCursor() {
  const list = padTargets(); if (!list.length) return;
  const t = list.find((e) => e.classList.contains('primary')) || list.find((e) => e.dataset.g === 'inv' && e.parentElement.id === 'invHot') || list[0];
  const r = t.getBoundingClientRect(); cur.x = r.left + r.width / 2; cur.y = r.top + r.height / 2;
}
function padNavigate(dir) { // salta al elemento más cercano en esa dirección
  let best = null, bs = 1e9;
  for (const e of padTargets()) {
    const r = e.getBoundingClientRect(), cx = r.left + r.width / 2, cy = r.top + r.height / 2, vx = cx - cur.x, vy = cy - cur.y;
    const along = vx * dir[0] + vy * dir[1]; if (along < 5) continue;
    const score = along + Math.abs(vx * dir[1] - vy * dir[0]) * 2.4; if (score < bs) { bs = score; best = [cx, cy]; }
  }
  if (best) { cur.x = best[0]; cur.y = best[1]; }
}
function padClick(button) { // clic con el cursor virtual (izq. = cruz, der. = cuadrado)
  const el = document.elementFromPoint(cur.x, cur.y); if (!el) return; audio.unlock();
  const range = el.closest && el.closest('input[type=range]');
  if (range && button === 0) {
    const r = range.getBoundingClientRect(), f = clamp01((cur.x - r.left) / r.width, 0, 1), mn = +range.min, mx = +range.max, st = +range.step || 1;
    range.value = Math.round((mn + f * (mx - mn)) / st) * st; range.dispatchEvent(new Event('input', { bubbles: true })); return;
  }
  const o = { bubbles: true, cancelable: true, clientX: cur.x, clientY: cur.y, button, view: window };
  el.dispatchEvent(new MouseEvent('mousedown', o)); el.dispatchEvent(new MouseEvent('mouseup', o));
  if (button === 0) el.dispatchEvent(new MouseEvent('click', o)); else el.dispatchEvent(new MouseEvent('contextmenu', o));
}
function padUi(s, dt) { // menús, inventario y paneles con cursor virtual + cruceta
  const pc = $('padcursor'); pc.classList.remove('hidden');
  const key = state + '|' + [...document.querySelectorAll('#overlay > div:not(.hidden)')].map((e) => e.id).join(',') + '|' + (panelId || '');
  if (key !== lastUiKey) { lastUiKey = key; snapCursor(); }
  const L = pads.stick(s.axes, 0, 1, 1.25), R = pads.stick(s.axes, 2, 3, 1);
  let moved = false;
  if (L.m > 0) { cur.x = clamp01(cur.x + L.x * dt * 1100, 0, innerWidth - 1); cur.y = clamp01(cur.y + L.y * dt * 1100, 0, innerHeight - 1); moved = true; }
  pc.style.left = cur.x + 'px'; pc.style.top = cur.y + 'px';
  const el = document.elementFromPoint(cur.x, cur.y), tg = el && el.closest ? el.closest('button, .slot[data-g], input') : null;
  if (tg !== padHover) { if (padHover) padHover.classList.remove('padhover'); padHover = tg; if (tg) tg.classList.add('padhover'); }
  if (moved && el) el.dispatchEvent(new MouseEvent('mousemove', { bubbles: true, clientX: cur.x, clientY: cur.y }));
  if (R.m > 0) { let n = el; while (n && n !== document.body) { if (n.scrollHeight > n.clientHeight + 4 && /(auto|scroll)/.test(getComputedStyle(n).overflowY)) { n.scrollTop += R.y * dt * 800; break; } n = n.parentElement; } }
  [[12, [0, -1]], [13, [0, 1]], [14, [-1, 0]], [15, [1, 0]]].forEach(([b, d]) => { if (s.edge[b]) padNavigate(d); });
  if (pads.edge('jump')) padClick(0);
  if (pads.edge('fall')) padClick(2);
  if (pads.edge('drop') || pads.edge('inventory') && state === 'inv') padBack();
  if (pads.edge('pause')) padPause();
}
function padGame(s, dt) {
  const L = pads.stick(s.axes, 0, 1, 1), R = pads.stick(s.axes, 2, 3), cfg = settings.pad;
  player.analog = L.m > 0 ? { x: L.x, y: -L.y } : null;
  if (pads.edge('sprint')) padSprint = !padSprint;
  if (L.m < 0.2) padSprint = false;
  setPadKey('ShiftLeft', padSprint && L.y < -0.2);
  if (R.m > 0) { player.yaw -= R.x * cfg.lookX * settings.sens * dt; player.pitch = Math.max(-Math.PI / 2 + 0.01, Math.min(Math.PI / 2 - 0.01, player.pitch - R.y * cfg.lookY * settings.sens * dt * (cfg.invertY ? -1 : 1))); }
  setPadKey('Space', pads.down('jump')); setPadKey('KeyQ', pads.down('fall') && player.flying);
  const atk = pads.down('attack'), use = pads.down('use');
  if (atk && !padLeft) pressLeft(); if (!atk && padLeft) mouse.left = false; padLeft = atk;
  if (use && !padRight) pressRight(); if (!use && padRight) mouse.right = false; padRight = use;
  if (pads.edge('prev')) { inv.selected = (inv.selected + 8) % 9; syncSelect(); }
  if (pads.edge('next')) { inv.selected = (inv.selected + 1) % 9; syncSelect(); }
  const map = { inventory: 'KeyE', drop: 'KeyQ', summon: 'KeyB', quests: 'KeyM', camera: 'KeyV', fly: 'KeyF', weather: 'KeyT', debug: 'F3', mode: 'KeyG', config: 'KeyP' };
  for (const [a, code] of Object.entries(map)) if (pads.edge(a)) tap(code);
  if (pads.edge('pause')) padPause();
}
function padFrame(dt) {
  const s = pads.poll(), pc = $('padcursor');
  if (!s.connected) { releasePad(); pc.classList.add('hidden'); return; }
  if (s.busy) return; // asignando un botón
  if (s.any && !padActive) { padActive = true; }
  if (panelId === 'padcfg') updatePadTest(s);
  if (state === 'play' && world && player) { pc.classList.add('hidden'); if (padActive || s.any) padGame(s, dt); }
  else { releasePad(); if (['menu', 'pause', 'inv', 'panel', 'dead'].includes(state)) padUi(s, dt); else pc.classList.add('hidden'); }
}
addEventListener('gamepadconnected', (e) => { padActive = true; if (ui) ui.toast('🎮 Mando conectado'); $('msg') && state === 'menu' && ($('msg').textContent = '🎮 Mando conectado: mueve el cursor con el stick izquierdo y pulsa ✕'); });
addEventListener('gamepaddisconnected', () => { releasePad(); if (ui) ui.toast('🎮 Mando desconectado'); });

// Panel de configuración del mando
function renderPadCfg() {
  const cfg = settings.pad, st = $('padStatus');
  st.className = pads.connected ? 'ok' : 'bad';
  st.textContent = pads.connected ? '✔ Conectado: ' + pads.id : '✖ No hay mando: conéctalo por USB/Bluetooth y pulsa cualquier botón (los navegadores no lo ven hasta entonces).';
  $('padMap').innerHTML = PAD_ACTIONS.map((a) => `<div class="prow"><span>${a.label}</span><b>${BTN_NAMES[cfg.map[a.id]] || 'Botón ' + cfg.map[a.id]}</b><button data-pa="${a.id}">Cambiar</button></div>`).join('');
  const sl = (id, lab, key, fmt) => { const el = $(id); el.value = cfg[key]; $(lab).textContent = fmt(cfg[key]); el.oninput = (e) => { cfg[key] = +e.target.value; $(lab).textContent = fmt(cfg[key]); saveSettings(); }; };
  sl('pLookX', 'vLookX', 'lookX', (v) => v.toFixed(1)); sl('pLookY', 'vLookY', 'lookY', (v) => v.toFixed(1)); sl('pDead', 'vDead', 'deadzone', (v) => v.toFixed(2)); sl('pCurve', 'vCurve', 'curve', (v) => v.toFixed(1));
  $('pInvert').textContent = 'Invertir Y: ' + (cfg.invertY ? 'sí' : 'no'); $('pRumble').textContent = 'Vibración: ' + (cfg.rumble ? 'sí' : 'no');
  $('padTest').innerHTML = BTN_NAMES.map((n, i) => `<span class="chip" data-b="${i}">${n}</span>`).join('') + '<div class="axis" data-ax="0"><i></i></div><div class="axis" data-ax="1"><i></i></div><div class="axis" data-ax="2"><i></i></div><div class="axis" data-ax="3"><i></i></div>';
}
function updatePadTest(s) {
  document.querySelectorAll('#padTest .chip').forEach((c) => c.classList.toggle('on', !!s.down[+c.dataset.b]));
  document.querySelectorAll('#padTest .axis').forEach((a) => { const v = (s.axes[+a.dataset.ax] || 0); a.firstElementChild.style.left = ((v + 1) / 2) * (a.clientWidth - 8) + 'px'; });
  const st = $('padStatus'); if (st && pads.connected && !st.classList.contains('ok')) renderPadCfg();
}
$('padcfg').addEventListener('click', (e) => {
  const cfg = settings.pad, b = e.target.closest('button'); if (!b) return;
  if (b.dataset.pa) {
    if (!pads.connected) { ui.toast('Conecta el mando y pulsa un botón'); return; }
    const id = b.dataset.pa; b.textContent = 'Pulsa un botón…'; b.classList.add('listen');
    pads.listen((i) => { const old = cfg.map[id]; const other = Object.keys(cfg.map).find((k) => k !== id && cfg.map[k] === i); if (other) cfg.map[other] = old; cfg.map[id] = i; saveSettings(); renderPadCfg(); });
  } else if (b.id === 'pInvert') { cfg.invertY = !cfg.invertY; saveSettings(); renderPadCfg(); }
  else if (b.id === 'pRumble') { cfg.rumble = !cfg.rumble; saveSettings(); renderPadCfg(); if (cfg.rumble) pads.rumble(0.6, 0.6, 250); }
  else if (b.id === 'pReset') { const d = defaultPadConfig(); Object.assign(cfg, d); cfg.map = d.map; saveSettings(); renderPadCfg(); }
});

// ---------- Bucle ----------
let last = performance.now(), fpsAcc = 0, fpsN = 0, fps = 0;
function frame(now) {
  requestAnimationFrame(frame);
  const dt = Math.min(0.1, (now - last) / 1000); last = now;
  padFrame(dt); touchFrame(dt);
  if (!world || state === 'menu' || state === 'loading') return;
  fpsAcc += dt; fpsN++; if (fpsAcc >= 0.5) { fps = Math.round(fpsN / fpsAcc); fpsAcc = 0; fpsN = 0; }

  if (state !== 'pause') {
    { const hd = inv.held(); player.canGlide = !!(hd && hd.id === I.ELYTRA); player.armorPts = inv.armorPoints(); model.setArmor(inv.armor); updateFx(dt); }
    player.update(dt);
    model.update(dt, player, swing);
    mpUpdate(dt);
    applyCamera();
    tickFurnaces(dt);
    const cx = Math.floor(player.pos.x), cz = Math.floor(player.pos.z);
    const ow = dim === 'overworld', snowing = ow && biomeAt(cx, cz, seed) === 'snow';
    if (ow) weather.update(dt, player, camera, snowing, player.headUnder); else { weather.rain.visible = weather.snow.visible = false; weather.wind.x = weather.wind.z = 0; weather.wind.s = 0.12; weather.intensity = 0; }
    const exposed = ow ? world.skyLit(cx, Math.floor(player.pos.y + 1.6), cz) : 0;
    player.wind.x = weather.wind.x * 1.4 * exposed * (weather.state === 'clear' ? 0 : 1); player.wind.z = weather.wind.z * 1.4 * exposed * (weather.state === 'clear' ? 0 : 1);
    gameU.uTime.value += dt; gameU.uWind.value = 0.25 + weather.wind.s * 2.2;
    if (!ow) audio.setAmbient(0, 0.18, weather.t * 0.2); else audio.setAmbient(weather.intensity * (0.25 + 0.75 * exposed) * (player.headUnder ? 0.2 : 1), weather.wind.s * (0.3 + 0.7 * exposed) * (weather.state === 'clear' ? 0.25 : 1), weather.t * 0.4);
    sky.update(dt, camera.position, radius * 16, player.headUnder, weather.wind);
    ambient.update(dt, camera, dim);
    updatePortals(dt);
    const pend = world.update(player.pos.x, player.pos.z, radius, wBudget);
    wBudget = pend > 40 ? 4 : 2;
    player.push.x = player.push.y = player.push.z = 0;
    if (ritual) updateRitual(dt);
    if (boss) {
      if (STORMY.has(boss.type)) { weather.timer = 9999; weather.boss = true; }
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
      $('mmInfo').textContent = `${Math.floor(player.pos.x)}, ${Math.floor(player.pos.y)}, ${Math.floor(player.pos.z)}\n${String(hh).padStart(2, '0')}:${String(mm).padStart(2, '0')} · ${dim === 'overworld' ? WEATHER_NAMES[weather.state] : DIM_NAMES[dim]}\n📷 ${['1ª persona', '3ª detrás', '3ª delante'][camMode]} · ${fps} FPS`;
      $('xpFill').style.width = (xpPts / xpNeed(xpLevel)) * 100 + '%'; $('xpLvl').textContent = xpLevel;
      $('xp').style.visibility = mode === 'survival' ? 'visible' : 'hidden';
      const ef = []; if (player.effects.poison > 0) ef.push(`<span style="border-color:#7a2">☠ Veneno ${Math.ceil(player.effects.poison)}s</span>`); if (player.effects.fatigue > 0) ef.push(`<span style="border-color:#6cf">⛏ Fatiga ${Math.ceil(player.effects.fatigue)}s</span>`); if (player.effects.burn > 0) ef.push(`<span style="border-color:#f80">🔥 Fuego ${Math.ceil(player.effects.burn)}s</span>`); if (player.effects.levitate > 0) ef.push(`<span style="border-color:#fff">☁ Levitación ${Math.ceil(player.effects.levitate)}s</span>`);
      $('effects').innerHTML = ef.join('');
      $('darkness').style.opacity = darkTarget;
    }
    mmT -= dt; if (mmT <= 0) { mmT = 0.4; drawMinimap(); }
    trackT -= dt; if (trackT <= 0) { trackT = 0.5; updateTracker(); }
    playedSec += dt;
    saveT += dt; if (saveT > 25) { saveT = 0; thumbReq = true; }
  }
  if (gradeOn) GradeShader.uniforms.uTime.value = (now % 10000) / 1000;
  if (composer) composer.render(dt); else renderer.render(scene, camera);
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
  const fresh = (md, kd) => {
    audio.unlock();
    const name = $('wName').value.trim() || `Mundo ${list.length + 1}`, sv = $('wSeed').value.trim();
    const sd = !sv ? 1 + Math.floor(Math.random() * 900000) : /^\d+$/.test(sv) ? Number(sv) % 900000 + 1 : hashSeed(sv);
    startGame({ id: save.newId(), name, seed: sd, mode: md, saved: new Map(), meta: null, kind: kd });
  };
  $('bSurvival').onclick = () => fresh('survival');
  $('bCreative').onclick = () => fresh('creative');
  $('bOneBlock').onclick = () => fresh('survival', 'oneblock');
  try { $('mpUrl').value = localStorage.getItem('mcweb-mpurl') || ''; $('mpName').value = localStorage.getItem('mcweb-mpname') || ''; } catch {}
  $('bMulti').onclick = async () => {
    audio.unlock();
    let url = $('mpUrl').value.trim(); if (!url) { $('msg').textContent = 'Escribe la dirección del servidor'; return; }
    if (!/^wss?:\/\//.test(url)) url = (location.protocol === 'https:' ? 'wss://' : 'ws://') + url;
    const name = $('mpName').value.trim() || 'Jugador' + Math.floor(Math.random() * 900 + 100);
    try { localStorage.setItem('mcweb-mpurl', $('mpUrl').value.trim()); localStorage.setItem('mcweb-mpname', $('mpName').value.trim()); } catch {}
    $('msg').textContent = 'Conectando…';
    const net = new Net();
    try {
      const welcome = await net.connect(url, name);
      startGame({ id: null, name: 'Multijugador', seed: welcome.seed, mode: welcome.mode, saved: new Map(), meta: null, net, welcome });
    } catch (e) { $('msg').textContent = '⚠ ' + e.message + (location.protocol === 'https:' && url.startsWith('ws://') ? ' (esta página es https: usa wss:// o abre el juego en http://)' : ''); }
  };
  $('worldList').addEventListener('click', async (e) => {
    const btn = e.target.closest('button'), card = e.target.closest('.wcard'); if (!btn || !card) return;
    const id = card.dataset.id, w = list.find((x) => x.id === id);
    if (btn.dataset.act === 'play') {
      audio.unlock(); $('msg').textContent = 'Cargando mundo…';
      const data = await save.loadWorld(id);
      if (!data.meta) { $('msg').textContent = 'No se pudo leer este mundo'; return; }
      startGame({ id, name: w.name, kind: data.meta.kind, seed: data.meta.seed, mode: data.meta.mode, saved: data.chunks, nether: data.nether, end: data.end, meta: data.meta, created: w.created, played: w.played });
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
