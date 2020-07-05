function boaNoticia(nota) {
    if (nota >= 7) {
        console.log('APROVADO: ' + nota)
    } 
}

boaNoticia(7.5)
boaNoticia(5.5)

function Verdade(valor) {
    if (valor) {
        console.log('É verdade... ' + valor)
    } 
}

Verdade()
Verdade(null)
Verdade(undefined)
Verdade(NaN)
Verdade('')
Verdade(0)

Verdade(-1)
Verdade(' ')
Verdade('?')
Verdade([])
Verdade([1, 4])
