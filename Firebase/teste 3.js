var admin = require("firebase-admin");
var serviceAccount = require("./atividadelista21.json");
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://atividade-21-345ed.firebaseio.com"
});
var carros = "Carros"
var db = admin.database().ref(carros)
var user = require('readline-sync')

async function main() {
    var pergunta = user.questionInt('\nInsira 1: Para cadastrar Carro.\nInsira 2: Para mostrar carros cadastrados.\nInsira 3: Para pesquisar um valor e saber quais carros estao acima desse valor.\nInsira 4: Para pesquisar um valor e saber quais carros estao abaixo desse valor.\nInsira 5: Para pesquisar um valor e saber quais carros estao com o valor informado.\nInsira 6: Para sair.\n')
    while (pergunta !== 6) {
        console.clear()
        if (pergunta === 1) {
            await cadastrarCarro().then(p => {
                console.log(p)
            })
        }
        if (pergunta === 2) {
            console.log('carregando...')
            await exibirCarro().then(p => {
                console.clear()
                console.table(p)
            })

        }
        if (pergunta === 3) {
            await mostrarMaior().then(p => {
                console.clear()
                console.table(p)
            })
        }
        if (pergunta === 4) {
            await mostrarMenor().then(p => {
                console.clear()
                console.table(p)
            })
        }
        if (pergunta === 5) {
            await mostrarIgual().then(p => {
                console.clear()
                console.table(p)
            })
        }
        user.question('Pressione enter para continuar...')
        console.clear()
        pergunta = user.questionInt('\nInsira 1: Para cadastrar Carro.\nInsira 2: Para mostrar carros cadastrados.\nInsira 3: Para pesquisar um valor e saber quais carros estao acima desse valor.\nInsira 4: Para pesquisar um valor e saber quais carros estao abaixo desse valor.\nInsira 5: Para pesquisar um valor e saber quais carros estao com o valor informado.\nInsira 6: Para sair.\n')
    }
    process.exit()
}

function cadastrarCarro() {
    return new Promise(async (resolve, reject) => {
        var nome = user.question('\nInsira o nome do Carro: ')
        var valor = user.questionInt('\nInsira o Valor do Carro:')
        db.push({
            nome: nome,
            valor: valor
        })
        resolve('\nCarro Cadastrado!')
            , err => {
                reject(err)
            }
    })
}

function exibirCarro() {
    return new Promise(async (resolve, reject) => {
        db.on('value', snapshot => {
            resolve(snapshot.val())
        }, err => {
            reject(err)
        })
    })
}

function mostrarMaior() {
    return new Promise(async (resolve, reject) => {
        var maior = user.questionInt('\nInsira o valor: ')
        db.orderByChild('valor').startAt(maior)
            .on("value", snapshot => {
                resolve(snapshot.val())
            }), err => {
                reject(err)
            }
    })
}
function mostrarMenor() {
    return new Promise(async (resolve, reject) => {
        var menor = user.questionInt('\nInsira o Valor: ')
        db.orderByChild('valor').endAt(menor).on('value', snapshot => {
            resolve(snapshot.val())
        }), err => {
            reject(err)
        }
    })
}

function mostrarIgual() {
    return new Promise(async (resolve, reject) => {
        var igual = user.questionInt('\nInsira um valor: ')
        db.orderByChild('valor').equalTo(igual)
            .on("value", snapshot => {
                resolve(snapshot.val())
            }), err => {
                reject(err)
            }
    })
}


main()