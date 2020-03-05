var user = require('readline-sync')
var jogadorA = user.question(' Insira seu nome: ')
var jogadaA = user.questionInt( " Coloque 1: para Pedra. Coloque 2: para Papel e Coloque 3: para tesoura ", {hideEchoBack : true})
var jogadorb = user.question( "Insira seu nome: ")
var jogadaB = user.questionInt( " Coloque 1: para Pedra. Coloque 2: para Papel e Coloque 3: para tesoura ", {hideEchoBack : true})

if ( jogadaA == jogadaB){
    console.log ( " Deu empate ")
}if ( jogadaA == 1 && jogadaB == 3){
    console.log ( ' O vencedor e: ' + jogadorA)
}if ( jogadaA == 2 && jogadaB == 1){
    console.log ( ' O vencedor e: ' + jogadorA)
}if ( jogadaA == 3 && jogadaB == 2){
    console.log ( ' O vencedor e: ' + jogadorA)
}if ( jogadaB == 1 && jogadaA == 3){
    console.log ( ' O vencedor e: ' + jogadorb)
}if ( jogadaB == 2 && jogadaA == 1){
    console.log ( ' O vencedor e: ' + jogadorb)
}if ( jogadaB == 3 && jogadaA == 2){
    console.log ( ' O vencedor e: ' + jogadorb)
}