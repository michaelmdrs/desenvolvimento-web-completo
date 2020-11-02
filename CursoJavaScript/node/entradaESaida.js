const anonimo = process.argv.indexOf('-a') !== -1
//console.log(anonimo) // pega qualquer parametro a partir da chamada no console

if(anonimo) {
    process.stdout.write('Fala Anônimo!\n')
    process.exit() //encerra o processo
} else {
    process.stdout.write('Informe o seu nome: ')
    process.stdin.on('data', data => { // quando entramos com o dado (O Enter, vai junto com a váriavel data)
        const nome = data.toString().replace('\n', '')

        process.stdout.write(`Fala ${nome}!\n`)
        process.exit()
    })
}