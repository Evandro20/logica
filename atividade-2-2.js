var user = require( 'readline-sync')
var converter = user.question( " Informe '0' se quer converter Celsius para Fahrenheit e '1' se quer converter Fahrenheit para Celcius:  ")
if( converter == 0){
    var celcius = user.questionInt( " Informe quantos Graus Celsius : ")
    console.log(celcius = ( celcius * 9) / 5 + 32)
}else if( converter == 1){
    var fahrenheit = user.questionInt( " Informe quantos graus Fahrenheit:  ")
    console.log( fahrenheit = ( fahrenheit - 32) * 5 / 9 )
}else{
    console.log( " Informe um valor valido ! ")
}

