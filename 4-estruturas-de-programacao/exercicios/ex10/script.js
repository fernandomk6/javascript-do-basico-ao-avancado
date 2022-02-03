console.log("Exercício 10");
for(let i = 2; i <= 100; i++){
    let p = 0;
    for(let j = i; j >= 1; j--){
        if(i % j == 0){
            p++;
        }
    }
    if(p > 2){
        console.log(`${i} não é primo`);
    }else{
        console.log(`${i} é primo`);
    }
}