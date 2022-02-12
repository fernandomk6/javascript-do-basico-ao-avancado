// loops em array
// for, forEach, for of

let itens = ["monitor", "notebook", "chicara de café", "mouse"];
console.log(">>> usando for normal");
for(let i = 0; i < itens.length; i++){
  console.log(itens[i]);
}
console.log(">>> usando forEach");
itens.forEach(element => {
  console.log(element);
});
console.log(">>> usando for of");
for(let item of itens){
  console.log(item);
}
