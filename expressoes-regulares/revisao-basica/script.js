// conjuntos
let str = "abc a b c abcc abbcc aabbcc ABC A B C ABCC ABBCC AABBCC fernando 123";
const regex = /[^abc\s\d]/gi;
// /[abc]/ é a mesma coisa que /a|b|c/
console.log(str.match(regex));

// grupos
let str2 = "fernande henrique fernando fernando fernandefernandi henrique fernandofernando";
const regex2 = /(fernand[a-z])\1/gi;
console.log(str2.match(regex2));

let str3 = "0123.123.123 000.000.000 789.456.123 321.654.987 12.12.12 123.123.1234";
const regex3 = /\b([0-9]{3}\.){2}[0-9]{3}\b/g;
console.log(str3.match(regex3));

let str4 = "dominos ddominóó dominó domino dominí";
const regex4 = /((?:^)domin(?:o|ó))|(domin(?:o|ó)\b)(?=\s)/g;
console.log(str4.match(regex4));