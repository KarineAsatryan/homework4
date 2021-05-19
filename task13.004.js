//13 Given mixed array of numbers, strings, booleans, nulls and undefined.Filter array and get all
//the numbers in a separate array.Arrange them such as from the beginning are the odds and from the ending the
//evens.
let arr = [8, 0, "hey", 12, true, "2", null];
let arrOdd = [];
let arrEven = [];
let j = 0;
let m = 0;
for (let i = 0; i < arr.length; i++) {
  if (typeof arr[i] === "number") {
    if (arr[i] % 2 == 0) {
      arrEven[j] = arr[i];
      j++;
    } else {
      arrOdd[m] = arr[i];
      m++;
    }
  }
}
console.log(arrOdd + " " + arrEven);
