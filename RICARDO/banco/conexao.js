var mysql = require('mysql');

// Cria uma function que cria uma conexão
function criarConexao(){

  // cria a conexão com o banco
  return mysql.createConnection ({
    host:'localhost',
    user: 'root',
    password: '12345678',
    database: 'aula_node',
    insecureAuth: 'true',
    multipleStatements: 'true'
  });
}

// Executa a funct e retorna a conexão
module.exports = function(){ return criarConexao;}
