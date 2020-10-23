const moduloA = require('../../modulaA')

console.log(moduloA.ola)
console.log(moduloA.bemVindo)

const http = require('http')
http.createServer((req, res) => {
    res.write('Boa Noite')
    res.end()
}).listen(8080)