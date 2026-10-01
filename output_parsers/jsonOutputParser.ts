import { ChatPromptTemplate, MessagesPlaceholder } from '@langchain/core/prompts'
import model from './model.js'
import { JsonOutputParser } from '@langchain/core/output_parsers'

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

const parser = new JsonOutputParser()

const chain = template.pipe(model).pipe(parser)

const response = await chain.invoke({assunto: 'programação', historico, pergunta: 'cite 3 linguagens de programação e retorne um json contendo as 3 linguagens escolhidas sendo as keys o numero da linguagem (um, dois ou tres)'})

console.log(response.um)