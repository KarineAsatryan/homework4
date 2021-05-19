//7
//Insert a digit and a number. Check whetherthe digits contains in the number or not.

let num = 12368514;
let digit = 9;
function numDig() {
  let arr = [];
  let num1 = String(num);
  k = "no";
  arr = num1.split("");
  for (let i = 0; i < arr.length; i++) {
    if (digit == arr[i]) {
      k = "yes";
    }
  }
  return k;
}

console.log(digit, num, numDig(num, digit));
