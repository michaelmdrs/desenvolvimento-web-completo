// novo recusrso do ES2015

const pessoa = {
    nome: 'Nefi',
    idade: 12,
    endereco: {
        logradouro: 'Rua um doi tres',
        numero: 4508
    }
}

const { nome, idade} = pessoa // retira da estrutura de códigos atributos específico
console.log(nome, idade)

const { nome: n, idade: i} = pessoa // cria uma váriavel para extrair os dados dos atributos escolhidos.
console.log(n, i)

const {sobrenome, bemHumorada = true} = pessoa
console.log(sobrenome, bemHumorada)

const { endereco: { logradouro, numero, cep } } = pessoa
console.log(logradouro, numero, cep)