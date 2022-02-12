let itens = ["monitor", "notebook", "chicara de café", "mouse"];
console.log(itens);
// removendo o notebook
let itemRemovido = itens.splice(1, 1);
// primeiro parametro indice que será removido
// segundo parametro, quantos indices serão removidos apartir do primeiro
console.log(itemRemovido + " foi removido");
console.log(itens);

// removendo e adicionando item
let nomes = ["fernando", "maria", "jose"];
console.log(nomes);
console.log(nomes.splice(1, 1, "moria bombada", "outro cara qualquer") + " foi removido");
console.log(nomes);