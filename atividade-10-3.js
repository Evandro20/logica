const fs = require('fs');
var deserializar = fs.readFileSync( 'Objeto/carro.json')
var carro = JSON.parse( deserializar)
console.log ( carro.cor)
console.log ( carro.modelo)
console.log ( carro.marca)