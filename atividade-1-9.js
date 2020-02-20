var user = require('readline-sync')
var lado1 = user.question( " Informe o angulo de um lado: ")
var lado2 = user.question( " Informe o segundo angulo: ")
var lado3 = user.question( " Infrome o terceiro angulo: ")

if( lado1 == 90 || lado2 == 90 || lado3 == 90){
    console.log( " Seu triangulo e Retangulo ")
}else if( lado1 > 90 || lado2 > 90 || lado3 > 90){
    console.log( " Seu triangulo e Obtusangulo ")
}else if( lado1 < 90 && lado2 < 90 && lado3 < 90){
    console.log( " Seu triangulo e Acutangulo ")
}