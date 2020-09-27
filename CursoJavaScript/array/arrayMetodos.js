const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']

pilotos.pop()
console.log(pilotos)

pilotos.push('Rubinho')
console.log(pilotos)

pilotos.shift() // Remove o primeiro elemento do array
console.log(pilotos)

pilotos.unshift('Hamilton')
console.log(pilotos)

// splice pode adicionar e remover elementos

//adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

//remover
pilotos.splice(3, 1)
console.log(pilotos)

//Slice pega um pedaço do array
const algunsPilotos1 = pilotos.slice(2) // novo array a partir do indice passado
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4)
console.log(algunsPilotos2)