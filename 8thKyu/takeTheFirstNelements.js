/**
Create a method take that accepts a list/array and a number n, and returns a list/array array of the first n elements from the list/array.

If you need help, here's a reference:

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
 */

function take(arr, n) {
  let newArr = [];
  arr.forEach((item, index) => (index < n ? newArr.push(item) : item));
  return newArr;
}
