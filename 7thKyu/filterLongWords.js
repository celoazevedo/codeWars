/**
 * Write a function filterLongWords that takes a string sentence and an integer n.

Return a list of all words that are longer than n.

Example:

filterLongWords("The quick brown fox jumps over the lazy dog", 4) = ['quick', 'brown', 'jumps']
 */

function filterLongWords(sentence, n) {
  let list = sentence.split(" ").filter((item) => item.length > n);
  return list;
}
