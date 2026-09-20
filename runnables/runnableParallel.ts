import { RunnableLambda, RunnableParallel } from "@langchain/core/runnables"

const addName = RunnableLambda.from((input: string) => input + ' Emanuel')
const uppercase = RunnableLambda.from((input: string) => input.toUpperCase())

const parallel = await RunnableParallel.from({
    name: addName,
    uppercase: uppercase
})

const result = await parallel.invoke('olá')
console.log(result)