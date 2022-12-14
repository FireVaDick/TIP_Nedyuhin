
  class Employee {
    constructor(surname, date){
      this.surname = surname;
      this.date = date;
    }
  
    StartDate(){
      let date = new Date(this.date.getTime());
      date.setMonth(this.date.getMonth() + 11);
      return date;
    }
  
    EndDate(){
      let date = this.StartDate();
      date.setDate(date.getDate() + this.RestDays() + 24);
      return date;
    }
  
    //0 - воскресенье, 6 - суббота
    RestDays(){
      let restDaysCount = 0;
      let startDate = this.StartDate();
      for (let i = 0; i < 24; i++){
        startDate.setDate(startDate.getDate() + 1);
        if (startDate.getDay() == 0 || startDate.getDay() == 6){
          restDaysCount++;
        }
      }
      return restDaysCount;
    }
  }

  let Employes = [
    new Employee('Безымянный', new Date())
  ];
  
  function AddEmployee(){
    let surname = document.querySelector('#surname').value;
    let date = new Date(document.querySelector('#date').value);
    Employes.push(new Employee(surname, date));
    document.querySelector('#surname').value = '';
  }
  
  function Tasks(){
    switch (Number(document.querySelector('input[name="tusks"]:checked').value)){
      case 1: Tusk1(); break;
      case 2: Tusk2(); break;
      case 3: Tusk3(); break;
      case 4: Tusk4(); break;
      default: alert('Выберите, пожалуйста, пункт');
    }
  }
  
  function Tusk1(){
    let output = '';
    Employes.forEach(employee => {
        output += employee.surname + ': ' + employee.StartDate().toDateString() + ' - ' + employee.EndDate().toDateString() + '<br>';
    });
    document.querySelector('#result').innerHTML = output;
  }
  
  function Tusk2(){
    let month = Number(prompt('Введите номер месяца [1-12]: ') - 1);
  
    let output = '';
    Employes.forEach(employee => {
      if(employee.StartDate().getMonth() == month || employee.EndDate().getMonth() == month){
        output += employee.surname + '<br>';
      }
    });
    document.querySelector('#result').innerHTML = output;
  }
  
  function Tusk3(){
    let quarter = prompt('Введите номер квартала [1-4]: ') - 1;
    let output = '';
    Employes.forEach(employee => {
      if(Math.round(employee.EndDate().getMonth() / 4) == quarter){
        output += employee.surname + '<br>';
      }
    });
    document.querySelector('#result').innerHTML = output;
  }
  
  function Tusk4(){
    let output = '';
    Employes.forEach(employee => {
      if((new Date().getYear() + 1) == employee.StartDate().getYear()){
        output += employee.surname + '<br>';
      }
    });
    document.querySelector('#result').innerHTML = output;
  }
