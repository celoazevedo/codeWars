/*Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid. */

function high(x) {
  let alphabetMap = {};
  for (let i = "a".charCodeAt(), j = 1; i <= "z".charCodeAt(); i++, j++) {
    alphabetMap[i] = j;
  }
  let score = 0;
  let wordArr = x.split(" ");
  console.log(wordArr);
  let highestWord = { word: "", score: 0 };
  wordArr.forEach((word) => {
    let chars = word.split("");
    let sumOfChars = chars.reduce(
      (sum, char) => sum + alphabetMap[char.charCodeAt()],
      0
    );
    if (sumOfChars > highestWord.score) {
      highestWord = { word: word, score: sumOfChars };
    }
  });
  return highestWord.word;
}
