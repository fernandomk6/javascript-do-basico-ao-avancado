let carros = ["BMW", "Toyota", "VW", "Pegeout"];
console.log(carros.includes("BMW"));
console.log(carros.includes("Honda"));
console.log(carros.includes("Pegeout"));
console.log(carros.includes("VW"));

// verificando um value em um indice
console.log(carros.includes("BMW", 1) + "false");
console.log(carros.includes("BMW", 0) + "true");
console.log(carros.includes("Pegeout", -1) + "true");
console.log(carros.includes("VW", -2) + "true");
console.log(carros.includes("Fernando", -2) + "false");

// -1, significa 1 indice antes de cabar, ou seja, ultimo indice

if(carros.includes("Shineray")){
    console.log("CAramba! carros da shineray!");
} else{
    console.log("...");
}