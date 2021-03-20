/**
 * Given an array of numbers (in string format), you must return a string. The numbers correspond to the letters of the alphabet in reverse order: a=26, z=1 etc. You should also account for '!', '?' and ' ' that are represented by '27', '28' and '29' respectively.

All inputs will be valid.
 */

function switcher(x) {
  let alphabet = [
    " ",
    "?",
    "!",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  alphabet.reverse();
  let finalArr = [];
  x.forEach((item, index) =>
    alphabet.forEach((item2, index2) => {
      if (Number(item) === Number(index2 + 1)) {
        finalArr.push(item2);
      }
    })
  );
  return finalArr.join("");
}
