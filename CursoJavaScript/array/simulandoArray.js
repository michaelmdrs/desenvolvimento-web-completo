const quaseArray = {0: 'Néfi', 1: 'Nara', 2: 'Patricia'}
console.log(quaseArray)
Object.defineProperty(quaseArray, 'toString', {
    value: function() {return Object.values(this)},
    enumerable: false
})

console.log(quaseArray[0])

const meuArray = ['Néfi', 'Nara', 'Patricia']
console.log(quaseArray.toString(), meuArray)