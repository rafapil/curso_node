// estudando 

var http = require("http"); 

http.createServer(function(requisicao,resposta){
    resposta.end('bem vindo ao meu site');
}).listen(8181); 




