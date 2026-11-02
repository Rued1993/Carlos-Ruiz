// Cliente multijugador: WebSocket hacia server/server.js
export class Net {
  constructor() { this.ws = null; this.id = 0; this.handlers = {}; this.open = false; }
  on(t, fn) { this.handlers[t] = fn; }
  connect(url, name) {
    return new Promise((resolve, reject) => {
      let done = false;
      const fail = (m) => { if (!done) { done = true; reject(new Error(m)); } };
      let ws;
      try { ws = new WebSocket(url); } catch { return fail('Dirección no válida'); }
      this.ws = ws;
      const to = setTimeout(() => { fail('El servidor no responde'); try { ws.close(); } catch {} }, 8000);
      ws.onopen = () => { this.open = true; ws.send(JSON.stringify({ t: 'join', name })); };
      ws.onerror = () => fail('No se pudo conectar (¿está el servidor encendido?)');
      ws.onclose = () => { this.open = false; fail('Conexión cerrada'); if (done && this.handlers.close) this.handlers.close(); };
      ws.onmessage = (e) => {
        let m; try { m = JSON.parse(e.data); } catch { return; }
        if (m.t === 'welcome' && !done) { done = true; clearTimeout(to); this.id = m.id; resolve(m); return; }
        if (m.t === 'full') { fail('Servidor lleno'); return; }
        const h = this.handlers[m.t]; if (h) h(m);
      };
    });
  }
  send(o) { if (this.ws && this.ws.readyState === 1) this.ws.send(JSON.stringify(o)); }
  close() { try { this.ws && this.ws.close(); } catch {} }
}
