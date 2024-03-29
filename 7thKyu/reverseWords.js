/**
 * Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

Examples
"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps"
 */

function reverseWords(str) {
  let arr = str.split(" ");
  let reverseArr = [];
  arr.forEach((item) => reverseArr.push(item.split("").reverse().join("")));
  return reverseArr.join(" ");
}
