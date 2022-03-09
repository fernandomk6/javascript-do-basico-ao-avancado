const express = require('express');
const app = express();
const PORT = 3000;
const db = require("./db/connection");

app.listen(PORT, function() {
  console.log(`O Express está rodando na porta ${PORT}`);
});

//db connection
db
  .authenticate()
  .then(() => {
    console.log("Conectou com sucesso ao banco");
  })
  .catch((error) => {
    console.log("Ocorreu um erro ao conectar: " + error);
  });

// route
app.get('/', (req, res) => {
  res.send("Está funcionando");
});