/**
 * Write a function that takes a string and returns an array containing binary numbers equivalent to the ASCII codes of the characters of the string. The binary strings should be eight digits long.

 */

function wordToBin(str) {
  let arr = str.split("");
  let mapped = arr.map((item) => {
    return item.charCodeAt(0).toString(2);
  });
  let formated = [];
  mapped.forEach((item) => {
    formated.push("0" + item);
  });
  return formated;
}
