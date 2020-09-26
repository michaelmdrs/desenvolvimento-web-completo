console.log(Math.ceil(6.2))

const objt1 = {}
objt1.nome = 'Bola'
console.log(objt1.nome)

function objeto (nome) { // Torna publica o acesso a função
    this.nome = nome
}

const objeto2 = new objeto('Cadeira')
const objeto3 = new objeto('Mesa')

console.log(objeto2.nome) //Acessando os atributos que foram definidos
console.log(objeto3.nome)