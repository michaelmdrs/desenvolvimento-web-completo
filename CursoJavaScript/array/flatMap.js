const escola = [{
    nome: 'Turma M1',
    alunos: [{
        nome: 'Néfi',
        nota: 8.1
    }, {
        nome: 'Rebeca',
        nota: 9.2
    }]
}, {
    nome: 'Turma M2',
    alunos: [{
        nome: 'Michael',
        nota: 9.5
    }, {
        nome: 'Patrícia',
        nota: 9.1
    }]
}]

const getNotaDoAluno = aluno => aluno.nota
const getNotasDaTurma = turma => turma.alunos.map(getNotaDoAluno)

const notas1 = escola.map(getNotasDaTurma)
console.log(notas1)

// FlatMap

Array.prototype.flatMap = function(callback) {
    return Array.prototype.concat.apply([], this.map(callback))
}

const notas2 = escola.flatMap(getNotasDaTurma)
console.log(notas2)