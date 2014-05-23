var _ = require('./array-functions');

var fruits = ['apples', 'oranges', 'bananas'];

_.each(fruits, function(fruit) {
	console.log("I need to purchase " + fruit + ".")
});