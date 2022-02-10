let cachorro = {
  raca: "SRD"
};
let pastorAlemao = Object.create(cachorro);
pastorAlemao.raca = "Pastor Alemão";
console.log(pastorAlemao.raca);