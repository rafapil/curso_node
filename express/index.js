const express = require("express"); // importando o express
const app = express(); // inicializando o express


app.get('/', function (req, res) {
    res.send('Bem vindo ao meu site treino de node');
});

// deixar a rota opcional basta colocar o ? no final 
app.get('/blog/:artigo?', function (req, res) {

    var artigo = req.params.artigo;
    artigo != null ? res.send('Bem vindo ao blog massa no post ' + artigo) :
        res.send('Bem vindo ao blog massa');


});

app.get('/ola/:nome/:empresa', function (req, res) {
    res.send('Oi! ' + req.params.nome + ' ' + req.params.empresa);
});


app.listen(4000, function (error) {
    if (error) {
        console.log('Ocorreu erro');
    } else {
        console.log('Servidor iniciado!!!!');
    }
});

// usando query string 
app.get('/videos', function (req, res) {
    var canal = req.query['canal'] // as qy-string pega do vetor são sempre opcionais 
    canal != null ? res.send('Bem vindo ao meu site o canal é ' + canal) :
        res.send('Bem vindo ao meu site');
});