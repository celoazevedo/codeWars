// Given a string, turn each character into its ASCII character code and join them together to create a number - let's call this number total1:

// 'ABC' --> 'A' = 65, 'B' = 66, 'C' = 67 --> 656667
// Then replace any incidence of the number 7 with the number 1, and call this number 'total2':

// total1 = 656667
//               ^
// total2 = 656661
//               ^
// Then return the difference between the sum of the digits in total1 and total2:

//   (6 + 5 + 6 + 6 + 6 + 7)
// - (6 + 5 + 6 + 6 + 6 + 1)
// -------------------------
//                        6

function calc(x) {
  let asciiArr = [];
  for (let i = 0; i < x.length; i++) {
    asciiArr.push(x.charCodeAt(i));
  }
  let joinedArr1 = asciiArr.join("");
  let splittedArr1 = joinedArr1.split("");
  let splittedArr2 = joinedArr1.split("");
  for (let j = 0; j < splittedArr2.length; j++) {
    splittedArr2[j] = splittedArr2[j].replace("7", "1");
  }
  let arrFinal1 = splittedArr1.map(Number);
  let arrFinal2 = splittedArr2.map(Number);
  let total1 = arrFinal1.reduce((sum, curr) => sum + curr, 0);
  let total2 = arrFinal2.reduce((sum, curr) => sum + curr, 0);
  return total1 - total2;
}
