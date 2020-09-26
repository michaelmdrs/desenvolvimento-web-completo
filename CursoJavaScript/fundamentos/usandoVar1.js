{ 
    { 
        { 
            { 
                var sera = 'Será???'
            } 
        } 
    } 
}
console.log(sera)

function teste() { //Quando uma váriavel é definida dentro de uma função seu escopo é local
    var local = 123
    console.log(local)
}
teste()
console.log(local) //Gera erro ao tentar imprimir o resultado