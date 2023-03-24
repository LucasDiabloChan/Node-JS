/*
Algorithm: Arquivo central de todo o projeto. Inicia o servidor aqui
Author: Lucas Mateus
Created at: 24/03/2023
Updated at: 24/03/2023
*/

// CARREGANDO OS MÓDULOS
    const express = require('express');
    const app = express();
    const handlebars = require('express-handlebars');
    const bodyParser = require('body-parser');
    // const mongoose = require('mongoose');

// CONFIGURAÇÕES
    // Body Parser
        app.use(bodyParser.urlencoded({extended: true}));
        app.use(bodyParser.json());
    // Handlebars
        app.engine('handlebars', handlebars({defaultLayout: 'main'}));
        app.set('view engine', 'handlebars');
    // Mongoose
        // Logo mais
// ROTAS

// OUTROS
const PORT = 8080;
app.listen(PORT, ()=>{console.log("Servidor iniciado!")});