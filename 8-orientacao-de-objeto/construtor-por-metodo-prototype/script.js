function Cachorro(raca){
  this.raca = raca;
}

Cachorro.protitype.uivar = function(){
  console.log("Auuuuuuuuuuuuu");
};

let pug = new Cachorro("Pug");
console.log(pug.raca);
pug.uivar();