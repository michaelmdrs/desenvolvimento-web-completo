let numero = 1
{ //let dentro do escopo
    let numero = 2
    console.log('Dentro =', numero)
}
console.log('Fora =', numero)

//Variaveis definida com a palavra reservada VAR tem escopo global e função.

//Variaveis definida com a palavra reservada LET tem escopo global, função e de bloco.