var user = require( 'readline-sync')
var num = user.question( 'Digite um numero : ')
str = ""
c = 1

while( c <=num){
    str=str+"*"
    console.log ( str )
c++
}