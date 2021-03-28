/*Gordon Ramsay shouts. He shouts and swears. There may be something wrong with him.

Anyway, you will be given a string of four words. Your job is to turn them in to Gordon language.

Rules:

Obviously the words should be Caps, Every word should end with '!!!!', Any letter 'a' or 'A' should become '@', Any other vowel should become '*'. */

function gordon(a) {
  let arr = a.split("");
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "a" || arr[i] === "A") {
      arr.splice(i, 1, "@");
    } else if (
      arr[i] === "e" ||
      arr[i] === "i" ||
      arr[i] === "o" ||
      arr[i] === "u"
    ) {
      arr.splice(i, 1, "*");
    }
  }
  let newArr = arr.join("").split(" ");
  let arrF = newArr.map((item) => item.toUpperCase().concat("!!!!"));
  return arrF.join(" ");
}
