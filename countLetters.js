const countLetters = function(str) {
    let result = {};
    for (let item of str) { 
        
      if(result[item]) {

        result[item]+=1;
       delete result[" "];
      }
      else {
        result[item] = 1; // counts the first item
      }
    }
    return result; 

    }
    


const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }

};
console.log(countLetters('Lighthouse Lab')); // how to make the code count both small and uppercase?

//console.log(assertEqual(countLetters("Lighthouse Labs"),{'L': 1, 'a': 1, 'b': 1}));