//Enter a number. Reverse its first and last digits. Print the new number.
let num = 51334;
let arr = [];
let num1 = String(num);
arr = num1.split("");
let arr1 = [];
arr1[0] = arr[arr.length - 1];
arr1[arr.length] = arr[0];
for (let i = 1; i < arr.length; i++) {
  arr1[i] = arr[i];
}
console.log(arr1);
