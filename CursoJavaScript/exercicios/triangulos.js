function Triangulo(ladoA, ladoB, ladoC) {
    if (ladoA == ladoB && ladoB == ladoC && ladoC == ladoA) {
        console.log('Equilátero')
    } else if (ladoA != ladoB && ladoB != ladoC && ladoC != ladoA) {
        console.log('Escaleno')
    } else {
        console.log('Isósceles')
    }
}

Triangulo(1,45,4)