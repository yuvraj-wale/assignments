/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

// --> first-attempt (brute-force)
function findLargestElement(numbers) {
    let highest = Number.MAX_VALUE * -1;
    if (numbers.length==0) {
        return undefined;
    }
    for (let i=0; i<numbers.length; i++) {
        if (numbers[i]>highest) {
            highest=numbers[i];
        }
    }
    return highest;
}

// function main() {
//     console.log(findLargestElement([-20,-10,-40,-60]));
// }

// if (require.main === module) {
//     main();
// }

module.exports = findLargestElement;