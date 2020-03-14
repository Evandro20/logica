var user = require('readline-sync')
var campos = user.question(" Insira 4 dados separados com ;: ")
var valores = user.question(" Insira 4 valores equivalentes aos dados separados por ;: ")
var campoHeader = campos.split(';')
var campoValores = valores.split(';')
x = 0
for (var i = 0; i < campoHeader.length; i++) {
        console.log(campoHeader[i] + ':' + campoValores[i])
}