import { ChatPromptTemplate, MessagesPlaceholder } from "@langchain/core/prompts"
import 'dotenv/config'
import { StringOutputParser } from "@langchain/core/output_parsers"
import model from './model.js'

const template = ChatPromptTemplate.fromMessages([
    [
        'system',
        'vc é um especialista no assunto {assunto}'
    ],
    new MessagesPlaceholder('historico'),
    [
        'human',
        '{pergunta}'
    ]
])

const historico = [
    ['human', 'Boa noite chat, me chamo Emanuel'],
    ['ai', 'Boa noite Emanuel, como posso ajudar?']
]

const parser = new StringOutputParser()

const chain = template.pipe(model).pipe(parser)

const response = await chain.invoke({assunto: 'programação', historico, pergunta: 'cite 3 linguagens de programação'})

console.log(response)