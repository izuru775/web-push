var push = require('web-push');

let vapidKeys = {
    publicKey: 'BEdEOAU17F1AHeegDnnWtX4fHamX88SkS6AvJQiK_35qwdOmaUGiSW1UVCWsG7ondh7Sk7lpRoqdCpnSPcN73cQ',
    privateKey: 'xjR9GuSkq_iwPiwWhbZ3N-Z__A7_oyKCLHnjoZlES2w'
}

push.setVapidDetails('mailto:test@test.com', vapidKeys.publicKey, vapidKeys.privateKey);

// Usually the list of people in the db where we want to send the notification
let sub = {
    endpoint: "https://updates.push.services.mozilla.com/wpush/v2/gAAAAABhV…qFZlJdrix9-k6La5rPZ9jSuSbKBRp6OEIzNM2nOtj7D5OtwrClJBLcJ_lAYw",
    keys: { 
        auth: "PnXWbCB2U-VFER3efwW3RA",
        p256dh: "BNvcmqLM_uKLTVdALPyRSnCLSPq0Bu4ry8kBqiB1xc17fdD5-9GCezpU-IGRVqi4ACcW5273LyyJryC7-cu2HQ4" 
    }
}

push.sendNotification(sub, 'test message');