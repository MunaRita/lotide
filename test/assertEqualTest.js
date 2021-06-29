const assert = require('chai').assert;
const assertEqual = require('../assertEqual');

describe("#assertEqual", () => {
  it("returns ✅✅✅ Assertion passed: Bootcamp === Bootcamp", () => {
    assert.equal(assertEqual("Bootcamp", "Bootcamp"));
  });
  
  it("returns ✅✅✅ Assertion passed: 1 === 1", () => {
    assert.equal(assertEqual(1, 1));
   
  });

  it("returns ❌❌❌ Assertion Failed: Lighthouse Labs !== Bootcamp", () => {
    assert.equal(assertEqual("Lighthouse Labs", "Bootcamp"));
  });

  it("returns ❌❌❌ Assertion Failed: 1 !== 2", () => {
    assert.equal(assertEqual(1, 2));
  });

});


