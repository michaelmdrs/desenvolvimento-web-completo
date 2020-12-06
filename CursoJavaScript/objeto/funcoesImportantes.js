const pessoa = {
    nome: 'Rebeca',
    idade: 10,
    peso: 30
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

/* Object.entries(pessoa).forEach(element => {
    console.log(`${element[0]}: ${element[1]}`)
}); */

Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
})

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true,
    writable: false,
    value: '04/04/2008'
})

pessoa.dataNascimento = '11/05/2010'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

// Object.assign (ECMAScript 2015)
const dest = {a: 1}
const dest1 = {b: 2}
const dest3 = {c: 3, a: 4}
const destResult = Object.assign(dest, dest1, dest3)

console.log(destResult)