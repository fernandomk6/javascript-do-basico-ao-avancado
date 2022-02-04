function armazenaSoma(x){
    return (y) => {
        return x + y;
    };
}

let soma1 = armazenaSoma(1);
console.log(soma1(2));