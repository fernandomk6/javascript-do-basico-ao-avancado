function soma(a, b){
    return a + b;
}

console.log(soma(1, 2));
console.log(soma(5, 2));
console.log(soma(99, 2));

function randomNumber(max){

    let n = Math.random();
    if(n > max){
        randomNumber(max);
    } else{
        return n;
    }
}

console.log(randomNumber(0.5));

function ex6(idade){
    if(idade >= 18){
        console.log("pode entrar na auto escola");
    } else{
        console.log("não pode entrar na auto escola");
    }
}

ex6(17);
ex6(18);
ex6(19);

function detecType(t){
    switch(typeof t){
        case "string":
            console.log("é string");
            break;
        case "boolean":
            console.log("é boolean");
            break;
        case "number":
            console.log("é number");
            break
        default:
            console.log("erro");
            break;
    }
}

detecType(52);
detecType("1");
detecType(true);

function detecTypeIf(t){
    if(typeof t == "string"){
        console.log("é string");
    } else if(typeof t == "number"){
        console.log("é number");
    } else if(typeof t == "boolean"){
        console.log("é boleano");
    } else{
        console.log("erro");
    }
}

detecTypeIf(52);
detecTypeIf("1");
detecTypeIf(true);


function numberAbsuluto(n){
    return Math.abs(n);
}

console.log(numberAbsuluto(-5));


function ex8(str){
    if(str.length > 10){
        console.log("Texto muito longo");
    } else{
        console.log("Texto dentro do limite");
    }
}

ex8("Olá");

function ex9(base, expoente){
    return Math.pow(base, expoente);
}

console.log(ex9(2, 3));

function ex10(n){
    if(n % 2 == 0){
        console.log(`${n} é par`);
    }
    n--;
    
    if(n == 0){
        console.log("finalizado");
    } else{
        ex10(n);
    }
}

ex10(30);