var push = require('web-push');

let vapidKeys = {
    publicKey: 'BEdEOAU17F1AHeegDnnWtX4fHamX88SkS6AvJQiK_35qwdOmaUGiSW1UVCWsG7ondh7Sk7lpRoqdCpnSPcN73cQ',
    privateKey: 'xjR9GuSkq_iwPiwWhbZ3N-Z__A7_oyKCLHnjoZlES2w'
}

push.setVapidDetails('mailto:test@test.com', vapidKeys.publicKey, vapidKeys.privateKey);

// Usually the list of people in the db where we want to send the notification
let sub = {
    endpoint: "https://fcm.googleapis.com/fcm/send/fr17RyolaoY:APA91bEBns9T0nysPv0MdBSmPoQ_Ky9ukSVZLZMKwhfJ5aNDa1NmFvTmqXHjz_Db5E2Fgn6gceDX4bVZqhNCGRZOW4oO_TcDEIubw6WEbrHEI3452t_6D666D6HvyKRVlthRAHRD1Zjf",
    expirationTime: null,
    keys: {
        p256dh: "BJwBI4qpw9dBKNrHfe_JH_3o02eAs1fYNewi-F9ila9wTa6SZ8CEGPqZCemEtjcut2NVviDSC68i2zVwIO5n1Nc",
        auth: "NWw2f8_vEt1kdwZzspte6g"
    }
}

push.sendNotification(sub, 'test message');