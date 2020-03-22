// Faça um algoritmo que receba a data nascimento de uma pessoa e calcule sua idade.
// Utilize o pacote : https://www.npmjs.com/package/age-calculator

var user = require('readline-sync')
let {AgeFromDateString, AgeFromDate} = require('age-calculator')

var ano = user.questionInt('Informe a sua data de Nascimento: ')
var mes = user.questionInt('Informe o mes de seu Nascimento: ')
var dia = user.questionInt('Informe o dia do seu Nascimento: ')

let ageFromDate = new AgeFromDate(new Date(ano, mes, dia)).age
console.log('Sua idade e: ' + ageFromDate+ ' anos')