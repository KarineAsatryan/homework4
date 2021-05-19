let sentence = "Keep your friends close, but your enemies closer.";
let arr = [""];
let j = 0;
for (let i = 0; i < sentence.length - 1; i++) {
  if (
    sentence[i] !== " " &&
    sentence[i] !== "," &&
    sentence[i] !== "." &&
    sentence[i] !== "!"
  ) {
    arr[j] += sentence[i];
  } else {
    j++;
    i++;
    arr[j] = sentence[i];
  }
}
console.log(arr);
