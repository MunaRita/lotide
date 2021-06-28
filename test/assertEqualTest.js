// TEST CODE of assertEqual using chai
const assert = require('chai').assert;

describe("#assertEqual", () => {
  it("returns ✅✅✅ Assertion passed: Bootcamp === Bootcamp", () => {
    assert.equal("Bootcamp", "Bootcamp");
  });
  
  it("returns ✅✅✅ Assertion passed: 1 === 1", () => {
    assert.equal(1, 1);
   
  });

  it("returns ❌❌❌ Assertion Failed: Lighthouse Labs !== Bootcamp", () => {
    assert.notEqual("Lighthouse Labs", "Bootcamp");
  });

  it("returns ❌❌❌ Assertion Failed: 1 !== 2", () => {
    assert.notEqual(1, 2);
  });

});


