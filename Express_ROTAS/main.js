// Arquivo pai // Chama os fi

// Starta um server HTTP
var server = require("./crtServer");

// Metodo ES
// import yamero from "./sub";
// import plus from "./plus";
// import div from "./div";
// import mult from "./mult";

// Metodo CommomJS
var yamero = require("./sub");
var plus = require("./plus");
var div = require("./div");
var mult = require("./mult");

// Mostra alguma coisa
yamero("Diablo");
plus([1,2,3,4,5,6,7,8,9,10]);
div([222, 2, 2, 2]);
mult([1,2,3,4,5,6,7,8,9,10]);