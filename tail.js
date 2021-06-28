const assertEqual = require('./assertEqual');

const tail = function(actual) {
  if (actual.length > 1) {
    return actual.slice(1);
  }

};
// check if the code prints out the expected
//console.log(tail(["Hello", "Lighthouse", "Labs"]));


//// commented out below is code before refactoring
// const assertEqual = function(actual, expected) {

//   for (let i = 0; i < actual.length; i++) {
//     if (actual[i] !== expected[i]) {
//       console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
//       return false;
//     }
    
//   }
//   console.log(`✅✅✅ Assertion passed: ${actual} === ${expected}`);
//   return true;
// };
// Test Case: Check the original array
// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words); // no need to capture the return value since we are not checking it
// assertEqual(words.length, 3);

// console.log(`✅✅✅ Assertion passed: ${actual} === ${expected}`);
//   } else {
//   console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
// }

// };

// assertEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Light", "Labs"]);

module.exports = tail;