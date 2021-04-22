/**
 * Given a sequence of integers, return the sum of all the integers that have an even index, multiplied by the integer at the last index.

If the sequence is empty, you should return 0.
 */

function evenLast(numbers) {
  let evenIndexArr = [];
  numbers.forEach((item, index) =>
    index % 2 === 0 ? evenIndexArr.push(item) : console.log(item)
  );
  let sumEven = evenIndexArr.reduce((a, b) => a + b, 0);
  return evenIndexArr.length > 0 ? sumEven * numbers[numbers.length - 1] : 0;
}
