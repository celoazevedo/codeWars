/** Given a mixed array of number and string representations of integers, add up the string integers and subtract this from the total of the non-string integers.

Return as a number.*/

function divCon(x) {
  console.log(x);
  let strings = x.filter((item) => typeof item === "string");
  let sumStrings = strings.reduce((sum, curr) => sum + Number(curr), 0);
  let numbers = x.filter((item) => typeof item === "number");
  let sumNumbers = numbers.reduce((sum, curr) => sum + Number(curr), 0);
  return sumNumbers - sumStrings;
}
