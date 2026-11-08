// Relé de salas para VoxelLands (WebSocket). Alternativa fiable cuando la conexión directa y los relés públicos no funcionan.
// Uso:  node server/relay.js   (PORT=8090). Despliega en cualquier hosting Node con WebSocket (Render, Fly, Railway, Glitch…)
// y pon su dirección wss://… en el campo «Relé propio» del menú multijugador.
import { WebSocketServer } from 'ws';
const PORT = +process.env.PORT || 8090;
const rooms = new Map(); // código -> { host, guests: Map(cid -> ws) }
const wss = new WebSocketServer({ port: PORT, maxPayload: 512 * 1024 });
let n = 0;
wss.on('connection', (ws, req) => {
  const u = new URL(req.url, 'http://x'), code = (u.searchParams.get('room') || '').toUpperCase().slice(0, 8), role = u.searchParams.get('role');
  if (!code || !['host', 'guest'].includes(role)) return ws.close(4400);
  let room = rooms.get(code);
  if (role === 'host') {
    if (room && room.host) { try { room.host.close(4409); } catch {} }
    room = room || { host: null, guests: new Map() }; room.host = ws; rooms.set(code, room);
    ws.on('message', (raw) => { let f; try { f = JSON.parse(raw); } catch { return; }
      if (f.c === '*') { for (const g of room.guests.values()) if (g.readyState === 1) g.send(JSON.stringify({ m: f.m })); }
      else { const g = room.guests.get(f.c); if (g && g.readyState === 1) g.send(JSON.stringify({ m: f.m })); } });
    ws.on('close', () => { if (room.host === ws) { for (const g of room.guests.values()) try { g.close(4410); } catch {} rooms.delete(code); } });
  } else {
    if (!room || !room.host) return ws.close(4404);
    const cid = 'g' + (++n).toString(36) + Math.random().toString(36).slice(2, 6); room.guests.set(cid, ws);
    ws.on('message', (raw) => { if (room.host && room.host.readyState === 1) { try { room.host.send(JSON.stringify({ c: cid, m: JSON.parse(raw).m })); } catch {} } });
    ws.on('close', () => { room.guests.delete(cid); if (room.host && room.host.readyState === 1) room.host.send(JSON.stringify({ c: cid, bye: true })); });
  }
  ws.on('error', () => {});
});
console.log('Relé VoxelLands en ws://localhost:' + PORT);
