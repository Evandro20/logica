var user = require('readline-sync')
var c = 1
var dados = user.questionInt( " Insira a " + c +" idade: ")
var num = dados

while ( c <= 7 ){
    var dados = user.questionInt( " Insira a " + c +" idade: ")
    if ( dados <= num){
        num = dados 
    }
    c++
}console.log ( " A menor idade e : " + num)