var user = require('readline-sync')
var maior = null
var menor = null
var numeroinserido = user.questionInt(" Digite um numero :  ")
var menos1 = numeroinserido === -1

while (!menos1) {
    if (menor === null) {
        menor = numeroinserido
    }
    if (maior === null) {
        maior = numeroinserido
    }
    if (numeroinserido < menor) {
        menor = numeroinserido
    }
    if (numeroinserido > maior) {
        maior = numeroinserido
    }
    user = require('readline-sync')
    numeroinserido = user.questionInt(" Digite um numero :  ")
    menos1 = numeroinserido === -1
}
console.log(" O maior numero e: " + maior)
console.log(" O menor numero e: " + menor)