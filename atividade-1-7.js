var user = require('readline-sync')

var lados = user.question( " Quantos lados tem seu poligono regular entre os numeros 3 e 5? ")
var altura = user.question( " Quantos centimetros tem um dos lados? ")
var base = altura
if( lados == 3){
    console.log(" Seu Poligono regular e um Triangulo e area e :" + (base*altura)/2 )
}