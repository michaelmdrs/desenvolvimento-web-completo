/**
 * const tecnologias = new Map()
tecnologias.set('react', { framework: false })
tecnologias.set('angular', { framework: true })

console.log(tecnologias.react) // method invalid for get value
console.log(tecnologias.get('react').framework) // method valid for get value

const chavesVariadas = new Map([
    [function () {}, 'Function'],
    [{}, 'Objeto'],
    [123, 'Number'],
])

chavesVariadas.forEach((vl, ch) => {
    console.log(ch, vl)
})

console.log(chavesVariadas.has(123))
chavesVariadas.delete(123)
console.log(chavesVariadas.has(123))
console.log(chavesVariadas.size)
 */

 const escalacaoTime = new Map([
     [1, 'Goleiro'],
     [2, 'Zagueiro 1'],
     [2, 'Zagueiro 2'],
     [3, 'Lateral Esquerdo'],
     [4, 'Lateral Direito'],
     [5, 'Segundo Volante'],
     [6, 'Primeiro Volante'],
     [7, 'Meia de Criação'],
     [8, 'Ponta de Lança Direito'],
     [9, 'Ponta de Lança Esquerdo'],
     [10, 'Centroavante']
 ])

 escalacaoTime.forEach((vl, ch) => {
     console.log(ch, vl)
 })

 