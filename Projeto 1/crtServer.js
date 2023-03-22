var http = require("http");

http.createServer(function(req, res){
    res.end("Roi beibs rsrsrs, tome esse <h3>BEIJÃOCÃO</h3>");
}).listen(8082);

console.log("O server tá pika. \n");
console.log(http);

module.exports = http;