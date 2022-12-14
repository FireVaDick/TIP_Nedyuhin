let startButton = document.querySelector("#startButton");

startButton.addEventListener("click", () => $(function (){

    let divMotoModelsLi = $("div#moto_models > ul > li:contains('Мотоцикл')");
    let divForFooterTitle = $("div#for_footer > img[title ='Производители']");
    let tableMotoTableTrTdLast = $("table#moto_table tr:nth-child(even) > td:last-child");
    
    divMotoModelsLi.css({"padding":"5px", "color":"red"});
    divForFooterTitle.css({"margin":"5px"});
    tableMotoTableTrTdLast.css({"padding":"10px", "border":"2px solid blue"});

    divMotoModelsLi.appendTo("main");
    divForFooterTitle.appendTo("main");
    tableMotoTableTrTdLast.appendTo("main");
}));





/*
let startButton = document.querySelector("#startButton");
let divMotoModelsLiContainer = document.querySelector("#divMotoModelsLiContainer");
let divForFooterTitleContainer = document.querySelector("#divForFooterTitleContainer");
let tableMotoTableTrTdLastContainer = document.querySelector("#tableMotoTableTrTdLastContainer");

startButton.addEventListener("click", () => findElements());

function findElements(){
    let divMotoModelsLi = $("div#moto_models > li:contains('Мотоцикл')");
    let divForFooterTitle = $("div#for_footer > img[title ='Производители']");
    let tableMotoTableTrTdLast = $("table#moto_table tr:nth-child(even) > td:last-child");

    divMotoModelsLiContainer.textContent = `Элементы li, которые находятся внутри блока с id="moto_models", в которых
    содержится текст “мотоцикл”: ${divMotoModelsLi}`;
    divForFooterTitleContainer.textContent = `картинки, которые находятся внутри блока с id="forfooter" и в качестве
    значения атрибута title имеют значение "Производители": ${divForFooterTitle}`;
    tableMotoTableTrTdLastContainer.textContent = `Последние ячейки, которые находятся внутри 
    таблицы с id=" moto_table " в четных строка: ${tableMotoTableTrTdLast}`;
}*/

