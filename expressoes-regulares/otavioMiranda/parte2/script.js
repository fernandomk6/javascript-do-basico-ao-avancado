// metodos que usam expressões regulares
// string.match array
// string.replace string
// string.split array
// string.search indice
// regexp.exec array
// regexp.test boolean

// conjuntos
const re = /[^0-9+]/g;
let telefone = "(85)9 8568-0757";
console.log(telefone.match(re));
console.log(telefone.replace(re, ""));

let text = "olá meu nome é fernando, tenho 23 anos, estou atualmente estudando programação web, com foco em front end";
const re2 = /[a-zA-Z0-9]+/g;
const re3 = /[^a-zA-Z0-9]+/g;
console.log(text.match(re2));
console.log(text.replace(re3, "-"));

// atalhos
// \d -> [0-9]
// \D -> [^0-9]
// \s -> caractere unico que não seja um espaço em branco
// \S -> caractere unico que seja um espaço em branco
// \w -> [a-zA-Z0-9_]
// \W -> [^a-zA-Z0-9_]
console.log(text.replace(/\s/g, "-").replace(/,/g,""));