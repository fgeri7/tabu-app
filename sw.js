const CACHE='tabu-magyar-v2.3.4';
const CORE=['./','./index.html','./index.html?v=2.1.0','./style.css?v=2.1.0','./app.js?v=2.1.0','./cards.js?v=2.1.0'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(CORE)).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>{
  const u=new URL(e.request.url);
  const local=u.origin===location.origin;
  if(!local)return;
  const isApp=/\/(index\.html)?$/.test(u.pathname)||/\.(js|css)$/.test(u.pathname);
  if(isApp){
    e.respondWith(fetch(e.request,{cache:'no-store'}).then(r=>{const copy=r.clone();caches.open(CACHE).then(c=>c.put(e.request,copy));return r}).catch(()=>caches.match(e.request).then(r=>r||caches.match('./index.html')));
  }
});
