// const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
require('dotenv').config();


const app = express();

app.use(cors());
app.use(express.json());

const stripe = require('stripe')(process.env.SECRET_KEY);
const PORT = process.env.PORT;


app.get('/', (request, response) => response.status(200).send('Hello world!'));


app.post('/payments/create', async (req, res) => {
  const total = req.query.total;
  try {
    console.log('Payment Request Received for this amount is:', total);

    const paymentIntent = await stripe.paymentIntents.create({
      amount: parseInt(total),
      currency: 'usd',
    });

    res.status(201).send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ error: 'An error occurred while processing the payment.' });
  }
});


app.listen(PORT, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Server listening");
    }
  });


// exports.api = functions.https.onRequest(app);
