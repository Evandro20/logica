var admin = require("firebase-admin");

var serviceAccount = require("./credenciais.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://nomedoprojeto-d3b89.firebaseio.com"
});

var nomeTabelaMensagens = 'mensagens'

var bancoDeDados = admin.database().ref(nomeTabelaMensagens);

bancoDeDados.push({
  de: 'Evandro',
  para: 'Henrique',
  mensagem: 'Corongaaaa'
})

bancoDeDados.on('value', snapshot => {
  console.log(snapshot.val())
})