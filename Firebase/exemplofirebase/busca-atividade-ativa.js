var admin = require("firebase-admin");
const cTable = require('console.table');
var serviceAccount = require("./credenciais.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://nomedoprojeto-d3b89.firebaseio.com"
});

var nomeTabelaMensagens = 'mensagens'

var bancoDeDados = admin.database()

var resultado = []
bancoDeDados.ref(nomeTabelaMensagens).on("child_added", function(snapshot, prevChildKey) {
    console.clear()
    resultado.push(snapshot.val())
    console.table(resultado)

});