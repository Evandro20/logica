var user = require( 'readline-sync')
var pos = user.questionInt(" Digite um numero positivo ou negativo :")

if( pos > 0 ){
    console.log( " Seu resultado e :" + pos*2)
}else if( pos < 0 ){
    console.log(" Seu resultado e :" + pos*3)
}else{
    console.log( " Coloque um numero valido")
}