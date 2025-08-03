const fibonacci = function(n) {
  // 1 1 2 3 5 8 13 ...
  if (typeof n == "string") {
    n = parseInt(n);
    // console.log(n)
  }
  if (n === 0 || n === 1) return n;
  if (n < 0){
    return "OOPS"
  }

  idx = n - 1;
  if (idx <= 3) {
    return idx
  } 
  let [ one, two ] = [ 1, 1 ]
  for (let i = 2; i < idx + 1; i++){
    let temp = one + two;
    one = two;
    two = temp;
  }
  return two;
};

// Do not edit below this line
module.exports = fibonacci;
