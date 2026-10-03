// Pense à changer le numéro de version à chaque mise à jour des fichiers.
const CACHE="englishjonas-v3";
const ASSETS=["./","./index.html","./style.css","./data.js","./app.js","./manifest.json","./icon-192.png","./icon-512.png","./icon-maskable-512.png"];

self.addEventListener("install",e=>{
  e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)).then(()=>self.skipWaiting()));
});

self.addEventListener("activate",e=>{
  e.waitUntil(
    caches.keys()
      .then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k))))
      .then(()=>self.clients.claim())
  );
});

// Cache d'abord (rapide + hors ligne), mise à jour en arrière-plan.
self.addEventListener("fetch",e=>{
  const req=e.request;
  if(req.method!=="GET"||!req.url.startsWith("http"))return;
  e.respondWith(caches.match(req).then(hit=>{
    const net=fetch(req).then(res=>{
      if(res&&res.status===200){const copy=res.clone();caches.open(CACHE).then(c=>c.put(req,copy))}
      return res;
    }).catch(()=>null);
    if(hit){e.waitUntil(net);return hit}
    return net.then(res=>res||(req.mode==="navigate"?caches.match("./index.html"):Response.error()));
  }));
});
