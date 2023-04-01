function calc(){
    let firstNumber = document.getElementById("firstNumber").value;
    let operator = document.getElementById("operator").value;
    let secondNumber = document.getElementById("secondNumber").value;
    
    firstNumber = Number(firstNumber);
    secondNumber = Number(secondNumber);
    
    let answer = document.getElementById("answer");
    answer.style.color = 'green';
    
    switch(operator){
      case '+':
        document.getElementById("answer").innerHTML = firstNumber + secondNumber;
        break;
      case '-':
        document.getElementById("answer").innerHTML = firstNumber - secondNumber;
        break;
      case '*':
        document.getElementById("answer").innerHTML = firstNumber * secondNumber;
        break;
      case '/':
        document.getElementById("answer").innerHTML = firstNumber / secondNumber;
        break;
    default:
        document.getElementById("answer").innerHTML = "Invalid Input";
    }
  }