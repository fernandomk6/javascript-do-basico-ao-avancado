let frase = "O rato roeu a roupa do rei de roma";
let palavras = frase.split(" ");
console.log(palavras);
console.log(frase);

// se o separador for uma string vazia, todos todos caracteres serão separados
// se nenhum separador é informado, uma array contendo a string sera retornado
console.log(frase.split("", 5));