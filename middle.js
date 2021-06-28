// Implement function to find middle value of an array 
  const middle = function(array) {
    let middlevalue = Math.floor(array.length/2);
    if(array.length <= 2) {
      return [];
    }
    if(array.length % 2 === 0) {
      return [array[middlevalue -1], array[middlevalue]];
    }
    return [array[middlevalue]];
  }

  module.exports = middle;