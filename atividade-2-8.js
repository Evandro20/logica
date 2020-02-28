var user = require('readline-sync')
var palavra = user.question( " Escreva alguma palavra: " )
if( palavra[0].toUpperCase(0) === palavra[0]){
    console.log ( " Maiuscula ")
}else{
    console.log( " Minuscula")
}