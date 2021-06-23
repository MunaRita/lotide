const without = function(source, itemsToremove) {
  let arr = []; // empty array to be populated with our new source after itemsToremove has been removed
  for (let item of source) {
      if(!itemsToremove.includes(item)) {
        arr.push(item);
      }
      
    }
  
  return arr;
}

console.log(without([1, 2, 3], [1]))// => [2, 3]

console.log(without(["1", "2", "3"], [1, 2, "3"])) // => ["1", "2"]
const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"]));
