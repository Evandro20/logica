var user = require ('readline-sync')
var cor = user.question( " Digite a cor do carro: ")
var modelo = user.question( " Digite o modelo do carro : ")
var marca = user.question( " Digite a marca do carro : ")

var carro = new Object ()
carro.cor = cor
carro.modelo = modelo
carro.marca = marca
console.log ( ` A cor e : ${carro.cor}`)
console.log ( `O modelo e : ${carro.modelo}`)
console.log ( ` A marca e : ${carro.marca}`)

var serializar = JSON.stringify(carro)
console.log ( serializar)

