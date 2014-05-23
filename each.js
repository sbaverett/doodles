var square = require('./square');
var each = function(array, fn) {
  var continueIterating = function(array, n, fn) {
    if (n < array.length) {
      fn(array[n]);
      continueIterating(array, n+1, fn);
    }
  };
  continueIterating(array, 0, fn);
};

var fruits = [1, 2, 3];
num = square.map(fruits, function(fruit) {
	console.log(num);
}

each(fruits, function(fruit) {
  console.log('before ' + fruit);
});

each(fruits, function(fruit) {
  console.log("after " + fruit);
});

	num = square.map(fruits);
	console.log(num);

