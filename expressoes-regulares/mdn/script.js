// criando uma expressão regular
const re = /Ab*c+/gi;
// g apos a expressão indica que será encontrado todos os padrões e não apenas o primeiro
// i apos a expressão indica que a expressão é case insensitive, por padrão, é case sensitive

// outra forma de criar um expressão regular
console.log("abc acc não entendi".replace(re, "olá"));

// metodos basicos para usar expressões regulares
// String.relace, String.match, String,search, String.split
// RegExp.exec, RegExp.test


// metodo exect: Um método RegExp  que execute uma pesquisa por uma correspondência em uma string. Retorna um array de informações.
// esse array é diferenciado, é um array de regexp 
let str = "abc olá meu nome é fernando aaaac abc ac aaaa bb abc cba";
console.log(re.exec(str));

// metodo test: Um método RegExp que testa uma correspondência em uma string. Retorna true ou false.
console.log(re.test("abc"));

// metodo match: Um método String que executa uma pesquisa por uma correspondência em uma string. Retorna uma array de informações ou null caso não haja uma correspondência.
console.log(str.match(re));

// metodo search: Um método String que testa uma correspondência em uma string. Retorna o indice da correspondência ou -1 se o teste falhar.
console.log(str.search(re));

// metodo split: Um método String  que usa uma expressão regular ou uma string fixa para quebrar uma string dentro de um array de substrings.
console.log(str.split(re));

const re2 = /(@)|gmail|(.com)/gi;
let email = "fernandomk6@gmail.1com";
console.log(email.replace(re2, "$1teste1", "$2teste2"));