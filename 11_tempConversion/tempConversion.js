const convertToCelsius = function(fahrenheit) {
  let temp = (fahrenheit - 32) * 5 / 9
  const celsius = Math.round(temp * 10) / 10
  return celsius;

};

const convertToFahrenheit = function(celsius) {
  let temp = (celsius * 9 / 5 + 32);
  const fahrenheit = Math.round(temp * 10) / 10
  return fahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
