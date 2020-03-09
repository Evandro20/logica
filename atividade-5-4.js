var user = require('readline-sync')

for (c = 0; c <= 4; c++) {
    var nomedoaluno = user.question(' Informe o nome do aluno: ')
    var notaA = user.questionFloat(' Insira a nota A: ')
    var notaB = user.questionFloat('Insira a nota B: ')
    notaA = notaA * 0.30
    notaB = notaB * 0.70
    var media = notaA + notaB
    console.log(" A media do " + nomedoaluno + " = " + media)
}