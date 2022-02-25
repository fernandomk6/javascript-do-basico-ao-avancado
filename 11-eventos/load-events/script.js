window.addEventListener("beforeunload", function(e){
  console.log("beforeunload event");
  // beforeunload é antes de fechar a pagina
});

window.addEventListener("load", function(e){
  console.log("load event");
  // load é antes de abrir a pagina
});