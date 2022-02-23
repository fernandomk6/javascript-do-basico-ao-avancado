/**
 * propagação
 * quando não definimos um elemento muito bem (seletor brando)
 * ou um elemento que está dentro de outro tem um evento
 * pode acontecer a propagação, ou seja, o outro elemento ativar um
 * evento também, ai teremos uma duplicação
 * por isso temos um método que para essa propagação e resolve
 * este problema, o stopPropagation
 */
let main = document.querySelector("main");
let p = document.querySelector("#paragraph");
let btn = document.querySelector("#btn");

main.addEventListener("click", function(){
  console.log("click main");
});

p.addEventListener("click", function(){
  console.log("click p");
});

btn.addEventListener("click", function(){
  console.log("click btn");
});

/**
 * verifique o console
 * veja que os 3 eventos foram disparados
 * do primeiro para o ultimo
 */

/**
 * para resolver isso utilize o e.stopPropagation
 * no evento que deseja parar
 */

// btn.addEventListener("click", function(e){
//   console.log("clicou no btn mas parou depois");
//   e.stopPropagation();
// });