/* You will be given two inputs: a string of words and a letter. For each string, return the alphabetic character after every instance of letter(case insensitive).

If there is a number, punctuation or underscore following the letter, it should not be returned.*/

function comes_after(str, l) {
  let arr = [];
  for (let i = 0; i < str.length; i++) {
    if (
      (str[i] === l.toUpperCase() || str[i] === l.toLowerCase()) &&
      str[i + 1] !== "." &&
      str[i + 1] !== " " &&
      str[i + 1] !== "!" &&
      str[i + 1] !== "_"
    ) {
      arr.push(str[i + 1]);
    }
  }
  for (let j = 0; j <= arr.length; j++) {
    if (
      arr[j] === "0" ||
      arr[j] === "1" ||
      arr[j] === "2" ||
      arr[j] === "3" ||
      arr[j] === "4" ||
      arr[j] === "5" ||
      arr[j] === "6" ||
      arr[j] === "7" ||
      arr[j] === "8" ||
      arr[j] === "9"
    ) {
      arr.splice(j, 1);
      j--;
    }
  }
  return arr.join("");
}
