let pessoa = {
  nome: "",
  setNome: function(novoNome){
    this.nome = novoNome;
  },
  getNome: function(){
    return this.nome;
  }
};

console.log(pessoa.nome);
pessoa.setNome("fernanado");
console.log(pessoa.getNome());