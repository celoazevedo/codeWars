/*
Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

Examples:
a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz*/

function longest(s1, s2) {
  // your code
  let s3 = "";
  s3 = s1 + s2;
  // use the ES6 spread operator
  let s3Arr = [...s3];
  // to filter unique values
  // self.indexOf(v) === i); returns the first instance of every value
  let filteredArr = s3Arr.filter((v, i, self) => self.indexOf(v) === i);
  return filteredArr.sort().join("");
}
