var each = function(array, fn) {
  var continueIterating = function(array, n, fn) {
    if (n < array.length) {
      fn(array[n]);
      continueIterating(array, n+1, fn);
    }
  };
  continueIterating(array, 0, fn);
};
var newArray = [];
var food = ['egg', 'meat', 'bread'];
each(food, function(item) {
  newArray.push(item+'s');
});
newestArray = newArray.toString();
console.log(newestArray);
