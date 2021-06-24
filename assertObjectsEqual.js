// assertobjectEqual implemented using assertArrayEqual function
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  // Implement me!
  if(!eqObjects(actual,expected)) {
    console.log(`❌❌❌ Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`); 
  } else {
    
    console.log(`✅✅✅ Assertion passed: ${inspect(actual)} === ${inspect(expected)}`);
  }


};
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
  // return Array.isArray(arr1) &&
  //   Array.isArray(arr2) &&
  //   arr1.length === arr2.length &&
  //   arr1.every((val, index) => val === arr2[index]);

}
// eqObject function
const eqObjects = function(object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
  if(keys1.length === keys2.length) {
    for(let key in object1) {
      if(Array.isArray(object1[key]) && Array.isArray(object2[key])) {
        if(!eqArrays(object1[key],object2[key])) {
          return false;
        }
      } else if(object1[key] !== object2[key]) {
        return false;
      }
    }
    return true;
  }
  return false;
  

//   if (keys1.length !== keys2.length) {
//     return false;
//   }

//   for (let key of keys1) {
//     if (object1[key] !== object2[key]) {
//       return false;
//     }
//   }

//   return true;
}

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
eqObjects(ab, ba); // => true

const abc = { a: "1", b: "2", c: "3" };
eqObjects(ab, abc); // => false

// assertObjectsEqual(eqObjects(ab, ba), true);
// assertObjectsEqual(eqObjects(ab, abc), false);
//assertObjectsEqual({ a: "1", b: "2", c: "3" }, { a: "1", b: "2"});
assertObjectsEqual(ab, ba);
