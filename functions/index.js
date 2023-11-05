const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');

const stripe = require('stripe')('sk_test_51O7kkAGlAOBS4r9MaRjXZiuzNBJeGowqjXi81k2M4eGH6s44N3l1nwjbywQhoPI9kAbGkpDRWrm6UbYtivj0RU0N00IA214EsI');


const app = express();

app.use(cors({
    origin: true
}));
app.use(express.json());


app.get('/', (request, response) => response.status(200).send('Hello world!'));


app.post('/payments/create', async (req, res) => {
    const total = req.query.total;

    console.log('Payment Request Received for this amount is', total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: 'usd',
    });

    res.status(201).send({
        clientSecret: paymentIntent.client_secret
    });

});


// Listen
exports.api = functions.https.onRequest(app);


//http://127.0.0.1:5001/clone-6fc62/us-central1/api


// const {onRequest} = require("firebase-functions/v2/https");
// const logger = require("firebase-functions/logger");

