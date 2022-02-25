/**
 * debouce
 * um evento que dispara multiplas vezes pode ser
 * um problema para o o computador do cliente
 * por isso podemos fazer um debouce que é um
 * suavisador de evento, para não chamado o 
 * mesmo evento tantas vezes
 */
let timeout;
window.addEventListener("mouseover", function(e){
  console.log(e.x);
  timeout = setTimeout(() => console.log("Debouce"), 500);
  clearTimeout(timeout);
});