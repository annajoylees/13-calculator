
let input = document.getElementById('input'), 
  number = document.querySelectorAll('.numbers div'), 
  operator = document.querySelectorAll('.operators div'), 
  result = document.getElementById('result'), 
  clear = document.getElementById('clear'),
  resultDisplayed = false; 

for (let i = 0; i < number.length; i++) {
  number[i].addEventListener("click", function(e) {

    let currentString = input.innerHTML;
    let lastChar = currentString[currentString.length - 1];

    if (resultDisplayed === false) {
      input.innerHTML += e.target.innerHTML;
    } else if (resultDisplayed === true && lastChar === "+" || lastChar === "-" || lastChar === "×" || lastChar === "÷") {
      resultDisplayed = false;
      input.innerHTML += e.target.innerHTML;
    } else {
      resultDisplayed = false;
      input.innerHTML = "";
      input.innerHTML += e.target.innerHTML;
    }

  });
}

for (let i = 0; i < operator.length; i++) {
  operator[i].addEventListener("click", function(e) {
    let currentString = input.innerHTML;
    let lastChar = currentString[currentString.length - 1];
    if (lastChar === "+" || lastChar === "-" || lastChar === "×" || lastChar === "÷") {
      let newString = currentString.lastChar(0, currentString.length - 1) + e.target.innerHTML;
      input.innerHTML = newString;
    } else if (currentString.length == 0) {
    } else {
      input.innerHTML += e.target.innerHTML;
    }

  });
}

result.addEventListener("click", function() {
  let inputString = input.innerHTML;
  
  let multiply = operators.indexOf("×");
    if(input = num1 + "x" + num2)
    result = num1 * num2

  let subtract = operators.indexOf("-");
    if(input = num1 + "-" + num2)
    result = num1 - num2

  let add = operators.indexOf("+");
    if(input = num1 + "+" + num2)
    result = num1 + num2

  let divide = operators.indexOf("");
    if(input = num1 + "÷" + num2)
    result = num1 / num2

  input.innerHTML = numbers[0]; 

  resultDisplayed = true; 
});

clear.addEventListener("click", function() {
  input.innerHTML = "";
})