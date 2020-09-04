const notas = [6.7, 7.4, 9.8, 8.1, 7.7]
// Let antes do indicie [i] é uma boa pratica
for (i in notas) {
    console.log(i, notas[i])
}

const pessoa = {
    nome: 'Néfi',
    sobrenome: 'Santos',
    idade: 12,
    peso: 48,
    altura: 1.59
}
// Let antes do atributo é uma boa pratica
for (let atributo in pessoa) {
    console.log(`${atributo} = ${pessoa[atributo]}`)
}