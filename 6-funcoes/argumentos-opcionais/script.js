function nomeComIdade(nome, idade){
    if(idade === undefined){
        console.log(`seu nome é ${nome}`);
    } else{
        console.log(`Seu nome é ${nome} e você tem ${idade} anos`);
    }
}

nomeComIdade("joão");
nomeComIdade("Felipe", 55);
nomeComIdade("Felipe", 55, "não sei o que sou mas não entrarei na função");