//memory arrays for storing numbers for calculation and temporary inputs
const numForTemporary = [];
const numForSum = [];
const numForSubtract = [];
const numForMultiply = [];
const numForDivide = [];
const resultArray = [];

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
equal.addEventListener('click', calculate);
clear.addEventListener('click', resetCalculator);
deleteNum.addEventListener('click', deleteNumber);

//store number temporary when user enters the desired number
function numTemporary(e) {
  numForTemporary.push(e.target.textContent);
  display(numForTemporary.join(''));
}

function addDot(e) {
  if(numForTemporary.indexOf('.') === -1) {
    numForTemporary.push(e.target.textContent);
    display(numForTemporary.join(''));
  }
}

function calculate(e) {
  // If all memory arrays are empty. Move number from temp to relative memory array.
  if(numForDivide.length === 0 && numForMultiply.length === 0 && numForSubtract.length === 0 && numForSum.length === 0) {
    moveNumToMemory(e);
  } 
  // If operator is multiplication or division AND ONLY IF there is a number in sum or subtract memory array. Move number from temp to relative memory array.
  else if ((e.target.id === 'division' || e.target.id === 'multiplication') && (numForSum.length !== 0 || numForSubtract.length !== 0) && (numForDivide.length === 0 && numForMultiply.length === 0)) {
    moveNumToMemory(e);
  } 
  // else, run calculation.
  else {
    // If there is a number in division memory array. Calculate division; Empty arrays of temp and memory.
    if(numForDivide.length !== 0) {
      let result = numForDivide[0] / arrOfStrToNumber(numForTemporary);
      numForDivide.splice(0);
      // If there is a number in sum or subtract memory array, And pressed operator is plus or subtract. Use previous result do sum or subtract; Empty arrays of memory; Store new result into relative memory array. Else, Store result into relative memory array.
      if((e.target.id !== 'multiplication' && e.target.id !== 'division') && numForSubtract.length !== 0) {
        moveNumToMemory(e, display(numForSubtract[0] - result));
        numForSubtract.splice(0);
      } else if((e.target.id !== 'multiplication' && e.target.id !== 'division') && numForSum.length !== 0) {
        moveNumToMemory(e, display(numForSum[0] + result));
        numForSum.splice(0);
      } else {
        moveNumToMemory(e, result);
        // DO NOT display result only when numForSunstract or numForSum is not empty AND pressed operator is multiply or divide
        if(!((e.target.id === 'division' || e.target.id === 'multiplication') && (numForSubtract.length !== 0 || numForSum.length !== 0))) display(result);
      }
    } 
    // If there is a number in multiplication memory array. Calculate multiplication; Empty arrays of temp and memory.
    else if(numForMultiply.length !== 0) {
      let result = numForMultiply[0] * arrOfStrToNumber(numForTemporary);
      numForMultiply.splice(0);
      // If there is a number in sum or subtract memory array, And pressed operator is plus or subtract. Use previous result do sum or subtract; Empty arrays of memory; Store new result into relative memory array. Else, Store result into relative memory array.
      if((e.target.id !== 'multiplication' && e.target.id !== 'division') && numForSubtract.length !== 0) {
        moveNumToMemory(e, display(numForSubtract[0] - result));
        numForSubtract.splice(0);
      } else if((e.target.id !== 'multiplication' && e.target.id !== 'division') && numForSum.length !== 0) {
        moveNumToMemory(e, display(numForSum[0] + result));
        numForSum.splice(0);
      } else {
        moveNumToMemory(e, result);
        // DO NOT display result only when numForSunstract or numForSum is not empty AND pressed operator is multiply or divide
        if(!((e.target.id === 'division' || e.target.id === 'multiplication') && (numForSubtract.length !== 0 || numForSum.length !== 0))) display(result);
      }
    } else if(numForSubtract.length !== 0) {
      let result = numForSubtract[0] - arrOfStrToNumber(numForTemporary);
      numForSubtract.splice(0);
      moveNumToMemory(e, result);
      display(result);
    } else if(numForSum.length !== 0) {
      let result = numForSum[0] + arrOfStrToNumber(numForTemporary);
      numForSum.splice(0);
      moveNumToMemory(e, result);
      display(result);
    }
  }
}
//The function to move numbers into relative memory arrays.
function moveNumToMemory (e, num) {
  if(typeof num === 'number') {
    if(e.target.id === 'division') {
      numForDivide.push(num);
    } else if (e.target.id === 'multiplication') {
      numForMultiply.push(num);
    } else if (e.target.id === 'subtraction') {
      numForSubtract.push(num);
    } else if (e.target.id === 'plus') {
      numForSum.push(num);
    } else if (e.target.id === 'equal') {
      resultArray.push(num);
    } else {
      return;
    }
  } else {
    if(e.target.id === 'division') {
      numForDivide.push(arrOfStrToNumber(numForTemporary));
    } else if (e.target.id === 'multiplication') {
      numForMultiply.push(arrOfStrToNumber(numForTemporary));
    } else if (e.target.id === 'subtraction') {
      numForSubtract.push(arrOfStrToNumber(numForTemporary));
    } else if (e.target.id === 'plus') {
      numForSum.push(arrOfStrToNumber(numForTemporary));
    } else if (e.target.id === 'equal') {
      resultArray.push(arrOfStrToNumber(numForTemporary));
    } else {
      return;
    }
  }
  numForTemporary.splice(0);
}

function resetCalculator() {
  numForTemporary.splice(0);
  numForDivide.splice(0);
  numForMultiply.splice(0);
  numForSubtract.splice(0);
  numForSum.splice(0);
  resultArray.splice(0);
  display('');
}

function deleteNumber() {
  if(numForTemporary.length !== 0) {
    numForTemporary.pop();
    display(numForTemporary.join(''));
  }
}

function display(arg) {
  screen.textContent = arg;
  return arg;
}

function arrOfStrToNumber(arr) {
  return Number(arr.join(''));
}