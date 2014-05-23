filter = function(array, fn) {
	var result = [];
  array.forEach(function(item) {
  	if (fn(item) === true) {
    result.push(item);
  	}
  });
  return result;
};

var numbers = [1, 2, 3, 4, 5, 6];
var even = filter(numbers, function(n) { return (n % 2) === 0; });
var odd = filter(numbers, function(n) { return (n % 2) !== 0; });

console.log(even, odd);