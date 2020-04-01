// Faça um programa que crie um carro solicitando nome e cor, após isso o usuário vai ser solicitado 3 opções
// Acelerar
// O algoritmo deve chamar a função Acelerar do módulo Carro
// Após isso imprimir a velocidade atual
// Freiar
// O algoritmo deve chamar a função Frear do módulo Carro
// Após isso imprimir a velocidade atual
// Desligar
// Caso o usuário Escolha Desligar o algoritmo deve chamar a função Desligar do módulo Carro
// Caso a função responda true o programa fecha
// Caso a função responda false o programa diz que não é possível desligar um carro em movimento. 

// Caso o usuário escolha uma opção que não existe o algoritmo simplesmente diz que não entendeu e solicita de
// novo as 3 opções. 
// Caso o usuário escolha uma opção válida o programa após imprimir o valor da velocidade deve
// novamente repetir a escolha das 3 opções para o usuário.

// Para isso no módulo Carro (carro.js que criamos na atividade 5)  no construtor adicione uma propriedade
// no objeto chamada velocidade e inicie o valor dela com 0 
// Adicione também 3 funções
// Acelerar
// Toda vida que esta função for executada deve incrementar o valor da propriedade velocidade em 10
// A função não pode permitir que uma velocidade seja superior a 60
// Frear
// Toda vida que esta função for executada deve diminuir o valor da propriedade da velocidade em 5 
// A função não pode permitir que a velocidade seja menor que 0
// Desligar
// Esta função deve retornar um boolean
// Desligar só retorna true quando a velocidade for igual a 0
// Desligar retorna false quando a velocidade for superior a 0

var user = require('readline-sync')
var modulo = require('./carro.js')
var nomeCarro = user.question('Insira um nome de Carro: ')
var nomeCor = user.question("Insira a Cor do carro: ")
var continuar = false
while (continuar == false){
    var escolha = user.questionInt('Escolha 1: para Acelerar o carro!\nEscolha 2: para Frear o carro!\nEscolha 3: para Desligar!\n')
    if(escolha == 1){
        modulo.acelerar()
        continuar = false
    }
}