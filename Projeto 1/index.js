// Chama o express e passa uma cópia pro "const app"
const express = require("express");
const app = express();

// Faz alguma coisa
app.get("/", function(req, res){
    res.send("Salve Salve Veterano, Seja Bem-Vindo a este humilde site amador ;3");
});

// Faz alguma coisa
app.get("/user", (req, res) =>{
    let ejs = require('ejs');
    let people = ['geddy', 'neil', 'alex'];
    let html = ejs.render('<%= people.join(", "); %>', {people: people});
    res.send(html);
});

// Faz alguma coisa
app.get("/menu", function(req, res){
    res.send("Fica a vontade ai linda");
});

// Mostra o txt inserido
app.get("/str/:eitcha&:eieita&:afs", function (req, res) {
    res.sendFile(__dirname + "/html/perfil.html");
});

// Cria um server (deve ser a última linha do script)
app.listen(8081, function(){
    console.log("Server rodando na url");
});