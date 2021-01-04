var a = 5
var b = 10

function tag(strings, ...values) {
    console.log(strings[0])
    console.log(strings[1])
    console.log(values[0])
    console.log(values[1])

    return 'Bazinga!'
}

tag`Hello ${ a + b } world ${ a * b }`