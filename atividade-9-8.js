// Faça uma função que receba um número e retorne se é perfeito ou não.
// Após isso solicite ao usuário para inserir um número e imprimir se é perfeito ou não utilizando a função
// e imprimindo o resultado no final.
// OBS: Um número perfeito é aquele que a soma do seus divisores (auto excluindo) é igual a ele mesmo
// Exemplo 6 possui os seguintes divisores
// 1 + 2 + 3 = 6

var user = require('readline-sync')
var numero = user.questionInt('Digite um numero: ')
var soma = 0
function numeroPerfeito(numero) {
    for (x = 1; x < numero; x++) {
        if(numero % x == 0)
        soma = soma + x
    }
    if (soma == numero) {
        return ' Numero Perfeito'
    } else {
        return 'Numero nao e Perfeito'
    }
}
console.log(numeroPerfeito(numero))
