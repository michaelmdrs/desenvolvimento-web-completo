// Coleção dinâmica de pares chave/valor
const produto = new Object
produto.nome = 'Cadeira'
produto['marca do produto'] = 'Generica'
produto.cor = 'Preta'
produto.tipo = 'Gamer'
produto.preco = 550

console.log(produto)

const carro = {
    modelo: 'C3',
    valor: 30000,
    proprietario: {
        nome: 'Fulano',
        idade: '34',
        endereco: {
            logradouro: 'Rua na Fofoca Esquina',
            numero: 37,
            bairro: 'XXIII',
            cidade: 'Caicó',
            uf: 'RN'
        }
    },
    condutores: [{
        nome: 'Sicrano',
        idade: 30,
        cnh_condutor: '002295222',
        cidade: 'Xaxim',
        endereco: 'Rua blablabla',
        numero: 208,
        telefone: '999999999'
    }, {
        nome: 'Beltrano',
        idade: 45,
        cnh_condutor: '123409843',
        cidade: 'Xerem',
        endereco: 'Rua buuuhbuuuh',
        numero: 37,
        telefone: '888888888'
    }],
    calcularValorSeguro: function() {
        //...
    }
}

carro.proprietario.endereco.numero = 1506

console.log(carro)