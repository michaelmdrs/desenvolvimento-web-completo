function getInteiroAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = 0

while (opcao != -1) {
    opcao = getInteiroAleatorioEntre(-1, 10)
<<<<<<< HEAD
    console.log(`Opção escolhida foi ${opcao}.`)
=======
    console.log(`Opção escolhida foi ${opcao}`)
>>>>>>> d079a374730f4ea36ac821afcca010843914f20b
}

console.log('Até a próxima')