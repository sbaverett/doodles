/* jshint node: true */

'use strict';

// var pairs = [['name', 'JSI'], ['location', { city: 'Portland', 'state': 'OR' }], ['school', 'PCS']];
// _.reduce(pairs, /* your reduce function */);
// //=> { name: 'JSI', location: { city: 'Portland', state: 'OR' }, school: 'PCS' }


var _ = require('lodash');

var pairs = [['name', 'JSI'], ['location', { city: 'Portland', 'state': 'OR' }], ['school', 'PCS']];

var obj = _.reduce(pairs, function(result, pair) {
	// console.log(obj);
	// console.log('break');
	// console.log(pair);	
	var key = pair[0];
	var value = pair[1];
	result[key] = value;
	return result;
}, {});
console.log(obj);


// _.reduce(pairs, reducer) {
// 	var array = _.reduce(pairs, function({}, pair) {
// 	return obj + pair;

// 	}, {};

// };

