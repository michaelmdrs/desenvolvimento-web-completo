const alunos = [
    {nome: 'João', nota: 7.3, bolsista: false},
    {nome: 'Maria', nota: 9.2, bolsista: true},
    {nome: 'Francisco', nota: 9.8, bolsista: false},
    {nome: 'Joana', nota: 8.7, bolsista: true}
]

// Desafio 1: Todos os alunos são bolsistas?
const alunosBolsistas = (resultado, bolsista) => resultado && bolsista
console.log(alunos.map(a => a.bolsista).reduce(alunosBolsistas))

// Desafio 2: Algum aluno é bolsista?
const alunoBolsista = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map(a => a.bolsista).reduce(alunoBolsista))