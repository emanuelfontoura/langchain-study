import { RunnableLambda } from "@langchain/core/runnables"

const uppercase = RunnableLambda.from(
    (input: string) => input.toUpperCase()
)

const result = await uppercase.invoke('Hello')

console.log(result)