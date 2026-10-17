/* Habits service worker: lets the app open and work with no connection.
   The cache name comes from the registration URL (sw.js?v=1.1.0). index.html passes APP_VERSION,
   so bumping APP_VERSION there is all it takes to ship an update. */
const VERSION=new URL(self.location.href).searchParams.get('v')||'dev';
const CACHE='habits-'+VERSION;
const PRECACHE=[
  './','./index.html','./manifest.webmanifest','./favicon.ico',
  './icons/icon-192.png','./icons/icon-512.png','./icons/icon-maskable-512.png',
  './icons/apple-touch-icon.png','./icons/favicon-32.png','./icons/favicon-48.png'
];

self.addEventListener('install',event=>{
  event.waitUntil(caches.open(CACHE).then(c=>c.addAll(PRECACHE)).then(()=>self.skipWaiting()));
});

self.addEventListener('activate',event=>{
  event.waitUntil(
    caches.keys()
      .then(keys=>Promise.all(keys.filter(k=>k.startsWith('habits-')&&k!==CACHE).map(k=>caches.delete(k))))
      .then(()=>self.clients.claim())
  );
});

self.addEventListener('fetch',event=>{
  const req=event.request;
  if(req.method!=='GET')return;
  const url=new URL(req.url);
  if(url.origin!==self.location.origin)return;          // only handle this site's own files
  if(req.mode==='navigate'){event.respondWith(networkFirst(req));return}
  event.respondWith(staleWhileRevalidate(req));
});

/* The page itself: use the network when it answers quickly (so updates arrive), otherwise the saved copy. */
async function networkFirst(req){
  const cache=await caches.open(CACHE);
  try{
    const res=await Promise.race([
      fetch(req,{cache:'no-cache'}),
      new Promise((_,reject)=>setTimeout(()=>reject(new Error('timeout')),4000))
    ]);
    if(res&&res.ok)cache.put('./index.html',res.clone());
    return res;
  }catch(err){
    return (await cache.match('./index.html'))||(await cache.match('./'))||Response.error();
  }
}

/* Everything else (icons, manifest): answer from the cache instantly, refresh it in the background. */
async function staleWhileRevalidate(req){
  const cache=await caches.open(CACHE);
  const cached=await cache.match(req);
  const refresh=fetch(req).then(res=>{if(res&&res.ok)cache.put(req,res.clone());return res}).catch(()=>null);
  return cached||(await refresh)||Response.error();
}
