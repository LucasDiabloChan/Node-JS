var express = require('express');
var app = express();
var load = require('express-load');
load('banco').into(app);

var bodyParser = require('body-parser');
app.set('view engine','ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:true}));

// Index
app.get('/',function(req,res){

    res.render('index.ejs');
  
});

// Sobre
app.get('/sobre',function(req,res){
    res.render('sobre.ejs');
});

// Mostra form
app.get('/exibeForm',function(req,res){
 
  res.render('formulario.ejs');

  res.redirect('/login');

});

// Form 
    // POST
    app.post('/form',function(req,res){
      var dados = req.body;
      var conexao = app.banco.conexao();
      var usuarioBanco = new app.banco.usuarioBanco(conexao);
      usuarioBanco.salvar(dados,function(erro,sucesso){
        if(erro){
          console.log(erro);
        }
      });
          res.render('mostraDados.ejs',{'info':dados});
    });

// Buscar
app.get('/buscar',function(req,res){
  var conexao = app.banco.conexao();
  var usuarioBanco = new app.banco.usuarioBanco(conexao);
  usuarioBanco.buscarGeral(function(erro,sucesso){
    if(erro){
      console.log(erro);
    }else{
      res.render('resultadoBusca.ejs',{'resultado':sucesso});
    }
  });
});

// Buscar nome
app.post('/buscarNome',function(req,res){
  var nome = req.body;
  if(nome.nomeBusca == ""){
    res.redirect('/buscar');
  }
  var conexao = app.banco.conexao();
  var usuarioBanco = new app.banco.usuarioBanco(conexao);

  usuarioBanco.buscarNome(nome,function(erro,sucesso){
    if(erro){
      console.log(erro);
    }else{
      res.render('resultadoBusca.ejs',{'resultado':sucesso});
    }
  });
});

var porta = 3000;
app.listen(porta,function(){
  console.log('Servidor Rodando');
});