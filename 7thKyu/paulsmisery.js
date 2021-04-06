/*Paul is an excellent coder and sits high on the CW leaderboard. He solves kata like a banshee but would also like to lead a normal life, with other activities. But he just can't stop solving all the kata!!

Given an array (x) you need to calculate the Paul Misery Score. The values are worth the following points:

kata = 5
Petes kata = 10
life = 0
eating = 1
The Misery Score is the total points gained from the array. Once you have the total, return as follows:

<40 = 'Super happy!'
<70 >=40 = 'Happy!'
<100 >=70 = 'Sad!'
=100 = 'Miserable!' */

function paul(x) {
  let points = 0;
  for (let i = 0; i < x.length; i++) {
    if (x[i] == "kata") {
      points += 5;
    } else if (x[i] == "Petes kata") {
      points += 10;
    } else if (x[i] == "life") {
      points;
    } else if (x[i] == "eating") {
      points += 1;
    }
  }
  if (points < 40) {
    return "Super happy!";
  } else if (points < 70) {
    return "Happy!";
  } else if (points < 100) {
    return "Sad!";
  } else return "Miserable!";
}
