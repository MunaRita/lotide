const without = function(source, itemsToremove) {
  let arr = [];
  for (let item of source) {
    if (!itemsToremove.includes(item)) {
      arr.push(item);
    }
      
  }
  
  return arr;
};


module.exports = without;
