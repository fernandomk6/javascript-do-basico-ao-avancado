// ^ começa com | observar flag m
// $ termina com | observar flag m
// exemplo /^(25[0-5])(\.)/g

// flag m - multilinha (altera comportamento do ^ e $)

let str = "fernando aaa henrique bb pbontes pereira fernando";
const re = /a+|bb?/g;
console.log(str.match(re));

let nomes = " fernando;maria ;joão; felipe";
const re2 = /[^; ]+/g;
console.log(nomes.match(re2));

let cpfs = `
  os cpfs são
  618.064.193-54
  123.159.862-56
  002.154.138-99
  218.689.147-99
  1234.456-59
  123.6548.888888-987
  12.123.123-12
`;

const re3 = /\d{3}\.\d{3}\.\d{3}-\d{2}/g;
const re3 = /(\d{3}\.){2}\d{3}-\d{2}/g;
console.log(cpfs.match(re3));

let ips = `
  os ips são
  0.0.0.0
  12.255.33.1
  255.255.255.255
  12.10.5.30
  12345.45854984.66.teste asdasd 0 52asd
  123.a5r4e5a2s.d
  4.69.555.6
  666.666.666.6666
  132,35,65
  123.123.123.256
  1.1.1.1
  
`;
const re4 = /[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}/g;
ips = ips.match(re4);
let removed = [];
for(let ip of ips){
  let i = ip.split(".");
  for(let j of i){
    if(j > 255){
      let str1 = i.join(".");
      removed.push(str1);
      break;
    }
  }
}
for(let remover of removed){
  let i = ips.indexOf(remover);
  ips.splice(i, 1);
}
console.log(ips);