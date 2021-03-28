/*Task
Given a string str, reverse it omitting all non-alphabetic characters.

Example
For str = "krishan", the output should be "nahsirk".

For str = "ultr53o?n", the output should be "nortlu".

Input/Output
[input] string str

A string consists of lowercase latin letters, digits and symbols.

[output] a string */

function reverseLetter(str) {
  let arr = str.split("");
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].toLowerCase() !== arr[i].toUpperCase()) {
      newArr.push(arr[i]);
    }
  }
  let string = newArr.reverse().join("");
  return string;
}
