const assert = require('chai').assert;
const assertObjectsEqual = require('../assertObjectsEqual');

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };

describe("#assertObjectsEqual", () => {
  it("returns ✅✅✅ Assertion passed: ab === ba", () => {
    assert.deepEqual(assertObjectsEqual(ab, ba));  // => true
  });

  it("returns ❌❌❌ Assertion Failed: ab !== abc", () => {
    assert.deepEqual(assertObjectsEqual(ab, abc)); // => false
  });

  it("returns ❌❌❌ Assertion Failed: { a: \"1\", b: \"2\", c: \"3\" } !== { a: \"1\", b: \"2\"}", () => {
    assert.deepEqual(assertObjectsEqual({ a: "1", b: "2", c: "3" }, { a: "1", b: "2"})); // => false
  });


});
