var user = require ('readline-sync')
var nomeidade = user.question( " Digite o nome e a idade da pessoa e qunado acabar o cadastro digite a palavra final: ")
var final = "final"
var cadastro = 0
while ( nomeidade !== final){
    if( cadastro !== final){
        cadastro = cadastro + 1
    }
    console.log ( nomeidade)
    nomeidade = user.question( " Digite o nome e a idade da pessoa e qunado acabar o cadastro digite a palavra final: ")
}
console.log ( " Foram cadastrados: " + cadastro )