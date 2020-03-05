var numero = 1000
var soma3 = 0
var soma5 = 0

while (numero > 0) {
    if (numero % 3 === 0) {
        soma3 = soma3 + numero
    }else if ( numero % 5 === 0 ){
        soma5 = soma5 + numero
    }
    numero--
}
console.log(" A soma de numeros 3 e: " + soma3)
console.log(" A soma de numeros 5 e: " + soma5)