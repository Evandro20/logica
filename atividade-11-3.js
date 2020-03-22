// Faça um algoritmo que receba um número e diga se ele é par ou ímpar
// Utilize o pacote :  https://www.npmjs.com/package/is-odd

var user = require('readline-sync')
var impar_par = require('is-odd')

var numero = user.questionInt('Digite um numero: ')

console.log(impar_par(numero))
console.log('True = Impar e False = Par')