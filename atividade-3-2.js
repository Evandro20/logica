var user = require('readline-sync')
var multi1 = user.questionInt(" Digite um numero maior que zero: ")
var multi2 = user.questionInt(" Digite outro numero maior que zero: ")
var result = 0
var result2 = 0
while(result < multi2){
    result2 = result2 + multi1
    result = result + 1
}
console.log( result2)

