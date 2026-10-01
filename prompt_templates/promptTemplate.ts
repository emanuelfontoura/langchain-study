import { PromptTemplate } from "@langchain/core/prompts"
import { ChatOpenAI } from "@langchain/openai"
import 'dotenv/config'

const template = PromptTemplate.fromTemplate('Explique o {assunto} para um nível {nivel}')
const model = new ChatOpenAI({
    model: 'gpt-5.6-luna',
    apiKey: process.env.OPENAI_API_KEY
})

const chain = template.pipe(model)

const chunks = await chain.stream({assunto: 'idempotência', nivel: 'iniciante'})
for await(const chunk of chunks){
    if(typeof chunk.content === 'string'){
        process.stdout.write(chunk.content)
    }
}