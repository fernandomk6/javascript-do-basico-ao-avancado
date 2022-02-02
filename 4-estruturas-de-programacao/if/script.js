console.log("Estrutura de controle - if");
let idade = 19;
if(idade == 19){
  console.log("idade é igual a 19");
}

let nome = "joão";
const adm = true;
if(!(nome == "fernando") && adm){
  console.log("seja bem-vindo");
}else{
  console.log("saida daqui ja!");
}

if(nome == "fernando"){
  console.log("Olá fernando");
}else if(nome == "pedro"){
  console.log("Olá pedro");
}else if(nome == "joão"){
  console.log("Maldito");
}else{
  console.log("Ninguém veio");
}

