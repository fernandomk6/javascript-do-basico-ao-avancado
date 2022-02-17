// * 0 ou n {0,}
// + 1 ou n {1,}
// ? 0 ou 1 {0,1}
// \ caractere de escape
// {n,m} {minimo, maximo}
// {10,} no mínimo 10
// {,10} no máximo 10
// {10} exatamente 10
// () grupos
// | ou
// [0-9] [a-Z] [A-Z]
const re = /a+b*c?/gi;
let str = "abc cba ab ac abc bc aaaaabccc";


// RegExp.test(string): true or false
// RegExp.Exec(string): array
// String.replace(RegExp, string): string
// String.match(RegExp): array
// String.search(RegExp): indice ou -1
// String.split(RegExp): array

console.log(re.exec(str));
console.log(re.test(str));
console.log(str.replace(re, "teste"));
console.log(str.match(re));
console.log(str.search(re));
console.log(str.split(re));

let files = [
  "meuGatinho.jpg",
  "skate.JPG",
  "marreco.MP4",
  "curso-javascript.mp4",
  "furacao200.jpeg",
  "wesley-safadao-as-melhores.JPEG",
  "fernando.jpEg"
];

// const re2 = /\.(jpg|jpeg)/gi;
// const re2 = /\.jpe?g/gi;
// const re2 = /\.jpe{0,}g/gi;
const re2 = /\.jp(e|E)?g/gi;
for(const file of files){
  console.log(file, file.match(re2));
}
