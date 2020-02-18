var user = require('readline-sync')
var sexo = user.question(" Insira seu sexo : 1-Feminino || 2-Masculino ")
var altura = user.question( " Insira sua altura :")

if(sexo == 1){
    sexo = 1
    console.log("O seu peso ideal e : " + ((62.1*altura)-44.7))
}else if(sexo == 2){
    sexo = 2
    console.log(" Seu peso ideal e :" + ((72.7*altura)-58))
}
else{
    console.log(" Favor colocar um numero valido ")
}