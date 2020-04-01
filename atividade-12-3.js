// Criar um módulo que calcule a média de uma coleção de números. 
// Para isso crie um arquivo chamado calcula-media.js. 
// No módulo exporte uma função media(arr) que recebe como argumento um array de números. 
// A função deve iterar por esses números e retornar sua média. 
// Após isso no arquivo da atividade importe o módulo criado e solicite ao usuário 3 números, utilize o módulo
// criado para calcular a média e no final imprima o resultado para o usuário.
 var user = require('readline-sync')
 var encontrarMedia = require('./calcularMedia.js')

 var numeros = []

 for( x = 1; x <= 3; x++){
     var numero = user.questionFloat('Digite o ' + x + ' numero: ')
     numeros.push(numero)
 }
 var tamanho = numeros.length
 var media = (encontrarMedia.calculaMedia(numeros) / tamanho)

 console.log(' A media e :' + media)