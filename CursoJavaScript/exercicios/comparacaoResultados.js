let pontuacoes = '10 20 20 8 25 3 0 30 33'

function avaliacaoPontuacoes (pontos) {
    let pontosPartida = pontuacoes.split(', ')
    let qtaQuebraDeRecords = 0
    let piorJogo = 1
    let maiorPontuacao = pontos[0]
    let menorPontuacao = pontos[0]

    for (let i = 1; i < pontosPartida.length; i++) {
        if (pontosPartida[i] > maiorPontuacao) {
            maiorPontuacao = pontosPartida[i]
            qtaQuebraDeRecords++
        } else if (pontosPartida[i] < menorPontuacao) {
            menorPontuacao = pontosPartida[i]
            piorJogo++
        }
    }
    return [qtaQuebraDeRecords, piorJogo]
}

console.log(avaliacaoPontuacoes(pontuacoes))