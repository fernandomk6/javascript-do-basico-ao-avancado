class Conta{
    saldoPP = 0;
    saldoCC;
    limiteLis = -1000;
    jurosPP = 1;
    constructor(saldoInicial){
        this.saldoCC = saldoInicial;
    }
    saqueCC(valor){
        if((this.saldoCC - valor) < this.limiteLis){
            console.log("transação não altorizada");
            return;
        }

        this.saldoCC -= valor;
        if(this.saldoCC < 0){
            console.log("você entrou no cheque especial");
        }
    }
    saquePP(valor){
        if(valor > this.saldoPP){
            console.log("saldo insuficiente");
            return;
        }

        this.saldoPP -= valor;
    }
    depositoCC(valor){
        this.saldoCC += valor;
    }
    depositoPP(valor){
        this.saldoPP += valor;
    }
    tranferir(valor, conta){
        if(conta == "poupança"){
            if((this.saldoCC - valor) < this.limiteLis){
                console.log("transação não altorizada");
                return;
            }
            this.saldoCC -= valor;
            this.saldoPP += valor;
        }
        if(conta == "corrente"){
            if(this.saldoPP < valor){
                console.log("transação não altorizada");
                return;
            }
            this.saldoPP -= valor;
            this.saldoCC += valor;
        }
    }
}

class Especial extends Conta{
    jurosPP = 2;
}

let contaNormal = new Conta(1000);
console.log(contaNormal);
contaNormal.depositoCC(1000);
console.log(contaNormal);
contaNormal.saqueCC(750);
console.log(contaNormal);
contaNormal.saqueCC(2000);
console.log(contaNormal);
contaNormal.depositoPP(2000);
console.log(contaNormal);
contaNormal.tranferir(5000, "corrente");
console.log(contaNormal);
contaNormal.tranferir(5000, "poupança");
console.log(contaNormal);
