// Faça um algoritmo que receba um número e diga se ele é primo ou não
// Utilize o pacote : https://www.npmjs.com/package/prime-number

var user = require('readline-sync')
var primo = require('prime-number')

var numero = user.questionInt('Digite um numero: ')

console.log(primo(numero))
console.log('True = Numero Primo. False = Nao e Primo')