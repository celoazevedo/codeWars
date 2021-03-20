/*
Move every letter in the provided string forward 10 letters through the alphabet.

If it goes past 'z', start again at 'a'.

Input will be a string with length > 0.
 */

function moveTen(s) {
  const n = 10;
  let alphabet = [
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
  let stringAlph = alphabet.join("");
  let i,
    pos,
    res = "";
  for (i = 0; i < s.length; i++) {
    pos = alphabet.indexOf(s[i]);
    res += alphabet[(pos + n) % alphabet.length];
  }
  return res;
}
