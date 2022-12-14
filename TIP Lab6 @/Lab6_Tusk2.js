let array = new Array();
let modArray = new Array();

let generateButton = document.querySelector("#generateButton");
let modButton = document.querySelector("#modButton");
let arrayContainer = document.querySelector("#array");
let modArrayContainer = document.querySelector("#modArray");

generateButton.addEventListener("click", () => showGeneratedArray());
modButton.addEventListener("click", () => showModArray());


function map(fn, array) {
    const modArray = [];
    array.forEach((el, index) => {
        modArray[index] = fn(el);
  });

  return modArray;
}

function generateRandomArray(min, max, length) {
    const array = [];
    for (let i = 0; i < length; i++) {
      array[i] = Math.floor(Math.random() * (max - min + 1)) + min;
    }
  
    return array;
}

function showGeneratedArray() {
    arrayContainer.textContent = "Созданный массив: ";
    modArrayContainer.textContent = " ";

    const min = +document.querySelector("#min").value;
    const max = +document.querySelector("#max").value;
    const length = +document.querySelector("#length").value;
  
    array = generateRandomArray(min, max, length);
  
    arrayContainer.textContent += array;
}
  
function showModArray() {
    modArrayContainer.textContent = "Модифированный массив: ";

    const modArray = map((el) => el ** 2, array);

    modArrayContainer.textContent += modArray
}