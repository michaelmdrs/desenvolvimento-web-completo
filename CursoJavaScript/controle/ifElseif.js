Number.prototype.entre = function (inicio, fim) {
    return this >= inicio && this <= fim
}

const imprimirResultado = function (nota) {
    if (nota.entre(9, 10)) {
        console.log('QUADRO DE HONRA')
    } else if (nota.entre(7, 8.99)) {
        console.log('APROVADO')
    } else if (nota.entre(5, 6.99)) {
        console.log('RECUPERAÇÃO')
    } else if (nota.entre(1, 4.99)) {
        console.log('REPROVADO')
    } else if (nota.entre(0, 0)) {
        console.log('ALUNO SEM NOTA')
    } else {
        console.log('NOTA INVÁLIDA')
    }
}

imprimirResultado(9.5)
imprimirResultado(8)
imprimirResultado(5.5)
imprimirResultado(3)
imprimirResultado(0)
imprimirResultado(-1)
imprimirResultado(11)
