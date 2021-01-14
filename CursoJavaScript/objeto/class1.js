class lancamento {
    constructor(nome = 'Qualquer', valor = 0) {
        this.nome = nome
        this.valor = valor
    }
}

class cicloFinanceiro {
    constructor(mes, ano) {
        this.mes = mes
        this.ano = ano
        this.lancamentos = []
    }

    addLancamentos(...lancamentos) { 
            lancamentos.forEach(l => this.lancamentos.push(l))
    }
    sumario() {
        let valorConsolidado = 0
        this.lancamentos.forEach(l => {
            valorConsolidado += l.valor
        })
        return valorConsolidado
    }
}

const salario = new lancamento('Salário', 4500)
const contaDeLuz = new lancamento('Luz', 190)
const internet = new lancamento('Brisanet', 136)

const contas = new cicloFinanceiro(6, 2020)
contas.addLancamentos(salario, contaDeLuz, internet)
console.log(contas.sumario())