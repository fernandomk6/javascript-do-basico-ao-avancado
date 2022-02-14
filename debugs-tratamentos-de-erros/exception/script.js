function saudacao(nome){
  if(typeof nome != "string"){
    throw new Error("O parametro nome precisa ser uma string");
  }
  console.log(`olá ${nome}.`);
}

saudacao("fernando");
saudacao(1);
console.log("teste");