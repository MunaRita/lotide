const assert = require('chai').assert;
const eqObjects = require('../eqObjects');

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cde = { c: "1", d: ["2", 3, 4] };

describe("#eqObjects", () => {
  it("returns ✅✅✅ Assertion passed: ab === ba", () => {   // => true
    assert.isTrue(eqObjects(ab, ba));
  });

  it("returns ✅✅✅ Assertion passed: cd === dc", () => {   // => true
    assert.strictEqual(eqObjects(cd, dc), true);
  });

  it("returns ❌❌❌ Assertion Failed: ab !== abc", () => {    // => false
    assert.isFalse(eqObjects(ab, abc));
  });

  it("returns ❌❌❌ Assertion Failed: dc !== cde", () => {  // => false
    assert.notStrictEqual(eqObjects(dc, cde));
  });

});