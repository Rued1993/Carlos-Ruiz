// Worker de chunks: genera terreno y calcula mallas fuera del hilo principal.
import { World, ckey } from './world.js';

const worlds = new Map();
function getWorld(tag, dim, seed, kind) {
  const key = tag + '|' + dim + '|' + seed + '|' + kind;
  let w = worlds.get(key);
  if (!w) { w = new World(null, null, seed, new Map(), dim); w.kind = kind; w.hi = new Map(); worlds.set(key, w); }
  return w;
}

self.onmessage = (e) => {
  const m = e.data;
  if (m.t === 'gen') {
    const w = getWorld('g', m.dim, m.seed, m.kind), k = ckey(m.cx, m.cz);
    const data = w.generateChunk(m.cx, m.cz);
    w.chunks.delete(k); w.tops.delete(k); w.torches.delete(k); w.hi.delete(k); w.modified.delete(k);
    self.postMessage({ id: m.id, data }, [data.buffer]);
  } else if (m.t === 'mesh') {
    const w = getWorld('m', m.dim, m.seed, 'normal');
    w.chunks.clear(); w.tops.clear(); w.torches.clear(); w.hi.clear();
    let i = 0;
    for (let b = -1; b <= 1; b++) for (let a = -1; a <= 1; a++) {
      const k = ckey(m.cx + a, m.cz + b), data = new Uint8Array(m.bufs[i++]);
      w.chunks.set(k, data); w.computeTops(k, data); w.scanTorches(k, data);
    }
    const lists = w.meshLists(m.cx, m.cz);
    w.chunks.clear();
    const tr = [];
    for (const L of lists) tr.push(L.pos.buffer, L.nor.buffer, L.uv.buffer, L.col.buffer, L.bl.buffer, L.sw.buffer, L.sk.buffer, L.ind.buffer);
    self.postMessage({ id: m.id, lists }, tr);
  }
};
