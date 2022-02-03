function somar(a, b){
    return a + b;
}

let result = somar(2, 2);

console.log(result);

function podeDirigir(idade, cnh){
    if(idade >= 18 && cnh){
        return "pode";
    }else{
        return "não pode";
    }
}

let possoDirigir = podeDirigir(29, true);
console.log(possoDirigir);

let anonF = function(a, b, c){
    return a * b * c;
}

console.log(anonF(1, 2 ,3));

function teste(){
    let i = 1 + 1;
}

console.log(teste());