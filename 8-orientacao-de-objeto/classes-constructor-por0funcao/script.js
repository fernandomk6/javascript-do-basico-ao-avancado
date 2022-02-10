function criarCachorro(raca){
  let cachorro = Object.create({});
  cachorro.raca = raca;
  return cachorro;
}

let doberman = criarCachorro("doberman");
console.log(doberman);

function criarMonstro(name, maos, bracos, pernas, cabeca, mau, bem ){
  let monstro = Object.create({});
  monstro.name = name;
  monstro.maos = maos;
  monstro.bracos = bracos;
  monstro.pernas = pernas;
  monstro.cabeca = cabeca;
  monstro.mau = mau;
  monstro.bem = bem;
  monstro.matar = () => console.log(this.name + " aaaaaaa");

  return monstro;
}

let jinksomerionte = criarMonstro("jinksomerionte",2, 2, 6, false, false, true);
console.log(jinksomerionte);
jinksomerionte.matar();