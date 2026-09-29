/* Cache the game so it keeps working with no signal. Bump CACHE on release. */
const CACHE = 'perfect-circle-v17';
const ASSETS = ['./', './index.html', './manifest.webmanifest', './icon-192.png',
                './icon-512.png', './icon-512-maskable.png', './oooooooh.mp4', './yay-1.mp4',
                './yay-2.mp4', './yay-3.mp4', './yay-4.mp4', './yay-5.mp4', './boo-1.mp4',
                './boo-2.mp4', './boo-3.mp4', './boo-4.mp4', './boo-5.mp4', './boo-6.mp4',
                './boo-7.mp4', './boo-8.mp4'];

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
