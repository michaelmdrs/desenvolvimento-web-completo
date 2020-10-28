const fs = require('fs')

const caminho = __dirname + '/arquivos.json'

// sincrono... (Não recomendado)
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)

// assincrono...
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}:${config.db.port}`)
})

// Ler o arquivo diretamente sem a necessidade da callback
const config = require('./arquivos.json')
console.log(config.db)

// Ler diretorios
fs.readdir(__dirname, (err, arquivos) => {
    console.log('Conteúdo da pasta...')
    console.log(arquivos)
})
