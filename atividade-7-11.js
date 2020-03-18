// Faça um programa que receba uma palavra e verifica se a palavra está cometendo o seguinte erro de português
// Antes de “p” ou “b” devemos usar M
// Caso a palavra esteja errada informar o erro
// Se não dizer que a palavra está certa. 
// Utilize o método includes()

var encontrar = []
var user = require('readline-sync')
var palavra = user.question('Digite uma palavra: ')
encontrar.push(palavra)
if (encontrar.includes('bomba')) {
    console.log(" A palavra esta correta! ")
} else {
    console.log(' A palavra esta errada! ')
}
