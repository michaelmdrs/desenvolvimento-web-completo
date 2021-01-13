// Object.preventExtensions
const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'Promoção'
})
console.log('Extensível', Object.isExtensible(produto))

produto.nome = 'Caneta'
produto.descricao = 'Caneta Esferográfica Preta'
delete produto.tag
console.log(produto)

// Object.seal
const pessoa = { nome: 'Qualquer', idade: 34 }
Object.seal(pessoa)
console.log('Selado:', Object.isSealed(pessoa))

pessoa.sobrenome = 'Outro'
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa)

// Object.freeze = selado + valores constantes