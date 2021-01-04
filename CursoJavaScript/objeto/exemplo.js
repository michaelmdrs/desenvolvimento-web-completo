const armario = { nome: 'Parede', cor: 'Branco', preco: 1200 }

const hack = Object.create(armario)
hack.nome = 'cubo'
hack.preco = 350
console.log(`Produto: ${hack.nome}, está na promoção por R$ ${hack.preco}`)