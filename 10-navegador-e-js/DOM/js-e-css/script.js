/**
 * estilizando com JS
 * podemos também mudar as propriedades de estilo
 * dos elementos do HTML com o js
 * acessando a propriedade style podemoms fazer
 * as modificações
 * o estilo é manipulado direto na tag
 * ou seja, substitui o do css
 */

let btn = document.querySelector("#change-fish");
let externalBox = document.querySelector(".external-box");
btn.addEventListener("click", () => {
  console.log(externalBox.style);
  externalBox.style.backgroundColor = "red";
});