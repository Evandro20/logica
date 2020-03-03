var user = require('readline-sync')
var x = 1
var resultado = 0
while ( x <= 15){
    var numero = user.questionInt( " Insira o " +x+ " numero ")
    x++
    resultado = numero + resultado
    console.log( resultado)
    
}
 var media = resultado /15
console.log( media)