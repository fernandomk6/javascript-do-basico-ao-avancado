/**
 * o objeto do evento
 * quando criamos eventos, temos a opção de utilizar
 * um argumento opcional, que é chamado de objeto do
 * evento
 * ele contém propriedades que podem ser utilizadas
 * a nosso favor
 * o objeto é criado pelo javascript automaticamente
 */

let btn = document.querySelector("#btn");
btn.addEventListener("click", e => {
  // e é o objeto do evento
  // objeto onde terá varias propriedades do evento
  console.log(e);
  console.log("clicou");
});