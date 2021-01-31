/*Introduction
There is a war and nobody knows - the alphabet war!
There are two groups of hostile letters. The tension between left side letters and right side letters was too high and the war began.

Task
Write a function that accepts fight string consists of only small letters and return who wins the fight. When the left side wins return Left side wins!, when the right side wins return Right side wins!, in other case return Let's fight again!.

The left side letters and their power:

 w - 4
 p - 3
 b - 2
 s - 1
The right side letters and their power:

 m - 4
 q - 3
 d - 2
 z - 1
The other letters don't have power and are only victims.

Example
alphabetWar("z");        //=> Right side wins!
alphabetWar("zdqmwpbs"); //=> Let's fight again!
alphabetWar("zzzzs");    //=> Right side wins!
alphabetWar("wwwwwwz");  //=> Left side wins!
Alphabet war Collection
Alphavet war
Alphabet war - airstrike - letters massacre
Alphabet wars - reinforces massacre
Alphabet wars - nuclear strike
Alphabet war - Wo lo loooooo priests join the war
*/

function alphabetWar(fight) {
  let counterRight = 0;
  let counterLeft = 0;
  let result;

  for (let i = 0; i < fight.length; i++) {
    if (fight[i] === "w") {
      counterLeft += 4;
    } else if (fight[i] === "p") {
      counterLeft += 3;
    } else if (fight[i] === "b") {
      counterLeft += 2;
    } else if (fight[i] === "s") {
      counterLeft += 1;
    } else if (fight[i] === "m") {
      counterRight += 4;
    } else if (fight[i] === "q") {
      counterRight += 3;
    } else if (fight[i] === "d") {
      counterRight += 2;
    } else if (fight[i] === "z") {
      counterRight += 1;
    } else {
      console.log(fight[i]);
    }
    result = counterLeft - counterRight;
  }
  return result > 0
    ? "Left side wins!"
    : result < 0
    ? "Right side wins!"
    : "Let's fight again!";
}
