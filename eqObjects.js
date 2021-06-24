const eqObjects = function(object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (let key of keys1) {
    if (object1[key] !== object2[key]) {
      return false;
    }
  }

  return true;
}



const eqArrays = function(arr1,arr2) {
  return Array.isArray(arr1) &&
    Array.isArray(arr2) &&
    arr1.length === arr2.length &&
    arr1.every((val, index) => val === arr2[index]);
}
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }

};

// const object1 = { a: "1", b: "2" };
// const object2 = { b: "2", a: "1" };
// const object3 = { a: "1", b: "2", c: "3" };
// console.log(eqObjects(object1, object3)); // => true


const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
//console.log(eqArrays(eqObjects(cd, dc))); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
//console.log(eqArrays(eqObjects(cd, cd2))); // => false

console.log(assertEqual(eqObjects(cd, cd2), false));
console.log(assertEqual(eqObjects(cd, dc), true));