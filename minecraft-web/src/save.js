// Guardado en IndexedDB con varias partidas: índice + (meta + chunks editados) por mundo.
// Claves: 'index' -> [resumen], 'w:<id>:meta', 'w:<id>:c:<chunk>'. Exporta/importa a archivo .mcw (gzip).
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
const done = (tx) => new Promise((res, rej) => { tx.oncomplete = res; tx.onerror = () => rej(tx.error); tx.onabort = () => rej(tx.error); });

async function readIndex(store) { return (await wrap(store.get('index'))) || []; }

// Migra la partida única de versiones antiguas ('meta' + 'c:*') al nuevo formato
async function migrate() {
  const db = await open();
  const tx = db.transaction(STORE, 'readwrite'), s = tx.objectStore(STORE);
  const old = await wrap(s.get('meta'));
  if (old) {
    const keys = await wrap(s.getAllKeys());
    const index = await readIndex(s), id = 'w' + Date.now().toString(36);
    for (const k of keys) if (typeof k === 'string' && k.startsWith('c:')) { s.put(await wrap(s.get(k)), `w:${id}:${k}`); s.delete(k); }
    s.put(old, `w:${id}:meta`); s.delete('meta');
    index.unshift({ id, name: 'Mundo antiguo', mode: old.mode, seed: old.seed, updated: Date.now(), created: Date.now(), played: 0, level: 0, thumb: null });
    s.put(index, 'index');
  }
  await done(tx);
}

export async function listWorlds() {
  try {
    await migrate();
    const db = await open();
    const s = db.transaction(STORE).objectStore(STORE);
    return (await readIndex(s)).sort((a, b) => b.updated - a.updated);
  } catch { return []; }
}
export async function loadWorld(id) {
  const db = await open();
  const s = db.transaction(STORE).objectStore(STORE);
  const range = IDBKeyRange.bound(`w:${id}:`, `w:${id}:￿`);
  const keys = await wrap(s.getAllKeys(range)), vals = await wrap(s.getAll(range));
  const out = { meta: null, chunks: new Map(), nether: new Map(), end: new Map() };
  keys.forEach((k, i) => {
    const rest = k.slice(`w:${id}:`.length);
    if (rest === 'meta') out.meta = vals[i];
    else if (rest.startsWith('c:')) out.chunks.set(Number(rest.slice(2)), vals[i]);
    else if (rest.startsWith('n:')) out.nether.set(Number(rest.slice(2)), vals[i]);
    else if (rest.startsWith('e:')) out.end.set(Number(rest.slice(2)), vals[i]);
  });
  return out;
}
export function newId() { return 'w' + Date.now().toString(36) + Math.floor(Math.random() * 1296).toString(36); }

// summary: {id, name, mode, seed, created, played, level, thumb}
export async function saveWorld(id, meta, chunkEntries, summary) {
  try {
    const db = await open();
    const tx = db.transaction(STORE, 'readwrite'), s = tx.objectStore(STORE);
    s.put(meta, `w:${id}:meta`);
    for (const [k, data] of chunkEntries) s.put(data, `w:${id}:${typeof k === 'number' ? 'c:' + k : k}`); // k: número (Overworld) o 'n:123' / 'e:123'
    const index = await readIndex(s), i = index.findIndex((w) => w.id === id), row = { ...(i >= 0 ? index[i] : {}), ...summary, id, updated: Date.now() };
    if (i >= 0) index[i] = row; else index.push(row);
    s.put(index, 'index');
    await done(tx);
    return true;
  } catch { return false; }
}
export async function deleteWorld(id) {
  const db = await open();
  const tx = db.transaction(STORE, 'readwrite'), s = tx.objectStore(STORE);
  s.delete(IDBKeyRange.bound(`w:${id}:`, `w:${id}:￿`));
  s.put((await readIndex(s)).filter((w) => w.id !== id), 'index');
  await done(tx);
}
export async function renameWorld(id, name) {
  const db = await open();
  const tx = db.transaction(STORE, 'readwrite'), s = tx.objectStore(STORE);
  const index = await readIndex(s), w = index.find((x) => x.id === id);
  if (w) w.name = name;
  s.put(index, 'index'); await done(tx);
}

// ---------- Exportar / importar (.mcw = JSON comprimido con gzip) ----------
const b64 = (u8) => { let s = ''; for (let i = 0; i < u8.length; i += 0x8000) s += String.fromCharCode.apply(null, u8.subarray(i, i + 0x8000)); return btoa(s); };
const unb64 = (str) => Uint8Array.from(atob(str), (c) => c.charCodeAt(0));
async function pipe(stream, Ctor, fmt) { return new Response(stream.pipeThrough(new Ctor(fmt))); }

export async function exportWorld(id) {
  const worlds = await listWorlds(), summary = worlds.find((w) => w.id === id), data = await loadWorld(id);
  const all = [...[...data.chunks].map(([k, u]) => ['c:' + k, u]), ...[...data.nether].map(([k, u]) => ['n:' + k, u]), ...[...data.end].map(([k, u]) => ['e:' + k, u])];
  const payload = JSON.stringify({ v: 3, summary, meta: data.meta, chunks: all.map(([k, u8]) => [k, b64(new Uint8Array(u8))]) });
  const blob = new Blob([payload]);
  if (typeof CompressionStream === 'undefined') return blob;
  return (await pipe(blob.stream(), CompressionStream, 'gzip')).blob();
}
export async function importWorld(file) {
  let text;
  try { text = await (await pipe(file.stream(), DecompressionStream, 'gzip')).text(); } catch { text = await file.text(); }
  const o = JSON.parse(text);
  if (!o || !o.meta) throw new Error('Archivo no válido');
  const id = newId();
  await saveWorld(id, o.meta, o.chunks.map(([k, s]) => [k, unb64(s)]), { ...(o.summary || {}), name: ((o.summary && o.summary.name) || 'Mundo') + ' (importado)', created: Date.now() });
  return id;
}
