let contador = 1 //declaração
while (contador <= 10) { //expressão
    console.log(`Contador = ${contador}`)
    contador++ // incremento
}

for (let i = 1; i <= 10; i++) { //declaração, expressão e incremento
    console.log(`i = ${i}`)
}

const notas = [6.7, 7.4, 9.2, 8.1, 7.7]
for (let i = 0; i < notas.length; i++) {
    console.log(`nota = ${notas[i]}`)
}