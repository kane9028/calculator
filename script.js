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
const screen = document.querySelector('.screen');

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
function numTemporary(e) {
  numForTemporary.push(e.target.textContent);
  display(arrOfStrToNumber(numForTemporary));
}

function addDot(e) {
  if(numForTemporary.indexOf('.') === -1) {
    numForTemporary.push(e.target.textContent);
    display(arrOfStrToNumber(numForTemporary));
  }
}

function calculate() {
  
}

function getResult() {
  
}

function resetCalculator() {
  
}

function deleteNumber() {
  
}

function display(text) {
  screen.textContent = text;
}

function arrOfStrToNumber(arr) {
  return Number(arr.join(''));
}