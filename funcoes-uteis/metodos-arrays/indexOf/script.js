let nomes = ["fernando", "maria", "joao"];
console.log(nomes.indexOf("fernando"));

// opcional. lista o inicio da procura
console.log(nomes.indexOf("fernando", 1)); // acha nada pq fernando esta
// no indice 0




// verificando se algo existe no array se sim remover, se não, adicionar
let itens = ["capacete", "capa de chuva"];
let item = "capacete";
if(itens.includes(item)){
  let i = itens.indexOf(item);
  itens.splice(i, 1);
  console.log("removi o " + item);
  console.log(itens);
} else{
  itens.push(item);
  console.log("adicionei o " + item);
  console.log(itens);
}
