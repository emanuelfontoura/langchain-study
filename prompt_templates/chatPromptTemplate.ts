import { ChatPromptTemplate } from "@langchain/core/prompts"
import { ChatOpenAI } from "@langchain/openai"
import 'dotenv/config'

const model = new ChatOpenAI({
    model: 'gpt-5.6-luna',
    apiKey: process.env.OPENAI_API_KEY
})

const template = ChatPromptTemplate.fromMessages([
    [
        'system',
        'Você é um especialista na linguagem de programação: {linguagem}'
    ],
    [
        'human',
        'Explique {assunto} para mim'
    ]
])

const chain = template.pipe(model)

const response = await chain.invoke({linguagem: 'Typescript', assunto: 'objetivo do typescript'})

console.log(response.content)