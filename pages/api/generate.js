import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const basePromptPrefix = 
`First check whether the given input is programming language or not. 
if
it is not programming language then send a message that given text is not a code. Just give this message and not the psuedo code.
else 
Write me a Psuedo Code for this source code without comments or anything. Just Psuedo Code. 

 Source Code : 
`
const generateAction = async (req, res) => {

  const language = req.body.selectedLanguage;
  // Run first prompt
  console.log(language);
  console.log(`API: ${basePromptPrefix}${req.body.userInput}`);

  const baseCompletion = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt: `Programming Language: ${language}${basePromptPrefix}${req.body.userInput}\n`,
    temperature: 0.7,
    max_tokens: 250,
  });
  
  const basePromptOutput = baseCompletion.data.choices.pop();

  res.status(200).json({ output: basePromptOutput });
};

export default generateAction;