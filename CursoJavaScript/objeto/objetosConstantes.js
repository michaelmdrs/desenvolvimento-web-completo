const pessoa = { nome: 'Fulano' }
pessoa.nome = 'Sicrano'
console.log(pessoa)

Object.freeze(pessoa) // Congela o objeto a partir do valor atual

// Congelado um objeto a partir da criação
const pessoaConstante = Object.freeze({ nome: 'Homem de Ferro' })
console.log(pessoaConstante)