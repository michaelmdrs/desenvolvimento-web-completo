const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const germany = fun => fun.pais === 'Germany'
const sexoFeminino = fun => fun.genero === 'F'
const maiorSalario = (func, funcAtual) => {
    return func.salario < funcAtual.salario ? func : funcAtual
}

axios.get(url).then(response => {
    const funcionarios = response.data
    
    const func = funcionarios
    .filter(germany)
    .filter(sexoFeminino)
    .filter(maiorSalario)

    console.log(func)
})
