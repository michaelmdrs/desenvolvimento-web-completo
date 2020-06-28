/*PALAVRAS RESERVADAS BREAK / CONTINUE
    Ambas são usadas para realizar desvios de fluxos
    breack - é usada com finalidade de parar o código em determinado ponto, sendo que 
    usando o break em bloco if sua atuação é nula, sendo válida no bloco mais próximo
    no exemplo abaixo ele verifica a condição no bloco for.
    continue - é usada para dar continuidade no código diferentemente do break ele interrompe
    a condição corrente e passa para próxima repetição.*/

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (x in numeros) {
    if (x == 5) {
        break // break realiza desvio de fluxo, porém não sobre o bloco if e sim do bloco mais próximo no caso o FOR. 
    }
    console.log(`${x} = ${numeros[x]}`) // imprimi o resultado do índices e do array
}

for (y in numeros) {
    if (y == 5) {
        continue
    }
    console.log(`${y} = ${numeros[y]}`)
}

externo: //Rotulo
for (a in numeros) {
    for (b in numeros) {
        if (a == 2 && b == 3) break externo
        console.log(`Par = ${a}, ${b}`)
    }
}

console.log('FIM')
