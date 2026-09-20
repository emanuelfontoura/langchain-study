import { RunnableLambda, RunnablePassthrough, RunnableSequence } from "@langchain/core/runnables"
import { context } from "langchain"

const uppercase = RunnableLambda.from((input: any) => `${input.nome} ${input.sobrenome}`.toUpperCase())

const chain = RunnablePassthrough.assign({
    nomeCompleto: (input) => `${input.nome} ${input.sobrenome}`,
    nomeCompletoMaiusculo: uppercase
})

const result = await chain.invoke({
    nome: 'Emanuel',
    sobrenome: 'Victor'
})

console.log(result)

// uso "real"
const chain = RunnableSequence.from([
    RunnablePassthrough.assign({
        context: asyn (input) => return await retriever.invoke(input.question)
    }),
    prompt,
    model
])