import { ChatOpenAI } from "@langchain/openai"
import { SystemMessage, HumanMessage, AIMessage } from "langchain"
import 'dotenv/config'
import promptSync from 'prompt-sync'

async function conversarComModel() {
    const model = new ChatOpenAI({
        model: 'gpt-5.6-luna',
        apiKey: process.env.OPENAI_API_KEY
    })

    const conversa: (SystemMessage | HumanMessage | AIMessage)[] = [new SystemMessage('Você é um assistente que responde ao usuário com detalhes e exemplos')] 

    const prompt = promptSync()

    while (true){
        const entradaUsuario = prompt('Entrada usuário (digite Q para parar): ')
        if (entradaUsuario.toUpperCase() === 'Q') break;

        conversa.push(new HumanMessage(entradaUsuario))

        const allChunks: string[] = []
        for await(const chunk of await model.stream(conversa)){
            const content = chunk.content
            if(typeof content === 'string'){
                allChunks.push(content)
                process.stdout.write(content)
            }
        }
        const respostaCompleta = allChunks.join("")
        conversa.push(new AIMessage(respostaCompleta))
    } 
    
    conversa.map((message: (SystemMessage | HumanMessage | AIMessage)) => {
        if(message.type === 'system') return
        console.log(`${message.type.toUpperCase()}: ${message.content}`)
    })
}

conversarComModel()