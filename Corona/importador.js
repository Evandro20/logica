var sqlite = require('sqlite3')
var axios = require('axios')

var db = new sqlite.Database('./banco-corona.db', erro => {
    if (erro) {
        console.log('Erro ao conectar mo banco: ', erro)
    }
    console.log(" Conectou ao Banco!")
})
axios.get('https://api.covid19api.com/summary')
    .then(resultado => {
        var paises = resultado.data.Countries

        db.run('DELETE FROM dadosCorona', errodeletar => {
            if (errodeletar) {
                console.log(' Erro ao Deletar.', errodeletar)
            }
            paises.forEach(pais => {
                db.run('INSERT INTO dadosCorona (Country, NewConfirmed, TotalConfirmed, NewDeaths, TotalDeaths, NewRecovered, TotalRecovered) VALUES (?, ?, ?, ?, ?, ?, ? )',[pais.Country,pais.NewConfirmed,pais.TotalConfirmed,pais.NewDeaths,pais.TotalDeaths,pais.NewRecovered,pais.TotalRecovered], erro => {
                    if (erro) {
                        console.log('Erro ao Inserir. ', erro)
                    }
                })
            })
        })
    })

