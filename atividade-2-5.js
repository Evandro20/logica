var user = require('readline-sync')
var kw = user.questionInt( " Informe quantos Kw vc gastou : ")
var salariomin = 1400/7
var kw1 = salariomin/100
var kwtotal = kw1*kw
var desconto = kwtotal - (kwtotal*0.1)
var pagarnormal = kwtotal
var pagardesconto = kwtotal - desconto

if( pagarnormal > 0 ){
    console.log( " Voce ira pagar : "  + pagarnormal)
    console.log( " E com o desconto vc ira pagar : " + (pagarnormal - pagardesconto))
}else{
    console.log ( " Informe um valor valido! ")
}