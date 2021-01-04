// Operador ...rest(juntar) / spread(espalhar)
// usar rest com parâmetro de função

// usar spread com objeto
const funcionario = {nome: 'Maria', salario: 1234.90}
const clone = {ativo: true, ...funcionario}
console.log(clone)

// usar o spread com array
const grupoA = ['Néfi', 'Nara', 'Patrícia']
const grupoFinal = ['Michael', 'Samuel', 'Rebeca', ...grupoA, 'Familia']
console.log(grupoFinal)