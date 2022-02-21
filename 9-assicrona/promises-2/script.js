console.log("Start");
// criando e usando promise
let p = new Promise((resolve, reject) => {
  resolve(teste);
  reject("rejected");
});
p.then((data) => {
  console.log(data);
}).catch((data) => {
  console.log(`Error: ${data}`);
});;
console.log("End");

/**
 * neste exemplo acima criamos uma promese passando
 * 2 parametros
 * deve ser passado para a função resolve
 * o codigo que deve ser executado de forma assincrona
 * e deve ser pasado para o reject o codigo que deve 
 * ser executado caso não seja possivel executar
 * o codigo dentro do resolve
 * 
 * o resolve é chamado usando o metodo then
 * o reject é chamado usando o metodo catch
 */

let p2 = new Promise((resolve, reject) => {
  if(true){
    resolve("Deu certo");
  } else {
    reject("Deu erro");
  }
});

p2.then((data) => {
  console.log(data);
}).catch((data) => {
  if(data){
    console.log("errado");
    console.log(data);
  }
});