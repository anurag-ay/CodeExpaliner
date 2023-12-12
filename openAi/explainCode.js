const OpenAI = require("openai");
const openai = new OpenAI({ apiKey: process.env.OPENAI_SECRET_KEY });
const beautifyResponse = require("../utils/beautifyResponse");

async function explainCode(data) {
  const reqConfigForApi = {
    messages: [
      {
        role: "system",
        content: `Analyze and expalin the code :${data}`,
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

module.exports = explainCode;
