console.log("Special numbers");

console.log(Infinity);
console.log(-Infinity);
console.log(NaN);

console.log(typeof Infinity);
console.log(typeof -Infinity);
console.log(typeof NaN);

let a = true;
switch (typeof a) {
  case "number":
    console.log("é numero");
    break;
  case "string":
    console.log("é string");
    break;

  default:
    console.log("eu não sei o que é isso");
    break;
}