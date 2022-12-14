function Tusk1(){
    let OKOrCancel = confirm(`Нажмите ОК или Отмена`);
    OKOrCancel ? alert(`Вы нажали ОК`) : alert("Вы нажали Отмена");
}

function Tusk2(){
    let names = new Array();
    while (true) {
        let name = prompt('Введите имя');
        console.log(name)
        if (!name) {
          break;
        }

        names.push(name);
      }

    alert(names);    
}