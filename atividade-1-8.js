var user = require('readline-sync')
var lado1 = user.question( " Digite quantos centimetros tem um dos lados do seu triangulo: ")
var lado2 = user.question( " Digite quantos centimetros tem o outro lado: ")
var lado3 = user.question( " Digite qunatos centimetros tem o ultimo lado: ")

if ( lado1 == lado2 && lado1 == lado3 && lado2 == lado3){
    console.log( " Seu triangulo e Equilatero !")
}else if( lado1 == lado2 || lado1 == lado3){
    console.log ( " Seu triangulo e Isosceles")
}else {
    console.log( " Seu triangulo e  Escaleno")
}