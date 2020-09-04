function Pessoa() {
    this.idade = 0

    const self = this
    setInterval(function () {
        self.idade++
        console.log(self.idade)
    }/*.bind(this)*/, 1000)
}

new Pessoa

/*
function Cliente() {
    this.idade = 0

    setInterval(function() {
        this.idade++ // Incrementando o valor da idade
        console.log(this.idade)
    }, 1000)
}

new Cliente

*/
