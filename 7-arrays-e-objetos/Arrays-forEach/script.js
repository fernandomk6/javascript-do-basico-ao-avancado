let nums = [1, 2, 3, 4, 5, 6];
nums.forEach(num => {
    console.log(num);
});

let nomes = ["fernando", "lira", "flavio", "luiz"];
nomes.forEach(nome => {
    if(nome == "fernando"){
        console.log("olá gostosão " + nome);
    } else{
        console.log("não estou interessado em você " + nome);
    }
});

nomes.forEach(function(nome){
    if(nome == "flavio"){
        console.log("o dono aqui " + nome);
    }
});

nums.forEach(n => console.log(n + 1));