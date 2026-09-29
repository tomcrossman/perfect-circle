/* Cache the game so it keeps working with no signal. Bump CACHE on release. */
const CACHE = 'perfect-circle-v12';
const ASSETS = ['./', './index.html', './manifest.webmanifest',
                './icon-192.png', './icon-512.png', './icon-512-maskable.png', './oooooooh.mp4', './yay-1.mp4', './yay-2.mp4'];

self.addEventListener('install', e => {
    e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
    e.waitUntil(caches.keys()
        .then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k))))
        .then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
    if (e.request.method !== 'GET') return;
    e.respondWith(
        fetch(e.request)
            .then(r => { const copy = r.clone();
                         caches.open(CACHE).then(c => c.put(e.request, copy)); return r; })
            .catch(() => caches.match(e.request).then(r => r || caches.match('./index.html'))));
});
