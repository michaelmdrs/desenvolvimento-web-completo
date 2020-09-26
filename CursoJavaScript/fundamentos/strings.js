const escola = 'Pr3vocacional'

console.log(escola.charAt(4)) // retorna o caractere
console.log(escola.charCodeAt(5)) // retorna o identificado unicode 
console.log(escola.indexOf('3')) // exibe a posição em que se encontra a string

console.log(escola.substring(2)) // continua a leitura a partir do valor passado
console.log(escola.substring(1, 13))

console.log('Escola '.concat(escola).concat('!')) // concateno o literal sem declara-lo
console.log(escola.replace(3, 'e')) // muda a string conforme valor passado

console.log('Néfi, Nara, Patricia'.split(','))