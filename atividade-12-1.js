var user = require('readline-sync')
class Carro {
    constructor(nome, modelo, cor) {
        this.nome = nome
        this.modelo = modelo
        this.cor = cor
    }

}
var nomeDoCarro1 = user.question('Insira o nome do primeiro carro: ')
var modeloDoCarro1 = user.question('Insira o modelo do primeiro carro: ')
var corDoCarro1 = user.question('Insira a cor do primeiro carro: ')

var nomeDoCarro2 = user.question('Insira o nome do segundo carro: ')
var modeloDoCarro2 = user.question('Insira o modelo do segundo carro: ')
var corDoCarro2 = user.question('Insira a cor do segundo carro: ')

var comparacao1 = new Carro(nomeDoCarro1, modeloDoCarro1, corDoCarro1)
var comparacao2 = new Carro(nomeDoCarro2, modeloDoCarro2, corDoCarro2)


if (comparacao1.nome === comparacao2.nome && comparacao1.modelo === comparacao2.modelo) {
    console.log(" Os carros sao iguais ")
} else {
    console.log(' Os carros sao diferentes')
}


