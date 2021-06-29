const assert = require('chai').assert;
const map = require('../map');

describe('#map', () => {
  it('should return [ "n", "c", "g", "w", "r" ]', () => {
    const words = ["nut", "cat", "go", "world", "red"];
    assert.deepEqual(map(words, word => word[0]), [ "n", "c", "g", "w", "r" ]);
  });
  
});


