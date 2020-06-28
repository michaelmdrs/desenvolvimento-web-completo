//Função sem retorno

function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3) //Passa os valores como parametros e imprime a soma
imprimirSoma(2) //Passa o valor de apenas um parametro e imprime o valor e NaN do outro parametro
imprimirSoma(4, 6, 8, 9) //Passa os valores dos parametros e imprime apenas a soma dos parametros declarados e ignora o resto
imprimirSoma() //Imprime NaN

//Função com retorno

function soma(a, b = 1) {
    return a + b //retorna o valor de a + b
}

console.log(soma(4, 6))
console.log(soma(2))