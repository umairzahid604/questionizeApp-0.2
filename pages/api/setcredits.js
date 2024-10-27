// import { generateToken } from '@/utils/auth';
import { setCookie, getCookie } from 'cookies-next';
import { generateToken, verifyToken } from '@/utils/auth';

import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function (req, res) {
    if (req.method != "POST") return res.status(400).json({ error: { message: "Method not Allowed!", } });

    const { id, credits, plan } = req.body


    try {
        const intent = await stripe.paymentIntents.retrieve(id);
        if (!intent) return res.status(400).json({ error: { message: "Invalid id" } });

        const cookies = getCookie(process.env.PLAN_COOKIE, { req, res });
        let data = await verifyToken(cookies)

        let remainingCredits = 0;
        let key = ""

        if (!data.error && data.payload.n != undefined) {
            remainingCredits = data.payload.n
            key = data.payload.k
        }

        let token = await generateToken({ n: credits + remainingCredits, t: plan, k: key })
        setCookie(process.env.PLAN_COOKIE, token, {
            req,
            res,
            secure: process.env.NODE_ENV === 'production', // Use secure cookie in production
            maxAge: 60 * 60 * 24 * 365, // Cookie will expire in 3 days
            sameSite: 'strict', // The cookie is only sent for same-site requests
            path: '/', // Set the cookie to the root path,
            httpOnly: true,
        });

        // let token = jwt.sign({ user: apiKey }, process.env.JWT_SECRET);
        res.status(200).json({ success: { message: "Success" } });

    } catch (error) {
        // Consider adjusting the error handling logic for your use case
        console.log(error)
        res.status(400).json({ error: { message: "An error occured" } });

    }



}


