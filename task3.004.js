//3
//Given a positive integer. Bring the last digit of the numberto the beginning. Print the new number. If the
//last digit of the inserted numberis 0, numberremains the same.

num = 125478804;
num1 = num % 10;
num2 = Math.floor(num / 10);
if (num1 == 0) {
  console.log(num);
} else {
  console.log(String(num1) + String(num2));
}
