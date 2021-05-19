//9.Insert a number. Print ‘yesʼ if the numberis prime, ‘noʼ otherwise.

let num = 17;
let dp = "yes";
let i = 2;
while (i < num && dp === "yes") {
  if (num % i == 0) {
    dp = "no";
  }
  i++;
}
console.log(dp);
