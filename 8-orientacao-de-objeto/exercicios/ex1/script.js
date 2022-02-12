class ContaBanco{
    saldo;
    constructor(){
        this.saldo = 0;
    }
    depositar(valor){
        this.saldo += valor;
    };
    saque(valor){
        this.saldo -= valor;
    };
}

let itau = new ContaBanco();
console.log(itau.saldo);
itau.depositar(100);
console.log("novo saldo " + itau.saldo);
itau.saque(50);
console.log(itau.saldo + " está é meu novo saldo");
itau.depositar(50.30);
console.log(itau.saldo + " está é meu novo saldo");