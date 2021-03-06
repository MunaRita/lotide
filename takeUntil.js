const takeUntil = function(array, callback) {
  const newArray = [];
  for (let item of array) {
    if(!callback(item)) { // if callback condition evaluate to true, that's to say x > 0; push item to the new array until true
      //console.log(callback(item));
      newArray.push(item);
    } else {
      return newArray;
    }
      
    }
    
}

const eqArrays = function(arr1,arr2) {
  if(arr1.length !== arr2.length) {
    return false;
  }
  for(let i = 0; i < arr1.length; i++) {
    if(arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}

const assertArraysEqual = function(actual,expected) {
  if (eqArrays(actual,expected)) {
    console.log(`✅✅✅ Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
  }



module.exports = takeUntil;