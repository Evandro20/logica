var user = require( 'readline-sync')
var palavra = user.question( "Digite uma palavra: ")
var linha = palavra.length

c = 0
while( c < linha){
    console.log ( palavra.charAt(c))
    c++
}

