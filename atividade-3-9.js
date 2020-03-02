var user = require('readline-sync')
var palavra = user.question ( " Insira uma palavra: ")
var linha = palavra.length
while ( linha >= 0){
    console.log ( palavra.charAt(linha))
    linha = linha -1
}