//10 n-rd fibonachii tiv
let n = 10;
let arr = [];
arr[0] = 0;
arr[1] = 1;
for (let i = 2; i < n; i++) {
  arr[i] = arr[i - 1] + arr[i - 2];
}
console.log(arr[n-1]);