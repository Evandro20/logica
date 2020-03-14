var fs = require('fs')
var json = fs.readFileSync('Objeto/cars.json')
var carro = JSON.parse(json)
var user = require('readline-sync')
var potencia = user.questionInt('Insira o valor de potencia de um carro: ')
var filtrado = carro.filter(cars => {
    if (cars.Horsepower >= potencia) {
        return true
    } else {
        return false
    }
})
console.log(filtrado)

