// Faça um algoritmo que receba uma palavra, após isso ele remove todas as vogais dessa palavra e imprime a palavra novamente porém sem as vogais.
// EX: Entrada banana
// O algoritmo imprime : 
// Bnn
// Utilize o método split() para quebrar a string e depois montar ela sem vogais.

var user = require('readline-sync')
var palavra = user.question('Digite uma palavra: ')
var vogala = palavra.split('a')
var vogale = palavra.split('e')
var vogali = palavra.split('i')
var vogalo = palavra.split('o')
var vogalu = palavra.split('u')
console.log(vogala)
console.log(vogale)
console.log(vogali)
console.log(vogalo)
console.log(vogalu)