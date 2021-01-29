/*Complete the function that receives as input a string, and produces outputs according to the following table:

Input	Output
"Jabroni"	"Patron Tequila"
"School Counselor"	"Anything with Alcohol"
"Programmer"	"Hipster Craft Beer"
"Bike Gang Member"	"Moonshine"
"Politician"	"Your tax dollars"
"Rapper"	"Cristal"
anything else	"Beer"
Note: anything else is the default case: if the input to the function is not any of the values in the table, then the return value should be "Beer".

Make sure you cover the cases where certain words do not show up with correct capitalization. For example, the input "pOLitiCIaN" should still return "Your tax dollars".
*/

function getDrinkByProfession(param) {
  let input = param.toLowerCase();
  let output;
  switch (input) {
    case "jabroni":
      output = "Patron Tequila";
      console.log(output);
      break;

    case "school counselor":
      output = "Anything with Alcohol";
      console.log(output);
      break;

    case "programmer":
      output = "Hipster Craft Beer";
      break;

    case "bike gang member":
      output = "Moonshine";
      break;

    case "politician":
      output = "Your tax dollars";
      break;

    case "rapper":
      output = "Cristal";
      break;

    default:
      output = "Beer";
  }
  return output;
}
