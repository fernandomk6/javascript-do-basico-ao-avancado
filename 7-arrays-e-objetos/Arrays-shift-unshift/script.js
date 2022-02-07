// shift remove o primeiro item do array e retorna o mesmo
let nomes = ["fernando", "lira", "flavio", "luiz"];
console.log(nomes);
console.log(`${nomes.shift()} foi removido da lista`);
console.log(nomes);

// unshift adiciona ao primeiro indice do array quandos 
// elementos forem passados por parametro, retorna o novo length do array
let familia = ["helenice", "manoel", "pedro"];
console.log(familia);
console.log(`a familia agora tem ${familia.unshift("larissa")} membros`);
console.log(familia);