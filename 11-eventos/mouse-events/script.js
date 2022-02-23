/**
 * no mouse temos também eventos como mousedown e
 * mouseup semenhante as teclas
 * dbclick para ativar dois cliques
 */

let btn = document.querySelector("#btn");
btn.addEventListener("dblclick", function(e){
  console.log("deu double click");
});

btn.addEventListener("mouseup", function(e){
  console.log("soultou o mouse left");
});

btn.addEventListener("mousedown", function(e) {
  console.log("pressionou o meuse left");
});

// pegando o botão direito
window.addEventListener("contextmenu", function(e) {
  e.preventDefault();
  console.log("right click mouse");
});

/**
 * pegando o movimento e local do mouse
 */

window.addEventListener("mousemove", function(e) {
  // console.log(e.x);
  // console.log(e.y);
  // console.log("moveu o mouse");
});