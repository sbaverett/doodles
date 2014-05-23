/* jshint node: true */
'use strict'

var partial = function(fn, arg1) {
	return function(arg2) {
		return fn(arg1, arg2);
	};
};


var greet = function(greeting, name) { 
	return greeting + ' ' + name;
};
var hi = partial(greet, 'hi');
console.log(hi('alice'));
