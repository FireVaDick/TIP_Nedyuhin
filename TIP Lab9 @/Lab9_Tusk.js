
const navItems = document.querySelectorAll("nav>ul>li");
console.log(navItems)

navItems.forEach((item) => {
  item.onmouseover = itemMouseoverHandler;
  item.onmouseout = itemMouseoutHandler;
});

function itemMouseoverHandler() {
  this.children[0].style.display = "block";
}

function itemMouseoutHandler() {
  this.children[0].style.display = "none";
}



let i = 1;
let lastImageNumber = 1;

function stop(){
    lastImageNumber = 1;
    i = 3;
}

function resume(){
    let writer = document.querySelector("input[type=radio]:checked").value;
    
    if (i <= 2){
        switch(i){
            case 1: document.image.src="./images/"+writer+"/1.jpg"; i++; break;
            case 2: document.image.src="./images/"+writer+"/2.jpg"; i = 1; break;
        }
        setTimeout("resume()", 1000);
    }
}




/*
let i = 1;
let lastImageNumber = 1;

function stop(){
    lastImageNumber = i;
    i = 4;
}

function resumeClick(){
    if (i <= 3){
        switch(i){
            case 1: document.image.src="./images/Dragon 201 [Kalmahul].jpg"; i++; break;
            case 2: document.image.src="./images/Dragon 202 [Kalmahul].jpg"; i++; break;
            case 3: document.image.src="./images/Dragon 203 [Kalmahul].jpg"; i = 1; break;
        }
        setTimeout("resumeClick()", 1000);
    }
}

function resumeMouseOver(){
    if (i < 3){
        i++; 
        document.image.src="./images/Dragon 20"+i+" [Kalmahul].jpg";     
    }
    else{
        i = 1; 
        document.image.src="./images/Dragon 20"+i+" [Kalmahul].jpg";
    } 
}
*/