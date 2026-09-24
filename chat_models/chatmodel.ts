import { ChatOpenAI } from "@langchain/openai";
import 'dotenv/config'

const model = new ChatOpenAI({
    model: 'gpt-5.6-luna'
})

const response = await model.invoke('O que vc é capaz de fazer?')
console.log(response)
console.log(response.content)