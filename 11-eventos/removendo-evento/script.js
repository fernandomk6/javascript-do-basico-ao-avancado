/**
 * removendo eventos
 * da mesma forma que cpodemos adicionar eventos
 * podemos remover quando acharmos necessario
 * para isso utilizamos o metodo removeEventListener
 * onde passamos o evento e a função que o evento
 * esta escutando
 */

function clicou(){
  console.log("clicou");
}

let btn = document.querySelector("#btn");
btn.addEventListener("click", clicou);

setTimeout(function(){
  btn.removeEventListener("click", clicou);
  console.log("acabou a putaria!");
}, 3 * 1000);

