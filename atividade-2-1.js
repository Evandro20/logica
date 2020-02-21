var user = require('readline-sync')
var x = user.question( " Digite o valor da sua compra em reais : ")
var real1 = user.questionInt( " Quantas moedas de 1 real tem em seu cofrinho?: ")
var cent50 = user.questionInt( " Quantas moedas de 50 centavos tem em seu cofrinho?: ")
var cent25 = user.questionInt( " Quantas moedas de 25 centavos tem em seu cofrinho?: ")
var cent10 = user.questionInt( " Quantas moedas de 10 centavos tem em seu cofrinho?: ")
var cent5 = user.questionInt( " Quantas moedas de 5 centavos tem em seu cofrinho?: ")
var cent1 = user.questionInt( " Quantas moedas de 1 centavo tem em seu cofrinho?: ")

real1 = 1*real1
cent50 = 0.50*cent50
cent25 = 0.25*cent25
cent10 = 0.10*cent10
cent5 = 0.05*cent5
cent1 = 0.01*cent1
resultado = real1 + cent50 + cent25 + cent10 + cent5 + cent1

if( resultado >= x){
    console.log ( " Seu valor e suficiente para a compra! ")
}else{
    console.log ( " Seu valor e insuficiente para a compra! ")
}