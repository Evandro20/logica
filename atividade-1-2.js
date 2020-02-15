var user = require('readline-sync');
var numero = user.question("Insira um numero para saber se e par ou impar: ");
if(numero % 2 == 0){

    console.log(" Esse numero e par ");
}else{
    console.log(" Esse numero e impar ")
}

