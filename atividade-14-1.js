var user = require('readline-sync')
var axios = require('axios').default

var acertar = user.question(" Insira a palavra yes ou no para saber se ira acertar: ")

axios.get('https://yesno.wtf/api')
    .then(aleatorio => {
        var Simounao = aleatorio.data.answer
        console.log(Simounao)
        if (Simounao === acertar) {
        
            console.log(' Voce acertou')
        } else {
            console.log('Voce errou. ')
        }


    })