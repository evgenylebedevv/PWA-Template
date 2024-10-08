self.addEventListener('install', (e) => {
    e.waitUntil(
        caches.open('pwa-installable').then((cache) => cache.addAll([
            '/dev/pwa_2/',
            '/dev/pwa_2/index.html',
            '/dev/pwa_2/script.js',
            '/dev/pwa_2/style.css',
        ])),
    );
});

self.addEventListener('fetch', (e) => {
    console.log(e.request.url);
    e.respondWith(
        caches.match(e.request).then((response) => response || fetch(e.request)),
    );
});