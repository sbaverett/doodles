var _ = require('./array-functions');

var people = ['Bob', 'Joe', 'Phil'];

_.each(people, function(person) {
	console.log("I need to talk to " + person + ".")
});