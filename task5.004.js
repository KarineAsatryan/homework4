//5
//Given three numbers. Sort them by the ascending order.
//best solution
let num1 = 459;
let num2 = 582;
let num3 = 10;
let array = [459, 582, 10];

function numSort(arr) {
  arr.sort((a, b) => a - b);

  return arr;
}

console.log(numSort(array));


//bad solution

let num1 = 459;
let num2 = 582;
let num3 = 10;
 let k = 1;
function numSort() {
  if (num1 > num2) {
    c = num1;
    num1 = num2;
    num2 = c;
    k = 1;
    
  } else {
    if (num2 > num3) {
      c = num2;
      num2 = num3;
      num3 = c;
      k = 1;
    } else {
      k = 0;
    }
  }

if (k == 0) {
  console.log(num1, num2, num3);
} else {
  numSort(num1, num2, num3);
}
}
numSort();
console.log(numSort(num1, num2, num3));