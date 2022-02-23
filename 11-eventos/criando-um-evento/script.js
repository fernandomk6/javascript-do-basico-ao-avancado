/**
 * devemos atrelar o evento a um elemento, por exemplo
 * um button
 * depois inserir um listener e o tipo de evento
 * como argumento
 * ai o elemento responderá por este evento e,
 * obviamente, os outros da pagina não
 */

let btn = document.querySelector("#btn");
btn.addEventListener("click", () => {
  console.log("ai, vc clicou em min ! (raiva)");
});