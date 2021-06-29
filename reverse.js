const arr = process.argv.slice(2);
const reverse = function(newArr) {
  let arr1 = "";
  for (let i = newArr.length - 1; i >= 0; i--) {
    arr1 = arr1 + newArr[i];
  }
  return arr1;
};

module.exports = reverse;
