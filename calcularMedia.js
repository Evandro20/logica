function calculaMedia(numeros) {
    var soma = 0
    numeros.map(adicionar => soma += adicionar)
    return soma
}

function calculaMediaIdade(nome, idade) {
    this.nome = nome
    this.idade = idade
}
module.exports = {calculaMedia}
module.exports = {calculaMediaIdade}