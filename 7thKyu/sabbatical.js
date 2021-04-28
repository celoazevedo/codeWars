/**
 * Learning to code around your full time job is taking over your life. You realise that in order to make significant steps quickly, it would help to go to a coding bootcamp in London.

Problem is, many of them cost a fortune, and those that don't still involve a significant amount of time off work - who will pay your mortgage?!

To offset this risk, you decide that rather than leaving work totally, you will request a sabbatical so that you can go back to work post bootcamp and be paid while you look for your next role.

You need to approach your boss. Her decision will be based on three parameters:

val=your value to the organisation
happiness=her happiness level at the time of asking and finally
The numbers of letters from 'sabbatical' that are present in string s.
 */

function sabb(s, val, happiness) {
  let sArr = s.split("");
  let sabatical = ["s", "a", "b", "t", "i", "c", "l"];
  let count = 0;
  for (let i = 0; i < sArr.length; i++) {
    for (let j = 0; j < sabatical.length; j++) {
      if (sArr[i].toLowerCase() === sabatical[j]) {
        count++;
      }
    }
  }
  if (val + happiness + count > 22) {
    return "Sabbatical! Boom!";
  } else {
    return "Back to your desk, boy.";
  }
}

// using nested forEach

// function sabb(x, val, happ){
//     let pointsGathered = 0

//     x.split("").forEach(element => {
//         ['s','a','b','t','i','c','l'].forEach(second => {
//         if (element == second) { ++pointsGathered }
//       })
//     })

//     return pointsGathered + val + happ > 22 ? "Sabbatical! Boom!" : "Back to your desk, boy."
//   }
