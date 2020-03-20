// Faça um programa que permita o usuário cadastrar, deletar e ler carros. 
// Cada carro vai conter as seguintes propriedades 


// Nome (string)
// Cor (string)
// Ano (number) 
// Valor (number)

// Crie uma tabela com o seguinte layout (se já criou a tabela na atividade anterior utilize o mesmo arquivo na sua solução)
// nome (text)
// cor (text)
// ano (integer)
// valor (integer)


// Utilize este projeto como sugestão para esta atividade.
// https://drive.google.com/a/neurastream.com/file/d/1Qt_YknEsKlLyw8tKT6_DZcfEtAhOY14p/view?usp=sharing

// Sobre os fontes : 
// programa.js
// Esta a parte que oferece opções pro usuário, se for testar rode este programa
// aluno-repository.js
// Este módulo fica toda regra de acesso ao banco, centralize as chamadas do banco em um arquivo para que o fonte tenha contexto e coesão
// Db.js
// Este é o arquivo que conecta no banco de dados.


// Analise os fontes para entender melhor como fazer a atividade abaixo.

// OBS : Crie um repositório novo para esta atividade	


// Atividade


// Ao iniciar o programa ele deve informar para o usuário escolher uma das 4 opções

// Cadastrar novo veículo
// Caso o usuário solicite o cadastro do veículo, peça o ano, nome e cor do veículo para efetuar o cadastro.
// Caso o nome inserido do carro já existe na base de dados o algoritmo deve dizer ao usuário que o veículo já existe e solicitar um novo nome.
// Ao final do cadastro o algoritmo deve informar que o carro foi cadastro e voltar para o início do programa e solicitar as 4 opções novamente
// Remover um veículo
// Solicitar o nome do veículo que quer remover
// Caso o veículo não existe informar que o veículo não foi encontrado e voltar o programa para o início que solicita as 4 opções
// Caso o veículo exista remover ele da base de dados informar para o usuário que foi deletado e voltar para o início do programa solicitando as opções.
// Ver veiculos
// Exibir em formato de tabela todos os veículos da base EX: 
// Nome		Cor		Ano
// Ferrari		Vermelha	1990
// Corolla		Azul		2000


var sqlite = require('sqlite3')
var user = require('readline-sync')

var db = new sqlite.Database('./carros.db', erro => {
    if (erro) {
        return console.log("Erro ao conectar no banco de dados! ", erro)
    }
    console.log('Conectou ao Banco de Dados! ')
})

function adicionarCarro(nome, cor, ano, valor) {
    db.run('INSERT INTO carro (nome,cor,ano,valor) VALUES ( ?,?,?,?)', [nome, cor, ano, valor], erro => {
        if (erro) {
            return console.log('Nao foi possivel inserir!', erro)
        }
        console.log('Carro Inserido!')
    })
}

function consultarCarro(nome) {
    db.all('SELECT * FROM carro', [nome], (erro, resultado) => {
        if (erro) {
            return console.log('Erro ao consultar! ')
        }
        console.log(resultado)

    })

}
function deletarCarro(nome){
    db.run('DELETE FROM carro WHERE nome = ?',[nome], erro =>{
        if( erro){
            return console.log('Erro ao Deletar',erro)
        }
        console.log('Deletado com sucesso!')
    })
}
