/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  str = str.toLowerCase();
  const vowel_list = ['a','e','i','o','u'];
  let count = 0;
  for (let i=0; i<str.length; i++) {
    if (vowel_list.includes(str[i])) {
      count++;
    }
  }
  return count;
}

// function main() {
//   console.log(countVowels("the quick brown fox"));
// }

// if (require.main === module) {
//   main();
// }

module.exports = countVowels;