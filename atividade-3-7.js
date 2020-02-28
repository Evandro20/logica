var user = require('readline-sync')
var programa = user.question( " Insira A: para fechar o programa e B para executar uma soma ")
var num1
var num2
var soma = "R"

while( programa !== "A"){
    if( programa == "A"){
        process.exit
    } else if ( programa === "B"){
        while( soma === "R"){
            num1 = user.questionInt( " Insira o Primeiro numero : ")
            num2 = user.questionInt( " Insira o Segundo numero : ")
            console.log ( " A soma e : " + (num1 + num2))
            soma = user.question ( " Insira R para repetir a soma e S para sair ")
            if ( soma == "S"){
                console.log( " Programa encerrado! ")
                process.exit()
            } while ( soma !== "R"){
                console.log ( " Valor invalido ")
                soma = user.question( " Insira R ou S ")
                if ( soma ==="S"){
                    console.log ( " Programa encerrado!")
                    process.exit()
                }
            }
        }
    }else{
        console.log ( " Valor Invalido ")
        programa = user.question ( " Insira A ou B ")
    }
}
