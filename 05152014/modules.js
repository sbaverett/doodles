

module.exports.each = function(array, fn) {
  ./array-functions
};

// module.exports = {
//   each: function(array, fn) {
//     // each function definition
//   }
// };


var module;exports.each = function(array, fn) {
  var continueIterating = function(array, n, fn) {
    if (n < array.length) {
      fn(array[n]);
      continueIterating(array, n+1, fn);
    }
  };
  continueIterating(array, 0, fn);
};

