/**
 * Quando uma variável VAR é declarada ela sofre o hoisting ou "isçamento" traduzindo.
 * no exemplo abaixo a variável 'a' passa a valer apenas para linha 3 pois comentando ela o valor
 * de a é desconsiderado pelo primeiro console. 
 */

console.log('a =', a)
var a = 2
console.log('a =', a)

console.log('b = ', b)
let b = 2
console.log('b = ', b)