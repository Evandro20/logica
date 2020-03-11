var user = require('readline-sync')
var item = user.questionInt(" Quantos itens ira comprar? ")
var produtos = []
var n = 1
var total = 0

for (x = 0; x < item; x++ , n++) {
    var compra = user.questionFloat(" Insira o preco do " + n + " Produto: ")
    produtos.push(compra)
    console.log(' Produto ' + n + ' = ' + compra)
    total = total + compra
}
console.log(' O total da compra e: ' + total)

var pagar = user.questionFloat(" Qual o valor do pagamento? ")
if (pagar < total) {
    console.log(' Saldo insuficiente! ')
} else {
    var troco = pagar - total
    console.log(' O seu troco e: ' + troco)
}
