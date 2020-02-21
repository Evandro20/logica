var user = require('readline-sync')
var palavra = user.question( " Escreva alguma palavra: " )
palavra = palavra.charAt(0)
palavra = palavra.length
 if( palavra == 'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','x','y','z'){
     console.log( " Sua primeira letra e minuscula ")
 }else if( palavra == 'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','X','Y','Z'){
     console.log( " Sua primeira letra e maiuscula. ")
 }else{
     console.log( " Favor escrever uma palavra. ")
 }