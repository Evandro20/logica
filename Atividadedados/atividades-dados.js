var sqlite3 = require('sqlite3')
let db = new sqlite3.Database('./Atividadedados', (err) => {
    if (err) {
        console.log(err.message){
        }
    }
    console.log('Conectou ao banco de dados')
})