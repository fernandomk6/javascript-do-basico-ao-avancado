/**
 * insertBefore
 * insere um nó antes do nó de referencia do método
 * precisamos de um elemento para ser adicionado
 * o elemento que terá o outro elemento adicionado antes dele
 * e o elemento pai desdes dois
 */

let span = document.createElement("span"); // cria um elemento, uma tag
let el = document.querySelector("h1");
let pai = el.parentNode;

// span será inserido antes do elemento el
pai.insertBefore(span, el);

let footer = document.querySelector("#main-footer");
let headerFooter = document.createElement("h4");
let ulFooter = document.querySelector("#main-footer ul");
let text = document.createTextNode("Cabeçalho de rodapé");
headerFooter.appendChild(text);
footer.insertBefore(headerFooter, ulFooter);

/**
 * appendChild
 * adiciona um nó após todos os elementos do elemento pai especificado
 */

let copyright = document.createElement("span");
let copyrightText = document.createTextNode("copyright");
copyright.appendChild(copyrightText);
footer.appendChild(copyright);

// podemos usar o metodo element.parentNode; para retornar o pai do element
// ex: let paiDoSpan = span.parentNode;

/**
 * replaceChild
 * repõe um antigo elemento no DOM, com um novo
 */

let newHeading = document.querySelector("h1");
// textContent adiciona um texto dentro da tag
newHeading.textContent = "Novo Text";
let oldHeading = document.getElementById("old-heading");
let father = oldHeading.parentNode;

// pegamos o elemento pai chamamos o metodo replaceChild
// primeiro parametro é o novo elemento
// segunto é o elemento que será substituido
pai.replaceChild(newHeading, oldHeading);