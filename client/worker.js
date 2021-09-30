console.log("Service worker loaded...");

self.addEventListener('psuh',e=>{
    const data = e.data.json();
    console.log("Push Received...");
    self.registration.showNotification(data.title,{
        body:'Notified by Isuru Adikaram',
        icon:'https://img.icons8.com/material-outlined/24/000000/link--v1.png'
    });
})