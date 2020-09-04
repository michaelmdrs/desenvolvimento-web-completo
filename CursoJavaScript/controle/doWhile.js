<<<<<<< HEAD
function gerarNumeroAleatorioEntre(min, max) {
=======
function getInteiroAleatorio(min, max) {
>>>>>>> d079a374730f4ea36ac821afcca010843914f20b
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

<<<<<<< HEAD
let opcao = -1

do {
    opcao = gerarNumeroAleatorioEntre(-1, 10)
    console.log(`O valor escolhido foi ${opcao}`)
} while (opcao != -1)

console.log('Teh+!!!')
=======
let opcao = 0

do {
    opcao = getInteiroAleatorio(-1, 10)
    console.log(`A opção escolhida foi ${opcao}`)
} while (opcao != -1) 

console.log('Até a próxima')
>>>>>>> d079a374730f4ea36ac821afcca010843914f20b
