// Faça uma programa que receba 4 notas e calcule a média e apresente ao usuário a média no final.
// Utilize o pacote : https://www.npmjs.com/package/median
var user = require('readline-sync')
var media = require('median')
var notas = []
for(x = 1; x <= 4; x++){
    var nota = user.questionFloat('Digite a '+ x + ' nota: \n')
    notas.push(nota)
}
var valor = media(notas)
console.log("A media e: " + valor)