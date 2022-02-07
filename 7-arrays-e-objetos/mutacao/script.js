let objetoA = {
    pontos: 10
  };

  let objetoB = objetoA;

  let objetoC = {
    ponntos: 10
  };

  console.log(objetoA == objetoB); // true
  console.log(objetoA == objetoC); // false


  // perceba que o objetoB, também alterou o abjeto A, pois o objeto B é uma referencia ao objetoA
  // de uma forma grosseira, da para se dizer que são a mesma coisa, o que muda é o espaco de memoria onde está alocado
  // mas se referenciam a mesma coisa
  objetoB.pontos = 15;
  console.log(objetoA.pontos);