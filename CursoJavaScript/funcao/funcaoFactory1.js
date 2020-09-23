/*
Nesse contexto quando formos criar objetos iria ficar um processo muito massivo

const prod1 = {
    nome: 'Arroz',
    precoProd: 7.80,
}

*/

function criarPessoa() {
    return {
        nome: 'Michael',
        sobrenome: 'Santos',
        idade: 33
    }
}

console.log(criarPessoa())