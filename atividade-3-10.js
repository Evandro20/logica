var user = require ('readline-sync')
var numero = user.question( " Insira um numero: ")
var c = 0
while ( c >= 0){
    if( numero % c == 0){
        console.log (c)
    }
     c++  
}
