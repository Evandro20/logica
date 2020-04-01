class Carro {
    constructor(nome, modelo, cor) {
        this.nome = nome
        this.modelo = modelo
        this.cor = cor
    
    }
}
var velocidade = 0
function acelerar(velocidade){
    velocidade = velocidade + 10
    console.log('Velocidade atual:' + velocidade)
    while(velocidade > 60){
        console.log('Velocidade acima do limite. Impossivel acelerar. Selecione outra opcao.')
        escolha = user.questionInt('Escolha 1: para Acelerar o carro!\nEscolha 2: para Frear o carro!\nEscolha 3: para Desligar!\n')
    }
    
}
exports.velocidade = velocidade
exports.Carro = Carro
module.exports = {acelerar}
