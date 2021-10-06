
/* A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation. */



function isPangram(string) {
  let arr = string
    .split("")
    .map((item) => item.toLowerCase())
    .filter(
      (item) =>
        item !== " " &&
        item !== "." &&
        item !== "," &&
        Number.isNaN(parseInt(item))
    );
  let onlyUniques = [...new Set(arr)];
  return onlyUniques.length === 26 ? true : false;
}
