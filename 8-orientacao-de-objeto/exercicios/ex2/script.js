class Produto{
    descricao;
    quantidade;
    valor;
    constructor(descricao, quantidade, valor){
        this.descricao = descricao;
        this.quantidade = quantidade;
        this.valor = valor * quantidade;
    }
}

class CarrinhoCompra{
    itens;
    constructor(...itens){
        this.itens = itens;
    }
    adicionar_item(item){
        this.itens.push(item);
    }
    remover_item(descricao){
       this.itens = this.itens.filter(element => element.descricao !== descricao);
    }
}

let prod1 = new Produto("monitor", 2, 50);
let prod2 = new Produto("teclado", 1, 150);

let compras = new CarrinhoCompra(prod1, prod2);
console.log(compras);
let prod3 = new Produto("macarena", 1, 150);
compras.adicionar_item(prod3);
console.log(compras);
compras.remover_item("macarena");
console.log(compras);