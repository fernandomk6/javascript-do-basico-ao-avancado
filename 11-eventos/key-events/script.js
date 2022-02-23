/**
 * eventos de tecla key events
 * sempre que uma tecla é pressionada. são gerados
 * dois eventos keyup e keydown
 * podemos realizar ações nestes eventos também
 * keyup é quando soltamos a tecla
 * keydown é quando apertamos
 */

let input = document.querySelector("#input");

input.addEventListener("keyup", function(e){
  if (e.target.value == "fernando") {
    alert("opa opa opa");
  } else {
    console.log("continue tentando...");
    e.stopPropagation;
  }
  if(e.key == "f"){
    alert("Nãaaaao");
  }
});

window.addEventListener("keyup", function(e){
  console.log(`soltou a tecla ${e.key}`);
  // if (e.key == "j") {
  //   console.log("j");
  // }
});