var user = require('readline-sync')
var fator = user.questionInt("Insira um numero: ")
var resultado

for (resultado = 1; fator > 1; fator--) {
    resultado = resultado * fator
    console.log(resultado)
}
