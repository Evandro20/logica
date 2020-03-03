var user = require('readline-sync')
var x = 1
var par = 0
var impar = 1
while ( x <= 5){
    var numero = user.questionInt( " Insira o "+x+" numero: ")
    if ( numero % 2 == 0){
        par = numero + par
    } else{
        impar = numero * impar
    }
    x++
}
console.log ( " A soma dos pares e: " + par)
console.log ( " A multiplicacao dos impares e: "+ impar )