const imprimirResultado = function (nota) {
    switch (Math.floor(nota)) {
        case 10:
        case 9:
            console.log('QUADRO DE HONRA')
            break
        case 8:
            console.log('APROVADO')
            break
        case 7:
            console.log('RECUPERAÇÃO')
            break
        case 6:
            console.log('REPROVADO')
            break
        case 0:
            console('ALUNO SEM NOTA!')
    }
}

imprimirResultado()