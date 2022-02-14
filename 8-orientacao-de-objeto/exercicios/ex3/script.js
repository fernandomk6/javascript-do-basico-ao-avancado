class Endereco{
    rua;
    bairro;
    cidade;
    estado;
    constructor(rua, bairro, cidade, estado){
        this.rua = rua;
        this.bairro = bairro;
        this.cidade = cidade;
        this.estado = estado;
    }
    atualizaRua(rua){
        if(typeof rua == "string"){
            this.rua = rua.trim();
        }
    }
    atualizaBairro(bairro){
        if(typeof bairro == "string"){
            this.bairro = bairro.trim();
        }
    }
    atualizaCidade(cidade){
        if(typeof cidade == "string"){
            this.cidade = cidade.trim();
        }
    }
    atualizaEstado(estado){
        if(typeof estado == "string"){
            this.estado = estado.trim();
        }
    }
}

let cliente = new Endereco("mestre andre", 218, "fortaleza", "CE");
console.log(cliente);
cliente.atualizaRua("Ceará");
cliente.atualizaBairro("Ceará");
cliente.atualizaCidade("Ceará");
cliente.atualizaEstado(1);
console.log(cliente);