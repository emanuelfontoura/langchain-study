import { Runnable, RunnableLambda, RunnableSequence } from "@langchain/core/runnables"

// Criando as functions normais

const AddName = (input: string) => {
    return input + ' Emanuel'
}
const UpperCase = (input: string) => {
    return input.toUpperCase()
}

// Transformando as functions normais em RunnableLambda

const AddNameLambda = RunnableLambda.from(AddName)
const UpperCaseLambda = new RunnableLambda({
    func: UpperCase
})

// Criando o RunnableSequence
const sequence = RunnableSequence.from([
    AddNameLambda, UpperCaseLambda
])

// ou sem o RunnableSequnce
const sequencePipe = AddNameLambda
                    .pipe(UpperCaseLambda)

// Exibindo resultado da sequence

const result = await sequence.invoke('Olá')
const result2 = await sequencePipe.invoke('Olá2')
console.log(result, result2)