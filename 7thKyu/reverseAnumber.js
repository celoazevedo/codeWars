/*Given a number, write a function to output its reverse digits. (e.g. given 123 the answer is 321)

Numbers should preserve their sign; i.e. a negative number should still be negative when reversed. */

function reverseNumber(n) {
  let nReverse = "";
  let stringInt = n.toString();
  let start = stringInt < 0 ? 1 : 0;
  for (let i = start; i < stringInt.length; i++) {
    nReverse = stringInt[i] + nReverse;
  }
  let number = n < 0 ? "-" + nReverse : nReverse;
  return Number(number);
}
