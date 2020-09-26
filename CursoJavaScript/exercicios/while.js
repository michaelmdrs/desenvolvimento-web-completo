//While é a estrutura de repetição adequada para quando se tem uma quantidade indeterminada de repetições.

function getInteiroAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min //Calcula o mínimo e o máximo
    return Math.floor(valor)
}

let opcao = 0

while (opcao != 1) {
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log(`Opção escolhida foi ${opcao}.`)
}

console.log('Até a próxima!')