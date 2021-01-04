// Jeito não convencional
let averageTempJan = 31.9
let averageTempFeb = 35.3
let averageTempMar = 40.7
let averageTempApr = 38.4
let averageTemMay = 30.1
let averageTempJu = 21.9

// Percorrendo array
let cidadesMaisQuentes = [
    'Mossoró',
    'Caicó',
    'Jucurutu',
    'Jardim de Piranhas',
    'São João do Sabugi',
    'Jardim do Seridó'
]

for (let i = 0; i < cidadesMaisQuentes.length; i++) {
    console.log(cidadesMaisQuentes[i])
}

// Maneira correta de explicitar um array

let averageTemp = []

/*averageTemp.push([averageTempJan])

console.log(`Temperatura de Janeiro: ${averageTempJan}°c`)

averageTemp[0] = 31.9
averageTemp[1] = 35.3
console.log(averageTemp)
*/

