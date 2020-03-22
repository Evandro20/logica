// Faça um programa que pergunte ao usuário se ele quer adicionar ou apenas exibir, caso o usuário escolha adicionar, altere
// o programa inicial de cadastro de carro para que não salve 1 objeto carro e sim uma coleção de carros (utilizando arrays,
// em vez de serializar/deserializar o objeto será o array que possui os carros). 
// Após cadastrar o carro o programa deve novamente solicitar o usuário se quer exibir ou adicionar, caso o usuário escolha
// exibir deve ser exibido todos os carros cadastrados. 	
var listaDeCarros = []
var exibir = false
const fs = require('fs')
var user = require('readline-sync')
var pergunta = user.questionInt('Digite 1 para exibir carros: \nDigite 2 para cadastrar carro: \n')

function cadastradoDeCarro() {
    var carro = new Object()
    carro.cor = user.question(" Digite a cor do carro: ")
    carro.modelo = user.question(" Digite o modelo do carro : ")
    carro.marca = user.question(" Digite a marca do carro : ")
    return carro
}
while (exibir == false) {
    var resultado = cadastradoDeCarro()
    listaDeCarros.push(resultado)
    var serializar = JSON.stringify(listaDeCarros)
    var arquivo = 'objeto/carro.json'
    fs.writeFileSync(arquivo, serializar)
    console.log(listaDeCarros)
    var pergunta = user.questionInt('Digite 1 para exibir carros: \nDigite 2 para cadastrar carro: \n')
    if (pergunta === 1) {
        exibir = true
    } else if (pergunta === 2) {
        exibir = false
    } else {
        console.log('Numeros invalidos')
        exibir = false
        var pergunta = user.questionInt('Digite 1 para exibir carros: \nDigite 2 para cadastrar carro: \n')
    }

}
console.log(listaDeCarros)