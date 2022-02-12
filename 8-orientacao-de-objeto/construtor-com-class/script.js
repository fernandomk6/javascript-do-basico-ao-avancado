class Cachorro{
  raca = "teste";
  patas = 4;
  constructor(raca){
    if(!raca){
      return;
    }
    this.raca = raca;
  }
}

let labrador = new Cachorro("labrador");
console.log(labrador.raca, labrador.patas);
let peDuro = new Cachorro();
console.log(peDuro);