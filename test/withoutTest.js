const without = require('../without');
const assert = require('chai').assert;

describe("#without", () => {
  it("should returns '[2, 3]' for [1, 2, 3]", () => {
    assert.deepEqual(without([1, 2, 3], [1]), [2, 3]);

  });
  it("should returns '['1', '2']' for [\"1\", \"2\", \"3\"], [1, 2, \"3\"]", () => {
    assert.deepEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);

  });
  it("should returns '['hello', 'world']' for [\"hello\", \"world\", \"lighthouse\"]", () => {
    const words = ["hello", "world", "lighthouse"];
    assert.deepEqual(without(words, ["lighthouse"]),["hello", "world"]);

  });

});

