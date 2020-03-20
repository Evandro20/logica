var user = require('readline-sync')

var numero = user.questionInt(' Digite um numero: ')
function funcaoPrimo() {
    m = 2
    c = 0
    while (m < numero) {
        if (numero % m == 0) {
            c++
        }
        if (c > 0) {
            return primo = false

        }
        m++
        return primo = true
    }
}
console.log(funcaoPrimo(numero))