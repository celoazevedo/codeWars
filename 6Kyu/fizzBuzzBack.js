/**
 *Traditionally in FizzBuzz, multiples of 3 are replaced by "Fizz" and multiples of 5 are replaced by "Buzz". But we could also play FizzBuzz with any other integer pair [n, m] whose multiples are replaced with Fizz and Buzz.

For a sequence of numbers, Fizzes, Buzzes and FizzBuzzes, find the numbers whose multiples are being replaced by Fizz and Buzz. Return them as an array [n, m]

The Fizz and Buzz numbers will always be integers between 1 and 50, and the sequence will have a maximum length of 100. The Fizz and Buzz numbers might be equal, and might be equal to 1.

Examples
Classic FizzBuzz; multiples of 3 are replaced by Fizz, multiples of 5 are replaced by Buzz:
[1, 2, "Fizz", 4, "Buzz", 6]  ==>  [3, 5] 
Multiples of 2 are replaced by Fizz, multiples of 3 are replaced by Buzz:
[1, "Fizz", "Buzz", "Fizz", 5, "FizzBuzz"]  ==>  [2, 3]
Multiples of 2 are replaced by Fizz and Buzz:
[1, "FizzBuzz", 3, "FizzBuzz", 5, "FizzBuzz"]  ==>  [2, 2]
Fizz = 1, Buzz = 6:
["Fizz", "Fizz", "Fizz", "Fizz", "Fizz", "FizzBuzz"]  ==>  [1, 6]
 */

function reverseFizzBuzz(array) {
  let final = [];
  let arrFizzBuzz = [];
  let arrFizz = [];
  let arrBuzz = [];
  array.forEach((item, index) =>
    item === "FizzBuzz"
      ? arrFizzBuzz.push(index + 1)
      : item === "Fizz"
      ? arrFizz.push(index + 1)
      : item === "Buzz"
      ? arrBuzz.push(index + 1)
      : item
  );
  if (arrFizzBuzz.length == 0 && arrBuzz.length > 0 && arrFizz.length > 0) {
    final.push(arrFizz[0]);
    final.push(arrBuzz[0]);
  } else if (arrFizzBuzz.length > 0 && (arrBuzz.length == 0) & (arrFizz == 0)) {
    final.push(arrFizzBuzz[0], arrFizzBuzz[0]);
  } else if (
    arrFizzBuzz.length > 0 &&
    arrBuzz.length > 0 &&
    arrFizz.length > 0
  ) {
    final.push(arrFizz[0]);
    final.push(arrBuzz[0]);
  } else if (
    arrFizzBuzz.length > 0 &&
    arrBuzz.length == 0 &&
    arrFizz.length > 0
  ) {
    final.push(arrFizz[0]);
    final.push(arrFizzBuzz[0]);
  } else if (
    arrFizzBuzz.length > 0 &&
    arrBuzz.length > 0 &&
    arrFizz.length == 0
  ) {
    final.push(arrFizzBuzz[0]);
    final.push(arrBuzz[0]);
  }
  return final;
}
