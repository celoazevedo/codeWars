/**
 * Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]
 */

var moveZeros = function (arr) {
  let countZeros = 0;
  let zeros = [];
  let formatArr = [];
  arr.forEach((item) => (item === 0 ? countZeros++ : item));
  arr.forEach((item) => (item !== 0 ? formatArr.push(item) : -1));
  let arrNew = arr.map((item, index, arr) =>
    item !== 0 ? item : arr.splice(index, 1)
  );
  for (let i = 0; i < countZeros; i++) {
    zeros.push(0);
  }
  return formatArr.concat(zeros);
};
