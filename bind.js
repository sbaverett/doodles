'use strict';

var fn = function(arg1, arg2, arg3) {
	console.log(fn);
};

fn(1, 2, 3);

// fn.call(undefined, 1, 2, 3);
// fn.apply(undefined, [1, 2, 3]);
