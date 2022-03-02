let {readFile, writeFile} = require('fs');

writeFile("arquivo.txt", "olá fui escrito pelo file system", (error) => {
    if(error) {
        throw error;
    } else {
        console.log("Escreveu com sucesso");
    }
});

readFile("arquivo.txt", "utf-8", (error, text) => {
    if(error) {
        throw error;
    } else {
        console.log(text);
    }
});