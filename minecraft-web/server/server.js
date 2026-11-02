// Servidor multijugador de Minecraft Web (WebSocket).
// Uso:  node server/server.js   (variables: PORT=8080 SEED=1234 MODE=survival|creative SAVE=server/world.json)
// El servidor guarda la semilla y TODOS los bloques editados; el terreno lo genera cada cliente a partir de la semilla.
import { WebSocketServer } from 'ws';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const PORT = +process.env.PORT || 8080;
const SAVE = process.env.SAVE || path.join(here, 'world.json');
const MAX_PLAYERS = +process.env.MAX_PLAYERS || 16;
let world = { seed: +process.env.SEED || 1 + Math.floor(Math.random() * 900000), mode: process.env.MODE === 'creative' ? 'creative' : 'survival', time: 0.08, edits: {} };
try { const j = JSON.parse(fs.readFileSync(SAVE, 'utf8')); if (j && j.seed) world = { ...world, ...j, edits: j.edits || {} }; if (process.env.SEED) world.seed = +process.env.SEED; } catch {}
// edits: "dim|x|y|z" -> id
let dirty = false;
const save = () => { if (!dirty) return; dirty = false; try { fs.writeFileSync(SAVE, JSON.stringify(world)); } catch (e) { console.error('No se pudo guardar:', e.message); } };
setInterval(save, 15000);
process.on('SIGINT', () => { save(); process.exit(0); });
process.on('SIGTERM', () => { save(); process.exit(0); });

const wss = new WebSocketServer({ port: PORT, maxPayload: 64 * 1024 });
const players = new Map(); // id -> {ws, name, p, yaw, pitch, dim, held, color}
let nextId = 1;
const send = (ws, o) => { if (ws.readyState === 1) ws.send(JSON.stringify(o)); };
const broadcast = (o, except) => { const s = JSON.stringify(o); for (const [id, p] of players) if (id !== except && p.ws.readyState === 1) p.ws.send(s); };
const cleanName = (n) => String(n || 'Jugador').replace(/[<>&"]/g, '').trim().slice(0, 16) || 'Jugador';
const num = (v, lo, hi) => typeof v === 'number' && Number.isFinite(v) && v >= lo && v <= hi;

wss.on('connection', (ws) => {
  let id = null;
  ws.on('message', (raw) => {
    let m; try { m = JSON.parse(raw); } catch { return; }
    if (!m || typeof m.t !== 'string') return;
    if (m.t === 'join' && id === null) {
      if (players.size >= MAX_PLAYERS) { send(ws, { t: 'full' }); ws.close(); return; }
      id = nextId++;
      const name = cleanName(m.name);
      players.set(id, { ws, name, p: [0, 80, 0], yaw: 0, pitch: 0, dim: 'overworld', held: 0, color: Math.floor(Math.random() * 360), last: 0 });
      const edits = []; for (const [k, v] of Object.entries(world.edits)) { const [d, x, y, z] = k.split('|'); edits.push([d, +x, +y, +z, v]); }
      send(ws, { t: 'welcome', id, seed: world.seed, mode: world.mode, time: world.time, edits, players: [...players].filter(([i]) => i !== id).map(([i, p]) => ({ id: i, name: p.name, color: p.color })), color: players.get(id).color });
      broadcast({ t: 'join', id, name, color: players.get(id).color }, id);
      broadcast({ t: 'sys', text: name + ' se ha unido' });
      console.log(`+ ${name} (${players.size} jugadores)`);
      return;
    }
    const me = players.get(id); if (!me) return;
    if (m.t === 'pos') {
      if (Array.isArray(m.p) && m.p.length === 3 && m.p.every((v) => num(v, -3e7, 3e7))) me.p = m.p;
      if (num(m.yaw, -100, 100)) me.yaw = m.yaw; if (num(m.pitch, -4, 4)) me.pitch = m.pitch;
      if (typeof m.dim === 'string' && m.dim.length < 12) me.dim = m.dim; if (num(m.held, 0, 999)) me.held = m.held;
    } else if (m.t === 'edit') {
      if (!(typeof m.dim === 'string' && m.dim.length < 12 && Number.isInteger(m.x) && Number.isInteger(m.z) && Number.isInteger(m.y) && num(m.id, 0, 255) && m.y >= 0 && m.y < 128 && Math.abs(m.x) < 3e7 && Math.abs(m.z) < 3e7)) return;
      const now = Date.now(); if (now - me.last < 8 && (me.burst = (me.burst || 0) + 1) > 200) return; if (now - me.last > 1000) me.burst = 0; me.last = now;
      world.edits[`${m.dim}|${m.x}|${m.y}|${m.z}`] = m.id; dirty = true;
      broadcast({ t: 'edit', dim: m.dim, x: m.x, y: m.y, z: m.z, id: m.id }, id);
    } else if (m.t === 'chat') {
      const text = String(m.text || '').replace(/[<>]/g, '').trim().slice(0, 200); if (!text) return;
      broadcast({ t: 'chat', name: me.name, text });
    } else if (m.t === 'time' && num(m.time, 0, 1)) { world.time = m.time; }
  });
  ws.on('close', () => {
    const me = players.get(id); if (!me) return;
    players.delete(id); broadcast({ t: 'leave', id }); broadcast({ t: 'sys', text: me.name + ' ha salido' }); console.log(`- ${me.name} (${players.size} jugadores)`);
  });
  ws.on('error', () => {});
});

// Estado de los jugadores a 10 Hz (cada cliente recibe a los demás)
setInterval(() => {
  if (players.size < 2) return;
  const list = [...players].map(([id, p]) => ({ id, p: p.p.map((v) => Math.round(v * 100) / 100), yaw: Math.round(p.yaw * 100) / 100, pitch: Math.round(p.pitch * 100) / 100, dim: p.dim, held: p.held }));
  for (const [id, p] of players) send(p.ws, { t: 'players', list: list.filter((q) => q.id !== id) });
}, 100);
// Hora del día compartida
setInterval(() => { world.time = (world.time + 5 / 600) % 1; broadcast({ t: 'time', time: world.time }); }, 5000);

console.log(`Servidor Minecraft Web en ws://localhost:${PORT} · semilla ${world.seed} · modo ${world.mode} · ${Object.keys(world.edits).length} bloques editados`);
