/**
 * modificando e lendo atributos
 * podemos resgatar o valor de um atributo ou trocar com o JS
 * por exemplo o href de um a ou o src de um elemento img
 * getAttribute pega o valor
 * setAttribute atualiza o valor
 */

let url = document.getElementById('link');
console.log(url.getAttribute("href"));

url.setAttribute("href", "www.horadecodar.com.br");
console.log(url.getAttribute("href"));

let changeFish = document.querySelector("#change-fish");
let img = document.querySelector("img");

changeFish.addEventListener("click", (e) => {

  if (img.getAttribute("src") == "fish1.png") {
    img.setAttribute("src", "fish2.png");
  } else {
    img.setAttribute("src", "fish1.png");
  }

});

/**
 * posição do elemento na tela
 * também é possível checar a posição do elemento pai
 * getBoundingClientRect nos da as posições de top left right e bottom
 * do elemento e outras informações
 */

let box1 = document.querySelector("#box1");
let box2 = document.querySelector("#box2");
console.log(box1.getBoundingClientRect());
console.log(box2.getBoundingClientRect());

/**
 * resgatar as dimensões do element
 */

// considera as boras
console.log(box1.offsetHeight);
console.log(box1.offsetWidth);

// não considera as bordas
console.log(box1.clientHeight);
console.log(box1.clientWidth);
