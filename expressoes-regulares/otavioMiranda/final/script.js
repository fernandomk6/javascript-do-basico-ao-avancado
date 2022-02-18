let str = "fernando1 henrique1 fernando2 henrique2";
const regex = /fernando.(?=\shenrique.)/g;
console.log(str.match(regex));

const regex2 = /fernando.(?!\shenrique1)/g;
console.log(str.match(regex2));

const regex3 = /(?<=fernando1\s)henrique./g;
console.log(str.match(regex3));

const regex4 = /(?<!fernando1\s)henrique./g;
console.log(str.match(regex4));

let str2 = "1.200,50 2.300,66 222.256,33";
const regexNum = /\d+(?=\.)/g;
console.log(str2.match(regexNum));

const regexNum2 = /\d{1,3}(?=,)/g;
console.log(str2.match(regexNum2));

const regexNum3 = /(?<=,)\d+/g;
console.log(str2.match(regexNum3));

const regexNum4 = /(?<=\.)\d{1,3}/g;
console.log(str2.match(regexNum4));