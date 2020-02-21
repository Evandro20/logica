var user = require( 'readline-sync')
var salario = user.questionInt( " Informe o seu salario : ")
var emprestimo = user.questionInt( " Informe o valor do emprestimo : ")
var parcelas = user.questionInt( " Informe quantas parcelas: ")

if( salario <= 0 || emprestimo <= 0 || parcelas <= 0 ){
    console.log( " Informe um valor valido ")
}else if( emprestimo <= salario*0.30){
    console.log( " Seu emprestimo e possivel! ")
}else{
    console.log( " Seu emprestimo nao e possivel! ")
}