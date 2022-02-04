function numeroPar(n){
    if(n % 2 == 0){
        console.log(`O numero ${n} é par`);
    } else{
        numeroPar(n + 1);
    }
}

numeroPar(5);

function sempreDara100(n = 0){
    if(n == 100){
        console.log("Deu 100");
    }else{
        sempreDara100(n + 1);
    }
}

sempreDara100();

function derrotarElias(vitoria){
    if(vitoria == true){
        vitoria = false;
        derrotarElias(vitoria);
    }else{
        console.log("derrotado pelo elias");
    }
}

derrotarElias(true);

let riquezaElias;
function riquezaDoElias(suaRiqueza){
    
    if(suaRiqueza < riquezaElias){
        console.log("Derrotado");
    }else {
        riquezaElias = suaRiqueza + 1;
        riquezaDoElias(suaRiqueza);
    }
}

riquezaDoElias(1);

function esculhambarElias(x){
    if(x.includes("pc")){
        console.log("Elias foi derrotado");
    } else{
        console.log("Elias está safe");
    }
}

esculhambarElias("maldito");
let caraLa = {
    "comedor": false
}

let mundo = {
    "destroy": destroy()
};
if(caraLa.comedor == true){
    mundo.destroy(true);
}