import { Configuration, OpenAIApi } from "openai";
import jwt from 'jsonwebtoken';
import { getCookie } from 'cookies-next';

require('dotenv').config()

export default async function (req, res) {
    console.log(req.body)

    try {
        let decoded = jwt.verify(req.body.token, process.env.PRIVATE_KEY)
        res.json({ status: 200, apiKey: decoded.user })
    } catch (err) {
        res.json({ status: 404 })
    }



}
