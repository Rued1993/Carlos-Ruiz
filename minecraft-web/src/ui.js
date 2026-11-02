// Interfaz: barra rápida, estadísticas, inventario, crafteo y paleta creativa.
import { iconURL, hudSprites } from './icons.js';
import { info, BLOCKS, ITEMS, toolOf, maxStack, matchRecipe, isFlat, SMELT_TIME } from './blocks.js';
const durOf = (item) => toolOf(item) || (ITEMS[item.id] && ITEMS[item.id].armor ? { dur: ITEMS[item.id].armor.dur } : null);

const $ = (id) => document.getElementById(id);

function slotEl(item, opts = {}) {
  const d = document.createElement('div');
  d.className = 'slot' + (opts.active ? ' active' : '');
  if (opts.group) { d.dataset.g = opts.group; d.dataset.i = opts.index; }
  if (item) {
    const img = document.createElement('img');
    img.src = iconURL(item.id); if (isFlat(item.id)) img.className = 'flat';
    d.appendChild(img);
    d.title = info(item.id).name;
    if (item.n > 1) { const n = document.createElement('span'); n.className = 'n'; n.textContent = item.n; d.appendChild(n); }
    const t = durOf(item);
    if (t && item.d > 0) {
      const bar = document.createElement('div'); bar.className = 'dur';
      const f = Math.max(0, 1 - item.d / t.dur);
      bar.innerHTML = `<i style="width:${f * 100}%;background:${f > 0.5 ? '#6f6' : f > 0.2 ? '#fd4' : '#f55'}"></i>`;
      d.appendChild(bar);
    }
  }
  if (opts.key) { const k = document.createElement('span'); k.className = 'k'; k.textContent = opts.key; d.appendChild(k); }
  return d;
}

export class UI {
  constructor(g) {
    this.g = g; // { inv, player, getMode(), dropItem(id,n), sound(name) }
    this.cursor = null; this.craft = []; this.size = 2; this.isOpen = false;
    this.toastT = 0; this.furnace = null; this.sprites = hudSprites();
    const inv = $('inv');
    inv.addEventListener('mousedown', (e) => this.onDown(e));
    inv.addEventListener('contextmenu', (e) => e.preventDefault());
    document.addEventListener('mousemove', (e) => { const c = $('cursorItem'); c.style.left = e.clientX + 'px'; c.style.top = e.clientY + 'px'; });
  }

  toast(text) {
    const t = $('toast'); t.textContent = text; t.style.opacity = 1; clearTimeout(this.toastT);
    this.toastT = setTimeout(() => (t.style.opacity = 0), 1600);
  }

  // ---------- HUD ----------
  renderHotbar() {
    const hb = $('hotbar'); hb.innerHTML = '';
    for (let i = 0; i < 9; i++) {
      const el = slotEl(this.g.inv.slots[i], { active: i === this.g.inv.selected, key: i + 1 });
      el.onclick = () => { this.g.inv.selected = i; this.g.onSelect(); };
      hb.appendChild(el);
    }
  }
  renderStats() {
    const p = this.g.player, surv = this.g.getMode() === 'survival', S = this.sprites;
    $('bars').style.visibility = surv ? 'visible' : 'hidden';
    const row = (v, set) => {
      let h = '';
      for (let i = 0; i < 10; i++) h += `<img class="hs" src="${set[v >= i * 2 + 2 ? 'full' : v === i * 2 + 1 ? 'half' : 'empty']}">`;
      return h;
    };
    const hp = Math.ceil(p.hp), food = Math.ceil(p.food);
    const key = hp + ',' + food + ',' + Math.ceil(p.air) + ',' + p.headUnder + ',' + surv + ',' + (hp <= 6 ? Math.floor(performance.now() / 250) % 2 : 0);
    if (key === this._statKey) return;
    this._statKey = key;
    $('hearts').innerHTML = row(hp, S.heart);
    $('hearts').classList.toggle('low', hp <= 6);
    $('food').innerHTML = row(food, S.food);
    const air = Math.ceil(p.air);
    $('air').innerHTML = p.headUnder && surv ? Array.from({ length: 10 }, (_, i) => `<img class="hs" src="${air > i ? S.bubble.full : S.bubble.empty}">`).join('') : '';
  }

  // ---------- Inventario ----------
  open(size, furnace = null) {
    this.furnace = size === 'furnace' ? furnace : null;
    if (size === 'furnace') size = 2;
    this.size = size; this.craft = Array(size * size).fill(null); this.isOpen = true;
    const creative = this.g.getMode() === 'creative';
    $('inv').classList.remove('hidden');
    $('invTitle').textContent = this.furnace ? 'Horno' : creative ? 'Creativo' : size === 3 ? 'Mesa de crafteo' : 'Inventario';
    $('craftArea').classList.toggle('hidden', creative || !!this.furnace);
    $('furnaceArea').classList.toggle('hidden', !this.furnace);
    $('paletteWrap').classList.toggle('hidden', !creative || !!this.furnace);
    $('craftGrid').style.gridTemplateColumns = `repeat(${size}, 46px)`;
    this.render();
  }
  close() {
    if (!this.isOpen) return;
    this.isOpen = false; this.furnace = null;
    const give = (it) => { if (!it) return; const left = this.g.inv.add(it.id, it.n); if (left) this.g.dropItem(it.id, left); };
    this.craft.forEach(give); this.craft = [];
    give(this.cursor); this.cursor = null;
    $('inv').classList.add('hidden'); $('cursorItem').classList.add('hidden');
    this.renderHotbar();
  }
  recipe() {
    const rec = matchRecipe(this.craft.map((s) => (s ? s.id : 0)), this.size);
    return rec ? { id: rec.out, n: rec.n, d: 0 } : null;
  }
  render() {
    const g = this.g;
    const as = $('armorSlots'); as.innerHTML = ''; for (let i = 0; i < 4; i++) as.appendChild(slotEl(g.inv.armor[i], { group: 'armor', index: i }));
    { const pts = g.inv.armorPoints(); $('armorPts').textContent = 'Defensa ' + pts + ' · ' + Math.round((1 - Math.pow(0.96, pts)) * 100) + '% menos daño'; }
    $('armorRow').classList.toggle('hidden', !!this.furnace);
    const main = $('invMain'); main.innerHTML = '';
    for (let i = 9; i < 36; i++) main.appendChild(slotEl(g.inv.slots[i], { group: 'inv', index: i }));
    const hot = $('invHot'); hot.innerHTML = '';
    for (let i = 0; i < 9; i++) hot.appendChild(slotEl(g.inv.slots[i], { group: 'inv', index: i, active: i === g.inv.selected }));
    if (this.furnace) {
      const f = this.furnace;
      $('fIn').innerHTML = ''; $('fIn').appendChild(slotEl(f.slots[0], { group: 'furnace', index: 0 }));
      $('fFuel').innerHTML = ''; $('fFuel').appendChild(slotEl(f.slots[1], { group: 'furnace', index: 1 }));
      $('fOut').innerHTML = ''; $('fOut').appendChild(slotEl(f.slots[2], { group: 'furnace', index: 2 }));
      this.furnaceBars();
    } else if (g.getMode() === 'creative') {
      const pal = $('palette'); pal.innerHTML = '';
      const ids = [...Object.keys(BLOCKS).map(Number).filter((i) => !BLOCKS[i].hidden), ...Object.keys(ITEMS).map(Number)];
      ids.forEach((id) => pal.appendChild(slotEl({ id, n: 1, d: 0 }, { group: 'pal', index: id })));
    } else {
      const cg = $('craftGrid'); cg.innerHTML = '';
      this.craft.forEach((s, i) => cg.appendChild(slotEl(s, { group: 'craft', index: i })));
      const out = $('craftOut'); out.innerHTML = ''; out.appendChild(slotEl(this.recipe(), { group: 'out', index: 0 }));
    }
    const c = $('cursorItem');
    if (this.cursor) {
      c.classList.remove('hidden');
      c.innerHTML = `<img src="${iconURL(this.cursor.id)}">${this.cursor.n > 1 ? `<span class="n">${this.cursor.n}</span>` : ''}`;
    } else c.classList.add('hidden');
    this.renderHotbar();
  }
  furnaceBars() {
    const f = this.furnace; if (!f) return;
    $('fFlame').style.height = (f.burn > 0 ? Math.min(100, (f.burn / f.burnMax) * 100) : 0) + '%';
    $('fArrow').style.width = Math.min(100, (f.cook / SMELT_TIME) * 100) + '%';
  }
  arr(group) { return group === 'inv' ? this.g.inv.slots : group === 'armor' ? this.g.inv.armor : group === 'furnace' ? this.furnace.slots : this.craft; }

  onDown(e) {
    const el = e.target.closest('.slot');
    const right = e.button === 2;
    if (!el || !el.dataset.g) {
      if (this.g.getMode() === 'creative' && e.target.closest('#paletteWrap')) { this.cursor = null; this.render(); }
      else if (!e.target.closest('.panel') && this.cursor) { this.g.dropItem(this.cursor.id, right ? 1 : this.cursor.n); if (right && this.cursor.n > 1) this.cursor.n--; else this.cursor = null; this.render(); }
      return;
    }
    const group = el.dataset.g, i = +el.dataset.i;
    if (group === 'pal') { this.cursor = { id: i, n: right ? 1 : maxStack(i), d: 0 }; this.render(); return; }
    if (group === 'out') {
      const out = this.recipe(); if (!out) return;
      if (this.cursor && !(this.cursor.id === out.id && this.cursor.n + out.n <= maxStack(out.id))) return;
      if (this.cursor) this.cursor.n += out.n; else this.cursor = { ...out };
      this.craft = this.craft.map((s) => (s && s.n > 1 ? { ...s, n: s.n - 1 } : null));
      this.g.sound('craft'); if (this.g.onCraft) this.g.onCraft(out.id, out.n); this.render(); return;
    }
    const arr = this.arr(group), slot = arr[i], cur = this.cursor;
    if (group === 'armor' && cur && !(ITEMS[cur.id] && ITEMS[cur.id].armor && ITEMS[cur.id].armor.slot === i)) return; // cada ranura solo admite su pieza
    if (group === 'armor' && this.g.onArmorChange) setTimeout(() => this.g.onArmorChange(), 0);
    if (group === 'furnace' && i === 2) { // salida: solo se puede sacar
      if (!slot) return;
      if (!cur) { this.cursor = slot; arr[2] = null; }
      else if (cur.id === slot.id && cur.n + slot.n <= maxStack(cur.id)) { cur.n += slot.n; arr[2] = null; }
      this.render(); return;
    }
    if (!right) {
      if (!cur) { arr[i] = null; this.cursor = slot; }
      else if (!slot) { arr[i] = cur; this.cursor = null; }
      else if (slot.id === cur.id && maxStack(cur.id) > 1) { const t = Math.min(cur.n, maxStack(cur.id) - slot.n); slot.n += t; cur.n -= t; if (cur.n <= 0) this.cursor = null; }
      else { arr[i] = cur; this.cursor = slot; }
    } else {
      if (!cur) { if (slot) { const take = Math.ceil(slot.n / 2); this.cursor = { ...slot, n: take }; slot.n -= take; if (slot.n <= 0) arr[i] = null; } }
      else if (!slot) { arr[i] = { ...cur, n: 1 }; cur.n--; if (cur.n <= 0) this.cursor = null; }
      else if (slot.id === cur.id && slot.n < maxStack(cur.id)) { slot.n++; cur.n--; if (cur.n <= 0) this.cursor = null; }
      else { arr[i] = cur; this.cursor = slot; }
    }
    this.render();
  }
}
