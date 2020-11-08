let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
numbers[numbers.length] = 10 // primeira maneira de add elemento (não recomendado)

// Maneira mais simples de adicionar elemento
numbers.push(11)
numbers.push(12, 13, 14, 15, 16, 17, 18, 19, 20)

/* 
   Adicionar elemento na primeira posição do array
   Os métodos push e pop permitem que um array emule
   uma estrutura de dados stack básica.
*/

for (let i = numbers.length; i >= 0; i--) {
    numbers[i] = numbers[i-1]
}
numbers[0] = -1
numbers.unshift(-2, -3)

