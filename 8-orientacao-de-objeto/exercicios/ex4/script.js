class Carro{
    marca;
    cor;
    gasolinaRestante = 100;
    consumo;
    tanque;
    constructor(marca, cor, consumo, tanque){
        this.marca = marca;
        this.cor = cor;
        this.consumo = consumo;
        this.tanque = tanque;
    }
    dirigir(km){
        if(this.gasolinaRestante <= 0){
            console.log("Sem gasolina");
        }
        let litrosConsumidos = km / this.consumo;
        this.gasolinaRestante -= litrosConsumidos;
        if(this.gasolinaRestante <= 0){
            this.gasolinaRestante = 0;
        }
    }
    abastecer(litros){
        this.gasolinaRestante += litros;
        if(this.gasolinaRestante > this.tanque){
            this.gasolinaRestante = this.tanque;
        }
    }
    get verGasolina(){
        return this.gasolinaRestante;
    }
}

let carro = new Carro("pegeout", "preto", 90, 200);
carro.dirigir(10000);
console.log(carro.verGasolina);
carro.dirigir(10000);
console.log(carro.verGasolina);
carro.abastecer(100);
console.log(carro.verGasolina);