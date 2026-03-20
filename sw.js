const CACHE_NAME = "presupuestos-v1";

const urlsToCache = [
  "/",
  "/index.html",
  "/manifest.json",
  "/libs/jspdf.umd.min.js"
];

self.addEventListener("install", e => {
  e.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request)
      .then(res => res || fetch(e.request))
  );
});
