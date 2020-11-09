for (let letra of 'São Paulo') {
    console.log(letra)
}

const assuntosEcma = ['Map', 'Set', 'Promisse']

for (let i in assuntosEcma) {
    console.log(i)
}

for (let assunto of assuntosEcma) {
    console.log(assunto)
}

const assuntosMap = new Map([
    ['Map', { abordados: true }],
    ['Set', { abordados: true }],
    ['Promisse', { abordados: false }]
])

for (let assunto of assuntosMap) {
    console.log(assunto)
}
// apenas as chaves
for (let chave of assuntosMap.keys()) {
    console.log(chave)
}
// apenas os valores
for (let valor of assuntosMap.values()) {
    console.log(valor)
}

for (let [ch, vl] of assuntosMap.entries()) {
    console.log(ch, vl)
}