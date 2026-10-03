// Change ce numéro à chaque mise à jour des fichiers.
const CACHE="englishjonas-v5";
const ASSETS=["./","./index.html","./style.css","./data.js","./app.js","./manifest.json","./icon-192.png","./icon-512.png"];

// Un fichier manquant ne bloque plus l'installation (avant, un seul 404 annulait tout le cache).
self.addEventListener("install",e=>{
  e.waitUntil(
    caches.open(CACHE)
      .then(c=>Promise.all(ASSETS.map(a=>c.add(a).catch(()=>null))))
      .then(()=>self.skipWaiting())
  );
});

self.addEventListener("activate",e=>{
  e.waitUntil(
    caches.keys()
      .then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k))))
      .then(()=>self.clients.claim())
  );
});

// Réseau d'abord : les fichiers restent toujours de la même version (plus de mélange ancien/nouveau).
// Sans connexion, l'app s'ouvre depuis le cache.
self.addEventListener("fetch",e=>{
  const req=e.request;
  if(req.method!=="GET"||!req.url.startsWith("http"))return;
  e.respondWith(
    fetch(req).then(res=>{
      if(res&&res.status===200&&res.type==="basic"){const copy=res.clone();caches.open(CACHE).then(c=>c.put(req,copy))}
      return res;
    }).catch(()=>caches.match(req,{ignoreSearch:true}).then(hit=>hit||(req.mode==="navigate"?caches.match("./index.html"):Response.error())))
  );
});
