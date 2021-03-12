/**Given a string of digits confirm whether the sum of all the individual even digits are greater than the sum of all the indiviudal odd digits. Always a string of numbers will be given.

If the sum of even numbers is greater than the odd numbers return: "Even is greater than Odd"

If the sum of odd numbers is greater than the sum of even numbers return: "Odd is greater than Even"

If the total of both even and odd numbers are identical return: "Even and Odd are the same" */

function evenOrOdd(str) {
  let arr = str.split("");
  let sumEven = arr.reduce(
    (acc, item) =>
      Number(item) % 2 === 0 ? Number(acc) + Number(item) : Number(acc),
    0
  );
  let sumOdd = arr.reduce(
    (acc, item) =>
      Number(item) % 2 !== 0 ? Number(acc) + Number(item) : Number(acc),
    0
  );
  switch (true) {
    case sumEven > sumOdd === true:
      return "Even is greater than Odd";
      break;
    case sumEven < sumOdd === true:
      return "Odd is greater than Even";
      break;
    case (sumEven === sumOdd) === true:
      return "Even and Odd are the same";
  }
}
