let aprovados = new Array('Nara', 'Néfi', 'Anna') // Forma não recomendada
console.log(aprovados)

aprovados = ['Nara', 'Néfi', 'Anna'] // Notação literal (Recomendada)
//console.log(aprovados)
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3]) // Não existe porém o JS retorna valor undefined

aprovados[3] = 'Michael' // Adiciona um novo elemento
aprovados.push('Rebeca') // A forma mais usual para adicionar um valor ao array
console.log(aprovados.length)

aprovados[4] = 'Rebeca'
console.log(aprovados.length)
console.log(aprovados[5] === undefined)

console.log(aprovados)
aprovados.sort() // Ordena o array pela ordem alfabética ou númerica
console.log(aprovados)

delete aprovados[1]
console.log(aprovados[1])
console.log(aprovados[2])

aprovados = ['Nara', 'Néfi', 'Patricia']
aprovados.splice(1, 1)
// aprovados.splice(1, 1, 'Néfi')
console.log(aprovados)