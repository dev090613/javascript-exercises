const removeFromArray = function(arr, ...num) {
  return arr.filter( (n) => !num.includes(n) )
};

// Do not edit below this line
module.exports = removeFromArray;
