let pessoa = {
    nome: "Fernando",
    idade: 23,
    profissao: "suporte",
    falar: function(){
        return "olá";
    },
    somar: (a, b) => a + b > 5 ? "resultado maior que 5" : a + b

};

let list = ["banana", "mamão", "abacaxi", "cheiro-verde"];

console.log(pessoa, typeof pessoa);
console.log(list, typeof list);
console.log(pessoa.falar());
console.log(pessoa.somar(5, 5));


1 + 5 > 5 ? console.log("deu certo") : console.log("deu errado");