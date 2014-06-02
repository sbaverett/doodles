/* jshint node: true */
'use strict'

var partial = function(fn, arg1) {
	return function(arg2, arg3) {
		return fn(arg1, arg2, arg3);
	};
};


var greet = function(greeting, firstName, lastName) { 
	return greeting + ' ' + firstName + ' ' + lastName;
};
var hi = partial(greet, 'hi');
var hiWhitney = partial(greet, 'hi', 'Whitney')
console.log(hi('Whitney', 'Young'));
