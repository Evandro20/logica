var user = require('readline-sync')
var base = user.questionInt(" Insira o valor da base : ")
var pot = user.questionInt(" Insira o valor da potencia : ")
var result = 1

while ( pot >= 1){
result = result*base
pot = pot - 1
}
console.log( result)