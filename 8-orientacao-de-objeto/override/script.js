class Cachorro{
  raca = "teste";
  constructor(raca){
    if(!raca){
      return;
    }
    this.raca = raca;
  }
}

let poodle = new Cachorro();
console.log(poodle.raca); // teste
poodle.raca = "joao e maria";
console.log(poodle.raca);