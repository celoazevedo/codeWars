/*Story
You and a group of friends are earning some extra money in the school holidays by re-painting the numbers on people's letterboxes for a small fee.

Since there are 10 of you in the group each person just concentrates on painting one digit! For example, somebody will paint only the 1's, somebody else will paint only the 2's and so on...

But at the end of the day you realise not everybody did the same amount of work.

To avoid any fights you need to distribute the money fairly. That's where this Kata comes in.

Kata Task
Given the start and end letterbox numbers, write a method to return the frequency of all 10 digits painted.

Example
For start = 125, and end = 132

The letterboxes are

125 = 1, 2, 5
126 = 1, 2, 6
127 = 1, 2, 7
128 = 1, 2, 8
129 = 1, 2, 9
130 = 1, 3, 0
131 = 1, 3, 1
132 = 1, 3, 2
The digit frequencies are:

0 is painted 1 time
1 is painted 9 times
2 is painted 6 times
etc...
and so the method would return [1,9,6,3,0,1,1,1,1,1]

Notes
0 < start <= end
In C, the returned value will be free'd.
 */

var paintLetterboxes = function (start, end) {
  let c1 = 0;
  let c2 = 0;
  let c3 = 0;
  let c4 = 0;
  let c5 = 0;
  let c6 = 0;
  let c7 = 0;
  let c8 = 0;
  let c9 = 0;
  let c0 = 0;
  let numArr = [];
  let indivNumArr = [];
  for (let i = start; i <= end; i++) {
    numArr.push(i);
  }
  let splitArr = numArr.join("").split("");
  for (let x of splitArr) {
    if (x === "1") {
      c1 += 1;
    } else if (x === "2") {
      c2 += 1;
    } else if (x === "3") {
      c3 += 1;
    } else if (x === "4") {
      c4 += 1;
    } else if (x === "5") {
      c5 += 1;
    } else if (x === "6") {
      c6 += 1;
    } else if (x === "7") {
      c7 += 1;
    } else if (x === "8") {
      c8 += 1;
    } else if (x === "9") {
      c9 += 1;
    } else {
      c0 += 1;
    }
  }
  return [c0, c1, c2, c3, c4, c5, c6, c7, c8, c9];
};
