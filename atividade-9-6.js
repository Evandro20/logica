// Escreva uma função que receba dois números o primeiro será a base e o segundo a potência
// e no final a função retorna a base elevada pela potência.
// Faça um programa que peça ao usuário a base e a potência e forneça para a função, no final imprima o resultado. 
// OBS: O algoritmo só precisa saber lidar com números inteiros.

var user = require('readline-sync')
var base = user.questionInt(' Digite o valor da base: ')
var potencia = user.questionInt(' Digite o valor da potencia: ')
var resultado = 1
function calcularPotencia(base, potencia) {
    while (potencia >= 1) {
        resultado = resultado * base
        potencia--
    }
    console.log(resultado)
    return 'Potencia Calculada!'
}
console.log(calcularPotencia(base, potencia))
