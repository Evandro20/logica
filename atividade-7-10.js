var user = require ('readline-sync')

var palavra = user.question( ' Insira uma palavra: ').toLowerCase()
if( palavra.endsWith('al')){
    console.log(palavra)
}else{
    console.log('Palavra invalida! ')
}