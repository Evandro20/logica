var user = require('readline-sync')

var nome = user.question( ' Insira seu nome: ')

console.log(nome.charAt(2))