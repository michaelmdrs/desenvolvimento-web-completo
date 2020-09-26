const saudacao = 'Opa' // contexto léxico Global

function exec() {
    const saudacao = 'Ola' // contexto léxico 2
    return saudacao
}

//objetos são grupos aninhados de pares nome/valor

const cliente = {
    nome: 'Michael',
    idade: 32,
    peso: 80,
    endereco: {
        logradouro: 'Rua ',
        numero: 123
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)