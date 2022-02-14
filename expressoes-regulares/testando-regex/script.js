let regexp = new RegExp("teste");
let str = "teste de memoria";
console.log(regexp.test(str));
console.log(/quadrado/.test("Onde tem um quadrado"));
let email = "fernandomk6gmail.com";
console.log(/@/.test(email));