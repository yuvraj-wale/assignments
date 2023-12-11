/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {

  str = str.toLowerCase();
  str = str.replace(/[^A-Z0-9]/ig, '');
  /* 
  --> regex pattern : /[^A-Z0-9]/ig

      / / => dellimeters
      ^ => The ^ inside the square brackets negates the character class, meaning it matches anything except the specified characters.
      [^A-Z0-9] => is a character class that matches any character that is not an uppercase letter (A-Z) or a digit (0-9).
      i and g are flags:
        i => stands for case-insensitive matching, meaning it will match both uppercase and lowercase letters.
        g => stands for global matching, meaning it will replace all occurrences of the pattern in the string. Without this flag, only the first occurrence would be replaced.

  */

  let x = 0;
  let y = str.length-1;

  while (x<y) {
    if (str[x] != str[y]) {
      return false;
    }
    x++;
    y--;
  }

  return true;
}

// function main() {
//   console.log(isPalindrome("Able, was I ere I saw Elba!"));
// }

// if (require.main === module) {
//   main();
// }

module.exports = isPalindrome;
