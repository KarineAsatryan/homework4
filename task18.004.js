// 18.Given an array of a size smallerthan 100. It consists of numbers from 0 to 99 in any order. Create a new
//array where each element from that array is placed underthe index of its value. Start from the smallest
//value and end with the biggest one. If there are missing values, put in its places undefined.
let arr = [5, 4, 3, 10, 9];
let bigArr = [];
let arr1 = [];
arr1 = arr.sort((a, b) => a - b);
let l = arr1[arr1.length - 1] - 1;
let arrIndex = new Array(l);
for (let i = 0; i < arr1.length; i++) {
  arrIndex[arr1[i] - 1] = arr1[i];
}
console.log(arrIndex);
