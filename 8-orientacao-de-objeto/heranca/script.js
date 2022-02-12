class Mamifero{
    patas;
    constructor(patas){
        this.patas = patas;
    }
}

class Cachorro extends Mamifero{
    raca;
    constructor(patas, raca){
        // super seta o construtor da classe pai
        super(15);
        this.raca = raca;
    }
}

let pug = new Cachorro("4", "pug");
console.log(pug);