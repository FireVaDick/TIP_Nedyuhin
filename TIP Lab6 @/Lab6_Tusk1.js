let array = [];
let value;
let findButton = document.querySelector("#findButton");
let indexContainer = document.querySelector("#index");

findButton.addEventListener("click", () => showArrayAndIndex());

function addArray() {
    array = document.querySelector("#addArrayInput").value.split(" ");
}

function addValue() {
    value = document.querySelector("#addValueInput").value;
}

function find(arr, value) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == value) return i + 1;          
    }
    return -1;

    //return arr.indexOf(value);
}

function showArrayAndIndex() {
    addArray();
    addValue();
    indexContainer.textContent = "Номер первого нахождения value в массиве: ";
    indexContainer.textContent += (find(array, value));
}

