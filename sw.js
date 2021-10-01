self.addEventListener('push', function (e) {

    var options = {
        body: 'This notification was generated from push',
        icon: 'images/notification-flat.png',
        vibrate: [100, 50, 100],
        data: {
            dateOfArrival: Date.now(),
            primaryKey: 1
        },
        actions: [
            {
                action: 'explore', title: 'Explore this new world',
                icon: 'images/checkmark.png'
            },
            {
                action: 'close', title: 'I don\'t want any of this',
                icon: 'images/xmark.png'
            },
        ]
    };
    e.waitUntil(
        self.registration.showNotification('Push Notification', options)
    );
});