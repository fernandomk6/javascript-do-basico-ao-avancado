console.log("Start");
// overload promises
let p = new Promise((resolve, reject) => {
  resolve("Ok");
  reject("Error");
});

p
  .then((data) => {
    return data + " Overload";
  })
  .then((data) => {
    console.log(data);
  })
  .catch((data) => {
    console.log(data);
  });

// multiple promises
let p2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, "one");
});
let p3 = new Promise((resolve, reject) => {
  resolve(new Error("p3 error"));
  reject("p3 rejected");
});
let p4 = new Promise((resolve, reject) => {
  resolve("P4 resolved");
  reject("p4 rejected");
});

Promise.all([p2, p3, p4])
  .then((data) => {
    for(const d of data){
      console.log(d);
    }
  });
/**
 * nesse exemplo acima tentamos resolver
 * varias promesas ao mesmo tempo
 * todos os retornos vem um um array, com o valor
 * de sucesso ou de erro
 */

// usando race
Promise.race([p2, p3, p4])
  .then((data) => {
    console.log("race: " + data);
  }).catch((error) => {
    console.log("race error: " + error);
  });


console.log("End");