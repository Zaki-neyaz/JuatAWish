self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("bebu-birthday").then(cache => {
      return cache.addAll([
        "/",
        "/index.html",
        "/zaki.mp3",
        "/1.jpg",
        "/2.jpg",
        "/bebu-photo.jpg",
        "/icon-192.png",
        "/icon-512.png",
        "/manifest.json"
      ]);
    })
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(response => response || fetch(e.request))
  );
});
