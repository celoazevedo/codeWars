/**
 * An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

isIsogram("Dermatoglyphics") == true
isIsogram("aba") == false
isIsogram("moOse") == false // -- ignore letter case
 */

function isIsogram(str) {
  let arr = str.split("");
  let lowerCased = arr.map((item) => item.toLowerCase());
  let result = false;
  let set = new Set(lowerCased);
  if (arr.length == set.size) {
    result = true;
  }
  return result;
}
