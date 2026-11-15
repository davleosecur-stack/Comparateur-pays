// Hors ligne : on sert le cache, puis on le met à jour en arrière-plan.
// Changer VERSION à chaque mise en ligne pour forcer la mise à jour.
const VERSION = "villes-v1.5.0";
const CORE = ["./", "index.html", "a-propos.html", "manifest.webmanifest", "favicon.png",
  "icons/icon-192.png", "icons/icon-512.png", "icons/apple-touch-icon.png"];
self.addEventListener("install", e => e.waitUntil(caches.open(VERSION).then(c => c.addAll(CORE)).then(() => self.skipWaiting())));
self.addEventListener("activate", e => e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== VERSION).map(k => caches.delete(k)))).then(() => self.clients.claim())));
self.addEventListener("fetch", e => {
  if (e.request.method !== "GET") return;
  e.respondWith(caches.open(VERSION).then(async c => {
    const hit = await c.match(e.request, { ignoreSearch: true });
    const net = fetch(e.request).then(r => { if (r.ok || r.type === "opaque") c.put(e.request, r.clone()); return r; }).catch(() => hit);
    return hit || net;
  }));
});
