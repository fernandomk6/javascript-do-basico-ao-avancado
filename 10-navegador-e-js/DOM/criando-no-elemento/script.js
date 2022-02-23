/**
 * criando nós de elementos
 * podemos criar um nó de elemento com o createElement
 * e depois inserir no HTML
 */

let span = document.createElement("span");
span.textContent = "Span criado dinamicamente";
let discription = document.querySelector("#main-discription");
let father = discription.parentNode;

father.insertBefore(span, discription);
