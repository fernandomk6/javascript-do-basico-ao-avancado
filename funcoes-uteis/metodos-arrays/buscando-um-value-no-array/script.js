let nomes = ["primeiro", "segundo", "terceiro"];
// array.includes(valor);
// busca por todo o array se encontra um indice que contem
// um valor igual ao passado por parametro
if(nomes.includes("primeiro")){
  console.log("existe");
} // elemento encontrado

// buscando apartir de um indice informado
if(nomes.includes("terceiro", -1)){
  console.log("achei");
} else{
  console.log("não achei");
}