const countLetters = function(str) {
  let letterCount = {};
  for (let letters of str) {
    if (letterCount[letters] === undefined) {
      letterCount[letters] = 0;
    }

    letterCount[letters] += 1;
    delete letterCount[" "];
    
  }
  return letterCount;

};



module.exports = countLetters;