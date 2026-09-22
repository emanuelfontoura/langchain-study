import { RunnableLambda, RunnablePassthrough } from "@langchain/core/runnables"

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