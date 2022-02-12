class Mamifero{
    patas;
    constructor(patas){
        this.patas = patas;
    }
}

class Cachorro extends Mamifero{
    constructor(patas, raca){
        super(patas);
        this.raca = raca;
    }
}

let cesar = new Cachorro(4, "cesar");

console.log(cesar instanceof Mamifero);