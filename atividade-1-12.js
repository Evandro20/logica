var user = require('readline-sync')
var nome = user.question( " Digite o seu nome, por favor: ")
var sexo = user.question( " Informe o seu sexo: 0 - Masculino e 1 - Femininino : ")
var estado = user.question( " Informe seu estado civil:2 - SOLTEIRO(A) OU 3 - CASADO(A) ")

if ( sexo != 0  && sexo != 1){
    console.log( " Insira uma informacao valida! ")
}
else if( sexo ==1 && estado == 3){
    user.question(" Quanto tempo de CASADA? :")
    console.log(" Obrigado pelo registro! ")
}else if( sexo == 1 && estado == 2){
    console.log( " Obrigado pelo registro! ")
}else if( sexo == 0){
    console.log( " Obrigado pelo registro! ")
}

