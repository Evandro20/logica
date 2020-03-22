// Faça uma função que recebe a idade de uma pessoa em anos, meses e dias e retorna essa idade expressa em dias.
// Solicite a data ao usuário e o algoritmo imprime a quantidade de dias como resultado utilizando a função criada.


var user = require('readline-sync')
var ano = user.questionInt('Digite quantos anos tem: ')
var mes = user.questionInt('Digite quantos meses tem: ')
var dia = user.questionInt('Digite quantos dias tem: ')

function pedirAno(ano, mes, dia) {
    var calcularAno = (ano * 365) + (mes * 30) + dia
    return calcularAno
}
console.log(pedirAno(ano, mes, dia))
