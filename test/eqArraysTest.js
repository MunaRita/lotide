const assert = require('chai').assert;
const eqArrays = require('../eqArrays');

describe("#eqArrays", () => {
  it("returns ✅✅✅ Assertion passed: [1, 2, 3] === [1, 2, 3]", () => {   // => true
    assert.isTrue(eqArrays([1, 2, 3], [1, 2, 3]));
  });

  it("returns ✅✅✅ Assertion passed: [\"1\", \"2\", \"3\"] === [\"1\", \"2\", \"3\"]", () => {   // => true
    assert.isTrue(eqArrays(["1", "2", "3"], ["1", "2", "3"]));
  });

  it("returns ❌❌❌ Assertion Failed: [1, 2, 3] !== [3, 2, 1]", () => {    // => false
    assert.isFalse(eqArrays([1, 2, 3], [3, 2, 1]));
  });

  it("returns ❌❌❌ Assertion Failed: [\"1\", \"2\", \"3\"] !== [\"1\", \"2\", 3]]", () => {  // => false
    assert.isFalse(eqArrays(["1", "2", "3"], ["1", "2", 3]));
  });

});
