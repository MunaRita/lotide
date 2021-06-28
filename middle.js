// TEST ASSERTION FUNCTIONS
const assertArraysEqual = require("./assertArraysEqual");

//// commented out codes below are before refactoring to use module.
// const eqArrays = function(arr1, arr2) {
//   return Array.isArray(arr1) &&
//     Array.isArray(arr2) &&
//     arr1.length === arr2.length &&
//     arr1.every((val, index) => val === arr2[index]);
// }

// const assertArraysEqual = function(actual,expected) {
//   if (eqArrays(actual,expected)) {
//     console.log(`✅✅✅ Assertion passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
//   }
//   }

  // ACTUAL FUNCTIONS
  const middle = function(array) {
    let middlevalue = Math.floor(array.length/2);
    if(array.length <= 2) {
      return [];
    }
    if(array.length % 2 === 0) {
      return [array[middlevalue -1], array[middlevalue]];
    }
    return [array[middlevalue]];
  }

  
  // assertArraysEqual(middle([1]), []);
  // assertArraysEqual(middle([1, 2]), []);
  // assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); // => [2, 3]
  // assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7]), [4]) // => [4]

  module.exports = middle;