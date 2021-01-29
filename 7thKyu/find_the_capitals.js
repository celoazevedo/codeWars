// Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

var capitals = function (word) {
  let arr = [];
  for (let letter of word) {
    if (letter !== letter.toUpperCase()) {
    } else {
      arr.push(word.indexOf(letter));
    }
  }
  return arr;
};
