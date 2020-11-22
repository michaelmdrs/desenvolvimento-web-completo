let a = 1
console.log(a)


const primeiroElemento = string => string[0] 
const primeiraLetra = string => string[0]
const letraMinuscula = letra => letra.toLowerCase()

let p = new Promise(function(cumprirPromessa) {
    cumprirPromessa(['Michael', 'Patricia', 'Néfi', 'Nara'])
})  

    .then(primeiroElemento)
    .then(primeiraLetra)
    .then(letraMinuscula)
    .then(console.log)