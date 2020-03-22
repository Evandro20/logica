// Escreva uma função que recebe dois parâmetros numéricos e retorne o menor número.
// Solicite dois números para o usuário e forneça como argumento para esta função.
// Escreva o resultado da função na tela dizendo qual menor número.

var user = require('readline-sync')
var num1 = user.questionInt('Digite um numero: ')
var num2 = user.questionInt('Digite outro numero: ')

function menorNumero(num1, num2) {
    if (num1 < num2) {
        console.log('O menor numero e: ' + num1)
    } else {
        console.log('O menor numero e: ' + num2)
    }
    return ''
}
console.log(menorNumero(num1, num2))