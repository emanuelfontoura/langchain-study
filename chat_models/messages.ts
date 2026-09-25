import { ChatOpenAI } from "@langchain/openai"
import { HumanMessage, SystemMessage, AIMessage } from "langchain"
import 'dotenv/config'

const model = new ChatOpenAI({
    model: 'gpt-5.6-luna',
    apiKey: process.env.OPENAI_API_KEY
})

const messages = [
    new SystemMessage('Você é um especialista em astrofísica'),
    new HumanMessage('Qual a distância entre a terra e o sol?'),
    new AIMessage('O sol está  a 49.600.000 km de dstância da terra'),
    new HumanMessage('E a distância entre a terra e marte?')
]

const response = await model.invoke(messages)

console.log(response)
console.log(response.content)