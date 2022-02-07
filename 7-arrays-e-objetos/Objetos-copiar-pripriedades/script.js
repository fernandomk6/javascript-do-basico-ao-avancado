let objetoA = {
    prop1: 1,
    prop2: 2
};

let objetoB = {
    prop3: 3
};

console.log(objetoA);
console.log(objetoB);
Object.assign(objetoA, objetoB);
console.log("copiando...");
console.log(objetoA);
console.log(objetoB);