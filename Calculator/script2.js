function Calculator(calculatorSelector){
  this.leftNumber;
  this.rightNumber;
  this.operation;
  this.isLeftNumber;
  this.calculatingIsDone;
  this.outputEl = document.querySelector(calculatorSelector + ' .output');
  this.numbersElements =  document.querySelectorAll(calculatorSelector + ' [number]');
  this.operationsElements =  document.querySelectorAll(calculatorSelector + ' .operations button');
  this.calculateEl = document.querySelector(calculatorSelector + ' .calculate');

  this.numbersElements.forEach(function(numberEl){
    numberEl.addEventListener('click', this.addToOutput.bind(this));
  }.bind(this));

  this.operationsElements.forEach(function(operationEl){
    operationEl.addEventListener('click', this.changeOperation.bind(this));
  }.bind(this));

  this.calculateEl.addEventListener("click", this.calculate.bind(this));
}

Calculator.prototype.addToOutput = function(event){
  var number = event.currentTarget.getAttribute('number');
  this.calculatingIsDone && this.reset();

  if(this.isLeftNumber){
    if(this.canAddNumber(this.leftNumber, number)){
      this.leftNumber += number;
      this.outputEl.innerHTML = parseInt(this.leftNumber) ;
    }
  }
  else{
      if(this.canAddNumber(this.rightNumber, number)){
        this.rightNumber += number;
        this.outputEl.innerHTML = parseInt(this.rightNumber);
    }
  }
}

Calculator.prototype.canAddNumber = function(currentNumber, number){
  if(number == 0 && currentNumber == 0){
    return false;
  }
  return true;
}

Calculator.prototype.changeOperation =function(event){
  var operation = event.currentTarget.getAttribute('oper');
  this.operation = operation;
  this.isLeftNumber = false;
}

Calculator.prototype.calculate = function(){
  this.outputEl.innerHTML = this.getResult();
  this.calculatingIsDone = true;
}

Calculator.prototype.reset = function(){
  this.outputEl.innerHTML = 0;
  this.leftNumber = "0",
  this.rightNumber = "",
  this.operation = "",
  this.isLeftNumber = true;
  this.calculatingIsDone = false;
}

Calculator.prototype.getResult = function(){
  var firstNumber = parseInt(this.leftNumber);
  var secondNumber = parseInt(this.rightNumber);

   switch (this.operation) {
     case '/':
       return firstNumber / secondNumber;
     case '*':
       return firstNumber * secondNumber;
     case '+':
       return firstNumber + secondNumber;
     case '-':
     return firstNumber - secondNumber;
   }
}

var calc1 = new Calculator('#calculator1');
calc1.reset();

var calc2 = new Calculator('#calculator2');
calc2.reset();
