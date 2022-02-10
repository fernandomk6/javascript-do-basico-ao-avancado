let pessoa = {
  maos: 2
};

console.log(Object.getPrototypeOf(pessoa));
console.log(Object.getPrototypeOf(pessoa) == Object.prototype);

let list = [1,2,3];
console.log(Object.getPrototypeOf(list));

let nome = "fernando";
console.log(Object.getPrototypeOf(nome));

let bool = true;
console.log(Object.getPrototypeOf(bool));

let n = 1;
console.log(Object.getPrototypeOf(n));
console.log(n.toExponential(1));

console.log(">>>> mais sobre prototypes <<<<");
let cachorro = {
  patas: 4
};
let monstro = Object.create(cachorro);
console.log(monstro.patas);
console.log(Object.getPrototypeOf(monstro) === cachorro);
console.log(Object.getPrototypeOf(cachorro) === Object.prototype);