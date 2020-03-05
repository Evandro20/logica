var user = require('readline-sync')
var numero = user.questionInt( ' Digite 1: para consultar saldo. Digite 2: para fazer saque. Digite 3: para fazer deposito. Digite 4: para sair ')
var saldo = 0.00

while ( numero !== 4){
    if ( numero == 1 ){
        console.log ( 'Seu saldo e: ' + saldo)
        numero = user.questionInt( ' Deseja fazer outra operacao? Digite 1: para consultar saldo. Digite 2: para fazer saque. Digite 3: para fazer deposito. Digite 4: para sair ')
    }
    if( numero == 2){
        var saque = user.questionInt( ' Informe o valor do saque: ')
        saldo = saldo - saque
        console.log(' Seu saldo atual e: ' + saldo)
        numero = user.questionInt( ' Deseja fazer outra operacao? Digite 1: para consultar saldo. Digite 2: para fazer saque. Digite 3: para fazer deposito. Digite 4: para sair ')
    }
    if( numero ==3){
        var deposito = user.questionInt( ' Informe o valor do deposito: ')
        saldo = saldo + deposito
        console.log( 'Seu saldo atual e: ' + saldo)
        numero = user.questionInt( ' Deseja fazer outra operacao? Digite 1: para consultar saldo. Digite 2: para fazer saque. Digite 3: para fazer deposito. Digite 4: para sair ')
    }
}