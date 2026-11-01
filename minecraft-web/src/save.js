// Guardado en IndexedDB: meta (jugador, inventario, hora) + chunks editados.
const DB = 'minecraft-web', STORE = 'kv';
let dbp = null;
function open() {
  if (dbp) return dbp;
  dbp = new Promise((resolve, reject) => {
    const r = indexedDB.open(DB, 1);
    r.onupgradeneeded = () => r.result.createObjectStore(STORE);
    r.onsuccess = () => resolve(r.result);
    r.onerror = () => reject(r.error);
  });
  return dbp;
}
const wrap = (req) => new Promise((res, rej) => { req.onsuccess = () => res(req.result); req.onerror = () => rej(req.error); });

export async function loadAll() {
  try {
    const db = await open();
    const store = db.transaction(STORE).objectStore(STORE);
    const keys = await wrap(store.getAllKeys());
    const vals = await wrap(store.getAll());
    const out = { meta: null, chunks: new Map() };
    keys.forEach((k, i) => {
      if (k === 'meta') out.meta = vals[i];
      else if (typeof k === 'string' && k.startsWith('c:')) out.chunks.set(Number(k.slice(2)), vals[i]);
    });
    return out;
  } catch { return { meta: null, chunks: new Map() }; }
}
export async function saveAll(meta, chunkEntries) {
  try {
    const db = await open();
    const tx = db.transaction(STORE, 'readwrite');
    const s = tx.objectStore(STORE);
    s.put(meta, 'meta');
    for (const [k, data] of chunkEntries) s.put(data, 'c:' + k);
    await new Promise((res, rej) => { tx.oncomplete = res; tx.onerror = () => rej(tx.error); });
    return true;
  } catch { return false; }
}
export async function wipe() {
  try { const db = await open(); const tx = db.transaction(STORE, 'readwrite'); tx.objectStore(STORE).clear(); await new Promise((r) => (tx.oncomplete = r)); } catch {}
}
