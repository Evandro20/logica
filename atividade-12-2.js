// Crie um algoritmo que cadastre 3 alunos e diga qual possui a maior idade, se mais de um possuir maior idade
// apresentar o nome de todos os que possuem maior idade.
// Para isso crie uma classe Aluno que receba duas variáveis no construtor nome e idade e inicialize essas variáveis
// nas propriedades do objeto.
// Após isso peça para o usuário cadastrar o primeiro aluno e solicite nome e idade. 
// Crie o objeto do aluno e adicione em um array.
// Repita esse passo para os outros alunos. 
// Ao final o algoritmo deve iterar pelo array de alunos  e descobrir quais são os alunos com maior idade e imprimir
// seus nomes.

var user = require('readline-sync')
var media = require('./calcularMedia.js')
var cadastros = []
class Aluno {
    constructor(nome, idade) {
        this.nome = nome
        this.idade = idade

    }
}

for(x =1; x <= 3; x++){
    var nome = user.question('Digite o nome do '+ x + ' aluno: ')
    var idade = user.questionInt('Digita a idade do '+ x + ' aluno: ')
    var idadeAluno = new Aluno(nome, idade)
    cadastros.push(idadeAluno)
}

for( x = 0; x < cadastros.length; x++){
    if(cadastros[x].idade >= 18){
        console.log(cadastros[x].nome + ' E maior de idade! ')
    }
}
var mediaresultado = cadastros.length
var mediaIdade = ( media.calculaMediaIdade(cadastros) / mediaresultado)
console.log("A media de idades e: " + mediaIdade)
