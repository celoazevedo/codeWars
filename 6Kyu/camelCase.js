/**Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

 */

function toCamelCase(str) {
  let strArr = str.split(/[-_]/);
  let newString = strArr.map((item, index) => {
    if (index === 0) {
      return item;
    } else {
      return item[0].toUpperCase() + item.slice(1);
    }
  });
  return newString.join("");
}
