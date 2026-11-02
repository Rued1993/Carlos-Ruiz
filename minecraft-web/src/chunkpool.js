// Pool de Web Workers para generar y mallar chunks.
export class ChunkPool {
  constructor(n = Math.max(1, Math.min(3, (navigator.hardwareConcurrency || 4) - 1))) {
    this.workers = []; this.cbs = new Map(); this.nextId = 1; this.rr = 0;
    for (let i = 0; i < n; i++) {
      const w = new Worker(new URL('./chunkworker.js', import.meta.url), { type: 'module' });
      w.onmessage = (e) => { const cb = this.cbs.get(e.data.id); if (cb) { this.cbs.delete(e.data.id); cb(e.data); } };
      w.onerror = (e) => { console.error('chunk worker', e.message); this.failed = true; };
      this.workers.push(w);
    }
  }
  request(msg, transfer, cb) {
    const id = this.nextId++; this.cbs.set(id, cb);
    const w = this.workers[this.rr++ % this.workers.length];
    w.postMessage({ ...msg, id }, transfer);
  }
}
