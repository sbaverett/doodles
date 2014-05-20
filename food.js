//starting with Whitney's each, I used it
//to iterate my array called food using item

var each = function(array, fn) {
  var continueIterating = function(array, n, fn) {
    if (n < array.length) {
      fn(array[n]);
      continueIterating(array, n+1, fn);
    }
  };
  continueIterating(array, 0, fn);
};

var food = ['egg', 'meat', 'bread'];
	each(food, function(item) {
	// console.log(item);

//now I want to see if I can use map to change the array

var foods = (food);
	console.log(item+"s");
});


// var pluralize = require('./pluralize.js');
//  pluralize.map([1,2,3], function(n) {
//  console.log(n);
//  });
 //=> [1, 4, 9]
