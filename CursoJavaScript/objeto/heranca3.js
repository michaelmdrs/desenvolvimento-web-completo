const pai = { nome: 'Usuario', corCabelo: 'Preto' }

const filha1 = Object.create(pai)
filha1.nome = 'Anna'
console.log(filha1.corCabelo)

const filha2 = Object.create(pai, {
    nome: { value: 'Rebeca', writable: false, enumerable: true }
})

console.log(filha2.nome)
filha2.nome = 'Patricia' // Não consegue alterar o valor
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`)

console.log(Object.keys(filha1))
/*
for(let key in filha2) {
    console.log(key)
}
*/

for(let key in filha2) {
    filha2.hasOwnProperty(key) ?
    console.log(key) : console.log(`Por herança ${key}`)
}