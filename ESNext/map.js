const tecnologias = new Map()
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