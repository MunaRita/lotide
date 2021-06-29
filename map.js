const words = ["ground", "control", "to", "major", "tom"];
const map = function(array, callback) {
  const results = [];
  for (let arr of array) {
    results.push(callback(arr));
  }
  return results;
};

const results1 = map(words, word => word[0]);
console.log(results1);


module.exports = map;