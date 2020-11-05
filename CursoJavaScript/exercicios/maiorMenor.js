function maiorOuIgual(primaryNumber, secondNumber) {
    if (primaryNumber === secondNumber) {
        return true
    } else if (primaryNumber > secondNumber) {
        return true
    } else {
        return false
    }
}

console.log(maiorOuIgual(0, 0))
console.log(maiorOuIgual(0, '0'))
console.log(maiorOuIgual(5, 1))