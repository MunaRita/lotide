const findKeyByValue = function(obj,value) {
  
  for (let key of Object.keys(obj)) {
  
    if (obj[key] === value) {
      return key;
    }
    
  }
};

module.exports = findKeyByValue;


