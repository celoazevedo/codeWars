/*You will be given an array of objects (associative arrays in PHP) representing data about developers who have signed up to attend the next coding meetup that you are organising.

Your task is to return:

true if at least one Ruby developer has signed up; or
false if there will be no Ruby developers.
For example, given the following input array:


 */

function isRubyComing(list) {
  let devs = list.filter((dev) => {
    return dev.language === "Ruby";
  });
  if (devs.length < 1) {
    return false;
  } else if (devs.length >= 1) {
    return true;
  }
}
