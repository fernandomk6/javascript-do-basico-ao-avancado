console.log("Ainda não chamou o callback");
setTimeout(function(){
  console.log("chamou o callback");
}, 5000);
console.log("Ainda não chamaou o callback");