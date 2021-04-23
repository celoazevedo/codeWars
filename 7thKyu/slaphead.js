/**
 * Being a bald man myself, I know the feeling of needing to keep it clean shaven. Nothing worse that a stray hair waving in the wind.

You will be given a string(x). Clean shaved head is shown as "-" and stray hairs are shown as "/". Your task is to check the head for stray hairs and get rid of them.

You should return the original string, but with any stray hairs removed. Keep count ot them though, as there is a second element you need to return:

0 hairs --> "Clean!"
1 hair --> "Unicorn!"
2 hairs --> "Homer!"
3-5 hairs --> "Careless!"
>5 hairs --> "Hobo!"

So for this head: "------/------" you shoud return:

["-------------", "Unicorn"]
 */

function bald(x) {
  let arr = x.split("");
  let count = 0;
  let shave = "-";
  let final = [];
  arr.forEach((item) =>
    item === "-" ? final.push(item) : item === "/" ? count++ : -1
  );
  final.push(shave.repeat(count));
  let clean = final.join("");
  let answer = [];
  count > 5
    ? answer.push(clean, "Hobo!")
    : count === 0
    ? answer.push(clean, "Clean!")
    : count === 1
    ? answer.push(clean, "Unicorn!")
    : count === 2
    ? answer.push(clean, "Homer!")
    : count >= 3
    ? answer.push(clean, "Careless!")
    : console.log("w");
  return answer;
}

// function bald(x) {
//     const count = x.split('/').length - 1;
//     let look;
//     switch (count) {
//       case 0: look = 'Clean'; break;
//       case 1: look = 'Unicorn'; break;
//       case 2: look = 'Homer'; break;
//       case 3:
//       case 4:
//       case 5: look = 'Careless'; break;
//       default: look = 'Hobo';
//     }
//     return [x.replace(/\//g, '-'), look + '!'];
//   }
