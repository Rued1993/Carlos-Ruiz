import { maxStack, toolOf } from './blocks.js';

export class Inventory {
  constructor() { this.slots = Array(36).fill(null); this.selected = 0; } // 0-8 = barra rápida
  held() { return this.slots[this.selected]; }

  // Devuelve lo que no cupo
  add(id, n = 1) {
    const max = maxStack(id);
    for (const s of this.slots) if (s && s.id === id && s.n < max) { const t = Math.min(n, max - s.n); s.n += t; n -= t; if (!n) return 0; }
    for (let i = 0; i < 36 && n > 0; i++) if (!this.slots[i]) { const t = Math.min(n, max); this.slots[i] = { id, n: t, d: 0 }; n -= t; }
    return n;
  }
  canAdd(id) {
    const max = maxStack(id);
    return this.slots.some((s) => !s || (s.id === id && s.n < max));
  }
  consumeHeld(n = 1) {
    const s = this.slots[this.selected];
    if (!s) return;
    s.n -= n;
    if (s.n <= 0) this.slots[this.selected] = null;
  }
  // Gasta durabilidad; devuelve true si la herramienta se rompió
  wearHeld(amount = 1) {
    const s = this.slots[this.selected], t = toolOf(s);
    if (!t) return false;
    s.d = (s.d || 0) + amount;
    if (s.d >= t.dur) { this.slots[this.selected] = null; return true; }
    return false;
  }
  toJSON() { return { slots: this.slots, selected: this.selected }; }
  load(o) { if (o) { this.slots = o.slots; this.selected = o.selected || 0; } }
}
