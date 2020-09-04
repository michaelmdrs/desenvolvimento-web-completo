const imprimirResultado = function (nota) {
    switch (Math.floor(nota)) {
        case 10:
        case 9:
<<<<<<< HEAD
            console.log('Quadro de Honra')
            break
        case 8: case 7:
            console.log('Aprovado')
            break
        case 6: case 5: case 4:
            console.log('Recuperação')
            break
        case 3: case 2: case 1:
            console.log('Reprovado')
            break
        default:
            console.log('Nota inválida')
    }
}

imprimirResultado(10)
imprimirResultado(8,9)
imprimirResultado(6.55)
imprimirResultado(-1)
imprimirResultado(11)
imprimirResultado('PASSOU')
imprimirResultado(7)
imprimirResultado(3)
=======
            console.log('QUADRO DE HONRA')
            break
        case 8: case 7:
            console.log('APROVADO')
            break
        case 6: case 5:
            console.log('RECUPERAÇÃO')
            break
        case 4: case 3: case 2: case 1: case 0:
            console.log('REPROVADO')
            break
        default:
            console.log('NOTA INVÁLIDA')
    }
}

imprimirResultado(6.8)
imprimirResultado(8.5)
imprimirResultado(10)
imprimirResultado(-1)
imprimirResultado(3)
>>>>>>> d079a374730f4ea36ac821afcca010843914f20b
