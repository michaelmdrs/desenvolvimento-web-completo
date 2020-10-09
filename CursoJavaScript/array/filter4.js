/*
const numbers = [1, 4, 5, 9, 14, 23]

const doubleNumbers = numbers.map(num => num * 2)

console.log(doubleNumbers)

const fahrenheit = [0, 32, 45, 50, 75, 80, 120]

const celsius = fahrenheit.map(elem => Math.round( (elem - 32) * 5 / 9))

console.log(celsius)
*/

/*

const yetAnotherArray = [ 2, 3, 4, 5, 22, 19, 2, 5, 45, 57, 5, 37, 44, 21, 3 ]

const unique = yetAnotherArray.filter( (elem, index, arr) => arr.indexOf(elem) === index)
console.log(unique)

*/

const rockets = [
    { country: 'Russia', launches: 32 },
    { country: 'US', launches: 23 },
    { country: 'China', launches: 16 },
    { country: 'Europe', launches: 7},
    { country: 'India', launches: 4},
    {country: 'Japan', launches: 3}
]

const totalLaunches = rockets.reduce( ( prevVal, valueActual ) => prevVal + valueActual.launches, 0 )
console.log(totalLaunches)