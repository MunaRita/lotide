const assert = require('chai').assert;

describe("#assertArraysEqual", () => {
  it("returns ✅✅✅ Assertion passed: [1, 2, 3] === [1, 2, 3]", () => {
    assert.deepEqual([1, 2, 3], [1, 2, 3]);  // => true
  });

  it("returns ❌❌❌ Assertion Failed: [1, 2, 3] !== [3, 2, 1]", () => {
    assert.notStrictEqual([1, 2, 3], [3, 2, 1]); // => false
  });

  it("returns ✅✅✅ Assertion passed: [\"1\", \"2\", \"3\"] === [\"1\", \"2\", \"3\"]", () => {
    assert.deepEqual(["1", "2", "3"], ["1", "2", "3"]); // => true
  });

  it("returns ❌❌❌ Assertion Failed: [\"1\", \"2\", \"3\"] !== [\"1\", \"2\", 3]", () => {
    assert.notStrictEqual(["1", "2", "3"], ["1", "2", 3]);  // => false
  });

});