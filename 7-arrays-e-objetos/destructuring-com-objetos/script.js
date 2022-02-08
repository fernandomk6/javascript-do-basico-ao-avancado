// em objetos
let person = {
    name: "jhon",
    lastName: "Boi"
};

let {name: fName, lastName: lName} = person;

console.log(fName);
console.log(lName);

// em array

let nomes = ["Fernando", "Pedro", "Maria", "Cesar", "Francisco"];

let [nomeA, nomeB, nomeC, ...felas] = nomes;

console.log(nomeA);
console.log(nomeB);
console.log(nomeC);
console.log(felas);

let a;
let b;
let obj = {
    prop: 1,
    metod: function(){
        console.log("olá");
    }
};

// usar colchetes englobando tudo quando as variaveis ja estão previamente
// declaradas
({prop: a, metod: b} = obj);

console.log(a);
b();


let marcas = ["vw", "bmw", "honda"];
let vw, bmw, honda;
([vw, bmw, honda] = marcas);
console.log(vw, bmw, honda);