import { RunnablePassthrough } from "@langchain/core/runnables"

const passThrough = new RunnablePassthrough()

const result = await passThrough.invoke('Olá')

console.log(result)