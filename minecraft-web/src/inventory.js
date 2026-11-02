import { maxStack, toolOf, ITEMS } from './blocks.js';

export class Inventory {
  constructor() { this.slots = Array(36).fill(null); this.selected = 0; this.armor = [null, null, null, null]; } // 0-8 = barra rápida; armor: casco, peto, grebas, botas
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
    const ir = (s.ench && s.ench.irrompibilidad) || 0; if (ir && Math.random() < ir / (ir + 1)) return false; // Irrompibilidad
    s.d = (s.d || 0) + amount;
    if (s.d >= t.dur) { this.slots[this.selected] = null; return true; }
    return false;
  }
  count(id) { let n = 0; for (const s of this.slots) if (s && s.id === id) n += s.n; return n; }
  take(id, n) { for (let i = 0; i < 36 && n > 0; i++) { const s = this.slots[i]; if (s && s.id === id) { const t = Math.min(n, s.n); s.n -= t; n -= t; if (s.n <= 0) this.slots[i] = null; } } return n === 0; }
  armorPoints() { let p = 0; for (const a of this.armor) if (a && ITEMS[a.id] && ITEMS[a.id].armor) p += ITEMS[a.id].armor.pts + ((a.ench && a.ench.proteccion) || 0); return p; }
  fallReduce() { const b = this.armor[3]; return b && b.ench && b.ench.caida ? b.ench.caida * 2 : 0; }
  // Cada golpe recibido desgasta cada pieza; devuelve las ranuras que se han roto
  wearArmor(n = 1) { const broken = []; this.armor.forEach((a, i) => { if (!a) return; const ir = (a.ench && a.ench.irrompibilidad) || 0; if (ir && Math.random() < ir / (ir + 1)) return; a.d = (a.d || 0) + n; if (a.d >= ITEMS[a.id].armor.dur) { this.armor[i] = null; broken.push(i); } }); return broken; }
  toJSON() { return { slots: this.slots, selected: this.selected, armor: this.armor }; }
  load(o) { if (o) { this.slots = o.slots; this.selected = o.selected || 0; this.armor = o.armor || [null, null, null, null]; } }
}
