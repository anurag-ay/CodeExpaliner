import OPENAI_SECRET_KEY from "../env_vars/_evnVars.js";
import beautifyResponse from "../utils/beautifyResponse.js";

import OpenAI from "openai";
const openai = new OpenAI({ apiKey: OPENAI_SECRET_KEY });

async function explainCode(data) {
  const reqConfigForApi = {
    messages: [
      {
        role: "system",
        content: `Analyze and explain the code :${data}`,
      },
    ],
    model: "gpt-3.5-turbo",
  };

  try {
    const completion = await openai.chat.completions.create(reqConfigForApi);
    const resContent = completion.choices[0].message.content;
    const beautifiedText = beautifyResponse(resContent);

    return beautifiedText;
  } catch (err) {
    console.log(err.message);
  }
}

export default explainCode;
