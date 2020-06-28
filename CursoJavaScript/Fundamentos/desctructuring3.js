function rand({min = 0, max = 1000}) {
    const valor = Math.random() * (max-min) + min
    return Math.floor(valor)
}

const obj = { max: 50, min: 20 }
console.log(rand(obj))
//console.log(rand({ max: 50, min: 20 }))
console.log(rand({ min: 900 })) //gera valor aleatório a partir do 900, pois o valor máximo já foi definido
console.log(rand()) //gera valor aleatório entre 0 e 1000