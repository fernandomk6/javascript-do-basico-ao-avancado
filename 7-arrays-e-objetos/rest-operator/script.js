// todos os parametros rest são transformados em um array

function imprimirNumeros(...args){
    for(let i = 0; i <= args.length; i++){
        console.log(args[i]);
    }
}

imprimirNumeros(1,2,3,6,5,4,5,6,3,2);
imprimirNumeros("teste", true, false, {nome: "fela", profissao: "fodas?"}, 1, ["olá", "sou", "array"]);

function soma(text, ...n){
    result = 0;
    for(let i = 0; i < n.length; i++){
        result += n[i];
    }

    return `o resultado é ${result} - sua frase foi ${text}`;
}

console.log(soma("o rato roeu e todo mundo ja sabe", 1,2,3));