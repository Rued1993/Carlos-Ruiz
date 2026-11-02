// Controles táctiles: joystick flotante (izquierda), mirar/romper/colocar con gestos (derecha) y botones.
// Gestos en la zona derecha: arrastrar = mirar · toque corto = usar/colocar · mantener pulsado = romper/atacar.
const CSS = `
#touch { position: fixed; inset: 0; z-index: 6; pointer-events: none; -webkit-tap-highlight-color: transparent; touch-action: none; }
#touch.hidden { display: none !important; }
#touch .tz { position: absolute; top: 0; bottom: 0; pointer-events: auto; touch-action: none; }
#tzL { left: 0; width: 42%; } #tzR { right: 0; width: 58%; }
#tstick { position: absolute; width: 124px; height: 124px; margin: -62px 0 0 -62px; border-radius: 50%; border: 3px solid rgba(255,255,255,.55); background: rgba(255,255,255,.12); display: none; pointer-events: none; }
#tstick i { position: absolute; left: 50%; top: 50%; width: 56px; height: 56px; margin: -28px 0 0 -28px; border-radius: 50%; background: rgba(255,255,255,.55); border: 2px solid rgba(0,0,0,.45); }
#tstickHint { position: absolute; left: max(22px, env(safe-area-inset-left)); bottom: 26px; width: 110px; height: 110px; border-radius: 50%; border: 3px dashed rgba(255,255,255,.28); pointer-events: none; }
.tb { position: absolute; pointer-events: auto; touch-action: none; border: 3px solid rgba(255,255,255,.7); background: rgba(40,40,40,.55); color: #fff; border-radius: 50%; font: bold 24px var(--font); display: flex; align-items: center; justify-content: center; padding: 0; -webkit-user-select: none; user-select: none; text-shadow: 1px 1px #000; }
.tb.on, .tb:active { background: rgba(255,255,255,.4); }
.tb.sq { border-radius: 12px; }
#tJump { right: calc(22px + env(safe-area-inset-right)); bottom: 118px; width: 78px; height: 78px; font-size: 32px; }
#tAtk { right: calc(112px + env(safe-area-inset-right)); bottom: 52px; width: 72px; height: 72px; }
#tUse { right: calc(22px + env(safe-area-inset-right)); bottom: 210px; width: 62px; height: 62px; }
#tDown { right: calc(112px + env(safe-area-inset-right)); bottom: 140px; width: 56px; height: 56px; display: none; }
#tSprint { left: calc(26px + env(safe-area-inset-left)); bottom: 150px; width: 52px; height: 52px; font-size: 20px; }
#tFly { right: calc(112px + env(safe-area-inset-right)); bottom: 216px; width: 52px; height: 52px; font-size: 20px; display: none; }
#ttop { position: absolute; left: calc(8px + env(safe-area-inset-left)); top: calc(8px + env(safe-area-inset-top)); display: flex; gap: 8px; pointer-events: none; }
#ttop .tb { position: relative; width: 44px; height: 44px; font-size: 20px; border-radius: 10px; }
#tclose { position: fixed; right: calc(12px + env(safe-area-inset-right)); top: calc(10px + env(safe-area-inset-top)); z-index: 40; width: 52px; height: 52px; font-size: 26px; display: none; pointer-events: auto; border-radius: 12px; border: 3px solid #fff; background: rgba(160,30,30,.9); color: #fff; font-weight: bold; }
body.touch #minimap { width: 92px; height: 92px; right: 8px; top: 8px; } body.touch #mmN { display: none; }
body.touch #mmInfo { display: none; } body.touch #tracker { display: none; }
body.touch #hud { transform: translateX(-50%) scale(var(--hs, 1)); transform-origin: bottom center; }
body.touch #chatLog { bottom: 110px; font-size: 11px; max-width: 34vw; }
body.touch #toast { bottom: 118px; font-size: 14px; }
body.touch #bossbar { top: 8px; width: min(420px, 50vw); }
body.touch .slot { width: 50px; height: 50px; }
#touchRight { display: none; }
body.touch #touchRight { display: inline-block; }
`;
const cap = (el, id) => { try { el.setPointerCapture(id); } catch {} }; // en táctil el puntero ya queda ligado al elemento
export class TouchControls {
  constructor(h) {
    window.__touch = this; this.h = h; this.sprint = false; this.stickId = null; this.lookId = null; this.vis = false; this.on = false;
    const st = document.createElement('style'); st.textContent = CSS; document.head.appendChild(st);
    const root = this.root = document.createElement('div'); root.id = 'touch'; root.className = 'hidden';
    root.innerHTML = `<div id="tzL" class="tz"></div><div id="tzR" class="tz"></div><div id="tstickHint"></div><div id="tstick"><i></i></div>
      <button class="tb" id="tJump">⤒</button><button class="tb" id="tAtk">⛏</button><button class="tb" id="tUse">✋</button>
      <button class="tb" id="tDown">⤓</button><button class="tb" id="tFly">🕊</button><button class="tb sq" id="tSprint">»</button>
      <div id="ttop"><button class="tb" data-b="pause">☰</button><button class="tb" data-b="inv">🎒</button><button class="tb" data-b="quests">📜</button><button class="tb" data-b="cam">👁</button><button class="tb" data-b="chat" id="tChat" style="display:none">💬</button></div>`;
    document.body.appendChild(root);
    const close = this.closeBtn = document.createElement('button'); close.id = 'tclose'; close.textContent = '✕'; document.body.appendChild(close);
    close.addEventListener('click', () => h.btn('close'));
    const $ = (id) => root.querySelector('#' + id);
    this.stick = $('tstick'); this.knob = this.stick.firstElementChild; this.hint = $('tstickHint');
    const R = 56; this.R = R;
    // --- joystick flotante ---
    const zl = $('tzL');
    zl.addEventListener('pointerdown', (e) => {
      if (this.stickId !== null) return; this.stickId = e.pointerId; cap(zl, e.pointerId); e.preventDefault();
      this.ox = e.clientX; this.oy = e.clientY; this.stick.style.display = 'block'; this.hint.style.display = 'none';
      this.stick.style.left = this.ox + 'px'; this.stick.style.top = this.oy + 'px'; this.setKnob(0, 0); h.vibrate(6);
    });
    zl.addEventListener('pointermove', (e) => {
      if (e.pointerId !== this.stickId) return; e.preventDefault();
      let dx = e.clientX - this.ox, dy = e.clientY - this.oy; const d = Math.hypot(dx, dy);
      if (d > R) { // el joystick sigue al dedo si te pasas
        const k = (d - R) / d; this.ox += dx * k; this.oy += dy * k; this.stick.style.left = this.ox + 'px'; this.stick.style.top = this.oy + 'px'; dx = e.clientX - this.ox; dy = e.clientY - this.oy;
      }
      this.setKnob(dx, dy);
      const m = Math.min(1, Math.hypot(dx, dy) / R), a = Math.atan2(dy, dx), dead = 0.12, mm = m < dead ? 0 : (m - dead) / (1 - dead);
      h.move(Math.cos(a) * mm, -Math.sin(a) * mm, m);
    });
    const endStick = (e) => { if (e.pointerId !== this.stickId) return; this.stickId = null; this.stick.style.display = 'none'; this.hint.style.display = ''; h.move(0, 0, 0); };
    zl.addEventListener('pointerup', endStick); zl.addEventListener('pointercancel', endStick);
    // --- mirar con gestos ---
    const zr = $('tzR');
    zr.addEventListener('pointerdown', (e) => {
      if (this.lookId !== null) return; this.lookId = e.pointerId; cap(zr, e.pointerId); e.preventDefault();
      this.lx = this.sx = e.clientX; this.ly = this.sy = e.clientY; this.t0 = performance.now(); this.moved = false; this.holding = false;
      this.holdT = setTimeout(() => { if (!this.moved && this.lookId !== null) { this.holding = true; h.attack(true); h.vibrate(14); } }, 330);
    });
    zr.addEventListener('pointermove', (e) => {
      if (e.pointerId !== this.lookId) return; e.preventDefault();
      const dx = e.clientX - this.lx, dy = e.clientY - this.ly; this.lx = e.clientX; this.ly = e.clientY;
      if (!this.moved && Math.hypot(e.clientX - this.sx, e.clientY - this.sy) > 9) { this.moved = true; if (!this.holding) clearTimeout(this.holdT); }
      if (this.moved || this.holding) h.look(dx, dy);
    });
    const endLook = (e) => {
      if (e.pointerId !== this.lookId) return; this.lookId = null; clearTimeout(this.holdT);
      if (this.holding) h.attack(false);
      else if (!this.moved && performance.now() - this.t0 < 330) { h.use(true); setTimeout(() => h.use(false), 60); }
      this.holding = false;
    };
    zr.addEventListener('pointerup', endLook); zr.addEventListener('pointercancel', endLook);
    // --- botones ---
    const hold = (el, down, up) => {
      let id = null;
      el.addEventListener('pointerdown', (e) => { e.preventDefault(); e.stopPropagation(); id = e.pointerId; cap(el, id); el.classList.add('on'); h.vibrate(8); down(); });
      const end = (e) => { if (e.pointerId !== id) return; id = null; el.classList.remove('on'); up(); };
      el.addEventListener('pointerup', end); el.addEventListener('pointercancel', end);
    };
    hold($('tJump'), () => h.key('Space', true), () => h.key('Space', false));
    hold($('tDown'), () => h.key('KeyQ', true), () => h.key('KeyQ', false));
    hold($('tAtk'), () => h.attack(true), () => h.attack(false));
    hold($('tUse'), () => h.use(true), () => h.use(false));
    $('tFly').addEventListener('click', () => h.btn('fly'));
    $('tSprint').addEventListener('click', () => { this.sprint = !this.sprint; $('tSprint').classList.toggle('on', this.sprint); h.sprint(this.sprint); });
    $('ttop').addEventListener('click', (e) => { const b = e.target.closest('[data-b]'); if (b) { h.vibrate(8); h.btn(b.dataset.b); } });
    root.querySelectorAll('.tb').forEach((b) => b.addEventListener('contextmenu', (e) => e.preventDefault()));
    this.els = { down: $('tDown'), fly: $('tFly'), chat: $('tChat') };
  }
  setKnob(dx, dy) { const d = Math.hypot(dx, dy), k = d > this.R ? this.R / d : 1; this.knob.style.transform = `translate(${dx * k}px, ${dy * k}px)`; }
  // visible: mostrar controles de juego; close: mostrar la X de cerrar (inventario / paneles)
  update({ visible, close, flying, creative, mp }) {
    if (visible !== this.vis) {
      this.vis = visible; this.root.classList.toggle('hidden', !visible);
      if (!visible) { this.stickId = null; this.lookId = null; this.stick.style.display = 'none'; clearTimeout(this.holdT); this.holding = false; this.h.move(0, 0, 0); this.h.attack(false); this.h.use(false); }
    }
    if (close !== this.cl) { this.cl = close; this.closeBtn.style.display = close ? 'block' : 'none'; }
    this.els.down.style.display = flying ? 'flex' : 'none';
    this.els.fly.style.display = creative ? 'flex' : 'none';
    this.els.chat.style.display = mp ? 'flex' : 'none';
  }
}
