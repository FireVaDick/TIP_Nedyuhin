
let start = document.querySelector("#start");
let categoryContainer = document.querySelector("#category");

start.addEventListener("click", () => defineCategory());

function defineCategory(){
    let category;
    let marks = getMarks();
    let totalMark = getTotalMark(marks);

    if (totalMark == 18) {
        category = "первая";
        }
    else if (totalMark >= 12 && marks.includes(3) && !marks.includes(0)){
        category = "вторая";
    }
    else if (totalMark == 12 && !marks.includes(0)){
        category = "третья";
    }
    else {
        category = "четвёртая";
    }
    
    categoryContainer.textContent = `Категория ${category}`;    
}

function getTotalMark(marks) {
    let totalMark = marks.reduce(
      (totalMark, mark) => (totalMark += mark), 0
    );
    return totalMark;
}

function getMarks(){
    let tasksMarks = [...document.querySelectorAll(".task")].map(
        (task) => getTaskMark(task) 
    );
    return tasksMarks;
}

function getTaskMark(task) {
    let isTaskChecked = task.querySelector(
      "input[type=checkbox]"
    ).checked;

    if (!isTaskChecked) {
      return 0;
    }
    return +task.querySelector("input[type=radio]:checked").value;
}


