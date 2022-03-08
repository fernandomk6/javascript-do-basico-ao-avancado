let express = require('express');
let app = express();

app.get('/', function(req, res) {
    res.send('Primeira aplicação com Express');
});

app.get('/test', function(req, res) {
    res.send('Rota test');
});

app.listen(3000, function() {
    console.log("Aplicação está funcionando na porta 3000");
});