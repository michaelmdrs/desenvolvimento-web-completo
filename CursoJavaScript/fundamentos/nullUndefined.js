let valor // variavel não inicializada
console.log(valor)

valor = null // ausência de valor
console.log(valor)
// console.log(valor.toString()) // gera error

const produto = {}
console.log(produto.preco)

produto.preco = 4.50
console.log(produto)

produto.preco = null // sem preço
console.log(!!produto.preco)
console.log(produto)