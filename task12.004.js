//12 Given a sentence with missing words and an array of words.
//Replace all ‘_ʼ in a sentence with the words from the array.
let text = "If at _ you donʼt _, try, try _.";
let text1 = ["first", "succeed", "again"];
let arr = [];
let text2 = "";
arr = text.split("");
for (let i = 0, j = 0; i < arr.length, j < text1.length; i++) {
  if (arr[i] === "_") {
    arr[i] = text1[j];
    j++;
  }
}
text2 = arr.join("");
console.log(text2);
