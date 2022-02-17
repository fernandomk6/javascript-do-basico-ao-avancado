let str = "ABCabc";
const regex = /[A-Z]/g;
console.log(regex.test(str));
console.log(str.match(regex));

let str2 = "testeId";
const regex2 = /id$/i;
console.log(regex2.test(str2));
console.log(str2.match(regex2));

let str3 = "marca: toyota";
const regex3 = /marca: ?\w+/i;
console.log(regex3.test(str3));
console.log(str3.match(regex3));

let str4 = "2.0.9.6";
// const regex4 = /^([0-9]{1,3}\.){3}[0-9]{1,3}$/;
const regex4 = /(\d{1,3}\.){3}\d{1,3}/g;
console.log(regex4.test(str4));
console.log(str4.match(regex4));


let str5 = "ab-c";
const regex5 = /^[\w-]{3,16}$/i;
console.log(regex5.test(str5));
console.log(str5.match(regex5));