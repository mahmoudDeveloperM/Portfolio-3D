const CACHE = 'mahmoud-portfolio3d-v7';
const ASSETS = [
  './',
  './index.html',
  './assets/favicon.svg',
  './assets/social-card.svg',
  './site.webmanifest',
  './cv.pdf'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)));
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
  );
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  const url = new URL(e.request.url);
  if (!url.protocol.startsWith('http')) return;

  e.respondWith(
    fetch(e.request)
      .then(r => {
        if (r && r.status === 200) {
          const copy = r.clone();
          caches.open(CACHE).then(c => c.put(e.request, copy)).catch(() => {});
        }
        return r;
      })
      .catch(() => caches.match(e.request))
  );
});
