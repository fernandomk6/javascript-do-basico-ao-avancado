let pessoa = {
    "nome": "fernando",
    "idade": 25,
    "metas": [
        "programador", "Moto custom", "casa"
    ],
    "caracteristicas": {
        "lindo": true,
        "olhos": 2,
        "rico": false
    }
};

console.log(pessoa.nome);
console.log(pessoa.idade);
console.log(pessoa.metas[0]);
console.log(pessoa.caracteristicas.lindo);

let pessoaText = JSON.stringify(pessoa);
console.log(pessoaText);

let pessoaJson = JSON.parse(pessoaText);
console.log(pessoaJson);