var user = require("readline-sync")
var numero = user.questionInt( " Insira um numero: ")
var multi = 10
while ( multi > 0){
    var resultado = numero * multi
    console.log ( numero + " X "+multi+" = "+resultado)
    multi--
}