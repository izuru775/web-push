var push = require('web-push');

let vapidKeys = {
    publicKey: 'BEdEOAU17F1AHeegDnnWtX4fHamX88SkS6AvJQiK_35qwdOmaUGiSW1UVCWsG7ondh7Sk7lpRoqdCpnSPcN73cQ',
    privateKey: 'xjR9GuSkq_iwPiwWhbZ3N-Z__A7_oyKCLHnjoZlES2w'
}

push.setVapidDetails('mailto:test@test.com', vapidKeys.publicKey, vapidKeys.privateKey);

// Usually the list of people in the db where we want to send the notification
let sub = {
    endpoint: "https://fcm.googleapis.com/fcm/send/e5YAdYO5F30:APA91bGieNXYQC7cGtPUGl8rz1Wi9y-j0O5DjyBY2QfDmnh14Ss5qL-UknqCO9MN2whmqIVaZclzmS8jSnf7YBxA7EpsTyfWjOhO5WKF1Lg8C9AQdnlK1TfSX6KbmPlz9R06Hi_o5qnO",
    expirationTime: null,
    keys: {
        p256dh: "BNwqk11Y61cwCMWsc-8ZZ7ATXCfBWmc2NuwV-7nyic3sFXkyyEeuM5XRPN92Vdg_FsHijxBLVIfIVBAVKjdpZXo",
        auth: "fI4tolPZeqyVBrTIJ2ZwWw"
    }
}

push.sendNotification(sub, 'test message');