// não aceita repetição e não é indexada
const times = new Set()
times.add('São Paulo')
times.add('Botafogo').add('Flamengo').add('Fluminense').add('Vasco')
times.add('Corinthians')
times.add('Palmeiras')
times.add('Santos')
times.add('São Paulo')

console.log(times)
console.log(times.size)
console.log(times.has('São Paulo'))
times.delete('Flamengo')
console.log(times.has('Flamento'))

const nomes = ['Michael', 'Patrícia', 'Néfi', 'Nara', 'Néfi']
const nomeSet = new Set(nomes)
console.log(nomeSet)
