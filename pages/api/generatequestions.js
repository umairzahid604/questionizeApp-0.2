import { Configuration, OpenAIApi } from "openai";
import { generateToken, verifyToken } from '@/utils/auth';
import { getCookie, setCookie } from "cookies-next";
import { GoogleGenerativeAI } from "@google/generative-ai"

export default async function (req, res) {


  const { options, useKey } = req.body

  const cookies = getCookie(process.env.PLAN_COOKIE, { req, res });

  let data = await verifyToken(cookies)

  if (data.error) return res.status(400).json({ error: { message: "UnAuthorized!" } });

  if (!useKey && data.payload.n <= 0) return res.status(400).json({ error: { message: "You are out of credits!" } });

  if (useKey && data.payload.k == "") return res.status(400).json({ error: { message: "ApiKey required!" } });

  const configuration = new Configuration({
    apiKey: useKey ? data.payload.k : process.env.OPENAI_API_KEY
  });

  const openai = new OpenAIApi(configuration);

  if (!configuration.apiKey) {
    res.status(500).json({
      error: {
        message: "APIkey is not Configured",
      }
    });
    return;
  }

  try {

    let result = await GenerateQuestions(options, data.payload.k)


    if (!useKey) {
      await UpdatePlanCookie(req, res)
    }

    res.status(200).json({ result: result });

    // return VoiceOverScriptRes


    // const completion = await openai.createChatCompletion({
    //   model: "gpt-3.5-turbo-16k",
    //   temperature: 0.7,
    //   max_tokens: 1000,
    //   top_p: 1,
    //   frequency_penalty: 0,
    //   presence_penalty: 0,
    //   messages: [
    //     { "role": "system", content: `extract relevent questions from given text` },
    //     { "role": "user", content: `"${options.text}" extract possible short relevent ${options.questionsTone} ${options.questionsQty}` },
    //   ]
    // })

    // console.log("completed ai ...")
    // let result = completion.data.choices[0].message.content
    // result = splitIntoSentences(result)
    // console.log(result)
    // res.status(200).json({ result: completion.data.choices[0].text.trim().split("?").filter((a) => a.trim() != "").map((a) => a + "?") });


  } catch (error) {
    // Consider adjusting the error handling logic for your use case
    if (error.response) {

      console.error(error.response.status, error.response.data);
      res.status(error.response.status).json({ error: { message: error.response.data } });

    }
    else {

      console.error(`Error with OpenAI API request: ${error.message}`);
      res.status(500).json({

        error: {
          message: 'An error occurred during your request.',
        }
      });
    }
  }
}


async function UpdatePlanCookie(req, res) {
  const cookies = getCookie(process.env.PLAN_COOKIE, { req, res });
  let data = await verifyToken(cookies)

  let remainingCredits = 0;
  if (!data.error && data.payload.n != undefined) {
    remainingCredits = data.payload.n == 0 ? 0 : data.payload.n - 1
  }

  let token = await generateToken({ n: remainingCredits, t: data.payload.t, k: data.payload.k })
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

function splitIntoSentences(text) {
  // Remove the numbering pattern "1. ", "2. ", etc., and then split the text into sentences based on ".", "!", or "?"
  const sentences = text.replace(/\d+\.\s/g, '').split(/(?<=\.|\?|!)\s/g);
  return sentences;
}


async function GenerateQuestions(options, geminikey) {
  const generationConfig = {
    temperature: 2,
    topP: 0.95,
    topK: 40,
    responseMimeType: "application/json",
  };


  const genAI = new GoogleGenerativeAI(geminikey);
  const model = genAI.getGenerativeModel({ generationConfig: generationConfig, model: "gemini-1.5-flash-8b", });

  let prompt = `
extract relevent questions from given text:
"${options.text}" 

-----------------------------
extract possible short relevent ${options.questionsTone} ${options.questionsQty}

return array


`

  let questionsres = await model.generateContent(prompt)
  questionsres = questionsres.response.candidates[0].content.parts[0].text
  let questions = JSON.parse(questionsres)

  return questions
}

// write outline for ${input} ${promt}
