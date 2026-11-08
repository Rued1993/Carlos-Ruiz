// Multijugador sin servidor propio: el anfitrión crea una sala con un código y los demás entran con él (WebRTC vía PeerJS).
// El navegador del anfitrión hace de servidor: guarda los bloques editados, reparte posiciones, chat y hora del día.
import Peer from 'peerjs';
import mqtt from 'mqtt';

const PREFIX = 'vxl-', CODE_CHARS = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
const newCode = () => Array.from({ length: 5 }, () => CODE_CHARS[Math.floor(Math.random() * CODE_CHARS.length)]).join('');
function peerOpts() { // por defecto, el servidor de señalización público de PeerJS; ?peerhost=… para uno propio o pruebas
  const q = new URLSearchParams(location.search), dbg = q.get('peerdebug') ? 3 : 0;
  // STUN para redes normales y TURN público de respaldo (redes móviles / NAT estricto)
  const config = { iceServers: [{ urls: 'stun:stun.l.google.com:19302' }, { urls: 'stun:global.stun.twilio.com:3478' }, { urls: 'stun:stun.cloudflare.com:3478' },
    { urls: ['turn:openrelay.metered.ca:80', 'turn:openrelay.metered.ca:443', 'turn:openrelay.metered.ca:443?transport=tcp'], username: 'openrelayproject', credential: 'openrelayproject' }], iceCandidatePoolSize: 4 };
  if (q.get('peerhost')) return { debug: dbg, config, host: q.get('peerhost'), port: +q.get('peerport') || 9000, path: q.get('peerpath') || '/', secure: q.get('peersecure') === '1' };
  return { debug: dbg, config };
}
const cleanName = (n) => String(n || 'Jugador').replace(/[<>&"]/g, '').trim().slice(0, 16) || 'Jugador';
const num = (v, lo, hi) => typeof v === 'number' && Number.isFinite(v) && v >= lo && v <= hi;

// Interfaz común con src/net.js: on(tipo, fn), send(obj), close(), id. Guarda los mensajes que llegan antes de que el juego los escuche.
class Adapter {
  constructor() { this.handlers = {}; this.id = 0; this.queue = []; }
  on(t, fn) { this.handlers[t] = fn; const rest = []; for (const m of this.queue) { if (m.t === t) fn(m); else rest.push(m); } this.queue = rest; }
  dispatch(m) { const h = this.handlers[m.t]; if (h) h(m); else if (this.queue.length < 3000) this.queue.push(m); }
}

// ---- Respaldo por relé MQTT sobre WebSocket (funciona en cualquier red, sin P2P ni TURN) ----
const BROKERS = ['wss://broker.emqx.io:8084/mqtt', 'wss://broker.hivemq.com:8884/mqtt', 'wss://test.mosquitto.org:8081'];
function brokerList() { const q = new URLSearchParams(location.search).get('mqtt'); return q ? [q] : BROKERS; }
function mqttOpen(onStatus, will) { // prueba los brokers públicos uno tras otro
  return new Promise((resolve, reject) => {
    const list = brokerList(); let i = 0;
    const next = () => {
      if (i >= list.length) return reject(new Error('No se pudo contactar con ningún relé público'));
      const url = list[i++]; onStatus('Conectando con el relé de respaldo (' + i + '/' + list.length + ')…');
      const c = mqtt.connect(url, { clientId: 'vxl' + Math.random().toString(36).slice(2, 10), connectTimeout: 6000, reconnectPeriod: 0, clean: true, ...(will ? { will } : {}) });
      let ok = false; const t = setTimeout(() => { if (!ok) { try { c.end(true); } catch {} next(); } }, 7000);
      c.on('connect', () => { ok = true; clearTimeout(t); c.removeAllListeners('error'); resolve(c); });
      c.on('error', () => { if (!ok) { clearTimeout(t); try { c.end(true); } catch {} next(); } });
    };
    next();
  });
}
const T = (code, tail) => 'vxlv1/' + code + '/' + tail;

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
    this.last = new Map(); this.vconns = new Map();
    this.iv1 = setInterval(() => { this.tickPlayers(); const now = Date.now(); for (const [id, t] of this.last) if (now - t > 15000 && id !== 0) this.drop(id); }, 100);
    this.iv2 = setInterval(() => this.broadcast({ t: 'time', time: this.getTime() }, -1), 5000);
  }
  deliver(id, m) { if (id === 0) this.local.dispatch(m); else { const p = this.players.get(id); if (p && p.conn && p.conn.open) { try { p.conn.send(m); } catch {} } } }
  // Mensaje llegado por el relé MQTT: cid identifica al invitado
  recvVirtual(cid, m, sender) { let v = this.vconns.get(cid); if (!v) { v = { id: null, conn: { open: true, send: (o) => sender(cid, o), close() {} } }; this.vconns.set(cid, v); } v.id = this.recv(v.conn, m, v.id); }
  broadcast(m, except) { for (const id of this.players.keys()) if (id !== except) this.deliver(id, m); }
  drop(id) { const p = this.players.get(id); if (!p) return; this.players.delete(id); this.last.delete(id); for (const [cid, v] of this.vconns) if (v.id === id) this.vconns.delete(cid); this.broadcast({ t: 'leave', id }); this.broadcast({ t: 'sys', text: p.name + ' ha salido' }); }
  recv(conn, m, id) {
    if (!m || typeof m.t !== 'string') return id;
    if (m.t === 'join' && id === null) {
      if (this.players.size >= 8) { conn.send({ t: 'full' }); setTimeout(() => conn.close(), 300); return null; }
      id = this.next++; const name = cleanName(m.name), color = Math.floor(Math.random() * 360);
      this.players.set(id, { conn, name, p: [0, 80, 0], yaw: 0, pitch: 0, dim: 'overworld', held: 0, color });
      this.last.set(id, Date.now());
      const edits = Object.entries(this.edits).map(([k, v]) => { const [d, x, y, z] = k.split('|'); return [d, +x, +y, +z, v]; });
      conn.send({ t: 'welcome', id, seed: this.seed, mode: this.mode, time: this.getTime(), edits: edits.slice(0, 200), color, players: [...this.players].filter(([i]) => i !== id).map(([i, p]) => ({ id: i, name: p.name, color: p.color })) });
      for (let i = 200; i < edits.length; i += 300) conn.send({ t: 'editb', list: edits.slice(i, i + 300) }); // el resto de ediciones, por lotes
      this.broadcast({ t: 'join', id, name, color }, id); this.broadcast({ t: 'sys', text: name + ' se ha unido' });
      return id;
    }
    if (id === null) return id;
    this.last.set(id, Date.now());
    if (m.t === 'bye') { this.drop(id); return null; }
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
  close() { clearInterval(this.iv1); clearInterval(this.iv2); try { this.peer.destroy(); } catch {} if (this.mq) { try { this.mq.publish(T(this.code, 'host'), '', { retain: true }); this.mq.end(true); } catch {} } }
}

// Anfitrión: crea la sala. Devuelve { net, welcome, code }
export function createRoom(hostName, seed, mode, onStatus = () => {}) {
  return new Promise((resolve, reject) => {
    let tries = 0;
    const attempt = () => {
      onStatus('Conectando con el servicio de salas…');
      const code = newCode(), peer = new Peer(PREFIX + code, peerOpts()); let done = false;
      const to = setTimeout(() => { if (!done) { done = true; try { peer.destroy(); } catch {} reject(new Error('No se pudo contactar con el servicio de salas (revisa tu conexión a internet)')); } }, 15000);
      peer.on('open', () => {
        if (done) return; done = true; clearTimeout(to);
        peer.on('disconnected', () => { try { peer.reconnect(); } catch {} }); // si se cae la señalización, la sala vuelve a ser visible
        setInterval(() => { if (peer.disconnected && !peer.destroyed) { try { peer.reconnect(); } catch {} } }, 8000);
        document.addEventListener('visibilitychange', () => { if (!document.hidden && peer.disconnected && !peer.destroyed) { try { peer.reconnect(); } catch {} } });
        const net = new Adapter(); const hub = new Hub(peer, hostName, seed, mode, net); hub.code = code;
        mqttOpen(() => {}, { topic: T(code, 'host'), payload: '', retain: true, qos: 0 }).then((mq) => { // relé de respaldo: los invitados que no consigan conexión directa entran por aquí
          hub.mq = mq; const send = (cid, o) => { try { mq.publish(T(code, 'g/' + cid), JSON.stringify(o)); } catch {} };
          mq.subscribe(T(code, 'h')); mq.publish(T(code, 'host'), '1', { retain: true });
          mq.on('message', (topic, buf) => { if (topic !== T(code, 'h')) return; try { const { c, m } = JSON.parse(buf.toString()); if (c && m) hub.recvVirtual(c, m, send); } catch {} });
        }).catch(() => {});
        net.send = (m) => hub.handle(0, m); net.close = () => hub.close(); net.isHost = true; net.code = code; net.hub = hub;
        resolve({ net, code, welcome: { t: 'welcome', id: 0, seed, mode, time: 0.08, edits: [], players: [], color: hub.players.get(0).color } });
      });
      peer.on('error', (e) => { if (done) return; clearTimeout(to); if (e.type === 'unavailable-id' && ++tries < 5) { try { peer.destroy(); } catch {} attempt(); } else { done = true; reject(new Error('Error al crear la sala: ' + (e.type || e.message))); } });
    };
    attempt();
  });
}
// Invitado: entra con el código. Devuelve { net, welcome }
function joinWebRtc(code, name, onStatus, ms) {
  return new Promise((resolve, reject) => {
    onStatus('Conectando con el servicio de salas…');
    const peer = new Peer(peerOpts()), net = new Adapter(); let done = false, stage = 0;
    const fail = (m) => { if (!done) { done = true; try { peer.destroy(); } catch {} reject(new Error(m)); } };
    const to = setTimeout(() => fail(stage === 0 ? 'No se pudo contactar con el servicio de salas (revisa tu internet)' : stage === 1 ? 'La sala no responde: comprueba el código y que el anfitrión tenga el juego abierto y en primer plano' : 'No se pudo abrir la conexión directa con el anfitrión (red muy restrictiva). Prueben con la misma Wi-Fi o con datos distintos'), 30000);
    peer.on('error', (e) => fail(e.type === 'peer-unavailable' ? 'No hay conexión directa con esa sala' : 'Error de conexión: ' + (e.type || e.message)));
    peer.on('open', () => {
      stage = 1; onStatus('Buscando la sala ' + code + '…');
      const conn = peer.connect(PREFIX + code, { reliable: true });
      conn.on('open', () => { stage = 2; onStatus('Conectado: entrando a la sala…'); conn.send({ t: 'join', name }); });
      conn.on('data', (m) => {
        if (m && m.t === 'welcome' && !done) { done = true; clearTimeout(to); net.id = m.id; net.send = (o) => { if (conn.open) conn.send(o); }; net.close = () => { try { peer.destroy(); } catch {} }; net.code = code; resolve({ net, welcome: m }); return; }
        if (m && m.t === 'full') { fail('La sala está llena'); return; }
        net.dispatch(m);
      });
      conn.on('close', () => { if (done && net.handlers.close) net.handlers.close(); else fail('Conexión cerrada'); });
    });
  });
}

function joinMqtt(code, name, onStatus) {
  return mqttOpen(onStatus).then((mq) => new Promise((resolve, reject) => {
    const cid = 'g' + Math.random().toString(36).slice(2, 10), net = new Adapter(); let done = false, present = false;
    const fail = (m) => { if (!done) { done = true; try { mq.end(true); } catch {} reject(new Error(m)); } };
    const to = setTimeout(() => fail(present ? 'El anfitrión no respondió: debe tener el juego abierto y en primer plano' : 'No existe una sala con ese código (o el anfitrión ya salió)'), 14000);
    mq.subscribe([T(code, 'host'), T(code, 'g/' + cid)]);
    mq.on('message', (topic, buf) => {
      const s = buf.toString();
      if (topic === T(code, 'host')) { if (s === '1' && !present) { present = true; onStatus('Sala encontrada: entrando…'); mq.publish(T(code, 'h'), JSON.stringify({ c: cid, m: { t: 'join', name } })); } return; }
      let m; try { m = JSON.parse(s); } catch { return; }
      if (m.t === 'welcome' && !done) {
        done = true; clearTimeout(to); net.id = m.id; net.code = code;
        net.send = (o) => { try { mq.publish(T(code, 'h'), JSON.stringify({ c: cid, m: o })); } catch {} };
        net.close = () => { try { net.send({ t: 'bye' }); mq.end(true); } catch {} };
        resolve({ net, welcome: m }); return;
      }
      if (m.t === 'full') { fail('La sala está llena'); return; }
      net.dispatch(m);
    });
    mq.on('close', () => { if (done && net.handlers.close) net.handlers.close(); });
  }));
}
// Invitado: entra con el código. Primero intenta la conexión directa; si no se consigue en pocos segundos, usa el relé.
export async function joinRoom(code, name, onStatus = () => {}) {
  code = String(code || '').trim().toUpperCase().replace(/[^A-Z0-9]/g, '');
  if (code.length !== 5) throw new Error('El código de sala tiene 5 caracteres');
  let first = null;
  if (new URLSearchParams(location.search).get('nowebrtc') !== '1') { try { return await joinWebRtc(code, name, onStatus, 9000); } catch (e) { first = e; } }
  onStatus('Probando la conexión de respaldo…');
  try { return await joinMqtt(code, name, onStatus); } catch (e2) { throw new Error(e2.message + (first ? ' (directa: ' + first.message + ')' : '')); }
}
