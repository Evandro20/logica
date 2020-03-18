// Faça um algoritmo que receba um texto e imprima ele em letra minuscula novamente.
// Utilize o método toLowerCase()

var user = require('readline-sync')

var palavra = user.question('Digite uma palavra: ').toLowerCase()
console.log(palavra)