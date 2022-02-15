// * 0 ou n
// + 1 ou n
// ? 0 ou 1
// \ caractere de escape
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
  "wesley-safadao-as-melhores.JPEG"
];

for(const file of files){
  console.log(file);
}
