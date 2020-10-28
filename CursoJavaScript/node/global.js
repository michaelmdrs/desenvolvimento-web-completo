// console.log(global)
/* O objeto freeze congela o objeto global da aplicação */
global.MinhaApp = Object.freeze({
    saudacao() {
        return 'Aprendendo NodeJs'
    },
    nome: 'Sistema Web'
})