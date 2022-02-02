console.log("Estrutura de repetição - switch");
let nome = "pedro";
switch(nome){
    case "fernando":
        console.log("seja bem-vindo fernando");
        break;
    case "pedro":
        console.log("seja bem-vindo pedro");
        break;
    default:
        console.log("não sei quem é vocÊ, suma maldito!");
        break;
}

let pessoa = {
    "nome": "teste",
    "idade": 23
};
switch(pessoa.nome){
    case "fernando":
        console.log("numero 1");
        break;
    case 2:
        console.log("numero 2");
        break;
    default:
        console.log("nada");
}