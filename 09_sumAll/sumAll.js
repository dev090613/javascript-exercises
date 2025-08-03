const sumAll = function(srt, end) {
  if ( !Number.isInteger(srt) || !Number.isInteger(end)  
    || srt < 0 || end < 0 ) {
    return 'ERROR'
  } 

  if (end < srt) {
    [ srt, end ] = [ end, srt ]
  }

  let result = 0;
  for (let i = srt; i <= end; i++) {
    result += i;
  }

  return result;
};

// Do not edit below this line
module.exports = sumAll;
