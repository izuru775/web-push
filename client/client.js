const publicVapidKey ='BMBvbaQdTnBIX37FX-3fWhWG8an1z2GmhSDzPQrAJVXwqbwvdfONUyWbR5xqDyui3BUtCISUPsXnzEkPrwbdEWw';

// Check for service worker
if('serviceWorker' in navigator){
    send().catch(err=>console.error(err));
}
// Segister SW, Register push, Send push
async function send(){
    // Register service worker
    console.log("registering service worker.....");
    const register =await navigator.serviceWorker.register('/worker.js',{
        scope:'/'
    });
    console.log('service worker registered...');

    // Register push
    console.log("")
}