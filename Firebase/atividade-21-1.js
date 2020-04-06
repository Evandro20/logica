
var admin = require("firebase-admin");
var serviceAccount = require("./atividadelista21.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://atividade-21-345ed.firebaseio.com"
});
var carros = "Carros"
var db = admin.database().ref(carros)
var user = require('readline-sync')

var pergunta = user.questionInt('\nInsira 1: Para cadastrar Carro.\nInsira 2: Para mostrar carros cadastrados.\nInsira 3: Para pesquisar um valor e saber quais carros estao acima desse valor.\nInsira 4: Para pesquisar um valor e saber quais carros estao abaixo desse valor.\nInsira 5: Para pesquisar um valor e saber quais carros estao com o valor informado.\nInsira 6: Para sair.\n')

function cadastrarCarro() {
  var nome = user.question('\nInsira o nome do Carro: ')
  var valor = user.questionInt('\nInsira o Valor do Carro:')
  db.push({
    nome: nome,
    valor: valor
  })
  console.log('\nCarro Cadastrado!')
}

function exibirCarro() {
  db.on('value', snapshot => {
    console.log(snapshot.val())
    console.log('\nEsta e a lista de Carro! ')
  })

}
function mostrarMaior() {
  var maior = user.questionInt('\nInsira o valor: ')
  db.orderByChild('valor').startAt(maior)
    .on("child_added", snapshot => {
      console.log(snapshot.val())
      console.log('\n Aqui esta a lista de carros!')
    })
}
function mostrarMenor() {
  var menor = user.questionInt('\nInsira o Valor: ')
  db.orderByChild('valor').endAt(menor).on('child_added', snapshot => {
    console.log(snapshot.val())
    console.log('\n A lista de carros esta aqui! ')
  })
}

function mostrarIgual() {
  var igual = user.questionInt('\nInsira um valor: ')
  db.orderByChild('valor').equalTo(igual)
    .on("child_added", snapshot => {
      console.log(snapshot.val())
      console.log('\n A lista de carros esta aqui! ')
    })

    
}

while (pergunta !== 6) {
  if (pergunta == 1) {
    cadastrarCarro()
  }
  else if (pergunta == 2) {
    exibirCarro()
  }
  else if (pergunta == 3) {
    mostrarMaior()
  }
  else if (pergunta == 4) {
    mostrarMenor()
  }
  else if (pergunta == 5) {
    mostrarIgual()
  }
  else {
    console.log('Numero Invalido!!!')
  }
  var pergunta = user.questionInt('Insira 1: Para cadastrar Carro.\nInsira 2: Para mostrar carros cadastrados.\nInsira 3: Para pesquisar um valor e saber quais carros estao acima desse valor.\nInsira 4: Para pesquisar um valor e saber quais carros estao abaixo desse valor.\nInsira 5: Para pesquisar um valor e saber quais carros estao com o valor informado.\nInsira 6: Para sair.\n')

}
