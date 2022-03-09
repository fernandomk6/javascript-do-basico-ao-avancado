const express    = require('express');
const app        = express();
const PORT       = 3000;
const db         = require("./db/connection");
const bodyParser = require("body-parser");

app.listen(PORT, function() {
  console.log(`O Express está rodando na porta ${PORT}`);
});

// body parser
app.use(bodyParser.urlencoded({extended: false}));

// db connection
db
  .authenticate()
  .then(() => {
    console.log("Conectou com sucesso ao banco");
  })
  .catch((error) => {
    console.log("Ocorreu um erro ao conectar: " + error);
  });

// routes
app.get('/', (req, res) => {
  res.send("Está funcionando");
});

// jobs routes
app.use("/jobs", require("./routes/jobs"));