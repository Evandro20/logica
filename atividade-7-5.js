var user = require('readline-sync')
var num1 = []
var num2 = []
var diferentes = []

var jogadorA = user.question(" Qual o seu nome: ")
for (x = 1; x <= 5; x++) {
    num1.push(user.questionInt(' Insira 5 numeros de 1 a 10: O ' + x + ' numero: '))
}


var jogadorB = user.question(' Insira o seu nome: ')
for (i = 1; i <= 5; i++) {
    num2.push(user.questionInt('Insira 5 numeros de 1 a 10: O ' + i + ' numero: '))
}

for (x = 0; x < num1.length; x++) {
    for (i = 0; i < num2.length; i++) {
        if (num1[x] !== num2[i]) {
            diferentes.join( num1[x])
        }
    }
}
console.log(diferentes)