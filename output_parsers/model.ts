import { ChatOpenAI } from "@langchain/openai";
import 'dotenv/config'

const model = new ChatOpenAI({
    model: 'gpt-5.6-luna',
    apiKey: process.env.OPENAI_API_KEY
})

export default model