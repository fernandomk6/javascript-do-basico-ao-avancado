let {readFile} = require('fs');
readFile("arquivo.txt", "utf-8", (error, text) => {
    if(error) {
        throw new Error;
    } else {
        console.log(text);
    }
});