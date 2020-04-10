var user = require('readline-sync')
var axios = require('axios')
var admin = require("firebase-admin");
var serviceAccount = require("./credenciais-pokemon.json");
var chalk = require('chalk')
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://pokemon-efe82.firebaseio.com"
});


function menu() {
  var escolha = user.questionInt('Digite 1: para Cadastrar Pokemon.\nDigite 2: Para mostrar Pokemon.\nDigite 3: Para exibir Pokemon.\nDigite 4: Para saber efeito de habilidade.\nDigite 5: Para saber as vantagens e desvantagens do tipo do Pokemon.\nDigite 6: Para sair.\n')
  if (escolha === 1) {
    cadastrarPokemon()
  } if (escolha === 2) {
    mostrarPokedex()
  } if (escolha === 3) {
    exibirPokemon()
  } if (escolha === 4) {
    mostrarEfeitoHabilidade()
  }
  if (escolha === 5) {
    mostrarVantagem()
  }
  if (escolha === 6) {
    sair()
  }
}

var pokedex = 'Pokedex'
var db = admin.database().ref(pokedex)

function sair() {
  process.exit()
}

function mostrarPokedex() {
  db.on('value', snapshot => {
    console.table(snapshot.val())
    menu()
  })
}

function cadastrarPokemon() {
  var treinador = user.question('Insira o seu nome:\n')
  var cadastroPokemon = user.question('Insira a Id ou o nome do pokemon:\n').toLowerCase()
  axios.get(`https://pokeapi.co/api/v2/pokemon/${cadastroPokemon}`)
    .then(resultado => {
      db.push({
        treinador: treinador,
        cadastroPokemon: cadastroPokemon,
        pokemon: resultado.data.name,
        tipo: resultado.data.types,
        habilidades: resultado.data.abilities
      })
      console.log('Pokemon Adicionado a Pokedex!')
      menu()
    })
    .catch(erro => {
      console.log('Erro ao cadastrar pokemon!')
      menu()
    })
}

function exibirPokemon() {
  var consultarPokemon = user.question('Qual o nome do Pokemon ou um numero de ID?\n').toLowerCase()
  axios.get(`https://pokeapi.co/api/v2/pokemon/${consultarPokemon}`)
    .then(resultado => {
      var nomePokemon = resultado.data.name
      var tipoPokemon = resultado.data.types
      var habilidadePokemon = resultado.data.abilities
      console.log(chalk.blue('O nome do Pokemon e:\n' + nomePokemon.toUpperCase()))
      console.log('O tipo do pokemon e:')
      tipoPokemon.map(pokemon => {
        console.log(chalk.yellow(pokemon.type.name.toUpperCase()))
      })
      console.log('Suas habilidades sao:')
      habilidadePokemon.map(habilidade => {
        console.log(chalk.red(habilidade.ability.name.toUpperCase()))
      })
      menu()
    })
    .catch(erro => {
      console.log("Erro ao mostrar pokemon!")
      menu()
    })

}


function mostrarEfeitoHabilidade() {
  var efeitoHabilidade = user.question('Digite o nome da abilidade: ').toLowerCase()
  axios.get(`https://pokeapi.co/api/v2/ability/${efeitoHabilidade}`)
    .then(resultado => {
      var efeito = resultado.data.effect_entries
      for (i = 0; i < efeito.length; i++) {
        console.log(chalk.green(efeito[i].effect.toUpperCase()))
      }
      menu()
    })
    .catch(erro => {
      console.log('Nome da abilidade incorreto! ')
      menu()
    })
}


function mostrarVantagem() {
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
        console.log(chalk.red(causaDobroDano[x].name.toUpperCase()))
      }

      console.log('Esse tipo nao Causa dano nos Tipos: ')
      for (x = 0; x < naoCausaDano.length; x++) {
        console.log(chalk.green(naoCausaDano[x].name.toUpperCase()))
      }
      console.log('Esse tipo Causa Metado de Dano nos Tipos: ')
      for (x = 0; x < causaMetadeDano.length; x++) {
        console.log(chalk.blue(causaMetadeDano[x].name.toUpperCase()))
      }
      console.log('Esse tipo nao Toma dano dos tipos: ')
      for (x = 0; x < naoTomaDano.length; x++) {
        console.log(chalk.red(naoTomaDano[x].name))
      }
      console.log('Esse tipo toma matade do danos dos tipos: ')
      for (x = 0; x < tomaMetadeDano.length; x++) {
        console.log(chalk.green(tomaMetadeDano[x].name.toUpperCase()))
      }
      console.log('Esse tipo toma o dobro do dano dos tipos: ')
      for (x = 0; x < tomaDobroDano.length; x++) {
        console.log(chalk.blue(tomaDobroDano[x].name.toUpperCase()))
      }
      console.log('Os tipos semelhantes a esse sao os Pokemons: ')
      for (x = 0; x < pokemonMesmoTipo.length; x++) {
        console.log(chalk.yellow(pokemonMesmoTipo[x].pokemon.name.toUpperCase()))
      }
      menu()
    })
    .catch(erro => {
      console.log('O tipo colocado esta incorreto')
      menu()
    })
}


menu()