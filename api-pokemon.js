var user = require('readline-sync')
var axios = require('axios')
var admin = require("firebase-admin");
var serviceAccount = require("./credenciais-pokemon.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://pokemon-efe82.firebaseio.com"
});

var pokedex = 'Pokedex'
var db = admin.database().ref(pokedex)

function mostrarPokedex() {
  db.on('value', snapshot => {
    console.log(snapshot.val())
  })
}

function exibirPokemon() {
  var consultarPokemon = user.question('Qual o nome do Pokemon ou um numero de ID?\n').toLowerCase()
  axios.get(`https://pokeapi.co/api/v2/pokemon/${consultarPokemon}`)
    .then(resultado => {
      var nomePokemon = resultado.data.name
      var tipoPokemon = resultado.data.types
      var habilidadePokemon = resultado.data.abilities
      console.log('O nome do Pokemon e:\n' + nomePokemon.toUpperCase())
      console.log('O tipo do pokemon e:')
      tipoPokemon.map(pokemon => {
        console.log(pokemon.type.name.toUpperCase())
      })
      console.log('Suas habilidades sao:')
      habilidadePokemon.map(habilidade => {
        console.log(habilidade.ability.name.toUpperCase())
      })
      var mostrar = false
      while (mostrar == false) {
        var perguntarHabilidade = user.questionInt('Quer saber o efeito da habilidade?\nSim: Digite 1\nNao: Digete 2\n')
        if (perguntarHabilidade == 1) {
          mostrar = true
          var efeitoHabilidade = user.question('Digite o nome da abilidade: ').toLowerCase()
          axios.get(`https://pokeapi.co/api/v2/ability/${efeitoHabilidade}`)
            .then(resultado => {
              var efeito = resultado.data.effect_entries
              for (i = 0; i < efeito.length; i++) {
                console.log(efeito[i].effect.toUpperCase())
              }
            })
            .catch(erro => {
              console.log('Nome da abilidade incorreto! ')
            })
        } else if (perguntarHabilidade == 2) {
          mostrar = true
          console.log('Vamos Continuar')
        } else {
          mostrar = false
          console.log('Insira um valor valido! ')
        }
      }
      var mostrarVantagem = false
      while (mostrarVantagem == false) {
        var perguntarVantagem = user.questionInt('Deseja saber as vantagens e desvantagens do tipo e quais outros Pokemos sao semelhantes a esse tipo?\nDigite 1 para sim\nDigite 2 para nao\n')
        if (perguntarVantagem == 1) {
          mostrarVantagem = true
          var vantagem = user.question('Escreva o nome do tipo: ').toLowerCase()
          axios.get(`https://pokeapi.co/api/v2/type/${vantagem}`)
            .then(resultado => {
              var causaDobroDano = resultado.data.damage_relations.double_damage_to
              var naoCausaDano = resultado.data.damage_relations.no_damage_to
              var causaMetadeDano = resultado.data.damage_relations.half_damage_to
              var naoTomaDano = resultado.data.damage_relations.no_damage_from
              var tomaMetadeDano = resultado.data.damage_relations.half_damage_from
              var tomaDobroDano = resultado.data.damage_relations.double_damage_from
              var pokemonMesmoTipo = resultado.data.pokemon
              console.log('Esse tipo Causa o dobro de dano nos tipos:')
              for (x = 0; x < causaDobroDano.length; x++) {
                console.log(causaDobroDano[x].name.toUpperCase())
              }

              console.log('Esse tipo nao Causa dano nos Tipos: ')
              for (x = 0; x < naoCausaDano.length; x++) {
                console.log(naoCausaDano[x].name.toUpperCase())
              }
              console.log('Esse tipo Causa Metado de Dano nos Tipos: ')
              for (x = 0; x < causaMetadeDano.length; x++) {
                console.log(causaMetadeDano[x].name.toUpperCase())
              }
              console.log('Esse tipo nao Toma dano dos tipos: ')
              for (x = 0; x < naoTomaDano.length; x++) {
                console.log(naoTomaDano[x].name)
              }
              console.log('Esse tipo toma matade do danos dos tipos: ')
              for (x = 0; x < tomaMetadeDano.length; x++) {
                console.log(tomaMetadeDano[x].name.toUpperCase())
              }
              console.log('Esse tipo toma o dobro do dano dos tipos: ')
              for (x = 0; x < tomaDobroDano.length; x++) {
                console.log(tomaDobroDano[x].name.toUpperCase())
              }
              console.log('Os tipos semelhantes a esse sao os Pokemons: ')
              for (x = 0; x < pokemonMesmoTipo.length; x++) {
                console.log(pokemonMesmoTipo[x].pokemon.name.toUpperCase())
              }
            })
            .catch(erro => {
              console.log('O tipo colocado esta incorreto')
            })
        } else if (perguntarVantagem == 2) {
          console.log("Vamos Continuar! ")
          mostrarVantagem = true
        } else {
          console.log('Informacao invalida! ')
          mostrarVantagem = false
        }
      }
    })
    .catch(erro => {
      console.log('Pokemon nao encontrado')
    })
}


exibirPokemon()
