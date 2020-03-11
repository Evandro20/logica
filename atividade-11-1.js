var medias = require ('notas-universitarias-util')
var user = require ('readline-sync')
var notas = {
    g1: user.questionFloat('qual a primeira nota? '),
    g2: user.questionFloat('qual a segunda nota? '),
    g3: user.questionFloat('qual a terceira nota? ' ),
} 
console.log(medias.default(4).media(notas))



