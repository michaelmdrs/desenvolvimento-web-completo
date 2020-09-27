let aprovados = new Array('Nara', 'Néfi', 'Anna')
console.log(aprovados)

aprovados = ['Nara', 'Néfi', 'Anna']
console.log(aprovados)


aprovados[3] = 'Michael'
aprovados.push('Rebeca')
console.log(aprovados.length)

aprovados[4] = 'Rebeca'
console.log(aprovados.length)
console.log(aprovados[5] === undefined)

console.log(aprovados)
aprovados.sort()
console.log(aprovados)

delete aprovados[1]
console.log(aprovados[1])
console.log(aprovados[2])

aprovados = ['Nara', 'Néfi', 'Patricia']
aprovados.splice(1, 1), 
console.log(aprovados)