/*Given an array of numbers, return a string made up of four parts:

a four character 'word', made up of the characters derived from the first two and last two numbers in the array. order should be as read left to right (first, second, second last, last),

the same as above, post sorting the array into ascending order,

the same as above, post sorting the array into descending order,

the same as above, post converting the array into ASCII characters and sorting alphabetically.

The four parts should form a single string, each part separated by a hyphen (-).

Example format of solution: "asdf-tyui-ujng-wedg" */

function sortTransform(a) {
  let firstPart = a.map((item) => String.fromCharCode(item));
  let firstWord = `${firstPart[0]}${firstPart[1]}${
    firstPart[firstPart.length - 2]
  }${firstPart[firstPart.length - 1]}`;
  let secondPart = firstPart.sort();
  let secondWord = `${secondPart[0]}${secondPart[1]}${
    secondPart[secondPart.length - 2]
  }${secondPart[secondPart.length - 1]}`;
  let thirdPart = secondPart.reverse();
  let thirdWord = `${thirdPart[0]}${thirdPart[1]}${
    thirdPart[thirdPart.length - 2]
  }${thirdPart[thirdPart.length - 1]}`;
  let fourthPart = thirdPart.map((item) => item.charCodeAt());
  let fourthSorted = fourthPart.sort((a, b) => a - b);
  let fourthWord = `${String.fromCharCode(fourthPart[0])}${String.fromCharCode(
    fourthPart[1]
  )}${String.fromCharCode(
    fourthPart[fourthPart.length - 2]
  )}${String.fromCharCode(fourthPart[fourthPart.length - 1])}`;
  return `${firstWord}-${secondWord}-${thirdWord}-${fourthWord}`;
}
