import { ChatOpenAI } from "@langchain/openai"
import { SystemMessage, HumanMessage, AIMessage } from "langchain"
import 'dotenv/config'
import promptSync from 'prompt-sync'

const model = new ChatOpenAI({
    model: 'gpt-5.6-luna',
    apiKey: process.env.OPENAI_API_KEY
})

const conversa: (SystemMessage | HumanMessage | AIMessage)[] = [new SystemMessage('Você é um assistente que responde ao usuário com detalhes e exemplos')] 

const prompt = promptSync()

while (true){
    const entradaUsuario = prompt('Entrada usuário: ')
    if (entradaUsuario.toUpperCase() === 'Q') break;
    conversa.push(new HumanMessage(entradaUsuario))
    const response = await model.invoke(entradaUsuario)
    conversa.push(new AIMessage(response.content))
    console.log(`Resposta IA: ${response.content}`)
} 

conversa.map((message: (SystemMessage | HumanMessage | AIMessage)) => {
    if(!(message instanceof SystemMessage)) console.log(message.content)
})