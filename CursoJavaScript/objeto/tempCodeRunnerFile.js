sumario() {
        let valorConsolidade = 0
        this.lancamentos.forEach(l => {
            valorConsolidade += l.valor
        })
        return valorConsolidade
    }