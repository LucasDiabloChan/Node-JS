/*
Algorithm: Arquivo central de todo o projeto. Inicia o servidor aqui
Author: Lucas Mateus
Created at: 24/03/2023
Updated at: 24/03/2023
*/

// CARREGANDO OS MÓDULOS
    const express = require('express');
    const app = express();
    const handler = require('express-handlebars');
    const bodyParser = require('body-parser');
    // const mongoose = require('mongoose');

// CONFIGURAÇÕES

// ROTAS

// OUTROS
const PORT = 8080;
app.listen(PORT, ()=>{console.log("Servidor iniciado!")});