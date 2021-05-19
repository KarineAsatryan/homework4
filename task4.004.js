//4
//Check if a number is a multiple of 3, 5 or 7 and output the appropriate message.

num = 5412698145;
result3 = num % 3;
result5 = num % 5;
result7 = num % 7;
switch (result3) {
  case 0:
    if (result5 == 0) {
      if (result7 == 0) {
        console.log(num, "is a multiple of 3, 5 and 7.");
      } else {
        console.log(num, "is a multiple of 3 and 5.");
      }
    } else {
      result7 == 0
        ? console.log(num, "is a multiple of 3 and 7.")
        : console.log(num, "is a multiple of 3.");
    }
    break;
  case 1:
  case 2:
    if (result5 == 0) {
      if (result7 == 0) {
        console.log(num, "is a multiple of 5 and 7.");
      } else {
        console.log(num, "is a multiple of 5.");
      }
    } else {
      result7 == 0
        ? console.log(num, "is a multiple of 7.")
        : console.log(num, "is not a multiple of 3, 5 or 7.");
    }
    break;
}
