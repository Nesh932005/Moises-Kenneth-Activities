
const display = document.getElementById("display");
const numberBtns = document.querySelectorAll("[data-num]");
const operatorBtns = document.querySelectorAll("[data-op]");
const equalsBtn = document.getElementById("equals");
const acBtn = document.getElementById("ac");
const cBtn = document.getElementById("c");

let firstNumber = "";
let secondNumber = "";
let operator = "";
let resultShown = "";

// Numbers
numberBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    if (resultShown) {
      firstNumber = "";
      resultShown = "";
    }

    if (operator === "") {
      firstNumber += btn.dataset.num;
      display.textContent = firstNumber;
    } else {
      secondNumber += btn.dataset.num;
      display.textContent = secondNumber;
    }
  });
});

// Operators
operatorBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    if (firstNumber === "") return;
    operator = btn.dataset.op;
  });
});

// Equals
equalsBtn.addEventListener("click", () => {
  if (firstNumber === "" || secondNumber === "") return;

  let a = parseFloat(firstNumber);
  let b = parseFloat(secondNumber);

  let result;
  switch (operator) {
    case "+": result = a + b; break;
    case "-": result = a - b; break;
    case "*": result = a * b; break;
    case "/": result = b !== 0 ? a / b : "Error"; break;
  }

  display.textContent = result;
  firstNumber = result.toString();
  secondNumber = "";
  operator = "";
  resultShown = true;
});

// AC (clear all)
acBtn.addEventListener("click", () => {
  firstNumber = "";
  secondNumber = "";
  operator = "";
  display.textContent = "0";
});

// C (delete)
cBtn.addEventListener("click", () => {
  if (operator === "") {
    firstNumber = firstNumber.slice(0, -1);
    display.textContent = firstNumber || "0";
  } else {
    secondNumber = secondNumber.slice(0, -1);
    display.textContent = secondNumber || "0";
  }
});