const repeatString = function(str, cnt) {
  if (cnt < 0) {
    return 'ERROR'
  } else if (cnt === 0) {
    return ''
  }

  let result = ''
  for (let i = 0; i < cnt; i++) {
    result += str;
  }
  return result;
};

// Do not edit below this line
module.exports = repeatString;
