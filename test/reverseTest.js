const reverse = require('../reverse');
const assert = require('chai').assert;

describe('#reverse', () => {
  it('should return "ecudgbh" for hbgduce', () => {
    assert.strictEqual(reverse('hbgduce'), 'ecudgbh');
  });

});