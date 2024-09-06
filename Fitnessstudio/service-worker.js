const cacheName = 'v1';
const cacheAssets = [
  '/index.html',
  '/about.html',
  '/classes.html',
  '/styles.css',
  '/scripts.js',
  '/images/hero.jpg',
  // Weitere Dateien hinzufügen
];

// Installationsereignis
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(cacheName)
      .then(cache => {
        console.log('Service Worker: Caching Files');
        cache.addAll(cacheAssets);
      })
      .then(() => self.skipWaiting())
  );
});

// Aktivierungsereignis
self.addEventListener('activate', (event) => {
  console.log('Service Worker: Aktiviert');
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cache => {
          if (cache !== cacheName) {
            console.log('Service Worker: Lösche alten Cache', cache);
            return caches.delete(cache);
          }
        })
      );
    })
  );
});

// Abrufereignis
self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});
