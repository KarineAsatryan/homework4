//15 Given an array of strings. Find the strings with maximum and minimum lengths in array. Print the sum of
//theirlengths.
let arr = ["anymore", "raven", "me", "communicate"];
let arrLength = [];
for (let i = 0; i < arr.length; i++) {
  arrLength[i] = arr[i].length;
}
let arrMax = arrLength[0];
let arrMin = arrLength[0];
for (let i = 0; i < arrLength.length; i++) {
  if (arrLength[i] > arrMax) {
    arrMax = arrLength[i];
  }
  if (arrMin > arrLength[i]) {
    arrMin = arrLength[i];
  }
}
console.log(arrMin + arrMax);
