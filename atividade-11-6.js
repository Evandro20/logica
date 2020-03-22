// Escolha um programa que você já fez em atividades passadas e faça o output
// do terminal ficar colorido com o pacote CHALK: https://www.npmjs.com/package/chalk 
var chalk = require('chalk')
var numero1 = 1
var numero2 = 50
var n = numero1
var c = 0
var m = 2
var primo = 'e primo'

while ( n < numero2){
    var par_impar = ''
    if ( n%2==0){
        console.log(par_impar = 'par' )
    }else{
        console.log(par_impar = 'impar')
}
c = 0
m = 2
primo = 'e primo'

while ( m < n){
    if ( n % m == 0){
        c++
    }
    if ( c > 0 ){
        primo = ''
    }
m++
}
console.log(chalk.blue(" O numero " + n + ' e ' + par_impar + ' '  + primo ))
n++
}
