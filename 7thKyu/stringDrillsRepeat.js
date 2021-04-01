/*Write a function named repeater() that takes two arguments (a string and a number), and returns a new string where the input string is repeated that many times.

Example:
Repeater.repeat("a", 5)
should return

"aaaaa" */

function repeater(string, n) {
  let newString = [];
  for (let i = 1; i <= n; i++) {
    newString.push(string);
  }
  return newString.join("");
}
