/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

// --> first-attempt (brute-force)
function isAnagram(str1, str2) {

  str1=str1.toLowerCase();
  str2=str2.toLowerCase();

  let temp1 = {};
  let temp2 = {};

  if (str1.length != str2.length) {
    return false;
  }

  for (let i=0; i<str1.length; i++) {
    if (str1[i] in temp1){
      temp1[str1[i]]+=1;
    } else {
      temp1[str1[i]]=1;
    }
    if (str2[i] in temp2){
      temp2[str2[i]]+=1;
    } else {
      temp2[str2[i]]=1;
    }
  }
  
  for (let i=0; i<str1.length; i++){
    if(temp1[str1[i]]!=temp2[str1[i]]){
      return false;
    }
  }
  return true;
}

// function main() {
//   // console.log(a);
//   if (isAnagram('raIl safety', 'fairy taLes')) {
//     console.log("it is anagram");
//   } else {
//     console.log("it is not anagram");
//   }
// }

// if (require.main === module) {
//   main();
// }

module.exports = isAnagram;
