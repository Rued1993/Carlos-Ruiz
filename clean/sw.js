// Service worker de VoxelLands: funciona sin conexión tras la primera visita.
// Estrategia: red primero (siempre la versión más nueva si hay conexión) y caché como respaldo.
const CACHE = 'mcweb-v13';
const CORE = ['./', './index.html', './manifest.webmanifest', './icons/icon-192.png', './icons/icon-512.png'];

// Precarga el HTML y los archivos de /assets/ que referencian (el JS principal y el worker de chunks)
async function precache() {
  const c = await caches.open(CACHE);
  await c.addAll(CORE);
  const found = new Set(), scan = (txt) => { for (const m of txt.matchAll(/assets\/[\w.\-]+\.(?:js|css|png|woff2?)/g)) found.add('./' + m[0]); };
  scan(await (await c.match('./index.html')).text());
  for (const u of [...found]) { try { const r = await fetch(u); if (r.ok) { await c.put(u, r.clone()); if (u.endsWith('.js')) scan(await r.text()); } } catch {} }
  for (const u of found) { if (!(await c.match(u))) { try { await c.add(u); } catch {} } }
}
self.addEventListener('install', (e) => { e.waitUntil(precache().then(() => self.skipWaiting())); });
self.addEventListener('activate', (e) => {
  e.waitUntil(caches.keys().then((ks) => Promise.all(ks.filter((k) => k !== CACHE).map((k) => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== location.origin) return;
  e.respondWith(
    (req.mode === 'navigate' ? fetch(req.url, { cache: 'no-cache' }) : fetch(req)).then((res) => {
      if (res && res.ok) { const copy = res.clone(); caches.open(CACHE).then((c) => c.put(req, copy)); }
      return res;
    }).catch(() => caches.match(req.url, { ignoreVary: true, ignoreSearch: true }).then((m) => m || (req.mode === 'navigate' ? caches.match('./index.html') : Promise.reject('offline'))))
  );
});
