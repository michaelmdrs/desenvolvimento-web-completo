function criarProduto(nome, preco, fabricante) {
    return {
        nome,
        preco,
        fabricante,
        desconto: 0.5 // valor fixo
    }
}


console.log(criarProduto('Arroz', 8.70, 'Serido'))
console.log(criarProduto('Feijão', 9.80, 'Caicó'))