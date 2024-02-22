function calculate() {
  let myFirstNumber = parseFloat(document.getElementById("num1").value);
  let mySecondNumber = parseFloat(document.getElementById("num2").value);
  let operation = document.getElementById("operation").value;
  let resultDisplay = document.getElementById("result");

  let result;

  switch (operation) {
    case "add":
      result = add(myFirstNumber, mySecondNumber);
      break;
    case "subtract":
      result = subtract(myFirstNumber, mySecondNumber);
      break;
    case "multipy":
      result = multipy(myFirstNumber, mySecondNumber);
      break;
    case "divide":
      result = divide(myFirstNumber, mySecondNumber);
      break;

    default:
      result = "Invalid operation";
  }

  resultDisplay.innerHTML = `Result: ${result}`;
  // document.getElementById("result").innerHTML = "Result: " + result
}

function add(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}
function multipy(a, b) {
  return a * b;
}
function divide(a, b) {
  if (b === 0) {
    return "Cannot divide by zero";
  }
  return a / b;
}
