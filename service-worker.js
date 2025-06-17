const CACHE_NAME = 'rsd-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/css/style.css',
  '/images/radiostudiodoc.png',
  '/images/RSDFAVICON.png',
  '/images/web-app-manifest-192x192.png',
  '/images/web-app-manifest-512x512.png'
];

self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request).then(function (response) {
      return response || fetch(event.request);
    })
  );
});
