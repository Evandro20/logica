var user = require('readline-sync');
ano = user.question("Insira seu ano de nascimento : ");
var idade = 2020-ano;
if(idade < 16){
    console.log("Nao pode");
}else if(idade >= 18){
    console.log("Voce deve votar");
}
