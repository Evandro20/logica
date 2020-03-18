// Faça um algoritmo que verifica se uma string comece com a palavra google 
// Caso comece imprima que a palavra é valida se não diga que não conhece o serviço.
// EX: entrada Google drive
// O algoritmo imprime
//      Palavra valida

// Utilize o método startsWith() 

var user = require('readline-sync')
var palavra = user.question ('Digite uma palavra: ').toLowerCase()
if(palavra.startsWith('google')){
    console.log('Palavra Valida! ')
}else{
    console.log('Palavra Invalida! ')
}