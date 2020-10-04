let idCliente = [
    {id: 15},
    {id: -1},
    {id: 0},
    {id: 3},
    {id: 12.2},
    { },
    {id: null},
    {id: NaN},
    {id: 'undenfined'}
]

let invalidEntries = 0

function filtesByID(obj) {
    if ('id' in obj && typeof(obj.id) === 'number' && !isNaN(obj.id)) {
        return true
    } else {
        invalidEntries++
        return false
    }
}

let arrByID = idCliente.filter(filtesByID)

console.log('Filtered Array\n ', arrByID)
//

console.log(`Number of Invalid Entries = ${invalidEntries}`)