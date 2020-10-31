// Middleware pattern (chain of responsibility)
const passo1 = (ctx, next) => {
    ctx.valor = 'mid1'
    next()
}

const passo2 = (ctx, next) => {
    ctx.valor2 = 'mid2'
    next()
}

const passo3 = ctx => ctx.valor3 = 'mid3'
// os ... passado como parametro é o operado rest, ele junto todos os paramentro em um unico array
const exec = (ctx, ...middleware) => {
    const execPasso = indice => {
        middleware && indice < middleware.length &&
            middleware[indice](ctx, () => execPasso(indice + 1))
    }
    execPasso(0)
}


const ctx = {}
exec(ctx, passo2, passo1, passo3)
console.log(ctx)