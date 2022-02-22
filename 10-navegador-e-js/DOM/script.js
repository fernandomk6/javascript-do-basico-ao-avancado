console.log(document);
console.log(document.body);
console.log(document.body.childNodes);
console.log(document.body.childNodes[1]);
// getElementsByTagName retorna um HTML colection
let uls = document.getElementsByTagName("ul");
let h1 = document.getElementsByTagName("h1");
console.log(uls);
console.log(uls[1]);
console.log(h1);

// getElementById retorna o elemento HTML
let mainTitle = document.getElementById("main-title");
console.log(mainTitle);

// getElementByClassName retorna um HTML colection
let listItems = document.getElementsByClassName("list-item");
console.log(listItems);

// querySelector retorna o primeiro elemento que corresponde ao seletor CSS passado via parametro
// exemplos de seletores #main-container p -> seleciona todas as tags p que estão dentro do elemento de id main-container
let mainTitleQuery = document.querySelector("#main-title");
console.log(mainTitleQuery);
let firstListItem = document.querySelector(".list-item");
console.log(firstListItem);
let maintitleByTag = document.querySelector("h1");
console.log("by tag", firstListItem);

// querySelectorAll retorna em HTML colection todos os elementos correspondente ao seletor
let allLi = document.querySelectorAll(".list-item");
console.log(allLi);

