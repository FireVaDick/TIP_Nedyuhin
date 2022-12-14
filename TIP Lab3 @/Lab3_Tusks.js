function Tusk1(){
    let x1 = document.getElementById('X1').value;
    let y1 = document.getElementById('Y1').value;
    let x2 = document.getElementById('X2').value;
    let y2 = document.getElementById('Y2').value;
    let x3 = document.getElementById('X3').value;
    let y3 = document.getElementById('Y3').value;

    let side1 = Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
    let side2 = Math.sqrt(Math.pow(x1 - x3, 2) + Math.pow(y1 - y3, 2));
    let side3 = Math.sqrt(Math.pow(x3 - x2, 2) + Math.pow(y3 - y2, 2));

    let semiperimeter = (side1 + side2 + side3) / 2;
    let square = Math.sqrt(semiperimeter * (semiperimeter - side1) * (semiperimeter - side2) * (semiperimeter - side3));

    document.getElementById('answer').innerText = square.toFixed(3);
}

function Tusk2(){
    let x = document.getElementById('X').value;
    let y = document.getElementById('Y').value;
    let distance = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
    document.getElementById('answer').innerText = distance.toFixed(3);
  };
  
function SwapInputs(){
    let firstInput = document.getElementById('firstValue');
    let secondInput = document.getElementById('secondValue');

    //buffer = firstInput.value;
    //firstInput.value = secondInput.value;
    //secondInput.value = buffer;

    [firstInput.value, secondInput.value]=[secondInput.value, firstInput.value];
}
