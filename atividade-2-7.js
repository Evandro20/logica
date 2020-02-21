var user = require('readline-sync')
var adivinha = user.question( " Adivinhe a Senha : ")
var senha = 'batatafrita'

if( adivinha == 'batatafrita'){
    console.log( " ACESSO PERMITIDO ")
}else{
    console.log( " ACESSO NEGADO ")
}