var user = require('readline-sync')
var numeroMenor = user.questionInt(" Digite o primeiro numero: ")
var numeroMaior = user.questionInt(" Digite o Segundo e precisa ser maior que o primeiro: ")

while (numeroMenor > numeroMaior) {
    console.log('O primeiro numero precisa ser menor que o segundo: ')
    numeroMenor = user.questionInt(" Digite o primeiro numero: ")
    numeroMaior = user.questionInt(" Digite o Segundo e precisa ser maior que o primeiro: ")

}
for (numeroMenor = numeroMenor; numeroMenor <= numeroMaior; numeroMenor++) {
    console.log(numeroMenor)
}