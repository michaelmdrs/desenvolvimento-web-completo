const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])
console.log(valores[4])

valores[4] = 10

media = (valores[0] + valores[1] + valores[2] + valores[3] + valores[4]) / 5

console.log(media)

console.log(valores.length)

valores.push({id: 5}, false, null, 'Usuario') // inseri valores no array
console.log(valores)

console.log(valores.pop()) /// retira o último valor do array
delete valores[6]

console.log(valores)

console.log(typeof valores)