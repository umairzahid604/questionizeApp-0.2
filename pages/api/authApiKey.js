import { Configuration, OpenAIApi } from "openai";
import { setCookie, getCookie } from 'cookies-next';
import { generateToken, verifyToken } from '@/utils/auth';
import { GoogleGenerativeAI } from "@google/generative-ai"

export default async function (req, res) {
  const apiKey = req.body.apiKey
  const inputText = "say just hello"


  const generationConfig = {
    temperature: 2,
    topP: 0.95,
    topK: 40,
  };


  const genAI = new GoogleGenerativeAI(apiKey);
  const model = genAI.getGenerativeModel({ generationConfig: generationConfig, model: "gemini-1.5-flash-8b", });



  // const configuration = new Configuration({
  //   apiKey: apiKey,
  // });

  // const openai = new OpenAIApi(configuration);

  // if (!configuration.apiKey) {
  //   res.status(500).json({
  //     error: {
  //       message: "ApiKey is not Configured !",
  //     }
  //   });
  //   return;
  // }


  try {
    // const completion = await openai.createChatCompletion({
    //   model: "gpt-3.5-turbo",
    //   temperature: 0.7,
    //   max_tokens: 20,
    //   top_p: 1,
    //   frequency_penalty: 0,
    //   presence_penalty: 0,
    //   messages: [
    //     { "role": "user", content: `say hello` },
    //   ]
    // })

    let test = await model.generateContent("just say hello!")


    const cookies = getCookie(process.env.PLAN_COOKIE, { req, res });
    let data = await verifyToken(cookies)

    if (!data.error) {
      let token = await generateToken({ n: data.payload.n, t: data.payload.t, k: apiKey })
      setCookie(process.env.PLAN_COOKIE, token, {
        req,
        res,
        secure: process.env.NODE_ENV === 'production', // Use secure cookie in production
        maxAge: 60 * 60 * 24 * 365, // Cookie will expire in 3 days
        sameSite: 'strict', // The cookie is only sent for same-site requests
        path: '/', // Set the cookie to the root path,
        httpOnly: true,
      });
    }
    else {
      let token = await generateToken({ n: 0, t: "", k: apiKey })
      setCookie(process.env.PLAN_COOKIE, token, {
        req,
        res,
        secure: process.env.NODE_ENV === 'production', // Use secure cookie in production
        maxAge: 60 * 60 * 24 * 365, // Cookie will expire in 3 days
        sameSite: 'strict', // The cookie is only sent for same-site requests
        path: '/', // Set the cookie to the root path,
        httpOnly: true,
      });
    }

    res.status(200).json({ message: "ApiKey Configured Successfully !", status: 200 });

  } catch (error) {
    // Consider adjusting the error handling logic for your use case
    if (error.response) {

      console.error(error.response.status, error.response.data);
      res.status(error.response.status).json({ error: { message: "Incorrect API key provided" } });

    }
    else {

      console.error(`Error with API request: ${error.message}`);
      res.status(500).json({
        message: 'Ooops! Error occurred while API key validating. please try again!',
      });
    }
  }



}
