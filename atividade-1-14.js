var user = require('readline-sync')
var num1 = user.questionInt(" Digite um numero : ")
var num2 = user.questionInt(" Digite outro numero para dividir com o anterior : ")

if( num1 % num2  == 0 ){
    console.log( " Seu numero e divisivel! ")
}else{
    console.log( " Por favor digite um numero valido! ")
}