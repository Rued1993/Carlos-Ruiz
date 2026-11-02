// Mando (PS4 DualShock 4 / DualSense y cualquier mando "standard") con la API Gamepad del navegador.
export const BTN_NAMES = ['✕ Cruz', '◯ Círculo', '▢ Cuadrado', '△ Triángulo', 'L1', 'R1', 'L2', 'R2', 'Share', 'Options', 'L3', 'R3', 'Cruceta ↑', 'Cruceta ↓', 'Cruceta ←', 'Cruceta →', 'Botón PS', 'Panel táctil'];

// Acciones asignables y su botón por defecto (índices del mapeo estándar)
export const PAD_ACTIONS = [
  { id: 'jump', label: 'Saltar / nadar / subir', def: 0 },
  { id: 'drop', label: 'Tirar objeto · Atrás en menús', def: 1 },
  { id: 'fall', label: 'Descender (vuelo) · Clic derecho en menús', def: 2 },
  { id: 'inventory', label: 'Inventario', def: 3 },
  { id: 'prev', label: 'Ranura anterior', def: 4 },
  { id: 'next', label: 'Ranura siguiente', def: 5 },
  { id: 'use', label: 'Usar / colocar / comer', def: 6 },
  { id: 'attack', label: 'Romper / atacar', def: 7 },
  { id: 'summon', label: 'Invocar jefes y mobs', def: 8 },
  { id: 'pause', label: 'Pausa', def: 9 },
  { id: 'sprint', label: 'Correr (alternar)', def: 10 },
  { id: 'camera', label: 'Cambiar cámara', def: 11 },
  { id: 'fly', label: 'Volar (creativo)', def: 12 },
  { id: 'quests', label: 'Misiones', def: 13 },
  { id: 'weather', label: 'Cambiar clima', def: 14 },
  { id: 'debug', label: 'Datos de depuración (F3)', def: 15 },
  { id: 'mode', label: 'Creativo / Supervivencia', def: 17 },
  { id: 'config', label: 'Configurar el mando', def: 16 },
];
export const defaultPadConfig = () => ({ map: Object.fromEntries(PAD_ACTIONS.map((a) => [a.id, a.def])), deadzone: 0.16, lookX: 3.4, lookY: 2.6, curve: 1.7, invertY: false, rumble: true });

export class Gamepads {
  constructor(cfg) { this.cfg = cfg; this.prev = []; this.connected = false; this.id = ''; this.listening = null; this.last = { connected: false, down: [], edge: [], axes: [] }; }
  pad() {
    const list = navigator.getGamepads ? navigator.getGamepads() : [];
    let any = null;
    for (const g of list) if (g && g.connected) { if (g.mapping === 'standard') return g; any = any || g; }
    return any;
  }
  // Lee el estado: down[i], edge[i] (recién pulsado), axes y si hubo cualquier entrada
  poll() {
    const gp = this.pad();
    if (!gp) { this.connected = false; this.last = { connected: false, down: [], edge: [], axes: [], any: false }; return this.last; }
    this.connected = true; this.id = gp.id;
    const down = [], edge = [];
    for (let i = 0; i < gp.buttons.length; i++) { const b = gp.buttons[i], d = !!(b.pressed || b.value > 0.5); down[i] = d; edge[i] = d && !this.prev[i]; }
    this.prev = down;
    const axes = Array.from(gp.axes);
    const stickMove = Math.hypot(axes[0] || 0, axes[1] || 0) > this.cfg.deadzone + 0.1 || Math.hypot(axes[2] || 0, axes[3] || 0) > this.cfg.deadzone + 0.1;
    if (this.listening) { // modo "asignar botón": consume la siguiente pulsación
      const i = edge.findIndex(Boolean);
      if (i >= 0) { const cb = this.listening; this.listening = null; cb(i); }
      this.last = { connected: true, down, edge: [], axes, any: true, busy: true, gp };
      return this.last;
    }
    this.last = { connected: true, down, edge, axes, any: edge.some(Boolean) || stickMove, gp };
    return this.last;
  }
  listen(cb) { this.listening = cb; }
  // Joystick con zona muerta radial y curva de respuesta
  stick(axes, ix, iy, curve = this.cfg.curve) {
    const x = axes[ix] || 0, y = axes[iy] || 0, m = Math.hypot(x, y), dz = this.cfg.deadzone;
    if (m < dz) return { x: 0, y: 0, m: 0 };
    const k = (Math.min(1, m) - dz) / (1 - dz), s = Math.pow(k, curve) / m;
    return { x: x * s, y: y * s, m: k };
  }
  down(id) { return !!this.last.down[this.cfg.map[id]]; }
  edge(id) { return !!this.last.edge[this.cfg.map[id]]; }
  rumble(strong, weak, ms) {
    if (!this.cfg.rumble || !this.connected) return;
    const gp = this.last.gp, act = gp && (gp.vibrationActuator || (gp.hapticActuators && gp.hapticActuators[0]));
    try {
      if (gp && gp.vibrationActuator && gp.vibrationActuator.playEffect) gp.vibrationActuator.playEffect('dual-rumble', { startDelay: 0, duration: ms, weakMagnitude: weak, strongMagnitude: strong });
      else if (act && act.pulse) act.pulse(strong, ms);
    } catch {}
  }
}
