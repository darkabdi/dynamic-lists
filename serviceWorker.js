self.addEventListener('install', event =>{
    console.log('service worker installed')
})

self.addEventListener('fetch', event =>{
event.respondWith(fetch(event.request))
})