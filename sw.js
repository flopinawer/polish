const CACHE_NAME = 'vibe-fx-v1';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './poland.png'
];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS)));
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then(response => response || fetch(e.request))
  );
});
