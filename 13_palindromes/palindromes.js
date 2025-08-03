const palindromes = function (s) {
  lowerAlphaNum = "abcdefghijklmnopqrstuvwxyz0123456789"
  const cleanedArr = s.toLowerCase()
                      .split("")
                      .filter( c => lowerAlphaNum.includes(c) )

  return cleanedArr.join("") === cleanedArr.reverse().join("")
};

// Do not edit below this line
module.exports = palindromes;
