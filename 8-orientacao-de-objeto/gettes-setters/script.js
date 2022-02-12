class Cachorro{
    raca;
    constructor(raca){
        this.raca = raca;
    }

    set novaRaca(raca){
        this.raca = raca;
    }

    get verRaca(){
        return "a raca é " + this.raca;
    }
}

let golden = new Cachorro("Pastor Alemão");
console.log(golden);
console.log(golden.verRaca);
golden.novaRaca = "teste";
console.log(golden);