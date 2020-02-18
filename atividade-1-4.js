var user = require('readline-sync')
var maca = user.question("Insira o numero de macas: ")
var duziamaca = 0.25
var menosmaca = 0.30
if (maca <12){
    console.log(" O valor que ira pagar e : " + menosmaca + " por maca")
    console.log(" O total que ira pagar e : " + maca*menosmaca + " na compra")
}else{
    console.log("O valor que ira pagar e : " + duziamaca + " por maca")
    console.log( "O valor toral da sua compra ira ser " + maca*duziamaca + " na compra")

}