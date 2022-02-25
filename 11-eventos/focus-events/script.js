let input = document.querySelector("input");

input.addEventListener("focus", function(e){
  console.log("foco no input");
});

input.addEventListener("blur", function(e){
  console.log("perdeu o foco");
});