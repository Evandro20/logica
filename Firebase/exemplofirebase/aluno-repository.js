var admin = require('./firebase')
var db = admin.database();
const repositorio = {
    atividadeRefName : 'mensagens',
    getReference : function(referencePath){
        return db.ref(referencePath)
    },
    insereAtividade : function(atividade) {
        this.getReference(`${this.atividadeRefName}`)
            .push(atividade)
    },
    converteResultado : function(val) {
        var obj = val
        var resultado = []
        for (var propriedade in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, propriedade)) {
                resultado.push(obj[propriedade])
            }
        }
        return resultado
    },
    buscaAtividade: function(author, callback){
        var self = this;
        this.getReference(`${this.atividadeRefName}`).on('value', function(snapshot){
            var resultado = self.converteResultado(snapshot.val())
            callback(resultado)
        }, function(errorObject) {
            console.log('the read failed: ' + errorObject.code)
        })
    },
    monitoraNovasAtividade : function(author, callback) {
        var self = this
        this.getReference(`${this.atividadeRefName}`).on("child_added", function(snapshot, prevChildKey) {
            callback(snapshot.val())
        });
    }
}

module.exports = repositorio;