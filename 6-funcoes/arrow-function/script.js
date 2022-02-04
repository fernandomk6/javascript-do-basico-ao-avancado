let arrwFunc = () => {
    console.log("Olá, eu vim de uma arrow function");
};

arrwFunc();

let soma = (a, b) => {
    return a + b;
};

console.log(soma(1, 5));

console.log("--- arrow function em uma linha apenas ---");

let raizQuadrada = (x) => {
    return x * x;
};

let raizQuadrada2 = n => n * n;

console.log(raizQuadrada(1));
console.log(raizQuadrada2(2));