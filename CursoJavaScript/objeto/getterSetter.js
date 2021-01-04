const sequence = {
    _valor: 1, // Convenção (é dita como privada)
    get valor() { return this._valor++ },
    set valor(valor) { 
        if (valor > this._valor) {
            this._valor = valor
        }
     }
}

console.log(sequence.valor, sequence.valor)
sequence.valor = 100
console.log(sequence.valor, sequence.valor)
sequence.valor = 50
console.log(sequence.valor, sequence.valor)
