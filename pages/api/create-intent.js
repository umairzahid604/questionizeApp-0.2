// pages/api/checkout.js
import Stripe from 'stripe';

const stripe = new Stripe(`${process.env.STRIPE_SECRET_KEY}`);

// Now you can use the `stripe` object to interact with the Stripe API

export default async function handler(req, res) {


  if (req.method === "POST") {
    try {
      // Create a Stripe PaymentIntent
      const intent = await stripe.paymentIntents.create({
        amount: req.body.amount, // The amount in cents
        currency: "usd",
        payment_method_types: ['card']
      });

      res.status(200).json({ clientSecret: intent.client_secret, id: intent.id });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
}
