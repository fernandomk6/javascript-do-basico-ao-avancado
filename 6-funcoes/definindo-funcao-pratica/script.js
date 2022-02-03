console.log("Definindo funções na prática");
function exibirNoConsole(){
    console.log("Exibindo no console");
}

function exibirComParametro(param){
    console.log(param);
}

let a = function(){
    console.log("De uma variavel");
}

exibirNoConsole();
exibirComParametro("Olá sou um parâmetro");
a();
