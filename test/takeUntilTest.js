const takeUntil = require('../takeUntil');
const assert = require('chai').assert;

describe("#takeUntil", () => {
  it("should return '[ 1, 2, 5, 7, 2 ]' for [1, 2, 5, 7, 2, -1, 2, 4, 5]", () => {
    const num = [1, 2, 5, 7, 2, -1, 2, 4, 5];
    assert.deepEqual(takeUntil(num, x => x < 0), [ 1, 2, 5, 7, 2 ]);

  });
  it("should return [ 'I've', 'been', 'to', 'Hollywood' ] for [\"I've\", \"been\", \"to\", \"Hollywood\", \",\", \"I've\", \"been\", \"to\", \"Redwood\"]", () => {
    const str = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
    assert.deepEqual(takeUntil(str, x => x === ','), [ "I've", 'been', 'to', 'Hollywood' ]);

  });

});


