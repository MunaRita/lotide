const assertEqual = require('./assertEqual');

const tail = function(actual) {
  if (actual.length > 1) {
    return actual.slice(actual.length - 1);
  }

};

module.exports = tail;