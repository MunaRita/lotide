const letterPositions = function(sentence) {
  const results = {};
  //const sentence = sen.toLowerCase();
  for (let i = 0; i < sentence.length; i++) {
    if (!sentence[i].match(" ")) {
      if (!results[sentence[i]])
        results[sentence[i]] = [];
      results[sentence[i]].push(i);
    
    }

  }
  return results;

};



module.exports = letterPositions;

