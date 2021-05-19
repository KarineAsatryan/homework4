//6
//Find the sign of product of three numbers without multiplication operator.
//Display the specified sign.

let array = [-16, 5, 566];
let productArr = 1;
for (let i = 0; i < array.length; i++) {
  productArr = productArr * array[i];
}
if (productArr === 0) {
  console.log("unsigned");
} else {
  if (productArr > 0) {
    console.log("+");
  } else {
    console.log("-");
  }
}
