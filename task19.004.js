//19.Given an array consisting from the arrays of numbers (like a two-dimensional array). Find sum of each
//row and print them as an array.
let arr = [[8, 35, 2], [8], [5, 6, -5, -6], [1, 3, -9, 0, -1]];
let arrSum = [];
const SumArr = (array) => {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      sum += array[i][j];
    }
    arrSum.push(sum);
    sum = 0;
  }
  return arrSum;
};
console.log(SumArr(arr));
