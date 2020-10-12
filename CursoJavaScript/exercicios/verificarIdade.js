function verificarIdade(nomePessoa, anoNascimento) {
    let idade = 2018 - anoNascimento

    if ( idade >= 18 ) {
        return nomePessoa + ' é MAIOR de idade.'
    } else {
        return nomePessoa + ' ainda não tem 18 anos.'
    } 
}

let nome = 'Nara'
let nascimento = 1998
console.log(verificarIdade(nome, nascimento))