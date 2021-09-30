const express = require('express');
const webpush = require('web-push');
const path = require('path'); // Define a static path for client side

const app = express();

// Set static path
app.use(express.static(path.join(__dirname,'client')));

// Generated vapid keys using   ./node_modules/.bin/web-push generate-vapid-keys
const publicVapidKey ='BMBvbaQdTnBIX37FX-3fWhWG8an1z2GmhSDzPQrAJVXwqbwvdfONUyWbR5xqDyui3BUtCISUPsXnzEkPrwbdEWw';
const privateVapidKey = 'oyXYM2TXnuPk6iOMNVa5g2rYwYcO3z4hjc_8YR4FBgE';


webpush.setVapidDetails('mailto:test@test.com',publicVapidKey,privateVapidKey);

// Subscribe route
app.post('/subscribe',(req,res)=>{
    // Get pushSubscription object
    const subscription = req.body;

    // Send 201-resource created
    res.status(201).json({})

    // Create payload
    const payload =JSON.stringify({title:'Push Test'});

    // Pass object into sendNotification
    webpush.sendNotification(subscription,payload).catch(err=>{console.error(err)})

})

const port =5000;

app.listen(port,()=>{console.log(`Server started on port ${port}`)});