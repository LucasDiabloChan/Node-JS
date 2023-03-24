// Chama o express e passa uma cópia pro "const app"
const express = require("express");
const app = express();
const routes = require("./routes");

// FUNCT TESTE
function test(int){
    this.name = int;
    return this.name;
}

// CONFIGURAÇÕES VISUAIS
const bodyParser = require("body-parser");
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended:true}));

// ROTAS
    // INDEX
    app.get('/', (req, res, next)=>{res.render('index')});

    // ROUTES - geral
    app.use('/geral', routes);

// Cria um server (deve ser a última linha do script)
app.listen(8081, () => {});