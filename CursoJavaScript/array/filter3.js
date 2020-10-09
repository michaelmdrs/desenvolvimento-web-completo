Array.prototype.filter2 = function(callback) {
    const newArray = []
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            newArray.push(this[i])
        }
    }
    return newArray
}

const produtos = [
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'iPad Pro', preco: 4199, fragil: true},
    {nome: 'Teclado sem fio', preco: 79.90, fragil: false},
    {nome: 'Copo de Vidro', preco: 12.49, fragil: true},
    {nome: 'Copo de Plástico', preco: 18.99, fragil: false},
]

const produtosEletronicos = [
    {nome: 'Monitor Xiaomi 21"', preco: 1.800, eletronico: true},
    {nome: 'Mesa Digitalizadora Xiaomi', preco: 349.80, eletronico: true}
]

const produtoCaro = produto => produto.preco >= 1500
const produtoFragil = produto => produto.fragil

console.log(produtos.filter2(produtoCaro).filter2(produtoFragil))