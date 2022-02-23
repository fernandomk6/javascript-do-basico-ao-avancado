/**
 * muitos elementos/teclas ja tem eventos pre
 * definidos como clicar num link nos leva
 * a outra pagina ou clicar num submit enviar um
 * formulario
 * podemos parar este evento default e criar uma logica
 * diferete para o elemento
 */

let customA = document.querySelector("#custom-a");
customA.addEventListener("click", function(e){
  e.preventDefault();
  console.log("Clicou no A custom e não mandou para outra pagina")
});