// Faça um algoritmo que receba peso e altura do usuário e calcule o IMC.
// Para fazer o calculo do IMC utilize : https://www.npmjs.com/package/fasam-imc-calc

var user = require('readline-sync')
var calculo = require('fasam-imc-calc')

var peso = user.questionFloat('Informe seu peso: ')
var altura = user.questionFloat('Informe sua aaltura: ')

var imc = new calculo(peso, altura)
console.log(imc.calc())