var user = require('readline-sync')
var palavra = user.question( ' Digite uma palavra:\n')
var linha = palavra.length

for( var x = 0;x < linha; x++ ){
    if( palavra.charAt(x) === 'a'){
        console.log ( 'A')
    }else{
        console.log( palavra.charAt(x))
    }
}