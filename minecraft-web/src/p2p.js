// Multijugador sin servidor propio: el anfitrión crea una sala con un código y los demás entran con él (WebRTC vía PeerJS).
// El navegador del anfitrión hace de servidor: guarda los bloques editados, reparte posiciones, chat y hora del día.
import Peer from 'peerjs';

const PREFIX = 'vxl-', CODE_CHARS = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
const newCode = () => Array.from({ length: 5 }, () => CODE_CHARS[Math.floor(Math.random() * CODE_CHARS.length)]).join('');
function peerOpts() { // por defecto, el servidor de señalización público de PeerJS; ?peerhost=… para uno propio o pruebas
  const q = new URLSearchParams(location.search), dbg = q.get('peerdebug') ? 3 : 0;
  if (q.get('peerhost')) return { debug: dbg, host: q.get('peerhost'), port: +q.get('peerport') || 9000, path: q.get('peerpath') || '/', secure: q.get('peersecure') === '1' };
  return { debug: dbg };
}
const cleanName = (n) => String(n || 'Jugador').replace(/[<>&"]/g, '').trim().slice(0, 16) || 'Jugador';
const num = (v, lo, hi) => typeof v === 'number' && Number.isFinite(v) && v >= lo && v <= hi;

// Interfaz común con src/net.js: on(tipo, fn), send(obj), close(), id
class Adapter { constructor() { this.handlers = {}; this.id = 0; } on(t, fn) { this.handlers[t] = fn; } dispatch(m) { const h = this.handlers[m.t]; if (h) h(m); } }

class Hub {
  constructor(peer, hostName, seed, mode, local) {
    this.peer = peer; this.local = local; this.seed = seed; this.mode = mode; this.edits = {}; this.next = 1; this.getTime = () => 0.08;
    this.players = new Map([[0, { conn: null, name: cleanName(hostName), p: [0, 80, 0], yaw: 0, pitch: 0, dim: 'overworld', held: 0, color: Math.floor(Math.random() * 360) }]]);
    peer.on('connection', (conn) => {
      let id = null;
      conn.on('data', (m) => { id = this.recv(conn, m, id); });
      conn.on('close', () => { if (id !== null) this.drop(id); });
      conn.on('error', () => { if (id !== null) this.drop(id); });
    });
    this.iv1 = setInterval(() => this.tickPlayers(), 100);
    this.iv2 = setInterval(() => this.broadcast({ t: 'time', time: this.getTime() }, -1), 5000);
  }
  deliver(id, m) { if (id === 0) this.local.dispatch(m); else { const p = this.players.get(id); if (p && p.conn && p.conn.open) p.conn.send(m); } }
  broadcast(m, except) { for (const id of this.players.keys()) if (id !== except) this.deliver(id, m); }
  drop(id) { const p = this.players.get(id); if (!p) return; this.players.delete(id); this.broadcast({ t: 'leave', id }); this.broadcast({ t: 'sys', text: p.name + ' ha salido' }); }
  recv(conn, m, id) {
    if (!m || typeof m.t !== 'string') return id;
    if (m.t === 'join' && id === null) {
      if (this.players.size >= 8) { conn.send({ t: 'full' }); setTimeout(() => conn.close(), 300); return null; }
      id = this.next++; const name = cleanName(m.name), color = Math.floor(Math.random() * 360);
      this.players.set(id, { conn, name, p: [0, 80, 0], yaw: 0, pitch: 0, dim: 'overworld', held: 0, color });
      const edits = Object.entries(this.edits).map(([k, v]) => { const [d, x, y, z] = k.split('|'); return [d, +x, +y, +z, v]; });
      conn.send({ t: 'welcome', id, seed: this.seed, mode: this.mode, time: this.getTime(), edits, color, players: [...this.players].filter(([i]) => i !== id).map(([i, p]) => ({ id: i, name: p.name, color: p.color })) });
      this.broadcast({ t: 'join', id, name, color }, id); this.broadcast({ t: 'sys', text: name + ' se ha unido' });
      return id;
    }
    if (id === null) return id;
    this.handle(id, m); return id;
  }
  handle(id, m) { // mensajes de un jugador (id 0 = el anfitrión)
    const me = this.players.get(id); if (!me) return;
    if (m.t === 'pos') {
      if (Array.isArray(m.p) && m.p.length === 3 && m.p.every((v) => num(v, -3e7, 3e7))) me.p = m.p;
      if (num(m.yaw, -100, 100)) me.yaw = m.yaw; if (num(m.pitch, -4, 4)) me.pitch = m.pitch;
      if (typeof m.dim === 'string' && m.dim.length < 12) me.dim = m.dim; if (num(m.held, 0, 999)) me.held = m.held;
    } else if (m.t === 'edit') {
      if (!(typeof m.dim === 'string' && m.dim.length < 12 && Number.isInteger(m.x) && Number.isInteger(m.y) && Number.isInteger(m.z) && num(m.id, 0, 255) && m.y >= 0 && m.y < 128)) return;
      this.edits[`${m.dim}|${m.x}|${m.y}|${m.z}`] = m.id; this.broadcast({ t: 'edit', dim: m.dim, x: m.x, y: m.y, z: m.z, id: m.id }, id);
    } else if (m.t === 'chat') {
      const text = String(m.text || '').replace(/[<>]/g, '').trim().slice(0, 200); if (text) this.broadcast({ t: 'chat', name: me.name, text }, -1);
    }
  }
  tickPlayers() {
    if (this.players.size < 2) return;
    const list = [...this.players].map(([id, p]) => ({ id, p: p.p.map((v) => Math.round(v * 100) / 100), yaw: Math.round(p.yaw * 100) / 100, pitch: Math.round(p.pitch * 100) / 100, dim: p.dim, held: p.held }));
    for (const id of this.players.keys()) this.deliver(id, { t: 'players', list: list.filter((q) => q.id !== id) });
  }
  close() { clearInterval(this.iv1); clearInterval(this.iv2); try { this.peer.destroy(); } catch {} }
}

// Anfitrión: crea la sala. Devuelve { net, welcome, code }
export function createRoom(hostName, seed, mode) {
  return new Promise((resolve, reject) => {
    let tries = 0;
    const attempt = () => {
      const code = newCode(), peer = new Peer(PREFIX + code, peerOpts()); let done = false;
      const to = setTimeout(() => { if (!done) { done = true; try { peer.destroy(); } catch {} reject(new Error('No se pudo contactar con el servicio de salas')); } }, 10000);
      peer.on('open', () => {
        if (done) return; done = true; clearTimeout(to);
        const net = new Adapter(); const hub = new Hub(peer, hostName, seed, mode, net);
        net.send = (m) => hub.handle(0, m); net.close = () => hub.close(); net.isHost = true; net.code = code; net.hub = hub;
        resolve({ net, code, welcome: { t: 'welcome', id: 0, seed, mode, time: 0.08, edits: [], players: [], color: hub.players.get(0).color } });
      });
      peer.on('error', (e) => { if (done) return; clearTimeout(to); if (e.type === 'unavailable-id' && ++tries < 5) { try { peer.destroy(); } catch {} attempt(); } else { done = true; reject(new Error('Error al crear la sala: ' + (e.type || e.message))); } });
    };
    attempt();
  });
}
// Invitado: entra con el código. Devuelve { net, welcome }
export function joinRoom(code, name) {
  return new Promise((resolve, reject) => {
    code = String(code || '').trim().toUpperCase().replace(/[^A-Z0-9]/g, '');
    if (code.length !== 5) return reject(new Error('El código de sala tiene 5 caracteres'));
    const peer = new Peer(peerOpts()), net = new Adapter(); let done = false;
    const fail = (m) => { if (!done) { done = true; try { peer.destroy(); } catch {} reject(new Error(m)); } };
    const to = setTimeout(() => fail('No se encontró la sala (¿código correcto y anfitrión conectado?)'), 12000);
    peer.on('error', (e) => fail(e.type === 'peer-unavailable' ? 'No existe una sala con ese código' : 'Error de conexión: ' + (e.type || e.message)));
    peer.on('open', () => {
      const conn = peer.connect(PREFIX + code, { reliable: true });
      conn.on('open', () => conn.send({ t: 'join', name }));
      conn.on('data', (m) => {
        if (m && m.t === 'welcome' && !done) { done = true; clearTimeout(to); net.id = m.id; net.send = (o) => { if (conn.open) conn.send(o); }; net.close = () => { try { peer.destroy(); } catch {} }; net.code = code; resolve({ net, welcome: m }); return; }
        if (m && m.t === 'full') { fail('La sala está llena'); return; }
        net.dispatch(m);
      });
      conn.on('close', () => { if (done && net.handlers.close) net.handlers.close(); else fail('Conexión cerrada'); });
    });
  });
}
