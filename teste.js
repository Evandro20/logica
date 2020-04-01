var user = require('readline-sync')
var axios = require('axios')
var id = user.question('id')
  axios.get(`https://pokeapi.co/api/v2/type/${id}`)
    .then(resultado => {
        var efeitos = resultado.data.pokemon
        for( i = 0; i < efeitos.length; i++){
          console.log(efeitos[i].pokemon.name)
        }
    })