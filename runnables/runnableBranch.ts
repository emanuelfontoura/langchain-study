// RunnableBranch.from([
//     [ condição, runnable ],
//     [ condição, runnable ],
//     default
// ])

import { RunnableBranch } from "@langchain/core/runnables"

const numeros = RunnableBranch.from([
    [
        (input: number) => input > 0,
        (input: number) => `O número ${input} é maior que 0`
    ],
    [
        (input: number) => input === 0,
        (input: number) => `O número ${input} é igual a 0`
    ],
    [
        (input: number) => input < 0,
        (input: number) => `O número ${input} é menor do que 0`
    ],
    (input: number) => `O valor ${input} não é um número`
])

const result1 = await numeros.invoke(10)
const result2 = await numeros.invoke(0)
const result3 = await numeros.invoke(-10)

console.log(result1, result2, result3)