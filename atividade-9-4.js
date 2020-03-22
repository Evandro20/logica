// Faça um procedimento que recebe, por parâmetro, um valor N e calcula e escreve a tabuada de 1 até N. Mostre a tabuada na forma:
// 1 x N = N
// 2 x N = 2N
// ...
// N x N = N2
// Após isso solicite o usuário um número e forneça o argumento do usuário para a função.

var user = require('readline-sync')
var num = user.questionInt('Digite um numero: ')
var x = 1
function tabuada(num) {
    while (x <= num) {
        var resultado = x * num
        console.log(x + 'X' + num + '=' + resultado)
        x++
    }
    return 'Finalizou'
}
console.log(tabuada(num))