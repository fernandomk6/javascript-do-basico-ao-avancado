let n = 10;
function teste(){
    let n = 25;
    console.log(n);
}
teste();
console.log(n);

let nome = "fernando";
function dizerNome(){
    console.log(nome);
}
dizerNome();

console.log("ESCOPO COM IF (BLOCOS EM GERAL ENTRE CHAVES)");
let profissao = "programador";
if(true){
    let profissao = "suporte";
    console.log(profissao);
}
console.log(profissao);