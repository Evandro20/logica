var user = require('readline-sync')
var num1 = user.question( " Insira o primeiro numero : ")
var num2 = user.question( " Insira o segundo numero : ")
var num3 = user.question( " Insira o terceiro numero: ")

if(num1 == num2, num1 == num3, num2 == num3){
    console.log(" Nao pode inserir numeros iguais, favor digitar numeros diferentes")
}else if( num1 < num2 && num2 < num3){
    console.log(num1,num2,num3)
}else if( num2 < num1 && num1 < num3){
    console.log( num2,num1,num3)
}else if( num3 < num1 && num1 < num2){
    console.log( num3,num1,num2)
}else if( num2 < num3 && num3 < num1){
    console.log( num2,num3,num1)
}else if ( num3 < num2 && num2 < num1){
    console.log( num3,num2,num1)
}
