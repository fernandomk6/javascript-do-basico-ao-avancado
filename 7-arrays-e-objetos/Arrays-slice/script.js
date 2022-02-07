let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// atenção, o slice para antes do ultimo parametro
// ou seja nesse exemplo a baixo estou pegando os indices 2 e 3. O 4 que foi passado, não entra, ele é o  limite
console.log(numeros.slice(2, 4));

// se omitir o ultimo parametro, é retornado um array iniciando do que foi apasado ate o final do array
console.log(numeros.slice(3));

// parametros negativos trazem os ultimos indices,
// no exmplo vou ta pegando os  3 ultimos elementos do array
// por que começa do terceiro ultimo ate o final, lembre-se que se não for passado 2, percorre o array ate o fim
console.log(numeros.slice(-3));

// nesse exemplo comeã do indice 2 e vai ate faltar 1 para acabar o array
console.log(numeros.slice(2, -1));