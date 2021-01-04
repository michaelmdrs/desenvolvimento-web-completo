// let e const
{
    var a = 1
    let b = 2
    console.log(b)
}
console.log(a)

// Template String
const produto = 'Notebook'
console.log(`O valor do ${produto}, está cada dia mais caro!`)

// Destructuring
const [l, e, ...tras] = 'Root'
console.log(l, e, tras)

const [x, y] = [1, 2, 3]
console.log(x, y)

const {idade: i, nome: n} = {nome: 'Michael', idade: 34}
console.log(i, n)