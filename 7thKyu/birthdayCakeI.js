/**
 * It's your Birthday. Your colleagues buy you a cake. The numbers of candles on the cake is provided (x). Please note this is not reality, and your age can be anywhere up to 1,000. Yes, you would look a mess.

As a surprise, your colleagues have arranged for your friend to hide inside the cake and burst out. They pretend this is for your benefit, but likely it is just because they want to see you fall over covered in cake. Sounds fun!

When your friend jumps out of the cake, he/she will knock some of the candles to the floor. If the number of candles that fall is higher than 70% of total candles (x), the carpet will catch fire.

You will work out the number of candles that will fall from the provided string (y). You must add up the character ASCII code of each even indexed (assume a 0 based indexing) character in y, with the alphabetical position of each odd indexed character in y to give the string a total.

example: 'abc' --> a=97, b=2, c=99 --> y total = 198.

If the carpet catches fire, return 'Fire!', if not, return 'That was close!'.
 */

function cake(x, y) {
  let ascii = [];
  y.split("").forEach((item, index) =>
    index === 0 || index % 2 === 0 ? ascii.push(item.charCodeAt(0)) : item
  );
  let sum = ascii.reduce((a, b) => a + b, 0);
  console.log(ascii, sum);
  let percent = sum / x;
  console.log(Math.round(percent * 100 + Number.EPSILON) / 100);
  let rounded = Math.round(percent * 100 + Number.EPSILON) / 100;
  return rounded.toFixed(1) >= 0.7 ? "Fire!" : "That was close!";
}
