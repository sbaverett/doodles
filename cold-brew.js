// run $node cold-brew.js <weight of coffee in pounds>
var coffeeInPounds = process.argv[2];
var water = function(coffee) {
  return Math.round((16 * coffee) * 6.66);
};
console.log('Steep about ' + coffeeInPounds + ' pounds of coursely ground coffee,' 
  + ' in about ' + water(coffeeInPounds) + ' ounces of cold water for 12-18 hours. Filter and chill.');