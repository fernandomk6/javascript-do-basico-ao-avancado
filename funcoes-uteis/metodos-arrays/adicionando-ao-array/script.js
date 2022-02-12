let nomes = ["primeiro", "segundo", "terceiro"];
console.log(nomes);
// remover primeiro indice e o retorna
// shift retorna o valor do indice removido
nomes.shift();
console.log(nomes);

// remover ultimo indice e o retorna
// pop retorna o valor do indice removido
nomes.pop();
console.log(nomes);

// adicionar ao primeiro indice do array
// unshift retorna o novo indice do array
nomes.unshift("unshift");
console.log(nomes);

// adicionar ao ultimo indice do array
// push retorna o novo indice do array
nomes.push("push");
console.log(nomes);