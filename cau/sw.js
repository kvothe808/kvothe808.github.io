// CotoCau se ha mudado a https://cotocau.github.io/: este service worker borra la copia sin conexión antigua y se retira.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(
  caches.keys().then(ks => Promise.all(ks.filter(k => k.indexOf('cau-') === 0).map(k => caches.delete(k))))
    .then(() => self.registration.unregister())
));
