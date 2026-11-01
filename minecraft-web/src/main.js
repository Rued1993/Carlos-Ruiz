import * as THREE from 'three';
import { createAtlas, TILE_INDEX, TILE_COUNT } from './atlas.js';
import { World, terrainHeight } from './world.js';
import { Player } from './player.js';
import { BLOCKS, HOTBAR, AIR } from './blocks.js';

const SKY = 0x87ceeb;
const RADIUS = 6;

const canvas = document.getElementById('game');
const renderer = new THREE.WebGLRenderer({ canvas, antialias: false });
renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
const scene = new THREE.Scene();
scene.background = new THREE.Color(SKY);
scene.fog = new THREE.Fog(SKY, RADIUS * 16 * 0.55, RADIUS * 16 * 0.95);
const camera = new THREE.PerspectiveCamera(75, 1, 0.05, 400);

const { canvas: atlasCanvas, texture } = createAtlas();
const material = new THREE.MeshBasicMaterial({ map: texture, vertexColors: true });
const world = new World(scene, material);
const player = new Player(world, camera);

// Resaltado del bloque apuntado
const highlight = new THREE.LineSegments(
  new THREE.EdgesGeometry(new THREE.BoxGeometry(1.005, 1.005, 1.005)),
  new THREE.LineBasicMaterial({ color: 0x000000 })
);
highlight.visible = false;
scene.add(highlight);

// ---------- Hotbar ----------
let selected = 0;
const hotbarEl = document.getElementById('hotbar');
const atlasURL = atlasCanvas.toDataURL();
HOTBAR.forEach((id, i) => {
  const s = document.createElement('div');
  s.className = 'slot';
  const tile = TILE_INDEX[BLOCKS[id].tiles[2]];
  s.style.backgroundImage = `url(${atlasURL})`;
  s.style.backgroundSize = `${TILE_COUNT * 42}px 42px`;
  s.style.backgroundPosition = `${-tile * 42}px 0`;
  s.title = BLOCKS[id].name;
  s.innerHTML = `<span>${i + 1}</span>`;
  s.onclick = () => select(i);
  hotbarEl.appendChild(s);
});
function select(i) {
  selected = (i + HOTBAR.length) % HOTBAR.length;
  [...hotbarEl.children].forEach((c, j) => c.classList.toggle('active', j === selected));
}
select(0);

// ---------- Entrada ----------
const overlay = document.getElementById('overlay');
const statusEl = document.getElementById('status');
let ready = false;
overlay.addEventListener('click', () => { if (ready) canvas.requestPointerLock(); });
document.addEventListener('pointerlockchange', () => {
  const locked = document.pointerLockElement === canvas;
  overlay.classList.toggle('hidden', locked);
  if (!locked) player.keys.clear();
});
document.addEventListener('mousemove', (e) => {
  if (document.pointerLockElement !== canvas) return;
  player.yaw -= e.movementX * 0.0022;
  player.pitch = Math.max(-Math.PI / 2 + 0.01, Math.min(Math.PI / 2 - 0.01, player.pitch - e.movementY * 0.0022));
});
document.addEventListener('keydown', (e) => {
  if (e.code === 'KeyF' && !e.repeat) { player.flying = !player.flying; player.vel.y = 0; }
  if (e.code.startsWith('Digit')) { const n = +e.code.slice(5) - 1; if (n >= 0 && n < HOTBAR.length) select(n); }
  player.keys.add(e.code);
});
document.addEventListener('keyup', (e) => player.keys.delete(e.code));
document.addEventListener('wheel', (e) => { if (document.pointerLockElement === canvas) select(selected + Math.sign(e.deltaY)); });
canvas.addEventListener('contextmenu', (e) => e.preventDefault());
canvas.addEventListener('mousedown', (e) => {
  if (document.pointerLockElement !== canvas) return;
  const hit = world.raycast(player.eye, player.lookDir(), 6);
  if (!hit) return;
  if (e.button === 0) {
    world.setBlock(hit.x, hit.y, hit.z, AIR);
  } else if (e.button === 2) {
    const px = hit.x + hit.normal[0], py = hit.y + hit.normal[1], pz = hit.z + hit.normal[2];
    if (player.intersectsBlock(px, py, pz)) return;
    world.setBlock(px, py, pz, HOTBAR[selected]);
  }
});

function resize() {
  renderer.setSize(innerWidth, innerHeight, false);
  camera.aspect = innerWidth / innerHeight;
  camera.updateProjectionMatrix();
}
addEventListener('resize', resize);
resize();

// ---------- Arranque: cargar zona inicial y colocar al jugador ----------
(function boot() {
  const pending = world.update(0, 0, 3, 8);
  if (pending > 0 || world.meshes.size < 49) { requestAnimationFrame(boot); return; }
  player.pos.set(0.5, terrainHeight(0, 0, world.seed) + 2, 0.5);
  ready = true;
  statusEl.textContent = '¡Mundo listo!';
  last = performance.now();
  requestAnimationFrame(loop);
})();

// ---------- Bucle ----------
const info = document.getElementById('info');
let last = 0, fpsAcc = 0, fpsN = 0, fps = 0;
function loop(now) {
  const dt = (now - last) / 1000;
  last = now;
  fpsAcc += dt; fpsN++;
  if (fpsAcc >= 0.5) { fps = Math.round(fpsN / fpsAcc); fpsAcc = 0; fpsN = 0; }

  player.update(dt);
  world.update(player.pos.x, player.pos.z, RADIUS, 2);

  const hit = world.raycast(player.eye, player.lookDir(), 6);
  highlight.visible = !!hit;
  if (hit) highlight.position.set(hit.x + 0.5, hit.y + 0.5, hit.z + 0.5);

  info.textContent =
    `${fps} FPS\nXYZ ${player.pos.x.toFixed(1)} ${player.pos.y.toFixed(1)} ${player.pos.z.toFixed(1)}\n` +
    `Bloque: ${BLOCKS[HOTBAR[selected]].name}${player.flying ? '  [VUELO]' : ''}`;

  renderer.render(scene, camera);
  requestAnimationFrame(loop);
}

// Para pruebas desde la consola / tests
window.__game = { world, player, camera, renderer, scene };
