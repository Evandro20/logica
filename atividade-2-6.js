var user = require('readline-sync')
var produto = user.questionInt( " Informe o valor do produto: ")
var pagamento = user.questionInt(" Informe o metodo de pagamento : 1 : A vista em dinheiro ou em cheque, ganha desconto de 10%. 2 : A vista e em cartao de credito ou debito 15% de desconto. 3 : Em duas vezes sem desconto para produtos sem juros. 4 : Em duas vezes com juros de 10%. ")

if( pagamento == 1){
    console.log( " O valor a ser pago e : "+ (produto - (produto*0.10)))
}else if( pagamento == 2){
    console.log(" O valor a ser pago e: " + (produto - (produto*0.15)))
}else if( pagamento == 3){
    console.log( " O valor a ser pago e: " + produto/2)
}else if( pagamento == 4){
    console.log ( " O valor a ser pago e :" +produto*1.10/2)
}else{
    console.log( " Insira um valor valido. ")
}