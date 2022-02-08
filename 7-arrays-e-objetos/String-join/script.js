let text = "O rato roeu a roupa do rei de roma";
console.log(text);
let palavras = text.split(" ");
console.log(palavras);

let fraseMontada = palavras.join("<->");
console.log(fraseMontada);

console.log("alguns testes \n", text, palavras, fraseMontada);

