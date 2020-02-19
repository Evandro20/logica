var user = require('readline-sync')
var nota1 = user.questionInt(" Vamos calcular o valor da sua media aritmetica. Digite sua primeira nota : ")
var nota2 = user.questionInt(" Segunda nota: ")
var nota3 = user.questionInt(" Terceira nota: ")

if(((nota1 + nota2 + nota3)/3) >= 7){
    console.log( " ALUNO APROVADO! ")
}else{
    console.log ( " ALUNO REPROVADO! ")
}