/*
Algoritmo: Configura todas as rotas
Author: Lucas Mateus
Data de criação: 21/03/2023
Data de atualizaçao: 24/03/2023
*/

const express = require("express");
const route = express.Router();

// INDEX
route.get("/", function(req, res){
    res.render('index.ejs');
});

// SOBRE
route.get("/about", (req, res) => {
    res.render('about');
});

// USER
route.get("/github", (req, res) =>{
    res.render('github');
});

// CADPAGE
route.get("/memes", (req, res) => {
    res.render(__dirname + "/views/memes");
});

module.exports = route;