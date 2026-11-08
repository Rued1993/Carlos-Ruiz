// Relé de salas para VoxelLands en Deno Deploy (gratis): https://deno.com/deploy → New Project → conecta tu repositorio → entrypoint: relay/deno.ts
// Tu dirección será wss://TU-PROYECTO.deno.dev (pégala en «Relé propio» del menú multijugador).
const rooms = new Map<string, { host: WebSocket | null; guests: Map<string, WebSocket> }>();
let n = 0;
Deno.serve((req) => {
  if (req.headers.get("upgrade") !== "websocket") return new Response("VoxelLands relay OK");
  const u = new URL(req.url), code = (u.searchParams.get("room") || "").toUpperCase().slice(0, 8), role = u.searchParams.get("role");
  if (!code || !["host", "guest"].includes(role || "")) return new Response("bad request", { status: 400 });
  const { socket: ws, response } = Deno.upgradeWebSocket(req);
  let room = rooms.get(code);
  if (role === "host") {
    ws.onopen = () => { room = room ?? { host: null, guests: new Map() }; try { room.host?.close(4409); } catch { /* */ } room.host = ws; rooms.set(code, room); };
    ws.onmessage = (e) => { try { const f = JSON.parse(e.data); const r = rooms.get(code)!; const out = JSON.stringify({ m: f.m });
      if (f.c === "*") r.guests.forEach((g) => g.readyState === 1 && g.send(out)); else { const g = r.guests.get(f.c); if (g && g.readyState === 1) g.send(out); } } catch { /* */ } };
    ws.onclose = () => { const r = rooms.get(code); if (r && r.host === ws) { r.guests.forEach((g) => { try { g.close(4410); } catch { /* */ } }); rooms.delete(code); } };
  } else {
    const cid = "g" + (++n).toString(36) + Math.random().toString(36).slice(2, 6);
    ws.onopen = () => { const r = rooms.get(code); if (!r || !r.host) return ws.close(4404); r.guests.set(cid, ws); };
    ws.onmessage = (e) => { const r = rooms.get(code); if (r?.host && r.host.readyState === 1) { try { r.host.send(JSON.stringify({ c: cid, m: JSON.parse(e.data).m })); } catch { /* */ } } };
    ws.onclose = () => { const r = rooms.get(code); if (r) { r.guests.delete(cid); if (r.host && r.host.readyState === 1) r.host.send(JSON.stringify({ c: cid, bye: true })); } };
  }
  return response;
});
