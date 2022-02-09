console.log("ex1");
let list = ["fernando", "pedro", "helenice", "manu", "larissa"];
console.log(list[0], list[2], list[3]);

console.log("ex2");
let listEx2 = [1, 2];
let list2Ex2 = [1, 2, 3, 4];
console.log(listEx2.length);
console.log(list2Ex2.length);

console.log("ex3");
let onibus = {
    rodas: 0,
    limitePassageiros: 40,
    portas: 2
};
for (const key in onibus) {
    if (Object.hasOwnProperty.call(onibus, key)) {
        const element = onibus[key];
        console.log(key + "-" + element);
    }
}
let numeros = {
    a: "teste",
    b: true,
    c: 3,
    cachorro: false
}
for (const key in numeros) {
    console.log(numeros[key]);
}

onibus.janelas = 20;
delete onibus.rodas;
console.log(onibus.janelas);
console.log(onibus);

let nomes = ["fernando", "pedro", "helenice", "manoel", "larissa"];
console.log(nomes.includes("pedro"));

let maior = [1,2,3,4,5,6,7,8,9];
let menor = [1,2,3,4];
function verifyLength(data){
    if(data.length < 5){
        console.log("poucos elementos");
    } else{
        console.log("muitos elementos");
    }
}
verifyLength(maior);
verifyLength(menor);

maior.forEach((value)=>{
    console.log(value);
});

for(let i = 0; i < maior.length; i++){
    console.log(maior[i]);
}

for(value of nomes){
    console.log(value);
}

console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
let eu = {
    "nome": "fernando",
    "idade": 23,
    "lindo": true,
    "metas": [
        "porgramador",
        "casa",
        "moto"
    ],
    "objeto": {
        "teste": "teste value",
        "teste2": "teste value 2"
    }
};

console.log(eu.nome);
console.log(eu.metas[0]);
console.log(eu.objeto.teste);

console.log("aqui em baixo será imprimido um array apartir de uma string");
let str = "olá eu sou o fernando o seu amigão";
let palavras = str.split(" ");
for(let i = 0; i < palavras.length; i++){
    console.log(palavras[i]);
}

console.log(">>>>>>>>>>>> Desafio da calculadora <<<<<<<<<<");
let calculadora = {
    somar: function(...n){
        let result = 0;
        n.forEach((value) => {
            result += value;
        });
        console.log(result);
    },
    subtrair: function(...n){
        let result = 0;
        n.forEach((value) => {
            result -= value;
        });
        console.log(result);
    },
    multiplicar: function(...n){
        let result = 0;
        for(let value of n){
            if(result == 0){
                result = value;
                continue;
            }
            result *= value;
        }
        console.log(result);
    },
    dividir: function(...n){
        let result = 0;
        for(let value of n){
            if(result == 0){
                result = value;
                continue;
            }
            result /= value;
        }
        console.log(result);
    }
};
calculadora.somar(1,1,1,1,1,95);
calculadora.subtrair(1,1,1,1,1,95);
calculadora.multiplicar(2,2,2);
calculadora.dividir(2,2,2);