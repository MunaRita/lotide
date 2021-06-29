
const countOnly = function(allItems, itemsTocount) {
  let result = {};
  for (let item of allItems) {
    
    if (itemsTocount[item] === true) {
      console.log(item);

      if (result[item]) {

        result[item] += 1;

      } else {

        result[item] = 1;
      }
    }

  }
    
  return result;
};

module.exports = countOnly;


const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];
  
const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
console.log(result1);
     



