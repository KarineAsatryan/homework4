//Given a number. Print “odd” if the number is odd and “even” if itʼ s even.

//1
num = 85;
numdiv = num % 2;

switch (numdiv) {
  case 0:
    console.log(num, "even");
    break;
  case 1:
    console.log(num, "odd");
    break;
}
