let p = new Promise(function(resolve, reject){
  let a = 1 + 1;
  if (a == 2) {
    resolve("Sucess");
  } else {
    reject("Failed");
  }
});

p.then(function(message){
  console.log(`This is in the then ${message}`);
}).catch(function(message){
  console.log(`This is the catch${message}`);
});

let p2 = new Promise((resolve, reject) => {
  if (false) {
    resolve("Ok");
  } else {
    reject("Error");
  }
});

p2.then((result) => {
  console.log(result);
}).catch((result) => {
  console.log(result);
});

