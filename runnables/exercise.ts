import { RunnableLambda, RunnableParallel, RunnablePassthrough, RunnableSequence } from "@langchain/core/runnables"

const chain = new RunnablePassthrough()
            .pipe(
                RunnablePassthrough.assign({
                    num_caract: RunnableLambda.from((input: any) => input.input.length)
                })
            )
            .pipe(
                RunnableParallel.from(
                    {
                        transformar_entrada: RunnableLambda.from((input: any) => input.input + ' Conseguiu'),
                        passar_para_frente: new RunnablePassthrough()
                    }
                )
            )
            .pipe(new RunnablePassthrough())

const result = await chain.invoke({input: 'Parabéns Você'})
console.log(result)