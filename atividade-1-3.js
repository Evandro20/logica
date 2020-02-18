var user = require('readline-sync')
var numero = user.question(" Insira sua senha: ")
if(numero == 1234){
    console.log("Acesso Permitido ")
}else{
    console.log("Acesso Negado")
}
