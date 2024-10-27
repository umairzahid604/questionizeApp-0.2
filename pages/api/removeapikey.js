import { setCookie, getCookie,deleteCookie } from 'cookies-next';
import { generateToken, verifyToken } from '@/utils/auth';

export default async function (req, res) {

    try {
        const cookies = getCookie(process.env.PLAN_COOKIE, { req, res });
        let data = await verifyToken(cookies)

        if (data.error) return res.status(400).json({ error: { message: "No ApiKey founded!" } });

        if (data.payload.n == 0) {
            deleteCookie(process.env.PLAN_COOKIE, { req, res });
            res.status(200).json({ message: "ApiKey Removed Successfully !", status: 200 });
            
            return
        }

        let token = await generateToken({ n: data.payload.n, t: data.payload.t, k: "" })
        setCookie(process.env.PLAN_COOKIE, token, {
            req,
            res,
            secure: process.env.NODE_ENV === 'production', // Use secure cookie in production
            maxAge: 60 * 60 * 24 * 365, // Cookie will expire in 365 days
            sameSite: 'strict', // The cookie is only sent for same-site requests
            path: '/', // Set the cookie to the root path,
            httpOnly: true,
        });

        res.status(200).json({ message: "ApiKey Removed Successfully !", status: 200 });

    } catch (error) {
        // Consider adjusting the error handling logic for your use case
        if (error.response) {

            console.error(error.response.status, error.response.data);
            res.status(error.response.status).json({ error: { message: "Incorrect API key provided" } });

        }
        else {

            console.error(`Error with OpenAI API request: ${error.message}`);
            res.status(500).json({
                message: 'Ooops! Error occurred while API key validating. please try again!',
            });
        }
    }



}
