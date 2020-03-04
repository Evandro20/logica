var user = require('readline-sync')
var numero1 = user.questionInt(" Insira um numero de 1 ate 100 :")
while (numero1 > 100 || numero1 < 1) {
    console.log(' Numero invalido, digite um numero valido. ')
    numero1 = user.questionInt(" Insira um numero de 1 ate 100 :")
}
var numero2 = user.questionInt(" Insira um numero de 1 ate 100 :")

while (numero2 > 100 || numero2 < 1) {
    console.log(' Numero invalido, insira um numero valido. ')
    numero2 = user.questionInt(" Insira outro numero de 1 ate 100 : ")
}
if (numero1 <= numero2) {
    while (numero1 < numero2) {
        if (numero1 % 7 == 0 && numero1 % 5 == 0) {
            console.log(" Ping Pong ")
            numero1++
        }
        else if (numero1 % 7 == 0) {
            console.log(" Ping ")
            numero1++
        } else if (numero1 % 5 == 0) {
            console.log(" Pong ")
            numero1++
        } else {
            console.log(numero1)
            numero1++
        }
    }
    if (numero2 <= numero1) {

        while (numero2 < numero1) {
            if (numero2 % 7 == 0 && numero2 % 5 == 0) {
                console.log(" Ping Pong ")
                numero2++
            }
            else if (numero2 % 7 == 0) {
                console.log(" Ping ")
                numero2++
            } else if (numero2 % 5 == 0) {
                console.log(" Pong ")
                numero2++
            } else {
                console.log(numero2)
                numero2++
            }
        }
    }
}