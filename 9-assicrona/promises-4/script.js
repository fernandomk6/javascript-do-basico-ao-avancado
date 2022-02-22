let p = new Promise((resolve, reject) => {
  resolve(new Error("Ocorreu um erro"));
  reject(0);
});

p
  .then(result => {
    console.log(result);
  })
  .catch(err => {
    console.log(err);
  })
  .finally(() => {
    console.log("finally");
  });

  /**
   * finally não recebe nenhum argumento e será executado independentemente
   * dos resultados de then ou catch
   */