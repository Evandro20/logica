// Faça um algoritmo que receba um texto e imprima ele em letra maisucula novamente. 
// Utilize o método toUpperCase()

var user = require('readline-sync')

var palavra = user.question( "Digita uma palavra: ").toUpperCase()
console.log(palavra)