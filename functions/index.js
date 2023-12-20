require('dotenv').config();
// const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');

const stripe = require('stripe')(process.env.SECRET_KEY);


const app = express();

app.use(cors());
app.use(express.json());


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
        clientSecret: paymentIntent.client_secret
    });  
  } 
  catch (error) {
    console.log(error.message);
  }
});


// Listen
app.listen(10000, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("app listening");
    }
  });


// exports.api = functions.https.onRequest(app);
