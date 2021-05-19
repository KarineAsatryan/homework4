//11 Insert a number. Calculate product and sum of the digits of the number.
//If product is divisible by the sum,print the quotient, otherwise print the remainder.

let num = 58623;
if (num === 0) {
  console.log("Cannot calculate.");
}
let sum = 0;
let product = 1;
let n = String(num);
let num1 = [];
num1 = n.split("");
for (let i = 0; i < num1.length; i++) {
  sum += +num1[i];
  product *= +num1[i];
  //console.log(sum);
  //console.log(product)
}
if (num !== 0) {
  if (product % sum == 0) {
    console.log("Quotient is " + product / sum + ".");
  } else {
    console.log("Remainder is " + (product % sum) + ".");
  }
}
