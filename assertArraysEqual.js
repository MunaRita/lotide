// FUNCTION IMPLEMENTATION

////commnted codes below are before refoctoring to use modules
// const eqArrays = function(arr1,arr2) {
//   if(arr1.length !== arr2.length) {
//     return false;
//   }
//   for(let i = 0; i < arr1.length; i++) {
//     if(arr1[i] !== arr2[i]) {
//       return false;
//     }
//   }
//   return true;
// }
const eqArrays = require('./eqArrays');

const assertArraysEqual = function(actual,expected) {
  if (eqArrays(actual,expected)) {
    console.log(`✅✅✅ Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
  }

// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`✅✅✅ Assertion passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
//   }

// };

// assertArraysEqual([1, 2, 3], [1, 2, 3]); // => true
// assertArraysEqual([1, 2, 3], [3, 2, 1]); // => false

// assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); // => true
// assertArraysEqual(["1", "2", "3"], ["1", "2", 3]); // => false

module.exports = assertArraysEqual;