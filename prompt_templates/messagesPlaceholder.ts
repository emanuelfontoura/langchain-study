import { MessagesPlaceholder, ChatPromptTemplate } from "@langchain/core/prompts"
import { ChatOpenAI } from "@langchain/openai"
import 'dotenv/config'

const model = new ChatOpenAI({
    model: 'gpt-5.6-luna',
    apiKey: process.env.OPENAI_API_KEY
})

const template = ChatPromptTemplate.fromMessages([
    [
        'system',
        'você é um especialista na linguagem {linguagem}'
    ],
    new MessagesPlaceholder("historico"),
    [
        'human',
        'Explique sobre o assunto {assunto}'
    ]
])

const historico = [
    ['human', 'Boa noite chat'],
    ['ai', 'Olá, boa noite. Como posso ajudar?'],
    ['human', 'Me chamo emanuel qual seu nome?'],
    ['ai', 'Olá, Emanuel. Meu nome é ChatGPT. Como posso ajudar?']
]

const chain = template.pipe(model)

const response = await chain.invoke({
    linguagem: 'typescript',
    historico,
    assunto: 'tipagem'
})

console.log(response.content)