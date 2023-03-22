/*
Algoritmo: Configura todas as rotas
Author: Lucas Mateus
Data de criação: 21/03/2023
Data de atualizaçao: ------.
*/

const express = require("express");
const route = express();
const ejsRender = require("ejs");
const ejs = ejsRender();

// INDEX
    // GET
    route.get("/index", function(req, res){
        res.sendFile(__dirname + "html/index.html");
    });

// MOSTRA NOME
    // GET
    route.get("/amenodimero", (req, res) => {
        let ejs = require('ejs');
        let people = ['geddy', 'neil', 'alex'];
        let html = ejs.render('<%= people.join(", "); %>', {people: people});
        res.send(html);
    });