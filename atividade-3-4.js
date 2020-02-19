var user = require('readline-sync')
var par = user.question("Insira um numero qualquer :")

var result = 0

while (result <= par ){
    console.log( result)
    result = result + 2
}