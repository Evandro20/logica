// Faça um programa que receba uma palavra e diga se existe vogais ou não. 
// Utilize o método indexOf()

var user = require('readline-sync')
var palavra = user.question(' Digite uma palavra: ').toLowerCase()

if(palavra.indexOf('banana')){
    console.log( ' A palavra tem vogal!')
}else{
    console.log('A palavra nao tem vogal')
}