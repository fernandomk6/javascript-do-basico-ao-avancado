function checarNumero(valor){
  let resultado = Number(valor);
  if(Number.isNaN(resultado)){
    return null;
  }
  return resultado;
}
console.log(checarNumero("5"));
console.log(checarNumero(1));
console.log(checarNumero("teste"));