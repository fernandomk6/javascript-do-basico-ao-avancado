function say(){
  console.log("eu digo");
}

let btn = document.querySelector("#btn");
// com função callback
btn.addEventListener("click", () => {
  console.log("callback function");
});
// com função externa
// btn.addEventListener("click", say);