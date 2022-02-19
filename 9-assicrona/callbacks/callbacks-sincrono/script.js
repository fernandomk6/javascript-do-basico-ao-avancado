function sum(a, b, cb){
  cb(a + b);
}

function showinTerminal(param){
  console.log("Exibindo: " + param);
}

sum(3, 3, showinTerminal);

let myArr = [1,2,3,4,5,6,7,8,9];

function forE(arr, cb){
  for(const e of arr){
    cb(e);
  }
}

forE(myArr, function(e){
  console.log("Cheat " + e);
});