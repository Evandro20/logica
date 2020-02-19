function sortfunction(a,b){
    return (a-b);
}
var user = require('readline-sync')
var num1 = user.question( " Insira o primeiro numero : ")
var num2 = user.question( " Insira o segundo numero : ")
var num3 = user.question( " Insira o terceiro numero: ")

if(num1 == num2, num1 == num3, num2 == num3){
    console.log(" Nao pode inserir numeros iguais, favor digitar numeros diferentes")
}else{
    var numeros = [num1, num2, num3]
    console.log(numeros.sort(sortfunction));
}
