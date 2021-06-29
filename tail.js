const tail = function(actual) {
  let arr = [];
  if (actual.length > 1) {
    arr = actual.slice(1);
  }
  return arr;
};

module.exports = tail;