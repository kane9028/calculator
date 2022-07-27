//in order to prioritize calculation of multiplication and division, store user inputs separately
const numForTemporary = [];
const numForSum = [];
const numForSubtract = [];
const numForMultiply = [];
const numForDivide = [];

const number = document.querySelectorAll('.number');
const operator = document.querySelectorAll('.operator');
const dot = document.querySelector('#dot');
const equal = document.querySelector('#equal');
const clear = document.querySelector('.clear');
const deleteNum = document.querySelector('.delete');

number.forEach(element => {
  element.addEventListener('click', numTemporary);
});
operator.forEach(element => {
  element.addEventListener('click', calculate);
});
dot.addEventListener('click', addDot);
equal.addEventListener('click', getResult);
clear.addEventListener('click', resetCalculator);
deleteNum.addEventListener('click', deleteNumber);

//store number temporary when user enters the desired number
function numTemporary() {
  
}

function calculate() {
  
}

function addDot() {
  
}

function getResult() {
  
}

function resetCalculator() {
  
}

function deleteNumber() {
  
}

