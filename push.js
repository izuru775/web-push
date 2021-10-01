var push = require('web-push');

let vapidKeys = {
    publicKey: 'BEdEOAU17F1AHeegDnnWtX4fHamX88SkS6AvJQiK_35qwdOmaUGiSW1UVCWsG7ondh7Sk7lpRoqdCpnSPcN73cQ',
    privateKey: 'xjR9GuSkq_iwPiwWhbZ3N-Z__A7_oyKCLHnjoZlES2w'
}

push.setVapidDetails('mailto:test@test.com', vapidKeys.publicKey, vapidKeys.privateKey)

// Usually the list of people in the db where we want to send the notification
let sub = {};

push.sendNotification(sub,'test message')