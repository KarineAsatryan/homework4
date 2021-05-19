//16.Given an array of numbers and a number.Find the index of a first element which is
//equal to that number.If there is not such a number,that find the index of the first element
//which is the closest to it.
let arr = [36, -12, 47, -58, 148, -55, -19, 10];
let num = -56;
let arr1 = [];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] - num >= 0) {
    arr1[i] = arr[i] - num;
  } else {
    arr1[i] = num - arr[i];
  }
}
let min = arr1[0];
let index = 0;
for (let i = 1; i < arr1.length; i++) {
  if (arr1[i] < min) {
    min = arr1[i];
    index = i;
  }
  //console.log(index);
}
console.log(index);
