/**
 * Complete the solution so that the function will break up camel casing, using a space between words.

Example
"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  ""
 */

// complete the function
function solution(string) {
  let arr = string.split("");
  let newArr = [];
  arr.forEach((item, index) =>
    item === item.toUpperCase() ? newArr.push(` ${item}`) : newArr.push(item)
  );
  return newArr.join("");
}
